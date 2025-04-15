import type { POI } from "@/types/poi"

// Helper function to deduplicate POIs
function deduplicatePOIs(pois: POI[]): POI[] {
  const uniquePOIs = new Map<string, POI>()

  pois.forEach((poi) => {
    // Create a unique key based on name and coordinates (with some tolerance)
    const roundedLat = Math.round(poi.latitude * 10000) / 10000
    const roundedLng = Math.round(poi.longitude * 10000) / 10000
    const key = `${poi.name.toLowerCase().trim()}_${roundedLat}_${roundedLng}`

    // Only add if not already in the map, or if this one has more details
    if (!uniquePOIs.has(key) || (poi.type === "ev-station" && uniquePOIs.get(key)?.type !== "ev-station")) {
      uniquePOIs.set(key, poi)
    }
  })

  return Array.from(uniquePOIs.values())
}

// Fetch EV charging stations from OpenChargeMap API
async function fetchEVStations(latitude: number, longitude: number, distance = 10): Promise<POI[]> {
  try {
    const response = await fetch(
      `https://api.openchargemap.io/v3/poi/?output=json&latitude=${latitude}&longitude=${longitude}&distance=${distance}&distanceunit=km&maxresults=100`,
      {
        headers: {
          "X-API-Key": process.env.NEXT_PUBLIC_OPEN_CHARGE_MAP_API_KEY || "",
        },
      },
    )

    if (!response.ok) {
      throw new Error(`OpenChargeMap API error: ${response.status}`)
    }

    const data = await response.json()

    return data.map((station: any) => ({
      id: `ocm-${station.ID}`,
      name: station.AddressInfo?.Title || "Unknown Station",
      type: "ev-station",
      latitude: station.AddressInfo?.Latitude,
      longitude: station.AddressInfo?.Longitude,
      address: [
        station.AddressInfo?.AddressLine1,
        station.AddressInfo?.Town,
        station.AddressInfo?.StateOrProvince,
        station.AddressInfo?.Postcode,
      ]
        .filter(Boolean)
        .join(", "),
      connectors: station.Connections?.map((conn: any) => conn.ConnectionType?.Title).filter(Boolean) || [],
      status: station.StatusType?.Title || "Unknown",
      source: "openchargemap",
    }))
  } catch (error) {
    console.error("Error fetching from OpenChargeMap:", error)
    return []
  }
}

// Fetch POIs from TomTom API
async function fetchTomTomPOIs(latitude: number, longitude: number, category: string, radius = 10000): Promise<POI[]> {
  try {
    const response = await fetch(
      `https://api.tomtom.com/search/2/categorySearch/${category}.json?lat=${latitude}&lon=${longitude}&radius=${radius}&limit=50&key=${process.env.NEXT_PUBLIC_TOMTOM_API_KEY}`,
    )

    if (!response.ok) {
      throw new Error(`TomTom API error: ${response.status}`)
    }

    const data = await response.json()

    // Map TomTom categories to our POI types
    const categoryToType: Record<string, string> = {
      hospital: "hospital",
      restaurant: "restaurant",
      "petrol station": "petrol-station",
      "charging station": "ev-station",
    }

    return data.results.map((poi: any) => {
      // Determine POI type based on category
      let type = "other"
      const poiCategory = poi.poi?.categories?.[0]?.toLowerCase() || ""

      if (poiCategory.includes("hospital") || poiCategory.includes("medical")) {
        type = "hospital"
      } else if (poiCategory.includes("restaurant") || poiCategory.includes("food")) {
        type = "restaurant"
      } else if (poiCategory.includes("petrol") || poiCategory.includes("gas") || poiCategory.includes("cng")) {
        type = "petrol-station"
      } else if (poiCategory.includes("charging") || poiCategory.includes("ev")) {
        type = "ev-station"
      } else {
        type = categoryToType[category] || "other"
      }

      return {
        id: `tomtom-${poi.id}`,
        name: poi.poi?.name || "Unknown Location",
        type,
        latitude: poi.position.lat,
        longitude: poi.position.lon,
        address: poi.address?.freeformAddress || "",
        source: "tomtom",
      }
    })
  } catch (error) {
    console.error(`Error fetching ${category} from TomTom:`, error)
    return []
  }
}

// Fetch POIs from both APIs and combine results
export async function fetchPOIs(
  startCoords: [number, number],
  endCoords?: [number, number],
  route?: any,
): Promise<POI[]> {
  try {
    let searchPoints: [number, number][] = [startCoords]
    let searchRadius = 5 // km

    // If we have a route, create search points along the route
    if (endCoords && route) {
      const routeCoords = route.geometry.coordinates

      // Sample points along the route (start, 25%, 50%, 75%, end)
      if (routeCoords.length > 0) {
        const numPoints = routeCoords.length
        searchPoints = [
          routeCoords[0],
          routeCoords[Math.floor(numPoints * 0.25)],
          routeCoords[Math.floor(numPoints * 0.5)],
          routeCoords[Math.floor(numPoints * 0.75)],
          routeCoords[numPoints - 1],
        ]

        // Adjust search radius based on route length
        const routeLength = route.distance_meters / 1000 // km
        searchRadius = Math.max(3, Math.min(10, routeLength / 10))
      }
    }

    // Fetch POIs for all search points
    const allPOIs: POI[] = []

    for (const [lng, lat] of searchPoints) {
      // Fetch from OpenChargeMap
      const evStations = await fetchEVStations(lat, lng, searchRadius)

      // Fetch from TomTom
      const hospitals = await fetchTomTomPOIs(lat, lng, "hospital", searchRadius * 1000)
      const restaurants = await fetchTomTomPOIs(lat, lng, "restaurant", searchRadius * 1000)
      const petrolStations = await fetchTomTomPOIs(lat, lng, "petrol station", searchRadius * 1000)

      // Also fetch EV stations from TomTom as a backup
      const tomtomEVStations = await fetchTomTomPOIs(lat, lng, "charging station", searchRadius * 1000)

      allPOIs.push(...evStations, ...hospitals, ...restaurants, ...petrolStations, ...tomtomEVStations)
    }

    // Deduplicate POIs
    return deduplicatePOIs(allPOIs)
  } catch (error) {
    console.error("Error fetching POIs:", error)

    // Return mock data as fallback
    return mockPOIs.map((poi) => ({
      ...poi,
      latitude: startCoords[1] + (Math.random() * 0.02 - 0.01),
      longitude: startCoords[0] + (Math.random() * 0.02 - 0.01),
    }))
  }
}

// Calculate a route between two points using Mapbox Directions API
export async function calculateRoute(start: [number, number], end: [number, number]) {
  try {
    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&overview=full&steps=true&access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
    )

    if (!response.ok) {
      throw new Error(`Mapbox Directions API error: ${response.status}`)
    }

    const data = await response.json()

    if (!data.routes || data.routes.length === 0) {
      throw new Error("No route found")
    }

    const route = data.routes[0]

    // Format distance and duration
    const distanceKm = (route.distance / 1000).toFixed(1)
    const durationMin = Math.round(route.duration / 60)
    const hours = Math.floor(durationMin / 60)
    const minutes = durationMin % 60

    const formattedDuration = hours > 0 ? `${hours} hr ${minutes} min` : `${minutes} min`

    return {
      route: {
        type: "Feature",
        geometry: route.geometry,
        properties: {},
      },
      distance: `${distanceKm} km`,
      duration: formattedDuration,
      distance_meters: route.distance,
    }
  } catch (error) {
    console.error("Error calculating route:", error)

    // Fallback to mock route
    const numPoints = 20
    const coordinates = []

    for (let i = 0; i <= numPoints; i++) {
      const ratio = i / numPoints
      coordinates.push([
        start[0] + (end[0] - start[0]) * ratio + (Math.random() - 0.5) * 0.01,
        start[1] + (end[1] - start[1]) * ratio + (Math.random() - 0.5) * 0.01,
      ])
    }

    const distance = `${Math.round(Math.random() * 50 + 10)} km`
    const duration = `${Math.round(Math.random() * 60 + 30)} min`

    return {
      route: {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates,
        },
        properties: {},
      },
      distance,
      duration,
      distance_meters: 10000, // 10 km fallback
    }
  }
}

// Mock data for fallback
const mockPOIs: POI[] = [
  {
    id: "1",
    name: "Downtown EV Charging Hub",
    type: "ev-station",
    latitude: 40.7128,
    longitude: -74.006,
    address: "123 Main St, New York, NY",
    connectors: ["CCS", "CHAdeMO", "Type 2"],
    status: "Available",
    source: "mock",
  },
  {
    id: "2",
    name: "City Hospital",
    type: "hospital",
    latitude: 40.714,
    longitude: -74.005,
    address: "456 Health Ave, New York, NY",
    source: "mock",
  },
  {
    id: "3",
    name: "Green Leaf Restaurant",
    type: "restaurant",
    latitude: 40.715,
    longitude: -74.008,
    address: "789 Food St, New York, NY",
    source: "mock",
  },
  {
    id: "4",
    name: "Central Gas Station",
    type: "petrol-station",
    latitude: 40.713,
    longitude: -74.002,
    address: "321 Fuel Rd, New York, NY",
    source: "mock",
  },
]

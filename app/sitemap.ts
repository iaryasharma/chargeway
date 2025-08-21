import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chargeway.in'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/map`,
      lastModified: new Date(),
      changeFrequency: 'hourly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/help`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    }
  ]

  // You can add dynamic pages here (like individual charging station pages)
  // const dynamicPages = await generateDynamicPages()

  return staticPages
}

// Future implementation for dynamic charging station pages
// async function generateDynamicPages() {
//   // Fetch charging stations from your API/database
//   // const stations = await getChargingStations()
//   
//   // return stations.map(station => ({
//   //   url: `https://chargeway.in/station/${station.id}`,
//   //   lastModified: new Date(station.updatedAt),
//   //   changeFrequency: 'weekly' as const,
//   //   priority: 0.8,
//   // }))
// }

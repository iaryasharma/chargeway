"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Loader2, MapPin } from "lucide-react"

interface LocationSelectorProps {
  mode: "route" | "nearby"
  onLocationSelect: (startLocation: string, endLocation?: string) => void
}

export default function LocationSelector({ mode, onLocationSelect }: LocationSelectorProps) {
  const [startLocation, setStartLocation] = useState("")
  const [endLocation, setEndLocation] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (mode === "route" && startLocation.trim() && endLocation.trim()) {
      setIsLoading(true)
      onLocationSelect(startLocation, endLocation)
    } else if (mode === "nearby" && startLocation.trim()) {
      setIsLoading(true)
      onLocationSelect(startLocation)
    }
  }

  const handleGetCurrentLocation = () => {
    setIsLoading(true)

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          const currentLocation = `${latitude},${longitude}`
          setStartLocation(currentLocation)

          // If in route mode and end location is set, submit the form
          if (mode === "route" && endLocation.trim()) {
            onLocationSelect(currentLocation, endLocation)
          } else if (mode === "nearby") {
            onLocationSelect(currentLocation)
          } else {
            setIsLoading(false)
          }
        },
        (error) => {
          console.error("Error getting location:", error)
          setIsLoading(false)
          alert("Unable to get your current location. Please try entering a location manually.")
        },
      )
    } else {
      setIsLoading(false)
      alert("Geolocation is not supported by your browser. Please try entering a location manually.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          className="flex-shrink-0"
          onClick={handleGetCurrentLocation}
          disabled={isLoading}
        >
          <MapPin className="h-4 w-4 mr-2" />
          Current Location
        </Button>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            type="text"
            placeholder={mode === "route" ? "Enter starting point" : "Enter city or address"}
            className="pl-10"
            value={startLocation}
            onChange={(e) => setStartLocation(e.target.value)}
            required
          />
        </div>
      </div>

      {mode === "route" && (
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            type="text"
            placeholder="Enter destination"
            className="pl-10"
            value={endLocation}
            onChange={(e) => setEndLocation(e.target.value)}
            required
          />
        </div>
      )}

      <Button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700"
        disabled={isLoading || !startLocation.trim() || (mode === "route" && !endLocation.trim())}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {mode === "route" ? "Planning Route..." : "Searching..."}
          </>
        ) : (
          <>{mode === "route" ? "Plan Route" : "Search"}</>
        )}
      </Button>

      <p className="text-xs text-gray-500">
        {mode === "route"
          ? "Enter your starting point and destination to find charging stations along your route."
          : "Enter a city, address, or landmark to find charging stations nearby."}
      </p>
    </form>
  )
}

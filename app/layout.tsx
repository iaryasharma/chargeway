import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chargeway - Find EV Charging Stations",
  description:
    "Locate the nearest electric vehicle charging stations, hospitals, restaurants, and more with our interactive map.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://unpkg.com/lucide@latest" />
      </body>
    </html>
  )
}
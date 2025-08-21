import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { organizationSchema, websiteSchema, webApplicationSchema } from "@/lib/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Chargeway - Find Electric Vehicle Chargers & EV Charging Station Locator India",
    template: "%s | Chargeway - EV Charging Station Finder"
  },
  description: "Find electric vehicle charging stations exclusively across India with Chargeway. Locate public EV chargers, plan routes, and discover charging rental services. Real-time availability for Tesla, CCS, CHAdeMO chargers throughout India.",
  keywords: [
    "electric vehicle charger",
    "EV charger finder", 
    "ev charger rental",
    "electric car charging stations",
    "EV charging station locator",
    "public electric vehicle chargers",
    "Tesla charging stations India",
    "CCS charging points",
    "CHAdeMO chargers near me",
    "electric vehicle infrastructure India",
    "EV route planner",
    "fast charging stations",
    "DC fast chargers",
    "Level 2 charging",
    "public charging network",
    "electric mobility India",
    "green transportation",
    "sustainable travel",
    "zero emission vehicles",
    "plug-in electric vehicles",
    "battery electric vehicles",
    "hybrid electric vehicles",
    "EV charging map",
    "charging station availability",
    "electric vehicle support",
    "clean energy transport",
    "portable charging solutions",
    "temporary charging solutions",
    "emergency charging needs",
    "construction site charging",
    "event charging services",
    "mobile EV chargers",
    "responsive EV platform",
    "mobile-friendly charging finder"
  ],
  authors: [
    { name: "Chargeway Team" },
    { name: "Electric Vehicle Solutions India" }
  ],
  creator: "Chargeway - EV Infrastructure Solutions",
  publisher: "Chargeway India",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://chargeway.in",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://chargeway.in",
    title: "Chargeway - Find Electric Vehicle Chargers & Charging Rental Services India",
    description: "Discover public electric vehicle chargers exclusively across India. Find Tesla, CCS, CHAdeMO charging stations, plan EV routes, and explore upcoming charging rental services with real-time availability throughout India.",
    siteName: "Chargeway",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chargeway - Find Electric Vehicle Chargers Across India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Chargeway - Electric Vehicle Charger Finder & Charging Rental Services India",
    description: "Find public electric vehicle charging stations, plan EV routes, and discover charging rental services exclusively across India with real-time availability.",
    images: ["/twitter-image.png"],
    creator: "@chargeway_in"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        rel: "android-chrome-512x512", 
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  },
  manifest: "/site.webmanifest",
  category: "Transportation Technology",
  classification: "Electric Vehicle Infrastructure",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "HandheldFriendly": "true",
    "MobileOptimized": "width"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Chargeway",
    "applicationCategory": "TransportationApplication",
    "operatingSystem": "Web Browser",
    "description": "Find public electric vehicle chargers exclusively across India with real-time availability, route planning, and upcoming charging rental services for portable and temporary charging solutions throughout the country.",
    "url": "https://chargeway.in",
    "publisher": {
      "@type": "Organization",
      "name": "Chargeway India",
      "url": "https://chargeway.in"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "featureList": [
      "Public EV Charging Station Locator",
      "Real-time Availability Tracking", 
      "Route Planning for Electric Vehicles",
      "Charging Station Reviews and Ratings",
      "Multiple Connector Type Support",
      "Mobile-Responsive Design",
      "Charging Rental Services (Coming Soon)",
      "Portable Charging Solutions",
      "Emergency Charging Support",
      "Cross-Platform Compatibility"
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#10b981" />
        <meta name="color-scheme" content="light" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Enhanced SEO Meta Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        <meta name="language" content="English" />
        <meta name="target" content="India" />
        <meta name="audience" content="India" />
        <meta name="coverage" content="India" />
        <meta name="distribution" content="India" />
        <meta name="rating" content="General" />
        
        {/* Business/Local SEO */}
        <meta name="geo.placename" content="India" />
        <meta name="author" content="Chargeway India" />
        <meta name="contact" content="support@chargeway.in" />
        
        {/* Mobile Optimization */}
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar-style" content="default" />
        
        {/* Performance and Caching */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
        <meta name="expires" content="31536000" />
        
        {/* Social Media and App Store */}
        <meta property="al:web:url" content="https://chargeway.in" />
        <meta name="apple-mobile-web-app-title" content="Chargeway" />
        <meta name="application-name" content="Chargeway" />
        
        {/* Mapbox CSS */}
        <link href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css" rel="stylesheet" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.mapbox.com" />
        
        {/* Icons and Manifest */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="android-chrome-192x192" href="/android-chrome-192x192.png" sizes="192x192" type="image/png" />
        <link rel="android-chrome-512x512" href="/android-chrome-512x512.png" sizes="512x512" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webApplicationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
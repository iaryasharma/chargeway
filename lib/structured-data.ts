export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Chargeway",
  "alternateName": "Chargeway India",
  "description": "India's leading electric vehicle charging station finder and EV infrastructure platform",
  "url": "https://chargeway.in",
  "logo": "https://chargeway.in/logo.png",
  "sameAs": [
    "https://twitter.com/chargeway_in",
    "https://facebook.com/chargeway.india",
    "https://linkedin.com/company/chargeway-india"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "India"
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Chargeway",
  "url": "https://chargeway.in",
  "description": "Find electric vehicle charging stations across India with real-time availability, route planning, and comprehensive EV infrastructure information",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://chargeway.in/map?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Chargeway India"
  }
}

export const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Chargeway - EV Charging Station Finder",
  "applicationCategory": "TransportationApplication",
  "operatingSystem": "Web Browser",
  "description": "Comprehensive electric vehicle charging station locator for India with real-time availability, route planning, and EV charger rental options",
  "url": "https://chargeway.in",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "2547",
    "bestRating": "5"
  },
  "featureList": [
    "Real-time EV charging station availability",
    "Tesla Supercharger locations",
    "CCS and CHAdeMO connector support",
    "EV route planning and navigation",
    "Charging station reviews and ratings",
    "EV charger rental options",
    "Multi-language support",
    "Mobile-responsive design"
  ]
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I find EV charging stations near me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use Chargeway's interactive map to locate the nearest electric vehicle charging stations. Simply enter your location or allow GPS access to see real-time availability of Tesla Superchargers, CCS, CHAdeMO, and other charging options."
      }
    },
    {
      "@type": "Question", 
      "name": "What types of EV chargers does Chargeway support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chargeway supports all major charging standards including Tesla Superchargers, CCS Combo (Combined Charging System), CHAdeMO, Type 2 AC chargers, DC Fast Chargers, and Level 2 charging stations across India."
      }
    },
    {
      "@type": "Question",
      "name": "Can I rent EV chargers through Chargeway?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Chargeway offers EV charger rental options for temporary charging needs. You can find portable chargers and temporary charging solutions through our platform for events, construction sites, or temporary installations."
      }
    },
    {
      "@type": "Question",
      "name": "Is Chargeway available across all of India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chargeway covers major cities across India including Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, and many more. We continuously expand our network to provide comprehensive EV charging infrastructure information nationwide."
      }
    }
  ]
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Chargeway India",
  "description": "Leading electric vehicle charging station finder and EV infrastructure platform in India",
  "url": "https://chargeway.in",
  "telephone": "+91-XXXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "India"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "20.5937",
    "longitude": "78.9629"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "Free",
  "serviceArea": {
    "@type": "Country",
    "name": "India"
  }
}

import type { Metadata } from "next"
import Image from "next/image"
import { faqSchema } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "About Chargeway - India's Leading EV Charging Station Finder Platform",
  description: "Learn about Chargeway's mission to revolutionize electric vehicle charging infrastructure in India. Discover how we're making EV charger finder services accessible across the nation.",
  keywords: [
    "about chargeway",
    "EV charging platform India",
    "electric vehicle infrastructure",
    "sustainable transportation",
    "EV charger network",
    "green mobility India"
  ],
  openGraph: {
    title: "About Chargeway - Revolutionizing EV Charging in India",
    description: "Learn about India's most comprehensive electric vehicle charging station finder platform and our mission for sustainable transportation.",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Chargeway
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              India's premier <strong>electric vehicle charger finder</strong> platform, 
              revolutionizing how EV owners discover and access charging infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Chargeway is dedicated to accelerating India's transition to sustainable transportation by making 
                <strong> electric vehicle charging</strong> accessible, reliable, and user-friendly. We believe that 
                widespread adoption of electric vehicles is crucial for reducing carbon emissions and creating a 
                cleaner, greener future for India.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">What We Offer</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We offer you to find publicly available chargers on highways, expressways, cities, and across all locations of any brand within India. Our platform provides comprehensive access to the nation's EV charging infrastructure.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Comprehensive Charging Network</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Tesla Superchargers</strong> across major highways</li>
                    <li>• <strong>CCS fast chargers</strong> in urban centers</li>
                    <li>• <strong>CHAdeMO connectors</strong> for Japanese EVs</li>
                    <li>• Level 2 charging for daily use</li>
                    <li>• DC fast charging for long-distance travel</li>
                    <li>• Highway and expressway charging stations</li>
                    <li>• City-wide public charging points</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Smart Features</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Real-time availability tracking</li>
                    <li>• Intelligent route planning</li>
                    <li>• <strong>EV charger rental</strong> services</li>
                    <li>• User reviews and ratings</li>
                    <li>• 24/7 customer support</li>
                    <li>• Multi-brand charger support</li>
                    <li>• Cross-platform compatibility</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Chargeway?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As India's leading <strong>EV charger finder</strong> platform, we understand the unique challenges 
                faced by electric vehicle owners. Our comprehensive database covers thousands of 
                <strong> charging stations</strong> across major cities including Mumbai, Delhi, Bangalore, 
                Hyderabad, Chennai, and Pune.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're looking for <strong>Tesla charging stations</strong>, need emergency charging, 
                or want to explore <strong>EV charger rental</strong> options, Chargeway provides the most 
                accurate and up-to-date information to keep you moving forward on your electric journey.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Impact</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">50,000+</div>
                  <div className="text-gray-700">EV Drivers Served</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">15,000+</div>
                  <div className="text-gray-700">Charging Stations Mapped</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                  <div className="text-gray-700">Cities Covered</div>
                </div>
              </div>
            </div>

            {/* People Behind Chargeway Section */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">People Behind Chargeway</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Founder */}
                <div className="text-center bg-white p-6 rounded-lg shadow-md">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image 
                      src="/arya.jpg" 
                      alt="Arya Sharma - Founder of Chargeway" 
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <a 
                      href="https://iaryasharma.me" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors duration-200"
                    >
                      Arya Sharma
                    </a>
                  </h3>
                  <p className="text-green-600 font-medium mb-3">Founder</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Passionate about sustainable transportation and electric mobility, Arya founded Chargeway with a vision to make EV charging accessible across India. With expertise in technology and sustainability, he leads the mission to accelerate India's transition to electric vehicles.
                  </p>
                </div>

                {/* Co-founder Vijay */}
                <div className="text-center bg-white p-6 rounded-lg shadow-md">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image 
                      src="/vijay.png" 
                      alt="Vijay Kumar - Co-founder of Chargeway" 
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vijay Kumar</h3>
                  <p className="text-green-600 font-medium mb-3">Co-founder</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Vijay brings technical expertise and innovation to Chargeway's platform development. His commitment to creating user-friendly solutions helps make EV charging more accessible for drivers across India.
                  </p>
                </div>

                {/* Co-founder Vatsal */}
                <div className="text-center bg-white p-6 rounded-lg shadow-md">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image 
                      src="/vatsal.jpg" 
                      alt="Vatsal Sharma - Co-founder of Chargeway" 
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vatsal Sharma</h3>
                  <p className="text-green-600 font-medium mb-3">Co-founder</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Vatsal contributes strategic vision and operational excellence to Chargeway. His focus on expanding India's EV infrastructure network ensures comprehensive coverage for electric vehicle owners nationwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                How do I find EV charging stations near me?
              </h3>
              <p className="text-gray-700">
                Use Chargeway's interactive map to locate the nearest electric vehicle charging stations. 
                Simply enter your location or allow GPS access to see real-time availability of Tesla 
                Superchargers, CCS, CHAdeMO, and other charging options.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                What types of EV chargers does Chargeway support?
              </h3>
              <p className="text-gray-700">
                Chargeway supports all major charging standards including Tesla Superchargers, CCS Combo 
                (Combined Charging System), CHAdeMO, Type 2 AC chargers, DC Fast Chargers, and Level 2 
                charging stations across India.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Can I rent EV chargers through Chargeway?
              </h3>
              <p className="text-gray-700">
                Yes, Chargeway offers EV charger rental options for temporary charging needs. You can find 
                portable chargers and temporary charging solutions through our platform for events, 
                construction sites, or temporary installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </div>
  )
}

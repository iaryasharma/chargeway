import Link from "next/link"
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-green-500" />
              <span className="text-xl font-bold text-white">Chargeway</span>
            </Link>
            <p className="text-sm mb-4">
              Find EV charging stations, hospitals, restaurants, and more with our interactive map.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-green-500 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-green-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-green-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-green-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-green-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-sm">fragnite7717@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-sm">vijaykumar@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Chargeway. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-sm">Built with</span>
            <Heart className="h-5 w-5 text-red-500 animate-pulse" />
            <span className="text-sm">by</span>
            <Link href="https://fragnite.vercel.app/" className="text-sm hover:text-green-500 transition-colors">
              Fragnite
            </Link>
            <span className="text-sm">and</span>
            <Link href="https://github.com/hii-vijayy" className="text-sm hover:text-green-500 transition-colors">
              Vijay
            </Link>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm hover:text-green-500 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:text-green-500 transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-sm hover:text-green-500 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
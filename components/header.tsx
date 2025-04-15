"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold">Chargeway</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link href="#features" className="text-sm font-medium hover:text-green-600 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-green-600 transition-colors">
            How It Works
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-green-600 transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex gap-4">
          <Link href="/map">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-50 bg-white transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col gap-4 p-6">
          <Link
            href="/"
            className="text-lg font-medium p-2 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#features"
            className="text-lg font-medium p-2 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-lg font-medium p-2 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="#about"
            className="text-lg font-medium p-2 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link href="/map" className="mt-4" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

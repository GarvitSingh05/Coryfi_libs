"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Docs", href: "/docs" },
    { name:"Pricing", href:"/pricing"},
    { name: "About Us", href: "/about" },
    
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-800 hover:text-blue-700 px-3 py-2 rounded-md text-md font-sans  font-semibold  transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl md:rounded-none text-sm font-medium transition-colors duration-200 ">
              Try Now
            </button>
            <button
              className="md:hidden ml-4 text-gray-800 hover:text-purple-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
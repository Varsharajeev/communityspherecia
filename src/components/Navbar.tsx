import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent2 grid place-items-center text-white font-bold">C</div>
          <span className="font-semibold">CommunitySphere</span>
        </div>
        <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#features" className="hover:text-primary transition">Features</a>
          <a href="#score" className="hover:text-primary transition">Health Score</a>
          <a href="#resources" className="hover:text-primary transition">Resources</a>
          <a href="#volunteers" className="hover:text-primary transition">Volunteers</a>
          <a href="#impact" className="hover:text-primary transition">Impact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#signin" className="text-sm text-gray-700 hover:text-primary">Sign In</a>
          <button className="hidden sm:inline-block bg-accent text-white px-4 py-2 rounded-full font-semibold shadow hover:scale-105 transition">Get Started</button>
        </div>
      </div>
    </header>
  )
}

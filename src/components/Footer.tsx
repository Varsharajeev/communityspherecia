import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent2 grid place-items-center text-white font-bold">C</div>
          <div>
            <div className="font-semibold">CommunitySphere</div>
            <div className="text-sm text-gray-600">© {new Date().getFullYear()} CommunitySphere</div>
          </div>
        </div>

        <div className="text-sm text-gray-600">Built for local impact. Terms · Privacy</div>
      </div>
    </footer>
  )
}

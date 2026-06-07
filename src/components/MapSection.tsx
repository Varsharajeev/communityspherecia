import React from 'react'

export default function MapSection() {
  return (
    <section id="map" className="mt-12">
      <h3 className="text-2xl font-bold">Live Community Map</h3>
      <p className="text-gray-600">See reports, resources, and events near you.</p>
      <div className="mt-4 rounded-xl overflow-hidden shadow-lg">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=80" alt="map" className="w-full h-64 object-cover" />
      </div>
    </section>
  )
}

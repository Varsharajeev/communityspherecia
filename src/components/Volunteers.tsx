import React from 'react'

export default function Volunteers() {
  return (
    <section id="volunteers" className="mt-12">
      <h3 className="text-2xl font-bold">Volunteer Hub</h3>
      <p className="text-gray-600">Find local volunteer opportunities, organize events, and track participation.</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {["Cleanups","Mentoring","Events"].map((t) => (
          <div key={t} className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-semibold">{t}</h4>
            <p className="text-sm text-gray-600 mt-2">Upcoming: 3 events</p>
            <button className="mt-4 px-4 py-2 rounded-full bg-accent text-white">Join</button>
          </div>
        ))}
      </div>
    </section>
  )
}

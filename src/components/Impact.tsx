import React from 'react'

export default function Impact() {
  return (
    <section id="impact" className="mt-12">
      <h3 className="text-2xl font-bold">Sustainability Impact</h3>
      <p className="text-gray-600">Track collective outcomes across projects and neighborhoods.</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6 shadow">
          <h4 className="font-bold text-3xl">2,340</h4>
          <div className="text-gray-600">Trees Planted</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow">
          <h4 className="font-bold text-3xl">7,200</h4>
          <div className="text-gray-600">Volunteer Hours</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow">
          <h4 className="font-bold text-3xl">1,246</h4>
          <div className="text-gray-600">Issues Resolved</div>
        </div>
      </div>
    </section>
  )
}

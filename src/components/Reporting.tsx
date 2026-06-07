import React from 'react'

export default function Reporting() {
  return (
    <section id="features" className="mt-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Smart Issue Reporting</h3>
          <p className="text-gray-600">Report issues quickly with photos, location tagging, and priority routing to the right local authority.</p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
            <li>One-tap photo reporting</li>
            <li>Automatic location and category detection</li>
            <li>Real-time status updates</li>
          </ul>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1200&q=80" alt="reporting" className="w-full h-64 object-cover" />
        </div>
      </div>
    </section>
  )
}

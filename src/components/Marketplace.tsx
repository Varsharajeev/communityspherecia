import React from 'react'

export default function Marketplace() {
  return (
    <section id="resources" className="mt-12">
      <h3 className="text-2xl font-bold">Resource Sharing Marketplace</h3>
      <p className="text-gray-600">Borrow or lend tools, share space, and exchange items within your neighborhood.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="bg-white rounded-xl p-4 shadow">
            <div className="h-32 bg-gray-100 rounded-md mb-3" />
            <h4 className="font-semibold">Item {i}</h4>
            <p className="text-sm text-gray-600">Short description of the resource.</p>
            <div className="mt-3 flex justify-between items-center">
              <div className="text-sm font-semibold">Free</div>
              <button className="text-accent font-medium">Request</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

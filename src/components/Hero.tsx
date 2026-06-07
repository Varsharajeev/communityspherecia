import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  ['Community Health Score', '94'],
  ['Active Volunteers', '238'],
  ['Issues Resolved', '1,246'],
  ['Trees Planted', '2,340'],
  ['Volunteer Hours', '7,200']
]

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-screen max-h-[980px] flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-white/60 text-sm font-semibold">Smart city • Community</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Communities Thrive When Everyone <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent2">Participates</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">A platform where residents, volunteers, and local authorities collaborate to solve problems, share resources, and create measurable impact.</p>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-full bg-accent text-white font-semibold shadow-lg hover:scale-105 transform transition">Get Started</button>
              <button className="px-6 py-3 rounded-full bg-white border border-gray-200 font-semibold hover:scale-105 transform transition">Explore Community</button>
            </div>
          </div>

          <div className="relative">
            <div className="hero-image rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
              <img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80" alt="aerial community" className="w-full h-[520px] object-cover scale-105" />
            </div>

            <div className="absolute right-12 top-16 grid gap-4">
              {stats.map((s, i) => (
                <motion.div key={s[0]} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 * i }} whileHover={{ scale: 1.03 }} className="glass p-4 rounded-xl min-w-[220px] shadow">
                  <div className="text-sm text-gray-500">{s[0]}</div>
                  <div className="text-2xl font-bold mt-1">{s[1]}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

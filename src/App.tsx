import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Score from './components/Score'
import Reporting from './components/Reporting'
import MapSection from './components/MapSection'
import Marketplace from './components/Marketplace'
import Volunteers from './components/Volunteers'
import Impact from './components/Impact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="max-w-6xl mx-auto px-6 -mt-20">
          <Score />
          <Reporting />
          <MapSection />
          <Marketplace />
          <Volunteers />
          <Impact />
        </div>
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <div className="bg-gradient-to-r from-accent to-accent2 rounded-2xl p-12 text-white text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold">Build Stronger Communities Together</h2>
            <p className="mt-3 text-lg">Transform local challenges into measurable impact.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button className="bg-white text-primary font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transform transition">Join Community</button>
              <button className="bg-white/20 text-white font-semibold px-6 py-3 rounded-full border border-white/30 hover:scale-105 transform transition">Start Making Impact</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

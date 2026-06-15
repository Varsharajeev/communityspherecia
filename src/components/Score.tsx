import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function useCount(elRef: React.RefObject<HTMLDivElement | null>, value: number) {
  useEffect(() => {
    const el = elRef.current
    if (!el) return
    const duration = 1200
    let raf: number
    const startTime = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1)
      const eased = t * (2 - t)
      el.textContent = Math.round(eased * value).toString()
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [elRef, value])
}

export default function Score() {
  const ref = useRef<HTMLDivElement | null>(null)
  const overallRef = useRef<HTMLDivElement | null>(null)

  useCount(overallRef, 94)

  return (
    <section id="score" className="mt-20">
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
        <h3 className="text-xl font-semibold">Community Health Score</h3>
        <div className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-8">
          <motion.div className="w-56 h-56 rounded-full glass flex items-center justify-center flex-col shadow-lg" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
            <div ref={overallRef as any} className="text-5xl font-extrabold">0</div>
            <div className="text-gray-500 mt-1">Overall score</div>
          </motion.div>

          <div className="flex-1 max-w-2xl" ref={ref}>
            {[
              ['Cleanliness', 96],
              ['Water Management', 91],
              ['Waste Management', 89],
              ['Participation', 95],
              ['Events', 98]
            ].map(([k, v]) => (
              <div key={String(k)} className="mb-4">
                <div className="flex justify-between text-sm text-gray-600"><span>{k}</span><span className="font-semibold">{v}%</span></div>
                <div className="w-full bg-gray-200 h-2 rounded mt-2 overflow-hidden">
                  <div className="bg-accent h-2 rounded" style={{ width: `${v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

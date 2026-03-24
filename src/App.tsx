import { useState, useEffect } from 'react'
import { IntervalCalculator } from './components/IntervalCalculator'
import { DaysSupplyCalculator } from './components/DaysSupplyCalculator'
import { ThemeToggle } from './components/ui/ThemeToggle'
import { Footer } from './components/ui/Footer'
import { getThemeCookie, setThemeCookie } from './utility/cookies'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = getThemeCookie()
    return saved ?? window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    setThemeCookie(isDark)
  }, [isDark])

  const [resetKey, setResetKey] = useState(0)

  return (
    <div className="relative max-w-[900px] mx-auto mt-1 md:mt-2 mb-2 px-4 md:px-8 font-sans">
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <h1 className="text-2xl md:text-4xl text-center mb-3 md:mb-4 font-medium" style={{ color: 'var(--accent)' }}>Regnedimsen</h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
        <DaysSupplyCalculator key={`supply-${resetKey}`} />
        <IntervalCalculator key={`interval-${resetKey}`} />
      </div>
      <button
        onClick={() => setResetKey(k => k + 1)}
        className="block mx-auto mt-3 px-6 py-1.5 text-sm font-medium rounded-lg cursor-pointer transition-opacity hover:opacity-80"
        style={{ color: 'var(--accent)', border: '1px solid var(--accent)' }}
      >
        Nulstil
      </button>
      <Footer />
    </div>
  )
}

export default App

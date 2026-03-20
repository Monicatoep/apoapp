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

  return (
    <div className="relative max-w-[900px] mx-auto mt-2 md:mt-4 mb-4 px-4 md:px-8 font-sans">
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <h1 className="text-3xl md:text-5xl text-center mb-6 md:mb-8 font-medium" style={{ color: 'var(--accent)' }}>Regnedimsen</h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
        <DaysSupplyCalculator />
        <IntervalCalculator />
      </div>
      <Footer />
    </div>
  )
}

export default App

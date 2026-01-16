'use client'

import { useState, useEffect } from 'react'
import PerformanceAnalysisProcess from '@/components/PerformanceAnalysisProcess'
import ThemeToggle from '@/components/ThemeToggle'

export default function PerformanceTestingPage() {
  const [theme, setTheme] = useState<'crystal' | 'obsidian'>('crystal')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem('analysta-theme') as 'crystal' | 'obsidian'
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (systemPrefersDark) {
      setTheme('obsidian')
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    if (theme === 'obsidian') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('analysta-theme', theme)
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'crystal' ? 'obsidian' : 'crystal')
  }

  if (!mounted) {
    return null // Prevent flash of unstyled content
  }

  return (
    <>
      <PerformanceAnalysisProcess theme={theme} onToggleTheme={toggleTheme} />
    </>
  )
}

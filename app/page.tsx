'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = ['about', 'projects', 'skills', 'experience', 'contact']

  useEffect(() => {
    const sectionElements = sections.map(section => document.getElementById(section))
    const currentSection = sectionElements.findIndex(
        el => el && el.offsetTop <= scrollY + window.innerHeight / 3
    )
    if (currentSection !== -1) {
      setActiveSection(sections[currentSection])
    }
  }, [scrollY])

  return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header activeSection={activeSection} />
        <main className="container mx-auto px-4 py-16">
          <AnimatePresence>
            <motion.section
                id="about"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
              <About />
            </motion.section>
          </AnimatePresence>
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <motion.div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={() => {
              const nextSectionIndex = (sections.indexOf(activeSection) + 1) % sections.length
              document.getElementById(sections[nextSectionIndex])?.scrollIntoView({ behavior: 'smooth' })
            }}
        >
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </motion.div>
      </div>
  )
}

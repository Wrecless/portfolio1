'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import Link from 'next/link'

interface HeaderProps {
    activeSection: string; // Accept `activeSection` as a prop
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const sections = ['hero', 'about', 'projects', 'skills', 'achievements', 'contact']

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/"
                        className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text"
                    >
                        Bruno Mata
                    </Link>
                </motion.div>
                <motion.ul
                    className="hidden md:flex space-x-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {sections.map((section) => (
                        <li key={section}>
                            <Link
                                href={`#${section}`}
                                className={`capitalize ${
                                    activeSection === section
                                        ? 'text-teal-400'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-teal-400 dark:hover:text-teal-400'
                                }`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                {section === 'hero' ? 'Home' : section}
                            </Link>
                        </li>
                    ))}
                </motion.ul>
                <motion.div
                    className="flex space-x-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a
                        href="https://github.com/Wrecless"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-teal-400 dark:hover:text-teal-400" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/bruno-mata-41364b1b1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                    >
                        <svg
                            role="img"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-teal-400 dark:hover:text-teal-400 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>LinkedIn</title>
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </motion.div>
            </nav>
        </header>
    )
}

export default Header

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'

interface HeaderProps {
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const sections = ['about', 'projects', 'skills', 'experience', 'contact']

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        Bruno Mata
                    </h1>
                </motion.div>
                <motion.ul
                    className="flex space-x-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {sections.map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                className={`capitalize ${
                                    activeSection === section ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {section}
                            </a>
                        </li>
                    ))}
                </motion.ul>
                <motion.div
                    className="flex space-x-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                        <Github className="w-6 h-6 text-gray-400 hover:text-white" />
                    </a>
                    <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 text-gray-400 hover:text-white" />
                    </a>
                    <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-6 h-6 text-gray-400 hover:text-white" />
                    </a>
                </motion.div>
            </nav>
        </header>
    )
}

export default Header
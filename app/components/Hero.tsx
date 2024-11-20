import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'
import { ArrowRight, Download } from 'lucide-react'

const Hero = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <Parallax translateY={['-50px', '50px']}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src="/me.jpg"
                            alt="Bruno Mata"
                            width={400}
                            height={400}
                            className="rounded-full border-4 border-teal-400 shadow-lg"
                        />
                    </motion.div>
                </Parallax>
                <Parallax translateY={['50px', '-50px']}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                            Hi, I am Bruno Mata
                        </h2>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                            Software Engineer and Full-Stack Developer
                        </h3>
                        <p className="text-xl mb-6 text-gray-600 dark:text-gray-400">
                            BSc (Hons) Computer Science graduate with First Class Honours and an award for Digital Innovation.
                        </p>
                        <div className="flex space-x-4">
                            <motion.a
                                href="#projects"
                                className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                View Projects <ArrowRight className="ml-2 w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="/bruno-mata-cv.pdf"
                                className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                download
                            >
                                Download CV <Download className="ml-2 w-5 h-5" />
                            </motion.a>
                        </div>
                    </motion.div>
                </Parallax>
            </div>
        </div>
    )
}

export default Hero
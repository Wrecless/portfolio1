import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="John Doe"
                        width={400}
                        height={400}
                        className="rounded-full border-4 border-blue-400 shadow-lg"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        About Me
                    </h2>
                    <p className="text-xl mb-6">
                        Hi, I'm Bruno Mata, a passionate full-stack developer with expertise in JavaScript, React, Node.js, Python,
                        and database management. I love creating elegant, efficient, and user-friendly web applications that solve
                        real-world problems.
                    </p>
                    <p className="text-xl">
                        With a strong foundation in both frontend technologies, I strive to deliver high-quality,
                        scalable solutions that meet and exceed client expectations.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default About
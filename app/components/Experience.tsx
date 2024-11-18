import { motion } from 'framer-motion'

const experiences = [
    {
        company: 'Tech Innovators Inc.',
        position: 'Senior Full Stack Developer',
        period: 'Jan 2020 - Present',
        description:
            'Led development of multiple high-traffic web applications, implemented microservices architecture, and mentored junior developers.',
    },
    {
        company: 'Digital Solutions LLC',
        position: 'Full Stack Developer',
        period: 'Mar 2017 - Dec 2019',
        description:
            'Developed and maintained various client projects, focusing on responsive design and performance optimization.',
    },
    {
        company: 'StartUp Ventures',
        position: 'Junior Web Developer',
        period: 'Jun 2015 - Feb 2017',
        description: "Assisted in the development of the company's main product, gained experience in agile methodologies and version control.",
    },
]

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <motion.h2
                className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Experience
            </motion.h2>
            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.company}
                        className="bg-gray-800 rounded-lg p-6 shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                        <div className="flex justify-between mb-4">
                            <span className="text-blue-400">{exp.company}</span>
                            <span className="text-gray-400">{exp.period}</span>
                        </div>
                        <p className="text-gray-300">{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Experience
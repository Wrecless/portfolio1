import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
    {
        title: 'Wrekify - Music sharing & streaming platform',
        description: 'Spotify clone with social features, music streaming, and collaborative playlists.',
        image: '/placeholder.svg?height=300&width=400',
        github: 'https://github.com/brunomata/ai-task-manager',
        demo: 'https://ai-task-manager-demo.com',
        tags: ['Next.js', 'Tailwind Css', 'Supabase'],
    },
    {
        title: 'Soul Support - Mental health Self Help',
        description: 'Mental health app that provides self-help tools and resources for mental health.',
        image: '/Soul.png',
        github: 'https://github.com/Wrecless/soul',
        demo: 'https://soulsupport.vercel.app/',
        tags: ['Next.js', 'Tailwind Css', 'Youtube'],
    },
    {
        title: 'Eco-Friendly IoT Home',
        description: 'An IoT solution for smart homes that optimizes energy consumption and promotes sustainable living.',
        image: '/placeholder.svg?height=300&width=400',
        github: 'https://github.com/brunomata/eco-iot-home',
        demo: 'https://eco-iot-home-demo.com',
        tags: ['Python', 'Raspberry Pi', 'MQTT', 'React Native'],
    },
]

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <Parallax translateY={['-50px', '50px']}>
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Projects
                </motion.h2>
            </Parallax>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Parallax key={project.title} translateY={[`${50 + index * 25}px`, `-${50 + index * 25}px`]}>
                        <motion.div
                            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-teal-500 hover:text-teal-600"
                                    >
                                        <Github className="w-5 h-5 mr-2" />
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-blue-500 hover:text-blue-600"
                                    >
                                        <ExternalLink className="w-5 h-5 mr-2" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </Parallax>
                ))}
            </div>
        </section>
    )
}

export default Projects
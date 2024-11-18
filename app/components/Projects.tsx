import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
    {
        title: 'Project 1',
        description: 'A brief description of Project 1 and its key features.',
        image: '/placeholder.svg?height=300&width=400',
        github: 'https://github.com/johndoe/project1',
        demo: 'https://project1-demo.com',
        tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
        title: 'Project 2',
        description: 'A brief description of Project 2 and its key features.',
        image: '/placeholder.svg?height=300&width=400',
        github: 'https://github.com/johndoe/project2',
        demo: 'https://project2-demo.com',
        tags: ['Vue.js', 'Express', 'PostgreSQL'],
    },
    {
        title: 'Project 3',
        description: 'A brief description of Project 3 and its key features.',
        image: '/placeholder.svg?height=300&width=400',
        github: 'https://github.com/johndoe/project3',
        demo: 'https://project3-demo.com',
        tags: ['React Native', 'Firebase', 'GraphQL'],
    },
]

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <motion.h2
                className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                                ))}
                            </div>
                            <div className="flex justify-between">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-blue-400 hover:text-blue-300"
                                >
                                    <Github className="w-5 h-5 mr-2" />
                                    GitHub
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-purple-400 hover:text-purple-300"
                                >
                                    <ExternalLink className="w-5 h-5 mr-2" />
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects
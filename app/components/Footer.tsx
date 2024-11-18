import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 Bruno Mata. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6 text-gray-400 hover:text-white" />
                        </a>
                        <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6 text-gray-400 hover:text-white" />
                        </a>
                        <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-6 h-6 text-gray-400 hover:text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
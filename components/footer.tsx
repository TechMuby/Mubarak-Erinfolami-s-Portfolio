import { Github, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2">Mubarak Erinfolami</h3>
          <p className="text-gray-500 text-sm">© 2025 Mubarak Erinfolami. All rights reserved.</p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/TechMuby"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <Twitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mubarak-erinfolami-409a96256/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/techmuby/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

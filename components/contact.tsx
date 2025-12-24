import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {"Let's collaborate on innovative solutions for sustainability"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <a
            href="mailto:mubarakerinfolami17@gmail.com"
            className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg hover:border-green-500/50 transition-all block"
          >
            <div className="mb-6">
              <Mail className="w-12 h-12 text-green-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Email</h3>
            <p className="text-gray-300 text-lg">mubarakerinfolami17@gmail.com</p>
          </a>

          <a
            href="tel:+2348077060272"
            className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg hover:border-green-500/50 transition-all block"
          >
            <div className="mb-6">
              <Phone className="w-12 h-12 text-green-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Phone</h3>
            <p className="text-gray-300 text-lg">+234 8077 060 272</p>
          </a>

          <a
            href="https://www.linkedin.com/in/mubarak-erinfolami-409a96256/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg hover:border-green-500/50 transition-all block"
          >
            <div className="mb-6">
              <Linkedin className="w-12 h-12 text-green-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4">LinkedIn</h3>
            <p className="text-gray-300 text-lg hover:text-green-500 transition-colors">Connect on LinkedIn</p>
          </a>

          <a
            href="https://github.com/TechMuby"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg hover:border-green-500/50 transition-all block"
          >
            <div className="mb-6">
              <Github className="w-12 h-12 text-green-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4">GitHub</h3>
            <p className="text-gray-300 text-lg hover:text-green-500 transition-colors">View My Projects</p>
          </a>

          <a
            href="https://www.instagram.com/techmuby/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg hover:border-green-500/50 transition-all block md:col-span-2"
          >
            <div className="mb-6">
              <Instagram className="w-12 h-12 text-green-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Instagram</h3>
            <p className="text-gray-300 text-lg hover:text-green-500 transition-colors">Follow @techmuby</p>
          </a>
        </div>
      </div>
    </section>
  )
}

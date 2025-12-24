"use client"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ZoomIn } from "lucide-react"
import { projects } from "@/lib/data"

export function Portfolio() {
  const filteredProjects = projects
  const nonClickableIds = [4, 7, 8]

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight mb-4">
            Awards & Recognition
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Honors received for innovation in engineering and sustainability.
          </p>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const isClickable = !nonClickableIds.includes(project.id)

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative overflow-hidden shadow-xl aspect-[4/3] bg-white ${
                    isClickable ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${isClickable ? "group-hover:scale-110" : ""}`}
                  />

                  {/* Overlay Effect - only for clickable items */}
                  {isClickable && (
                    <Link href={`/project/${project.id}`} className="absolute inset-0 z-20">
                      <span className="sr-only">View project {project.title}</span>
                    </Link>
                  )}

                  {isClickable && (
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-10 pointer-events-none">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">{project.title}</h3>
                        <p className="text-blue-100 text-sm uppercase tracking-widest mb-6">{project.category}</p>
                        <div className="flex justify-center gap-4 pointer-events-auto">
                          <button className="p-3 bg-white text-primary rounded-full hover:bg-black hover:text-white transition-colors">
                            <ZoomIn size={20} />
                          </button>
                          <Link
                            href={`/project/${project.id}`}
                            className="p-3 bg-white text-primary rounded-full hover:bg-black hover:text-white transition-colors flex items-center justify-center"
                          >
                            <ExternalLink size={20} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

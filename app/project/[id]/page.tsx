import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Wrench } from "lucide-react"
import { projects } from "@/lib/data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ImageSlider } from "@/components/image-slider"

// Define the correct type for Page Props in Next.js 15+
type PageProps = {
  params: Promise<{ id: string }>
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params
  const project = projects.find((p) => p.id === Number.parseInt(resolvedParams.id))

  if (!project) {
    notFound()
  }

  const getProjectContent = () => {
    switch (project.id) {
      case 1: // Lagos State
        return {
          sectionTitle: "",
          items: [
            { label: "My Contribution", content: project.fullContent?.contribution },
            { label: "The Result", content: project.fullContent?.result },
          ],
          images: ["/images/whatsapp-20image-202025-10-30-20at-2010.jpeg", "/images/lagos-state-event-banner.jpg"],
        }
      case 2: // Futurize
        return {
          sectionTitle: "The Event",
          items: [
            { label: "The Event", content: project.fullContent?.competition },
            { label: "My Contribution", content: project.fullContent?.contribution },
            { label: "The Result", content: project.fullContent?.result },
          ],
          images: ["/images/futurize-certificate.jpg", "/images/hero-slides/aquavise-demo.jpg"],
        }
      case 3: // Oyo State
        return {
          sectionTitle: "The Event",
          items: [
            { label: "The Event", content: project.fullContent?.competition },
            { label: "My Contribution", content: project.fullContent?.contribution },
            { label: "The Result", content: project.fullContent?.result },
          ],
          images: ["/images/oyo-state-employability-winner.jpg"],
        }
      case 6: // AEIC
        return {
          sectionTitle: "",
          items: [
            { label: "My Contribution", content: project.fullContent?.contribution },
            { label: "The Result", content: project.fullContent?.result },
          ],
          images: ["/images/aeic-2025.jpg", "/images/Grid-Guard-Poster.jpg"],
        }
      case 9: // Automatic Water Pump
        return {
          sectionTitle: "How It Works",
          items: [
            { label: "The System", content: project.fullContent?.competition },
            { label: "My Contribution", content: project.fullContent?.contribution },
            { label: "The Result", content: project.fullContent?.result },
          ],
          images: ["/images/automatic-water-pump-system.jpg"],
        }
      case 10: // Eco-Charge
        return {
          sectionTitle: "Smart Energy Monitoring",
          items: [
            { label: "The System", content: project.fullContent?.competition },
            { label: "My Contribution", content: project.fullContent?.contribution },
            { label: "The Result", content: project.fullContent?.result },
          ],
          images: ["/images/ecocharge-smart-monitoring.jpg"],
        }
      default:
        return {
          sectionTitle: "The Competition:",
          items: [],
          images: [],
        }
    }
  }

  const content = getProjectContent()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full mt-16">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-wider">{project.title}</h1>
            <p className="text-xl md:text-2xl font-light text-gray-300 uppercase tracking-widest">{project.category}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <Link
          href="/#portfolio"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
            </div>

            {content.items.length > 0 && (
              <div>
                {content.sectionTitle && <h2 className="text-2xl font-bold mb-6">{content.sectionTitle}</h2>}
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  {content.items.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{item.label}</h3>
                      <p>{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {content.images.length > 0 && <ImageSlider images={content.images} />}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 rounded-lg sticky top-24">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Project Info</h3>

              <div className="space-y-6">
                {project.details.role && (
                  <div className="flex items-start">
                    <User className="h-5 w-5 text-primary mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-sm uppercase text-gray-500">Role</h4>
                      <p>{project.details.role}</p>
                    </div>
                  </div>
                )}

                {(project.details.organizer || project.details.client) && (
                  <div className="flex items-start">
                    <User className="h-5 w-5 text-primary mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-sm uppercase text-gray-500">
                        {project.details.organizer ? "Organizer" : "Client"}
                      </h4>
                      <p>{project.details.organizer || project.details.client}</p>
                    </div>
                  </div>
                )}

                {project.details.date && (
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-primary mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-sm uppercase text-gray-500">Date</h4>
                      <p>{project.details.date}</p>
                    </div>
                  </div>
                )}

                {project.details.reach && (
                  <div className="flex items-start">
                    <Wrench className="h-5 w-5 text-primary mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-sm uppercase text-gray-500">Reach</h4>
                      <p>{project.details.reach}</p>
                    </div>
                  </div>
                )}

                {project.details.achievement && (
                  <div className="flex items-start">
                    <Wrench className="h-5 w-5 text-primary mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-sm uppercase text-gray-500">Achievement</h4>
                      <p>{project.details.achievement}</p>
                    </div>
                  </div>
                )}

                {project.details.scale && (
                  <div className="flex items-start">
                    <Wrench className="h-5 w-5 text-primary mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-sm uppercase text-gray-500">Scale</h4>
                      <p>{project.details.scale}</p>
                    </div>
                  </div>
                )}

                {project.details.awards && (
                  <div className="flex items-start">
                    <Wrench className="h-5 w-5 text-primary mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-sm uppercase text-gray-500">Awards</h4>
                      <p>{project.details.awards}</p>
                    </div>
                  </div>
                )}

                {project.details.focusAreas && (
                  <div className="flex items-start">
                    <Wrench className="h-5 w-5 text-primary mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-sm uppercase text-gray-500">Focus Areas</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.details.focusAreas.map((area) => (
                          <span key={area} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {project.details.tools && (
                  <div className="flex items-start">
                    <Wrench className="h-5 w-5 text-primary mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-sm uppercase text-gray-500">Tools</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.details.tools.map((tool) => (
                          <span key={tool} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <button className="w-full bg-primary text-white font-bold py-3 px-6 rounded hover:bg-black transition-colors">
                  View Winning Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

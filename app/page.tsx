import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { FeaturedProjects } from "@/components/featured-projects"
import { Portfolio } from "@/components/portfolio"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

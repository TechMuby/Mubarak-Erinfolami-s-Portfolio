"use client"

import { useEffect, useState } from "react"

const heroImages = [
  "/images/hero-slides/climate-team.jpg",
  "/images/hero-slides/aquavise-demo.jpg",
  "/images/hero-slides/aquavise-system.jpeg",
  "/images/hero-slides/power-station.jpeg",
  "/images/hero-slides/presentation.jpg",
  "/images/hero-slides/yoruba-award.jpg",
  "/images/hero-slides/community-work.jpg",
  "/images/hero-slides/icept-award.jpg",
  "/images/hero-slides/climate-team-group.jpg",
  "/images/hero-slides/oyo-winner.jpg",
]

export function Hero() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [delta, setDelta] = useState(100)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(imageInterval)
  }, [])

  useEffect(() => {
    const titles = [
      "Electronics and Electrical Engineer (In View)",
      "British Council (Innovation for African Universities) Ambassador",
      "CAD Designer",
      "Embedded System and IoT Engineer",
      "Tech Innovator",
    ]

    const tick = () => {
      const i = loopNum % titles.length
      const fullText = titles[i]
      const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

      setText(updatedText)

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2)
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true)
        setDelta(2000) // Pause before deleting
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setDelta(100) // Reset typing speed
      } else {
        setDelta(100)
      }
    }

    const ticker = setTimeout(() => {
      tick()
    }, delta)

    return () => clearTimeout(ticker)
  }, [text, delta, loopNum, isDeleting])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 transition-opacity duration-2000 ease-in-out"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: currentImageIndex === index ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl lg:text-6xl mb-12 tracking-tight font-bold font-heading md:text-2xl">
          {"Innovating for a Sustainable Future"}
        </h1>
        <div className="h-12 text-xl md:text-2xl lg:text-3xl font-light text-gray-300">
          <span className="typing-cursor">{text}</span>
        </div>

        <div className="mt-20 flex gap-4 flex-wrap justify-center">
          <a
            href="#portfolio"
            className="px-8 py-3 border-2 border-primary bg-primary text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-full font-light"
          >
            View My Work
          </a>
          <a
            href="/Mubarak-Erinfolami-CV.pdf"
            download
            className="px-8 py-3 border-2 border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-full font-light"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white text-white uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition-all duration-300 rounded-full font-light"
          >
            {"Get In Touch"}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-[26px] h-[42px] border-2 border-white rounded-full relative flex justify-center p-1">
          <div className="w-1 h-1 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}

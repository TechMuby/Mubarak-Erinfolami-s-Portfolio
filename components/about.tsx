import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary z-0" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary z-0" />
              <Image
                src="/images/profile-portrait.jpeg"
                alt="Mubarak Erinfolami - Professional Portrait"
                width={600}
                height={800}
                className="relative z-10 w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight mb-6 font-heading">
              About <span className="text-primary">Me</span>
            </h2>
            <h3 className="text-xl font-light text-gray-500 mb-6 uppercase tracking-wider">
              Embedded Systems & IoT Engineer
            </h3>
            <p className="text-muted-foreground mb-6 leading-loose">
              I am an Embedded Systems &amp; IoT Engineer dedicated to sustainable innovation. My work focuses on
              building practical solutions for energy, water management, and environmental challenges. From smart grids
              to precision agriculture, I use technology to solve real-world problems.
            </p>
            <p className="text-muted-foreground mb-8 leading-loose">
              As a British Council IAU Ambassador and award-winning innovator, I have been recognized at both national
              and international levels for projects like AquaVise—an IoT-based aquaponics system. I combine deep
              technical expertise with a strong commitment to community impact.
            </p>

            {/* Skills Progress */}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-bold text-sm uppercase tracking-wider text-gray-700">{name}</span>
        <span className="text-sm font-bold text-gray-500">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-100 w-full">
        <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}

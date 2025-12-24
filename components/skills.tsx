export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4 text-foreground">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise in embedded systems, IoT development, and CAD design for innovative engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Embedded Systems */}
          <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-foreground">Embedded Systems</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                Arduino
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                ESP32
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                Raspberry Pi
              </li>
            </ul>
          </div>

          {/* Programming */}
          <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-foreground">Programming</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                C/C++
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                Python (Basic)
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                Arduino IDE
              </li>
            </ul>
          </div>

          {/* CAD Design */}
          <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-foreground">CAD Design</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                AutoCAD
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                Proteus
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                Tinkercad
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                KiCad
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-foreground">Tools</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                MATLAB (Basic)
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                PCB Design
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                Circuit Simulation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageSliderProps {
  images: string[]
  title?: string
}

export function ImageSlider({ images, title = "Pictures" }: ImageSliderProps) {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % images.length)
  const prev = () => setCurrent((current - 1 + images.length) % images.length)

  if (!images.length) return null

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="relative">
        {/* Main Image Display */}
        <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={images[current] || "/placeholder.svg"}
            alt={`${title} ${current + 1}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {current + 1} / {images.length}
            </div>
          </>
        )}

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
            {images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`flex-shrink-0 relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === current ? "border-black" : "border-gray-300"
                }`}
              >
                <Image src={image || "/placeholder.svg"} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

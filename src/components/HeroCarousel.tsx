import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookingWidget from './BookingWidget'

// Reliable car images (Unsplash + verified Wikimedia)
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1920&q=80',
    alt: 'Toyota Corolla',
  },
  {
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1920&q=80',
    alt: 'Honda City',
  },
  {
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1920&q=80',
    alt: 'Suzuki Hatchback',
  },
  {
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1920&q=80',
    alt: 'Toyota Fortuner SUV',
  },
  {
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&q=80',
    alt: 'Car Rental',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full overflow-hidden min-h-[520px] lg:min-h-[600px]">
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? 'opacity-100 z-10' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1920&q=80'
              }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 via-violet-800/60 to-transparent z-20" />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[520px] lg:min-h-[600px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 py-12 lg:py-0">
        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Pakistani Used Cars for Rent
          </h1>
          <p className="mt-6 text-white/95 text-lg lg:text-xl max-w-xl">
            Quality Toyota, Honda, and Suzuki vehicles at competitive PKR rates. Sedans, hatchbacks, SUVs, pickups, and vans—all types available in Peshawar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              to="/fleet"
              className="inline-flex justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-smooth hover:scale-[1.02] active:scale-[0.98]"
            >
              View all vehicles
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3.5 rounded-lg border border-white/40 transition-smooth"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0 w-full max-w-md lg:max-w-none lg:w-[360px] xl:w-[400px]">
          <BookingWidget />
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/70 w-2'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-smooth"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-smooth"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

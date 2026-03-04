import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ImageWithFallback from '../components/ImageWithFallback'
import { cars } from '../data/cars'
import { useInView } from '../hooks/useInView'

export default function CarDetailsPage() {
  const { id } = useParams()
  const car = cars.find(c => c.id === Number(id)) || cars[0]
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    setSelectedImage(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])
  const images = car.images || [car.image]
  const { ref, isInView } = useInView(0.1)

  const otherCars = cars.filter(c => c.id !== car.id).slice(0, 6)

  return (
    <>
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{car.name} {car.model && <span className="text-gray-500 font-normal">{car.model}</span>}</h1>
                  <p className="text-gray-500 mt-1">{car.type}</p>
                </div>
                <div className="text-2xl font-bold">
                  <span className="text-violet-600">PKR {car.price.toLocaleString()}</span>
                  <span className="text-gray-500 text-lg font-normal">/day</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100">
                  <ImageWithFallback
                    src={images[selectedImage]}
                    alt={`${car.name} - ${selectedImage + 1}`}
                    className="w-full aspect-video object-cover transition-smooth"
                  />
                </div>
                <div className="flex gap-3">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`flex-1 rounded-lg overflow-hidden border-2 transition-smooth ${
                        selectedImage === i ? 'border-violet-600' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <ImageWithFallback src={img} alt={`${car.name} view ${i + 1}`} className="w-full h-20 object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div ref={ref} className={`space-y-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Technical Specification</h2>
                <div className="grid grid-cols-2 gap-4">
                  {car.specs.map((spec, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                      <p className="text-sm text-gray-500">{spec.label}</p>
                      <p className="font-semibold text-gray-900">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact?subject=Booking"
                className="block w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-lg text-center transition-smooth hover:scale-[1.02] active:scale-[0.98]"
              >
                Rent this car
              </Link>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Car Equipment</h2>
                <div className="grid grid-cols-2 gap-2">
                  {car.equipment.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-violet-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Other vehicles</h2>
            <Link to="/fleet" className="text-gray-900 font-semibold hover:text-violet-600 transition-smooth flex items-center gap-1">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCars.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-smooth hover-lift"
              >
                <Link to={`/details/${c.id}`} className="block">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback src={c.image} alt={c.name} className="w-full h-full object-cover transition-smooth hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900">{c.name}</h3>
                        <p className="text-sm text-gray-500">{c.type}</p>
                      </div>
                      <span className="text-violet-600 font-bold">PKR {c.price.toLocaleString()}/day</span>
                    </div>
                    <div className="flex gap-2 mt-3 text-xs text-gray-500">
                      {c.features.map((f, i) => (
                        <span key={i}>{f}</span>
                      ))}
                    </div>
                  </div>
                </Link>
                <div className="px-5 pb-5">
                  <Link
                    to={`/details/${c.id}`}
                    className="block w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2.5 rounded-lg text-center transition-smooth no-underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

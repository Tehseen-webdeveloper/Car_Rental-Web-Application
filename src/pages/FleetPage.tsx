import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import CarCard from '../components/CarCard'
import { cars } from '../data/cars'
import { useInView } from '../hooks/useInView'

const vehicleGroups = ['All vehicles', 'Sedan', 'Hatchback', 'SUV', 'Pickup', 'Van']

export default function FleetPage() {
  const [searchParams] = useSearchParams()
  const typeParam = searchParams.get('type') || ''
  const initialGroup = vehicleGroups.includes(typeParam.charAt(0).toUpperCase() + typeParam.slice(1))
    ? typeParam.charAt(0).toUpperCase() + typeParam.slice(1)
    : 'All vehicles'
  const [selectedGroup, setSelectedGroup] = useState(initialGroup)

  useEffect(() => {
    if (typeParam && vehicleGroups.includes(typeParam.charAt(0).toUpperCase() + typeParam.slice(1))) {
      setSelectedGroup(typeParam.charAt(0).toUpperCase() + typeParam.slice(1))
    }
  }, [typeParam])
  const { ref, isInView } = useInView(0.1)

  const filteredCars = selectedGroup === 'All vehicles'
    ? cars
    : cars.filter(c => c.type.toLowerCase() === selectedGroup.toLowerCase())

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">Select a vehicle group</h1>
        </div>

        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
          {vehicleGroups.map((group) => (
            <button
              key={group}
              onClick={() => setSelectedGroup(group)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-smooth ${
                selectedGroup === group
                  ? 'bg-violet-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-violet-300 hover:text-violet-600'
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car, i) => (
            <div
              key={car.id}
              className={`transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${Math.min(i * 50, 300)}ms` }}
            >
              <CarCard car={car} />
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-16 text-gray-500">No vehicles match your selection.</div>
        )}
      </div>
    </section>
  )
}

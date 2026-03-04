import { Link } from 'react-router-dom'
import ImageWithFallback from './ImageWithFallback'
import type { Car } from '../data/cars'

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-smooth hover-lift group">
      <Link to={`/details/${car.id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <ImageWithFallback
            src={car.image}
            alt={`${car.name} ${car.type}`}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-gray-900">{car.name} {car.model && <span className="font-normal text-gray-500">{car.model}</span>}</h3>
              <p className="text-sm text-gray-500">{car.type}</p>
            </div>
            <div className="text-right">
              <span className="text-xl font-bold text-violet-600">PKR {car.price.toLocaleString()}</span>
              <span className="text-sm text-gray-500">/day</span>
            </div>
          </div>
          <div className="flex gap-3 mt-3 text-xs text-gray-500">
            {car.features.map((f, i) => (
              <span key={i}>{f}</span>
            ))}
          </div>
          <div className="mt-4">
            <span className="block w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2.5 rounded-lg text-center transition-smooth">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

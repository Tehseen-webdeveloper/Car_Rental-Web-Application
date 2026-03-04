import { useState } from 'react'
import { Link } from 'react-router-dom'

const inputClass = (isPurple: boolean, extra = '') =>
  `w-full rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 transition-smooth ${isPurple ? 'bg-violet-600/50 text-white placeholder-white/70 border border-violet-500/50' : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400'} ${extra}`

export default function BookingWidget({ variant = 'white' }: { variant?: 'white' | 'purple' }) {
  const isPurple = variant === 'purple'
  const [carType, setCarType] = useState('')

  const fleetLink = carType ? `/fleet?type=${carType}` : '/fleet'

  return (
    <div className={`rounded-2xl p-6 shadow-lg transition-smooth hover:shadow-xl ${isPurple ? 'bg-violet-700' : 'bg-white border border-gray-100'}`}>
      <h2 className={`text-lg font-bold mb-5 ${isPurple ? 'text-white' : 'text-gray-900'}`}>Book your car</h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className={`sr-only ${isPurple ? 'text-white/90' : 'text-gray-600'}`}>Car type</label>
          <select
            name="carType"
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            className={inputClass(isPurple, 'appearance-none bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10')}
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")" }}
          >
            <option value="">Car type</option>
            <option value="sedan">Sedan</option>
            <option value="hatchback">Hatchback</option>
            <option value="suv">SUV</option>
            <option value="pickup">Pickup</option>
            <option value="van">Van</option>
          </select>
        </div>
        <div>
          <label className={`sr-only ${isPurple ? 'text-white/90' : 'text-gray-600'}`}>Place of rental</label>
          <input type="text" name="pickup" placeholder="Place of rental" className={inputClass(isPurple)} />
        </div>
        <div>
          <label className={`sr-only ${isPurple ? 'text-white/90' : 'text-gray-600'}`}>Place of return</label>
          <input type="text" name="return" placeholder="Place of return" className={inputClass(isPurple)} />
        </div>
        <div>
          <label className={`sr-only ${isPurple ? 'text-white/90' : 'text-gray-600'}`}>Rental date</label>
          <input type="date" name="rentalDate" className={inputClass(isPurple)} />
        </div>
        <div>
          <label className={`sr-only ${isPurple ? 'text-white/90' : 'text-gray-600'}`}>Return date</label>
          <input type="date" name="returnDate" className={inputClass(isPurple)} />
        </div>
        <Link to={fleetLink} className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-smooth hover:scale-[1.02] active:scale-[0.98]">
          Book now
        </Link>
      </form>
    </div>
  )
}

import { Link } from 'react-router-dom'
import CarCard from '../components/CarCard'
import HeroCarousel from '../components/HeroCarousel'
import { cars } from '../data/cars'
import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Availability',
    desc: 'Pick up and drop off at multiple locations. We serve Peshawar and surrounding areas with flexible rental options.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Comfort',
    desc: 'Well-maintained used cars with AC, power steering, and modern amenities. Every vehicle is inspected before rental.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Savings',
    desc: 'Competitive PKR rates on quality used cars. No hidden charges. Daily, weekly, and monthly rental packages available.',
  },
]

const benefits = [
  { num: 1, title: 'Quality Used Cars', desc: 'All vehicles are thoroughly inspected and maintained. We offer reliable Toyota, Honda, and Suzuki models popular in Pakistan.' },
  { num: 2, title: 'Transparent Pricing', desc: 'Clear PKR rates with no hidden fees. Know exactly what you pay before you book. Flexible payment options available.' },
  { num: 3, title: 'Easy Booking', desc: 'Book online or call us. Quick approval process. Pick up from our Peshawar office or we can arrange delivery.' },
  { num: 4, title: 'Local Support', desc: 'Based in Peshawar, KP. We understand local needs and provide support in Urdu and English. Available Mon-Fri 9am-5pm.' },
]

const stats = [
  { value: '10+', label: 'Vehicle Models' },
  { value: '500+', label: 'Happy Customers' },
  { value: '8+', label: 'Years Experience' },
  { value: '24/7', label: 'Roadside Support' },
]

const howItWorks = [
  { step: 1, title: 'Choose Your Car', desc: 'Browse our fleet and select the vehicle that fits your needs and budget.' },
  { step: 2, title: 'Book Online or Call', desc: 'Reserve your car through our website or call +92 333 9242445 for instant booking.' },
  { step: 3, title: 'Pick Up & Drive', desc: 'Collect your vehicle from our Peshawar office with valid ID and driving license.' },
  { step: 4, title: 'Return & Pay', desc: 'Drop off the car at the agreed time. Simple, transparent billing in PKR.' },
]

const vehicleTypes = [
  { type: 'Sedan', desc: 'Toyota Corolla, Honda City, Honda Civic—comfortable for city and highway travel.', to: '/fleet?type=sedan' },
  { type: 'Hatchback', desc: 'Suzuki Alto, Cultus, Mehran, Toyota Vitz—fuel-efficient and easy to park.', to: '/fleet?type=hatchback' },
  { type: 'SUV & Pickup', desc: 'Toyota Fortuner, Hilux Revo—ideal for family trips and rugged terrain.', to: '/fleet?type=suv' },
  { type: 'Van', desc: 'Toyota Hiace—perfect for group travel, weddings, and corporate events.', to: '/fleet?type=van' },
]

export default function HomePage() {
  const { ref: featuresRef, isInView: featuresInView } = useInView(0.2)
  const { ref: benefitsRef, isInView: benefitsInView } = useInView(0.2)
  const { ref: carsRef, isInView: carsInView } = useInView(0.2)
  const { ref: statsRef, isInView: statsInView } = useInView(0.2)
  const { ref: howRef, isInView: howInView } = useInView(0.2)
  const { ref: typesRef, isInView: typesInView } = useInView(0.2)

  const featuredCars = cars.slice(0, 6)

  return (
    <>
      {/* Hero - Full width carousel with booking form */}
      <section className="relative">
        <HeroCarousel />
      </section>

      {/* Stats */}
      <section ref={statsRef} className={`py-16 lg:py-20 bg-violet-600 transition-all duration-700 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">{s.value}</div>
                <div className="text-white/90 text-sm lg:text-base mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className={`py-16 lg:py-20 bg-white transition-all duration-700 ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">Why Rent With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((f, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-xl transition-smooth hover-lift cursor-default group"
              >
                <div className="inline-flex justify-center w-16 h-16 rounded-full bg-violet-50 text-violet-600 mb-6 transition-smooth group-hover:bg-violet-100">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{f.title}</h3>
                <p className="mt-3 text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="py-16 lg:py-24 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${benefitsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80"
                alt="Quality used cars"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                Why choose us for your next rental
              </h2>
              <ol className="space-y-6">
                {benefits.map((b, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center">
                      {b.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-900">{b.title}</h3>
                      <p className="mt-1 text-gray-600">{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howRef} className={`py-16 lg:py-24 bg-white transition-all duration-700 ${howInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((h, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-violet-100 text-violet-600 font-bold text-xl flex items-center justify-center mx-auto mb-4">{h.step}</div>
                <h3 className="font-bold text-gray-900">{h.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section ref={typesRef} className="py-16 lg:py-24 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">Vehicle Types We Offer</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${typesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {vehicleTypes.map((v, i) => (
              <Link key={i} to={v.to} className="block p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover-lift transition-smooth">
                <h3 className="font-bold text-gray-900 text-lg">{v.type}</h3>
                <p className="mt-2 text-gray-600">{v.desc}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-violet-600 font-semibold">
                  View fleet →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Selection */}
      <section ref={carsRef} className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 transition-all duration-700 ${carsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Choose the vehicle that suits you</h2>
            <Link
              to="/fleet"
              className="text-gray-900 font-semibold hover:text-violet-600 transition-smooth flex items-center gap-1"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car, i) => (
              <div
                key={car.id}
                className={`transition-all duration-700 ${carsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-violet-700 to-violet-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">Ready to Rent?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Get in touch today for the best rates on quality used cars in Peshawar. Call us or visit our office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:03275792600" className="inline-flex justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-smooth">
              Call +92 333 9242445
            </a>
            <Link to="/contact" className="inline-flex justify-center bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3.5 rounded-lg border border-white/40 transition-smooth">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

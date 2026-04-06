import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/fleet', label: 'Our Fleet' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

const vehicleTypes = [
  { to: '/fleet?type=sedan', label: 'Sedans' },
  { to: '/fleet?type=hatchback', label: 'Hatchbacks' },
  { to: '/fleet?type=suv', label: 'SUVs' },
  { to: '/fleet?type=pickup', label: 'Pickups' },
  { to: '/fleet?type=van', label: 'Vans' },
]

const services = [
  'Daily Rentals',
  'Weekly Rentals',
  'Monthly Rentals',
  'Airport Pickup',
  'Corporate Rentals',
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
              <span className="text-xl font-bold text-white">Car Rental</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your trusted source for quality used car rentals in Peshawar. We offer Toyota, Honda, and Suzuki vehicles at competitive PKR rates. Serving Khyber Pakhtunkhwa since 2015.
            </p>
            <div className="space-y-3">
              <a href="tel:03275792600" className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-smooth">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +92 333 9242445
              </a>
              <a href="mailto:tatheerabidi00@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-smooth">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                tahseenullahafridi7@gmail.com
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Peshawar, Khyber Pakhtunkhwa, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                9am - 5pm (Mon - Fri)
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-orange-500 transition-smooth">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Vehicle Types</h4>
            <ul className="space-y-3">
              {vehicleTypes.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-orange-500 transition-smooth">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Car Rental. All rights reserved. Peshawar, KP, Pakistan.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/contact" className="text-gray-500 hover:text-orange-500 transition-smooth">Privacy Policy</Link>
              <Link to="/contact" className="text-gray-500 hover:text-orange-500 transition-smooth">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/fleet', label: 'Vehicles' },
    { to: '/details', label: 'Details' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact Us' },
  ]

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-gray-900 font-sans antialiased">
      <header className="sticky top-0 z-50 bg-[#F8F8F8] border-b border-gray-200/80 transition-smooth">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2 transition-smooth hover:opacity-80">
              <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
              <span className="text-xl font-bold text-gray-900">Car Rental</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-sm font-medium transition-smooth ${
                    location.pathname === to || (to === '/details' && location.pathname.startsWith('/details'))
                      ? 'text-violet-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm text-gray-600">Need help?</span>
              <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+92 333 9242445" className="text-sm font-semibold text-gray-900 hover:text-violet-600 transition-smooth">
                +92 333 9242445
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-smooth"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 space-y-4 animate-fade-in">
              {navLinks.map(({ to, label }) => (
                <Link key={to} to={to} className="block text-gray-600 hover:text-violet-600 transition-smooth" onClick={() => setMobileMenuOpen(false)}>
                  {label}
                </Link>
              ))}
              <a href="tel:+92 333 9242445" className="block text-violet-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>
                +92 333 9242445
              </a>
            </div>
          )}
        </nav>
      </header>

      <main>{children}</main>

      <Footer />
    </div>
  )
}

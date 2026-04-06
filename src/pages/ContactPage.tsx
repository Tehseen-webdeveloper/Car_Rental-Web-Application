import BookingWidget from '../components/BookingWidget'
import { useInView } from '../hooks/useInView'

const contactInfo = [
  { icon: 'location', title: 'Address', value: 'Peshawar, KP, Pakistan' },
  { icon: 'email', title: 'Email', value: 'Tahseenullahafridi7@gmail.com' },
  { icon: 'phone', title: 'Phone', value: '+92 333 9242445' },
  { icon: 'clock', title: 'Opening hours', value: '9am - 5pm (Mon - Fri)' },
]

const brands = ['Toyota', 'Honda', 'Suzuki']

export default function ContactPage() {
  const { ref: formRef, isInView: formInView } = useInView(0.2)

  return (
    <>
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Contact Us</h1>
            <p className="mt-4 text-gray-500">Home / Contact Us</p>
          </div>

          <div ref={formRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 transition-all duration-700 ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <BookingWidget variant="purple" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80"
                alt="Quality used cars"
                className="w-full h-[400px] lg:h-full min-h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-smooth hover-lift">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  {info.icon === 'location' && (
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {info.icon === 'email' && (
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {info.icon === 'phone' && (
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  )}
                  {info.icon === 'clock' && (
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{info.title}</h3>
                  <a
                    href={info.icon === 'email' ? `mailto:${info.value}` : info.icon === 'phone' ? `tel:${info.value.replace(/\s/g, '')}` : undefined}
                    className={`text-gray-600 mt-1 block ${info.icon === 'email' || info.icon === 'phone' ? 'hover:text-violet-600 transition-smooth' : ''}`}
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 py-12 border-t border-gray-200">
            {brands.map((brand, i) => (
              <div key={i} className="text-2xl font-bold text-gray-400 hover:text-violet-600 transition-smooth cursor-default">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

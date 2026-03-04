import { useInView } from '../hooks/useInView'

const features = [
  { title: 'Variety Brands', desc: 'Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio' },
  { title: 'Maximum Freedom', desc: 'Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in' },
  { title: 'Awesome Support', desc: 'Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit' },
  { title: 'Flexibility On The Go', desc: 'Vitae pretium nulla sed quam id nisi semper. Vel non in proin egestas dis. faucibus rhoncus, iaculis dignissim aenean pellentesque nisi' },
]

const stats = [
  { value: '20k+', label: 'Happy customers' },
  { value: '540+', label: 'Count of cars' },
  { value: '25+', label: 'Years of experience' },
]

export default function AboutPage() {
  const { ref: heroRef, isInView: heroInView } = useInView(0.2)
  const { ref: statsRef, isInView: statsInView } = useInView(0.2)
  const { ref: ctaRef, isInView: ctaInView } = useInView(0.2)

  return (
    <>
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroRef} className={`text-center mb-16 transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">About Us</h1>
            <p className="mt-4 text-gray-500">Home / About Us</p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
            <div className="lg:col-span-1">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Where every drive feels extraordinary
              </h2>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i}>
                  <h3 className="font-bold text-gray-900">{f.title}</h3>
                  <p className="mt-2 text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-2xl overflow-hidden shadow-xl mb-20 transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="relative aspect-video">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
                alt="Car rental"
                className="w-full h-full object-cover"
              />
              <button className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-violet-600/90 hover:bg-violet-600 flex items-center justify-center transition-smooth hover:scale-110 shadow-lg">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          <div ref={statsRef} className={`grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20 transition-all duration-700 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-violet-600">{s.value}</p>
                <p className="mt-2 text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>

          <div ref={ctaRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-8">
                Unlock unforgettable memories on the road
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-600 mt-2" />
                  <p className="text-gray-600">Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida.</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-600 mt-2" />
                  <p className="text-gray-600">Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80"
                alt="Road trip"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

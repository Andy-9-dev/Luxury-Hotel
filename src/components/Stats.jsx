import { useState, useEffect, useRef } from 'react'

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    {
      id: 1,
      value: 50000,
      suffix: '+',
      label: 'Happy Guests',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'text-brand-blue'
    },
    {
      id: 2,
      value: 25,
      suffix: '+',
      label: 'Years Experience',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'text-brand-green'
    },
    {
      id: 3,
      value: 150,
      suffix: '+',
      label: 'Luxury Suites',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      color: 'text-primary'
    },
    {
      id: 4,
      value: 98,
      suffix: '%',
      label: 'Satisfaction Rate',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'text-brand-pink'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const Counter = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      let startTime
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percentage = Math.min(progress / duration, 1)
        
        setCount(Math.floor(end * percentage))

        if (percentage < 1) {
          requestAnimationFrame(step)
        }
      }

      requestAnimationFrame(step)
    }, [isVisible, end, duration])

    return (
      <span>
        {count.toLocaleString()}{suffix}
      </span>
    )
  }

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-surface-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Achievements
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Excellence in Numbers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Trusted by thousands of guests worldwide for unforgettable experiences
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="relative group"
            >
              <div className="bg-gray-50 dark:bg-background-dark rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-surface-dark shadow-lg mb-4 ${stat.color}`}>
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 dark:opacity-40">
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-1">
              ⭐⭐⭐⭐⭐
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">TripAdvisor</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-1">
              🏆
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Best Hotel 2024</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-1">
              ✨
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Luxury Award</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-1">
              🌟
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">5-Star Certified</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats

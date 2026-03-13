import { Link } from 'react-router-dom'

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: 'Deluxe Suite',
      description: 'Spacious suite with king bed, living area, and stunning city views',
      price: '$299',
      period: 'per night',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      features: ['King Bed', 'City View', 'Free WiFi', 'Mini Bar'],
      badge: 'Popular',
      badgeColor: 'bg-brand-pink'
    },
    {
      id: 2,
      title: 'Royal Suite',
      description: 'Ultimate luxury with separate bedroom, dining area, and private balcony',
      price: '$499',
      period: 'per night',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
      features: ['2 Bedrooms', 'Private Balcony', 'Butler Service', 'Jacuzzi'],
      badge: 'Luxury',
      badgeColor: 'bg-primary'
    },
    {
      id: 3,
      title: 'Spa Package',
      description: 'Rejuvenate with our premium spa treatments and wellness programs',
      price: '$199',
      period: 'per session',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
      features: ['Massage', 'Facial', 'Sauna', 'Pool Access'],
      badge: 'Wellness',
      badgeColor: 'bg-brand-green'
    },
    {
      id: 4,
      title: 'Fine Dining',
      description: 'Experience world-class cuisine from our Michelin-starred chefs',
      price: '$89',
      period: 'per person',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      features: ['5-Course Menu', 'Wine Pairing', 'Private Chef', 'Rooftop View'],
      badge: 'Culinary',
      badgeColor: 'bg-brand-orange'
    },
    {
      id: 5,
      title: 'Adventure Tours',
      description: 'Explore the city with our curated tours and exclusive experiences',
      price: '$149',
      period: 'per person',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
      features: ['Private Guide', 'Transportation', 'Lunch Included', 'Photo Package'],
      badge: 'Adventure',
      badgeColor: 'bg-brand-blue'
    },
    {
      id: 6,
      title: 'Wedding Package',
      description: 'Create unforgettable memories with our all-inclusive wedding services',
      price: '$4,999',
      period: 'starting from',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
      features: ['Venue', 'Catering', 'Decoration', 'Coordinator'],
      badge: 'Special',
      badgeColor: 'bg-brand-pink'
    }
  ]

  return (
    <section id="offers" className="py-20 bg-gray-50 dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Exclusive Offers
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Luxury Experiences Await
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover our carefully curated packages designed to make your stay extraordinary
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Badge */}
                <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 ${offer.badgeColor} text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold`}>
                  {offer.badge}
                </div>

                {/* Price */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <div className="text-2xl sm:text-3xl font-display font-bold">{offer.price}</div>
                  <div className="text-xs sm:text-sm text-gray-200">{offer.period}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  {offer.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                  {offer.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6 flex-grow">
                  {offer.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to="/booking"
                  state={{ selectedOffer: offer }}
                  className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold block text-center shadow-lg hover:shadow-xl"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Can't find what you're looking for?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-semibold"
          >
            <span>Contact us for custom packages</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Offers

import { Link } from 'react-router-dom'

const OffersPage = () => {
  const offers = [
    {
      id: 1,
      title: 'Deluxe Suite',
      description: 'Spacious suite with king bed, living area, and stunning city views. Perfect for couples or business travelers seeking comfort and elegance.',
      price: '$299',
      period: 'per night',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      features: ['King Bed', 'City View', 'Free WiFi', 'Mini Bar', '24/7 Room Service', 'Smart TV'],
      amenities: ['50 sqm', 'Marble Bathroom', 'Work Desk', 'Coffee Machine'],
      badge: 'Popular',
      badgeColor: 'bg-brand-pink'
    },
    {
      id: 2,
      title: 'Royal Suite',
      description: 'Ultimate luxury with separate bedroom, dining area, and private balcony. Experience the pinnacle of comfort and sophistication.',
      price: '$499',
      period: 'per night',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
      features: ['2 Bedrooms', 'Private Balcony', 'Butler Service', 'Jacuzzi', 'Dining Area', 'Premium Toiletries'],
      amenities: ['120 sqm', 'Ocean View', 'Walk-in Closet', 'Wine Cellar'],
      badge: 'Luxury',
      badgeColor: 'bg-primary'
    },
    {
      id: 3,
      title: 'Presidential Suite',
      description: 'The epitome of luxury living with panoramic views, private terrace, and exclusive amenities for the most discerning guests.',
      price: '$999',
      period: 'per night',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      features: ['3 Bedrooms', 'Private Terrace', 'Personal Chef', 'Home Theater', 'Private Pool', 'Spa Room'],
      amenities: ['250 sqm', 'Panoramic View', 'Grand Piano', 'Library'],
      badge: 'Exclusive',
      badgeColor: 'bg-brand-blue'
    },
    {
      id: 4,
      title: 'Spa Package',
      description: 'Rejuvenate with our premium spa treatments and wellness programs. Includes massage, facial, and access to all spa facilities.',
      price: '$199',
      period: 'per session',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
      features: ['Massage', 'Facial', 'Sauna', 'Pool Access', 'Steam Room', 'Relaxation Lounge'],
      amenities: ['3 Hours', 'Aromatherapy', 'Herbal Tea', 'Spa Products'],
      badge: 'Wellness',
      badgeColor: 'bg-brand-green'
    },
    {
      id: 5,
      title: 'Fine Dining',
      description: 'Experience world-class cuisine from our Michelin-starred chefs. A culinary journey through international flavors.',
      price: '$89',
      period: 'per person',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      features: ['5-Course Menu', 'Wine Pairing', 'Private Chef', 'Rooftop View', 'Sommelier Service', 'Custom Menu'],
      amenities: ['3 Hours', 'Live Music', 'Private Dining', 'Chef\'s Table'],
      badge: 'Culinary',
      badgeColor: 'bg-brand-orange'
    },
    {
      id: 6,
      title: 'Adventure Tours',
      description: 'Explore the city with our curated tours and exclusive experiences. Discover hidden gems and iconic landmarks.',
      price: '$149',
      period: 'per person',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
      features: ['Private Guide', 'Transportation', 'Lunch Included', 'Photo Package', 'Skip-the-Line Access', 'Souvenir'],
      amenities: ['Full Day', 'Insurance', 'Refreshments', 'Flexible Schedule'],
      badge: 'Adventure',
      badgeColor: 'bg-brand-blue'
    },
    {
      id: 7,
      title: 'Wedding Package',
      description: 'Create unforgettable memories with our all-inclusive wedding services. From intimate ceremonies to grand celebrations.',
      price: '$4,999',
      period: 'starting from',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
      features: ['Venue', 'Catering', 'Decoration', 'Coordinator', 'Photography', 'Entertainment'],
      amenities: ['Up to 150 Guests', 'Bridal Suite', 'Cake', 'Flowers'],
      badge: 'Special',
      badgeColor: 'bg-brand-pink'
    },
    {
      id: 8,
      title: 'Business Package',
      description: 'Perfect for corporate events and business meetings. Includes conference facilities and professional support.',
      price: '$599',
      period: 'per day',
      image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80',
      features: ['Conference Room', 'AV Equipment', 'Catering', 'WiFi', 'Whiteboard', 'Video Conferencing'],
      amenities: ['Up to 50 People', 'Parking', 'Secretary Service', 'Coffee Breaks'],
      badge: 'Business',
      badgeColor: 'bg-brand-blue'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background-dark pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-brand-blue/10 dark:from-primary/20 dark:to-brand-blue/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Exclusive Packages
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Our Luxury Offers
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Discover our carefully curated packages designed to make your stay extraordinary. 
              From elegant suites to exclusive experiences, we have something special for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="group bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 ${offer.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {offer.badge}
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-3xl font-display font-bold">{offer.price}</div>
                    <div className="text-sm text-gray-200">{offer.period}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {offer.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {offer.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                          <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Amenities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {offer.amenities.map((amenity, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-background-dark text-gray-700 dark:text-gray-300 rounded-full text-xs">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/booking"
                    state={{ selectedOffer: offer }}
                    className="block w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold text-center"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-brand-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Need a Custom Package?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We can create a personalized package tailored to your specific needs and preferences.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default OffersPage

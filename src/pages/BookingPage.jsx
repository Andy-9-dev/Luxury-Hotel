import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const BookingPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const selectedOffer = location.state?.selectedOffer

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: selectedOffer?.title || 'deluxe',
    specialRequests: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    alert('Booking request submitted successfully! We will contact you shortly.')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background-dark pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Complete Your Booking
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Fill in your details below and we'll confirm your reservation
            </p>
          </div>

          {/* Selected Offer Summary */}
          {selectedOffer && (
            <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Selected Package
              </h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img
                  src={selectedOffer.image}
                  alt={selectedOffer.title}
                  className="w-full sm:w-24 h-40 sm:h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {selectedOffer.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1">
                    {selectedOffer.description}
                  </p>
                  <div className="mt-2">
                    <span className="text-xl sm:text-2xl font-display font-bold text-primary">
                      {selectedOffer.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm ml-2">
                      {selectedOffer.period}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Booking Form */}
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Booking Details */}
              <div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  Booking Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="checkIn" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Check-in Date *
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="checkOut" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Check-out Date *
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Number of Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                      required
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="roomType" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Room Type *
                    </label>
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
                      required
                    >
                      <option value="deluxe">Deluxe Suite</option>
                      <option value="royal">Royal Suite</option>
                      <option value="presidential">Presidential Suite</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="specialRequests" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                  placeholder="Any special requests or requirements..."
                ></textarea>
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-3 bg-gray-50 dark:bg-background-dark p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 dark:focus:ring-offset-background-dark cursor-pointer"
                />
                <label htmlFor="terms" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
                  I agree to the terms and conditions, cancellation policy, and privacy policy of Royal Kiana Suites.
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  type="submit"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-bold shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Confirm Booking
                </button>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 font-semibold text-sm sm:text-base"
                >
                  Go Back
                </button>
              </div>

              <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Your information is secure and will only be used to process your booking.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPage

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Offers', href: '/offers' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Staff Portal', href: '/staff-login' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md shadow-lg' 
          : 'bg-black/40 backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-display text-xl font-bold">RK</span>
            </div>
            <span className={`text-xl font-display font-bold transition-colors duration-200 ${
              isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            }`}>
              Royal Kiana
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 font-medium text-sm lg:text-base ${
                    isScrolled 
                      ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary' 
                      : 'text-white hover:text-primary'
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors duration-200 font-medium text-sm lg:text-base ${
                    location.pathname === link.href 
                      ? 'text-primary' 
                      : isScrolled 
                        ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary' 
                        : 'text-white hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'bg-gray-100 dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-700' 
                  : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className={`w-5 h-5 ${
                  isScrolled ? 'text-yellow-500' : 'text-yellow-300'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className={`w-5 h-5 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <Link
              to="/login"
              className={`px-4 py-2 transition-colors duration-200 font-medium text-sm lg:text-base ${
                isScrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary' 
                  : 'text-white hover:text-primary'
              }`}
            >
              Login
            </Link>

            <Link
              to="/booking"
              className={`px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl ${
                isScrolled 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-primary hover:text-white'
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'bg-gray-100 dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-700' 
                  : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className={`w-5 h-5 ${
                  isScrolled ? 'text-yellow-500' : 'text-yellow-300'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className={`w-5 h-5 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'bg-gray-100 dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-700' 
                  : 'bg-white/20 backdrop-blur-sm hover:bg-white/30'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className={`w-6 h-6 ${
                  isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className={`w-6 h-6 ${
                  isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark animate-slide-down">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                      location.pathname === link.href 
                        ? 'text-primary bg-primary/10' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                      location.pathname === link.href 
                        ? 'text-primary bg-primary/10' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3 space-y-3">
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/booking"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold text-center shadow-lg"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

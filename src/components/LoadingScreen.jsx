import { useState, useEffect } from 'react'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const loadingSteps = [
    'Preparing your luxury experience...',
    'Loading premium amenities...',
    'Setting up your royal suite...',
    'Finalizing exclusive services...',
    'Welcome to Royal Kiana Suites!'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onLoadingComplete(), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(stepInterval)
          return prev
        }
        return prev + 1
      })
    }, 1000)

    return () => clearInterval(stepInterval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-primary via-brand-blue to-brand-pink flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-md mx-auto px-6">
        {/* Logo Animation */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 animate-spin-slow border-4 border-white/30">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-display text-2xl font-bold animate-pulse">RK</span>
            </div>
          </div>
          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-4 border-transparent border-t-white animate-spin"></div>
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl font-display font-bold mb-2 animate-fade-in">
          Royal Kiana Suites
        </h1>
        <p className="text-white/80 mb-8 animate-fade-in-delay">
          Luxury Redefined
        </p>

        {/* Loading Steps */}
        <div className="mb-8 h-6">
          <p className="text-sm text-white/90 animate-fade-in-step">
            {loadingSteps[currentStep]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-2 mb-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-white to-white/80 rounded-full transition-all duration-100 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
          </div>
        </div>

        {/* Progress Percentage */}
        <p className="text-white/70 text-sm font-medium">
          {progress}%
        </p>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/40 rounded-full animate-float"></div>
        <div className="absolute top-32 right-16 w-3 h-3 bg-white/30 rounded-full animate-float-delay"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-white/50 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-32 right-10 w-4 h-4 bg-white/20 rounded-full animate-float-delay-2"></div>
      </div>
    </div>
  )
}

export default LoadingScreen
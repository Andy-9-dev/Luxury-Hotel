# Royal Kiana Suites - Luxury Hotel Website

A modern, fully responsive luxury hotel website built with React, Vite, and Tailwind CSS.

## Features

- ✨ Modern and elegant design with smooth animations
- 🌓 Dark mode support with toggle
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Custom color scheme with Tailwind CSS
- 🖼️ Beautiful hero section with full-screen background
- 💼 Modular React components
- 🔀 Multi-page routing with React Router
- 🎯 Dedicated booking page with full form
- 📄 Separate pages for Offers, Contact, and Staff Login
- 👥 Staff portal with dedicated login page
- 💬 Testimonials carousel
- 📊 Animated statistics counter
- 📧 Newsletter subscription
- ⬆️ Scroll-to-top button
- 🔗 Smooth navigation between pages

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Google Fonts** - Playfair Display & Inter

## Project Structure

```
royal-kiana-suites/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation with routing
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── Offers.jsx          # Packages/offers grid
│   │   ├── Stats.jsx           # Animated statistics
│   │   ├── Testimonials.jsx    # Customer reviews carousel
│   │   ├── StaffPortal.jsx     # Staff portal section
│   │   ├── CTASection.jsx      # Booking CTA section
│   │   ├── Footer.jsx          # Footer with contact info
│   │   └── ScrollToTop.jsx     # Scroll to top button
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── BookingPage.jsx     # Booking form page
│   │   ├── OffersPage.jsx      # All offers page
│   │   ├── ContactPage.jsx     # Contact form page
│   │   └── StaffLoginPage.jsx  # Staff login page
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # App entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies

```

## Pages

The website includes the following pages:

- **Home (/)** - Landing page with hero, offers preview, stats, testimonials, and CTA
- **Offers (/offers)** - Complete list of all packages and services with detailed information
- **Booking (/booking)** - Full booking form with personal details and reservation options
- **Contact (/contact)** - Contact form and information page
- **Staff Login (/staff-login)** - Dedicated staff portal login page

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: "#C49A6C",           // Gold/Bronze
  "background-light": "#FFFFFF", // Light background
  "background-dark": "#0F172A",  // Dark background
  "surface-dark": "#1E293B",     // Dark surface
  "brand-pink": "#E11D48",       // Accent pink
  "brand-green": "#10B981",      // Accent green
  "brand-orange": "#F59E0B",     // Accent orange
  "brand-blue": "#2563EB",       // Accent blue
}
```

### Fonts

Fonts are loaded from Google Fonts in `index.html`. To change fonts, update:
- `index.html` - Font import links
- `tailwind.config.js` - Font family configuration

### Images

Replace placeholder images in components with your own:
- Hero section: `Hero.jsx`
- Offers: `Offers.jsx`
- Staff portal: `StaffPortal.jsx`
- CTA section: `CTASection.jsx`
- Testimonials: `Testimonials.jsx`

## Components Overview

### Header
- Sticky navigation with scroll effect
- React Router navigation links
- Mobile menu toggle
- Dark mode toggle
- Active page highlighting

### Pages

#### Home
- Hero section with full-screen background
- Offers preview grid
- Animated statistics
- Testimonials carousel
- Staff portal section
- Booking CTA

#### Booking Page
- Complete booking form
- Personal information fields
- Date selection
- Room type selection
- Special requests
- Form validation
- Selected offer summary (when coming from offers page)

#### Offers Page
- Complete grid of all packages
- Detailed descriptions
- Features and amenities lists
- Individual booking buttons
- Custom package CTA

#### Contact Page
- Contact form with validation
- Contact information display
- Business hours
- Social media links
- Map placeholder

#### Staff Login Page
- Dedicated login form
- Username and password fields
- Remember me option
- Forgot password link
- Security information

### Components

#### Hero
- Full-screen background image
- Animated entrance
- Feature cards
- CTA buttons with routing

#### Offers
- Grid layout (responsive)
- Hover effects with image zoom
- Badge system
- Feature lists
- Book now buttons with navigation

#### Stats
- Animated counters
- Intersection Observer for trigger
- Icon-based design

#### Testimonials
- Carousel with navigation
- Dot indicators
- Rating display

#### Staff Portal
- Section on home page
- Link to dedicated login page

#### CTA Section
- Booking CTA with routing
- Benefits display
- Trust indicators

#### Footer
- Contact information
- Social media links
- Newsletter subscription
- Quick links with routing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images (use WebP format for production)
- Lazy loading for images
- Code splitting with Vite
- Minified CSS and JS in production

## License

This project is open source and available under the MIT License.

## Support

For support, email info@royalkiana.com or visit our website.

---

Built with ❤️ using React and Tailwind CSS

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#C49A6C",
        "background-light": "#FFFFFF",
        "background-dark": "#0F172A",
        "surface-dark": "#1E293B",
        "brand-pink": "#E11D48",
        "brand-green": "#10B981",
        "brand-orange": "#F59E0B",
        "brand-blue": "#2563EB",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
    },
  },
  plugins: [],
}

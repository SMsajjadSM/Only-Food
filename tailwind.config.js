/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {backgroundImage: {
      'hero-pattern': "url('../images/hero-slider-1.jpg')",
     
    }},
  },
  plugins: [],
}
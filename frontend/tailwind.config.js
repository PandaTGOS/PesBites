/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'our-light': '#8ECAE6',
        'our-dark': '#219EBC',
        'our-more-dark': '#0a4c65',
        'our-yellow': '#FFB703',
        'our-orange': '#FB8500',
      },
    },
  },
  plugins: [],
}
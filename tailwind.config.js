/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins': ["poppins", "sans-serif"],
      'serif': ['ui-serif', 'Georgia']
    },
    extend: {
      inset:{
        '20%':'20%'
      }
    },
  },
  plugins: [],
}


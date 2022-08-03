/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'supersmall': {'min': '340px', 'max': '639px'},
      }
    },
  },
  plugins: [],
}

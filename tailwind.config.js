/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'black-main': '#0A0908',
        'grey-main': '#22333B',
        'white-main': '#F2F4F3',
        'beige-main': '#3c6e71',
        'brown-main': '#2f3e46', 
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/hero.jpg')",
      },
      fontFamily: {
        primary: ["Poppins-Regular"],
        fancy: ["GreatVibes-Regular"],
      },
      screens: {
        'xs': '540px'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainBackground: '#090b1a',
        cardBackground: '#1b1938',
        accent: '#aa5cdb',
        mainHeading: '#ffffff',
      },
      fontFamily: {
        'Lexend': ['Lexend Deca', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'mobile': "url('images/image-header-mobile.jpg')",
        'desktop': "url('images/image-header-desktop.jpg')"
      },
      width: {
        85: '340px',
        'xxl': '1000px'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {

    screens: {
      sm: '500px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black: "#090909",
      white: '#FAFAFA',
      blue: '#114ECD',

      vertical: {
        firstB: '#114ECD',
        secondG: '#368635',
        thirdY: '#FEDB57',
        fourthR: '#DC3948',
      }
    },
    fontFamily: {
      'sans': ['"Source Sans 3"', 'sans-serif'],
    },
    fontSize: {
      'base': '18px',
      'base-lg': '27px',
      'sub-heading': '36px',
      'heading': '45px',
      'heading-xl': '63px',
    },

  },
  plugins: [],
}

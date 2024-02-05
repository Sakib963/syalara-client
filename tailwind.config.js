const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: '',
  mode: 'jit',
  important: false,
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'xs': { min: '276px' , max: '576px' },
      ...defaultTheme.screens
    },
    extend: {
      boxShadow: {
        custom: '0px 0px 50px 0px rgb(82 63 105 / 15%)',
      },
      colors: {
        primary: {
          DEFAULT: '#0D1F2D',
          50: '#225176',
          100: '#1B4363',
          200: '#163751',
          300: '#143046',
          400: '#0D1F2D',
          500: '#08121B',
          600: '#09151E',
          700: '#060D13',
          800: '#04090D',
        },
        secondary: {
          DEFAULT: '#9EA3B0',
          50: '#D1D9EC',
          100: '#C8CEDE',
          200: '#BEC5D4',
          300: '#ADB3C1',
          400: '#9EA3B0',
          500: '#969AA5',
          600: '#8E939E',
          700: '#878A94',
          800: '#70737B',
        }
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  variants: {
    extend: {},
    scrollbar: ['dark', 'rounded']
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        brand: {
          DEFAULT: '#FF9016',
          '50': '#FFE7CE',
          '100': '#FFDEB9',
          '200': '#FFCA90',
          '300': '#FFB768',
          '400': '#FFA33F',
          '500': '#FF9016',
          '600': '#DD7400',
          '700': '#A55600',
          '800': '#6D3900',
          '900': '#351C00'
        },
        info: colors.sky,
        danger: colors.red,
        success: colors.green,
        warning: colors.amber,
      },
      fontFamily: {
        'teko': ['teko,sans-serif'],
        'canada': ['canada-type-gibson,sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}

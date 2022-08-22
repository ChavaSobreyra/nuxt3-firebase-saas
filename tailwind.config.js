const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
}

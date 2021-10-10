const tailwindColors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false,
  theme: {
    colors: {
      // TODO: Use FFC variant specific colors (success, info, etc.)
      ...tailwindColors,
      fccSecondary: 'var(--green90)'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

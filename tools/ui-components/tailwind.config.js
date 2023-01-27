const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      'dark-theme-background': 'var(--gray90)',
      'light-theme-background': 'var(--gray00)',
      // Foreground
      'foreground-primary': 'var(--foreground-primary)',
      'foreground-secondary': 'var(--foreground-secondary)',
      'foreground-tertiary': 'var(--foreground-tertiary)',
      'foreground-quaternary': 'var(--foreground-quaternary)',
      'foreground-danger': 'var(--foreground-danger)',
      'foreground-info': 'var(--foreground-info)',
      // Background
      'background-primary': 'var(--background-primary)',
      'background-secondary': 'var(--background-secondary)',
      'background-tertiary': 'var(--background-tertiary)',
      'background-quaternary': 'var(--background-quaternary)',
      'background-danger': 'var(--background-danger)',
      'background-info': 'var(--background-info)',
      // Focus outline
      'focus-outline-color': 'var(--focus-outline-color)',
      gray: {
        0: 'var(--gray00)',
        50: 'var(--gray05)',
        100: 'var(--gray10)',
        150: 'var(--gray15)',
        450: 'var(--gray45)',
        750: 'var(--gray75)',
        800: 'var(--gray80)',
        850: 'var(--gray85)',
        900: 'var(--gray90)'
      },
      green: {
        50: 'var(--green05)',
        100: 'var(--green10)',
        400: 'var(--green40)',
        700: 'var(--green70)',
        900: 'var(--green90)'
      },
      blue: {
        50: 'var(--blue05)',
        100: 'var(--blue10)',
        300: 'var(--blue30)',
        500: 'var(--blue50)',
        700: 'var(--blue70)',
        900: 'var(--blue90)'
      },
      yellow: {
        50: 'var(--yellow05)',
        100: 'var(--yellow10)',
        400: 'var(--yellow40)',
        450: 'var(--yellow45)',
        500: 'var(--yellow50)',
        700: 'var(--yellow70)',
        900: 'var(--yellow90)'
      },
      red: {
        50: 'var(--red05)',
        100: 'var(--red10)',
        150: 'var(--red15)',
        300: 'var(--red30)',
        700: 'var(--red70)',
        800: 'var(--red80)',
        900: 'var(--red90)'
      }
    },
    borderWidth: {
      1: '1px',
      3: '3px'
    },
    fontSize: {
      // https://tailwindcss.com/docs/font-size#providing-a-default-line-height
      // [fontSize, lineHeight]
      sm: ['16px', '1.5'],
      md: ['18px', '1.42857143'],
      lg: ['24px', '1.3333333']
    },
    minHeight: {
      '43-px': '43px'
    },
    extend: {
      zIndex: {
        2: '2'
      }
    }
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('aria-disabled', '&[aria-disabled="true"]');
    })
  ]
};

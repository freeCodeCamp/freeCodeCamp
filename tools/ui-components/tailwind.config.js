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
      'default-foreground-primary': 'var(--default-foreground-primary)',
      'default-foreground-secondary': 'var(--default-foreground-secondary)',
      'default-foreground-tertiary': 'var(--default-foreground-tertiary)',
      'default-foreground-quaternary': 'var(--default-foreground-quaternary)',
      'default-background-primary': 'var(--default-background-primary)',
      'default-background-secondary': 'var(--default-background-secondary)',
      'default-background-tertiary': 'var(--default-background-tertiary)',
      'default-background-quaternary': 'var(--default-background-quaternary)',
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
    }
  },
  plugins: []
};

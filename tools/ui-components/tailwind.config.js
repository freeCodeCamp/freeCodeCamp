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
      'default-foreground-primary': 'var(--default-foreground-primary)',
      'default-foreground-secondary': 'var(--default-foreground-secondary)',
      'default-foreground-tertiary': 'var(--default-foreground-tertiary)',
      'default-foreground-quaternary': 'var(--default-foreground-quaternary)',
      'default-foreground-danger': 'var(--default-foreground-danger)',
      'default-foreground-info': 'var(--default-foreground-info)',
      // Background
      'default-background-primary': 'var(--default-background-primary)',
      'default-background-secondary': 'var(--default-background-secondary)',
      'default-background-tertiary': 'var(--default-background-tertiary)',
      'default-background-quaternary': 'var(--default-background-quaternary)',
      'default-background-danger': 'var(--default-background-danger)',
      'default-background-info': 'var(--default-background-info)',
      // Foreground hover
      'default-foreground-primary-hover':
        'var(--default-foreground-primary-hover)',
      'default-foreground-danger-hover':
        'var(--default-foreground-danger-hover)',
      'default-foreground-info-hover': 'var(--default-foreground-info-hover)',
      // Background hover
      'default-background-primary-hover':
        'var(--default-background-primary-hover)',
      'default-background-danger-hover':
        'var(--default-background-danger-hover)',
      'default-background-info-hover': 'var(--default-background-info-hover)',
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
  plugins: []
};

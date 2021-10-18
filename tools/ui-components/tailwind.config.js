module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
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
      success: {
        100: 'var(--success-10)',
        200: 'var(--success-20)',
        900: 'var(--success-90)'
      },
      info: {
        100: 'var(--info-10)',
        200: 'var(--info-20)',
        900: 'var(--info-90)'
      },
      warning: {
        100: 'var(--warning-10)',
        200: 'var(--warning-20)',
        900: 'var(--warning-90)'
      },
      danger: {
        100: 'var(--danger-10)',
        200: 'var(--danger-20)',
        900: 'var(--danger-90)'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['hover', 'focus']
    }
  },
  plugins: []
};

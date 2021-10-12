module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: 'class',
  theme: {
    colors: {
      'dark-theme-background': 'var(--gray90)',
      'light-theme-background': 'var(--gray00)',
      'default-foreground-primary': 'var(--default-foreground-primary)',
      'default-foreground-secondary': 'var(--default-foreground-secondary)',
      'default-foreground-tertiary': 'var(--default-foreground-tertiary)',
      'default-foreground-quaternary': 'var(--default-foreground-quaternary)',
      'default-background-primary': 'var(--default-background-primary)',
      'default-background-secondary': 'var(--default-background-secondary)',
      'default-background-tertiary': 'var(--default-background-tertiary)',
      'default-background-quaternary': 'var(--default-background-quaternary)'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

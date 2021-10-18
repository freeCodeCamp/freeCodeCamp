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
      'default-background-quaternary': 'var(--default-background-quaternary)',
      'state-foreground-success': 'var(--state-foreground-success)',
      'state-background-success': 'var(--state-background-success)',
      'state-border-success': 'var(--state-border-success)',
      'state-foreground-info': 'var(--state-foreground-info)',
      'state-background-info': 'var(--state-background-info)',
      'state-border-info': 'var(--state-border-info)',
      'state-foreground-warning': 'var(--state-foreground-warning)',
      'state-background-warning': 'var(--state-background-warning)',
      'state-border-warning': 'var(--state-border-warning)',
      'state-foreground-danger': 'var(--state-foreground-danger)',
      'state-background-danger': 'var(--state-background-danger)',
      'state-border-danger': 'var(--state-border-danger)'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

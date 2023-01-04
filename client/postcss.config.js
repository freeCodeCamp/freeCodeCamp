module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['last 2 versions']
    },
    'postcss-preset-env': {
      features: {
        'has-pseudo-class': true
      }
    }
  }
};

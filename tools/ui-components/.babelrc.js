module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['>0.25%', 'not dead']
        }
      }
    ]
  ],
  plugins: [['transform-react-remove-prop-types', { removeImport: true }]]
};

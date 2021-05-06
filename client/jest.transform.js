const babelOptions = {
  presets: ['@babel/preset-env', '@babel/react'],
  plugins: [
    '@babel/plugin-proposal-function-bind',
    [
      'transform-imports',
      {
        'react-bootstrap': {
          transform: 'react-bootstrap/${member}',
          preventFullImport: true
        }
      }
    ]
  ]
};

module.exports = require('babel-jest').createTransformer(babelOptions);

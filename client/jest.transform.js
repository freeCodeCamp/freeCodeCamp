const babelOptions = {
  presets: ['@babel/preset-env', '@babel/react'],
  plugins: [
    '@babel/plugin-proposal-function-bind',
    [
      'transform-imports',
      {
        '@freecodecamp/react-bootstrap': {
          transform: '@freecodecamp/react-bootstrap/lib/${member}',
          preventFullImport: true
        },
        lodash: {
          transform: 'lodash/${member}',
          preventFullImport: true
        }
      }
    ]
  ]
};

module.exports = require('babel-jest').createTransformer(babelOptions);

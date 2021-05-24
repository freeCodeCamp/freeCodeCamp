const babelOptions = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 14
        }
      }
    ],
    '@babel/react'
  ]
};

module.exports = require('babel-jest').createTransformer(babelOptions);

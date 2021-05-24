const babelOptions = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 14
        },
        loose: true
      }
    ],
    '@babel/react'
  ]
};

module.exports = require('babel-jest').createTransformer(babelOptions);

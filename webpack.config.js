var webpack = require('webpack');
var path = require('path');
var webpack = require('webpack');

var __DEV__ = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './client',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public/js'),
    publicPath: 'public/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'client/'),
          path.join(__dirname, 'common/')
        ],
        loaders: [
          'babel-loader'
        ]
      },
      {
        test: /\.json$/,
        loaders: [
          'json-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(__DEV__ ? 'development' : 'production')
      },
      '__DEVTOOLS__': !__DEV__
    })
  ]
};

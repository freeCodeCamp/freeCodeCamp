var webpack = require('webpack');
var path = require('path');

var __DEV__ = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './client',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public/js'),
    publicPath: __DEV__ ? 'http://localhost:2999/js' : '/js'
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
  externals: {
    'codemirror': 'CodeMirror'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(__DEV__ ? 'development' : 'production')
      },
      '__DEVTOOLS__': !__DEV__
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

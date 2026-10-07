/* eslint-disable filenames/match-regex, import/no-commonjs */

const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    historyApiFallback: false,
    host: '127.0.0.1',
    hot: false,
    noInfo: false,
    port: 8000,
    publicPath: '/',
    quiet: false
  },
  devtool: 'source-map',
  entry: {
    'youtube-player': './youtube-player.js'
  },
  module: {
    loaders: [
      {
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader',
        test: /\.js$/
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: __dirname,
    publicPath: '/'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

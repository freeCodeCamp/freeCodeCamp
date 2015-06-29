var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var nodeModules = fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .reduce(function(nodeModules, module) {
    nodeModules[module] = 'commonjs ' + module;
    return nodeModules;
  }, {});

module.exports = {
  devtool: 'sourcemap',
  target: 'node',
  entry: './server/appEntry',
  // keeps webpack from bundling modules
  externals: nodeModules,
  output: {
    filename: 'fcc.js',
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
    new webpack.BannerPlugin(
      'require("source-map-support").install();',
      {
        raw: true,
        entryOnly: false
      }
    )
  ]
};

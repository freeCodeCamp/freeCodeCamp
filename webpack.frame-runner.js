const webpack = require('webpack');
const path = require('path');

const __DEV__ = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    'frame-runner': './client/frame-runner.js'
  },
  devtool: __DEV__ ? 'inline-source-map' : null,
  node: {
    // Mock Node.js modules that Babel require()s but that we don't
    // particularly care about.
    fs: 'empty',
    module: 'empty',
    net: 'empty'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name]-[name].js',
    path: path.join(__dirname, '/public/js'),
    publicPath: '/js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [ path.join(__dirname, 'client/') ],
        loaders: [ 'babel' ]
      }
    ]
  },
  externals: {
    rx: 'Rx'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(__DEV__ ? 'development' : 'production')
      },
      __DEVTOOLS__: !__DEV__
    }),
    // Use browser version of visionmedia-debug
    new webpack.NormalModuleReplacementPlugin(
      /debug\/node/,
      'debug/src/browser'
    ),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true)
  ]
};

if (__DEV__) {
  module.exports.plugins.push(
    // prevents build on error
    new webpack.NoErrorsPlugin()
  );
}

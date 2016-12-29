var webpack = require('webpack');
var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

var __DEV__ = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    bundle: './client'
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
    filename: __DEV__ ? 'bundle.js' : 'bundle-[hash].js',
    chunkFilename: __DEV__ ?
      'bundle-[name].js' :
      'bundle-[name]-[chunkhash].js',
    path: path.join(__dirname, '/public/js'),
    publicPath: '/js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'client/'),
          path.join(__dirname, 'common/')
        ],
        loaders: __DEV__ ? ['react-hot', 'babel'] : [ 'babel' ]
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
    codemirror: 'CodeMirror',
    'loop-protect': 'loopProtect'
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
      'debug'
    ),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true)
  ]
};

if (!__DEV__) {
  module.exports.plugins.push(
    new ManifestPlugin({ fileName: 'react-manifest.json' }),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest'
    })
  );
} else {
  module.exports.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
}

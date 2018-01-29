var webpack = require('webpack');
var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

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
    filename: __DEV__ ? '[name].js' : '[name]-[hash].js',
    chunkFilename: __DEV__ ?
      '[name].js' :
      '[name]-[chunkhash].js',
    path: path.join(__dirname, '/public/js'),
    publicPath: '/js'
  },
  resolve: {
    alias: {
      'dist/rx.all.js': 'rx/dist/rx.all.js'
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: [
        path.join(__dirname, 'client/'),
        path.join(__dirname, 'common/'),
        path.join(__dirname, 'server/')
      ],
      use: [
        __DEV__ && 'react-hot-loader',
        'babel-loader'
      ].filter(Boolean)
    }]
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
      'debug/src/browser'
    )
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
    new webpack.NoEmitOnErrorsPlugin(),
    // this will output a .html file in output.path
    new Visualizer({ filename: 'webpack-bundle-stats.html' })
  );
}

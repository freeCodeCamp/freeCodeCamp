const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const { getIfUtils, removeIfEmpty } = require('webpack-config-utils');

const getCommonConfig = require('./common/webpack.common.js');

module.exports = env => {
  const {
    ifNotProduction: ifDev,
    ifProduction: ifProd
  } = getIfUtils(env);
  return merge(getCommonConfig(env), {
    entry: { bundle: './client' },
    node: {
      // Mock Node.js modules that Babel require()s but that we don't
      // particularly care about.
      fs: 'empty',
      module: 'empty',
      net: 'empty'
    },
    output: removeIfEmpty({
      filename: ifDev('[name].js' : '[name]-[hash].js'),
      chunkFilename: ifDev(
        'bundle-[name].js',
        'bundle-[name]-[chunkhash].js'
      ),
      path: path.join(__dirname, '/public/js'),
      publicPath: '/js'
    }),
    module: {
      rules: [{
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'client/'),
          path.join(__dirname, 'common/'),
          path.join(__dirname, 'server/')
        ],
        use: removeIfEmpty([
          ifDev('react-hot-loader'),
          'babel-loader'
        ])
      }]
    },
    plugins: [
      ifProd(
        new UglifyPlugin({
          test: /\.js($|\?)/i,
          cache: true,
          sourceMap: true
        }),
      ),
      // Use browser version of visionmedia-debug
      new webpack.NormalModuleReplacementPlugin(
        /debug\/node/,
        'debug/src/browser'
      ),
      new Visualizer({ filename: 'bundle-stats.html' }),
      ifProd(new ManifestPlugin({ fileName: 'react-manifest.json' })),
      ifProd(new ChunkManifestPlugin({
        filename: 'chunk-manifest.json',
        manifestVariable: 'webpackManifest'
      })),
      ifDev(new webpack.HotModuleReplacementPlugin()),
      ifDev(new webpack.NoEmitOnErrorsPlugin())
    ]
  });
};

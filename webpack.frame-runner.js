const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const { getIfUtils, removeIfEmpty } = require('webpack-config-utils');

const getBaseConfig = require('./webpack.base.js');

module.exports = env => {
  const {
    ifProduction: ifProd,
    ifNotProduction: ifDev
  } = getIfUtils(env);
  return merge(getBaseConfig(env), {
    entry: { frameRunner: './client/frame-runner.js' },
    node: {
      // Mock Node.js modules that Babel require()s but that we don't
      // particularly care about.
      fs: 'empty',
      module: 'empty',
      net: 'empty'
    },
    output: {
      filename: ifDev('frame-runner.js', 'frame-runner-[hash].js'),
      path: path.join(__dirname, '/public/js'),
      publicPath: '/js'
    },
    stats: {
      // Examine all modules
      maxModules: Infinity,
      // Display bailout reasons
      optimizationBailout: true
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        include: [ path.join(__dirname, 'client/') ],
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [ 'es2015', { modules: false }],
              [ 'stage-3' ]
            ],
            plugins: [
              'transform-runtime',
              'lodash'
            ]
          }
        }
      }]
    },
    externals: {
      rx: 'Rx'
    },
    plugins: removeIfEmpty([
      ifProd(
        new UglifyPlugin({
          test: /\.js($|\?)/i,
          cache: true,
          sourceMap: true
        })
      ),
      // Use browser version of visionmedia-debug
      new webpack.NormalModuleReplacementPlugin(
        /debug\/node/,
        'debug/src/browser'
      ),
      new webpack.optimize.ModuleConcatenationPlugin(),
      ifDev(new webpack.NoEmitOnErrorsPlugin())
    ])
  });
};

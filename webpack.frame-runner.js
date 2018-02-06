const webpack = require('webpack');
const path = require('path');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

const __DEV__ = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './client/frame-runner.js',
  devtool: __DEV__ ? 'inline-source-map' : 'source-map',
  node: {
    // Mock Node.js modules that Babel require()s but that we don't
    // particularly care about.
    fs: 'empty',
    module: 'empty',
    net: 'empty'
  },
  output: {
    filename: __DEV__ ? 'frame-runner.js' : 'frame-runner-[hash].js',
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
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};

if (__DEV__) {
  module.exports.plugins.push(
    // prevents build on error
    new webpack.NoEmitOnErrorsPlugin()
  );
} else {
  module.exports.plugins.push(
    new UglifyPlugin({
      test: /\.js($|\?)/i,
      cache: true,
      sourceMap: true
    })
  );
}

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const {
  version: helperVersion
} = require('@freecodecamp/curriculum-helpers/package.json');
const { version } = require('./package.json');

module.exports = (env = {}) => {
  const __DEV__ = env.production !== true;

  return {
    cache: __DEV__ ? { type: 'filesystem' } : false,
    mode: __DEV__ ? 'development' : 'production',
    entry: {
      'sass-compile': './sass-compile.ts',
      'python-worker': './python-worker.ts',
      'typescript-worker': './typescript-worker.ts'
    },
    devtool: __DEV__ ? 'inline-source-map' : 'source-map',
    output: {
      chunkFilename: '[name]-[contenthash].js',
      path: path.resolve(__dirname, `dist/artifacts/workers/${version}`),
      clean: true
    },
    stats: {
      // Display bailout reasons
      optimizationBailout: true
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                [
                  '@babel/preset-env',
                  { modules: false, targets: '> 0.25%, not dead' }
                ],
                '@babel/preset-typescript'
              ],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-syntax-dynamic-import'
              ]
            }
          }
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          './node_modules/sass.js/dist/sass.sync.js',
          // TODO: copy this into the css folder, not the js folder
          './node_modules/xterm/css/xterm.css',
          {
            from: './node_modules/@freecodecamp/curriculum-helpers/dist/test-runner',
            to: `../../test-runner/${helperVersion}/`
          }
        ]
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser'
      }),
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer']
      })
    ],
    resolve: {
      fallback: {
        buffer: require.resolve('buffer'),
        util: require.resolve('util'),
        stream: false,
        process: require.resolve('process/browser.js')
      },
      extensions: ['.js', '.ts']
    }
  };
};

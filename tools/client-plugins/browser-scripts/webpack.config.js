const { writeFileSync } = require('fs');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = (env = {}) => {
  const __DEV__ = env.production !== true;
  const staticPath = path.join(__dirname, '../../../client/static/js');
  const configPath = path.join(
    __dirname,
    '../../../client/config/browser-scripts/'
  );
  return {
    cache: __DEV__ ? { type: 'filesystem' } : false,
    mode: __DEV__ ? 'development' : 'production',
    entry: {
      'frame-runner': './frame-runner.ts',
      'sass-compile': './sass-compile.ts',
      'test-evaluator': './test-evaluator.ts',
      'python-worker': './python-worker.ts',
      'python-test-evaluator': './python-test-evaluator.ts'
    },
    devtool: __DEV__ ? 'inline-source-map' : 'source-map',
    output: {
      publicPath: '/js/',
      filename: chunkData => {
        // construct and output the filename here, so the client can use the
        // json to find the file.
        const filename = `${chunkData.chunk.name}-${chunkData.chunk.contentHash.javascript}`;
        writeFileSync(
          path.join(configPath, `${chunkData.chunk.name}.json`),
          `{"filename": "${filename}"}`
        );
        return filename + '.js';
      },
      chunkFilename: '[name]-[contenthash].js',
      path: staticPath
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
          './node_modules/xterm/css/xterm.css'
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
        util: false,
        stream: false,
        process: require.resolve('process/browser.js')
      },
      extensions: ['.js', '.ts']
    }
  };
};

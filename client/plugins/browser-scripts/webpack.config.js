const { writeFileSync } = require('fs');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = (env = {}) => {
  const __DEV__ = env.production !== true;
  const staticPath = path.join(__dirname, '../../static/js');
  const configPath = path.join(__dirname, '../../../config/client');
  return {
    cache: __DEV__ ? { type: 'filesystem' } : false,
    mode: __DEV__ ? 'development' : 'production',
    entry: {
      'frame-runner': './frame-runner.ts',
      'sass-compile': './sass-compile.ts',
      'test-evaluator': './test-evaluator.ts'
    },
    devtool: __DEV__ ? 'inline-source-map' : 'source-map',
    output: {
      publicPath: '/js/',
      // @ts-expect-error I'm okay with this being 'any' for now
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
        patterns: ['./node_modules/sass.js/dist/sass.sync.js']
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
        process: require.resolve('process/browser')
      },
      extensions: ['.js', '.ts']
    },
    // To keep the client React version decoupled from the curriculum React
    // version we use externals to stops Webpack from bundling React and
    // ReactDOM (they're fetched from unpkg when needed by the client or
    // curriculum tests). react-dom/server and react-dom/test-utils are included
    // separately because enzyme-adapter-react-16 imports them directly.
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-dom/server': 'ReactDOMServer',
      'react-dom/test-utils': 'ReactTestUtils'
    }
  };
};

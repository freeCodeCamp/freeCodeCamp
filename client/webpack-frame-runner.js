const path = require('path');

module.exports = (env = {}) => {
  const __DEV__ = env.production !== true;
  return {
    mode: __DEV__ ? 'development' : 'production',
    entry: {
      'frame-runner': './src/client/frame-runner.js',
      'sass-compile': './src/client/workers/sass-compile.js'
    },
    devtool: __DEV__ ? 'inline-source-map' : 'source-map',
    output: {
      path: path.join(__dirname, './static/js')
    },
    stats: {
      // Display bailout reasons
      optimizationBailout: true
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [path.join(__dirname, 'src/client/')],
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                [
                  '@babel/preset-env',
                  { modules: false, targets: '> 0.25%, not dead' }
                ]
              ],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        }
      ]
    }
  };
};

const webpack = require('webpack');
const { getIfUtils } = require('webpack-config-utils');

module.exports = env => {
  const {
    ifNotProduction: ifDev,
    ifProduction: ifProd
  } = getIfUtils(env);
  return {
    devtool: ifProd('source-map', 'inline-source-map'),
    resolve: {
      alias: {
        'dist/rx.all.js': 'rx/dist/rx.all.js'
      }
    },
    externals: {
      codemirror: 'CodeMirror',
      'loop-protect': 'loopProtect'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(ifDev('development' : 'production'))
        },
        __DEVTOOLS__: ifDev()
      })
    ]
  };
};

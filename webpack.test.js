const path = require('path');

// exports an instance of webpack-configurator
const config = require('./common/webpack.common.js');
const TestFileGenerator =
  require('./common/testing/wepback-test-file-generator.js');

config.merge({
  entry: './common/testing',
  output: {
    filename: __DEV__ ? 'test.js' : 'test-[hash].js',
    chunkFilename: __DEV__ ?
      'test-[name].js' :
      'test-[name]-[chunkhash].js',
    path: path.join(__dirname, '/test/challenges')
  }
})
  .plugin(
    'test-file-generator',
    TestFileGenerator,
    [{

    }]
  );

module.exports = config.resolve();

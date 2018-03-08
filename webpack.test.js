require('babel-register');
require('dotenv').load();

const path = require('path');
const del = require('del');
const _ = require('lodash/fp');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { getIfUtils, removeEmpty } = require('webpack-config-utils');

const getBaseConfig = require('./webpack.base.js');
const TestFileGenerator =
  require('./common/testing/wepback-test-file-generator.js');

const getChallenges = require('./seed/getChallenges.js');
const {
  createChallengesArray,
  createPaths
} = require('./seed/create-challenges.js');

const outputPath = path.join(__dirname, '.cache/test/challenges');
// delete old challenge test files
del.sync(outputPath + '/**');

const getPaths = _.flow(
  getChallenges,
  createChallengesArray,
  ([blocks, challenges]) => [
    blocks,
    // filter out challenges with no solutions
    _.filter(({ solutions = [] }) => solutions.length)(challenges)
  ],
  createPaths
);
const { paths, challengesByPath } = getPaths();
module.exports = env => {
  const { ifNotProduction: ifDev } = getIfUtils(env);
  return merge(getBaseConfig(env), {
    // always inline source map
    devtool: 'inline-source-map',
    target: 'node',
    // this sets the values of these to global vars to what you
    // would expect
    context: __dirname,
    node: {
      __dirname: true
    },
    entry: { test: './common/testing' },
    output: {
      filename: 'test.js',
      path: outputPath,
      libraryTarget: 'umd'
    },
    plugins: removeEmpty([
      new TestFileGenerator({
        // generate paths from challenges
        // superblock/block/challenge.js
        paths: paths,
        locals: { challengesByPath }
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      ifDev(new webpack.NoEmitOnErrorsPlugin())
    ])
  });
};

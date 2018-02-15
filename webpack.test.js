require('babel-register');
require('dotenv').load();

const _ = require('lodash/fp');
const path = require('path');
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

const getPaths = _.flow(getChallenges, createChallengesArray, createPaths);
const { paths, challengesByPath } = getPaths();
module.exports = env => {
  const { ifNotProduction: ifDev } = getIfUtils(env);
  return merge(getBaseConfig(env), {
    // always inline source map
    devtool: 'inline-source-map',
    target: 'node',
    entry: { test: './common/testing' },
    output: {
      filename: 'test.js',
      path: path.join(__dirname, '.cache/test/challenges'),
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

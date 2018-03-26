const path = require('path');
const { getChallengesByFile } = require('../seed/getChallenges');

module.exports = {
  siteMetadata: {
    title: 'freeCodeCamp | Learn to code and help non-profits',
    siteUrl: 'https://learn.freecodecamp.org'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'fcc-source-challenges',
      options: {
        name: 'challenges',
        path: path.resolve(__dirname, '../seed/challenges'),
        source: getChallengesByFile
      }
    },
    'gatsby-transformer-json'
  ]
};

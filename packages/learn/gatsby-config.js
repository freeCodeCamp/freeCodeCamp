require('dotenv').config();

const path = require('path');
const { buildChallenges$ } = require('./seed/buildChallenges');

module.exports = {
  siteMetadata: {
    title: 'freeCodeCamp | Learn to code and help non-profits ',
    siteUrl: 'https://learn.freecodecamp.org'
  },
  proxy: {
    prefix: '/external',
    url: 'http://localhost:3000'
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'fcc-source-challenges',
      options: {
        name: 'challenges',
        path: path.resolve(__dirname, './seed/challenges'),
        source: buildChallenges$
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'introductions',
        path: path.resolve(__dirname, './src/introductions')
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Lato:400,400i,700']
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline'
  ]
};

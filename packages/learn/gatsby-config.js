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
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {}
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Lato:400,400i,500']
      }
    },
    'gatsby-plugin-sitemap'
  ]
};

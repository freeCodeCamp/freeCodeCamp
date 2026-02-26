const path = require('path');
const envData = require('./config/env.json');
const {
  buildChallenges,
  replaceChallengeNodes,
  localeChallengesRootDir
} = require('./utils/build-challenges');
const { pathPrefix } = require('./utils/gatsby/path-prefix');

const { curriculumLocale, homeLocation } = envData;

const curriculumIntroRoot = path.resolve(__dirname, './src/pages');

module.exports = {
  flags: {
    DEV_SSR: false
  },
  trailingSlash: 'ignore',
  siteMetadata: {
    title: 'freeCodeCamp',
    siteUrl: homeLocation
  },
  pathPrefix: pathPrefix,
  plugins: [
    'gatsby-plugin-pnpm-gatsby-5',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'disabled',
        // It doesn't matter if the file is generated or not as far as caching
        // is concerned. It doesn't affect any tasks in any way, so we can
        // ignore it.

        // eslint-disable-next-line turbo/no-undeclared-env-vars
        generateStatsFile: process.env.CI
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, 'postcss.config.js')
        }
      }
    },
    {
      resolve: require.resolve(
        '../tools/client-plugins/gatsby-source-challenges'
      ),
      options: {
        name: 'challenges',
        source: buildChallenges,
        onSourceChange: replaceChallengeNodes(curriculumLocale),
        curriculumPath: localeChallengesRootDir
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'introductions',
        path: curriculumIntroRoot
      }
    },
    {
      resolve: 'gatsby-transformer-remark'
    },
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: 'gatsby-plugin-schema-snapshot',
      options: {
        path: 'schema.gql',
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT === 'true'
      }
    }
  ]
};

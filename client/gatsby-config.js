const path = require('path');
const envData = {
  homeLocation: 'http://localhost:8000',
  apiLocation: 'http://localhost:3000',
  forumLocation: 'https://forum.freecodecamp.org',
  newsLocation: 'https://www.freecodecamp.org/news',
  radioLocation: 'https://coderadio.freecodecamp.org',
  clientLocale: 'english',
  curriculumLocale: 'english',
  showLocaleDropdownMenu: false,
  deploymentEnv: 'staging',
  environment: 'development',
  algoliaAppId: '',
  algoliaAPIKey: '',
  stripePublicKey: null,
  paypalClientId: null,
  patreonClientId: null,
  showUpcomingChanges: false,
  showNewCurriculum: true,
  growthbookUri: null
};
const {
  buildChallenges,
  replaceChallengeNode,
  localeChallengesRootDir
} = require('./utils/build-challenges');

const { clientLocale, curriculumLocale, homeLocation } = envData;

const curriculumIntroRoot = path.resolve(__dirname, './src/pages');
const pathPrefix = clientLocale === 'english' ? '' : '/' + clientLocale;

module.exports = {
  flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    title: 'freeCodeCamp',
    siteUrl: homeLocation
  },
  pathPrefix: pathPrefix,
  plugins: [
    'gatsby-plugin-pnpm',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'disabled',
        generateStatsFile: process.env.CI
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: {
        prefixes: [
          '/certification/*',
          '/unsubscribed/*',
          '/user/*',
          '/settings/*',
          '/n/*'
        ]
      }
    },
    {
      resolve: require.resolve(
        '../tools/client-plugins/gatsby-source-challenges'
      ),
      options: {
        name: 'challenges',
        source: buildChallenges,
        onSourceChange: replaceChallengeNode(curriculumLocale),
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
    {
      resolve: require.resolve(
        '../tools/client-plugins/gatsby-remark-node-identity'
      ),
      options: {
        identity: 'blockIntroMarkdown',
        predicate: ({ frontmatter }) => {
          if (!frontmatter) {
            return false;
          }
          const { title, block, superBlock } = frontmatter;
          return title && block && superBlock;
        }
      }
    },
    {
      resolve: require.resolve(
        '../tools/client-plugins/gatsby-remark-node-identity'
      ),
      options: {
        identity: 'superBlockIntroMarkdown',
        predicate: ({ frontmatter }) => {
          if (!frontmatter) {
            return false;
          }
          const { title, block, superBlock } = frontmatter;
          return title && !block && superBlock;
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'freeCodeCamp',
        short_name: 'fCC',
        start_url: '/',
        theme_color: '#0a0a23',
        background_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/assets/images/square_puck.png'
      }
    },
    'gatsby-plugin-remove-serviceworker'
  ]
};

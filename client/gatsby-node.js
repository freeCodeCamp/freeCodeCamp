const { createFilePath } = require('gatsby-source-filesystem');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const webpack = require('webpack');

const { SuperBlocks } = require('@freecodecamp/shared/config/curriculum');
const env = require('./config/env.json');
const { createSuperBlockIntroPages } = require('./utils/gatsby');

exports.onCreateNode = function onCreateNode({ node, actions, getNode }) {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode });
    if (!slug.includes('LICENSE')) {
      createNodeField({ node, name: 'slug', value: slug });
    }
  }
};

exports.createPages = async function createPages({
  graphql,
  actions,
  reporter
}) {
  if (!env.algoliaAPIKey || !env.algoliaAppId) {
    if (process.env.FREECODECAMP_NODE_ENV === 'production') {
      throw new Error(
        'Algolia App id and API key are required to start the client!'
      );
    } else {
      reporter.info(
        'Algolia keys missing or invalid. Required for search to yield results.'
      );
    }
  }

  if (!env.stripePublicKey) {
    if (process.env.FREECODECAMP_NODE_ENV === 'production') {
      throw new Error('Stripe public key is required to start the client!');
    } else {
      reporter.info(
        'Stripe public key is missing or invalid. Required for Stripe integration.'
      );
    }
  }

  const { createPage } = actions;

  const result = await graphql(`
    {
      allChallengeNode(
        sort: [
          { challenge: { superOrder: ASC } }
          { challenge: { order: ASC } }
          { challenge: { challengeOrder: ASC } }
        ]
      ) {
        edges {
          node {
            challenge {
              block
            }
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              certification
              superBlock
              title
            }
            id
          }
        }
      }
    }
  `);

  // Includes upcoming superBlocks
  const allSuperBlocks = Object.values(SuperBlocks);

  // Create intro pages
  // TODO: Remove allMarkdownRemark (populate from elsewhere)
  result.data.allMarkdownRemark.edges.forEach(edge => {
    const {
      node: { frontmatter, fields }
    } = edge;

    if (!fields) {
      throw Error(
        "'fields' property missing (this should be added in onCreateNode)"
      );
    }
    const { slug } = fields;
    if (slug.includes('LICENCE')) {
      return;
    }

    if (!allSuperBlocks.includes(frontmatter.superBlock)) {
      throw Error(`Unknown superblock ${frontmatter.superBlock}`);
    }

    const pageBuilder = createSuperBlockIntroPages(createPage);
    pageBuilder(edge);
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const newPlugins = [
    // We add the shims of the node globals to the global scope
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  ];
  // The monaco editor relies on some browser only globals so should not be
  // involved in SSR. Also, if the plugin is used during the 'build-html' or
  // 'develop-html' stage it overwrites the minfied files with ordinary ones.
  if (stage !== 'build-html' && stage !== 'develop-html') {
    newPlugins.push(
      new MonacoWebpackPlugin({ filename: '[name].worker-[contenthash].js' })
    );
  }
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: false,
        path: require.resolve('path-browserify'),
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        util: require.resolve('util/util'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
        process: require.resolve('process/browser')
      }
    },
    plugins: newPlugins,
    ignoreWarnings: [
      warning => {
        if (warning instanceof Error) {
          if (warning.message.includes('mini-css-extract-plugin')) {
            return true;
          }
        }
        return false;
      }
    ]
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-function-bind'
  });
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-default-from'
  });
};

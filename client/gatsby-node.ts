/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const webpack = require('webpack');

const env = require('./config/env.json');
const { createSuperBlockIntroPages } = require('./utils/gatsby');

exports.createPages = async function createPages({
  actions,
  graphql,
  reporter
}: any) {
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

  const {
    data: { allSuperBlockStructure }
  } = await graphql(`
    {
      allSuperBlockStructure {
        nodes {
          superBlock
        }
      }
    }
  `);

  const superBlocks = allSuperBlockStructure.nodes.map(
    (node: { superBlock: string }) => node.superBlock
  );
  superBlocks.forEach((superBlock: string) => {
    createSuperBlockIntroPages(createPage)({ superBlock });
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }: any) => {
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
        path: 'path-browserify',
        assert: 'assert',
        crypto: 'crypto-browserify',
        util: 'util/util',
        buffer: 'buffer',
        stream: 'stream-browserify',
        process: 'process/browser'
      }
    },
    plugins: newPlugins,
    ignoreWarnings: [
      (warning: Error) => {
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

exports.onCreateBabelConfig = ({ actions }: any) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-function-bind'
  });
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-default-from'
  });
};

exports.createSchemaCustomization = ({ actions }: any) => {
  const { createTypes } = actions;
  // This hook is supported by the test runner, but is not currently used by the
  // client, so we have to tell Gatsby that it exists.
  const typeDefs = `
    type ChallengeNodeChallengeHooks {
      afterEach: String
    }
  `;
  createTypes(typeDefs);
};

export {};

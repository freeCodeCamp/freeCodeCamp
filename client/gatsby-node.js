const { createFilePath } = require('gatsby-source-filesystem');
// TODO: ideally we'd remove lodash and just use lodash-es, but we can't require
// es modules here.
const uniq = require('lodash/uniq');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const webpack = require('webpack');
const env = require('../config/env.json');

const { blockNameify } = require('../utils/block-nameify');
const {
  createChallengePages,
  createBlockIntroPages,
  createSuperBlockIntroPages
} = require('./utils/gatsby');

const createByIdentityMap = {
  blockIntroMarkdown: createBlockIntroPages,
  superBlockIntroMarkdown: createSuperBlockIntroPages
};

exports.onCreateNode = function onCreateNode({ node, actions, getNode }) {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode });
    if (!slug.includes('LICENSE')) {
      const {
        frontmatter: { component = '' }
      } = node;
      createNodeField({ node, name: 'slug', value: slug });
      createNodeField({ node, name: 'component', value: component });
    }
  }
};

exports.createPages = function createPages({ graphql, actions, reporter }) {
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

  return new Promise((resolve, reject) => {
    // Query for all markdown 'nodes' and for the slug we previously created.
    resolve(
      graphql(`
        {
          allChallengeNode(
            sort: {
              fields: [
                challenge___superOrder
                challenge___order
                challenge___challengeOrder
              ]
            }
          ) {
            edges {
              node {
                challenge {
                  block
                  certification
                  challengeType
                  fields {
                    slug
                  }
                  hasEditableBoundaries
                  id
                  order
                  required {
                    link
                    src
                  }
                  challengeOrder
                  challengeFiles {
                    name
                    ext
                    contents
                    head
                    tail
                    history
                    fileKey
                  }
                  solutions {
                    contents
                    ext
                    history
                  }
                  superBlock
                  superOrder
                  template
                  usesMultifileEditor
                }
              }
            }
          }
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                  nodeIdentity
                  component
                }
                frontmatter {
                  certification
                  block
                  superBlock
                  title
                }
                htmlAst
                id
                excerpt
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          return reject(result.errors);
        }

        // Create challenge pages.
        result.data.allChallengeNode.edges.forEach(
          createChallengePages(createPage)
        );

        const blocks = uniq(
          result.data.allChallengeNode.edges.map(
            ({
              node: {
                challenge: { block }
              }
            }) => block
          )
        ).map(block => blockNameify(block));

        const superBlocks = uniq(
          result.data.allChallengeNode.edges.map(
            ({
              node: {
                challenge: { superBlock }
              }
            }) => superBlock
          )
        );

        // Create intro pages
        // TODO: Remove allMarkdownRemark (populate from elsewhere)
        result.data.allMarkdownRemark.edges.forEach(edge => {
          const {
            node: { frontmatter, fields }
          } = edge;

          if (!fields) {
            return;
          }
          const { slug, nodeIdentity } = fields;
          if (slug.includes('LICENCE')) {
            return;
          }
          try {
            if (nodeIdentity === 'blockIntroMarkdown') {
              if (!blocks.includes(frontmatter.block)) {
                return;
              }
            } else if (!superBlocks.includes(frontmatter.superBlock)) {
              return;
            }
            const pageBuilder = createByIdentityMap[nodeIdentity](createPage);
            pageBuilder(edge);
          } catch (e) {
            console.log(e);
            console.log(`
            ident: ${nodeIdentity} does not belong to a function

            ${frontmatter ? JSON.stringify(edge.node) : 'no frontmatter'}


            `);
          }
        });

        return null;
      })
    );
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
  // involved in SSR. Also, if the plugin is used during the 'build-html' stage
  // it overwrites the minfied files with ordinary ones.
  if (stage !== 'build-html') {
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
    plugins: newPlugins
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-function-bind'
  });
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-default-from'
  });
  actions.setBabelPlugin({
    name: 'babel-plugin-transform-imports',
    options: {
      '@freecodecamp/react-bootstrap': {
        transform: '@freecodecamp/react-bootstrap/lib/${member}',
        preventFullImport: true
      }
    }
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  // Only update the `/challenges` page.
  if (page.path.match(/^\/challenges/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = '/challenges/*';
    // Update the page.
    createPage(page);
  }
};

// Take care to QA the challenges when modifying this. It has broken certain
// types of challenge in the past.
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type ChallengeNode implements Node {
      challenge: Challenge
    }
    type Challenge {
      challengeFiles: [FileContents]
      notes: String
      url: String
      assignments: [String]
    }
    type FileContents {
      fileKey: String
      ext: String
      name: String
      contents: String
      head: String
      tail: String
      editableRegionBoundaries: [Int]
    }
  `;
  createTypes(typeDefs);
};

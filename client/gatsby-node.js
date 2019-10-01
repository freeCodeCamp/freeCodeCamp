require('dotenv').config();

const { createFilePath } = require('gatsby-source-filesystem');

const { dasherize } = require('../utils/slugs');
const { blockNameify } = require('./utils/blockNameify');
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
  if (node.internal.type === 'ChallengeNode') {
    const { tests = [], block, title, superBlock } = node;
    const slug = `/learn/${dasherize(superBlock)}/${dasherize(
      block
    )}/${dasherize(title)}`;
    createNodeField({ node, name: 'slug', value: slug });
    createNodeField({ node, name: 'blockName', value: blockNameify(block) });
    createNodeField({ node, name: 'tests', value: tests });
  }

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

exports.createPages = function createPages({ graphql, actions }) {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    // Query for all markdown 'nodes' and for the slug we previously created.
    resolve(
      graphql(`
        {
          allChallengeNode(
            sort: { fields: [superOrder, order, challengeOrder] }
          ) {
            edges {
              node {
                block
                challengeType
                fields {
                  slug
                }
                id
                order
                required {
                  link
                  src
                }
                challengeOrder
                superBlock
                superOrder
                template
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

        // Create intro pages
        result.data.allMarkdownRemark.edges.forEach(edge => {
          const {
            node: { frontmatter, fields }
          } = edge;

          if (!fields) {
            return null;
          }
          const { slug, nodeIdentity } = fields;
          if (slug.includes('LICENCE')) {
            return null;
          }
          try {
            const pageBuilder = createByIdentityMap[nodeIdentity](createPage);
            return pageBuilder(edge);
          } catch (e) {
            console.log(`
            ident: ${nodeIdentity} does not belong to a function

            ${frontmatter ? JSON.stringify(edge.node) : 'no frontmatter'}


            `);
          }
          return null;
        });

        return null;
      })
    );
  });
};

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

exports.onCreateWebpackConfig = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    },
    plugins: [
      plugins.define({
        HOME_PATH: JSON.stringify(
          process.env.HOME_PATH || 'http://localhost:3000'
        ),
        STRIPE_PUBLIC_KEY: JSON.stringify(process.env.STRIPE_PUBLIC_KEY || ''),
        ROLLBAR_CLIENT_ID: JSON.stringify(process.env.ROLLBAR_CLIENT_ID || ''),
        ENVIRONMENT: JSON.stringify(
          process.env.FREECODECAMP_NODE_ENV || 'development'
        ),
        PAYPAL_SUPPORTERS: JSON.stringify(process.env.PAYPAL_SUPPORTERS || 404)
      }),
      new MonacoWebpackPlugin()
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
  actions.setBabelPlugin({
    name: 'babel-plugin-transform-imports',
    options: {
      '@freecodecamp/react-bootstrap': {
        transform: '@freecodecamp/react-bootstrap/lib/${member}',
        preventFullImport: true
      },
      lodash: {
        transform: 'lodash/${member}',
        preventFullImport: true
      }
    }
  });
};

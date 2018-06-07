require('dotenv').config();
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { dasherize } = require('./utils');
const { blockNameify } = require('./utils/blockNameify');
const { createChallengePages, createIntroPages } = require('./utils/gatsby');

exports.onCreateNode = function onCreateNode({ node, boundActionCreators }) {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'ChallengeNode') {
    const { tests = [], block, title, superBlock } = node;

    const slug = `/${dasherize(superBlock)}/${dasherize(block)}/${dasherize(
      title
    )}`;
    createNodeField({ node, name: 'slug', value: slug });
    createNodeField({ node, name: 'blockName', value: blockNameify(block) });
    createNodeField({ node, name: 'tests', value: tests });
  }

  if (node.internal.type === 'MarkdownRemark') {
    const { frontmatter: { block, superBlock } } = node;

    let slug = `/${dasherize(superBlock)}`;

    // Without this condition the slug for superblocks ends up as something like
    // "/apis-and-microservice/undefined" and what we want instead is just
    // "/apis-and-microservice"
    if (typeof block !== 'undefined') {
      slug = slug + `/${dasherize(block)}`;
    }

    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    // Query for all markdown 'nodes' and for the slug we previously created.
    resolve(
      graphql(`
        {
          allChallengeNode(sort: { fields: [superOrder, order, suborder] }) {
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
                  raw
                  src
                }
                suborder
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
                }
                frontmatter {
                  block
                  superBlock
                  title
                }
                html
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create challenge pages.
        result.data.allChallengeNode.edges.forEach(
          createChallengePages(createPage)
        );

        // Create intro pages
        result.data.allMarkdownRemark.edges.forEach(
          createIntroPages(createPage)
        );

        return;
      })
    );
  });
};

const webpack = require('webpack');
const RmServiceWorkerPlugin = require('webpack-remove-serviceworker-plugin');
const generateBabelConfig = require('gatsby/dist/utils/babel-config');

exports.modifyWebpackConfig = ({ config, stage }) => {
  const program = {
    directory: __dirname,
    browserslist: ['> 1%', 'last 2 versions', 'IE >= 9']
  };

  return generateBabelConfig(program, stage).then(babelConfig => {
    config.removeLoader('js').loader('js', {
      test: /\.jsx?$/,
      /* eslint-disable max-len */
      exclude: modulePath => {
        return (
          /node_modules/.test(modulePath) &&
          !(/(ansi-styles|chalk|strict-uri-encode|react-freecodecamp-search)/).test(
            modulePath
          )
        );
      },
      /* eslint-enable max-len*/
      loader: 'babel',
      query: babelConfig
    });
    config.plugin('CopyWebpackPlugin', CopyWebpackPlugin, [
      [
        {
          from: path.resolve(__dirname, './node_modules/monaco-editor/min/vs'),
          to: 'vs'
        }
      ]
    ]);
    config.plugin('DefinePlugin', webpack.DefinePlugin, [
      {
        HOME_PATH: JSON.stringify(
          process.env.HOME_PATH || 'http://localhost:3000'
        ),
        STRIPE_PUBLIC_KEY: JSON.stringify(process.env.STRIPE_PULIC_KEY || '')
      }
    ]);
    config.plugin('RemoveServiceWorkerPlugin', RmServiceWorkerPlugin, [
      { filename: 'sw.js' }
    ]);
  });
};
/* eslint-disable prefer-object-spread/prefer-object-spread */
exports.modifyBabelrc = ({ babelrc }) =>
  Object.assign({}, babelrc, {
    plugins: babelrc.plugins.concat([
      [
        'transform-es2015-arrow-functions',
        'transform-imports',
        'transform-function-bind',
        {
          'react-bootstrap': {
            transform: 'react-bootstrap/lib/${member}',
            preventFullImport: true
          },
          lodash: {
            transform: 'lodash/${member}',
            preventFullImport: true
          }
        }
      ]
    ])
  });

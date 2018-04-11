const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { dasherize } = require('./utils');
const { viewTypes } = require('./utils/challengeTypes');
const { blockNameify } = require('./utils/blockNameify');

const classic = path.resolve(
  __dirname,
  './src/templates/Challenges/classic/Show.js'
);

const views = {
  // backend: BackEnd,
  classic,
  modern: classic,
  project: path.resolve(__dirname, './src/templates/Challenges/project/Show.js')
  // quiz: Quiz,
  // simple: Project,
  // invalid: NotFound
};

exports.onCreateNode = function onCreateNode({ node, boundActionCreators }) {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'ChallengeNode') {
    const { tests = [], block, title, superBlock } = node;

    const slug = `/${dasherize(superBlock)}/${dasherize(block)}/${dasherize(
      title
    )}`;
    createNodeField({ node, name: 'slug', value: slug });
    createNodeField({ node, name: 'blockName', value: blockNameify(block) });
    // TODO: Normalise tests to { test: '', testString: ''}?
    createNodeField({ node, name: 'tests', value: tests });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    // Query for all markdown "nodes" and for the slug we previously created.
    resolve(
      graphql(`
        {
          allChallengeNode(sort: { fields: [superOrder, order, suborder] }) {
            edges {
              node {
                challengeType
                id
                required {
                  link
                  raw
                  src
                }
                template
                fields {
                  slug
                }
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
        result.data.allChallengeNode.edges.forEach((edge, index, thisArray) => {
          const { fields: { slug }, required = [], template, challengeType, id } = edge.node;
          const next = thisArray[index + 1];
          const nextChallengePath = next ? next.node.fields.slug : '/';
          createPage({
            path: slug,
            component: views[viewTypes[challengeType]],
            context: {
              challengeMeta: {
                template,
                required,
                nextChallengePath,
                id
              },
              slug
            }
          });
        });

        return;
      })
    );
  });
};

const generateBabelConfig = require('gatsby/dist/utils/babel-config');

exports.modifyWebpackConfig = ({ config, stage }) => {
  const program = {
    directory: __dirname,
    browserslist: ['> 1%', 'last 2 versions', 'IE >= 9']
  };

  return generateBabelConfig(program, stage).then(babelConfig => {
    config.removeLoader('js').loader('js', {
      test: /\.jsx?$/,
      exclude: modulePath => {
        return (
          /node_modules/.test(modulePath) &&
          !(/node_modules\/(ansi-styles|chalk)/).test(modulePath)
        );
      },
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
  });
};

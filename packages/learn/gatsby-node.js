const path = require('path');
const { dasherize } = require('./utils');
const { viewTypes } = require('./utils/challengeTypes');
const { blockNameify } = require('./utils/blockNameify');

const views = {
  // backend: BackEnd,
  classic: path.resolve(
    __dirname,
    './src/templates/Challenges/views/classic/Show.js'
  ),
  // modern: Modern,
  project: path.resolve(
    __dirname,
    './src/templates/Challenges/views/project/Show.js'
  ),
  // quiz: Quiz,
  // simple: Project,
  step: path.resolve(__dirname, './src/templates/Challenges/views/step/Show.js')
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
          const { fields: { slug }, challengeType, id } = edge.node;
          const next = thisArray[index + 1];
          const nextChallengePath = next ? next.node.fields.slug : '/';
          createPage({
            path: slug,
            component: views[viewTypes[challengeType]],
            context: {
              challengeMeta: {
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

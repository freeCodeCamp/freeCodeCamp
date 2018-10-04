const { createNavigationNode } = require('./create-navigation-node');

exports.onCreateNode = ({ actions, node }) => {
  const { internal: {type, identity}} = node;
  if (type === 'MarkdownRemark' && identity === 'guideMarkdown') {
    if (node.fileAbsolutePath.includes('LICENSE.md')) {
      return null;
    }
    const { createNode } = actions;
    return Promise.resolve(createNavigationNode(node)).then(createNode);
  }
  return null;
};

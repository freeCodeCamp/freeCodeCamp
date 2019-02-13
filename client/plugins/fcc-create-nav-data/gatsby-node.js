const { createNavigationNode } = require('./create-navigation-node');

exports.onCreateNode = function createNavDataOnCreateNode({ actions, node }) {
  const {
    internal: { type },
    fields
  } = node;
  if (
    type === 'MarkdownRemark' &&
    fields &&
    fields.nodeIdentity === 'guideMarkdown'
  ) {
    if (node.fileAbsolutePath.includes('LICENSE.md')) {
      return null;
    }
    const { createNode } = actions;
    const navNode = createNavigationNode(node);
    return createNode(navNode);
  }
  return null;
};

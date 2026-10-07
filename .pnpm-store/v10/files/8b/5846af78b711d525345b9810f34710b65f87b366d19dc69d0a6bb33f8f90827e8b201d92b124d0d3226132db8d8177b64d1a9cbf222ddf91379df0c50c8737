"use strict";

const grayMatter = require(`gray-matter`);
const _ = require(`lodash`);
function shouldOnCreateNode({
  node
}) {
  return node.internal.mediaType === `text/markdown` || node.internal.mediaType === `text/x-markdown`;
}
module.exports.onCreateNode = async function onCreateNode({
  node,
  loadNodeContent,
  actions,
  createNodeId,
  reporter,
  createContentDigest
}, pluginOptions) {
  const {
    createNode,
    createParentChildLink
  } = actions;
  const content = await loadNodeContent(node);
  try {
    const data = grayMatter(content, pluginOptions);
    if (data.data) {
      data.data = _.mapValues(data.data, value => {
        if (_.isDate(value)) {
          return value.toJSON();
        }
        return value;
      });
    }
    const markdownNode = {
      id: createNodeId(`${node.id} >>> MarkdownRemark`),
      children: [],
      parent: node.id,
      internal: {
        content: data.content,
        type: `MarkdownRemark`
      }
    };
    markdownNode.frontmatter = {
      title: ``,
      // always include a title
      ...data.data
    };
    markdownNode.excerpt = data.excerpt;
    markdownNode.rawMarkdownBody = data.content;

    // Add path to the markdown file path
    if (node.internal.type === `File`) {
      markdownNode.fileAbsolutePath = node.absolutePath;
    }
    markdownNode.internal.contentDigest = createContentDigest(markdownNode);
    createNode(markdownNode);
    createParentChildLink({
      parent: node,
      child: markdownNode
    });
    return markdownNode;
  } catch (err) {
    reporter.panicOnBuild(`Error processing Markdown ${node.absolutePath ? `file ${node.absolutePath}` : `in node ${node.id}`}:\n
      ${err.message}`);
    return {}; // eslint
  }
};

module.exports.shouldOnCreateNode = shouldOnCreateNode;
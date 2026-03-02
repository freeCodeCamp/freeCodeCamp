const mdastToHtml = require('./mdast-to-html');

function getParagraphContent(node) {
  return node.type === 'paragraph' ? mdastToHtml(node.children) : null;
}

module.exports.getParagraphContent = getParagraphContent;

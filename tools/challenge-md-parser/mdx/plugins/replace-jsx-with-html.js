const visit = require('unist-util-visit');
const remark = require('remark');

const getAllBetween = require('./utils/between-headings');

function jsxToHtml(sectionIds) {
  if (!sectionIds || !Array.isArray(sectionIds) || sectionIds.length <= 0) {
    throw new Error('jsxToHtml must have an array of section ids supplied');
  }
  function transformer(tree) {
    for (const sectionId of sectionIds) {
      const textNodes = getAllBetween(tree, `--${sectionId}--`);

      textNodes.forEach(node => visit(node, 'jsx', visitor));
    }
  }

  // There's no need to add siblings, so we don't need to update the parent
  function visitor(node) {
    const replacement = remark().parse(node.value);

    if (replacement.children[0].type === 'html') {
      // case one: the jsx is inside a paragraph. It will only contain a single
      // tag (e.g. '<div>') and just needs a type change.
      node.type = 'html';
    } else {
      // case two: the paragraph starts with jsx. The mdx parser puts the entire
      // string into the value (e.g. '<code> code in </code> *code* tags'). This
      // gets output without parsing the markdown, so we have to replace it with
      // the parsed version.
      delete node.value;
      node.type = 'paragraph';
      node.children = replacement.children[0].children;
    }
  }
  return transformer;
}

module.exports = jsxToHtml;

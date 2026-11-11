const hastToHTML = require('hast-util-to-html');
const { root } = require('mdast-builder');
const mdastToHast = require('mdast-util-to-hast');
const unified = require('unified');
const rehypeParse = require('rehype-parse');
const validateHAST = require('./validate-hast');

function mdastToHTML(nodes, hastOptions = {}) {
  if (!Array.isArray(nodes))
    throw Error('mdastToHTML expects an array argument');

  // Convert mdast to hast, preserving any raw HTML from the markdown.
  // With allowDangerousHtml: true, raw HTML is kept as 'raw' nodes (unparsed strings)
  // rather than being converted to proper element nodes.
  const hastTree = mdastToHast(root(nodes), {
    allowDangerousHtml: true,
    ...hastOptions
  });

  // Serialize hast to HTML string
  const htmlString = hastToHTML(hastTree, { allowDangerousHtml: true });

  // The hastTree contains 'raw' nodes for raw HTML in markdown.
  // The validator only checks 'element' nodes, so raw nodes would be skipped.
  // Serializing and re-parsing converts raw nodes to elements for complete validation.
  const parsedHast = unified()
    .use(rehypeParse, { fragment: true })
    .parse(htmlString);

  validateHAST(parsedHast);

  return htmlString;
}

module.exports = mdastToHTML;

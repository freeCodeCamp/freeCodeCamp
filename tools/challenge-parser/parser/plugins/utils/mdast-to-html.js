const hastToHTML = require('hast-util-to-html');
const { root } = require('mdast-builder');
const mdastToHast = require('mdast-util-to-hast');
const { parseChinesePattern } = require('./parse-chinese');

/**
 * Custom handler for Chinese inline code to render as ruby elements
 * @param {object} state - The state object from mdast-util-to-hast
 * @param {object} node - The inlineCode node
 * @returns {object} Hast element node
 */
function chineseInlineCodeHandler(state, node) {
  const parsed = parseChinesePattern(node.value);

  if (parsed) {
    return {
      type: 'element',
      tagName: 'ruby',
      properties: {},
      children: [
        { type: 'text', value: parsed.hanzi },
        {
          type: 'element',
          tagName: 'rp',
          properties: {},
          children: [{ type: 'text', value: '(' }]
        },
        {
          type: 'element',
          tagName: 'rt',
          properties: {},
          children: [{ type: 'text', value: parsed.pinyin }]
        },
        {
          type: 'element',
          tagName: 'rp',
          properties: {},
          children: [{ type: 'text', value: ')' }]
        }
      ]
    };
  }

  return {
    type: 'element',
    // TODO: change this to span
    // https://github.com/freeCodeCamp/language-curricula/issues/22
    tagName: 'code',
    properties: {},
    children: [{ type: 'text', value: node.value }]
  };
}

function mdastToHTML(nodes, options = {}) {
  if (!Array.isArray(nodes))
    throw Error('mdastToHTML expects an array argument');
  // - the 'nodes' are children, so first need embedding in a parent

  const { lang } = options;
  const hastOptions = { allowDangerousHtml: true };

  if (lang === 'zh-CN') {
    hastOptions.handlers = {
      inlineCode: chineseInlineCodeHandler
    };
  }

  return hastToHTML(mdastToHast(root(nodes), hastOptions), {
    allowDangerousHtml: true
  });
}

module.exports = mdastToHTML;

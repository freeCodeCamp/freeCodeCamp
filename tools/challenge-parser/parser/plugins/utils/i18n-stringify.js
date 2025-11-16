/**
 * Checks if text is exactly one hanzi-pinyin pair and nothing else
 * @param {string} text
 * @returns {boolean}
 */
function isHanziPinyinPair(text) {
  return /^([^()]+?)\s*\(([^)]+)\)$/.test(text.trim());
}
const mdastToHTML = require('./mdast-to-html');

/**
 * Parses all hanzi-pinyin pairs from text
 * @param {string} text - Text potentially containing multiple hanzi (pinyin) patterns
 * @returns {Array<{hanzi: string, pinyin: string, start: number, end: number}>} Array of parsed pairs with positions
 */
function parseHanziPinyinPairs(text) {
  const pairs = [];
  // Match pattern: hanzi (pinyin), with hanzi not starting with punctuation
  const regex = /([^\s()，。？！!?,;:；：、]+)\s*\(([^)]+)\)/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    pairs.push({
      hanzi: match[1].trim(),
      pinyin: match[2].trim(),
      start: match.index,
      end: regex.lastIndex
    });
  }

  return pairs;
}

/**
 * Creates a ruby HAST element
 * @param {string} hanzi - The hanzi text
 * @param {string} pinyin - The pinyin text
 * @returns {object} HAST ruby element node
 */

/**
 * Custom handler for Chinese inline code to render as ruby elements
 * Matches hanzi-pinyin pairs, BLANK, and punctuation as separate elements
 * @param {object} state - The state object from mdast-util-to-hast
 * @param {object} node - The inlineCode node
 * @returns {object|Array<object>} Hast element node or array of nodes
 */
function chineseInlineCodeHandler(state, node) {
  // First, check for hanzi-pinyin pairs
  const pairRegex = /([^()]+?)\s*\(([^)]+)\)/g;
  let rubyPairs = [];
  let match;
  while ((match = pairRegex.exec(node.value)) !== null) {
    rubyPairs.push({
      hanzi: match[1].trim(),
      pinyin: match[2].trim(),
      start: match.index,
      end: pairRegex.lastIndex
    });
  }

  if (rubyPairs.length > 0) {
    // Tokenize for ruby, BLANK, punctuation
    const fullRegex =
      /([^\s()，。？！!?,;:；：、]+)\s*\(([^)]+)\)|BLANK|[，。？！!?,;:；：、]+|[^\s()，。？！!?,;:；：、]+/g;
    const nodes = [];
    let fullMatch;

    while ((fullMatch = fullRegex.exec(node.value)) !== null) {
      if (fullMatch[1] && fullMatch[2]) {
        nodes.push({
          type: 'element',
          tagName: 'ruby',
          properties: {},
          children: [
            { type: 'text', value: fullMatch[1].trim() },
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
              children: [{ type: 'text', value: fullMatch[2].trim() }]
            },
            {
              type: 'element',
              tagName: 'rp',
              properties: {},
              children: [{ type: 'text', value: ')' }]
            }
          ]
        });
      } else {
        nodes.push({ type: 'text', value: fullMatch[0] });
      }
    }
    return nodes.length === 1 ? nodes[0] : nodes;
  }

  // If fill-in-in-the-blank, return plain text
  if (node.value.includes('BLANK')) {
    return { type: 'text', value: node.value };
  }

  // If static text, return code
  return {
    type: 'element',
    tagName: 'code',
    properties: {},
    children: [{ type: 'text', value: node.value }]
  };
}

const rubyOptions = {
  handlers: {
    inlineCode: chineseInlineCodeHandler
  }
};

const createMdastToHtml = lang =>
  lang == 'zh-CN' ? x => mdastToHTML(x, rubyOptions) : mdastToHTML;

module.exports = {
  parseHanziPinyinPairs,
  isHanziPinyinPair,
  createMdastToHtml
};

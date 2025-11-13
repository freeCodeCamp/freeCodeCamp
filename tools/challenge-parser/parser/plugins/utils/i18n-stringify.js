const mdastToHTML = require('./mdast-to-html');

/**
 * Parses Chinese text in format: hanzi (pinyin)
 * @param {string} text - Text in format: hanzi (pinyin)
 * @returns {{ hanzi: string, pinyin: string } | null} Parsed hanzi and pinyin, or null if not matching
 */
function parseChinesePattern(text) {
  const match = text.match(/^(.+?)\s*\((.+?)\)$/);

  if (!match) {
    return null;
  }

  return {
    hanzi: match[1].trim(),
    pinyin: match[2].trim()
  };
}

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
    tagName: 'span',
    properties: { className: 'highlighted-text' },
    children: [{ type: 'text', value: node.value }]
  };
}

/**
 * Custom handler for inline code to render as span elements
 * @param {object} state - The state object from mdast-util-to-hast
 * @param {object} node - The inlineCode node
 * @returns {object} Hast element node
 */
function spanInlineCodeHandler(state, node) {
  return {
    type: 'element',
    tagName: 'span',
    properties: { className: 'highlighted-text' },
    children: [{ type: 'text', value: node.value }]
  };
}

const spanOrRubyOptions = {
  handlers: {
    inlineCode: chineseInlineCodeHandler
  }
};

const spanOptions = {
  handlers: {
    inlineCode: spanInlineCodeHandler
  }
};

const createMdastToHtml = lang => {
  if (lang === 'zh-CN') {
    return x => mdastToHTML(x, spanOrRubyOptions);
  } else if (lang === 'en-US' || lang === 'es') {
    return x => mdastToHTML(x, spanOptions);
  } else {
    return mdastToHTML;
  }
};

module.exports = { parseChinesePattern, createMdastToHtml };

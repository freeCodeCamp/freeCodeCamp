const mdastToHTML = require('./mdast-to-html');

/**
 * Parses Chinese text in format: hanzi (pinyin)
 * @param {string} text - Text in format: hanzi (pinyin)
 * @returns {{ hanzi: string, pinyin: string } | null} Parsed hanzi and pinyin, or null if not matching
 */
function normalizeChineseString(text) {
  if (!text) return '';

  return text
    .toString()
    .normalize('NFC')
    .replace(/（/g, '(')
    .replace(/）/g, ')')
    .replace(/[。．]/g, '.')
    .replace(/[！]/g, '!')
    .replace(/[？]/g, '?')
    .replace(/[：]/g, ':')
    .replace(/[；]/g, ';')
    .replace(/[，]/g, ',')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\s+([.,!?;:])/g, '$1');
}

function parseChinesePattern(rawText) {
  const text = normalizeChineseString(rawText);

  const pinyinCharsPart = 'a-zA-ZüÜ\\u0300-\\u036F0-9\\s\\-';
  const hanziPunctPart = '.,!?;:、·“”‘’《》【】—…';

  const pattern = [
    '^(',
    '(?=.*[\\u4e00-\\u9fff])',
    '(?:\\s*BLANK\\s*|[\\u4e00-\\u9fff' + hanziPunctPart + '])+',
    ')',
    '\\s*',
    '\\((' + '[' + pinyinCharsPart + ']+' + ')\\)',
    '\\s*$'
  ].join('');

  // eslint-disable-next-line no-misleading-character-class
  const regex = new RegExp(pattern, 'u');

  const match = text.match(regex);
  if (!match) return null;

  let hanzi = match[1];
  let pinyin = match[2];

  // Clean Hanzi
  hanzi = hanzi.replace(/\s+/g, ' ').trim();

  // Clean Pinyin:
  pinyin = pinyin
    .replace(/\s*BLANK\s*/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return { hanzi, pinyin };
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
    // TODO: change this to span
    // https://github.com/freeCodeCamp/language-curricula/issues/22
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

module.exports = { parseChinesePattern, createMdastToHtml };

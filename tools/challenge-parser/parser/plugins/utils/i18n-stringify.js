const mdastToHTML = require('./mdast-to-html');

const HANZI_PINYIN_PAIR = '([\u4e00-\u9fff]+)\\s*\\(([^)]+)\\)';
// Matches the BLANK placeholder
const BLANK_TOKEN = 'BLANK';
// Matches Chinese and English punctuation
const PUNCTUATION = '[，。？！!?,;:；：、]+';
// Matches Latin text with spaces
const OTHER_TEXT = '([a-zA-Z\\s]+)';

const HANZI_PINYIN_REGEX = new RegExp(
  `${HANZI_PINYIN_PAIR}|${BLANK_TOKEN}|${PUNCTUATION}|${OTHER_TEXT}`,
  'g'
);

/**
 * Parses all hanzi-pinyin pairs from text
 * @param {string} text - Text potentially containing multiple hanzi (pinyin) patterns
 * @returns {Array<{hanzi: string, pinyin: string}>} Array of parsed pairs
 */
function parseHanziPinyinPairs(text) {
  const pairs = [];
  const regex = new RegExp(HANZI_PINYIN_REGEX);
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match[1] && match[2]) {
      pairs.push({
        hanzi: match[1].trim(),
        pinyin: match[2].trim()
      });
    }
  }

  return pairs;
}
/**
 * Normalizes Chinese text (full-width to half-width)
 * @param {string} text - Text to normalize
 * @returns {string} Normalized text
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
/**
 * Stricter parser for single Hanzi-Pinyin pairs
 * @param {string} rawText - Text in format: hanzi (pinyin)
 * @returns {{ hanzi: string, pinyin: string } | null} Parsed hanzi and pinyin, or null if not matching
 */
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
 * Matches hanzi-pinyin pairs, BLANK, and punctuation as separate elements
 * @param {object} state - The state object from mdast-util-to-hast
 * @param {object} node - The inlineCode node
 * @returns {object|Array<object>} Hast element node or array of nodes
 */
function chineseInlineCodeHandler(state, node) {
  const rubyPairs = parseHanziPinyinPairs(node.value);

  if (rubyPairs.length > 0) {
    const matches = [...node.value.matchAll(HANZI_PINYIN_REGEX)];
    const nodes = matches.map(fullMatch => {
      if (fullMatch[1] && fullMatch[2]) {
        return {
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
        };
      }

      // Other captures (BLANK, punctuation, other text including spaces) should preserve exactly
      return { type: 'text', value: fullMatch[0] };
    });

    return nodes.length === 1 ? nodes[0] : nodes;
  }

  // If static text, return code
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

module.exports = {
  parseHanziPinyinPairs,
  parseChinesePattern,
  createMdastToHtml
};

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

module.exports = { parseChinesePattern };

type PlainTextNode = {
  type: 'text';
  value: string;
};

type HanziPinyinNode = {
  type: 'hanzi-pinyin';
  value: { hanzi: string; pinyin: string };
};

type BlankNode = { type: 'blank'; value: number };

type ParagraphElement = PlainTextNode | HanziPinyinNode | BlankNode;

const HANZI_PINYIN_PATTERN = /^(.+?)\s*\((.+?)\)$/;

/**
 * Parses Chinese text in format: hanzi (pinyin)
 * @param text - Text in format: hanzi (pinyin)
 * @returns Parsed hanzi and pinyin, or null if not matching
 */
export function parseChinesePattern(
  text: string
): { hanzi: string; pinyin: string } | null {
  const match = text.match(HANZI_PINYIN_PATTERN);

  if (!match) {
    return null;
  }

  return {
    hanzi: match[1].trim(),
    pinyin: match[2].trim()
  };
}

export function parseAnswer(
  text: string
): { hanzi: string; pinyin: string } | string {
  const hanziPinyin = parseChinesePattern(text);

  return hanziPinyin || text;
}

export const parseBlanks = (text: string) => {
  const trimmed = text.trim();
  if (!trimmed.startsWith('<p>') || !trimmed.endsWith('</p>')) {
    throw new Error(`Expected
${text}
to be wrapped in <p> tags`);
  }
  // We're expecting only paragraphs, so text after </p> and before <p> can be
  // ignored.
  const rawParagraphs = trimmed
    .split('<p>')
    .map(s => s.replace(/<\/p>\s*/, ''));
  // There is always a leading empty string, so we remove it.
  rawParagraphs.shift();

  const { paragraphs } = rawParagraphs.reduce(
    (acc, p) => {
      const { elements, blankCount } = parseChinesePattern(p)
        ? parseChineseParagraph(p, acc.count)
        : parsePlainParagraph(p, acc.count);

      return {
        count: acc.count + blankCount,
        paragraphs: [...acc.paragraphs, elements]
      };
    },
    { count: 0, paragraphs: [] } as {
      count: number;
      paragraphs: ParagraphElement[][];
    }
  );

  return paragraphs;
};

/**
 * Parses a paragraph that contains Chinese text with hanzi (pinyin) format
 * Splits by BLANK in the hanzi portion to determine blank positions
 */
function parseChineseParagraph(
  paragraph: string,
  startingBlankIndex: number
): { elements: ParagraphElement[]; blankCount: number } {
  const hanziPinyin = parseChinesePattern(paragraph);

  if (!hanziPinyin) {
    return parsePlainParagraph(paragraph, startingBlankIndex);
  }

  const { hanzi, pinyin } = hanziPinyin;

  const hanziParts = hanzi.split('BLANK');
  const pinyinParts = pinyin.split('BLANK');

  const elements: ParagraphElement[] = [];
  let blankIndex = startingBlankIndex;

  for (let i = 0; i < hanziParts.length; i++) {
    const hanziPart = hanziParts[i].trim();

    // Add Chinese text node if there's content
    if (hanziPart) {
      const pinyinPart = (pinyinParts[i] || '').trim();
      elements.push({
        type: 'hanzi-pinyin',
        value: {
          hanzi: hanziPart,
          pinyin: pinyinPart
        }
      });
    }

    // Add blank node after each segment except the last
    if (i < hanziParts.length - 1) {
      elements.push({ type: 'blank', value: blankIndex });
      blankIndex++;
    }
  }

  return {
    elements,
    blankCount: hanziParts.length - 1
  };
}

/**
 * Parses a plain (non-Chinese) paragraph
 */
function parsePlainParagraph(
  paragraph: string,
  startingBlankIndex: number
): { elements: ParagraphElement[]; blankCount: number } {
  const splitByBlank = paragraph.split('BLANK');

  const elements: ParagraphElement[] = [];

  for (let i = 0; i < splitByBlank.length; i++) {
    const text = splitByBlank[i];

    // Add text node if there's content
    if (text) {
      elements.push({ type: 'text', value: text });
    }

    // Add blank node after each segment except the last
    if (i < splitByBlank.length - 1) {
      elements.push({ type: 'blank', value: startingBlankIndex + i });
    }
  }

  return {
    elements,
    blankCount: splitByBlank.length - 1
  };
}

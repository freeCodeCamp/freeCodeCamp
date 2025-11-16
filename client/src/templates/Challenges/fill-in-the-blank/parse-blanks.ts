type PlainTextNode = {
  type: 'text';
  value: string;
};

// Hanzi/pinyin node representing an inline pronunciation pair
type HanziPinyinNode = {
  type: 'hanzi-pinyin';
  value: { hanzi: string; pinyin: string };
};

type BlankNode = { type: 'blank'; value: number };

type ParagraphElement = PlainTextNode | BlankNode | HanziPinyinNode;

/**
 * Parses all hanzi-pinyin pairs from text
 * @param text - Text potentially containing hanzi (pinyin) patterns
 * @returns Array of parsed hanzi and pinyin pairs
 */
export function parseHanziPinyinPairs(
  text: string
): Array<{ hanzi: string; pinyin: string }> {
  const pairs: Array<{ hanzi: string; pinyin: string }> = [];
  const regex = /([^()]+?)\s*\(([^)]+)\)/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    pairs.push({
      hanzi: match[1].trim(),
      pinyin: match[2].trim()
    });
  }

  return pairs;
}

export function parseAnswer(
  text: string
): { hanzi: string; pinyin: string } | string {
  const pairs = parseHanziPinyinPairs(text);
  const hanziPinyin = pairs.length === 1 ? pairs[0] : null;

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
      const containsRuby = /<ruby>/.test(p);
      const { elements, blankCount } = containsRuby
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
 * Parses a paragraph that contains ruby HTML elements (Chinese hanzi-pinyin)
 * Handles multiple ruby elements separated by text and BLANK tokens
 */
function parseChineseParagraph(
  paragraph: string,
  startingBlankIndex: number
): { elements: ParagraphElement[]; blankCount: number } {
  const elements: ParagraphElement[] = [];
  let blankIndex = startingBlankIndex;

  // First, split the paragraph on BLANK tokens so we can add blanks between segments
  const segments = paragraph.split('BLANK');

  for (let s = 0; s < segments.length; s++) {
    const segment = segments[s];

    // Split the segment into text and ruby parts. Capturing group keeps the ruby tags.
    const parts = segment.split(/(<ruby>.*?<\/ruby>)/g).filter(Boolean);

    for (const part of parts) {
      if (part.startsWith('<ruby>')) {
        const rubyMatch = part.match(
          /^<ruby>([^<]+)<rp>\(<\/rp><rt>([^<]+)<\/rt><rp>\)<\/rp><\/ruby>$/
        );
        if (rubyMatch) {
          elements.push({
            type: 'hanzi-pinyin',
            value: { hanzi: rubyMatch[1], pinyin: rubyMatch[2] }
          });
        }
      } else if (part) {
        elements.push({ type: 'text', value: part });
      }
    }

    // After each segment except the last, insert a blank node.
    if (s < segments.length - 1) {
      elements.push({ type: 'blank', value: blankIndex });
      blankIndex++;
    }
  }

  return {
    elements,
    blankCount: blankIndex - startingBlankIndex
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

  const parsedParagraph = splitByBlank
    .map<ParagraphElement[]>((text, i) => [
      { type: 'text', value: text },
      { type: 'blank', value: startingBlankIndex + i }
    ])
    .flat();

  // remove last blank inserted by the mapping
  parsedParagraph.pop();

  const elements = parsedParagraph.filter(p => {
    if (p.type === 'text') {
      return p.value;
    }
    return true;
  });

  return {
    elements,
    blankCount: splitByBlank.length - 1
  };
}

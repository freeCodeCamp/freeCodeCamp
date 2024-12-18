type TextNode = { type: 'text'; value: string };
type BlankNode = { type: 'blank'; value: number };
type ParagraphElement = TextNode | BlankNode;

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
      const splitByBlank = p.split('BLANK');

      const parsedParagraph = splitByBlank
        .map<ParagraphElement[]>((text, i) => [
          { type: 'text', value: text },
          { type: 'blank', value: acc.count + i }
        ])
        .flat();
      parsedParagraph.pop(); // remove last blank

      const paragraph = parsedParagraph.filter(p => {
        // remove empty strings
        if (p.type === 'text') {
          return p.value;
        } else {
          return true;
        }
      });
      return {
        count: acc.count + splitByBlank.length - 1,
        paragraphs: [...acc.paragraphs, paragraph]
      };
    },
    { count: 0, paragraphs: [] } as {
      count: number;
      paragraphs: ParagraphElement[][];
    }
  );

  return paragraphs;
};

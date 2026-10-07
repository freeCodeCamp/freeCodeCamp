import { Spec, Line, BlockMarkers, Markers } from '../../primitives.js';
import { Tokenizer } from './index.js';

/**
 * Walks over provided lines joining description token into a single string.
 * */
export type Joiner = (lines: Line[], markers?: BlockMarkers) => string;

/**
 * Shortcut for standard Joiners
 * compact - strip surrounding whitespace and concat lines using a single string
 * preserve - preserves original whitespace and line breaks as is
 */
export type Spacing = 'compact' | 'preserve' | Joiner;

/**
 * Makes no changes to `spec.lines[].tokens` but joins them into `spec.description`
 * following given spacing srtategy
 * @param {Spacing} spacing tells how to handle the whitespace
 * @param {BlockMarkers} markers tells how to handle comment block delimitation
 */
export default function descriptionTokenizer(
  spacing: Spacing = 'compact',
  markers = Markers
): Tokenizer {
  const join = getJoiner(spacing);
  return (spec: Spec): Spec => {
    spec.description = join(spec.source, markers);
    return spec;
  };
}

export function getJoiner(spacing: Spacing): Joiner {
  if (spacing === 'compact') return compactJoiner;
  if (spacing === 'preserve') return preserveJoiner;

  return spacing;
}

function compactJoiner(lines: Line[], markers = Markers): string {
  return lines
    .map(({ tokens: { description } }: Line) => description.trim())
    .filter((description) => description !== '')
    .join(' ');
}

const lineNo = (num: number, { tokens }: Line, i: number) =>
  tokens.type === '' ? num : i;

const getDescription = ({ tokens }: Line) =>
  (tokens.delimiter === '' ? tokens.start : tokens.postDelimiter.slice(1)) +
  tokens.description;

function preserveJoiner(lines: Line[], markers = Markers): string {
  if (lines.length === 0) return '';

  // skip the opening line with no description
  if (
    lines[0].tokens.description === '' &&
    lines[0].tokens.delimiter === markers.start
  )
    lines = lines.slice(1);

  // skip the closing line with no description
  const lastLine = lines[lines.length - 1];

  if (
    lastLine !== undefined &&
    lastLine.tokens.description === '' &&
    lastLine.tokens.end.endsWith(markers.end)
  )
    lines = lines.slice(0, -1);

  // description starts at the last line of type definition
  lines = lines.slice(lines.reduce(lineNo, 0));

  return lines.map(getDescription).join('\n');
}

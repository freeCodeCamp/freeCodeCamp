import { Line } from '../primitives.js';

const reTag = /^@\S+/;

/**
 * Groups source lines in sections representing tags.
 * First section is a block description if present. Last section captures lines starting with
 * the last tag to the end of the block, including dangling closing marker.
 * @param {Line[]} block souce lines making a single comment block
 */
export type Parser = (block: Line[]) => Line[][];

/**
 * Predicate telling if string contains opening/closing escaping sequence
 * @param {string} source raw source line
 */
export type Fencer = (source: string) => boolean;

/**
 * `Parser` configuration options
 */
export interface Options {
  // escaping sequence or predicate
  fence: string | Fencer;
}

/**
 * Creates configured `Parser`
 * @param {Partial<Options>} options
 */
export default function getParser({
  fence = '```',
}: Partial<Options> = {}): Parser {
  const fencer = getFencer(fence);
  const toggleFence = (source: string, isFenced: boolean): boolean =>
    fencer(source) ? !isFenced : isFenced;

  return function parseBlock(source: Line[]): Line[][] {
    // start with description section
    const sections: Line[][] = [[]];

    let isFenced = false;
    for (const line of source) {
      if (reTag.test(line.tokens.description) && !isFenced) {
        sections.push([line]);
      } else {
        sections[sections.length - 1].push(line);
      }
      isFenced = toggleFence(line.tokens.description, isFenced);
    }

    return sections;
  };
}

function getFencer(fence: string | Fencer): Fencer {
  if (typeof fence === 'string')
    return (source: string) => source.split(fence).length % 2 === 0;
  return fence;
}

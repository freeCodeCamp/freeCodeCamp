import { Line } from '../primitives.js';
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
    fence: string | Fencer;
}
/**
 * Creates configured `Parser`
 * @param {Partial<Options>} options
 */
export default function getParser({ fence, }?: Partial<Options>): Parser;

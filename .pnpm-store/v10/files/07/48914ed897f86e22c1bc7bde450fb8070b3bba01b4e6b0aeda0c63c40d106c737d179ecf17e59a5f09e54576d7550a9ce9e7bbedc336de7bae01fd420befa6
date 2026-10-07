import { Line, BlockMarkers, Markers } from '../../primitives.js';
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
export default function descriptionTokenizer(spacing?: Spacing, markers?: typeof Markers): Tokenizer;
export declare function getJoiner(spacing: Spacing): Joiner;

import { Tokenizer } from './index.js';
/**
 * Joiner is a function taking collected type token string parts,
 * and joining them together. In most of the cases this will be
 * a single piece like {type-name}, but type may go over multipe line
 * ```
 * @tag {function(
 *   number,
 *   string
 * )}
 * ```
 */
export type Joiner = (parts: string[]) => string;
/**
 * Shortcut for standard Joiners
 * compact - trim surrounding space, replace line breaks with a single space
 * preserve - concat as is
 */
export type Spacing = 'compact' | 'preserve' | Joiner;
/**
 * Sets splits remaining `Spec.lines[].tokes.description` into `type` and `description`
 * tokens and populates Spec.type`
 *
 * @param {Spacing} spacing tells how to deal with a whitespace
 * for type values going over multiple lines
 */
export default function typeTokenizer(spacing?: Spacing): Tokenizer;

import { Line, Spec } from '../primitives.js';
import { Tokenizer } from './tokenizers/index.js';
export type Parser = (source: Line[]) => Spec;
export interface Options {
    tokenizers: Tokenizer[];
}
export default function getParser({ tokenizers }: Options): Parser;

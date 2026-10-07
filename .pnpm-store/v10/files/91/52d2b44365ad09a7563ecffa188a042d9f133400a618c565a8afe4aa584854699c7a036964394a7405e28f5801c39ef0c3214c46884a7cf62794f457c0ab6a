import { Block, BlockMarkers } from '../primitives.js';
import { Tokenizer } from './tokenizers/index.js';
export interface Options {
    startLine: number;
    fence: string;
    spacing: 'compact' | 'preserve';
    markers: BlockMarkers;
    tokenizers: Tokenizer[];
}
export type Parser = (source: string) => Block[];
export default function getParser({ startLine, fence, spacing, markers, tokenizers, }?: Partial<Options>): Parser;

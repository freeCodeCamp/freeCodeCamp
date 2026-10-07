import { Block, Tokens, Spec } from './primitives.js';
export declare function isSpace(source: string): boolean;
export declare function hasCR(source: string): boolean;
export declare function splitCR(source: string): [string, string];
export declare function splitSpace(source: string): [string, string];
export declare function splitLines(source: string): string[];
export declare function seedBlock(block?: Partial<Block>): Block;
export declare function seedSpec(spec?: Partial<Spec>): Spec;
export declare function seedTokens(tokens?: Partial<Tokens>): Tokens;
/**
 * Assures Block.tags[].source contains references to the Block.source items,
 * using Block.source as a source of truth. This is a counterpart of rewireSpecs
 * @param block parsed coments block
 */
export declare function rewireSource(block: Block): Block;
/**
 * Assures Block.source contains references to the Block.tags[].source items,
 * using Block.tags[].source as a source of truth. This is a counterpart of rewireSource
 * @param block parsed coments block
 */
export declare function rewireSpecs(block: Block): Block;

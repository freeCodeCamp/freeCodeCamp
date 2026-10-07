import { CSSToken } from '@csstools/css-tokenizer';
import { NullObject } from './cache.js';
import { Options } from './typedef.js';
/**
 * resolve custom property
 * @param tokens - CSS tokens
 * @param [opt] - options
 * @returns result - [tokens, resolvedValue]
 */
export declare function resolveCustomProperty(tokens: CSSToken[], opt?: Options): [CSSToken[], string];
/**
 * parse tokens
 * @param tokens - CSS tokens
 * @param [opt] - options
 * @returns parsed tokens
 */
export declare function parseTokens(tokens: CSSToken[], opt?: Options): string[] | NullObject;
/**
 * resolve CSS var()
 * @param value - CSS value including var()
 * @param [opt] - options
 * @returns resolved value
 */
export declare function resolveVar(value: string, opt?: Options): string | NullObject;
/**
 * CSS var()
 * @param value - CSS value including var()
 * @param [opt] - options
 * @returns resolved value
 */
export declare const cssVar: (value: string, opt?: Options) => string;

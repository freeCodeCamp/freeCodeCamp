import { CSSToken } from '@csstools/css-tokenizer';
import { NullObject } from './cache.js';
import { ColorChannels, Options, StringColorChannels } from './typedef.js';
/**
 * @type NumberOrStringColorChannels - color channel
 */
type NumberOrStringColorChannels = ColorChannels & StringColorChannels;
/**
 * resolve relative color channels
 * @param tokens - CSS tokens
 * @param [opt] - options
 * @returns resolved color channels
 */
export declare function resolveColorChannels(tokens: CSSToken[], opt?: Options): NumberOrStringColorChannels | NullObject;
/**
 * extract origin color
 * @param value - CSS color value
 * @param [opt] - options
 * @returns origin color value
 */
export declare function extractOriginColor(value: string, opt?: Options): string | NullObject;
/**
 * resolve relative color
 * @param value - CSS relative color value
 * @param [opt] - options
 * @returns resolved value
 */
export declare function resolveRelativeColor(value: string, opt?: Options): string | NullObject;
export {};

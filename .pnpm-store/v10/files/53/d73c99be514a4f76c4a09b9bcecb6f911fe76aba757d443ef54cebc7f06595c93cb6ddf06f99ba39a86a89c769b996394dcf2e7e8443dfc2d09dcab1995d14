import { Options } from './typedef.js';
/**
 * split value
 * NOTE: comments are stripped, it can be preserved if, in the options param,
 * `delimiter` is either ',' or '/' and with `preserveComment` set to `true`
 * @param value - CSS value
 * @param [opt] - options
 * @returns array of values
 */
export declare const splitValue: (value: string, opt?: Options) => string[];
/**
 * extract dashed-ident tokens
 * @param value - CSS value
 * @returns array of dashed-ident tokens
 */
export declare const extractDashedIdent: (value: string) => string[];
/**
 * is color
 * @param value - CSS value
 * @param [opt] - options
 * @returns result
 */
export declare const isColor: (value: unknown, opt?: Options) => boolean;
/**
 * value to JSON string
 * @param value - CSS value
 * @param [func] - stringify function
 * @returns stringified value in JSON notation
 */
export declare const valueToJsonString: (value: unknown, func?: boolean) => string;
/**
 * round to specified precision
 * @param value - numeric value
 * @param bit - minimum bits
 * @returns rounded value
 */
export declare const roundToPrecision: (value: number, bit?: number) => number;
/**
 * interpolate hue
 * @param hueA - hue value
 * @param hueB - hue value
 * @param arc - shorter | longer | increasing | decreasing
 * @returns result - [hueA, hueB]
 */
export declare const interpolateHue: (hueA: number, hueB: number, arc?: string) => [number, number];

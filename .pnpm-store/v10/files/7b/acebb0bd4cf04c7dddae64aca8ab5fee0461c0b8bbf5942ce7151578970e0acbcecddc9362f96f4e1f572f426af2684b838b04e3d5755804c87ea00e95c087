import { Options } from './typedef.js';
/**
 * @type ColorStopList - list of color stops
 */
type ColorStopList = [string, string, ...string[]];
/**
 * @typedef Gradient - parsed CSS gradient
 * @property value - input value
 * @property type - gradient type
 * @property [gradientLine] - gradient line
 * @property colorStopList - list of color stops
 */
interface Gradient {
    value: string;
    type: string;
    gradientLine?: string;
    colorStopList: ColorStopList;
}
/**
 * get gradient type
 * @param value - gradient value
 * @returns gradient type
 */
export declare const getGradientType: (value: string) => string;
/**
 * validate gradient line
 * @param value - gradient line value
 * @param type - gradient type
 * @returns result
 */
export declare const validateGradientLine: (value: string, type: string) => boolean;
/**
 * validate color stop list
 * @param list
 * @param type
 * @param [opt]
 * @returns result
 */
export declare const validateColorStopList: (list: string[], type: string, opt?: Options) => boolean;
/**
 * parse CSS gradient
 * @param value - gradient value
 * @param [opt] - options
 * @returns parsed result
 */
export declare const parseGradient: (value: string, opt?: Options) => Gradient | null;
/**
 * is CSS gradient
 * @param value - CSS value
 * @param [opt] - options
 * @returns result
 */
export declare const isGradient: (value: string, opt?: Options) => boolean;
export {};

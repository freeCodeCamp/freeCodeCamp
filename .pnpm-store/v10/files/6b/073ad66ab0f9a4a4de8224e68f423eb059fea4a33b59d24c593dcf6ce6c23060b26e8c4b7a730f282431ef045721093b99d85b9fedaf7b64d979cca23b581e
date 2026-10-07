import { NullObject } from './cache.js';
import { ColorChannels, Options } from './typedef.js';
/**
 * pre process
 * @param value - CSS color value
 * @param [opt] - options
 * @returns value
 */
export declare const preProcess: (value: string, opt?: Options) => string | NullObject;
/**
 * convert number to hex string
 * @param value - numeric value
 * @returns hex string: 00..ff
 */
export declare const numberToHex: (value: number) => string;
/**
 * convert color to hex
 * @param value - CSS color value
 * @param [opt] - options
 * @param [opt.alpha] - enable alpha channel
 * @returns #rrggbb | #rrggbbaa | null
 */
export declare const colorToHex: (value: string, opt?: Options) => string | null;
/**
 * convert color to hsl
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [h, s, l, alpha]
 */
export declare const colorToHsl: (value: string, opt?: Options) => ColorChannels;
/**
 * convert color to hwb
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [h, w, b, alpha]
 */
export declare const colorToHwb: (value: string, opt?: Options) => ColorChannels;
/**
 * convert color to lab
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [l, a, b, alpha]
 */
export declare const colorToLab: (value: string, opt?: Options) => ColorChannels;
/**
 * convert color to lch
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [l, c, h, alpha]
 */
export declare const colorToLch: (value: string, opt?: Options) => ColorChannels;
/**
 * convert color to oklab
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [l, a, b, alpha]
 */
export declare const colorToOklab: (value: string, opt?: Options) => ColorChannels;
/**
 * convert color to oklch
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [l, c, h, alpha]
 */
export declare const colorToOklch: (value: string, opt?: Options) => ColorChannels;
/**
 * convert color to rgb
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [r, g, b, alpha]
 */
export declare const colorToRgb: (value: string, opt?: Options) => ColorChannels;
/**
 * convert color to xyz
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [x, y, z, alpha]
 */
export declare const colorToXyz: (value: string, opt?: Options) => ColorChannels;
/**
 * convert color to xyz-d50
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [x, y, z, alpha]
 */
export declare const colorToXyzD50: (value: string, opt?: Options) => ColorChannels;
export declare const convert: {
    colorToHex: (value: string, opt?: Options) => string | null;
    colorToHsl: (value: string, opt?: Options) => ColorChannels;
    colorToHwb: (value: string, opt?: Options) => ColorChannels;
    colorToLab: (value: string, opt?: Options) => ColorChannels;
    colorToLch: (value: string, opt?: Options) => ColorChannels;
    colorToOklab: (value: string, opt?: Options) => ColorChannels;
    colorToOklch: (value: string, opt?: Options) => ColorChannels;
    colorToRgb: (value: string, opt?: Options) => ColorChannels;
    colorToXyz: (value: string, opt?: Options) => ColorChannels;
    colorToXyzD50: (value: string, opt?: Options) => ColorChannels;
    numberToHex: (value: number) => string;
};

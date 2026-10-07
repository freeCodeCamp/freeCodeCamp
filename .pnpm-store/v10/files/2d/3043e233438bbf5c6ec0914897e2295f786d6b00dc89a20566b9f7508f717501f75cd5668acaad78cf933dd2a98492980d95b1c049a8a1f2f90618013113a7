import { NullObject } from './cache.js';
import { ColorChannels, Options, SpecifiedColorChannels } from './typedef.js';
/**
 * @type TriColorChannels - color channels without alpha
 */
type TriColorChannels = [x: number, y: number, z: number];
/**
 * @type ColorMatrix - color matrix
 */
type ColorMatrix = [
    r1: TriColorChannels,
    r2: TriColorChannels,
    r3: TriColorChannels
];
/**
 * named colors
 */
export declare const NAMED_COLORS: {
    readonly aliceblue: [240, 248, 255];
    readonly antiquewhite: [250, 235, 215];
    readonly aqua: [0, 255, 255];
    readonly aquamarine: [127, 255, 212];
    readonly azure: [240, 255, 255];
    readonly beige: [245, 245, 220];
    readonly bisque: [255, 228, 196];
    readonly black: [0, 0, 0];
    readonly blanchedalmond: [255, 235, 205];
    readonly blue: [0, 0, 255];
    readonly blueviolet: [138, 43, 226];
    readonly brown: [165, 42, 42];
    readonly burlywood: [222, 184, 135];
    readonly cadetblue: [95, 158, 160];
    readonly chartreuse: [127, 255, 0];
    readonly chocolate: [210, 105, 30];
    readonly coral: [255, 127, 80];
    readonly cornflowerblue: [100, 149, 237];
    readonly cornsilk: [255, 248, 220];
    readonly crimson: [220, 20, 60];
    readonly cyan: [0, 255, 255];
    readonly darkblue: [0, 0, 139];
    readonly darkcyan: [0, 139, 139];
    readonly darkgoldenrod: [184, 134, 11];
    readonly darkgray: [169, 169, 169];
    readonly darkgreen: [0, 100, 0];
    readonly darkgrey: [169, 169, 169];
    readonly darkkhaki: [189, 183, 107];
    readonly darkmagenta: [139, 0, 139];
    readonly darkolivegreen: [85, 107, 47];
    readonly darkorange: [255, 140, 0];
    readonly darkorchid: [153, 50, 204];
    readonly darkred: [139, 0, 0];
    readonly darksalmon: [233, 150, 122];
    readonly darkseagreen: [143, 188, 143];
    readonly darkslateblue: [72, 61, 139];
    readonly darkslategray: [47, 79, 79];
    readonly darkslategrey: [47, 79, 79];
    readonly darkturquoise: [0, 206, 209];
    readonly darkviolet: [148, 0, 211];
    readonly deeppink: [255, 20, 147];
    readonly deepskyblue: [0, 191, 255];
    readonly dimgray: [105, 105, 105];
    readonly dimgrey: [105, 105, 105];
    readonly dodgerblue: [30, 144, 255];
    readonly firebrick: [178, 34, 34];
    readonly floralwhite: [255, 250, 240];
    readonly forestgreen: [34, 139, 34];
    readonly fuchsia: [255, 0, 255];
    readonly gainsboro: [220, 220, 220];
    readonly ghostwhite: [248, 248, 255];
    readonly gold: [255, 215, 0];
    readonly goldenrod: [218, 165, 32];
    readonly gray: [128, 128, 128];
    readonly green: [0, 128, 0];
    readonly greenyellow: [173, 255, 47];
    readonly grey: [128, 128, 128];
    readonly honeydew: [240, 255, 240];
    readonly hotpink: [255, 105, 180];
    readonly indianred: [205, 92, 92];
    readonly indigo: [75, 0, 130];
    readonly ivory: [255, 255, 240];
    readonly khaki: [240, 230, 140];
    readonly lavender: [230, 230, 250];
    readonly lavenderblush: [255, 240, 245];
    readonly lawngreen: [124, 252, 0];
    readonly lemonchiffon: [255, 250, 205];
    readonly lightblue: [173, 216, 230];
    readonly lightcoral: [240, 128, 128];
    readonly lightcyan: [224, 255, 255];
    readonly lightgoldenrodyellow: [250, 250, 210];
    readonly lightgray: [211, 211, 211];
    readonly lightgreen: [144, 238, 144];
    readonly lightgrey: [211, 211, 211];
    readonly lightpink: [255, 182, 193];
    readonly lightsalmon: [255, 160, 122];
    readonly lightseagreen: [32, 178, 170];
    readonly lightskyblue: [135, 206, 250];
    readonly lightslategray: [119, 136, 153];
    readonly lightslategrey: [119, 136, 153];
    readonly lightsteelblue: [176, 196, 222];
    readonly lightyellow: [255, 255, 224];
    readonly lime: [0, 255, 0];
    readonly limegreen: [50, 205, 50];
    readonly linen: [250, 240, 230];
    readonly magenta: [255, 0, 255];
    readonly maroon: [128, 0, 0];
    readonly mediumaquamarine: [102, 205, 170];
    readonly mediumblue: [0, 0, 205];
    readonly mediumorchid: [186, 85, 211];
    readonly mediumpurple: [147, 112, 219];
    readonly mediumseagreen: [60, 179, 113];
    readonly mediumslateblue: [123, 104, 238];
    readonly mediumspringgreen: [0, 250, 154];
    readonly mediumturquoise: [72, 209, 204];
    readonly mediumvioletred: [199, 21, 133];
    readonly midnightblue: [25, 25, 112];
    readonly mintcream: [245, 255, 250];
    readonly mistyrose: [255, 228, 225];
    readonly moccasin: [255, 228, 181];
    readonly navajowhite: [255, 222, 173];
    readonly navy: [0, 0, 128];
    readonly oldlace: [253, 245, 230];
    readonly olive: [128, 128, 0];
    readonly olivedrab: [107, 142, 35];
    readonly orange: [255, 165, 0];
    readonly orangered: [255, 69, 0];
    readonly orchid: [218, 112, 214];
    readonly palegoldenrod: [238, 232, 170];
    readonly palegreen: [152, 251, 152];
    readonly paleturquoise: [175, 238, 238];
    readonly palevioletred: [219, 112, 147];
    readonly papayawhip: [255, 239, 213];
    readonly peachpuff: [255, 218, 185];
    readonly peru: [205, 133, 63];
    readonly pink: [255, 192, 203];
    readonly plum: [221, 160, 221];
    readonly powderblue: [176, 224, 230];
    readonly purple: [128, 0, 128];
    readonly rebeccapurple: [102, 51, 153];
    readonly red: [255, 0, 0];
    readonly rosybrown: [188, 143, 143];
    readonly royalblue: [65, 105, 225];
    readonly saddlebrown: [139, 69, 19];
    readonly salmon: [250, 128, 114];
    readonly sandybrown: [244, 164, 96];
    readonly seagreen: [46, 139, 87];
    readonly seashell: [255, 245, 238];
    readonly sienna: [160, 82, 45];
    readonly silver: [192, 192, 192];
    readonly skyblue: [135, 206, 235];
    readonly slateblue: [106, 90, 205];
    readonly slategray: [112, 128, 144];
    readonly slategrey: [112, 128, 144];
    readonly snow: [255, 250, 250];
    readonly springgreen: [0, 255, 127];
    readonly steelblue: [70, 130, 180];
    readonly tan: [210, 180, 140];
    readonly teal: [0, 128, 128];
    readonly thistle: [216, 191, 216];
    readonly tomato: [255, 99, 71];
    readonly turquoise: [64, 224, 208];
    readonly violet: [238, 130, 238];
    readonly wheat: [245, 222, 179];
    readonly white: [255, 255, 255];
    readonly whitesmoke: [245, 245, 245];
    readonly yellow: [255, 255, 0];
    readonly yellowgreen: [154, 205, 50];
};
/**
 * cache invalid color value
 * @param key - cache key
 * @param nullable - is nullable
 * @returns cached value
 */
export declare const cacheInvalidColorValue: (cacheKey: string, format: string, nullable?: boolean) => SpecifiedColorChannels | string | NullObject;
/**
 * resolve invalid color value
 * @param format - output format
 * @param nullable - is nullable
 * @returns resolved value
 */
export declare const resolveInvalidColorValue: (format: string, nullable?: boolean) => SpecifiedColorChannels | string | NullObject;
/**
 * validate color components
 * @param arr - color components
 * @param [opt] - options
 * @param [opt.alpha] - alpha channel
 * @param [opt.minLength] - min length
 * @param [opt.maxLength] - max length
 * @param [opt.minRange] - min range
 * @param [opt.maxRange] - max range
 * @param [opt.validateRange] - validate range
 * @returns result - validated color components
 */
export declare const validateColorComponents: (arr: ColorChannels | TriColorChannels, opt?: {
    alpha?: boolean;
    minLength?: number;
    maxLength?: number;
    minRange?: number;
    maxRange?: number;
    validateRange?: boolean;
}) => ColorChannels | TriColorChannels;
/**
 * transform matrix
 * @param mtx - 3 * 3 matrix
 * @param vct - vector
 * @param [skip] - skip validate
 * @returns TriColorChannels - [p1, p2, p3]
 */
export declare const transformMatrix: (mtx: ColorMatrix, vct: TriColorChannels, skip?: boolean) => TriColorChannels;
/**
 * normalize color components
 * @param colorA - color components [v1, v2, v3, v4]
 * @param colorB - color components [v1, v2, v3, v4]
 * @param [skip] - skip validate
 * @returns result - [colorA, colorB]
 */
export declare const normalizeColorComponents: (colorA: [number | string, number | string, number | string, number | string], colorB: [number | string, number | string, number | string, number | string], skip?: boolean) => [ColorChannels, ColorChannels];
/**
 * number to hex string
 * @param value - numeric value
 * @returns hex string
 */
export declare const numberToHexString: (value: number) => string;
/**
 * angle to deg
 * @param angle
 * @returns deg: 0..360
 */
export declare const angleToDeg: (angle: string) => number;
/**
 * parse alpha
 * @param [alpha] - alpha value
 * @returns alpha: 0..1
 */
export declare const parseAlpha: (alpha?: string) => number;
/**
 * parse hex alpha
 * @param value - alpha value in hex string
 * @returns alpha: 0..1
 */
export declare const parseHexAlpha: (value: string) => number;
/**
 * transform rgb to linear rgb
 * @param rgb - [r, g, b] r|g|b: 0..255
 * @param [skip] - skip validate
 * @returns TriColorChannels - [r, g, b] r|g|b: 0..1
 */
export declare const transformRgbToLinearRgb: (rgb: TriColorChannels, skip?: boolean) => TriColorChannels;
/**
 * transform rgb to xyz
 * @param rgb - [r, g, b] r|g|b: 0..255
 * @param [skip] - skip validate
 * @returns TriColorChannels - [x, y, z]
 */
export declare const transformRgbToXyz: (rgb: TriColorChannels, skip?: boolean) => TriColorChannels;
/**
 * transform rgb to xyz-d50
 * @param rgb - [r, g, b] r|g|b: 0..255 alpha: 0..1
 * @returns TriColorChannels - [x, y, z]
 */
export declare const transformRgbToXyzD50: (rgb: TriColorChannels) => TriColorChannels;
/**
 * transform linear rgb to rgb
 * @param rgb - [r, g, b] r|g|b: 0..1
 * @param [round] - round result
 * @returns TriColorChannels - [r, g, b] r|g|b: 0..255
 */
export declare const transformLinearRgbToRgb: (rgb: TriColorChannels, round?: boolean) => TriColorChannels;
/**
 * transform xyz to rgb
 * @param xyz - [x, y, z]
 * @param [skip] - skip validate
 * @returns TriColorChannels - [r, g, b] r|g|b: 0..255
 */
export declare const transformXyzToRgb: (xyz: TriColorChannels, skip?: boolean) => TriColorChannels;
/**
 * transform xyz to xyz-d50
 * @param xyz - [x, y, z]
 * @returns TriColorChannels - [x, y, z]
 */
export declare const transformXyzToXyzD50: (xyz: TriColorChannels) => TriColorChannels;
/**
 * transform xyz to hsl
 * @param xyz - [x, y, z]
 * @param [skip] - skip validate
 * @returns TriColorChannels - [h, s, l]
 */
export declare const transformXyzToHsl: (xyz: TriColorChannels, skip?: boolean) => TriColorChannels;
/**
 * transform xyz to hwb
 * @param xyz - [x, y, z]
 * @param [skip] - skip validate
 * @returns TriColorChannels - [h, w, b]
 */
export declare const transformXyzToHwb: (xyz: TriColorChannels, skip?: boolean) => TriColorChannels;
/**
 * transform xyz to oklab
 * @param xyz - [x, y, z]
 * @param [skip] - skip validate
 * @returns TriColorChannels - [l, a, b]
 */
export declare const transformXyzToOklab: (xyz: TriColorChannels, skip?: boolean) => TriColorChannels;
/**
 * transform xyz to oklch
 * @param xyz - [x, y, z]
 * @param [skip] - skip validate
 * @returns TriColorChannels - [l, c, h]
 */
export declare const transformXyzToOklch: (xyz: TriColorChannels, skip?: boolean) => TriColorChannels;
/**
 * transform xyz D50 to rgb
 * @param xyz - [x, y, z]
 * @param [skip] - skip validate
 * @returns TriColorChannels - [r, g, b] r|g|b: 0..255
 */
export declare const transformXyzD50ToRgb: (xyz: TriColorChannels, skip?: boolean) => TriColorChannels;
/**
 * transform xyz-d50 to lab
 * @param xyz - [x, y, z]
 * @param [skip] - skip validate
 * @returns TriColorChannels - [l, a, b]
 */
export declare const transformXyzD50ToLab: (xyz: TriColorChannels, skip?: boolean) => TriColorChannels;
/**
 * transform xyz-d50 to lch
 * @param xyz - [x, y, z]
 * @param [skip] - skip validate
 * @returns TriColorChannels - [l, c, h]
 */
export declare const transformXyzD50ToLch: (xyz: TriColorChannels, skip?: boolean) => TriColorChannels;
/**
 * convert rgb to hex color
 * @param rgb - [r, g, b, alpha] r|g|b: 0..255 alpha: 0..1
 * @returns hex color
 */
export declare const convertRgbToHex: (rgb: ColorChannels) => string;
/**
 * convert linear rgb to hex color
 * @param rgb - [r, g, b, alpha] r|g|b|alpha: 0..1
 * @param [skip] - skip validate
 * @returns hex color
 */
export declare const convertLinearRgbToHex: (rgb: ColorChannels, skip?: boolean) => string;
/**
 * convert xyz to hex color
 * @param xyz - [x, y, z, alpha]
 * @returns hex color
 */
export declare const convertXyzToHex: (xyz: ColorChannels) => string;
/**
 * convert xyz D50 to hex color
 * @param xyz - [x, y, z, alpha]
 * @returns hex color
 */
export declare const convertXyzD50ToHex: (xyz: ColorChannels) => string;
/**
 * convert hex color to rgb
 * @param value - hex color value
 * @returns ColorChannels - [r, g, b, alpha] r|g|b: 0..255 alpha: 0..1
 */
export declare const convertHexToRgb: (value: string) => ColorChannels;
/**
 * convert hex color to linear rgb
 * @param value - hex color value
 * @returns ColorChannels - [r, g, b, alpha] r|g|b|alpha: 0..1
 */
export declare const convertHexToLinearRgb: (value: string) => ColorChannels;
/**
 * convert hex color to xyz
 * @param value - hex color value
 * @returns ColorChannels - [x, y, z, alpha]
 */
export declare const convertHexToXyz: (value: string) => ColorChannels;
/**
 * parse rgb()
 * @param value - rgb color value
 * @param [opt] - options
 * @returns parsed color - ['rgb', r, g, b, alpha], '(empty)', NullObject
 */
export declare const parseRgb: (value: string, opt?: Options) => SpecifiedColorChannels | string | NullObject;
/**
 * parse hsl()
 * @param value - hsl color value
 * @param [opt] - options
 * @returns parsed color - ['rgb', r, g, b, alpha], '(empty)', NullObject
 */
export declare const parseHsl: (value: string, opt?: Options) => SpecifiedColorChannels | string | NullObject;
/**
 * parse hwb()
 * @param value - hwb color value
 * @param [opt] - options
 * @returns parsed color - ['rgb', r, g, b, alpha], '(empty)', NullObject
 */
export declare const parseHwb: (value: string, opt?: Options) => SpecifiedColorChannels | string | NullObject;
/**
 * parse lab()
 * @param value - lab color value
 * @param [opt] - options
 * @returns parsed color
 *   - [xyz-d50, x, y, z, alpha], ['lab', l, a, b, alpha], '(empty)', NullObject
 */
export declare const parseLab: (value: string, opt?: Options) => SpecifiedColorChannels | string | NullObject;
/**
 * parse lch()
 * @param value - lch color value
 * @param [opt] - options
 * @returns parsed color
 *   - ['xyz-d50', x, y, z, alpha], ['lch', l, c, h, alpha]
 *   - '(empty)', NullObject
 */
export declare const parseLch: (value: string, opt?: Options) => SpecifiedColorChannels | string | NullObject;
/**
 * parse oklab()
 * @param value - oklab color value
 * @param [opt] - options
 * @returns parsed color
 *   - ['xyz-d65', x, y, z, alpha], ['oklab', l, a, b, alpha]
 *   - '(empty)', NullObject
 */
export declare const parseOklab: (value: string, opt?: Options) => SpecifiedColorChannels | string | NullObject;
/**
 * parse oklch()
 * @param value - oklch color value
 * @param [opt] - options
 * @returns parsed color
 *   - ['xyz-d65', x, y, z, alpha], ['oklch', l, c, h, alpha]
 *   - '(empty)', NullObject
 */
export declare const parseOklch: (value: string, opt?: Options) => SpecifiedColorChannels | string | NullObject;
/**
 * parse color()
 * @param value - color function value
 * @param [opt] - options
 * @returns parsed color
 *   - ['xyz-(d50|d65)', x, y, z, alpha], [cs, r, g, b, alpha]
 *   - '(empty)', NullObject
 */
export declare const parseColorFunc: (value: string, opt?: Options) => SpecifiedColorChannels | string | NullObject;
/**
 * parse color value
 * @param value - CSS color value
 * @param [opt] - options
 * @returns parsed color
 *   - ['xyz-(d50|d65)', x, y, z, alpha], ['rgb', r, g, b, alpha]
 *   - value, '(empty)', NullObject
 */
export declare const parseColorValue: (value: string, opt?: Options) => SpecifiedColorChannels | string | NullObject;
/**
 * resolve color value
 * @param value - CSS color value
 * @param [opt] - options
 * @returns resolved color
 *   - [cs, v1, v2, v3, alpha], value, '(empty)', NullObject
 */
export declare const resolveColorValue: (value: string, opt?: Options) => SpecifiedColorChannels | string | NullObject;
/**
 * resolve color()
 * @param value - color function value
 * @param [opt] - options
 * @returns resolved color - [cs, v1, v2, v3, alpha], '(empty)', NullObject
 */
export declare const resolveColorFunc: (value: string, opt?: Options) => SpecifiedColorChannels | string | NullObject;
/**
 * convert color value to linear rgb
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels | NullObject - [r, g, b, alpha] r|g|b|alpha: 0..1
 */
export declare const convertColorToLinearRgb: (value: string, opt?: {
    colorSpace?: string;
    format?: string;
}) => ColorChannels | NullObject;
/**
 * convert color value to rgb
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels | NullObject
 *   - [r, g, b, alpha] r|g|b: 0..255 alpha: 0..1
 */
export declare const convertColorToRgb: (value: string, opt?: Options) => ColorChannels | NullObject;
/**
 * convert color value to xyz
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels | NullObject - [x, y, z, alpha]
 */
export declare const convertColorToXyz: (value: string, opt?: Options) => ColorChannels | NullObject;
/**
 * convert color value to hsl
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels | NullObject - [h, s, l, alpha], hue may be powerless
 */
export declare const convertColorToHsl: (value: string, opt?: Options) => ColorChannels | [number | string, number, number, number] | NullObject;
/**
 * convert color value to hwb
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels | NullObject - [h, w, b, alpha], hue may be powerless
 */
export declare const convertColorToHwb: (value: string, opt?: Options) => ColorChannels | [number | string, number, number, number] | NullObject;
/**
 * convert color value to lab
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels | NullObject - [l, a, b, alpha]
 */
export declare const convertColorToLab: (value: string, opt?: Options) => ColorChannels | NullObject;
/**
 * convert color value to lch
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels | NullObject - [l, c, h, alpha], hue may be powerless
 */
export declare const convertColorToLch: (value: string, opt?: Options) => ColorChannels | [number, number, number | string, number] | NullObject;
/**
 * convert color value to oklab
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels | NullObject - [l, a, b, alpha]
 */
export declare const convertColorToOklab: (value: string, opt?: Options) => ColorChannels | NullObject;
/**
 * convert color value to oklch
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels | NullObject - [l, c, h, alpha], hue may be powerless
 */
export declare const convertColorToOklch: (value: string, opt?: Options) => ColorChannels | [number, number, number | string, number] | NullObject;
/**
 * resolve color-mix()
 * @param value - color-mix color value
 * @param [opt] - options
 * @returns resolved color - [cs, v1, v2, v3, alpha], '(empty)'
 */
export declare const resolveColorMix: (value: string, opt?: Options) => SpecifiedColorChannels | string | NullObject;
export {};

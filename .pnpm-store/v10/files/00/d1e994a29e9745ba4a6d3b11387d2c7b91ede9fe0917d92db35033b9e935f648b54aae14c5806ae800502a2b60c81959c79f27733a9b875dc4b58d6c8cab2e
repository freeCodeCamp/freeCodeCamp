import type { Color } from '@csstools/color-helpers';
import type { ComponentValue } from '@csstools/css-parser-algorithms';
import { FunctionNode } from '@csstools/css-parser-algorithms';

/**
 * Convert a color function to a `ColorData` object.
 *
 * @param {ComponentValue} colorNode - The color function to be converted.
 * @returns {ColorData|false} The color function as a `ColorData` object or `false` if it could not be converted.
 */
export declare function color(colorNode: ComponentValue): ColorData | false;

/**
 * A color data object.
 * It contains as much information as possible about the color and the original parsed syntax.
 */
export declare interface ColorData {
    /**
     * The color notation of the color data.
     *
     * We use "color notation" and not "color space" because these represent the original notation and not the actual color space.
     * The actual color space is however always implied by the color notation.
     */
    colorNotation: ColorNotation;
    /**
     * The color channels.
     * This is always an array of three numbers
     * but the channels can only be interpreted by looking at the color notation.
     */
    channels: Color;
    /**
     * The alpha channel.
     * This is either a number between `0` and `1` or a `ComponentValue` object.
     *
     * Since most computations are not dependent on the alpha channel,
     * we allow things like `var(--some-alpha)` as an alpha channel value for most inputs.
     */
    alpha: number | ComponentValue;
    /**
     * Information about the original syntax.
     */
    syntaxFlags: Set<SyntaxFlag>;
}

/**
 * Check if a color data object fits the `display-p3` gamut.
 *
 * @param {ColorData} x - The color data to be checked.
 * @returns {boolean} Whether the color data fits the `display-p3` gamut.
 */
export declare function colorDataFitsDisplayP3_Gamut(x: ColorData): boolean;

/**
 * Check if a color data object fits the `sRGB` gamut.
 *
 * @param {ColorData} x - The color data to be checked.
 * @returns {boolean} Whether the color data fits the `sRGB` gamut.
 */
export declare function colorDataFitsRGB_Gamut(x: ColorData): boolean;

export declare enum ColorNotation {
    /** Adobe 1999, expressed through `color(a98-rgb 0 0 0)` */
    A98_RGB = "a98-rgb",
    /** Display P3, expressed through `color(display-p3 0 0 0)` */
    Display_P3 = "display-p3",
    /** Display P3, expressed through `color(display-p3-linear 0 0 0)` */
    Linear_Display_P3 = "display-p3-linear",
    /** Hex, expressed through `#000` */
    HEX = "hex",
    /** HSL, expressed through `hsl(0 0% 0%)` */
    HSL = "hsl",
    /** HWB, expressed through `hwb(0 0% 0%)` */
    HWB = "hwb",
    /** LCH, expressed through `lch(0 0% 0deg)` */
    LCH = "lch",
    /** Lab, expressed through `lab(0 0 0)` */
    Lab = "lab",
    /** Linear sRGB, expressed through `color(linear-srgb 0 0 0)` */
    Linear_sRGB = "srgb-linear",
    /** Oklch, expressed through `oklch(0 0% 0deg)` */
    OKLCH = "oklch",
    /** Oklab, expressed through `oklab(0 0 0)` */
    OKLab = "oklab",
    /** ProPhoto RGB, expressed through `color(prophoto-rgb 0 0 0)` */
    ProPhoto_RGB = "prophoto-rgb",
    /** RGB, expressed through `rgb(0 0 0)` */
    RGB = "rgb",
    /** sRGB, expressed through `color(srgb 0 0 0)` */
    sRGB = "srgb",
    /** Rec. 2020, expressed through `color(rec2020 0 0 0)` */
    Rec2020 = "rec2020",
    /** XYZ, expressed through `color(xyz-d50 0 0 0)` */
    XYZ_D50 = "xyz-d50",
    /** XYZ, expressed through `color(xyz-d65 0 0 0)` */
    XYZ_D65 = "xyz-d65"
}

export declare function serializeHSL(color: ColorData, gamutMapping?: boolean): FunctionNode;

/**
 * Convert color data to component values in the OKLCH color space.
 * The return value can be converted to a string by calling `toString()` on it.
 *
 * @param {ColorData} color - The color data to be serialized.
 * @returns {FunctionNode} The serialized color data as a FunctionNode object.
 */
export declare function serializeOKLCH(color: ColorData): FunctionNode;

/**
 * Convert color data to component values in the display-p3 color space.
 * The return value can be converted to a string by calling `toString()` on it.
 *
 * @param {ColorData} color - The color data to be serialized.
 * @param {boolean} gamutMapping - Whether to perform gamut mapping, defaults to `true`.
 * @returns {FunctionNode} The serialized color data as a FunctionNode object.
 */
export declare function serializeP3(color: ColorData, gamutMapping?: boolean): FunctionNode;

/**
 * Convert color data to component values in the srgb color space.
 * The return value can be converted to a string by calling `toString()` on it.
 *
 * @param {ColorData} color - The color data to be serialized.
 * @param {boolean} gamutMapping - Whether to perform gamut mapping, defaults to `true`.
 * @returns {FunctionNode} The serialized color data as a FunctionNode object.
 */
export declare function serializeRGB(color: ColorData, gamutMapping?: boolean): FunctionNode;

export declare enum SyntaxFlag {
    /** Is a color keyword, e.g. `transparent`, `currentColor`, ... */
    ColorKeyword = "color-keyword",
    /** Has an explicit alpha channel */
    HasAlpha = "has-alpha",
    /** Has a channel with a dimension value, e.g. `50deg` */
    HasDimensionValues = "has-dimension-values",
    /** Has a channel with the `none` keyword */
    HasNoneKeywords = "has-none-keywords",
    /** Has a channel with a number value */
    HasNumberValues = "has-number-values",
    /** Has an alpha channel with a percentage value */
    HasPercentageAlpha = "has-percentage-alpha",
    /** Has a channel with a percentage value */
    HasPercentageValues = "has-percentage-values",
    /** Has an alpha channel with a `var()` function value */
    HasVariableAlpha = "has-variable-alpha",
    /** Is Hex notation */
    Hex = "hex",
    /** Is legacy HSL, e.g. `hsl(50deg, 0%, 0%)` */
    LegacyHSL = "legacy-hsl",
    /** Is legacy RGB, e.g. `rgb(0, 0, 0)` */
    LegacyRGB = "legacy-rgb",
    /** Is a named color, e.g. `red`, `blue` */
    NamedColor = "named-color",
    /** Is a relative color syntax, e.g. `rgb(from purple r g b)` */
    RelativeColorSyntax = "relative-color-syntax",
    /** Is a mixed color, e.g. `color-mix(in oklch, red, blue)` */
    ColorMix = "color-mix",
    /** Is a variadic mixed color, e.g. `color-mix(in oklch, red)` `color-mix(in oklch, red, blue, green)` */
    ColorMixVariadic = "color-mix-variadic",
    /** Is a contrasting color, e.g. `contrast-color()` */
    ContrastColor = "contrast-color",
    /** Is a relative alpha syntax `alpha(from red / 0.5)` */
    RelativeAlphaSyntax = "relative-alpha-syntax",
    /** Is an experimental color syntax */
    Experimental = "experimental"
}

export { }

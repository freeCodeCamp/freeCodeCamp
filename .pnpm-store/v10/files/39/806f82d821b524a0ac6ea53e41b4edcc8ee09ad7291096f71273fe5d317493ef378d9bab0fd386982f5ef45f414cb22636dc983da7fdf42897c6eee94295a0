/**
 * @param {Color} color [r, g, b]
 * - Red as number 0..1;
 * - Green as number 0..1;
 * - Blue as number 0..1;
 * @return {Color} D50 XYZ [x, y, z]
 */
export declare function a98_RGB_to_XYZ_D50(x: Color): Color;

export declare function clip(color: Color): Color;

export declare type Color = [number, number, number];

/**
 * WCAG 2.1 contrast ratio
 */
export declare function contrast_ratio_wcag_2_1(color1: Color, color2: Color): number;

/**
 * Convert an array of linear-light display-p3 RGB in the range 0.0-1.0
 * to gamma corrected form
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */
export declare function gam_P3(RGB: Color): Color;

/**
 * Convert an array of linear-light sRGB values in the range 0.0-1.0 to gamma corrected form
 * Extended transfer function:
 *  For negative values, linear portion extends on reflection
 *  of axis, then uses reflected pow below that
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see https://en.wikipedia.org/wiki/SRGB
 */
export declare function gam_sRGB(RGB: Color): Color;

/**
 * @param {Color} color [h, s, l]
 * - Hue as degrees 0..360;
 * - Saturation as number 0..100;
 * - Lightness as number 0..100;
 * @return {Color} D50 XYZ [x, y, z]
 */
export declare function HSL_to_XYZ_D50(x: Color): Color;

/**
 * @param {Color} color [h, w, b]
 * - Hue as degrees 0..360;
 * - Whiteness as number 0..100;
 * - Blackness as number 0..100;
 * @return {Color} D50 XYZ [x, y, z]
 */
export declare function HWB_to_XYZ_D50(x: Color): Color;

export declare function inGamut(x: Color): boolean;

/**
 * @param {Color} color [l, a, b]
 * - Lightness as number 0..100;
 * - a as number -160..160;
 * - b as number -160..160;
 * @return {Color} D50 XYZ [x, y, z]
 */
export declare function Lab_to_XYZ_D50(x: Color): Color;

/**
 * @param {Color} color [l, c, h]
 * - Lightness as number 0..100;
 * - Chroma as number 0..230;
 * - Hue as degrees 0..360;
 * @return {Color} D50 XYZ [x, y, z]
 */
export declare function LCH_to_XYZ_D50(x: Color): Color;

/**
 * Convert an array of display-p3 RGB values in the range 0.0 - 1.0
 * to linear light (un-companded) form.
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */
export declare function lin_P3(RGB: Color): Color;

/**
 * Convert an array of linear-light display-p3 values to CIE XYZ
 * using D65 (no chromatic adaptation)
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
export declare function lin_P3_to_XYZ(rgb: Color): Color;

/**
 * @param {Color} color [r, g, b]
 * - Red as number 0..1;
 * - Green as number 0..1;
 * - Blue as number 0..1;
 * @return {Color} D50 XYZ [x, y, z]
 */
export declare function lin_P3_to_XYZ_D50(x: Color): Color;

/**
 * Convert an array of of sRGB values where in-gamut values are in the range
 * [0 - 1] to linear light (un-companded) form.
 * Extended transfer function:
 *  For negative values, linear portion is extended on reflection of axis,
 *  then reflected power function is used.
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see https://en.wikipedia.org/wiki/SRGB
 */
export declare function lin_sRGB(RGB: Color): Color;

/**
 * Convert an array of linear-light sRGB values to CIE XYZ
 * using sRGB's own white, D65 (no chromatic adaptation)
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */
export declare function lin_sRGB_to_XYZ(rgb: Color): Color;

/**
 * @param {Color} color [r, g, b]
 * - Red as number 0..1;
 * - Green as number 0..1;
 * - Blue as number 0..1;
 * @return {Color} D50 XYZ [x, y, z]
 */
export declare function lin_sRGB_to_XYZ_D50(x: Color): Color;

export declare function mapGamut(startOKLCH: Color, toDestination: (x: Color) => Color, fromDestination: (x: Color) => Color): Color;

/**
 * @license MIT https://github.com/facelessuser/coloraide/blob/main/LICENSE.md
 */
export declare function mapGamutRayTrace(startOKLCH: Color, toLinear: (x: Color) => Color, fromLinear: (x: Color) => Color): Color;

export declare const namedColors: Record<string, Color>;

/**
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js
 */
export declare function OKLab_to_OKLCH(OKLab: Color): Color;

/**
 * Given OKLab, convert to XYZ relative to D65
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js
 */
export declare function OKLab_to_XYZ(OKLab: Color): Color;

/**
 * @param {Color} color [l, a, b]
 * - Lightness as number 0..1;
 * - a as number 0..0.5;
 * - b as number 0..0.5;
 * @return {Color} D50 XYZ [x, y, z]
 */
export declare function OKLab_to_XYZ_D50(x: Color): Color;

/**
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 * @see https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js
 */
export declare function OKLCH_to_OKLab(OKLCH: Color): Color;

/**
 * @param {Color} color [l, c, h]
 * - Lightness as number 0..1;
 * - Chroma as number 0..0.5;
 * - Hue as degrees 0..360;
 * @return {Color} D50 XYZ [x, y, z]
 */
export declare function OKLCH_to_XYZ_D50(x: Color): Color;

/**
 * @param {Color} color [r, g, b]
 * - Red as number 0..1;
 * - Green as number 0..1;
 * - Blue as number 0..1;
 * @return {Color} D50 XYZ [x, y, z]
 */
export declare function P3_to_XYZ_D50(x: Color): Color;

/**
 * @param {Color} color [r, g, b]
 * - Red as number 0..1;
 * - Green as number 0..1;
 * - Blue as number 0..1;
 * @return {Color} D50 XYZ [x, y, z]
 */
export declare function ProPhoto_RGB_to_XYZ_D50(x: Color): Color;

/**
 * @param {Color} color [r, g, b]
 * - Red as number 0..1;
 * - Green as number 0..1;
 * - Blue as number 0..1;
 * @return {Color} D50 XYZ [x, y, z]
 */
export declare function rec_2020_to_XYZ_D50(x: Color): Color;

/**
 * @param {Color} color [r, g, b]
 * - Red as number 0..1;
 * - Green as number 0..1;
 * - Blue as number 0..1;
 * @return {Color} D50 XYZ [x, y, z]
 */
export declare function sRGB_to_XYZ_D50(x: Color): Color;

/**
 * @param {Color} color [x, y, z]
 * - X as number 0..1;
 * - Y as number 0..1;
 * - Z as number 0..1;
 * @return {Color} a98 sRGB [r, g, b]
 * - Red as number 0..1;
 * - Green as number 0..1;
 * - Blue as number 0..1;
 */
export declare function XYZ_D50_to_a98_RGB(x: Color): Color;

/**
 * @param {Color} color [x, y, z]
 * - X as number 0..1;
 * - Y as number 0..1;
 * - Z as number 0..1;
 * @return {Color} HSL [r, g, b]
 * - Hue as degrees 0..360;
 * - Saturation as number 0..100;
 * - Lightness as number 0..100;
 */
export declare function XYZ_D50_to_HSL(x: Color): Color;

/**
 * @param {Color} color [x, y, z]
 * - X as number 0..1;
 * - Y as number 0..1;
 * - Z as number 0..1;
 * @return {Color} HWB [r, g, b]
 * - Hue as degrees 0..360;
 * - Whiteness as number 0..100;
 * - Blackness as number 0..100;
 */
export declare function XYZ_D50_to_HWB(x: Color): Color;

/**
 * @param {Color} color [x, y, z]
 * - X as number 0..1;
 * - Y as number 0..1;
 * - Z as number 0..1;
 * @return {Color} Lab [r, g, b]
 * - Lightness as number 0..100;
 * - a as number -160..160;
 * - b as number -160..160;
 */
export declare function XYZ_D50_to_Lab(x: Color): Color;

/**
 * @param {Color} color [x, y, z]
 * - X as number 0..1;
 * - Y as number 0..1;
 * - Z as number 0..1;
 * @return {Color} LCH [r, g, b]
 * - Lightness as number 0..100;
 * - Chroma as number 0..230;
 * - Hue as degrees 0..360;
 */
export declare function XYZ_D50_to_LCH(x: Color): Color;

/**
 * @param {Color} color [x, y, z]
 * - X as number 0..1;
 * - Y as number 0..1;
 * - Z as number 0..1;
 * @return {Color} P3 [r, g, b]
 * - R as number 0..1;
 * - G as number 0..1;
 * - B as number 0..1;
 */
export declare function XYZ_D50_to_lin_P3(x: Color): Color;

/**
 * @param {Color} color [x, y, z]
 * - X as number 0..1;
 * - Y as number 0..1;
 * - Z as number 0..1;
 * @return {Color} linear sRGB [r, g, b]
 * - Red as number 0..1;
 * - Green as number 0..1;
 * - Blue as number 0..1;
 */
export declare function XYZ_D50_to_lin_sRGB(x: Color): Color;

/**
 * @param {Color} color [x, y, z]
 * - X as number 0..1;
 * - Y as number 0..1;
 * - Z as number 0..1;
 * @return {Color} OKLab [r, g, b]
 * - Lightness as number 0..1;
 * - a as number 0..0.5;
 * - b as number 0..0.5;
 */
export declare function XYZ_D50_to_OKLab(x: Color): Color;

/**
 * @param {Color} color [x, y, z]
 * - X as number 0..1;
 * - Y as number 0..1;
 * - Z as number 0..1;
 * @return {Color} OKLCH [r, g, b]
 * - Lightness as number 0..1;
 * - Chroma as number 0..0.5;
 * - Hue as degrees 0..360;
 */
export declare function XYZ_D50_to_OKLCH(x: Color): Color;

/**
 * @param {Color} color [x, y, z]
 * - X as number 0..1;
 * - Y as number 0..1;
 * - Z as number 0..1;
 * @return {Color} P3 [r, g, b]
 * - R as number 0..1;
 * - G as number 0..1;
 * - B as number 0..1;
 */
export declare function XYZ_D50_to_P3(x: Color): Color;

/**
 * @param {Color} color [x, y, z]
 * - X as number 0..1;
 * - Y as number 0..1;
 * - Z as number 0..1;
 * @return {Color} ProPhoto [r, g, b]
 * - Red as number 0..1;
 * - Green as number 0..1;
 * - Blue as number 0..1;
 */
export declare function XYZ_D50_to_ProPhoto(x: Color): Color;

/**
 * @param {Color} color [x, y, z]
 * - X as number 0..1;
 * - Y as number 0..1;
 * - Z as number 0..1;
 * @return {Color} rec 2020 [r, g, b]
 * - Red as number 0..1;
 * - Green as number 0..1;
 * - Blue as number 0..1;
 */
export declare function XYZ_D50_to_rec_2020(x: Color): Color;

/**
 * @param {Color} color [x, y, z]
 * - X as number 0..1;
 * - Y as number 0..1;
 * - Z as number 0..1;
 * @return {Color} sRGB [r, g, b]
 * - Red as number 0..1;
 * - Green as number 0..1;
 * - Blue as number 0..1;
 */
export declare function XYZ_D50_to_sRGB(x: Color): Color;

/**
 * @param {Color} color [x, y, z]
 * - X as number 0..1;
 * - Y as number 0..1;
 * - Z as number 0..1;
 * @return {Color} D50 XYZ [x, y, z]
 */
export declare function XYZ_D50_to_XYZ_D50(x: Color): Color;

/**
 * @param {Color} color [x, y, z]
 * - X as number 0..1;
 * - Y as number 0..1;
 * - Z as number 0..1;
 * @return {Color} D65 XYZ [x, y, z]
 */
export declare function XYZ_D50_to_XYZ_D65(x: Color): Color;

/**
 * @param {Color} color [x, y, z]
 * - X as number 0..1;
 * - Y as number 0..1;
 * - Z as number 0..1;
 * @return {Color} D50 XYZ [x, y, z]
 */
export declare function XYZ_D65_to_XYZ_D50(x: Color): Color;

/**
 * Convert XYZ to linear-light P3
 *
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */
export declare function XYZ_to_lin_P3(XYZ: Color): Color;

/**
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 */
export declare function XYZ_to_lin_sRGB(XYZ: Color): Color;

/**
 * @license W3C https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @copyright This software or document includes material copied from or derived from https://github.com/w3c/csswg-drafts/blob/main/css-color-4/conversions.js. Copyright © 2022 W3C® (MIT, ERCIM, Keio, Beihang).
 *
 * XYZ <-> LMS matrices recalculated for consistent reference white
 * @see https://github.com/w3c/csswg-drafts/issues/6642#issuecomment-943521484
 */
export declare function XYZ_to_OKLab(XYZ: Color): Color;

export { }

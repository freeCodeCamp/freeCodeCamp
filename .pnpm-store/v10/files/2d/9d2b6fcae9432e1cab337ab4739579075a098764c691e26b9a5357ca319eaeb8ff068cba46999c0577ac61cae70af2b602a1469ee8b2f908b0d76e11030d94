import { NullObject } from './cache.js';
import { Options } from './typedef.js';
/**
 * resolve color
 * @param value - CSS color value
 * @param [opt] - options
 * @returns resolved color
 */
export declare const resolveColor: (value: string, opt?: Options) => string | NullObject;
/**
 * resolve CSS color
 * @param value
 *   - CSS color value
 *   - system colors are not supported
 * @param [opt] - options
 * @param [opt.currentColor]
 *   - color to use for `currentcolor` keyword
 *   - if omitted, it will be treated as a missing color
 *     i.e. `rgb(none none none / none)`
 * @param [opt.customProperty]
 *   - custom properties
 *   - pair of `--` prefixed property name and value,
 *     e.g. `customProperty: { '--some-color': '#0000ff' }`
 *   - and/or `callback` function to get the value of the custom property,
 *     e.g. `customProperty: { callback: someDeclaration.getPropertyValue }`
 * @param [opt.dimension]
 *   - dimension, convert relative length to pixels
 *   - pair of unit and it's value as a number in pixels,
 *     e.g. `dimension: { em: 12, rem: 16, vw: 10.26 }`
 *   - and/or `callback` function to get the value as a number in pixels,
 *     e.g. `dimension: { callback: convertUnitToPixel }`
 * @param [opt.format]
 *   - output format, one of below
 *   - `computedValue` (default), [computed value][139] of the color
 *   - `specifiedValue`, [specified value][140] of the color
 *   - `hex`, hex color notation, i.e. `rrggbb`
 *   - `hexAlpha`, hex color notation with alpha channel, i.e. `#rrggbbaa`
 * @returns
 *   - one of rgba?(), #rrggbb(aa)?, color-name, '(empty-string)',
 *     color(color-space r g b / alpha), color(color-space x y z / alpha),
 *     lab(l a b / alpha), lch(l c h / alpha), oklab(l a b / alpha),
 *     oklch(l c h / alpha), null
 *   - in `computedValue`, values are numbers, however `rgb()` values are
 *     integers
 *   - in `specifiedValue`, returns `empty string` for unknown and/or invalid
 *     color
 *   - in `hex`, returns `null` for `transparent`, and also returns `null` if
 *     any of `r`, `g`, `b`, `alpha` is not a number
 *   - in `hexAlpha`, returns `#00000000` for `transparent`,
 *     however returns `null` if any of `r`, `g`, `b`, `alpha` is not a number
 */
export declare const resolve: (value: string, opt?: Options) => string | null;

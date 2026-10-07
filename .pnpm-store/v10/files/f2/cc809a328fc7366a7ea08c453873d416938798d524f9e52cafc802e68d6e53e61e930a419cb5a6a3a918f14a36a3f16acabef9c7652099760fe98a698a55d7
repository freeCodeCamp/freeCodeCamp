import { AnyColor, RgbaColor, HslaColor, HsvaColor } from "./types";
export declare class Colord {
    private readonly parsed;
    readonly rgba: RgbaColor;
    constructor(input: AnyColor);
    /**
     * Returns a boolean indicating whether or not an input has been parsed successfully.
     * Note: If parsing is unsuccessful, Colord defaults to black (does not throws an error).
     */
    isValid(): boolean;
    /**
     * Returns the brightness of a color (from 0 to 1).
     * The calculation logic is modified from WCAG.
     * https://www.w3.org/TR/AERT/#color-contrast
     */
    brightness(): number;
    /**
     * Same as calling `brightness() < 0.5`.
     */
    isDark(): boolean;
    /**
     * Same as calling `brightness() >= 0.5`.
     * */
    isLight(): boolean;
    /**
     * Returns the hexadecimal representation of a color.
     * When the alpha channel value of the color is less than 1,
     * it outputs #rrggbbaa format instead of #rrggbb.
     */
    toHex(): string;
    /**
     * Converts a color to RGB color space and returns an object.
     * Always includes an alpha value from 0 to 1.
     */
    toRgb(): RgbaColor;
    /**
     * Converts a color to RGB color space and returns a string representation.
     * Outputs an alpha value only if it is less than 1.
     */
    toRgbString(): string;
    /**
     * Converts a color to HSL color space and returns an object.
     * Always includes an alpha value from 0 to 1.
     */
    toHsl(): HslaColor;
    /**
     * Converts a color to HSL color space and returns a string representation.
     * Always includes an alpha value from 0 to 1.
     */
    toHslString(): string;
    /**
     * Converts a color to HSV color space and returns an object.
     * Always includes an alpha value from 0 to 1.
     */
    toHsv(): HsvaColor;
    /**
     * Creates a new instance containing an inverted (opposite) version of the color.
     */
    invert(): Colord;
    /**
     * Increases the HSL saturation of a color by the given amount.
     */
    saturate(amount?: number): Colord;
    /**
     * Decreases the HSL saturation of a color by the given amount.
     */
    desaturate(amount?: number): Colord;
    /**
     * Makes a gray color with the same lightness as a source color.
     */
    grayscale(): Colord;
    /**
     * Increases the HSL lightness of a color by the given amount.
     */
    lighten(amount?: number): Colord;
    /**
     * Increases the HSL lightness of a color by the given amount.
     */
    darken(amount?: number): Colord;
    /**
     * Changes the HSL hue of a color by the given amount.
     */
    rotate(amount?: number): Colord;
    /**
     * Allows to get or change an alpha channel value.
     */
    alpha(): number;
    alpha(value: number): Colord;
    /**
     * Allows to get or change a hue value.
     */
    hue(): number;
    hue(value: number): Colord;
    /**
     * Determines whether two values are the same color.
     */
    isEqual(color: AnyColor | Colord): boolean;
}
/**
 * Parses the given input color and creates a new `Colord` instance.
 * See accepted input formats: https://github.com/omgovich/colord#color-parsing
 */
export declare const colord: (input: AnyColor | Colord) => Colord;

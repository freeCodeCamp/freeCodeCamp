export declare const isPresent: (value: unknown) => boolean;
export declare const round: (number: number, digits?: number, base?: number) => number;
export declare const floor: (number: number, digits?: number, base?: number) => number;
/**
 * Clamps a value between an upper and lower bound.
 * We use ternary operators because it makes the minified code
 * is 2 times shorter then `Math.min(Math.max(a,b),c)`
 * NaN is clamped to the lower bound
 */
export declare const clamp: (number: number, min?: number, max?: number) => number;
/**
 * Processes and clamps a degree (angle) value properly.
 * Any `NaN` or `Infinity` will be converted to `0`.
 * Examples: -1 => 359, 361 => 1
 */
export declare const clampHue: (degrees: number) => number;
/**
 * Converts a hue value to degrees from 0 to 360 inclusive.
 */
export declare const parseHue: (value: string, unit?: string) => number;

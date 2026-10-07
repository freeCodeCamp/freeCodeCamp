/**
 * typedef
 */
/**
 * @typedef Options - options
 * @property [alpha] - enable alpha
 * @property [colorSpace] - color space
 * @property [currentColor] - color for currentcolor
 * @property [customPropeerty] - custom properties
 * @property [d50] - white point in d50
 * @property [dimension] - dimension
 * @property [format] - output format
 * @property [key] - key
 */
export interface Options {
    alpha?: boolean;
    colorSpace?: string;
    currentColor?: string;
    customProperty?: Record<string, string | ((K: string) => string)>;
    d50?: boolean;
    delimiter?: string | string[];
    dimension?: Record<string, number | ((K: string) => number)>;
    format?: string;
    nullable?: boolean;
    preserveComment?: boolean;
}
/**
 * @type ColorChannels - color channels
 */
export type ColorChannels = [x: number, y: number, z: number, alpha: number];
/**
 * @type StringColorChannels - color channels
 */
export type StringColorChannels = [
    x: string,
    y: string,
    z: string,
    alpha: string | undefined
];
/**
 * @type StringColorSpacedChannels - specified value
 */
export type StringColorSpacedChannels = [
    cs: string,
    x: string,
    y: string,
    z: string,
    alpha: string | undefined
];
/**
 * @type ComputedColorChannels - computed value
 */
export type ComputedColorChannels = [
    cs: string,
    x: number,
    y: number,
    z: number,
    alpha: number
];
/**
 * @type SpecifiedColorChannels - specified value
 */
export type SpecifiedColorChannels = [
    cs: string,
    x: number | string,
    y: number | string,
    z: number | string,
    alpha: number | string
];
/**
 * @type MatchedRegExp - matched regexp array
 */
export type MatchedRegExp = [
    match: string,
    gr1: string,
    gr2: string,
    gr3: string,
    gr4: string
];

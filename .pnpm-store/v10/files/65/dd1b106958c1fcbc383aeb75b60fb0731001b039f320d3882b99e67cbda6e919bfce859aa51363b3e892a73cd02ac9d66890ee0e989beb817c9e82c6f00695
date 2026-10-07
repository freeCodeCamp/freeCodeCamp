type BoxBorderStyle = {
    /**
     * Top left corner
     * @example `┌`
     * @example `╔`
     * @example `╓`
     */
    tl: string;
    /**
     * Top right corner
     * @example `┐`
     * @example `╗`
     * @example `╖`
     */
    tr: string;
    /**
     * Bottom left corner
     * @example `└`
     * @example `╚`
     * @example `╙`
     */
    bl: string;
    /**
     * Bottom right corner
     * @example `┘`
     * @example `╝`
     * @example `╜`
     */
    br: string;
    /**
     * Horizontal line
     * @example `─`
     * @example `═`
     * @example `─`
     */
    h: string;
    /**
     * Vertical line
     * @example `│`
     * @example `║`
     * @example `║`
     */
    v: string;
};
declare const boxStylePresets: Record<string, BoxBorderStyle>;
type BoxStyle = {
    /**
     * The border color
     * @default 'white'
     */
    borderColor: "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray" | "blackBright" | "redBright" | "greenBright" | "yellowBright" | "blueBright" | "magentaBright" | "cyanBright" | "whiteBright";
    /**
     * The border style
     * @default 'solid'
     * @example 'single-double-rounded'
     * @example
     * ```ts
     * {
     *   tl: '┌',
     *   tr: '┐',
     *   bl: '└',
     *   br: '┘',
     *   h: '─',
     *   v: '│',
     * }
     * ```
     */
    borderStyle: BoxBorderStyle | keyof typeof boxStylePresets;
    /**
     * The vertical alignment of the text
     * @default 'center'
     */
    valign: "top" | "center" | "bottom";
    /**
     * The padding of the box
     * @default 2
     */
    padding: number;
    /**
     * The left margin of the box
     * @default 1
     */
    marginLeft: number;
    /**
     * The top margin of the box
     * @default 1
     */
    marginTop: number;
    /**
     * The top margin of the box
     * @default 1
     */
    marginBottom: number;
};
/**
 * The border options of the box
 */
type BoxOpts = {
    /**
     * Title that will be displayed on top of the box
     * @example 'Hello World'
     * @example 'Hello {name}'
     */
    title?: string;
    style?: Partial<BoxStyle>;
};
/**
 * Creates a styled box with text content, customisable via options.
 * @param {string} text - The text to display in the box.
 * @param {BoxOpts} [_opts={}] - Optional settings for the appearance and behaviour of the box. See {@link BoxOpts}.
 * @returns {string} The formatted box as a string, ready for printing or logging.
 */
declare function box(text: string, _opts?: BoxOpts): string;

/**
 * Based on https://github.com/jorgebucaran/colorette
 * Read LICENSE file for more information
 * https://github.com/jorgebucaran/colorette/blob/20fc196d07d0f87c61e0256eadd7831c79b24108/index.js
 */
declare const colorDefs: {
    reset: (string: string) => string;
    bold: (string: string) => string;
    dim: (string: string) => string;
    italic: (string: string) => string;
    underline: (string: string) => string;
    inverse: (string: string) => string;
    hidden: (string: string) => string;
    strikethrough: (string: string) => string;
    black: (string: string) => string;
    red: (string: string) => string;
    green: (string: string) => string;
    yellow: (string: string) => string;
    blue: (string: string) => string;
    magenta: (string: string) => string;
    cyan: (string: string) => string;
    white: (string: string) => string;
    gray: (string: string) => string;
    bgBlack: (string: string) => string;
    bgRed: (string: string) => string;
    bgGreen: (string: string) => string;
    bgYellow: (string: string) => string;
    bgBlue: (string: string) => string;
    bgMagenta: (string: string) => string;
    bgCyan: (string: string) => string;
    bgWhite: (string: string) => string;
    blackBright: (string: string) => string;
    redBright: (string: string) => string;
    greenBright: (string: string) => string;
    yellowBright: (string: string) => string;
    blueBright: (string: string) => string;
    magentaBright: (string: string) => string;
    cyanBright: (string: string) => string;
    whiteBright: (string: string) => string;
    bgBlackBright: (string: string) => string;
    bgRedBright: (string: string) => string;
    bgGreenBright: (string: string) => string;
    bgYellowBright: (string: string) => string;
    bgBlueBright: (string: string) => string;
    bgMagentaBright: (string: string) => string;
    bgCyanBright: (string: string) => string;
    bgWhiteBright: (string: string) => string;
};
type ColorName = keyof typeof colorDefs;
type ColorFunction = (text: string | number) => string;
/**
 * An object containing functions for colouring text. Each function corresponds to a terminal colour. See {@link ColorName} for available colours.
 */
declare const colors: Record<ColorName, ColorFunction>;
/**
 * Gets a colour function by name, with an option for a fallback colour if the requested colour is not found.
 * @param {ColorName} color - The name of the colour function to get. See {@link ColorName}.
 * @param {ColorName} [fallback="reset"] - The name of the fallback colour function if the requested colour is not found. See {@link ColorName}.
 * @returns {ColorFunction} The colour function that corresponds to the requested colour, or the fallback colour function. See {@link ColorFunction}.
 */
declare function getColor(color: ColorName, fallback?: ColorName): ColorFunction;
/**
 * Applies a specified colour to a given text string or number.
 * @param {ColorName} color - The colour to apply. See {@link ColorName}.
 * @param {string | number} text - The text to colour.
 * @returns {string} The coloured text.
 */
declare function colorize(color: ColorName, text: string | number): string;

/**
 * Removes ANSI escape codes from a given string. This is particularly useful for
 * processing text that contains formatting codes, such as colours or styles, so that the
 * the raw text without any visual formatting.
 *
 * @param {string} text - The text string from which to strip the ANSI escape codes.
 * @returns {string} The text without ANSI escape codes.
 */
declare function stripAnsi(text: string): string;
/**
 * Centers a string within a specified total width, padding it with spaces or another specified character.
 * If the string is longer than the total width, it is returned as is.
 *
 * @param {string} str - The string to centre.
 * @param {number} len - The total width in which to centre the string.
 * @param {string} [space=" "] - The character to use for padding. Defaults to a space.
 * @returns {string} The centred string.
 */
declare function centerAlign(str: string, len: number, space?: string): string;
/**
 * Right-justifies a string within a given total width, padding it with whitespace or another specified character.
 * If the string is longer than the total width, it is returned as is.
 *
 * @param {string} str - The string to right-justify.
 * @param {number} len - The total width to align the string.
 * @param {string} [space=" "] - The character to use for padding. Defaults to a space.
 * @returns {string} The right-justified string.
 */
declare function rightAlign(str: string, len: number, space?: string): string;
/**
 * Left-aligns a string within a given total width, padding it with whitespace or another specified character on the right.
 * If the string is longer than the total width, it is returned as is.
 *
 * @param {string} str - The string to align left.
 * @param {number} len - The total width to align the string.
 * @param {string} [space=" "] - The character to use for padding. Defaults to a space.
 * @returns {string} The left-justified string.
 */
declare function leftAlign(str: string, len: number, space?: string): string;
/**
 * Aligns a string (left, right, or centre) within a given total width, padding it with spaces or another specified character.
 * If the string is longer than the total width, it is returned as is. This function acts as a wrapper for individual alignment functions.
 *
 * @param {"left" | "right" | "centre"} alignment - The desired alignment of the string.
 * @param {string} str - The string to align.
 * @param {number} len - The total width in which to align the string.
 * @param {string} [space=" "] - The character to use for padding. Defaults to a space.
 * @returns {string} The aligned string, according to the given alignment.
 */
declare function align(alignment: "left" | "right" | "center", str: string, len: number, space?: string): string;

type TreeItemObject = {
    /**
     * Text of the item
     */
    text: string;
    /**
     * Children of the item
     */
    children?: TreeItem[];
    /**
     * Color of the item
     */
    color?: ColorName;
};
type TreeItem = string | TreeItemObject;
type TreeOptions = {
    /**
     * Color of the tree
     */
    color?: ColorName;
    /**
     * Prefix of the tree
     *
     * @default "  "
     */
    prefix?: string;
    /**
     * The max depth of tree
     */
    maxDepth?: number;
    /**
     * Ellipsis of the tree
     *
     * @default "..."
     */
    ellipsis?: string;
};
/**
 * Formats a hierarchical list of items into a string representing a tree structure.
 * Each item in the tree can be a simple string or an object defining the text of the item,
 * optional children, and colour. The tree structure can be customised with options
 * Specify the overall colour and the prefix used for indentation and tree lines.
 *
 * @param {TreeItem[]} items - An array of items to include in the tree. Each item can be
 * either a string or an object with `text', `children' and `colour' properties.
 * @param {TreeOptions} [options] - Optional settings to customise the appearance of the tree, including
 * the colour of the tree text and the prefix for branches. See {@link TreeOptions}.
 * @returns {string} The formatted tree as a string, ready for printing to the console or elsewhere.
 */
declare function formatTree(items: TreeItem[], options?: TreeOptions): string;

export { type BoxBorderStyle, type BoxOpts, type BoxStyle, type ColorFunction, type ColorName, type TreeItem, type TreeItemObject, type TreeOptions, align, box, centerAlign, colorize, colors, formatTree, getColor, leftAlign, rightAlign, stripAnsi };

declare const colorsMap: {
    readonly reset: readonly [0, 0];
    readonly bold: readonly [1, 22, "\u001B[22m\u001B[1m"];
    readonly dim: readonly [2, 22, "\u001B[22m\u001B[2m"];
    readonly italic: readonly [3, 23];
    readonly underline: readonly [4, 24];
    readonly inverse: readonly [7, 27];
    readonly hidden: readonly [8, 28];
    readonly strikethrough: readonly [9, 29];
    readonly black: readonly [30, 39];
    readonly red: readonly [31, 39];
    readonly green: readonly [32, 39];
    readonly yellow: readonly [33, 39];
    readonly blue: readonly [34, 39];
    readonly magenta: readonly [35, 39];
    readonly cyan: readonly [36, 39];
    readonly white: readonly [37, 39];
    readonly gray: readonly [90, 39];
    readonly bgBlack: readonly [40, 49];
    readonly bgRed: readonly [41, 49];
    readonly bgGreen: readonly [42, 49];
    readonly bgYellow: readonly [43, 49];
    readonly bgBlue: readonly [44, 49];
    readonly bgMagenta: readonly [45, 49];
    readonly bgCyan: readonly [46, 49];
    readonly bgWhite: readonly [47, 49];
    readonly blackBright: readonly [90, 39];
    readonly redBright: readonly [91, 39];
    readonly greenBright: readonly [92, 39];
    readonly yellowBright: readonly [93, 39];
    readonly blueBright: readonly [94, 39];
    readonly magentaBright: readonly [95, 39];
    readonly cyanBright: readonly [96, 39];
    readonly whiteBright: readonly [97, 39];
    readonly bgBlackBright: readonly [100, 49];
    readonly bgRedBright: readonly [101, 49];
    readonly bgGreenBright: readonly [102, 49];
    readonly bgYellowBright: readonly [103, 49];
    readonly bgBlueBright: readonly [104, 49];
    readonly bgMagentaBright: readonly [105, 49];
    readonly bgCyanBright: readonly [106, 49];
    readonly bgWhiteBright: readonly [107, 49];
};
interface Formatter {
    (input?: unknown): string;
    open: string;
    close: string;
}
type ColorName = keyof typeof colorsMap;
type ColorsMethods = {
    [Key in ColorName]: Formatter;
};
type Colors = ColorsMethods & {
    isColorSupported: boolean;
    reset: (input: unknown) => string;
};
declare function getDefaultColors(): Colors;

export { Colors as C, Formatter as F, getDefaultColors as g };

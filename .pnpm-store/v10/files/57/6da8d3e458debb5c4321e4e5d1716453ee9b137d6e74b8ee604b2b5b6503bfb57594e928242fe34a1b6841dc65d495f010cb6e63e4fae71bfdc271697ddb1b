export type CSPair = { // eslint-disable-line @typescript-eslint/naming-convention
	/**
	The ANSI terminal control sequence for starting this style.
	*/
	readonly open: string;

	/**
	The ANSI terminal control sequence for ending this style.
	*/
	readonly close: string;
};

export type ColorBase = {
	/**
	The ANSI terminal control sequence for ending this color.
	*/
	readonly close: string;

	ansi(code: number): string;

	ansi256(code: number): string;

	ansi16m(red: number, green: number, blue: number): string;
};

export type Modifier = {
	/**
	Resets the current color chain.
	*/
	readonly reset: CSPair;

	/**
	Make text bold.
	*/
	readonly bold: CSPair;

	/**
	Emitting only a small amount of light.
	*/
	readonly dim: CSPair;

	/**
	Make text italic. (Not widely supported)
	*/
	readonly italic: CSPair;

	/**
	Make text underline. (Not widely supported)
	*/
	readonly underline: CSPair;

	/**
	Make text overline.

	Supported on VTE-based terminals, the GNOME terminal, mintty, and Git Bash.
	*/
	readonly overline: CSPair;

	/**
	Inverse background and foreground colors.
	*/
	readonly inverse: CSPair;

	/**
	Prints the text, but makes it invisible.
	*/
	readonly hidden: CSPair;

	/**
	Puts a horizontal line through the center of the text. (Not widely supported)
	*/
	readonly strikethrough: CSPair;
};

export type ForegroundColor = {
	readonly black: CSPair;
	readonly red: CSPair;
	readonly green: CSPair;
	readonly yellow: CSPair;
	readonly blue: CSPair;
	readonly cyan: CSPair;
	readonly magenta: CSPair;
	readonly white: CSPair;

	/**
	Alias for `blackBright`.
	*/
	readonly gray: CSPair;

	/**
	Alias for `blackBright`.
	*/
	readonly grey: CSPair;

	readonly blackBright: CSPair;
	readonly redBright: CSPair;
	readonly greenBright: CSPair;
	readonly yellowBright: CSPair;
	readonly blueBright: CSPair;
	readonly cyanBright: CSPair;
	readonly magentaBright: CSPair;
	readonly whiteBright: CSPair;
};

export type BackgroundColor = {
	readonly bgBlack: CSPair;
	readonly bgRed: CSPair;
	readonly bgGreen: CSPair;
	readonly bgYellow: CSPair;
	readonly bgBlue: CSPair;
	readonly bgCyan: CSPair;
	readonly bgMagenta: CSPair;
	readonly bgWhite: CSPair;

	/**
	Alias for `bgBlackBright`.
	*/
	readonly bgGray: CSPair;

	/**
	Alias for `bgBlackBright`.
	*/
	readonly bgGrey: CSPair;

	readonly bgBlackBright: CSPair;
	readonly bgRedBright: CSPair;
	readonly bgGreenBright: CSPair;
	readonly bgYellowBright: CSPair;
	readonly bgBlueBright: CSPair;
	readonly bgCyanBright: CSPair;
	readonly bgMagentaBright: CSPair;
	readonly bgWhiteBright: CSPair;
};

export type ConvertColor = {
	/**
	Convert from the RGB color space to the ANSI 256 color space.

	@param red - (`0...255`)
	@param green - (`0...255`)
	@param blue - (`0...255`)
	*/
	rgbToAnsi256(red: number, green: number, blue: number): number;

	/**
	Convert from the RGB HEX color space to the RGB color space.

	@param hex - A hexadecimal string containing RGB data.
	*/
	hexToRgb(hex: string): [red: number, green: number, blue: number];

	/**
	Convert from the RGB HEX color space to the ANSI 256 color space.

	@param hex - A hexadecimal string containing RGB data.
	*/
	hexToAnsi256(hex: string): number;

	/**
	Convert from the ANSI 256 color space to the ANSI 16 color space.

	@param code - A number representing the ANSI 256 color.
	*/
	ansi256ToAnsi(code: number): number;

	/**
	Convert from the RGB color space to the ANSI 16 color space.

	@param red - (`0...255`)
	@param green - (`0...255`)
	@param blue - (`0...255`)
	*/
	rgbToAnsi(red: number, green: number, blue: number): number;

	/**
	Convert from the RGB HEX color space to the ANSI 16 color space.

	@param hex - A hexadecimal string containing RGB data.
	*/
	hexToAnsi(hex: string): number;
};

/**
Basic modifier names.
*/
export type ModifierName = keyof Modifier;

/**
Basic foreground color names.

[More colors here.](https://github.com/chalk/chalk/blob/main/readme.md#256-and-truecolor-color-support)
*/
export type ForegroundColorName = keyof ForegroundColor;

/**
Basic background color names.

[More colors here.](https://github.com/chalk/chalk/blob/main/readme.md#256-and-truecolor-color-support)
*/
export type BackgroundColorName = keyof BackgroundColor;

/**
Basic color names. The combination of foreground and background color names.

[More colors here.](https://github.com/chalk/chalk/blob/main/readme.md#256-and-truecolor-color-support)
*/
export type ColorName = ForegroundColorName | BackgroundColorName;

/**
Basic modifier names.
*/
export const modifierNames: readonly ModifierName[];

/**
Basic foreground color names.
*/
export const foregroundColorNames: readonly ForegroundColorName[];

/**
Basic background color names.
*/
export const backgroundColorNames: readonly BackgroundColorName[];

/*
Basic color names. The combination of foreground and background color names.
*/
export const colorNames: readonly ColorName[];

declare const ansiStyles: {
	readonly modifier: Modifier;
	readonly color: ColorBase & ForegroundColor;
	readonly bgColor: ColorBase & BackgroundColor;
	readonly codes: ReadonlyMap<number, number>;
} & ForegroundColor & BackgroundColor & Modifier & ConvertColor;

export default ansiStyles;

// Type definitions for Chalk
// Definitions by: Thomas Sauer <https://github.com/t-sauer>

export const enum Level {
	None = 0,
	Basic = 1,
	Ansi256 = 2,
	TrueColor = 3
}

export interface ChalkOptions {
	enabled?: boolean;
	level?: Level;
}

export interface ChalkConstructor {
	new (options?: ChalkOptions): Chalk;
	(options?: ChalkOptions): Chalk;
}

export interface ColorSupport {
	level: Level;
	hasBasic: boolean;
	has256: boolean;
	has16m: boolean;
}

export interface Chalk {
	(...text: string[]): string;
	(text: TemplateStringsArray, ...placeholders: string[]): string;
	constructor: ChalkConstructor;
	enabled: boolean;
	level: Level;
	rgb(r: number, g: number, b: number): this;
	hsl(h: number, s: number, l: number): this;
	hsv(h: number, s: number, v: number): this;
	hwb(h: number, w: number, b: number): this;
	bgHex(color: string): this;
	bgKeyword(color: string): this;
	bgRgb(r: number, g: number, b: number): this;
	bgHsl(h: number, s: number, l: number): this;
	bgHsv(h: number, s: number, v: number): this;
	bgHwb(h: number, w: number, b: number): this;
	hex(color: string): this;
	keyword(color: string): this;

	readonly reset: this;
	readonly bold: this;
	readonly dim: this;
	readonly italic: this;
	readonly underline: this;
	readonly inverse: this;
	readonly hidden: this;
	readonly strikethrough: this;

	readonly visible: this;

	readonly black: this;
	readonly red: this;
	readonly green: this;
	readonly yellow: this;
	readonly blue: this;
	readonly magenta: this;
	readonly cyan: this;
	readonly white: this;
	readonly gray: this;
	readonly grey: this;
	readonly blackBright: this;
	readonly redBright: this;
	readonly greenBright: this;
	readonly yellowBright: this;
	readonly blueBright: this;
	readonly magentaBright: this;
	readonly cyanBright: this;
	readonly whiteBright: this;

	readonly bgBlack: this;
	readonly bgRed: this;
	readonly bgGreen: this;
	readonly bgYellow: this;
	readonly bgBlue: this;
	readonly bgMagenta: this;
	readonly bgCyan: this;
	readonly bgWhite: this;
	readonly bgBlackBright: this;
	readonly bgRedBright: this;
	readonly bgGreenBright: this;
	readonly bgYellowBright: this;
	readonly bgBlueBright: this;
	readonly bgMagentaBright: this;
	readonly bgCyanBright: this;
	readonly bgWhiteBright: this;
}

declare const chalk: Chalk & { supportsColor: ColorSupport };

export default chalk

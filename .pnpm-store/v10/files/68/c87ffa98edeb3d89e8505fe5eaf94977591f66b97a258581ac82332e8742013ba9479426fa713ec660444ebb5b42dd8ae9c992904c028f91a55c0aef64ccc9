declare type CSSColor =
	| 'aliceblue'
	| 'antiquewhite'
	| 'aqua'
	| 'aquamarine'
	| 'azure'
	| 'beige'
	| 'bisque'
	| 'black'
	| 'blanchedalmond'
	| 'blue'
	| 'blueviolet'
	| 'brown'
	| 'burlywood'
	| 'cadetblue'
	| 'chartreuse'
	| 'chocolate'
	| 'coral'
	| 'cornflowerblue'
	| 'cornsilk'
	| 'crimson'
	| 'cyan'
	| 'darkblue'
	| 'darkcyan'
	| 'darkgoldenrod'
	| 'darkgray'
	| 'darkgreen'
	| 'darkgrey'
	| 'darkkhaki'
	| 'darkmagenta'
	| 'darkolivegreen'
	| 'darkorange'
	| 'darkorchid'
	| 'darkred'
	| 'darksalmon'
	| 'darkseagreen'
	| 'darkslateblue'
	| 'darkslategray'
	| 'darkslategrey'
	| 'darkturquoise'
	| 'darkviolet'
	| 'deeppink'
	| 'deepskyblue'
	| 'dimgray'
	| 'dimgrey'
	| 'dodgerblue'
	| 'firebrick'
	| 'floralwhite'
	| 'forestgreen'
	| 'fuchsia'
	| 'gainsboro'
	| 'ghostwhite'
	| 'gold'
	| 'goldenrod'
	| 'gray'
	| 'green'
	| 'greenyellow'
	| 'grey'
	| 'honeydew'
	| 'hotpink'
	| 'indianred'
	| 'indigo'
	| 'ivory'
	| 'khaki'
	| 'lavender'
	| 'lavenderblush'
	| 'lawngreen'
	| 'lemonchiffon'
	| 'lightblue'
	| 'lightcoral'
	| 'lightcyan'
	| 'lightgoldenrodyellow'
	| 'lightgray'
	| 'lightgreen'
	| 'lightgrey'
	| 'lightpink'
	| 'lightsalmon'
	| 'lightseagreen'
	| 'lightskyblue'
	| 'lightslategray'
	| 'lightslategrey'
	| 'lightsteelblue'
	| 'lightyellow'
	| 'lime'
	| 'limegreen'
	| 'linen'
	| 'magenta'
	| 'maroon'
	| 'mediumaquamarine'
	| 'mediumblue'
	| 'mediumorchid'
	| 'mediumpurple'
	| 'mediumseagreen'
	| 'mediumslateblue'
	| 'mediumspringgreen'
	| 'mediumturquoise'
	| 'mediumvioletred'
	| 'midnightblue'
	| 'mintcream'
	| 'mistyrose'
	| 'moccasin'
	| 'navajowhite'
	| 'navy'
	| 'oldlace'
	| 'olive'
	| 'olivedrab'
	| 'orange'
	| 'orangered'
	| 'orchid'
	| 'palegoldenrod'
	| 'palegreen'
	| 'paleturquoise'
	| 'palevioletred'
	| 'papayawhip'
	| 'peachpuff'
	| 'peru'
	| 'pink'
	| 'plum'
	| 'powderblue'
	| 'purple'
	| 'rebeccapurple'
	| 'red'
	| 'rosybrown'
	| 'royalblue'
	| 'saddlebrown'
	| 'salmon'
	| 'sandybrown'
	| 'seagreen'
	| 'seashell'
	| 'sienna'
	| 'silver'
	| 'skyblue'
	| 'slateblue'
	| 'slategray'
	| 'slategrey'
	| 'snow'
	| 'springgreen'
	| 'steelblue'
	| 'tan'
	| 'teal'
	| 'thistle'
	| 'tomato'
	| 'turquoise'
	| 'violet'
	| 'wheat'
	| 'white'
	| 'whitesmoke'
	| 'yellow'
	| 'yellowgreen';

declare namespace ansiStyles {
	interface ColorConvert {
		/**
		The RGB color space.

		@param red - (`0`-`255`)
		@param green - (`0`-`255`)
		@param blue - (`0`-`255`)
		*/
		rgb(red: number, green: number, blue: number): string;

		/**
		The RGB HEX color space.

		@param hex - A hexadecimal string containing RGB data.
		*/
		hex(hex: string): string;

		/**
		@param keyword - A CSS color name.
		*/
		keyword(keyword: CSSColor): string;

		/**
		The HSL color space.

		@param hue - (`0`-`360`)
		@param saturation - (`0`-`100`)
		@param lightness - (`0`-`100`)
		*/
		hsl(hue: number, saturation: number, lightness: number): string;

		/**
		The HSV color space.

		@param hue - (`0`-`360`)
		@param saturation - (`0`-`100`)
		@param value - (`0`-`100`)
		*/
		hsv(hue: number, saturation: number, value: number): string;

		/**
		The HSV color space.

		@param hue - (`0`-`360`)
		@param whiteness - (`0`-`100`)
		@param blackness - (`0`-`100`)
		*/
		hwb(hue: number, whiteness: number, blackness: number): string;

		/**
		Use a [4-bit unsigned number](https://en.wikipedia.org/wiki/ANSI_escape_code#3/4-bit) to set text color.
		*/
		ansi(ansi: number): string;

		/**
		Use an [8-bit unsigned number](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit) to set text color.
		*/
		ansi256(ansi: number): string;
	}

	interface CSPair {
		/**
		The ANSI terminal control sequence for starting this style.
		*/
		readonly open: string;

		/**
		The ANSI terminal control sequence for ending this style.
		*/
		readonly close: string;
	}

	interface ColorBase {
		readonly ansi: ColorConvert;
		readonly ansi256: ColorConvert;
		readonly ansi16m: ColorConvert;

		/**
		The ANSI terminal control sequence for ending this color.
		*/
		readonly close: string;
	}

	interface Modifier {
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
	}

	interface ForegroundColor {
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
	}

	interface BackgroundColor {
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
	}
}

declare const ansiStyles: {
	readonly modifier: ansiStyles.Modifier;
	readonly color: ansiStyles.ForegroundColor & ansiStyles.ColorBase;
	readonly bgColor: ansiStyles.BackgroundColor & ansiStyles.ColorBase;
	readonly codes: ReadonlyMap<number, number>;
} & ansiStyles.BackgroundColor & ansiStyles.ForegroundColor & ansiStyles.Modifier;

export = ansiStyles;

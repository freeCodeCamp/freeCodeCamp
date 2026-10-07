declare const figureSet: {
	readonly tick: string;
	readonly cross: string;
	readonly star: string;
	readonly square: string;
	readonly squareSmall: string;
	readonly squareSmallFilled: string;
	readonly play: string;
	readonly circle: string;
	readonly circleFilled: string;
	readonly circleDotted: string;
	readonly circleDouble: string;
	readonly circleCircle: string;
	readonly circleCross: string;
	readonly circlePipe: string;
	readonly circleQuestionMark: string;
	readonly bullet: string;
	readonly dot: string;
	readonly line: string;
	readonly ellipsis: string;
	readonly pointer: string;
	readonly pointerSmall: string;
	readonly info: string;
	readonly warning: string;
	readonly hamburger: string;
	readonly smiley: string;
	readonly mustache: string;
	readonly heart: string;
	readonly nodejs: string;
	readonly arrowUp: string;
	readonly arrowDown: string;
	readonly arrowLeft: string;
	readonly arrowRight: string;
	readonly radioOn: string;
	readonly radioOff: string;
	readonly checkboxOn: string;
	readonly checkboxOff: string;
	readonly checkboxCircleOn: string;
	readonly checkboxCircleOff: string;
	readonly questionMarkPrefix: string;
	readonly oneHalf: string;
	readonly oneThird: string;
	readonly oneQuarter: string;
	readonly oneFifth: string;
	readonly oneSixth: string;
	readonly oneSeventh: string;
	readonly oneEighth: string;
	readonly oneNinth: string;
	readonly oneTenth: string;
	readonly twoThirds: string;
	readonly twoFifths: string;
	readonly threeQuarters: string;
	readonly threeFifths: string;
	readonly threeEighths: string;
	readonly fourFifths: string;
	readonly fiveSixths: string;
	readonly fiveEighths: string;
	readonly sevenEighth: string;
}

type FigureSet = typeof figureSet

declare const figures: {
	/**
	Replace Unicode symbols depending on the OS.

	@param string - String where the Unicode symbols will be replaced with fallback symbols depending on the OS.
	@returns The input with replaced fallback Unicode symbols on Windows.

	@example
	```
	import figures = require('figures');

	console.log(figures('✔︎ check'));
	// On non-Windows OSes:  ✔︎ check
	// On Windows:           √ check

	console.log(figures.tick);
	// On non-Windows OSes:  ✔︎
	// On Windows:           √
	```
	*/
	(string: string): string;

	/**
	Symbols to use when not running on Windows.
	*/
	readonly main: FigureSet;

	/**
	Symbols to use when running on Windows.
	*/
	readonly windows: FigureSet;
} & FigureSet;

export = figures;

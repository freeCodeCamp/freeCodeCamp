import {LiteralUnion} from 'type-fest';
import {BoxStyle, Boxes} from 'cli-boxes';

declare namespace boxen {
	/**
	Characters used for custom border.

	@example
	```
	// affffb
	// e    e
	// dffffc

	const border: CustomBorderStyle = {
		topLeft: 'a',
		topRight: 'b',
		bottomRight: 'c',
		bottomLeft: 'd',
		vertical: 'e',
		horizontal: 'f'
	};
	```
	*/
	interface CustomBorderStyle extends BoxStyle {}

	/**
	Spacing used for `padding` and `margin`.
	*/
	interface Spacing {
		readonly top: number;
		readonly right: number;
		readonly bottom: number;
		readonly left: number;
	}

	interface Options {
		/**
		Color of the box border.
		*/
		readonly borderColor?: LiteralUnion<
		| 'black'
		| 'red'
		| 'green'
		| 'yellow'
		| 'blue'
		| 'magenta'
		| 'cyan'
		| 'white'
		| 'gray'
		| 'grey'
		| 'blackBright'
		| 'redBright'
		| 'greenBright'
		| 'yellowBright'
		| 'blueBright'
		| 'magentaBright'
		| 'cyanBright'
		| 'whiteBright',
		string
		>;

		/**
		Style of the box border.

		@default 'single'
		*/
		readonly borderStyle?: keyof Boxes | CustomBorderStyle;

		/**
		Reduce opacity of the border.

		@default false
		*/
		readonly dimBorder?: boolean;

		/**
		Space between the text and box border.

		@default 0
		*/
		readonly padding?: number | Spacing;

		/**
		Space around the box.

		@default 0
		*/
		readonly margin?: number | Spacing;

		/**
		Float the box on the available terminal screen space.

		@default 'left'
		*/
		readonly float?: 'left' | 'right' | 'center';

		/**
		Color of the background.
		*/
		readonly backgroundColor?: LiteralUnion<
		| 'black'
		| 'red'
		| 'green'
		| 'yellow'
		| 'blue'
		| 'magenta'
		| 'cyan'
		| 'white'
		| 'blackBright'
		| 'redBright'
		| 'greenBright'
		| 'yellowBright'
		| 'blueBright'
		| 'magentaBright'
		| 'cyanBright'
		| 'whiteBright',
		string
		>;

		/**
		Align the text in the box based on the widest line.

		@default 'left'
		@deprecated Use `textAlignment` instead.
		*/
		readonly align?: 'left' | 'right' | 'center';

		/**
		Align the text in the box based on the widest line.

		@default 'left'
		*/
		readonly textAlignment?: 'left' | 'right' | 'center';

		/**
		Display a title at the top of the box.
		If needed, the box will horizontally expand to fit the title.

		@example
		```
		console.log(boxen('foo bar', {title: 'example'}));
		// ┌ example ┐
		// │foo bar  │
		// └─────────┘
		```
		*/
		readonly title?: string;

		/**
		Align the title in the top bar.

		@default 'left'

		@example
		```
		console.log(boxen('foo bar foo bar', {title: 'example', titleAlignment: 'center'}));
		// ┌─── example ───┐
		// │foo bar foo bar│
		// └───────────────┘

		console.log(boxen('foo bar foo bar', {title: 'example', titleAlignment: 'right'}));
		// ┌────── example ┐
		// │foo bar foo bar│
		// └───────────────┘
		```
		*/
		readonly titleAlignment?: 'left' | 'right' | 'center';
	}
}

/**
Creates a box in the terminal.

@param text - The text inside the box.
@returns The box.

@example
```
import boxen = require('boxen');

console.log(boxen('unicorn', {padding: 1}));
// ┌─────────────┐
// │             │
// │   unicorn   │
// │             │
// └─────────────┘

console.log(boxen('unicorn', {padding: 1, margin: 1, borderStyle: 'double'}));
//
// ╔═════════════╗
// ║             ║
// ║   unicorn   ║
// ║             ║
// ╚═════════════╝
//
```
*/
declare const boxen: (text: string, options?: boxen.Options) => string;

export = boxen;

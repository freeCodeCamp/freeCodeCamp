declare namespace cliBoxes {
	/**
	Style of the box border.
	*/
	interface BoxStyle {
		readonly topLeft: string;
		readonly topRight: string;
		readonly bottomLeft: string;
		readonly bottomRight: string;
		readonly horizontal: string;
		readonly vertical: string;
	}

	/**
	All box styles.
	*/
	interface Boxes {
		/**
		@example
		```
		┌────┐
		│    │
		└────┘
		```
		*/
		readonly single: BoxStyle;

		/**
		@example
		```
		╔════╗
		║    ║
		╚════╝
		```
		*/
		readonly double: BoxStyle;

		/**
		@example
		```
		╭────╮
		│    │
		╰────╯
		```
		*/
		readonly round: BoxStyle;

		/**
		@example
		```
		┏━━━━┓
		┃    ┃
		┗━━━━┛
		```
		*/
		readonly bold: BoxStyle;

		/**
		@example
		```
		╓────╖
		║    ║
		╙────╜
		```
		*/
		readonly singleDouble: BoxStyle;

		/**
		@example
		```
		╒════╕
		│    │
		╘════╛
		```
		*/
		readonly doubleSingle: BoxStyle;

		/**
		@example
		```
		+----+
		|    |
		+----+
		```
		*/
		readonly classic: BoxStyle;
	}
}

/**
Boxes for use in the terminal.

@example
```
import cliBoxes = require('cli-boxes');

console.log(cliBoxes.single);
// {
// 	topLeft: '┌',
// 	topRight: '┐',
// 	bottomRight: '┘',
// 	bottomLeft: '└',
// 	vertical: '│',
// 	horizontal: '─'
// }
```
*/
declare const cliBoxes: cliBoxes.Boxes & {
	// TODO: Remove this for the next major release
	default: typeof cliBoxes;
};

export = cliBoxes;

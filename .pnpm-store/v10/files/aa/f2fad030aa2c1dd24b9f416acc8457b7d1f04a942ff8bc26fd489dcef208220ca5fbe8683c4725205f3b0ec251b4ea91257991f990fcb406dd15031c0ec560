declare const stringWidth: {
	/**
	Get the visual width of a string - the number of columns required to display it.

	Some Unicode characters are [fullwidth](https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms) and use double the normal width. [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) are stripped and doesn't affect the width.

	@example
	```
	import stringWidth = require('string-width');

	stringWidth('a');
	//=> 1

	stringWidth('古');
	//=> 2

	stringWidth('\u001B[1m古\u001B[22m');
	//=> 2
	```
	*/
	(string: string): number;

	// TODO: remove this in the next major version, refactor the whole definition to:
	// declare function stringWidth(string: string): number;
	// export = stringWidth;
	default: typeof stringWidth;
}

export = stringWidth;

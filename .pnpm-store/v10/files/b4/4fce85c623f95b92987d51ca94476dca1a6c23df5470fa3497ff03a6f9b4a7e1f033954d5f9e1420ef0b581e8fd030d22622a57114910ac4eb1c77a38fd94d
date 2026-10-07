declare namespace stripJsonComments {
	interface Options {
		/**
		Replace comments with whitespace instead of stripping them entirely.

		@default true
		*/
		readonly whitespace?: boolean;
	}
}

/**
Strip comments from JSON. Lets you use comments in your JSON files!

It will replace single-line comments `//` and multi-line comments `/**\/` with whitespace. This allows JSON error positions to remain as close as possible to the original source.

@param jsonString - Accepts a string with JSON.
@returns A JSON string without comments.

@example
```
const json = `{
	// Rainbows
	"unicorn": "cake"
}`;

JSON.parse(stripJsonComments(json));
//=> {unicorn: 'cake'}
```
*/
declare function stripJsonComments(
	jsonString: string,
	options?: stripJsonComments.Options
): string;

export = stripJsonComments;

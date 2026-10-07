export type Options = {
	/**
	The position to truncate the string.

	@default 'end'
	*/
	readonly position?: 'start' | 'middle' | 'end';

	/**
	Add a space between the text and the ellipsis.

	@default false

	@example
	```
	import cliTruncate from 'cli-truncate';

	cliTruncate('unicorns', 5, {position: 'end', space: true});
	//=> 'uni …'

	cliTruncate('unicorns', 5, {position: 'end', space: false});
	//=> 'unic…'

	cliTruncate('unicorns', 6, {position: 'start', space: true});
	//=> '… orns'

	cliTruncate('unicorns', 7, {position: 'middle', space: true});
	//=> 'uni … s'
	```
	*/
	readonly space?: boolean;

	/**
	Truncate the string from a whitespace if it is within 3 characters from the actual breaking point.

	@default false

	@example
	```
	import cliTruncate from 'cli-truncate';

	cliTruncate('unicorns rainbow dragons', 20, {position: 'start', preferTruncationOnSpace: true});
	//=> '…rainbow dragons'

	cliTruncate('unicorns rainbow dragons', 20, {position: 'middle', preferTruncationOnSpace: true});
	//=> 'unicorns…dragons'

	cliTruncate('unicorns rainbow dragons', 6, {position: 'end', preferTruncationOnSpace: true});
	//=> 'unico…'
	````
	*/
	readonly preferTruncationOnSpace?: boolean;

	/**
	The character to use at the breaking point.

	@default '…'

	@example
	```
	import cliTruncate from 'cli-truncate';

	cliTruncate('unicorns', 5, {position: 'end'});
	//=> 'unic…'

	cliTruncate('unicorns', 5, {position: 'end', truncationCharacter: '.'});
	//=> 'unic.'

	cliTruncate('unicorns', 5, {position: 'end', truncationCharacter: ''});
	//=> 'unico'
	*/
	readonly truncationCharacter?: string;
};

/**
Truncate a string to a specific width in the terminal.

@param text - The text to truncate.
@param columns - The number of columns to occupy in the terminal.

@example
```
import cliTruncate from 'cli-truncate';

cliTruncate('unicorn', 4);
//=> 'uni…'

// Truncate at different positions
cliTruncate('unicorn', 4, {position: 'start'});
//=> '…orn'

cliTruncate('unicorn', 4, {position: 'middle'});
//=> 'un…n'

cliTruncate('\u001B[31municorn\u001B[39m', 4);
//=> '\u001B[31muni…\u001B[39m'

// Note: When truncating styled text (ANSI escapes), the truncation character inherits the style at the breaking point for `position: 'start'` and `position: 'end'`. This does not apply to `position: 'middle'`.

// Truncate Unicode surrogate pairs
cliTruncate('uni\uD83C\uDE00corn', 5);
//=> 'uni\uD83C\uDE00…'

// Truncate fullwidth characters
cliTruncate('안녕하세요', 3);
//=> '안…'

// Truncate the paragraph to the terminal width
const paragraph = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.';
cliTruncate(paragraph, process.stdout.columns);
//=> 'Lorem ipsum dolor sit amet, consectetuer adipiscing…'
```
*/
export default function cliTruncate(
	text: string,
	columns: number,
	options?: Options
): string;

declare const cliCursor: {
	/**
	Show cursor.

	@param stream - Default: `process.stderr`.

	@example
	```
	import cliCursor from 'cli-cursor';

	cliCursor.show();
	```
	*/
	show(stream?: NodeJS.WritableStream): void;

	/**
	Hide cursor.

	@param stream - Default: `process.stderr`.

	@example
	```
	import cliCursor from 'cli-cursor';

	cliCursor.hide();
	```
	*/
	hide(stream?: NodeJS.WritableStream): void;

	/**
	Toggle cursor visibility.

	@param force - Is useful to show or hide the cursor based on a boolean.
	@param stream - Default: `process.stderr`.

	@example
	```
	import cliCursor from 'cli-cursor';

	const unicornsAreAwesome = true;
	cliCursor.toggle(unicornsAreAwesome);
	```
	*/
	toggle(force?: boolean, stream?: NodeJS.WritableStream): void;
};

export default cliCursor;

export type Options = {
	/**
	Show the cursor. This can be useful when a CLI accepts input from a user.

	@example
	```
	import {createLogUpdate} from 'log-update';

	// Write output but don't hide the cursor
	const log = createLogUpdate(process.stdout, {
		showCursor: true
	});
	```
	*/
	readonly showCursor?: boolean;
};

type LogUpdateMethods = {
	/**
	Clear the logged output.
	*/
	clear(): void;

	/**
	Persist the logged output. Useful if you want to start a new log session below the current one.
	*/
	done(): void;
};

/**
Log to `stdout` by overwriting the previous output in the terminal.

@param text - The text to log to `stdout`.

@example
```
import logUpdate from 'log-update';

const frames = ['-', '\\', '|', '/'];
let index = 0;

setInterval(() => {
	const frame = frames[index = ++index % frames.length];

	logUpdate(
`
		♥♥
${frame} unicorns ${frame}
		♥♥
`
	);
}, 80);
```
*/
declare const logUpdate: ((...text: string[]) => void) & LogUpdateMethods;

export default logUpdate;

/**
Log to `stderr` by overwriting the previous output in the terminal.

@param text - The text to log to `stderr`.

@example
```
import {logUpdateStderr} from 'log-update';

const frames = ['-', '\\', '|', '/'];
let index = 0;

setInterval(() => {
	const frame = frames[index = ++index % frames.length];

	logUpdateStderr(
`
		♥♥
${frame} unicorns ${frame}
		♥♥
`
	);
}, 80);
```
*/
declare const logUpdateStderr: ((...text: string[]) => void) & LogUpdateMethods;

export {logUpdateStderr};

/**
Get a `logUpdate` method that logs to the specified stream.

@param stream - The stream to log to.

@example
```
import {createLogUpdate} from 'log-update';

// Write output but don't hide the cursor
const log = createLogUpdate(process.stdout);
```
*/
export function createLogUpdate(
	stream: NodeJS.WritableStream,
	options?: Options
): typeof logUpdate;

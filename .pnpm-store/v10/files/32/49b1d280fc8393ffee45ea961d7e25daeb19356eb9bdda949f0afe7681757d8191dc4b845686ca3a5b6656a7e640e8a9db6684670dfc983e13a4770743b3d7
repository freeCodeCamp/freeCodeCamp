/// <reference types="node"/>

declare namespace isInteractive {
	interface Options {
		/**
		The stream to check.

		@default process.stdout
		*/
		readonly stream?: NodeJS.WritableStream;
	}
}

/**
Check if stdout or stderr is [interactive](https://unix.stackexchange.com/a/43389/7678).

It checks that the stream is [TTY](https://jameshfisher.com/2017/12/09/what-is-a-tty/), not a dumb terminal, and not running in a CI.

This can be useful to decide whether to present interactive UI or animations in the terminal.

@example
```
import isInteractive = require('is-interactive');

isInteractive();
//=> true
```
*/
declare function isInteractive(options?: isInteractive.Options): boolean;

export = isInteractive;

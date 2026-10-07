/// <reference types="node"/>
import * as fs from 'fs';

declare namespace makeDir {
	interface Options {
		/**
		Directory [permissions](https://x-team.com/blog/file-system-permissions-umask-node-js/).

		@default 0o777
		*/
		readonly mode?: number;

		/**
		Use a custom `fs` implementation. For example [`graceful-fs`](https://github.com/isaacs/node-graceful-fs).

		Using a custom `fs` implementation will block the use of the native `recursive` option if `fs.mkdir` or `fs.mkdirSync` is not the native function.

		@default require('fs')
		*/
		readonly fs?: typeof fs;
	}
}

declare const makeDir: {
	/**
	Make a directory and its parents if needed - Think `mkdir -p`.

	@param path - Directory to create.
	@returns The path to the created directory.

	@example
	```
	import makeDir = require('make-dir');

	(async () => {
		const path = await makeDir('unicorn/rainbow/cake');

		console.log(path);
		//=> '/Users/sindresorhus/fun/unicorn/rainbow/cake'

		// Multiple directories:
		const paths = await Promise.all([
			makeDir('unicorn/rainbow'),
			makeDir('foo/bar')
		]);

		console.log(paths);
		// [
		// 	'/Users/sindresorhus/fun/unicorn/rainbow',
		// 	'/Users/sindresorhus/fun/foo/bar'
		// ]
	})();
	```
	*/
	(path: string, options?: makeDir.Options): Promise<string>;

	/**
	Synchronously make a directory and its parents if needed - Think `mkdir -p`.

	@param path - Directory to create.
	@returns The path to the created directory.
	*/
	sync(path: string, options?: makeDir.Options): string;
};

export = makeDir;

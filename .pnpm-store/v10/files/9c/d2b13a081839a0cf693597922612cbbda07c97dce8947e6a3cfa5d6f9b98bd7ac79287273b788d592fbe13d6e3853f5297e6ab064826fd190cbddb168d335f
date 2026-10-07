import {Options as LocatePathOptions} from 'locate-path';

declare const stop: unique symbol;

declare namespace findUp {
	interface Options extends LocatePathOptions {}

	type StopSymbol = typeof stop;

	type Match = string | StopSymbol | undefined;
}

declare const findUp: {
	/**
	Find a file or directory by walking up parent directories.

	@param name - Name of the file or directory to find. Can be multiple.
	@returns The first path found (by respecting the order of `name`s) or `undefined` if none could be found.

	@example
	```
	// /
	// └── Users
	//     └── sindresorhus
	//         ├── unicorn.png
	//         └── foo
	//             └── bar
	//                 ├── baz
	//                 └── example.js

	// example.js
	import findUp = require('find-up');

	(async () => {
		console.log(await findUp('unicorn.png'));
		//=> '/Users/sindresorhus/unicorn.png'

		console.log(await findUp(['rainbow.png', 'unicorn.png']));
		//=> '/Users/sindresorhus/unicorn.png'
	})();
	```
	*/
	(name: string | string[], options?: findUp.Options): Promise<string | undefined>;

	/**
	Find a file or directory by walking up parent directories.

	@param matcher - Called for each directory in the search. Return a path or `findUp.stop` to stop the search.
	@returns The first path found or `undefined` if none could be found.

	@example
	```
	import path = require('path');
	import findUp = require('find-up');

	(async () => {
		console.log(await findUp(async directory => {
			const hasUnicorns = await findUp.exists(path.join(directory, 'unicorn.png'));
			return hasUnicorns && directory;
		}, {type: 'directory'}));
		//=> '/Users/sindresorhus'
	})();
	```
	*/
	(matcher: (directory: string) => (findUp.Match | Promise<findUp.Match>), options?: findUp.Options): Promise<string | undefined>;

	sync: {
		/**
		Synchronously find a file or directory by walking up parent directories.

		@param name - Name of the file or directory to find. Can be multiple.
		@returns The first path found (by respecting the order of `name`s) or `undefined` if none could be found.
		*/
		(name: string | string[], options?: findUp.Options): string | undefined;

		/**
		Synchronously find a file or directory by walking up parent directories.

		@param matcher - Called for each directory in the search. Return a path or `findUp.stop` to stop the search.
		@returns The first path found or `undefined` if none could be found.

		@example
		```
		import path = require('path');
		import findUp = require('find-up');

		console.log(findUp.sync(directory => {
			const hasUnicorns = findUp.sync.exists(path.join(directory, 'unicorn.png'));
			return hasUnicorns && directory;
		}, {type: 'directory'}));
		//=> '/Users/sindresorhus'
		```
		*/
		(matcher: (directory: string) => findUp.Match, options?: findUp.Options): string | undefined;

		/**
		Synchronously check if a path exists.

		@param path - Path to the file or directory.
		@returns Whether the path exists.

		@example
		```
		import findUp = require('find-up');

		console.log(findUp.sync.exists('/Users/sindresorhus/unicorn.png'));
		//=> true
		```
		*/
		exists(path: string): boolean;
	}

	/**
	Check if a path exists.

	@param path - Path to a file or directory.
	@returns Whether the path exists.

	@example
	```
	import findUp = require('find-up');

	(async () => {
		console.log(await findUp.exists('/Users/sindresorhus/unicorn.png'));
		//=> true
	})();
	```
	*/
	exists(path: string): Promise<boolean>;

	/**
	Return this in a `matcher` function to stop the search and force `findUp` to immediately return `undefined`.
	*/
	readonly stop: findUp.StopSymbol;
};

export = findUp;

import {Options as FastGlobOptions, Entry as FastGlobEntry} from 'fast-glob';

declare namespace globby {
	type ExpandDirectoriesOption =
		| boolean
		| readonly string[]
		| {files?: readonly string[]; extensions?: readonly string[]};

	type Entry = FastGlobEntry;

	interface GlobbyOptions extends FastGlobOptions {
		/**
		If set to `true`, `globby` will automatically glob directories for you. If you define an `Array` it will only glob files that matches the patterns inside the `Array`. You can also define an `Object` with `files` and `extensions` like in the example below.

		Note that if you set this option to `false`, you won't get back matched directories unless you set `onlyFiles: false`.

		@default true

		@example
		```
		import globby = require('globby');

		(async () => {
			const paths = await globby('images', {
				expandDirectories: {
					files: ['cat', 'unicorn', '*.jpg'],
					extensions: ['png']
				}
			});

			console.log(paths);
			//=> ['cat.png', 'unicorn.png', 'cow.jpg', 'rainbow.jpg']
		})();
		```
		*/
		readonly expandDirectories?: ExpandDirectoriesOption;

		/**
		Respect ignore patterns in `.gitignore` files that apply to the globbed files.

		@default false
		*/
		readonly gitignore?: boolean;
	}

	interface GlobTask {
		readonly pattern: string;
		readonly options: GlobbyOptions;
	}

	interface GitignoreOptions {
		readonly cwd?: string;
		readonly ignore?: readonly string[];
	}

	type FilterFunction = (path: string) => boolean;
}

interface Gitignore {
	/**
	@returns A filter function indicating whether a given path is ignored via a `.gitignore` file.
	*/
	sync: (options?: globby.GitignoreOptions) => globby.FilterFunction;

	/**
	`.gitignore` files matched by the ignore config are not used for the resulting filter function.

	@returns A filter function indicating whether a given path is ignored via a `.gitignore` file.

	@example
	```
	import {gitignore} from 'globby';

	(async () => {
		const isIgnored = await gitignore();
		console.log(isIgnored('some/file'));
	})();
	```
	*/
	(options?: globby.GitignoreOptions): Promise<globby.FilterFunction>;
}

declare const globby: {
	/**
	Find files and directories using glob patterns.

	Note that glob patterns can only contain forward-slashes, not backward-slashes, so if you want to construct a glob pattern from path components, you need to use `path.posix.join()` instead of `path.join()`.

	@param patterns - See the supported [glob patterns](https://github.com/sindresorhus/globby#globbing-patterns).
	@param options - See the [`fast-glob` options](https://github.com/mrmlnc/fast-glob#options-3) in addition to the ones in this package.
	@returns The matching paths.
	*/
	sync: ((
		patterns: string | readonly string[],
		options: globby.GlobbyOptions & {objectMode: true}
	) => globby.Entry[]) & ((
		patterns: string | readonly string[],
		options?: globby.GlobbyOptions
	) => string[]);

	/**
	Find files and directories using glob patterns.

	Note that glob patterns can only contain forward-slashes, not backward-slashes, so if you want to construct a glob pattern from path components, you need to use `path.posix.join()` instead of `path.join()`.

	@param patterns - See the supported [glob patterns](https://github.com/sindresorhus/globby#globbing-patterns).
	@param options - See the [`fast-glob` options](https://github.com/mrmlnc/fast-glob#options-3) in addition to the ones in this package.
	@returns The stream of matching paths.

	@example
	```
	import globby = require('globby');

	(async () => {
		for await (const path of globby.stream('*.tmp')) {
			console.log(path);
		}
	})();
	```
	*/
	stream: (
		patterns: string | readonly string[],
		options?: globby.GlobbyOptions
	) => NodeJS.ReadableStream;

	/**
	Note that you should avoid running the same tasks multiple times as they contain a file system cache. Instead, run this method each time to ensure file system changes are taken into consideration.

	@param patterns - See the supported [glob patterns](https://github.com/sindresorhus/globby#globbing-patterns).
	@param options - See the [`fast-glob` options](https://github.com/mrmlnc/fast-glob#options-3) in addition to the ones in this package.
	@returns An object in the format `{pattern: string, options: object}`, which can be passed as arguments to [`fast-glob`](https://github.com/mrmlnc/fast-glob). This is useful for other globbing-related packages.
	*/
	generateGlobTasks: (
		patterns: string | readonly string[],
		options?: globby.GlobbyOptions
	) => globby.GlobTask[];

	/**
	Note that the options affect the results.

	This function is backed by [`fast-glob`](https://github.com/mrmlnc/fast-glob#isdynamicpatternpattern-options).

	@param patterns - See the supported [glob patterns](https://github.com/sindresorhus/globby#globbing-patterns).
	@param options - See the [`fast-glob` options](https://github.com/mrmlnc/fast-glob#options-3).
	@returns Whether there are any special glob characters in the `patterns`.
	*/
	hasMagic: (
		patterns: string | readonly string[],
		options?: FastGlobOptions
	) => boolean;

	readonly gitignore: Gitignore;

	(
		patterns: string | readonly string[],
		options: globby.GlobbyOptions & {objectMode: true}
	): Promise<globby.Entry[]>;

	/**
	Find files and directories using glob patterns.

	Note that glob patterns can only contain forward-slashes, not backward-slashes, so if you want to construct a glob pattern from path components, you need to use `path.posix.join()` instead of `path.join()`.

	@param patterns - See the supported [glob patterns](https://github.com/sindresorhus/globby#globbing-patterns).
	@param options - See the [`fast-glob` options](https://github.com/mrmlnc/fast-glob#options-3) in addition to the ones in this package.
	@returns The matching paths.

	@example
	```
	import globby = require('globby');

	(async () => {
		const paths = await globby(['*', '!cake']);

		console.log(paths);
		//=> ['unicorn', 'rainbow']
	})();
	```
	*/
	(
		patterns: string | readonly string[],
		options?: globby.GlobbyOptions
	): Promise<string[]>;
};

export = globby;

declare const resolveFrom: {
	/**
	Resolve the path of a module like [`require.resolve()`](https://nodejs.org/api/globals.html#globals_require_resolve) but from a given path.

	@param fromDirectory - Directory to resolve from.
	@param moduleId - What you would use in `require()`.
	@returns Resolved module path. Throws when the module can't be found.

	@example
	```
	import resolveFrom = require('resolve-from');

	// There is a file at `./foo/bar.js`

	resolveFrom('foo', './bar');
	//=> '/Users/sindresorhus/dev/test/foo/bar.js'
	```
	*/
	(fromDirectory: string, moduleId: string): string;

	/**
	Resolve the path of a module like [`require.resolve()`](https://nodejs.org/api/globals.html#globals_require_resolve) but from a given path.

	@param fromDirectory - Directory to resolve from.
	@param moduleId - What you would use in `require()`.
	@returns Resolved module path or `undefined` when the module can't be found.
	*/
	silent(fromDirectory: string, moduleId: string): string | undefined;
};

export = resolveFrom;

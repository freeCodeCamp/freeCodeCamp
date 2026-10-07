declare const resolveCwd: {
	/**
	Resolve the path of a module like [`require.resolve()`](https://nodejs.org/api/globals.html#globals_require_resolve) but from the current working directory.

	@param moduleId - What you would use in `require()`.
	@returns The resolved module path.
	@throws When the module can't be found.

	@example
	```
	import resolveCwd = require('resolve-cwd');

	console.log(__dirname);
	//=> '/Users/sindresorhus/rainbow'

	console.log(process.cwd());
	//=> '/Users/sindresorhus/unicorn'

	console.log(resolveCwd('./foo'));
	//=> '/Users/sindresorhus/unicorn/foo.js'
	```
	*/
	(moduleId: string): string;

	/**
	Resolve the path of a module like [`require.resolve()`](https://nodejs.org/api/globals.html#globals_require_resolve) but from the current working directory.

	@param moduleId - What you would use in `require()`.
	@returns The resolved module path. Returns `undefined` instead of throwing when the module can't be found.

	@example
	```
	import resolveCwd = require('resolve-cwd');

	console.log(__dirname);
	//=> '/Users/sindresorhus/rainbow'

	console.log(process.cwd());
	//=> '/Users/sindresorhus/unicorn'

	console.log(resolveCwd.silent('./foo'));
	//=> '/Users/sindresorhus/unicorn/foo.js'
	```
	*/
	silent(moduleId: string): string | undefined;
};

export = resolveCwd;

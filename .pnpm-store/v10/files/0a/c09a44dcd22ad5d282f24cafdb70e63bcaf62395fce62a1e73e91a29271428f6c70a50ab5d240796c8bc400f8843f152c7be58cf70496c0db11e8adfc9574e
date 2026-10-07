declare const pkgDir: {
	/**
	Find the root directory of a Node.js project or npm package.

	@param cwd - Directory to start from. Default: `process.cwd()`.
	@returns The project root path or `undefined` if it couldn't be found.

	@example
	```
	// /
	// └── Users
	//     └── sindresorhus
	//         └── foo
	//             ├── package.json
	//             └── bar
	//                 ├── baz
	//                 └── example.js

	// example.js
	import pkgDir = require('pkg-dir');

	(async () => {
		const rootDir = await pkgDir(__dirname);

		console.log(rootDir);
		//=> '/Users/sindresorhus/foo'
	})();
	```
	*/
	(cwd?: string): Promise<string | undefined>;

	/**
	Synchronously find the root directory of a Node.js project or npm package.

	@param cwd - Directory to start from. Default: `process.cwd()`.
	@returns The project root path or `undefined` if it couldn't be found.
	*/
	sync(cwd?: string): string | undefined;

	// TODO: Remove this for the next major release
	default: typeof pkgDir;
};

export = pkgDir;

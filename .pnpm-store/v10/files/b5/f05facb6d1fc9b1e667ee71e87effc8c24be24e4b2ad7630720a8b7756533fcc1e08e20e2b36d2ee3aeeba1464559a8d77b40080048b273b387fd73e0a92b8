declare namespace pkgUp {
	interface Options {
		/**
		Directory to start from.

		@default process.cwd()
		*/
		readonly cwd?: string;
	}
}

declare const pkgUp: {
	/**
	Find the closest `package.json` file.

	@returns The filepath, or `null` if it couldn't be found.

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
	import pkgUp = require('pkg-up');

	(async () => {
		console.log(await pkgUp());
		//=> '/Users/sindresorhus/foo/package.json'
	})();
	```
	*/
	(options?: pkgUp.Options): Promise<string | null>;

	/**
	Synchronously find the closest `package.json` file.

	@returns The filepath, or `null` if it couldn't be found.
	*/
	sync(options?: pkgUp.Options): string | null;
};

export = pkgUp;

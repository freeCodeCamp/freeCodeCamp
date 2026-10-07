import * as typeFest from 'type-fest';
import normalize = require('normalize-package-data');

declare namespace readPkg {
	interface Options {
		/**
		[Normalize](https://github.com/npm/normalize-package-data#what-normalization-currently-entails) the package data.

		@default true
		*/
		readonly normalize?: boolean;

		/**
		Current working directory.

		@default process.cwd()
		*/
		readonly cwd?: string;
	}

	interface NormalizeOptions extends Options {
		readonly normalize?: true;
	}

	type NormalizedPackageJson = PackageJson & normalize.Package;
	type PackageJson = typeFest.PackageJson;
}

declare const readPkg: {
	/**
	@returns The parsed JSON.

	@example
	```
	import readPkg = require('read-pkg');

	(async () => {
		console.log(await readPkg());
		//=> {name: 'read-pkg', …}

		console.log(await readPkg({cwd: 'some-other-directory'});
		//=> {name: 'unicorn', …}
	})();
	```
	*/
	(options?: readPkg.NormalizeOptions): Promise<readPkg.NormalizedPackageJson>;
	(options: readPkg.Options): Promise<readPkg.PackageJson>;

	/**
	@returns The parsed JSON.

	@example
	```
	import readPkg = require('read-pkg');

	console.log(readPkg.sync());
	//=> {name: 'read-pkg', …}

	console.log(readPkg.sync({cwd: 'some-other-directory'});
	//=> {name: 'unicorn', …}
	```
	*/
	sync(options?: readPkg.NormalizeOptions): readPkg.NormalizedPackageJson;
	sync(options: readPkg.Options): readPkg.PackageJson;
};

export = readPkg;

declare const pathExists: {
	/**
	Check if a path exists.

	@returns Whether the path exists.

	@example
	```
	// foo.ts
	import pathExists = require('path-exists');

	(async () => {
		console.log(await pathExists('foo.ts'));
		//=> true
	})();
	```
	*/
	(path: string): Promise<boolean>;

	/**
	Synchronously check if a path exists.

	@returns Whether the path exists.
	*/
	sync(path: string): boolean;
};

export = pathExists;

/// <reference types="node" />

declare namespace pathKey {
	interface Options {
		/**
		Use a custom environment variables object. Default: [`process.env`](https://nodejs.org/api/process.html#process_process_env).
		*/
		readonly env?: {[key: string]: string | undefined};

		/**
		Get the PATH key for a specific platform. Default: [`process.platform`](https://nodejs.org/api/process.html#process_process_platform).
		*/
		readonly platform?: NodeJS.Platform;
	}
}

declare const pathKey: {
	/**
	Get the [PATH](https://en.wikipedia.org/wiki/PATH_(variable)) environment variable key cross-platform.

	@example
	```
	import pathKey = require('path-key');

	const key = pathKey();
	//=> 'PATH'

	const PATH = process.env[key];
	//=> '/usr/local/bin:/usr/bin:/bin'
	```
	*/
	(options?: pathKey.Options): string;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function pathKey(options?: pathKey.Options): string;
	// export = pathKey;
	default: typeof pathKey;
};

export = pathKey;

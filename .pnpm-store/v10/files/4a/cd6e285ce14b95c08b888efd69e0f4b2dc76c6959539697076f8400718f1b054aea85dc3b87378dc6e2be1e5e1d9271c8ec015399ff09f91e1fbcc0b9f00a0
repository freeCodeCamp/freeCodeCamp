export interface Options {
	/**
	Use a custom environment variables object.

	Default: [`process.env`](https://nodejs.org/api/process.html#process_process_env).
	*/
	readonly env?: Record<string, string | undefined>;

	/**
	Get the PATH key for a specific platform.

	Default: [`process.platform`](https://nodejs.org/api/process.html#process_process_platform).
	*/
	readonly platform?: NodeJS.Platform;
}

/**
Get the [PATH](https://en.wikipedia.org/wiki/PATH_(variable)) environment variable key cross-platform.

@example
```
import pathKey from 'path-key';

const key = pathKey();
//=> 'PATH'

const PATH = process.env[key];
//=> '/usr/local/bin:/usr/bin:/bin'
```
*/
export default function pathKey(options?: Options): string;

type CommonOptions = {
	/**
	Working directory.

	@default process.cwd()
	*/
	readonly cwd?: string | URL;

	/**
	The path to the current Node.js executable.

	This can be either an absolute path or a path relative to the `cwd` option.

	@default [process.execPath](https://nodejs.org/api/process.html#processexecpath)
	*/
	readonly execPath?: string | URL;

	/**
	Whether to push the current Node.js executable's directory (`execPath` option) to the front of PATH.

	@default true
	*/
	readonly addExecPath?: boolean;

	/**
	Whether to push the locally installed binaries' directory to the front of PATH.

	@default true
	*/
	readonly preferLocal?: boolean;
};

export type RunPathOptions = CommonOptions & {
	/**
	PATH to be appended.

	Set it to an empty string to exclude the default PATH.

	@default [`PATH`](https://github.com/sindresorhus/path-key)
	*/
	readonly path?: string;
};

export type ProcessEnv = Record<string, string | undefined>;

export type EnvOptions = CommonOptions & {
	/**
	Accepts an object of environment variables, like `process.env`, and modifies the PATH using the correct [PATH key](https://github.com/sindresorhus/path-key). Use this if you're modifying the PATH for use in the `child_process` options.

	@default [process.env](https://nodejs.org/api/process.html#processenv)
	*/
	readonly env?: ProcessEnv;
};

/**
Get your [PATH](https://en.wikipedia.org/wiki/PATH_(variable)) prepended with locally installed binaries.

@returns The augmented path string.

@example
```
import childProcess from 'node:child_process';
import {npmRunPath} from 'npm-run-path';

console.log(process.env.PATH);
//=> '/usr/local/bin'

console.log(npmRunPath());
//=> '/Users/sindresorhus/dev/foo/node_modules/.bin:/Users/sindresorhus/dev/node_modules/.bin:/Users/sindresorhus/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/bin'
```
*/
export function npmRunPath(options?: RunPathOptions): string;

/**
Get your [PATH](https://en.wikipedia.org/wiki/PATH_(variable)) prepended with locally installed binaries.

@returns The augmented [`process.env`](https://nodejs.org/api/process.html#process_process_env) object.

@example
```
import childProcess from 'node:child_process';
import {npmRunPathEnv} from 'npm-run-path';

// `foo` is a locally installed binary
childProcess.execFileSync('foo', {
	env: npmRunPathEnv()
});
```
*/
export function npmRunPathEnv(options?: EnvOptions): ProcessEnv;

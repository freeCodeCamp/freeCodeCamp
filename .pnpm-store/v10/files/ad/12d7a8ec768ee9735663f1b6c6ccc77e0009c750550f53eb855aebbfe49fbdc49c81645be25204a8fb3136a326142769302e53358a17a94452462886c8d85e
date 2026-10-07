/// <reference types="node"/>
import * as fs from 'fs';

export interface Options {
	/**
	 * Directory [permissions](https://x-team.com/blog/file-system-permissions-umask-node-js/).
	 *
	 * @default 0o777 & (~process.umask())
	 */
	readonly mode?: number;

	/**
	 * Use a custom `fs` implementation. For example [`graceful-fs`](https://github.com/isaacs/node-graceful-fs).
	 *
	 * Using a custom `fs` implementation will block the use of the native `recursive` option if `fs.mkdir` or `fs.mkdirSync` is not the native function.
	 *
	 * @default require('fs')
	 */
	readonly fs?: typeof fs;
}

/**
 * Make a directory and its parents if needed - Think `mkdir -p`.
 *
 * @param path - Directory to create.
 * @returns A `Promise` for the path to the created directory.
 */
export default function makeDir(
	path: string,
	options?: Options
): Promise<string>;

/**
 * Synchronously make a directory and its parents if needed - Think `mkdir -p`.
 *
 * @param path - Directory to create.
 * @returns The path to the created directory.
 */
export function sync(path: string, options?: Options): string;

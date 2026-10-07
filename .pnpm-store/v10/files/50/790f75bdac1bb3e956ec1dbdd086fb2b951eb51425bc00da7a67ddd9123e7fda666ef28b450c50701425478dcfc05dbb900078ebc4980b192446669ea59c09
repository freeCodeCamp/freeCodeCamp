import { isAbsolute } from 'node:path';
import { pathToFileURL } from 'node:url';

/**
 * Dynamic import wrapper for compatibility with absolute paths on Windows
 *
 * @see https://github.com/stylelint/stylelint/issues/7382
 *
 * @param {string} path
 */
export default function dynamicImport(path) {
	return import(isAbsolute(path) ? pathToFileURL(path).toString() : path);
}

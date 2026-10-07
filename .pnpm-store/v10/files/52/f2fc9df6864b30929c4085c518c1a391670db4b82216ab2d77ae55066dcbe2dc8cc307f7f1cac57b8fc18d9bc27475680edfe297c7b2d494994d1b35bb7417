import { existsSync, readFileSync } from 'node:fs';
import { isAbsolute, resolve } from 'node:path';
import ignore from 'ignore';

import { DEFAULT_IGNORE_FILENAME } from '../constants.mjs';

/**
 * @typedef {import('stylelint').LinterOptions} LinterOptions
 *
 * @param {Pick<LinterOptions, 'ignorePath' | 'ignorePattern'> & { cwd: string }} options
 * @returns {import('ignore').Ignore}
 */
export default function getFileIgnorer({ ignorePath, ignorePattern, cwd }) {
	const ignorer = ignore();
	const ignorePaths = [ignorePath || []].flat();

	if (ignorePaths.length === 0) {
		ignorePaths.push(DEFAULT_IGNORE_FILENAME);
	}

	for (const ignoreFilePath of ignorePaths) {
		const absoluteIgnoreFilePath = isAbsolute(ignoreFilePath)
			? ignoreFilePath
			: resolve(cwd, ignoreFilePath);

		if (!existsSync(absoluteIgnoreFilePath)) continue;

		const ignoreText = readFileSync(absoluteIgnoreFilePath, {
			// utf must remain lowercased to hit the fast path
			// see nodejs/node#49888
			encoding: 'utf8',
			flag: 'r',
		});

		ignorer.add(ignoreText);
	}

	if (ignorePattern) ignorer.add(ignorePattern);

	return ignorer;
}

import { isAbsolute, relative, resolve } from 'path';

import micromatch from 'micromatch';

import filterFilePaths from './utils/filterFilePaths.mjs';
import getConfigForFile from './getConfigForFile.mjs';
import getFileIgnorer from './utils/getFileIgnorer.mjs';

/**
 * To find out if a path is ignored, we need to load the config,
 * which may have an ignoreFiles property. We then check the path
 * against these.
 * @param {import('stylelint').InternalApi} stylelint
 * @param {string} [filePath]
 * @returns {Promise<boolean>}
 */
export default async function isPathIgnored(stylelint, filePath) {
	if (!filePath) {
		return false;
	}

	const cwd = stylelint._options.cwd;
	const result = await getConfigForFile({ stylelint, searchPath: filePath, filePath });

	if (!result) {
		return true;
	}

	const ignoreFiles = result.config.ignoreFiles || [];
	const absoluteFilePath = isAbsolute(filePath) ? filePath : resolve(cwd, filePath);

	if (micromatch([absoluteFilePath], ignoreFiles).length > 0) {
		return true;
	}

	const ignorer = getFileIgnorer(stylelint._options);

	if (filterFilePaths(ignorer, [relative(cwd, absoluteFilePath)]).length === 0) {
		return true;
	}

	return false;
}

import process from 'node:process';

import { cosmiconfig } from 'cosmiconfig';

import FileCache from './utils/FileCache.mjs';
import { augmentConfigExtended } from './augmentConfig.mjs';

const IS_TEST = process.env.NODE_ENV === 'test';
const STOP_DIR = IS_TEST ? process.cwd() : undefined;

/**
 * @type {import('stylelint').PublicApi['_createLinter']}
 */
export default function createStylelint(options = {}) {
	// [INSERT HERE] CommonJS deprecation code
	const cwd = options.cwd || process.cwd();

	return {
		_options: { ...options, cwd },

		_extendExplorer: cosmiconfig('', {
			transform: augmentConfigExtended(cwd),
			stopDir: STOP_DIR,
			searchStrategy: 'global', // for backward compatibility
		}),

		_specifiedConfigCache: new Map(),
		_postcssResultCache: new Map(),
		_fileCache: new FileCache(options.cacheLocation, options.cacheStrategy, cwd),
	};
}

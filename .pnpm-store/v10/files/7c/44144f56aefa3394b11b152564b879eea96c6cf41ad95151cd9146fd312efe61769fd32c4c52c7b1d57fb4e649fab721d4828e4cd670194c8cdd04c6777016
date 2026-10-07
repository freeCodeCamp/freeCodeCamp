import { join } from 'node:path';
import process from 'node:process';

import { cosmiconfig } from 'cosmiconfig';

import { ConfigurationError } from './utils/errors.mjs';
import { augmentConfigFull } from './augmentConfig.mjs';

const IS_TEST = process.env.NODE_ENV === 'test';
const STOP_DIR = IS_TEST ? process.cwd() : undefined;

/** @import {CosmiconfigResult, InternalApi} from 'stylelint' */

/**
 * Get a configuration by the following way:
 *
 * 1. If the `config` option is given, it's returned.
 * 2. If the `configFile` option is given, the file's config is returned.
 * 3. If the options above are not given, a config found in `searchPath` is returned.
 *
 * @param {Object} options
 * @param {InternalApi} options.stylelint
 * @param {string} [options.searchPath] - Defaults to `cwd`.
 * @param {string} [options.filePath] - For applying overrides.
 * @param {boolean} [options.failIfNoConfig=true] - Throws an error if a config is not found.
 * @returns {Promise<CosmiconfigResult>}
 */
export default async function getConfigForFile({
	stylelint,
	searchPath = stylelint._options.cwd,
	filePath,
	failIfNoConfig = true,
}) {
	const optionsConfig = stylelint._options.config;
	const cwd = stylelint._options.cwd;

	if (optionsConfig) {
		const filePathAsCacheKey = filePath ?? '';
		/** @type {Map<string, CosmiconfigResult>} */
		const cachedForFiles = stylelint._specifiedConfigCache.get(optionsConfig) ?? new Map();
		const cached = cachedForFiles.get(filePathAsCacheKey);

		if (cached) {
			return cached;
		}

		const augmentedResult = await augmentConfigFull(stylelint, filePath, {
			config: optionsConfig,
			// Add the extra path part so that we can get the directory without being
			// confused
			filepath: join(cwd, 'argument-config'),
		});

		cachedForFiles.set(filePathAsCacheKey, augmentedResult);
		stylelint._specifiedConfigCache.set(optionsConfig, cachedForFiles);

		return augmentedResult;
	}

	const configExplorer = cosmiconfig('stylelint', {
		transform: (cosmiconfigResult) => augmentConfigFull(stylelint, filePath, cosmiconfigResult),
		stopDir: STOP_DIR,
		searchStrategy: 'global', // for backward compatibility
	});

	const configFile = stylelint._options.configFile;
	let config = configFile
		? await configExplorer.load(configFile)
		: await configExplorer.search(searchPath);

	if (!config) {
		config = await configExplorer.search(cwd);
	}

	if (!config && failIfNoConfig) {
		throw new ConfigurationError(
			`No configuration provided${searchPath ? ` for ${searchPath}` : ''}`,
		);
	}

	return config;
}

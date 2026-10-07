import { isAbsolute } from 'node:path';

import postcss from 'postcss';

import descriptionlessDisables from './descriptionlessDisables.mjs';
import getConfigForFile from './getConfigForFile.mjs';
import getPostcssResult from './getPostcssResult.mjs';
import invalidScopeDisables from './invalidScopeDisables.mjs';
import isPathIgnored from './isPathIgnored.mjs';
import isPathNotFoundError from './utils/isPathNotFoundError.mjs';
import lintPostcssResult from './lintPostcssResult.mjs';
import needlessDisables from './needlessDisables.mjs';
import reportDisables from './reportDisables.mjs';
import reportUnscopedDisables from './unscopedDisables.mjs';

/** @import {Result} from 'postcss' */
/** @import {GetLintSourceOptions as Options, InternalApi as StylelintInternalApi, PostcssResult, StylelintPostcssResult} from 'stylelint' */

/**
 * Run stylelint on a PostCSS Result, either one that is provided
 * or one that we create
 * @param {StylelintInternalApi} stylelint
 * @param {Options} options
 * @returns {Promise<PostcssResult>}
 */
export default async function lintSource(stylelint, options = {}) {
	if (!options.filePath && options.code === undefined && !options.existingPostcssResult) {
		return Promise.reject(new Error('You must provide filePath, code, or existingPostcssResult'));
	}

	const isCodeNotFile = options.code !== undefined;

	const inputFilePath = isCodeNotFile ? options.codeFilename : options.filePath;

	if (inputFilePath !== undefined && !isAbsolute(inputFilePath)) {
		if (isCodeNotFile) {
			return Promise.reject(new Error('codeFilename must be an absolute path'));
		}

		return Promise.reject(new Error('filePath must be an absolute path'));
	}

	const isIgnored = await isPathIgnored(stylelint, inputFilePath).catch((err) => {
		if (isCodeNotFile && isPathNotFoundError(err)) return false;

		throw err;
	});

	if (isIgnored) {
		return createEmptyPostcssResult(inputFilePath, options.existingPostcssResult);
	}

	const configForFile = await getConfigForFile({
		stylelint,
		searchPath: inputFilePath,
		filePath: inputFilePath,
	});

	if (!configForFile) {
		return Promise.reject(new Error('Config file not found'));
	}

	const config = configForFile.config;
	const existingPostcssResult = options.existingPostcssResult;

	if (options.cache) {
		stylelint._fileCache.calcHashOfConfig(config);

		if (options.filePath && !stylelint._fileCache.hasFileChanged(options.filePath)) {
			return createEmptyPostcssResult(inputFilePath, existingPostcssResult);
		}
	}

	const postcssResult =
		existingPostcssResult ||
		(await getPostcssResult(stylelint, {
			code: options.code,
			codeFilename: options.codeFilename,
			filePath: inputFilePath,
			customSyntax: config.customSyntax,
		}));

	const stylelintPostcssResult = Object.assign(postcssResult, {
		stylelint: {
			ruleSeverities: {},
			customMessages: {},
			customUrls: {},
			ruleMetadata: {},
			fixersData: {},
			rangesOfComputedEditInfos: [],
			disabledRanges: {},
		},
	});

	await lintPostcssResult(stylelint._options, stylelintPostcssResult, config);

	reportDisables(stylelintPostcssResult);
	needlessDisables(stylelintPostcssResult);
	invalidScopeDisables(stylelintPostcssResult);
	descriptionlessDisables(stylelintPostcssResult);
	reportUnscopedDisables(stylelintPostcssResult);

	return stylelintPostcssResult;
}

/**
 * @returns {StylelintPostcssResult}
 */
function createEmptyStylelintPostcssResult() {
	return {
		ruleSeverities: {},
		customMessages: {},
		customUrls: {},
		ruleMetadata: {},
		fixersData: {},
		rangesOfComputedEditInfos: [],
		disabledRanges: {},
		ignored: true,
		stylelintError: false,
		stylelintWarning: false,
	};
}

/**
 * @param {string | undefined} filePath
 * @param {Options['existingPostcssResult']} existingPostcssResult
 * @returns {PostcssResult}
 */
function createEmptyPostcssResult(filePath, existingPostcssResult) {
	return Object.assign(existingPostcssResult ?? postcss().process('', { from: filePath }).sync(), {
		stylelint: createEmptyStylelintPostcssResult(),
	});
}

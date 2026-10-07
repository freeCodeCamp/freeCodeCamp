import { isAbsolute, join, normalize, relative } from 'node:path';
import { existsSync } from 'node:fs';
import process from 'node:process';

import createDebug from 'debug';
const debug = createDebug('stylelint:standalone');

import fastGlob from 'fast-glob';
import globby from 'globby';
import normalizePath from 'normalize-path';
import writeFileAtomic from 'write-file-atomic';

import {
	AllFilesIgnoredError,
	NoFilesFoundError,
	SuppressionFileNotFoundError,
} from './utils/errors.mjs';
import { assertString, isString } from './utils/validateTypes.mjs';
import { emitDeprecationWarning, emitExperimentalWarning } from './utils/emitWarning.mjs';
import { DEFAULT_SUPPRESSION_FILENAME } from './constants.mjs';
import { SuppressionsService } from './utils/suppressionsService.mjs';
import createPartialStylelintResult from './createPartialStylelintResult.mjs';
import createStylelint from './createStylelint.mjs';
import filterFilePaths from './utils/filterFilePaths.mjs';
import getConfigForFile from './getConfigForFile.mjs';
import getFileIgnorer from './utils/getFileIgnorer.mjs';
import getFormatter from './utils/getFormatter.mjs';
import lintSource from './lintSource.mjs';
import normalizeFixMode from './utils/normalizeFixMode.mjs';
import prepareReturnValue from './prepareReturnValue.mjs';
import resolveFilePath from './utils/resolveFilePath.mjs';
import resolveOptionValue from './utils/resolveOptionValue.mjs';

const ALWAYS_IGNORED_GLOBS = ['**/node_modules/**'];

/** @import {InternalApi, LintResult} from 'stylelint' */

/**
 * @type {import('stylelint').PublicApi['lint']}
 */
export default async function standalone({
	allowEmptyInput,
	cache,
	cacheLocation,
	cacheStrategy,
	code,
	codeFilename,
	config,
	configBasedir,
	configFile,
	customSyntax,
	cwd = process.cwd(),
	disableDefaultIgnores,
	files,
	fix,
	computeEditInfo,
	formatter,
	_defaultFormatter,
	globbyOptions,
	ignoreDisables,
	ignorePath,
	ignorePattern,
	maxWarnings,
	quiet,
	quietDeprecationWarnings = false,
	reportDescriptionlessDisables,
	reportInvalidScopeDisables,
	reportNeedlessDisables,
	reportUnscopedDisables,
	suppressAll,
	suppressRule,
	suppressLocation,
	validate = true,
}) {
	const startTime = Date.now();

	const useInputCode = !files && isString(code);
	const hasOneValidInput = (files && !isString(code)) || useInputCode;

	if (!hasOneValidInput) {
		return Promise.reject(
			new Error('You must pass stylelint a `files` glob or a `code` string, though not both'),
		);
	}

	// The ignorer will be used to filter file paths after the glob is checked,
	// before any files are actually read
	/** @type {import('ignore').Ignore} */
	let ignorer;

	try {
		ignorer = getFileIgnorer({ cwd, ignorePath, ignorePattern });
	} catch (error) {
		return Promise.reject(error);
	}

	const stylelint = createStylelint({
		allowEmptyInput,
		cache,
		cacheLocation,
		cacheStrategy,
		config,
		configFile,
		configBasedir,
		cwd,
		formatter,
		_defaultFormatter,
		ignoreDisables,
		ignorePath,
		reportNeedlessDisables,
		reportInvalidScopeDisables,
		reportDescriptionlessDisables,
		reportUnscopedDisables,
		customSyntax,
		fix,
		computeEditInfo,
		quiet,
		quietDeprecationWarnings,
		validate,
	});

	/** @see https://github.com/stylelint/stylelint/issues/7447 */
	if (!quietDeprecationWarnings && formatter === 'github') {
		emitDeprecationWarning(
			'"github" formatter is deprecated.',
			'GITHUB_FORMATTER',
			'See https://stylelint.io/awesome-stylelint#formatters for alternative formatters.',
		);
	}

	const formatterFunction = await getFormatter(stylelint);

	if (!files) {
		assertString(code);

		const absoluteCodeFilename =
			codeFilename !== undefined && !isAbsolute(codeFilename)
				? join(cwd, codeFilename)
				: codeFilename;

		// if file is ignored, return nothing
		if (
			absoluteCodeFilename &&
			!filterFilePaths(ignorer, [relative(cwd, absoluteCodeFilename)]).length
		) {
			return prepareReturnValue({
				results: [],
				maxWarnings,
				quietDeprecationWarnings,
				formatter: formatterFunction,
				cwd,
			});
		}

		let stylelintResult;

		try {
			const postcssResult = await lintSource(stylelint, {
				code,
				codeFilename: absoluteCodeFilename,
			});

			stylelintResult = createPartialStylelintResult(postcssResult);
		} catch (error) {
			stylelintResult = handleError(error);
		}

		await postProcessStylelintResult(stylelint, stylelintResult, absoluteCodeFilename);

		const postcssResult = stylelintResult._postcssResult;
		const returnValue = prepareReturnValue({
			results: [stylelintResult],
			maxWarnings,
			quietDeprecationWarnings,
			formatter: formatterFunction,
			cwd,
		});

		const autofix = normalizeFixMode(stylelint._options.fix) ?? config?.fix ?? false;

		if (autofix && postcssResult && !postcssResult.stylelint.ignored) {
			returnValue.code = postcssResult.opts
				? // If we're fixing, the output should be the fixed code
					postcssResult.root.toString(postcssResult.opts.syntax)
				: // If the writing of the fix is disabled, the input code is returned as-is
					code;

			returnValue._output = returnValue.code; // TODO: Deprecated. Remove in the next major version.
		}

		return returnValue;
	}

	let fileList = [files].flat().map((entry) => {
		const globCWD = (globbyOptions && globbyOptions.cwd) || cwd;
		const absolutePath = !isAbsolute(entry) ? join(globCWD, entry) : normalize(entry);

		if (existsSync(absolutePath)) {
			// This path points to a file. Return an escaped path to avoid globbing
			return fastGlob.escapePath(normalizePath(entry));
		}

		return entry;
	});

	if (!disableDefaultIgnores) {
		fileList = fileList.concat(ALWAYS_IGNORED_GLOBS.map((glob) => `!${glob}`));
	}

	const useCache = await resolveOptionValue({ stylelint, name: 'cache', default: false });

	if (!useCache) {
		stylelint._fileCache.destroy();
	}

	const effectiveGlobbyOptions = {
		cwd,
		...(globbyOptions || {}),
		absolute: true,
	};

	const globCWD = effectiveGlobbyOptions.cwd;

	let filePaths = await globby(fileList, effectiveGlobbyOptions);
	// Record the length of filePaths before ignore operation
	// Prevent prompting "No files matching the pattern 'xx' were found." when .stylelintignore ignore all input files
	const filePathsLengthBeforeIgnore = filePaths.length;

	// The ignorer filter needs to check paths relative to cwd
	filePaths = filterFilePaths(
		ignorer,
		filePaths.map((p) => relative(globCWD, p)),
	);

	let stylelintResults;

	if (filePaths.length) {
		let absoluteFilePaths = filePaths.map((filePath) => {
			const absoluteFilepath = !isAbsolute(filePath)
				? join(globCWD, filePath)
				: normalize(filePath);

			return absoluteFilepath;
		});

		const getStylelintResults = absoluteFilePaths.map(async (absoluteFilepath) => {
			debug(`Processing ${absoluteFilepath}`);

			try {
				const postcssResult = await lintSource(stylelint, {
					filePath: absoluteFilepath,
					cache: useCache,
				});

				if (
					(postcssResult.stylelint.stylelintError || postcssResult.stylelint.stylelintWarning) &&
					useCache
				) {
					debug(`${absoluteFilepath} contains linting errors and will not be cached.`);
					stylelint._fileCache.removeEntry(absoluteFilepath);
				}

				/**
				 * If we're fixing, save the file with changed code
				 */
				if (postcssResult.root && postcssResult.opts && !postcssResult.stylelint.ignored && fix) {
					const fixedCss = postcssResult.root.toString(postcssResult.opts.syntax);

					if (
						postcssResult.root &&
						postcssResult.root.source &&
						postcssResult.root.source.input.css !== fixedCss
					) {
						await writeFileAtomic(absoluteFilepath, fixedCss);
					}
				}

				const stylelintResult = createPartialStylelintResult(postcssResult);

				await postProcessStylelintResult(stylelint, stylelintResult, absoluteFilepath);

				return stylelintResult;
			} catch (error) {
				// On any error, we should not cache the lint result
				stylelint._fileCache.removeEntry(absoluteFilepath);

				const stylelintResult = handleError(error);

				await postProcessStylelintResult(stylelint, stylelintResult, absoluteFilepath);

				return stylelintResult;
			}
		});

		stylelintResults = await Promise.all(getStylelintResults);
	} else if (await resolveOptionValue({ stylelint, name: 'allowEmptyInput', default: false })) {
		stylelintResults = await Promise.all([]);
	} else if (filePathsLengthBeforeIgnore) {
		// All input files ignored
		stylelintResults = await Promise.reject(new AllFilesIgnoredError());
	} else {
		stylelintResults = await Promise.reject(new NoFilesFoundError(fileList));
	}

	if (!useInputCode) {
		const resolvedSuppressLocation = resolveFilePath(
			suppressLocation || DEFAULT_SUPPRESSION_FILENAME,
			cwd,
			DEFAULT_SUPPRESSION_FILENAME,
		);

		const existsSuppressionsFile = existsSync(resolvedSuppressLocation);

		if (suppressLocation && !existsSuppressionsFile && !suppressAll && !suppressRule) {
			throw new SuppressionFileNotFoundError();
		}

		if (suppressAll || suppressRule || existsSuppressionsFile) {
			emitExperimentalWarning(
				'The suppressions feature is experimental.',
				'SUPPRESSIONS',
				'See https://stylelint.io/user-guide/suppressions for more information.',
			);

			const suppressions = new SuppressionsService({
				filePath: resolvedSuppressLocation,
				cwd: process.cwd(),
			});

			if (suppressAll || suppressRule) {
				await suppressions.suppress(stylelintResults, suppressRule);
			}

			const suppressionResults = suppressions.applySuppressions(
				stylelintResults,
				await suppressions.load(),
			);

			stylelintResults = suppressionResults.results;
		}
	}

	if (useCache) {
		stylelint._fileCache.reconcile();
	}

	const result = prepareReturnValue({
		results: stylelintResults,
		maxWarnings,
		quietDeprecationWarnings,
		formatter: formatterFunction,
		cwd,
	});

	debug(`Linting complete in ${Date.now() - startTime}ms`);

	return result;
}

/**
 * @import {CssSyntaxError} from 'stylelint'
 *
 * @param {unknown} error
 * @returns {LintResult}
 */
function handleError(error) {
	if (error instanceof Error && error.name === 'CssSyntaxError') {
		return createPartialStylelintResult(undefined, /** @type {CssSyntaxError} */ (error));
	}

	throw error;
}

/**
 * @param {InternalApi} stylelint
 * @param {LintResult} stylelintResult
 * @param {string} [filePath]
 * @returns {Promise<void>}
 */
async function postProcessStylelintResult(stylelint, stylelintResult, filePath) {
	const configForFile = await getConfigForFile({ stylelint, searchPath: filePath, filePath });

	const config = configForFile === null ? {} : configForFile.config;

	if (!config._processorFunctions) {
		return;
	}

	for (let postprocess of config._processorFunctions.values()) {
		postprocess?.(stylelintResult, stylelintResult._postcssResult?.root);
	}
}

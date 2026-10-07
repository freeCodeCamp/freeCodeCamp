/**
 * @fileoverview Helper functions for ESLint class
 * @author Nicholas C. Zakas
 */

"use strict";

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

const path = require("node:path");
const fs = require("node:fs");
const { isMainThread, threadId } = require("node:worker_threads");
const fsp = fs.promises;
const isGlob = require("is-glob");
const hash = require("../cli-engine/hash");
const minimatch = require("minimatch");
const globParent = require("glob-parent");
const { Linter } = require("../linter");
const { getShorthandName } = require("../shared/naming");
const LintResultCache = require("../cli-engine/lint-result-cache");
const { ConfigLoader, LegacyConfigLoader } = require("../config/config-loader");
const createDebug = require("debug");

//-----------------------------------------------------------------------------
// Fixup references
//-----------------------------------------------------------------------------

const Minimatch = minimatch.Minimatch;
const MINIMATCH_OPTIONS = { dot: true };
const hrtimeBigint = process.hrtime.bigint;

//-----------------------------------------------------------------------------
// Types
//-----------------------------------------------------------------------------

/**
 * @import { ESLintOptions } from "./eslint.js";
 * @import { Config as CalculatedConfig } from "../config/config.js";
 * @import { FlatConfigArray } from "../config/flat-config-array.js";
 * @import { WarningService } from "../services/warning-service.js";
 * @import { Retrier } from "@humanwhocodes/retry";
 */

/** @typedef {import("../types").Linter.Config} Config */
/** @typedef {import("../types").Linter.LintMessage} LintMessage */
/** @typedef {import("../types").ESLint.LintResult} LintResult */
/** @typedef {import("../types").ESLint.Plugin} Plugin */

/**
 * @typedef {Object} GlobSearch
 * @property {Array<string>} patterns The normalized patterns to use for a search.
 * @property {Array<string>} rawPatterns The patterns as entered by the user
 *      before doing any normalization.
 */

//------------------------------------------------------------------------------
// Debug Helpers
//------------------------------------------------------------------------------

// Add %t formatter to print bigint nanosecond times in milliseconds.
createDebug.formatters.t = timeDiff =>
	`${(timeDiff + 500_000n) / 1_000_000n} ms`;

const debug = createDebug(
	`eslint:eslint-helpers${isMainThread ? "" : `:thread-${threadId}`}`,
);

//-----------------------------------------------------------------------------
// Errors
//-----------------------------------------------------------------------------

/**
 * The error type when no files match a glob.
 */
class NoFilesFoundError extends Error {
	/**
	 * @param {string} pattern The glob pattern which was not found.
	 * @param {boolean} globEnabled If `false` then the pattern was a glob pattern, but glob was disabled.
	 */
	constructor(pattern, globEnabled) {
		super(
			`No files matching '${pattern}' were found${!globEnabled ? " (glob was disabled)" : ""}.`,
		);
		this.messageTemplate = "file-not-found";
		this.messageData = { pattern, globDisabled: !globEnabled };
	}
}

/**
 * The error type when a search fails to match multiple patterns.
 */
class UnmatchedSearchPatternsError extends Error {
	/**
	 * @param {Object} options The options for the error.
	 * @param {string} options.basePath The directory that was searched.
	 * @param {Array<string>} options.unmatchedPatterns The glob patterns
	 *      which were not found.
	 * @param {Array<string>} options.patterns The glob patterns that were
	 *      searched.
	 * @param {Array<string>} options.rawPatterns The raw glob patterns that
	 *      were searched.
	 */
	constructor({ basePath, unmatchedPatterns, patterns, rawPatterns }) {
		super(
			`No files matching '${rawPatterns}' in '${basePath}' were found.`,
		);
		this.basePath = basePath;
		this.unmatchedPatterns = unmatchedPatterns;
		this.patterns = patterns;
		this.rawPatterns = rawPatterns;
	}
}

/**
 * The error type when there are files matched by a glob, but all of them have been ignored.
 */
class AllFilesIgnoredError extends Error {
	/**
	 * @param {string} pattern The glob pattern which was not found.
	 */
	constructor(pattern) {
		super(`All files matched by '${pattern}' are ignored.`);
		this.messageTemplate = "all-matched-files-ignored";
		this.messageData = { pattern };
	}
}

//-----------------------------------------------------------------------------
// General Helpers
//-----------------------------------------------------------------------------

/**
 * Check if a given value is a non-empty string or not.
 * @param {any} value The value to check.
 * @returns {boolean} `true` if `value` is a non-empty string.
 */
function isNonEmptyString(value) {
	return typeof value === "string" && value.trim() !== "";
}

/**
 * Check if a given value is an array of non-empty strings or not.
 * @param {any} value The value to check.
 * @returns {boolean} `true` if `value` is an array of non-empty strings.
 */
function isArrayOfNonEmptyString(value) {
	return (
		Array.isArray(value) && !!value.length && value.every(isNonEmptyString)
	);
}

/**
 * Check if a given value is an empty array or an array of non-empty strings.
 * @param {any} value The value to check.
 * @returns {boolean} `true` if `value` is an empty array or an array of non-empty
 *      strings.
 */
function isEmptyArrayOrArrayOfNonEmptyString(value) {
	return Array.isArray(value) && value.every(isNonEmptyString);
}

/**
 * Check if a given value is a positive integer.
 * @param {unknown} value The value to check.
 * @returns {boolean} `true` if `value` is a positive integer.
 */
function isPositiveInteger(value) {
	return Number.isInteger(value) && value > 0;
}

//-----------------------------------------------------------------------------
// File-related Helpers
//-----------------------------------------------------------------------------

/**
 * Normalizes slashes in a file pattern to posix-style.
 * @param {string} pattern The pattern to replace slashes in.
 * @returns {string} The pattern with slashes normalized.
 */
function normalizeToPosix(pattern) {
	return pattern.replace(/\\/gu, "/");
}

/**
 * Check if a string is a glob pattern or not.
 * @param {string} pattern A glob pattern.
 * @returns {boolean} `true` if the string is a glob pattern.
 */
function isGlobPattern(pattern) {
	return isGlob(path.sep === "\\" ? normalizeToPosix(pattern) : pattern);
}

/**
 * Determines if a given glob pattern will return any results.
 * Used primarily to help with useful error messages.
 * @param {Object} options The options for the function.
 * @param {string} options.basePath The directory to search.
 * @param {string} options.pattern An absolute path glob pattern to match.
 * @returns {Promise<boolean>} True if there is a glob match, false if not.
 */
async function globMatch({ basePath, pattern }) {
	let found = false;
	const { hfs } = await import("@humanfs/node");
	const patternToUse = normalizeToPosix(path.relative(basePath, pattern));

	const matcher = new Minimatch(patternToUse, MINIMATCH_OPTIONS);

	const walkSettings = {
		directoryFilter(entry) {
			return !found && matcher.match(entry.path, true);
		},

		entryFilter(entry) {
			if (found || entry.isDirectory) {
				return false;
			}

			if (matcher.match(entry.path)) {
				found = true;
				return true;
			}

			return false;
		},
	};

	if (await hfs.isDirectory(basePath)) {
		return hfs
			.walk(basePath, walkSettings)
			.next()
			.then(() => found);
	}

	return found;
}

/**
 * Searches a directory looking for matching glob patterns. This uses
 * the config array's logic to determine if a directory or file should
 * be ignored, so it is consistent with how ignoring works throughout
 * ESLint.
 * @param {Object} options The options for this function.
 * @param {string} options.basePath The directory to search.
 * @param {Array<string>} options.patterns An array of absolute path glob patterns
 *      to match.
 * @param {Array<string>} options.rawPatterns An array of glob patterns
 *      as the user inputted them. Used for errors.
 * @param {ConfigLoader|LegacyConfigLoader} options.configLoader The config array to use for
 *      determining what to ignore.
 * @param {boolean} options.errorOnUnmatchedPattern Determines if an error
 *      should be thrown when a pattern is unmatched.
 * @returns {Promise<Array<string>>} An array of matching file paths
 *      or an empty array if there are no matches.
 * @throws {UnmatchedSearchPatternsError} If there is a pattern that doesn't
 *      match any files.
 */
async function globSearch({
	basePath,
	patterns,
	rawPatterns,
	configLoader,
	errorOnUnmatchedPattern,
}) {
	if (patterns.length === 0) {
		return [];
	}

	/*
	 * In this section we are converting the patterns into Minimatch
	 * instances for performance reasons. Because we are doing the same
	 * matches repeatedly, it's best to compile those patterns once and
	 * reuse them multiple times.
	 *
	 * To do that, we convert any patterns with an absolute path into a
	 * relative path and normalize it to Posix-style slashes. We also keep
	 * track of the relative patterns to map them back to the original
	 * patterns, which we need in order to throw an error if there are any
	 * unmatched patterns.
	 */
	const relativeToPatterns = new Map();
	const matchers = patterns.map((pattern, i) => {
		const patternToUse = normalizeToPosix(path.relative(basePath, pattern));

		relativeToPatterns.set(patternToUse, patterns[i]);

		return new Minimatch(patternToUse, MINIMATCH_OPTIONS);
	});

	/*
	 * We track unmatched patterns because we may want to throw an error when
	 * they occur. To start, this set is initialized with all of the patterns.
	 * Every time a match occurs, the pattern is removed from the set, making
	 * it easy to tell if we have any unmatched patterns left at the end of
	 * search.
	 */
	const unmatchedPatterns = new Set([...relativeToPatterns.keys()]);
	const { hfs } = await import("@humanfs/node");

	const walk = hfs.walk(basePath, {
		async directoryFilter(entry) {
			if (!matchers.some(matcher => matcher.match(entry.path, true))) {
				return false;
			}

			const absolutePath = path.resolve(basePath, entry.path);
			const configs =
				await configLoader.loadConfigArrayForDirectory(absolutePath);

			return !configs.isDirectoryIgnored(absolutePath);
		},
		async entryFilter(entry) {
			const absolutePath = path.resolve(basePath, entry.path);

			// entries may be directories or files so filter out directories
			if (entry.isDirectory) {
				return false;
			}

			const configs =
				await configLoader.loadConfigArrayForFile(absolutePath);
			const config = configs.getConfig(absolutePath);

			/*
			 * Optimization: We need to track when patterns are left unmatched
			 * and so we use `unmatchedPatterns` to do that. There is a bit of
			 * complexity here because the same file can be matched by more than
			 * one pattern. So, when we start, we actually need to test every
			 * pattern against every file. Once we know there are no remaining
			 * unmatched patterns, then we can switch to just looking for the
			 * first matching pattern for improved speed.
			 */
			const matchesPattern =
				unmatchedPatterns.size > 0
					? matchers.reduce((previousValue, matcher) => {
							const pathMatches = matcher.match(entry.path);

							/*
							 * We updated the unmatched patterns set only if the path
							 * matches and the file has a config. If the file has no
							 * config, that means there wasn't a match for the
							 * pattern so it should not be removed.
							 *
							 * Performance note: `getConfig()` aggressively caches
							 * results so there is no performance penalty for calling
							 * it multiple times with the same argument.
							 */
							if (pathMatches && config) {
								unmatchedPatterns.delete(matcher.pattern);
							}

							return pathMatches || previousValue;
						}, false)
					: matchers.some(matcher => matcher.match(entry.path));

			return matchesPattern && config !== void 0;
		},
	});

	const filePaths = [];

	if (await hfs.isDirectory(basePath)) {
		for await (const entry of walk) {
			filePaths.push(path.resolve(basePath, entry.path));
		}
	}

	// now check to see if we have any unmatched patterns
	if (errorOnUnmatchedPattern && unmatchedPatterns.size > 0) {
		throw new UnmatchedSearchPatternsError({
			basePath,
			unmatchedPatterns: [...unmatchedPatterns].map(pattern =>
				relativeToPatterns.get(pattern),
			),
			patterns,
			rawPatterns,
		});
	}

	return filePaths;
}

/**
 * Throws an error for unmatched patterns. The error will only contain information about the first one.
 * Checks to see if there are any ignored results for a given search.
 * @param {Object} options The options for this function.
 * @param {string} options.basePath The directory to search.
 * @param {Array<string>} options.patterns An array of glob patterns
 *      that were used in the original search.
 * @param {Array<string>} options.rawPatterns An array of glob patterns
 *      as the user inputted them. Used for errors.
 * @param {Array<string>} options.unmatchedPatterns A non-empty array of absolute path glob patterns
 *      that were unmatched in the original search.
 * @returns {Promise<never>} Always throws an error.
 * @throws {NoFilesFoundError} If the first unmatched pattern
 *      doesn't match any files even when there are no ignores.
 * @throws {AllFilesIgnoredError} If the first unmatched pattern
 *      matches some files when there are no ignores.
 */
async function throwErrorForUnmatchedPatterns({
	basePath,
	patterns,
	rawPatterns,
	unmatchedPatterns,
}) {
	const pattern = unmatchedPatterns[0];
	const rawPattern = rawPatterns[patterns.indexOf(pattern)];

	const patternHasMatch = await globMatch({
		basePath,
		pattern,
	});

	if (patternHasMatch) {
		throw new AllFilesIgnoredError(rawPattern);
	}

	// if we get here there are truly no matches
	throw new NoFilesFoundError(rawPattern, true);
}

/**
 * Performs multiple glob searches in parallel.
 * @param {Object} options The options for this function.
 * @param {Map<string,GlobSearch>} options.searches
 *      A map of absolute path glob patterns to match.
 * @param {ConfigLoader|LegacyConfigLoader} options.configLoader The config loader to use for
 *      determining what to ignore.
 * @param {boolean} options.errorOnUnmatchedPattern Determines if an
 *      unmatched glob pattern should throw an error.
 * @returns {Promise<Array<string>>} An array of matching file paths
 *      or an empty array if there are no matches.
 */
async function globMultiSearch({
	searches,
	configLoader,
	errorOnUnmatchedPattern,
}) {
	/*
	 * For convenience, we normalized the search map into an array of objects.
	 * Next, we filter out all searches that have no patterns. This happens
	 * primarily for the cwd, which is prepopulated in the searches map as an
	 * optimization. However, if it has no patterns, it means all patterns
	 * occur outside of the cwd and we can safely filter out that search.
	 */
	const normalizedSearches = [...searches]
		.map(([basePath, { patterns, rawPatterns }]) => ({
			basePath,
			patterns,
			rawPatterns,
		}))
		.filter(({ patterns }) => patterns.length > 0);

	const results = await Promise.allSettled(
		normalizedSearches.map(({ basePath, patterns, rawPatterns }) =>
			globSearch({
				basePath,
				patterns,
				rawPatterns,
				configLoader,
				errorOnUnmatchedPattern,
			}),
		),
	);

	/*
	 * The first loop handles errors from the glob searches. Since we can't
	 * use `await` inside `flatMap`, we process errors separately in this loop.
	 * This results in two iterations over `results`, but since the length is
	 * less than or equal to the number of globs and directories passed on the
	 * command line, the performance impact should be minimal.
	 */
	for (let i = 0; i < results.length; i++) {
		const result = results[i];
		const currentSearch = normalizedSearches[i];

		if (result.status === "fulfilled") {
			continue;
		}

		// if we make it here then there was an error
		const error = result.reason;

		// unexpected errors should be re-thrown
		if (!error.basePath) {
			throw error;
		}

		if (errorOnUnmatchedPattern) {
			await throwErrorForUnmatchedPatterns({
				...currentSearch,
				unmatchedPatterns: error.unmatchedPatterns,
			});
		}
	}

	// second loop for `fulfilled` results
	return results.flatMap(result => result.value);
}

/**
 * Finds all files matching the options specified.
 * @param {Object} args The arguments objects.
 * @param {Array<string>} args.patterns An array of glob patterns.
 * @param {boolean} args.globInputPaths true to interpret glob patterns,
 *      false to not interpret glob patterns.
 * @param {string} args.cwd The current working directory to find from.
 * @param {ConfigLoader|LegacyConfigLoader} args.configLoader The config loader for the current run.
 * @param {boolean} args.errorOnUnmatchedPattern Determines if an unmatched pattern
 *      should throw an error.
 * @returns {Promise<Array<string>>} The fully resolved file paths.
 * @throws {AllFilesIgnoredError} If there are no results due to an ignore pattern.
 * @throws {NoFilesFoundError} If no files matched the given patterns.
 */
async function findFiles({
	patterns,
	globInputPaths,
	cwd,
	configLoader,
	errorOnUnmatchedPattern,
}) {
	const results = [];
	const missingPatterns = [];
	let globbyPatterns = [];
	let rawPatterns = [];
	const searches = new Map([
		[cwd, { patterns: globbyPatterns, rawPatterns: [] }],
	]);

	/*
	 * This part is a bit involved because we need to account for
	 * the different ways that the patterns can match directories.
	 * For each different way, we need to decide if we should look
	 * for a config file or just use the default config. (Directories
	 * without a config file always use the default config.)
	 *
	 * Here are the cases:
	 *
	 * 1. A directory is passed directly (e.g., "subdir"). In this case, we
	 * can assume that the user intends to lint this directory and we should
	 * not look for a config file in the parent directory, because the only
	 * reason to do that would be to ignore this directory (which we already
	 * know we don't want to do). Instead, we use the default config until we
	 * get to the directory that was passed, at which point we start looking
	 * for config files again.
	 *
	 * 2. A dot (".") or star ("*"). In this case, we want to read
	 * the config file in the current directory because the user is
	 * explicitly asking to lint the current directory. Note that "."
	 * will traverse into subdirectories while "*" will not.
	 *
	 * 3. A directory is passed in the form of "subdir/subsubdir".
	 * In this case, we don't want to look for a config file in the
	 * parent directory ("subdir"). We can skip looking for a config
	 * file until `entry.depth` is greater than 1 because there's no
	 * way that the pattern can match `entry.path` yet.
	 *
	 * 4. A directory glob pattern is passed (e.g., "subd*"). We want
	 * this case to act like case 2 because it's unclear whether or not
	 * any particular directory is meant to be traversed.
	 *
	 * 5. A recursive glob pattern is passed (e.g., "**"). We want this
	 * case to act like case 2.
	 */

	// check to see if we have explicit files and directories
	const filePaths = patterns.map(filePath => path.resolve(cwd, filePath));
	const stats = await Promise.all(
		filePaths.map(filePath => fsp.stat(filePath).catch(() => {})),
	);

	const promises = [];
	stats.forEach((stat, index) => {
		const filePath = filePaths[index];
		const pattern = normalizeToPosix(patterns[index]);

		if (stat) {
			// files are added directly to the list
			if (stat.isFile()) {
				results.push(filePath);
				promises.push(configLoader.loadConfigArrayForFile(filePath));
			}

			// directories need extensions attached
			if (stat.isDirectory()) {
				if (!searches.has(filePath)) {
					searches.set(filePath, { patterns: [], rawPatterns: [] });
				}
				({ patterns: globbyPatterns, rawPatterns } =
					searches.get(filePath));

				globbyPatterns.push(`${normalizeToPosix(filePath)}/**`);
				rawPatterns.push(pattern);
			}

			return;
		}

		// save patterns for later use based on whether globs are enabled
		if (globInputPaths && isGlobPattern(pattern)) {
			/*
			 * We are grouping patterns by their glob parent. This is done to
			 * make it easier to determine when a config file should be loaded.
			 */

			const basePath = path.resolve(cwd, globParent(pattern));

			if (!searches.has(basePath)) {
				searches.set(basePath, { patterns: [], rawPatterns: [] });
			}
			({ patterns: globbyPatterns, rawPatterns } =
				searches.get(basePath));

			globbyPatterns.push(filePath);
			rawPatterns.push(pattern);
		} else {
			missingPatterns.push(pattern);
		}
	});

	// there were patterns that didn't match anything, tell the user
	if (errorOnUnmatchedPattern && missingPatterns.length) {
		throw new NoFilesFoundError(missingPatterns[0], globInputPaths);
	}

	// now we are safe to do the search
	promises.push(
		globMultiSearch({
			searches,
			configLoader,
			errorOnUnmatchedPattern,
		}),
	);
	const globbyResults = (await Promise.all(promises)).at(-1);

	return [...new Set([...results, ...globbyResults])];
}

/**
 * Return the absolute path of a file named `"__placeholder__.js"` in a given directory.
 * This is used as a replacement for a missing file path.
 * @param {string} cwd An absolute directory path.
 * @returns {string} The absolute path of a file named `"__placeholder__.js"` in the given directory.
 */
function getPlaceholderPath(cwd) {
	return path.join(cwd, "__placeholder__.js");
}

//-----------------------------------------------------------------------------
// Results-related Helpers
//-----------------------------------------------------------------------------

/**
 * Checks if the given message is an error message.
 * @param {LintMessage} message The message to check.
 * @returns {boolean} Whether or not the message is an error message.
 * @private
 */
function isErrorMessage(message) {
	return message.severity === 2;
}

/**
 * Returns result with warning by ignore settings
 * @param {string} filePath Absolute file path of checked code
 * @param {string} baseDir Absolute path of base directory
 * @param {"ignored"|"external"|"unconfigured"} configStatus A status that determines why the file is ignored
 * @returns {LintResult} Result with single warning
 * @private
 */
function createIgnoreResult(filePath, baseDir, configStatus) {
	let message;

	switch (configStatus) {
		case "external":
			message = "File ignored because outside of base path.";
			break;
		case "unconfigured":
			message =
				"File ignored because no matching configuration was supplied.";
			break;
		default:
			{
				const isInNodeModules =
					baseDir &&
					path
						.dirname(path.relative(baseDir, filePath))
						.split(path.sep)
						.includes("node_modules");

				if (isInNodeModules) {
					message =
						'File ignored by default because it is located under the node_modules directory. Use ignore pattern "!**/node_modules/" to disable file ignore settings or use "--no-warn-ignored" to suppress this warning.';
				} else {
					message =
						'File ignored because of a matching ignore pattern. Use "--no-ignore" to disable file ignore settings or use "--no-warn-ignored" to suppress this warning.';
				}
			}
			break;
	}

	return {
		filePath,
		messages: [
			{
				ruleId: null,
				fatal: false,
				severity: 1,
				message,
				nodeType: null,
			},
		],
		suppressedMessages: [],
		errorCount: 0,
		warningCount: 1,
		fatalErrorCount: 0,
		fixableErrorCount: 0,
		fixableWarningCount: 0,
	};
}

/**
 * It will calculate the error and warning count for collection of messages per file
 * @param {LintMessage[]} messages Collection of messages
 * @returns {Object} Contains the stats
 * @private
 */
function calculateStatsPerFile(messages) {
	const stat = {
		errorCount: 0,
		fatalErrorCount: 0,
		warningCount: 0,
		fixableErrorCount: 0,
		fixableWarningCount: 0,
	};

	for (let i = 0; i < messages.length; i++) {
		const message = messages[i];

		if (message.fatal || message.severity === 2) {
			stat.errorCount++;
			if (message.fatal) {
				stat.fatalErrorCount++;
			}
			if (message.fix) {
				stat.fixableErrorCount++;
			}
		} else {
			stat.warningCount++;
			if (message.fix) {
				stat.fixableWarningCount++;
			}
		}
	}
	return stat;
}

//-----------------------------------------------------------------------------
// Options-related Helpers
//-----------------------------------------------------------------------------

/**
 * Check if a given value is a valid fix type or not.
 * @param {any} x The value to check.
 * @returns {boolean} `true` if `x` is valid fix type.
 */
function isFixType(x) {
	return (
		x === "directive" ||
		x === "problem" ||
		x === "suggestion" ||
		x === "layout"
	);
}

/**
 * Check if a given value is an array of fix types or not.
 * @param {any} x The value to check.
 * @returns {boolean} `true` if `x` is an array of fix types.
 */
function isFixTypeArray(x) {
	return Array.isArray(x) && x.every(isFixType);
}

/**
 * The error for invalid options.
 */
class ESLintInvalidOptionsError extends Error {
	constructor(messages) {
		super(`Invalid Options:\n- ${messages.join("\n- ")}`);
		this.code = "ESLINT_INVALID_OPTIONS";
		Error.captureStackTrace(this, ESLintInvalidOptionsError);
	}
}

/**
 * Validates and normalizes options for the wrapped CLIEngine instance.
 * @param {ESLintOptions} options The options to process.
 * @throws {ESLintInvalidOptionsError} If of any of a variety of type errors.
 * @returns {ESLintOptions} The normalized options.
 */
function processOptions({
	allowInlineConfig = true, // ← we cannot use `overrideConfig.noInlineConfig` instead because `allowInlineConfig` has side-effect that suppress warnings that show inline configs are ignored.
	baseConfig = null,
	cache = false,
	cacheLocation = ".eslintcache",
	cacheStrategy = "metadata",
	concurrency = "off",
	cwd = process.cwd(),
	errorOnUnmatchedPattern = true,
	fix = false,
	fixTypes = null, // ← should be null by default because if it's an array then it suppresses rules that don't have the `meta.type` property.
	flags = [],
	globInputPaths = true,
	ignore = true,
	ignorePatterns = null,
	overrideConfig = null,
	overrideConfigFile = null,
	plugins = {},
	stats = false,
	warnIgnored = true,
	passOnNoPatterns = false,
	ruleFilter = () => true,
	...unknownOptions
}) {
	const errors = [];
	const unknownOptionKeys = Object.keys(unknownOptions);

	if (unknownOptionKeys.length >= 1) {
		errors.push(`Unknown options: ${unknownOptionKeys.join(", ")}`);
		if (unknownOptionKeys.includes("cacheFile")) {
			errors.push(
				"'cacheFile' has been removed. Please use the 'cacheLocation' option instead.",
			);
		}
		if (unknownOptionKeys.includes("configFile")) {
			errors.push(
				"'configFile' has been removed. Please use the 'overrideConfigFile' option instead.",
			);
		}
		if (unknownOptionKeys.includes("envs")) {
			errors.push("'envs' has been removed.");
		}
		if (unknownOptionKeys.includes("extensions")) {
			errors.push("'extensions' has been removed.");
		}
		if (unknownOptionKeys.includes("resolvePluginsRelativeTo")) {
			errors.push("'resolvePluginsRelativeTo' has been removed.");
		}
		if (unknownOptionKeys.includes("globals")) {
			errors.push(
				"'globals' has been removed. Please use the 'overrideConfig.languageOptions.globals' option instead.",
			);
		}
		if (unknownOptionKeys.includes("ignorePath")) {
			errors.push("'ignorePath' has been removed.");
		}
		if (unknownOptionKeys.includes("ignorePattern")) {
			errors.push(
				"'ignorePattern' has been removed. Please use the 'overrideConfig.ignorePatterns' option instead.",
			);
		}
		if (unknownOptionKeys.includes("parser")) {
			errors.push(
				"'parser' has been removed. Please use the 'overrideConfig.languageOptions.parser' option instead.",
			);
		}
		if (unknownOptionKeys.includes("parserOptions")) {
			errors.push(
				"'parserOptions' has been removed. Please use the 'overrideConfig.languageOptions.parserOptions' option instead.",
			);
		}
		if (unknownOptionKeys.includes("rules")) {
			errors.push(
				"'rules' has been removed. Please use the 'overrideConfig.rules' option instead.",
			);
		}
		if (unknownOptionKeys.includes("rulePaths")) {
			errors.push(
				"'rulePaths' has been removed. Please define your rules using plugins.",
			);
		}
		if (unknownOptionKeys.includes("reportUnusedDisableDirectives")) {
			errors.push(
				"'reportUnusedDisableDirectives' has been removed. Please use the 'overrideConfig.linterOptions.reportUnusedDisableDirectives' option instead.",
			);
		}
	}
	if (typeof allowInlineConfig !== "boolean") {
		errors.push("'allowInlineConfig' must be a boolean.");
	}
	if (typeof baseConfig !== "object") {
		errors.push("'baseConfig' must be an object or null.");
	}
	if (typeof cache !== "boolean") {
		errors.push("'cache' must be a boolean.");
	}
	if (!isNonEmptyString(cacheLocation)) {
		errors.push("'cacheLocation' must be a non-empty string.");
	}
	if (cacheStrategy !== "metadata" && cacheStrategy !== "content") {
		errors.push('\'cacheStrategy\' must be any of "metadata", "content".');
	}
	if (
		concurrency !== "off" &&
		concurrency !== "auto" &&
		!isPositiveInteger(concurrency)
	) {
		errors.push(
			'\'concurrency\' must be a positive integer, "auto", or "off".',
		);
	}
	if (!isNonEmptyString(cwd) || !path.isAbsolute(cwd)) {
		errors.push("'cwd' must be an absolute path.");
	}
	if (typeof errorOnUnmatchedPattern !== "boolean") {
		errors.push("'errorOnUnmatchedPattern' must be a boolean.");
	}
	if (typeof fix !== "boolean" && typeof fix !== "function") {
		errors.push("'fix' must be a boolean or a function.");
	}
	if (fixTypes !== null && !isFixTypeArray(fixTypes)) {
		errors.push(
			'\'fixTypes\' must be an array of any of "directive", "problem", "suggestion", and "layout".',
		);
	}
	if (!isEmptyArrayOrArrayOfNonEmptyString(flags)) {
		errors.push("'flags' must be an array of non-empty strings.");
	}
	if (typeof globInputPaths !== "boolean") {
		errors.push("'globInputPaths' must be a boolean.");
	}
	if (typeof ignore !== "boolean") {
		errors.push("'ignore' must be a boolean.");
	}
	if (
		!isEmptyArrayOrArrayOfNonEmptyString(ignorePatterns) &&
		ignorePatterns !== null
	) {
		errors.push(
			"'ignorePatterns' must be an array of non-empty strings or null.",
		);
	}
	if (typeof overrideConfig !== "object") {
		errors.push("'overrideConfig' must be an object or null.");
	}
	if (
		!isNonEmptyString(overrideConfigFile) &&
		overrideConfigFile !== null &&
		overrideConfigFile !== true
	) {
		errors.push(
			"'overrideConfigFile' must be a non-empty string, null, or true.",
		);
	}
	if (typeof passOnNoPatterns !== "boolean") {
		errors.push("'passOnNoPatterns' must be a boolean.");
	}
	if (typeof plugins !== "object") {
		errors.push("'plugins' must be an object or null.");
	} else if (plugins !== null && Object.keys(plugins).includes("")) {
		errors.push("'plugins' must not include an empty string.");
	}
	if (Array.isArray(plugins)) {
		errors.push(
			"'plugins' doesn't add plugins to configuration to load. Please use the 'overrideConfig.plugins' option instead.",
		);
	}
	if (typeof stats !== "boolean") {
		errors.push("'stats' must be a boolean.");
	}
	if (typeof warnIgnored !== "boolean") {
		errors.push("'warnIgnored' must be a boolean.");
	}
	if (typeof ruleFilter !== "function") {
		errors.push("'ruleFilter' must be a function.");
	}
	if (errors.length > 0) {
		throw new ESLintInvalidOptionsError(errors);
	}

	return {
		allowInlineConfig,
		baseConfig,
		cache,
		cacheLocation,
		cacheStrategy,
		concurrency,

		// when overrideConfigFile is true that means don't do config file lookup
		configFile: overrideConfigFile === true ? false : overrideConfigFile,
		overrideConfig,
		cwd: path.normalize(cwd),
		errorOnUnmatchedPattern,
		fix,
		fixTypes,
		flags: [...flags],
		globInputPaths,
		ignore,
		ignorePatterns,
		stats,
		passOnNoPatterns,
		warnIgnored,
		ruleFilter,
	};
}

/**
 * Loads ESLint constructor options from an options module.
 * @param {string} optionsURL The URL string of the options module to load.
 * @returns {Promise<ESLintOptions>} ESLint constructor options.
 */
async function loadOptionsFromModule(optionsURL) {
	return (await import(optionsURL)).default;
}

//-----------------------------------------------------------------------------
// Cache-related helpers
//-----------------------------------------------------------------------------

/**
 * return the cacheFile to be used by eslint, based on whether the provided parameter is
 * a directory or looks like a directory (ends in `path.sep`), in which case the file
 * name will be the `cacheFile/.cache_hashOfCWD`
 *
 * if cacheFile points to a file or looks like a file then in will just use that file
 * @param {string} cacheFile The name of file to be used to store the cache
 * @param {string} cwd Current working directory
 * @param {Object} options The options
 * @param {string} [options.prefix] The prefix to use for the cache file
 * @returns {string} the resolved path to the cache file
 */
function getCacheFile(cacheFile, cwd, { prefix = ".cache_" } = {}) {
	/*
	 * make sure the path separators are normalized for the environment/os
	 * keeping the trailing path separator if present
	 */
	const normalizedCacheFile = path.normalize(cacheFile);

	const resolvedCacheFile = path.resolve(cwd, normalizedCacheFile);
	const looksLikeADirectory = normalizedCacheFile.slice(-1) === path.sep;

	/**
	 * return the name for the cache file in case the provided parameter is a directory
	 * @returns {string} the resolved path to the cacheFile
	 */
	function getCacheFileForDirectory() {
		return path.join(resolvedCacheFile, `${prefix}${hash(cwd)}`);
	}

	let fileStats;

	try {
		fileStats = fs.lstatSync(resolvedCacheFile);
	} catch {
		fileStats = null;
	}

	/*
	 * in case the file exists we need to verify if the provided path
	 * is a directory or a file. If it is a directory we want to create a file
	 * inside that directory
	 */
	if (fileStats) {
		/*
		 * is a directory or is a file, but the original file the user provided
		 * looks like a directory but `path.resolve` removed the `last path.sep`
		 * so we need to still treat this like a directory
		 */
		if (fileStats.isDirectory() || looksLikeADirectory) {
			return getCacheFileForDirectory();
		}

		// is file so just use that file
		return resolvedCacheFile;
	}

	/*
	 * here we known the file or directory doesn't exist,
	 * so we will try to infer if its a directory if it looks like a directory
	 * for the current operating system.
	 */

	// if the last character passed is a path separator we assume is a directory
	if (looksLikeADirectory) {
		return getCacheFileForDirectory();
	}

	return resolvedCacheFile;
}

/**
 * Creates a new lint result cache.
 * @param {ESLintOptions} eslintOptions The processed ESLint options.
 * @param {string} cacheFilePath The path to the cache file.
 * @returns {?LintResultCache} A new lint result cache or `null`.
 */
function createLintResultCache({ cache, cacheStrategy }, cacheFilePath) {
	return cache ? new LintResultCache(cacheFilePath, cacheStrategy) : null;
}

//-----------------------------------------------------------------------------
// Lint helpers
//-----------------------------------------------------------------------------

/**
 * Checks whether a message's rule type should be fixed.
 * @param {LintMessage} message The message to check.
 * @param {CalculatedConfig} config The config for the file that generated the message.
 * @param {string[]} fixTypes An array of fix types to check.
 * @returns {boolean} Whether the message should be fixed.
 */
function shouldMessageBeFixed(message, config, fixTypes) {
	if (!message.ruleId) {
		return fixTypes.has("directive");
	}

	const rule = message.ruleId && config.getRuleDefinition(message.ruleId);

	return Boolean(rule && rule.meta && fixTypes.has(rule.meta.type));
}

/**
 * Creates a fixer function based on the provided fix, fixTypesSet, and config.
 * @param {Function|boolean} fix The original fix option.
 * @param {Set<string>} fixTypesSet A set of fix types to filter messages for fixing.
 * @param {CalculatedConfig} config The config for the file that generated the message.
 * @returns {Function|boolean} The fixer function or the original fix value.
 */
function getFixerForFixTypes(fix, fixTypesSet, config) {
	if (!fix || !fixTypesSet) {
		return fix;
	}

	const originalFix = typeof fix === "function" ? fix : () => true;

	return message =>
		shouldMessageBeFixed(message, config, fixTypesSet) &&
		originalFix(message);
}

/**
 * Processes a source code using ESLint.
 * @param {Object} config The config object.
 * @param {string} config.text The source code to verify.
 * @param {string} config.cwd The path to the current working directory.
 * @param {string|undefined} config.filePath The path to the file of `text`. If this is undefined, it uses `<text>`.
 * @param {FlatConfigArray} config.configs The config.
 * @param {boolean} config.fix If `true` then it does fix.
 * @param {boolean} config.allowInlineConfig If `true` then it uses directive comments.
 * @param {Function} config.ruleFilter A predicate function to filter which rules should be run.
 * @param {boolean} config.stats If `true`, then if reports extra statistics with the lint results.
 * @param {Linter} config.linter The linter instance to verify.
 * @returns {LintResult} The result of linting.
 * @private
 */
function verifyText({
	text,
	cwd,
	filePath: providedFilePath,
	configs,
	fix,
	allowInlineConfig,
	ruleFilter,
	stats,
	linter,
}) {
	const startTime = hrtimeBigint();

	const filePath = providedFilePath || "<text>";

	/*
	 * Verify.
	 * `config.extractConfig(filePath)` requires an absolute path, but `linter`
	 * doesn't know CWD, so it gives `linter` an absolute path always.
	 */
	const filePathToVerify =
		filePath === "<text>" ? getPlaceholderPath(cwd) : filePath;
	const { fixed, messages, output } = linter.verifyAndFix(text, configs, {
		allowInlineConfig,
		filename: filePathToVerify,
		fix,
		ruleFilter,
		stats,

		/**
		 * Check if the linter should adopt a given code block or not.
		 * @param {string} blockFilename The virtual filename of a code block.
		 * @returns {boolean} `true` if the linter should adopt the code block.
		 */
		filterCodeBlock(blockFilename) {
			return configs.getConfig(blockFilename) !== void 0;
		},
	});

	// Tweak and return.
	const result = {
		filePath: filePath === "<text>" ? filePath : path.resolve(filePath),
		messages,
		suppressedMessages: linter.getSuppressedMessages(),
		...calculateStatsPerFile(messages),
	};

	if (fixed) {
		result.output = output;
	}

	if (
		result.errorCount + result.warningCount > 0 &&
		typeof result.output === "undefined"
	) {
		result.source = text;
	}

	if (stats) {
		result.stats = {
			times: linter.getTimes(),
			fixPasses: linter.getFixPassCount(),
		};
	}

	const endTime = hrtimeBigint();
	debug('File "%s" linted in %t', filePath, endTime - startTime);

	return result;
}

/**
 * Lints a single file.
 * @param {string} filePath File path to lint.
 * @param {FlatConfigArray} configs The config array for the file.
 * @param {ESLintOptions} eslintOptions The processed ESLint options.
 * @param {Linter} linter The linter instance to use.
 * @param {?LintResultCache} lintResultCache The result cache or `null`.
 * @param {?{ duration: bigint; }} readFileCounter Used to keep track of the time spent reading files.
 * @param {Retrier} [retrier] Used to retry linting on certain errors.
 * @param {AbortController} [controller] Used to stop linting when an error occurs.
 * @returns {Promise<LintResult>} The lint result.
 */
async function lintFile(
	filePath,
	configs,
	eslintOptions,
	linter,
	lintResultCache,
	readFileCounter,
	retrier,
	controller,
) {
	const config = configs.getConfig(filePath);
	const {
		allowInlineConfig,
		cwd,
		fix,
		fixTypes,
		ruleFilter,
		stats,
		warnIgnored,
	} = eslintOptions;
	const fixTypesSet = fixTypes ? new Set(fixTypes) : null;

	/*
	 * If a filename was entered that cannot be matched
	 * to a config, then notify the user.
	 */
	if (!config) {
		if (warnIgnored) {
			const configStatus = configs.getConfigStatus(filePath);

			return createIgnoreResult(filePath, cwd, configStatus);
		}

		return void 0;
	}

	// Skip if there is cached result.
	if (lintResultCache) {
		const cachedResult = lintResultCache.getCachedLintResults(
			filePath,
			config,
		);

		if (cachedResult) {
			const hadMessages =
				cachedResult.messages && cachedResult.messages.length > 0;

			if (hadMessages && fix) {
				debug(`Reprocessing cached file to allow autofix: ${filePath}`);
			} else {
				debug(`Skipping file since it hasn't changed: ${filePath}`);
				return cachedResult;
			}
		}
	}

	// set up fixer for fixTypes if necessary
	const fixer = getFixerForFixTypes(fix, fixTypesSet, config);

	/**
	 * Reads the file and lints its content.
	 * @returns {Promise<LintResult>} A lint result.
	 */
	async function readAndVerifyFile() {
		const readFileEnterTime = hrtimeBigint();
		const text = await fsp.readFile(filePath, {
			encoding: "utf8",
			signal: controller?.signal,
		});
		const readFileExitTime = hrtimeBigint();
		const readFileDuration = readFileExitTime - readFileEnterTime;
		debug('File "%s" read in %t', filePath, readFileDuration);
		if (readFileCounter) {
			readFileCounter.duration += readFileDuration;
		}

		// fail immediately if an error occurred in another file
		controller?.signal.throwIfAborted();

		// do the linting
		return verifyText({
			text,
			filePath,
			configs,
			cwd,
			fix: fixer,
			allowInlineConfig,
			ruleFilter,
			stats,
			linter,
		});
	}

	// Use the retrier if provided, otherwise just call the function.
	const readAndVerifyFilePromise = retrier
		? retrier.retry(readAndVerifyFile, { signal: controller?.signal })
		: readAndVerifyFile();

	return readAndVerifyFilePromise.catch(error => {
		controller?.abort(error);
		throw error;
	});
}

/**
 * Retrieves flags from the environment variable ESLINT_FLAGS.
 * @param {string[]} flags The flags defined via the API.
 * @returns {string[]} The merged flags to use.
 */
function mergeEnvironmentFlags(flags) {
	if (!process.env.ESLINT_FLAGS) {
		return flags;
	}

	const envFlags = process.env.ESLINT_FLAGS.trim().split(/\s*,\s*/gu);
	return Array.from(new Set([...envFlags, ...flags]));
}

/**
 * Creates a new linter instance.
 * @param {ESLintOptions} eslintOptions The processed ESLint options.
 * @param {WarningService} warningService The warning service to use.
 * @returns {Linter} The linter instance.
 */
function createLinter({ cwd, flags }, warningService) {
	return new Linter({
		configType: "flat",
		cwd,
		flags: mergeEnvironmentFlags(flags),
		warningService,
	});
}

/**
 * Creates default configs with the specified plugins.
 * @param {Record<string, Plugin> | undefined} optionPlugins The plugins specified in the ESLint options.
 * @returns {Config[]} The default configs.
 */
function createDefaultConfigs(optionPlugins) {
	const defaultConfigs = [];

	// Add plugins
	if (optionPlugins) {
		const plugins = {};

		for (const [pluginName, plugin] of Object.entries(optionPlugins)) {
			plugins[getShorthandName(pluginName, "eslint-plugin")] = plugin;
		}

		defaultConfigs.push({ plugins });
	}

	return defaultConfigs;
}

/**
 * Creates a config loader.
 * @param {ESLintOptions} eslintOptions The processed ESLint options.
 * @param {Config[]} defaultConfigs The default configs.
 * @param {Linter} linter The linter instance.
 * @param {WarningService} warningService The warning service to use.
 * @returns {ConfigLoader} The config loader.
 */
function createConfigLoader(
	{
		cwd,
		baseConfig,
		overrideConfig,
		configFile,
		ignore: ignoreEnabled,
		ignorePatterns,
	},
	defaultConfigs,
	linter,
	warningService,
) {
	const configLoaderOptions = {
		cwd,
		baseConfig,
		overrideConfig,
		configFile,
		ignoreEnabled,
		ignorePatterns,
		defaultConfigs,
		hasUnstableNativeNodeJsTSConfigFlag: linter.hasFlag(
			"unstable_native_nodejs_ts_config",
		),
		warningService,
	};

	return linter.hasFlag("v10_config_lookup_from_file")
		? new ConfigLoader(configLoaderOptions)
		: new LegacyConfigLoader(configLoaderOptions);
}

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

module.exports = {
	createDebug,

	findFiles,

	isNonEmptyString,
	isArrayOfNonEmptyString,

	createIgnoreResult,
	isErrorMessage,
	calculateStatsPerFile,
	getPlaceholderPath,

	processOptions,
	loadOptionsFromModule,

	getCacheFile,
	createLintResultCache,

	getFixerForFixTypes,
	verifyText,
	lintFile,
	createLinter,
	createDefaultConfigs,
	createConfigLoader,
};

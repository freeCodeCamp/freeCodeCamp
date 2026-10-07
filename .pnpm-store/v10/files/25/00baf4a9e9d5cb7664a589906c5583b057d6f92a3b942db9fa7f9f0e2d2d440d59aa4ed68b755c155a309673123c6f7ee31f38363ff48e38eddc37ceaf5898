/**
 * @fileoverview Main class using flat config
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { existsSync } = require("node:fs");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { SHARE_ENV, Worker } = require("node:worker_threads");
const { version } = require("../../package.json");
const { defaultConfig } = require("../config/default-config");
const timing = require("../linter/timing");

const {
	createDebug,

	findFiles,
	getCacheFile,

	isNonEmptyString,
	isArrayOfNonEmptyString,

	createIgnoreResult,
	isErrorMessage,
	getPlaceholderPath,

	processOptions,
	loadOptionsFromModule,

	getFixerForFixTypes,
	verifyText,
	lintFile,
	createLinter,
	createLintResultCache,
	createDefaultConfigs,
	createConfigLoader,
} = require("./eslint-helpers");
const { Retrier } = require("@humanwhocodes/retry");
const { ConfigLoader } = require("../config/config-loader");
const { WarningService } = require("../services/warning-service");
const { Config } = require("../config/config.js");
const {
	getShorthandName,
	getNamespaceFromTerm,
	normalizePackageName,
} = require("../shared/naming.js");
const { resolve } = require("../shared/relative-module-resolver.js");

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

// For VSCode IntelliSense
/**
 * @import { Config as CalculatedConfig } from "../config/config.js";
 * @import { FlatConfigArray } from "../config/flat-config-array.js";
 * @import { RuleDefinition, RulesMeta } from "@eslint/core";
 * @import { WorkerLintResults } from "./worker.js";
 */

/** @typedef {import("../types").Linter.Config} Config */
/** @typedef {import("../types").ESLint.DeprecatedRuleUse} DeprecatedRuleInfo */
/** @typedef {import("../types").ESLint.LintResult} LintResult */
/** @typedef {import("../types").ESLint.Plugin} Plugin */
/** @typedef {import("../types").ESLint.ResultsMeta} ResultsMeta */

/**
 * The options with which to configure the ESLint instance.
 * @typedef {Object} ESLintOptions
 * @property {boolean} [allowInlineConfig] Enable or disable inline configuration comments.
 * @property {Config|Array<Config>} [baseConfig] Base config, extended by all configs used with this instance
 * @property {boolean} [cache] Enable result caching.
 * @property {string} [cacheLocation] The cache file to use instead of .eslintcache.
 * @property {"metadata" | "content"} [cacheStrategy] The strategy used to detect changed files.
 * @property {number | "auto" | "off"} [concurrency] Maximum number of linting threads, "auto" to choose automatically, "off" for no multithreading.
 * @property {string} [cwd] The value to use for the current working directory.
 * @property {boolean} [errorOnUnmatchedPattern] If `false` then `ESLint#lintFiles()` doesn't throw even if no target files found. Defaults to `true`.
 * @property {boolean|Function} [fix] Execute in autofix mode. If a function, should return a boolean.
 * @property {string[]} [fixTypes] Array of rule types to apply fixes for.
 * @property {string[]} [flags] Array of feature flags to enable.
 * @property {boolean} [globInputPaths] Set to false to skip glob resolution of input file paths to lint (default: true). If false, each input file paths is assumed to be a non-glob path to an existing file.
 * @property {boolean} [ignore] False disables all ignore patterns except for the default ones.
 * @property {string[]} [ignorePatterns] Ignore file patterns to use in addition to config ignores. These patterns are relative to `cwd`.
 * @property {Config|Array<Config>} [overrideConfig] Override config, overrides all configs used with this instance
 * @property {boolean|string} [overrideConfigFile] Searches for default config file when falsy;
 *      doesn't do any config file lookup when `true`; considered to be a config filename
 *      when a string.
 * @property {boolean} [passOnNoPatterns=false] When set to true, missing patterns cause
 *      the linting operation to short circuit and not report any failures.
 * @property {Record<string,Plugin>} [plugins] An array of plugin implementations.
 * @property {boolean} [stats] True enables added statistics on lint results.
 * @property {boolean} [warnIgnored] Show warnings when the file list includes ignored files
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const hrtimeBigint = process.hrtime.bigint;

const debug = createDebug("eslint:eslint");
const privateMembers = new WeakMap();
const removedFormatters = new Set([
	"checkstyle",
	"codeframe",
	"compact",
	"jslint-xml",
	"junit",
	"table",
	"tap",
	"unix",
	"visualstudio",
]);
const fileRetryCodes = new Set(["ENFILE", "EMFILE"]);

/**
 * Create rulesMeta object.
 * @param {Map<string, RuleDefinition>} rules a map of rules from which to generate the object.
 * @returns {Record<string, RulesMeta>} metadata for all enabled rules.
 */
function createRulesMeta(rules) {
	return Array.from(rules).reduce((retVal, [id, rule]) => {
		retVal[id] = rule.meta;
		return retVal;
	}, {});
}

/** @type {WeakMap<CalculatedConfig, DeprecatedRuleInfo[]>} */
const usedDeprecatedRulesCache = new WeakMap();

/**
 * Create used deprecated rule list.
 * @param {ESLint} eslint The ESLint instance.
 * @param {string} maybeFilePath The absolute path to a lint target file or `"<text>"`.
 * @returns {DeprecatedRuleInfo[]} The used deprecated rule list.
 */
function getOrFindUsedDeprecatedRules(eslint, maybeFilePath) {
	const {
		options: { cwd },
		configLoader,
	} = privateMembers.get(eslint);
	const filePath = path.isAbsolute(maybeFilePath)
		? maybeFilePath
		: getPlaceholderPath(cwd);
	const configs = configLoader.getCachedConfigArrayForFile(filePath);
	const config = configs.getConfig(filePath);

	// Most files use the same config, so cache it.
	if (config && !usedDeprecatedRulesCache.has(config)) {
		const retv = [];

		if (config.rules) {
			for (const [ruleId, ruleConf] of Object.entries(config.rules)) {
				if (Config.getRuleNumericSeverity(ruleConf) === 0) {
					continue;
				}
				const rule = config.getRuleDefinition(ruleId);
				const meta = rule && rule.meta;

				if (meta && meta.deprecated) {
					const usesNewFormat = typeof meta.deprecated === "object";

					retv.push({
						ruleId,
						replacedBy: usesNewFormat
							? (meta.deprecated.replacedBy?.map(
									replacement =>
										`${replacement.plugin?.name !== void 0 ? `${getShorthandName(replacement.plugin.name, "eslint-plugin")}/` : ""}${replacement.rule?.name ?? ""}`,
								) ?? [])
							: meta.replacedBy || [],
						info: usesNewFormat ? meta.deprecated : void 0,
					});
				}
			}
		}

		usedDeprecatedRulesCache.set(config, Object.freeze(retv));
	}

	return config ? usedDeprecatedRulesCache.get(config) : Object.freeze([]);
}

/**
 * Processes the linting results generated by a CLIEngine linting report to
 * match the ESLint class's API.
 * @param {ESLint} eslint The ESLint instance.
 * @param {LintResult[]} results The linting results to process.
 * @returns {LintResult[]} The processed linting results.
 */
function processLintReport(eslint, results) {
	const descriptor = {
		configurable: true,
		enumerable: true,
		get() {
			return getOrFindUsedDeprecatedRules(eslint, this.filePath);
		},
	};

	for (const result of results) {
		Object.defineProperty(result, "usedDeprecatedRules", descriptor);
	}

	return results;
}

/**
 * An Array.prototype.sort() compatible compare function to order results by their file path.
 * @param {LintResult} a The first lint result.
 * @param {LintResult} b The second lint result.
 * @returns {number} An integer representing the order in which the two results should occur.
 */
function compareResultsByFilePath(a, b) {
	if (a.filePath < b.filePath) {
		return -1;
	}

	if (a.filePath > b.filePath) {
		return 1;
	}

	return 0;
}

/**
 * Determines which config file to use. This is determined by seeing if an
 * override config file was passed, and if so, using it; otherwise, as long
 * as override config file is not explicitly set to `false`, it will search
 * upwards from the cwd for a file named `eslint.config.js`.
 *
 * This function is used primarily by the `--inspect-config` option. For now,
 * we will maintain the existing behavior, which is to search up from the cwd.
 * @param {ESLintOptions} options The ESLint instance options.
 * @returns {Promise<{configFilePath:string|undefined;basePath:string}>} Location information for
 *      the config file.
 */
async function locateConfigFileToUse({ configFile, cwd }) {
	const configLoader = new ConfigLoader({
		cwd,
		configFile,
	});

	const configFilePath = await configLoader.findConfigFileForPath(
		path.join(cwd, "__placeholder__.js"),
	);

	if (!configFilePath) {
		throw new Error("No ESLint configuration file was found.");
	}

	return {
		configFilePath,
		basePath: configFile ? cwd : path.dirname(configFilePath),
	};
}

/**
 * Creates an error to be thrown when an array of results passed to `getRulesMetaForResults` was not created by the current engine.
 * @param {Error|undefined} cause The original error that led to this symptom error being thrown. Might not always be available.
 * @returns {TypeError} An error object.
 */
function createExtraneousResultsError(cause) {
	return new TypeError(
		"Results object was not created from this ESLint instance.",
		{
			cause,
		},
	);
}

/**
 * Maximum number of files assumed to be best handled by one worker thread.
 * This value is a heuristic estimation that can be adjusted if required.
 */
const AUTO_FILES_PER_WORKER = 50;

/**
 * Calculates the number of worker threads to run for "auto" concurrency depending on the number of
 * files that need to be processed.
 *
 * The number of worker threads is calculated as the number of files that need to be processed
 * (`processableFileCount`) divided by the number of files assumed to be best handled by one worker
 * thread (`AUTO_FILES_PER_WORKER`), rounded up to the next integer.
 * Two adjustments are made to this calculation: first, the number of workers is capped at half the
 * number of available CPU cores (`maxWorkers`); second, a value of 1 is converted to 0.
 * The following table shows the relationship between the number of files to be processed and the
 * number of workers:
 *
 * Files to be processed                                              | Workers
 * -------------------------------------------------------------------|-----------------
 * 0                                                                  | 0
 * 1, 2, …, AUTO_FILES_PER_WORKER                                     | 0 (there's no 1)
 * AUTO_FILES_PER_WORKER + 1, …, AUTO_FILES_PER_WORKER * 2            | 2
 * AUTO_FILES_PER_WORKER * 2 + 1, …, AUTO_FILES_PER_WORKER * 3        | 3
 * ⋯                                                                  | ⋯
 * AUTO_FILES_PER_WORKER * (𝑛 - 1) + 1, …, AUTO_FILES_PER_WORKER * 𝑛  | 𝑛
 * ⋯                                                                  | ⋯
 * AUTO_FILES_PER_WORKER * (maxWorkers - 1) + 1, …                    | maxWorkers
 *
 * The number of files to be processed should be determined by the calling function.
 * @param {number} processableFileCount The number of files that need to be processed.
 * @param {number} maxWorkers The maximum number of workers to run.
 * @returns {number} The number of worker threads to run.
 */
function getWorkerCountFor(processableFileCount, maxWorkers) {
	let workerCount = Math.ceil(processableFileCount / AUTO_FILES_PER_WORKER);
	if (workerCount > maxWorkers) {
		workerCount = maxWorkers;
	}
	if (workerCount <= 1) {
		workerCount = 0;
	}
	return workerCount;
}

/**
 * Returns true if a file has no valid cached results or if it needs to be reprocessed because there are violations that may need fixing.
 * This function will access the filesystem.
 * @param {LintResultCache} lintResultCache The lint result cache.
 * @param {boolean} fix The fix option.
 * @param {string} filePath The file for which to retrieve lint results.
 * @param {Config} config The config of the file.
 * @returns {boolean} True if the file needs to be reprocessed.
 */
function needsReprocessing(lintResultCache, fix, filePath, config) {
	const results = lintResultCache.getValidCachedLintResults(filePath, config);

	// This reflects the reprocessing logic of the `lintFile` helper function.
	return !results || (fix && results.messages && results.messages.length > 0);
}

/**
 * Calculates the number of worker threads to run for "auto" concurrency.
 *
 * The number of worker threads depends on the number files that need to be processed.
 * Typically, this includes all non-ignored files.
 * In a cached run with "metadata" strategy, files with a valid cached result aren't counted.
 * @param {ESLint} eslint ESLint instance.
 * @param {string[]} filePaths File paths to lint.
 * @param {number} maxWorkers The maximum number of workers to run.
 * @returns {number} The number of worker threads to run for "auto" concurrency.
 */
function calculateAutoWorkerCount(eslint, filePaths, maxWorkers) {
	const startTime = hrtimeBigint();
	const {
		configLoader,
		lintResultCache,
		options: { cacheStrategy, fix },
	} = privateMembers.get(eslint);
	/** True if cache is not used or if strategy is "content". */
	const countAllMatched = !lintResultCache || cacheStrategy === "content";

	let processableFileCount = 0;
	let remainingFiles = filePaths.length;

	/** The number of workers if none of the remaining files were to be counted. */
	let lowWorkerCount = 0;

	/*
	 * Rather than counting all files to be processed in advance, we stop iterating as soon as we reach
	 * a point where adding more files doesn't change the number of workers anymore.
	 */
	for (const filePath of filePaths) {
		/** The number of workers if all of the remaining files were to be counted. */
		const highWorkerCount = getWorkerCountFor(
			processableFileCount + remainingFiles,
			maxWorkers,
		);
		if (lowWorkerCount >= highWorkerCount) {
			// The highest possible number of workers has been reached, so stop counting.
			break;
		}
		remainingFiles--;
		const configs = configLoader.getCachedConfigArrayForFile(filePath);
		const config = configs.getConfig(filePath);
		if (!config) {
			// file is ignored
			continue;
		}
		if (
			countAllMatched ||
			needsReprocessing(lintResultCache, fix, filePath, config)
		) {
			processableFileCount++;
			lowWorkerCount = getWorkerCountFor(
				processableFileCount,
				maxWorkers,
			);
		}
	}
	debug(
		"%d file(s) to process counted in %t",
		processableFileCount,
		hrtimeBigint() - startTime,
	);
	return lowWorkerCount;
}

/**
 * Calculates the number of workers to run based on the concurrency setting and the number of files to lint.
 * @param {ESLint} eslint The ESLint instance.
 * @param {string[]} filePaths File paths to lint.
 * @param {{ availableParallelism: () => number }} [os] Node.js `os` module, or a mock for testing.
 * @returns {number} The effective number of worker threads to be started. A value of zero disables multithread linting.
 */
function calculateWorkerCount(
	eslint,
	filePaths,
	{ availableParallelism } = os,
) {
	const { concurrency } = privateMembers.get(eslint).options;
	switch (concurrency) {
		case "off":
			return 0;
		case "auto": {
			const maxWorkers = availableParallelism() >> 1;
			return calculateAutoWorkerCount(eslint, filePaths, maxWorkers);
		}
		default: {
			const workerCount = Math.min(concurrency, filePaths.length);
			return workerCount > 1 ? workerCount : 0;
		}
	}
}

// Used internally. Do not expose.
const disableCloneabilityCheck = Symbol(
	"Do not check for uncloneable options.",
);

/**
 * The smallest net linting ratio that doesn't trigger a poor concurrency warning.
 * The net linting ratio is defined as the net linting duration divided by the thread's total runtime,
 * where the net linting duration is the total linting time minus the time spent on I/O-intensive operations:
 * **Net Linting Ratio** = (**Linting Time** – **I/O Time**) / **Thread Runtime**.
 * - **Linting Time**: Total time spent linting files
 * - **I/O Time**: Portion of linting time spent loading configs and reading files
 * - **Thread Runtime**: End-to-end execution time of the thread
 *
 * This value is a heuristic estimation that can be adjusted if required.
 */
const LOW_NET_LINTING_RATIO = 0.7;

/**
 * Runs worker threads to lint files.
 * @param {string[]} filePaths File paths to lint.
 * @param {number} workerCount The number of worker threads to run.
 * @param {ESLintOptions | string} eslintOptionsOrURL The unprocessed ESLint options or the URL of the options module.
 * @param {() => void} warnOnLowNetLintingRatio A function to call if the net linting ratio is low.
 * @returns {Promise<LintResult[]>} Lint results.
 */
async function runWorkers(
	filePaths,
	workerCount,
	eslintOptionsOrURL,
	warnOnLowNetLintingRatio,
) {
	const fileCount = filePaths.length;
	const results = Array(fileCount);
	const workerURL = pathToFileURL(path.join(__dirname, "./worker.js"));
	const filePathIndexArray = new Uint32Array(
		new SharedArrayBuffer(Uint32Array.BYTES_PER_ELEMENT),
	);
	const abortController = new AbortController();
	const abortSignal = abortController.signal;
	const workerOptions = {
		env: SHARE_ENV,
		workerData: {
			eslintOptionsOrURL,
			filePathIndexArray,
			filePaths,
		},
	};

	let worstNetLintingRatio = 1;

	/**
	 * A promise executor function that starts a worker thread on each invocation.
	 * @param {() => void} resolve_ Called when the worker thread terminates successfully.
	 * @param {(error: Error) => void} reject Called when the worker thread terminates with an error.
	 * @returns {void}
	 */
	function workerExecutor(resolve_, reject) {
		const workerStartTime = hrtimeBigint();
		const worker = new Worker(workerURL, workerOptions);
		worker.once(
			"message",
			(/** @type {WorkerLintResults} */ indexedResults) => {
				const workerDuration = hrtimeBigint() - workerStartTime;

				// The net linting ratio provides an approximate measure of worker thread efficiency, defined as the net linting duration divided by the thread's total runtime.
				const netLintingRatio =
					Number(indexedResults.netLintingDuration) /
					Number(workerDuration);

				worstNetLintingRatio = Math.min(
					worstNetLintingRatio,
					netLintingRatio,
				);

				if (timing.enabled && indexedResults.timings) {
					timing.mergeData(indexedResults.timings);
				}

				for (const result of indexedResults) {
					const { index } = result;
					delete result.index;
					results[index] = result;
				}
				resolve_();
			},
		);
		worker.once("error", error => {
			abortController.abort(error);
			reject(error);
		});
		abortSignal.addEventListener("abort", () => worker.terminate());
	}

	const promises = Array(workerCount);
	for (let index = 0; index < workerCount; ++index) {
		promises[index] = new Promise(workerExecutor);
	}

	try {
		await Promise.all(promises);
	} catch (error) {
		/*
		 * If any worker fails, suppress timing display in the main thread
		 * to avoid printing partial or misleading timing output.
		 */
		timing.disableDisplay();
		throw error;
	}

	if (worstNetLintingRatio < LOW_NET_LINTING_RATIO) {
		warnOnLowNetLintingRatio();
	}

	return results;
}

/**
 * Lint files in multithread mode.
 * @param {ESLint} eslint ESLint instance.
 * @param {string[]} filePaths File paths to lint.
 * @param {number} workerCount The number of worker threads to run.
 * @param {ESLintOptions | string} eslintOptionsOrURL The unprocessed ESLint options or the URL of the options module.
 * @param {() => void} warnOnLowNetLintingRatio A function to call if the net linting ratio is low.
 * @returns {Promise<LintResult[]>} Lint results.
 */
async function lintFilesWithMultithreading(
	eslint,
	filePaths,
	workerCount,
	eslintOptionsOrURL,
	warnOnLowNetLintingRatio,
) {
	const { configLoader, lintResultCache } = privateMembers.get(eslint);

	const results = await runWorkers(
		filePaths,
		workerCount,
		eslintOptionsOrURL,
		warnOnLowNetLintingRatio,
	);
	// Persist the cache to disk.
	if (lintResultCache) {
		results.forEach((result, index) => {
			if (result) {
				const filePath = filePaths[index];
				const configs =
					configLoader.getCachedConfigArrayForFile(filePath);
				const config = configs.getConfig(filePath);

				if (config) {
					/*
					 * Store the lint result in the LintResultCache.
					 * NOTE: The LintResultCache will remove the file source and any
					 * other properties that are difficult to serialize, and will
					 * hydrate those properties back in on future lint runs.
					 */
					lintResultCache.setCachedLintResults(
						filePath,
						config,
						result,
					);
				}
			}
		});
	}
	return results;
}

/**
 * Lint files in single-thread mode.
 * @param {ESLint} eslint ESLint instance.
 * @param {string[]} filePaths File paths to lint.
 * @returns {Promise<LintResult[]>} Lint results.
 */
async function lintFilesWithoutMultithreading(eslint, filePaths) {
	const {
		configLoader,
		linter,
		lintResultCache,
		options: eslintOptions,
	} = privateMembers.get(eslint);

	const controller = new AbortController();
	const retrier = new Retrier(error => fileRetryCodes.has(error.code), {
		concurrency: 100,
	});

	/*
	 * Because we need to process multiple files, including reading from disk,
	 * it is most efficient to start by reading each file via promises so that
	 * they can be done in parallel. Then, we can lint the returned text. This
	 * ensures we are waiting the minimum amount of time in between lints.
	 */
	const results = await Promise.all(
		filePaths.map(async filePath => {
			const configs = configLoader.getCachedConfigArrayForFile(filePath);
			const config = configs.getConfig(filePath);

			const result = await lintFile(
				filePath,
				configs,
				eslintOptions,
				linter,
				lintResultCache,
				null,
				retrier,
				controller,
			);

			if (config) {
				/*
				 * Store the lint result in the LintResultCache.
				 * NOTE: The LintResultCache will remove the file source and any
				 * other properties that are difficult to serialize, and will
				 * hydrate those properties back in on future lint runs.
				 */
				lintResultCache?.setCachedLintResults(filePath, config, result);
			}

			return result;
		}),
	);
	return results;
}

/**
 * Throws an error if the given options are not cloneable.
 * @param {ESLintOptions} options The options to check.
 * @returns {void}
 * @throws {TypeError} If the options are not cloneable.
 */
function validateOptionCloneability(options) {
	try {
		structuredClone(options);
		return;
	} catch {
		// continue
	}
	const uncloneableOptionKeys = Object.keys(options)
		.filter(key => {
			try {
				structuredClone(options[key]);
			} catch {
				return true;
			}
			return false;
		})
		.sort();
	const error = new TypeError(
		`The ${uncloneableOptionKeys.length === 1 ? "option" : "options"} ${new Intl.ListFormat("en-US").format(uncloneableOptionKeys.map(key => `"${key}"`))} cannot be cloned. When concurrency is enabled, all options must be cloneable values (JSON values). Remove uncloneable options or use an options module.`,
	);
	error.code = "ESLINT_UNCLONEABLE_OPTIONS";
	throw error;
}

//-----------------------------------------------------------------------------
// Main API
//-----------------------------------------------------------------------------

/**
 * Primary Node.js API for ESLint.
 */
class ESLint {
	/**
	 * The type of configuration used by this class.
	 * @type {string}
	 */
	static configType = "flat";

	/**
	 * The loader to use for finding config files.
	 * @type {ConfigLoader}
	 */
	#configLoader;

	/**
	 * The unprocessed options or the URL of the options module. Only set when concurrency is enabled.
	 * @type {ESLintOptions | string | undefined}
	 */
	#optionsOrURL;

	/**
	 * Creates a new instance of the main ESLint API.
	 * @param {ESLintOptions} options The options for this instance.
	 */
	constructor(options = {}) {
		const processedOptions = processOptions(options);
		if (
			!options[disableCloneabilityCheck] &&
			processedOptions.concurrency !== "off"
		) {
			validateOptionCloneability(options);

			// Save the unprocessed options in an instance field to pass to worker threads in `lintFiles()`.
			this.#optionsOrURL = options;
		}
		const warningService = new WarningService();
		const linter = createLinter(processedOptions, warningService);

		const cacheFilePath = getCacheFile(
			processedOptions.cacheLocation,
			processedOptions.cwd,
		);

		const lintResultCache = createLintResultCache(
			processedOptions,
			cacheFilePath,
		);
		const defaultConfigs = createDefaultConfigs(options.plugins);

		this.#configLoader = createConfigLoader(
			processedOptions,
			defaultConfigs,
			linter,
			warningService,
		);

		debug(`Using config loader ${this.#configLoader.constructor.name}`);

		privateMembers.set(this, {
			options: processedOptions,
			linter,
			cacheFilePath,
			lintResultCache,
			defaultConfigs,
			configs: null,
			configLoader: this.#configLoader,
			warningService,
		});

		// Check for the .eslintignore file, and warn if it's present.
		if (existsSync(path.resolve(processedOptions.cwd, ".eslintignore"))) {
			warningService.emitESLintIgnoreWarning();
		}
	}

	/**
	 * The version text.
	 * @type {string}
	 */
	static get version() {
		return version;
	}

	/**
	 * The default configuration that ESLint uses internally. This is provided for tooling that wants to calculate configurations using the same defaults as ESLint.
	 * Keep in mind that the default configuration may change from version to version, so you shouldn't rely on any particular keys or values to be present.
	 * @type {FlatConfigArray}
	 */
	static get defaultConfig() {
		return defaultConfig;
	}

	/**
	 * Outputs fixes from the given results to files.
	 * @param {LintResult[]} results The lint results.
	 * @returns {Promise<void>} Returns a promise that is used to track side effects.
	 */
	static async outputFixes(results) {
		if (!Array.isArray(results)) {
			throw new Error("'results' must be an array");
		}

		const retrier = new Retrier(error => fileRetryCodes.has(error.code), {
			concurrency: 100,
		});

		await Promise.all(
			results
				.filter(result => {
					if (typeof result !== "object" || result === null) {
						throw new Error("'results' must include only objects");
					}
					return (
						typeof result.output === "string" &&
						path.isAbsolute(result.filePath)
					);
				})
				.map(r =>
					retrier.retry(() => fs.writeFile(r.filePath, r.output)),
				),
		);
	}

	/**
	 * Returns results that only contains errors.
	 * @param {LintResult[]} results The results to filter.
	 * @returns {LintResult[]} The filtered results.
	 */
	static getErrorResults(results) {
		const filtered = [];

		results.forEach(result => {
			const filteredMessages = result.messages.filter(isErrorMessage);
			const filteredSuppressedMessages =
				result.suppressedMessages.filter(isErrorMessage);

			if (filteredMessages.length > 0) {
				filtered.push({
					...result,
					messages: filteredMessages,
					suppressedMessages: filteredSuppressedMessages,
					errorCount: filteredMessages.length,
					warningCount: 0,
					fixableErrorCount: result.fixableErrorCount,
					fixableWarningCount: 0,
				});
			}
		});

		return filtered;
	}

	/**
	 * Creates a new ESLint instance using options loaded from a module.
	 * @param {URL} optionsURL The URL of the options module.
	 * @returns {ESLint} The new ESLint instance.
	 */
	static async fromOptionsModule(optionsURL) {
		if (!(optionsURL instanceof URL)) {
			throw new TypeError("Argument must be a URL object");
		}
		const optionsURLString = optionsURL.href;
		const loadedOptions = await loadOptionsFromModule(optionsURLString);
		const options = { ...loadedOptions, [disableCloneabilityCheck]: true };
		const eslint = new ESLint(options);

		if (options.concurrency !== "off") {
			// Save the options module URL in an instance field to pass to worker threads in `lintFiles()`.
			eslint.#optionsOrURL = optionsURLString;
		}
		return eslint;
	}

	/**
	 * Returns meta objects for each rule represented in the lint results.
	 * @param {LintResult[]} results The results to fetch rules meta for.
	 * @returns {Record<string, RulesMeta>} A mapping of ruleIds to rule meta objects.
	 * @throws {TypeError} When the results object wasn't created from this ESLint instance.
	 * @throws {TypeError} When a plugin or rule is missing.
	 */
	getRulesMetaForResults(results) {
		// short-circuit simple case
		if (results.length === 0) {
			return {};
		}

		const resultRules = new Map();
		const {
			configLoader,
			options: { cwd },
		} = privateMembers.get(this);

		for (const result of results) {
			/*
			 * Normalize filename for <text>.
			 */
			const filePath =
				result.filePath === "<text>"
					? getPlaceholderPath(cwd)
					: result.filePath;
			const allMessages = result.messages.concat(
				result.suppressedMessages,
			);

			for (const { ruleId } of allMessages) {
				if (!ruleId) {
					continue;
				}

				/*
				 * All of the plugin and rule information is contained within the
				 * calculated config for the given file.
				 */
				let configs;

				try {
					configs =
						configLoader.getCachedConfigArrayForFile(filePath);
				} catch (err) {
					throw createExtraneousResultsError(err);
				}

				const config = configs.getConfig(filePath);

				if (!config) {
					throw createExtraneousResultsError();
				}
				const rule = config.getRuleDefinition(ruleId);

				// ignore unknown rules
				if (rule) {
					resultRules.set(ruleId, rule);
				}
			}
		}

		return createRulesMeta(resultRules);
	}

	/**
	 * Indicates if the given feature flag is enabled for this instance.
	 * @param {string} flag The feature flag to check.
	 * @returns {boolean} `true` if the feature flag is enabled, `false` if not.
	 */
	hasFlag(flag) {
		// note: Linter does validation of the flags
		return privateMembers.get(this).linter.hasFlag(flag);
	}

	/**
	 * Executes the current configuration on an array of file and directory names.
	 * @param {string|string[]} patterns An array of file and directory names.
	 * @returns {Promise<LintResult[]>} The results of linting the file patterns given.
	 */
	async lintFiles(patterns) {
		let normalizedPatterns = patterns;
		const {
			cacheFilePath,
			lintResultCache,
			options: eslintOptions,
			warningService,
		} = privateMembers.get(this);

		/*
		 * Special cases:
		 * 1. `patterns` is an empty string
		 * 2. `patterns` is an empty array
		 *
		 * In both cases, we use the cwd as the directory to lint.
		 */
		if (
			patterns === "" ||
			(Array.isArray(patterns) && patterns.length === 0)
		) {
			/*
			 * Special case: If `passOnNoPatterns` is true, then we just exit
			 * without doing any work.
			 */
			if (eslintOptions.passOnNoPatterns) {
				return [];
			}

			normalizedPatterns = ["."];
		} else {
			if (
				!isNonEmptyString(patterns) &&
				!isArrayOfNonEmptyString(patterns)
			) {
				throw new Error(
					"'patterns' must be a non-empty string or an array of non-empty strings",
				);
			}

			if (typeof patterns === "string") {
				normalizedPatterns = [patterns];
			}
		}

		debug(`Using file patterns: ${normalizedPatterns}`);

		const { concurrency, cwd, globInputPaths, errorOnUnmatchedPattern } =
			eslintOptions;

		// Delete cache file; should this be done here?
		if (!lintResultCache && cacheFilePath) {
			debug(`Deleting cache file at ${cacheFilePath}`);

			try {
				if (existsSync(cacheFilePath)) {
					await fs.unlink(cacheFilePath);
				}
			} catch (error) {
				if (existsSync(cacheFilePath)) {
					throw error;
				}
			}
		}

		const startTime = hrtimeBigint();
		const filePaths = await findFiles({
			patterns: normalizedPatterns,
			cwd,
			globInputPaths,
			configLoader: this.#configLoader,
			errorOnUnmatchedPattern,
		});
		debug(
			"%d file(s) found in %t",
			filePaths.length,
			hrtimeBigint() - startTime,
		);

		/** @type {LintResult[]} */
		let results;

		// The value of `module.exports.calculateWorkerCount` can be overridden in tests.
		const workerCount = module.exports.calculateWorkerCount(
			this,
			filePaths,
		);
		if (workerCount) {
			debug(`Linting using ${workerCount} worker thread(s).`);
			let poorConcurrencyNotice;
			if (workerCount <= 2) {
				poorConcurrencyNotice = "disable concurrency";
			} else {
				if (concurrency === "auto") {
					poorConcurrencyNotice =
						"disable concurrency or use a numeric concurrency setting";
				} else {
					poorConcurrencyNotice = "reduce or disable concurrency";
				}
			}
			results = await lintFilesWithMultithreading(
				this,
				filePaths,
				workerCount,
				this.#optionsOrURL,
				() =>
					warningService.emitPoorConcurrencyWarning(
						poorConcurrencyNotice,
					),
			);
		} else {
			debug(`Linting in single-thread mode.`);
			results = await lintFilesWithoutMultithreading(this, filePaths);
		}

		// Persist the cache to disk.
		if (lintResultCache) {
			lintResultCache.reconcile();
		}

		const finalResults = results.filter(result => !!result);

		return processLintReport(this, finalResults);
	}

	/**
	 * Executes the current configuration on text.
	 * @param {string} code A string of JavaScript code to lint.
	 * @param {Object} [options] The options.
	 * @param {string} [options.filePath] The path to the file of the source code.
	 * @param {boolean} [options.warnIgnored] When set to true, warn if given filePath is an ignored path.
	 * @returns {Promise<LintResult[]>} The results of linting the string of code given.
	 */
	async lintText(code, options = {}) {
		// Parameter validation

		if (typeof code !== "string") {
			throw new Error("'code' must be a string");
		}

		if (typeof options !== "object") {
			throw new Error("'options' must be an object, null, or undefined");
		}

		// Options validation

		const { filePath, warnIgnored, ...unknownOptions } = options || {};

		const unknownOptionKeys = Object.keys(unknownOptions);

		if (unknownOptionKeys.length > 0) {
			throw new Error(
				`'options' must not include the unknown option(s): ${unknownOptionKeys.join(", ")}`,
			);
		}

		if (filePath !== void 0 && !isNonEmptyString(filePath)) {
			throw new Error(
				"'options.filePath' must be a non-empty string or undefined",
			);
		}

		if (
			typeof warnIgnored !== "boolean" &&
			typeof warnIgnored !== "undefined"
		) {
			throw new Error(
				"'options.warnIgnored' must be a boolean or undefined",
			);
		}

		// Now we can get down to linting

		const { linter, options: eslintOptions } = privateMembers.get(this);
		const {
			allowInlineConfig,
			cwd,
			fix,
			fixTypes,
			warnIgnored: constructorWarnIgnored,
			ruleFilter,
			stats,
		} = eslintOptions;
		const results = [];
		const startTime = hrtimeBigint();
		const fixTypesSet = fixTypes ? new Set(fixTypes) : null;
		const resolvedFilename = path.resolve(
			cwd,
			filePath || "__placeholder__.js",
		);
		const configs =
			await this.#configLoader.loadConfigArrayForFile(resolvedFilename);
		const configStatus =
			configs?.getConfigStatus(resolvedFilename) ?? "unconfigured";

		// Clear the last used config arrays.
		if (resolvedFilename && configStatus !== "matched") {
			const shouldWarnIgnored =
				typeof warnIgnored === "boolean"
					? warnIgnored
					: constructorWarnIgnored;

			if (shouldWarnIgnored) {
				results.push(
					createIgnoreResult(resolvedFilename, cwd, configStatus),
				);
			}
		} else {
			const config = configs.getConfig(resolvedFilename);
			const fixer = getFixerForFixTypes(fix, fixTypesSet, config);

			// Do lint.
			results.push(
				verifyText({
					text: code,
					filePath: resolvedFilename.endsWith("__placeholder__.js")
						? "<text>"
						: resolvedFilename,
					configs,
					cwd,
					fix: fixer,
					allowInlineConfig,
					ruleFilter,
					stats,
					linter,
				}),
			);
		}

		debug("Linting complete in %t", hrtimeBigint() - startTime);

		return processLintReport(this, results);
	}

	/**
	 * Returns the formatter representing the given formatter name.
	 * @param {string} [name] The name of the formatter to load.
	 * The following values are allowed:
	 * - `undefined` ... Load `stylish` builtin formatter.
	 * - A builtin formatter name ... Load the builtin formatter.
	 * - A third-party formatter name:
	 *   - `foo` → `eslint-formatter-foo`
	 *   - `@foo` → `@foo/eslint-formatter`
	 *   - `@foo/bar` → `@foo/eslint-formatter-bar`
	 * - A file path ... Load the file.
	 * @returns {Promise<Formatter>} A promise resolving to the formatter object.
	 * This promise will be rejected if the given formatter was not found or not
	 * a function.
	 */
	async loadFormatter(name = "stylish") {
		if (typeof name !== "string") {
			throw new Error("'name' must be a string");
		}

		// replace \ with / for Windows compatibility
		const normalizedFormatName = name.replace(/\\/gu, "/");
		const namespace = getNamespaceFromTerm(normalizedFormatName);

		// grab our options
		const { cwd } = privateMembers.get(this).options;

		let formatterPath;

		// if there's a slash, then it's a file (TODO: this check seems dubious for scoped npm packages)
		if (!namespace && normalizedFormatName.includes("/")) {
			formatterPath = path.resolve(cwd, normalizedFormatName);
		} else {
			try {
				const npmFormat = normalizePackageName(
					normalizedFormatName,
					"eslint-formatter",
				);

				// TODO: This is pretty dirty...would be nice to clean up at some point.
				formatterPath = resolve(npmFormat, getPlaceholderPath(cwd));
			} catch {
				formatterPath = path.resolve(
					__dirname,
					"../",
					"cli-engine",
					"formatters",
					`${normalizedFormatName}.js`,
				);
			}
		}

		let formatter;

		try {
			formatter = (await import(pathToFileURL(formatterPath))).default;
		} catch (ex) {
			// check for formatters that have been removed
			if (removedFormatters.has(name)) {
				ex.message = `The ${name} formatter is no longer part of core ESLint. Install it manually with \`npm install -D eslint-formatter-${name}\``;
			} else {
				ex.message = `There was a problem loading formatter: ${formatterPath}\nError: ${ex.message}`;
			}

			throw ex;
		}

		if (typeof formatter !== "function") {
			throw new TypeError(
				`Formatter must be a function, but got a ${typeof formatter}.`,
			);
		}

		const eslint = this;

		return {
			/**
			 * The main formatter method.
			 * @param {LintResult[]} results The lint results to format.
			 * @param {ResultsMeta} resultsMeta Warning count and max threshold.
			 * @returns {string} The formatted lint results.
			 */
			format(results, resultsMeta) {
				let rulesMeta = null;

				results.sort(compareResultsByFilePath);

				return formatter(results, {
					...resultsMeta,
					cwd,
					get rulesMeta() {
						if (!rulesMeta) {
							rulesMeta = eslint.getRulesMetaForResults(results);
						}

						return rulesMeta;
					},
				});
			},
		};
	}

	/**
	 * Returns a configuration object for the given file based on the CLI options.
	 * This is the same logic used by the ESLint CLI executable to determine
	 * configuration for each file it processes.
	 * @param {string} filePath The path of the file to retrieve a config object for.
	 * @returns {Promise<CalculatedConfig|undefined>} A configuration object for the file
	 *      or `undefined` if there is no configuration data for the object.
	 */
	async calculateConfigForFile(filePath) {
		if (!isNonEmptyString(filePath)) {
			throw new Error("'filePath' must be a non-empty string");
		}
		const options = privateMembers.get(this).options;
		const absolutePath = path.resolve(options.cwd, filePath);
		const configs =
			await this.#configLoader.loadConfigArrayForFile(absolutePath);

		if (!configs) {
			const error = new Error("Could not find config file.");

			error.messageTemplate = "config-file-missing";
			throw error;
		}

		return configs.getConfig(absolutePath);
	}

	/**
	 * Finds the config file being used by this instance based on the options
	 * passed to the constructor.
	 * @param {string} [filePath] The path of the file to find the config file for.
	 * @returns {Promise<string|undefined>} The path to the config file being used or
	 *      `undefined` if no config file is being used.
	 */
	async findConfigFile(filePath) {
		const options = privateMembers.get(this).options;

		/*
		 * Because the new config lookup scheme skips the current directory
		 * and looks into the parent directories, we need to use a placeholder
		 * directory to ensure the file in cwd is checked.
		 */
		const fakeCwd = path.join(options.cwd, "__placeholder__");

		return this.#configLoader
			.findConfigFileForPath(filePath ?? fakeCwd)
			.catch(() => void 0);
	}

	/**
	 * Checks if a given path is ignored by ESLint.
	 * @param {string} filePath The path of the file to check.
	 * @returns {Promise<boolean>} Whether or not the given path is ignored.
	 */
	async isPathIgnored(filePath) {
		const config = await this.calculateConfigForFile(filePath);

		return config === void 0;
	}
}

/**
 * Returns whether flat config should be used.
 * @returns {Promise<boolean>} Whether flat config should be used.
 */
async function shouldUseFlatConfig() {
	return process.env.ESLINT_USE_FLAT_CONFIG !== "false";
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
	ESLint,
	shouldUseFlatConfig,
	locateConfigFileToUse,
	calculateWorkerCount,
};

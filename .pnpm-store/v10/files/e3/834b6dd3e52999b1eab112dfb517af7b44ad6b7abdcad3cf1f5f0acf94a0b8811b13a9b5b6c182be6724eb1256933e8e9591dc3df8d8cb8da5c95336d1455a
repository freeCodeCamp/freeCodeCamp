/**
 * @fileoverview Main API Class
 * @author Kai Cataldo
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const path = require("node:path");
const fs = require("node:fs");
const { promisify } = require("node:util");
const {
	CLIEngine,
	getCLIEngineInternalSlots,
} = require("../cli-engine/cli-engine");
const BuiltinRules = require("../rules");
const {
	Legacy: {
		ConfigOps: { getRuleSeverity },
	},
} = require("@eslint/eslintrc");
const { version } = require("../../package.json");

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/** @typedef {import("../cli-engine/cli-engine").LintReport} CLIEngineLintReport */
/** @typedef {import("../types").ESLint.ConfigData} ConfigData */
/** @typedef {import("../types").ESLint.DeprecatedRuleUse} DeprecatedRuleInfo */
/** @typedef {import("../types").Linter.LintMessage} LintMessage */
/** @typedef {import("../types").ESLint.LintResult} LintResult */
/** @typedef {import("../types").ESLint.Plugin} Plugin */
/** @typedef {import("../types").ESLint.ResultsMeta} ResultsMeta */
/** @typedef {import("../types").Rule.RuleModule} Rule */
/** @typedef {import("../types").Linter.SuppressedLintMessage} SuppressedLintMessage */

/**
 * The main formatter object.
 * @typedef LoadedFormatter
 * @property {(results: LintResult[], resultsMeta: ResultsMeta) => string | Promise<string>} format format function.
 */

/**
 * The options with which to configure the LegacyESLint instance.
 * @typedef {Object} LegacyESLintOptions
 * @property {boolean} [allowInlineConfig] Enable or disable inline configuration comments.
 * @property {ConfigData} [baseConfig] Base config object, extended by all configs used with this instance
 * @property {boolean} [cache] Enable result caching.
 * @property {string} [cacheLocation] The cache file to use instead of .eslintcache.
 * @property {"metadata" | "content"} [cacheStrategy] The strategy used to detect changed files.
 * @property {string} [cwd] The value to use for the current working directory.
 * @property {boolean} [errorOnUnmatchedPattern] If `false` then `ESLint#lintFiles()` doesn't throw even if no target files found. Defaults to `true`.
 * @property {string[]} [extensions] An array of file extensions to check.
 * @property {boolean|Function} [fix] Execute in autofix mode. If a function, should return a boolean.
 * @property {string[]} [fixTypes] Array of rule types to apply fixes for.
 * @property {boolean} [globInputPaths] Set to false to skip glob resolution of input file paths to lint (default: true). If false, each input file paths is assumed to be a non-glob path to an existing file.
 * @property {boolean} [ignore] False disables use of .eslintignore.
 * @property {string} [ignorePath] The ignore file to use instead of .eslintignore.
 * @property {ConfigData} [overrideConfig] Override config object, overrides all configs used with this instance
 * @property {string} [overrideConfigFile] The configuration file to use.
 * @property {Record<string,Plugin>|null} [plugins] Preloaded plugins. This is a map-like object, keys are plugin IDs and each value is implementation.
 * @property {"error" | "warn" | "off"} [reportUnusedDisableDirectives] the severity to report unused eslint-disable directives.
 * @property {string} [resolvePluginsRelativeTo] The folder where plugins should be resolved from, defaulting to the CWD.
 * @property {string[]} [rulePaths] An array of directories to load custom rules from.
 * @property {boolean} [useEslintrc] False disables looking for .eslintrc.* files.
 * @property {boolean} [passOnNoPatterns=false] When set to true, missing patterns cause
 *      the linting operation to short circuit and not report any failures.
 */

/**
 * A rules metadata object.
 * @typedef {Object} RulesMeta
 * @property {string} id The plugin ID.
 * @property {Object} definition The plugin definition.
 */

/**
 * Private members for the `ESLint` instance.
 * @typedef {Object} ESLintPrivateMembers
 * @property {CLIEngine} cliEngine The wrapped CLIEngine instance.
 * @property {LegacyESLintOptions} options The options used to instantiate the ESLint instance.
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const writeFile = promisify(fs.writeFile);

/**
 * The map with which to store private class members.
 * @type {WeakMap<ESLint, ESLintPrivateMembers>}
 */
const privateMembersMap = new WeakMap();

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
		Array.isArray(value) && value.length && value.every(isNonEmptyString)
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
 * Check if a given value is a valid fix type or not.
 * @param {any} value The value to check.
 * @returns {boolean} `true` if `value` is valid fix type.
 */
function isFixType(value) {
	return (
		value === "directive" ||
		value === "problem" ||
		value === "suggestion" ||
		value === "layout"
	);
}

/**
 * Check if a given value is an array of fix types or not.
 * @param {any} value The value to check.
 * @returns {boolean} `true` if `value` is an array of fix types.
 */
function isFixTypeArray(value) {
	return Array.isArray(value) && value.every(isFixType);
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
 * @param {LegacyESLintOptions} options The options to process.
 * @throws {ESLintInvalidOptionsError} If of any of a variety of type errors.
 * @returns {LegacyESLintOptions} The normalized options.
 */
function processOptions({
	allowInlineConfig = true, // ← we cannot use `overrideConfig.noInlineConfig` instead because `allowInlineConfig` has side-effect that suppress warnings that show inline configs are ignored.
	baseConfig = null,
	cache = false,
	cacheLocation = ".eslintcache",
	cacheStrategy = "metadata",
	cwd = process.cwd(),
	errorOnUnmatchedPattern = true,
	extensions = null, // ← should be null by default because if it's an array then it suppresses RFC20 feature.
	fix = false,
	fixTypes = null, // ← should be null by default because if it's an array then it suppresses rules that don't have the `meta.type` property.
	flags /* eslint-disable-line no-unused-vars -- leaving for compatibility with ESLint#hasFlag */,
	globInputPaths = true,
	ignore = true,
	ignorePath = null, // ← should be null by default because if it's a string then it may throw ENOENT.
	overrideConfig = null,
	overrideConfigFile = null,
	plugins = {},
	reportUnusedDisableDirectives = null, // ← should be null by default because if it's a string then it overrides the 'reportUnusedDisableDirectives' setting in config files. And we cannot use `overrideConfig.reportUnusedDisableDirectives` instead because we cannot configure the `error` severity with that.
	resolvePluginsRelativeTo = null, // ← should be null by default because if it's a string then it suppresses RFC47 feature.
	rulePaths = [],
	useEslintrc = true,
	passOnNoPatterns = false,
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
			errors.push(
				"'envs' has been removed. Please use the 'overrideConfig.env' option instead.",
			);
		}
		if (unknownOptionKeys.includes("globals")) {
			errors.push(
				"'globals' has been removed. Please use the 'overrideConfig.globals' option instead.",
			);
		}
		if (unknownOptionKeys.includes("ignorePattern")) {
			errors.push(
				"'ignorePattern' has been removed. Please use the 'overrideConfig.ignorePatterns' option instead.",
			);
		}
		if (unknownOptionKeys.includes("parser")) {
			errors.push(
				"'parser' has been removed. Please use the 'overrideConfig.parser' option instead.",
			);
		}
		if (unknownOptionKeys.includes("parserOptions")) {
			errors.push(
				"'parserOptions' has been removed. Please use the 'overrideConfig.parserOptions' option instead.",
			);
		}
		if (unknownOptionKeys.includes("rules")) {
			errors.push(
				"'rules' has been removed. Please use the 'overrideConfig.rules' option instead.",
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
	if (!isNonEmptyString(cwd) || !path.isAbsolute(cwd)) {
		errors.push("'cwd' must be an absolute path.");
	}
	if (typeof errorOnUnmatchedPattern !== "boolean") {
		errors.push("'errorOnUnmatchedPattern' must be a boolean.");
	}
	if (
		!isEmptyArrayOrArrayOfNonEmptyString(extensions) &&
		extensions !== null
	) {
		errors.push(
			"'extensions' must be an array of non-empty strings or null.",
		);
	}
	if (typeof fix !== "boolean" && typeof fix !== "function") {
		errors.push("'fix' must be a boolean or a function.");
	}
	if (fixTypes !== null && !isFixTypeArray(fixTypes)) {
		errors.push(
			'\'fixTypes\' must be an array of any of "directive", "problem", "suggestion", and "layout".',
		);
	}
	if (typeof globInputPaths !== "boolean") {
		errors.push("'globInputPaths' must be a boolean.");
	}
	if (typeof ignore !== "boolean") {
		errors.push("'ignore' must be a boolean.");
	}
	if (!isNonEmptyString(ignorePath) && ignorePath !== null) {
		errors.push("'ignorePath' must be a non-empty string or null.");
	}
	if (typeof overrideConfig !== "object") {
		errors.push("'overrideConfig' must be an object or null.");
	}
	if (!isNonEmptyString(overrideConfigFile) && overrideConfigFile !== null) {
		errors.push("'overrideConfigFile' must be a non-empty string or null.");
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
	if (
		reportUnusedDisableDirectives !== "error" &&
		reportUnusedDisableDirectives !== "warn" &&
		reportUnusedDisableDirectives !== "off" &&
		reportUnusedDisableDirectives !== null
	) {
		errors.push(
			'\'reportUnusedDisableDirectives\' must be any of "error", "warn", "off", and null.',
		);
	}
	if (
		!isNonEmptyString(resolvePluginsRelativeTo) &&
		resolvePluginsRelativeTo !== null
	) {
		errors.push(
			"'resolvePluginsRelativeTo' must be a non-empty string or null.",
		);
	}
	if (!isEmptyArrayOrArrayOfNonEmptyString(rulePaths)) {
		errors.push("'rulePaths' must be an array of non-empty strings.");
	}
	if (typeof useEslintrc !== "boolean") {
		errors.push("'useEslintrc' must be a boolean.");
	}
	if (typeof passOnNoPatterns !== "boolean") {
		errors.push("'passOnNoPatterns' must be a boolean.");
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
		configFile: overrideConfigFile,
		cwd: path.normalize(cwd),
		errorOnUnmatchedPattern,
		extensions,
		fix,
		fixTypes,
		flags: [], // LegacyESLint does not support flags, so just ignore them.
		globInputPaths,
		ignore,
		ignorePath,
		reportUnusedDisableDirectives,
		resolvePluginsRelativeTo,
		rulePaths,
		useEslintrc,
		passOnNoPatterns,
	};
}

/**
 * Check if a value has one or more properties and that value is not undefined.
 * @param {any} obj The value to check.
 * @returns {boolean} `true` if `obj` has one or more properties that value is not undefined.
 */
function hasDefinedProperty(obj) {
	if (typeof obj === "object" && obj !== null) {
		for (const key in obj) {
			if (typeof obj[key] !== "undefined") {
				return true;
			}
		}
	}
	return false;
}

/**
 * Create rulesMeta object.
 * @param {Map<string,Rule>} rules a map of rules from which to generate the object.
 * @returns {Object} metadata for all enabled rules.
 */
function createRulesMeta(rules) {
	return Array.from(rules).reduce((retVal, [id, rule]) => {
		retVal[id] = rule.meta;
		return retVal;
	}, {});
}

/** @type {WeakMap<ExtractedConfig, DeprecatedRuleInfo[]>} */
const usedDeprecatedRulesCache = new WeakMap();

/**
 * Create used deprecated rule list.
 * @param {CLIEngine} cliEngine The CLIEngine instance.
 * @param {string} maybeFilePath The absolute path to a lint target file or `"<text>"`.
 * @returns {DeprecatedRuleInfo[]} The used deprecated rule list.
 */
function getOrFindUsedDeprecatedRules(cliEngine, maybeFilePath) {
	const {
		configArrayFactory,
		options: { cwd },
	} = getCLIEngineInternalSlots(cliEngine);
	const filePath = path.isAbsolute(maybeFilePath)
		? maybeFilePath
		: path.join(cwd, "__placeholder__.js");
	const configArray = configArrayFactory.getConfigArrayForFile(filePath);
	const config = configArray.extractConfig(filePath);

	// Most files use the same config, so cache it.
	if (!usedDeprecatedRulesCache.has(config)) {
		const pluginRules = configArray.pluginRules;
		const retv = [];

		for (const [ruleId, ruleConf] of Object.entries(config.rules)) {
			if (getRuleSeverity(ruleConf) === 0) {
				continue;
			}
			const rule = pluginRules.get(ruleId) || BuiltinRules.get(ruleId);
			const meta = rule && rule.meta;

			if (meta && meta.deprecated) {
				retv.push({ ruleId, replacedBy: meta.replacedBy || [] });
			}
		}

		usedDeprecatedRulesCache.set(config, Object.freeze(retv));
	}

	return usedDeprecatedRulesCache.get(config);
}

/**
 * Processes the linting results generated by a CLIEngine linting report to
 * match the ESLint class's API.
 * @param {CLIEngine} cliEngine The CLIEngine instance.
 * @param {CLIEngineLintReport} report The CLIEngine linting report to process.
 * @returns {LintResult[]} The processed linting results.
 */
function processCLIEngineLintReport(cliEngine, { results }) {
	const descriptor = {
		configurable: true,
		enumerable: true,
		get() {
			return getOrFindUsedDeprecatedRules(cliEngine, this.filePath);
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
 * Main API.
 */
class LegacyESLint {
	/**
	 * The type of configuration used by this class.
	 * @type {string}
	 */
	static configType = "eslintrc";

	/**
	 * Creates a new instance of the main ESLint API.
	 * @param {LegacyESLintOptions} options The options for this instance.
	 */
	constructor(options = {}) {
		const processedOptions = processOptions(options);
		const cliEngine = new CLIEngine(processedOptions, {
			preloadedPlugins: options.plugins,
		});
		const { configArrayFactory, lastConfigArrays } =
			getCLIEngineInternalSlots(cliEngine);
		let updated = false;

		/*
		 * Address `overrideConfig` to set override config.
		 * Operate the `configArrayFactory` internal slot directly because this
		 * functionality doesn't exist as the public API of CLIEngine.
		 */
		if (hasDefinedProperty(options.overrideConfig)) {
			configArrayFactory.setOverrideConfig(options.overrideConfig);
			updated = true;
		}

		// Update caches.
		if (updated) {
			configArrayFactory.clearCache();
			lastConfigArrays[0] = configArrayFactory.getConfigArrayForFile();
		}

		// Initialize private properties.
		privateMembersMap.set(this, {
			cliEngine,
			options: processedOptions,
		});
	}

	/**
	 * The version text.
	 * @type {string}
	 */
	static get version() {
		return version;
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
				.map(r => writeFile(r.filePath, r.output)),
		);
	}

	/**
	 * Returns results that only contains errors.
	 * @param {LintResult[]} results The results to filter.
	 * @returns {LintResult[]} The filtered results.
	 */
	static getErrorResults(results) {
		return CLIEngine.getErrorResults(results);
	}

	/**
	 * Returns meta objects for each rule represented in the lint results.
	 * @param {LintResult[]} results The results to fetch rules meta for.
	 * @returns {Object} A mapping of ruleIds to rule meta objects.
	 */
	getRulesMetaForResults(results) {
		const resultRuleIds = new Set();

		// first gather all ruleIds from all results

		for (const result of results) {
			for (const { ruleId } of result.messages) {
				resultRuleIds.add(ruleId);
			}
			for (const { ruleId } of result.suppressedMessages) {
				resultRuleIds.add(ruleId);
			}
		}

		// create a map of all rules in the results

		const { cliEngine } = privateMembersMap.get(this);
		const rules = cliEngine.getRules();
		const resultRules = new Map();

		for (const [ruleId, rule] of rules) {
			if (resultRuleIds.has(ruleId)) {
				resultRules.set(ruleId, rule);
			}
		}

		return createRulesMeta(resultRules);
	}

	/* eslint-disable no-unused-vars, class-methods-use-this -- leaving for compatibility with ESLint#hasFlag */
	/**
	 * Indicates if the given feature flag is enabled for this instance. For this
	 * class, this always returns `false` because it does not support feature flags.
	 * @param {string} flag The feature flag to check.
	 * @returns {boolean} Always false.
	 */
	hasFlag(flag) {
		return false;
	}
	/* eslint-enable no-unused-vars, class-methods-use-this -- reenable rules for the rest of the file */

	/**
	 * Executes the current configuration on an array of file and directory names.
	 * @param {string[]} patterns An array of file and directory names.
	 * @returns {Promise<LintResult[]>} The results of linting the file patterns given.
	 */
	async lintFiles(patterns) {
		const { cliEngine, options } = privateMembersMap.get(this);

		if (
			options.passOnNoPatterns &&
			(patterns === "" ||
				(Array.isArray(patterns) && patterns.length === 0))
		) {
			return [];
		}

		if (!isNonEmptyString(patterns) && !isArrayOfNonEmptyString(patterns)) {
			throw new Error(
				"'patterns' must be a non-empty string or an array of non-empty strings",
			);
		}

		return processCLIEngineLintReport(
			cliEngine,
			cliEngine.executeOnFiles(patterns),
		);
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
		if (typeof code !== "string") {
			throw new Error("'code' must be a string");
		}
		if (typeof options !== "object") {
			throw new Error("'options' must be an object, null, or undefined");
		}
		const {
			filePath,
			warnIgnored = false,
			...unknownOptions
		} = options || {};

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
		if (typeof warnIgnored !== "boolean") {
			throw new Error(
				"'options.warnIgnored' must be a boolean or undefined",
			);
		}

		const { cliEngine } = privateMembersMap.get(this);

		return processCLIEngineLintReport(
			cliEngine,
			cliEngine.executeOnText(code, filePath, warnIgnored),
		);
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
	 * @returns {Promise<LoadedFormatter>} A promise resolving to the formatter object.
	 * This promise will be rejected if the given formatter was not found or not
	 * a function.
	 */
	async loadFormatter(name = "stylish") {
		if (typeof name !== "string") {
			throw new Error("'name' must be a string");
		}

		const { cliEngine, options } = privateMembersMap.get(this);
		const formatter = cliEngine.getFormatter(name);

		if (typeof formatter !== "function") {
			throw new Error(
				`Formatter must be a function, but got a ${typeof formatter}.`,
			);
		}

		return {
			/**
			 * The main formatter method.
			 * @param {LintResult[]} results The lint results to format.
			 * @param {ResultsMeta} resultsMeta Warning count and max threshold.
			 * @returns {string | Promise<string>} The formatted lint results.
			 */
			format(results, resultsMeta) {
				let rulesMeta = null;

				results.sort(compareResultsByFilePath);

				return formatter(results, {
					...resultsMeta,
					get cwd() {
						return options.cwd;
					},
					get rulesMeta() {
						if (!rulesMeta) {
							rulesMeta = createRulesMeta(cliEngine.getRules());
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
	 * @returns {Promise<ConfigData>} A configuration object for the file.
	 */
	async calculateConfigForFile(filePath) {
		if (!isNonEmptyString(filePath)) {
			throw new Error("'filePath' must be a non-empty string");
		}
		const { cliEngine } = privateMembersMap.get(this);

		return cliEngine.getConfigForFile(filePath);
	}

	/**
	 * Checks if a given path is ignored by ESLint.
	 * @param {string} filePath The path of the file to check.
	 * @returns {Promise<boolean>} Whether or not the given path is ignored.
	 */
	async isPathIgnored(filePath) {
		if (!isNonEmptyString(filePath)) {
			throw new Error("'filePath' must be a non-empty string");
		}
		const { cliEngine } = privateMembersMap.get(this);

		return cliEngine.isPathIgnored(filePath);
	}
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
	LegacyESLint,

	/**
	 * Get the private class members of a given ESLint instance for tests.
	 * @param {ESLint} instance The ESLint instance to get.
	 * @returns {ESLintPrivateMembers} The instance's private class members.
	 */
	getESLintPrivateMembers(instance) {
		return privateMembersMap.get(instance);
	},
};

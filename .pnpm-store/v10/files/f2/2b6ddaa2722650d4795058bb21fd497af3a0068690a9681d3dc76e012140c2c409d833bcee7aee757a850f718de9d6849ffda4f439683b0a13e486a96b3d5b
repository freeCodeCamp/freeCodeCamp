'use strict';

var posixPath = require('./std__path/posix.cjs');
var windowsPath = require('./std__path/windows.cjs');
var minimatch = require('minimatch');
var createDebug = require('debug');
var objectSchema = require('@eslint/object-schema');

function _interopNamespaceDefault(e) {
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n.default = e;
	return Object.freeze(n);
}

var posixPath__namespace = /*#__PURE__*/_interopNamespaceDefault(posixPath);
var windowsPath__namespace = /*#__PURE__*/_interopNamespaceDefault(windowsPath);

/**
 * @fileoverview ConfigSchema
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Types
//------------------------------------------------------------------------------

/** @import * as $eslintobjectschema from "@eslint/object-schema"; */
/** @typedef {$eslintobjectschema.PropertyDefinition} PropertyDefinition */
/** @typedef {$eslintobjectschema.ObjectDefinition} ObjectDefinition */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * A strategy that does nothing.
 * @type {PropertyDefinition}
 */
const NOOP_STRATEGY = {
	required: false,
	merge() {
		return undefined;
	},
	validate() {},
};

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

/**
 * The base schema that every ConfigArray uses.
 * @type {ObjectDefinition}
 */
const baseSchema = Object.freeze({
	name: {
		required: false,
		merge() {
			return undefined;
		},
		validate(value) {
			if (typeof value !== "string") {
				throw new TypeError("Property must be a string.");
			}
		},
	},
	basePath: NOOP_STRATEGY,
	files: NOOP_STRATEGY,
	ignores: NOOP_STRATEGY,
});

/**
 * @fileoverview ConfigSchema
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Types
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Asserts that a given value is an array.
 * @param {*} value The value to check.
 * @returns {void}
 * @throws {TypeError} When the value is not an array.
 */
function assertIsArray(value) {
	if (!Array.isArray(value)) {
		throw new TypeError("Expected value to be an array.");
	}
}

/**
 * Asserts that a given value is an array containing only strings and functions.
 * @param {*} value The value to check.
 * @returns {void}
 * @throws {TypeError} When the value is not an array of strings and functions.
 */
function assertIsArrayOfStringsAndFunctions(value) {
	assertIsArray(value);

	if (
		value.some(
			item => typeof item !== "string" && typeof item !== "function",
		)
	) {
		throw new TypeError(
			"Expected array to only contain strings and functions.",
		);
	}
}

/**
 * Asserts that a given value is a non-empty array.
 * @param {*} value The value to check.
 * @returns {void}
 * @throws {TypeError} When the value is not an array or an empty array.
 */
function assertIsNonEmptyArray(value) {
	if (!Array.isArray(value) || value.length === 0) {
		throw new TypeError("Expected value to be a non-empty array.");
	}
}

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

/**
 * The schema for `files` and `ignores` that every ConfigArray uses.
 * @type {ObjectDefinition}
 */
const filesAndIgnoresSchema = Object.freeze({
	basePath: {
		required: false,
		merge() {
			return undefined;
		},
		validate(value) {
			if (typeof value !== "string") {
				throw new TypeError("Expected value to be a string.");
			}
		},
	},
	files: {
		required: false,
		merge() {
			return undefined;
		},
		validate(value) {
			// first check if it's an array
			assertIsNonEmptyArray(value);

			// then check each member
			value.forEach(item => {
				if (Array.isArray(item)) {
					assertIsArrayOfStringsAndFunctions(item);
				} else if (
					typeof item !== "string" &&
					typeof item !== "function"
				) {
					throw new TypeError(
						"Items must be a string, a function, or an array of strings and functions.",
					);
				}
			});
		},
	},
	ignores: {
		required: false,
		merge() {
			return undefined;
		},
		validate: assertIsArrayOfStringsAndFunctions,
	},
});

/**
 * @fileoverview ConfigArray
 * @author Nicholas C. Zakas
 */


//------------------------------------------------------------------------------
// Types
//------------------------------------------------------------------------------

/** @import * as $typests from "./types.ts"; */
/** @typedef {$typests.ConfigObject} ConfigObject */
/** @import * as $minimatch from "minimatch"; */
/** @typedef {$minimatch.IMinimatchStatic} IMinimatchStatic */
/** @typedef {$minimatch.IMinimatch} IMinimatch */
/** @import * as PathImpl from "@jsr/std__path" */

/*
 * This is a bit of a hack to make TypeScript happy with the Rollup-created
 * CommonJS file. Rollup doesn't do object destructuring for imported files
 * and instead imports the default via `require()`. This messes up type checking
 * for `ObjectSchema`. To work around that, we just import the type manually
 * and give it a different name to use in the JSDoc comments.
 */
/** @typedef {ObjectSchema} ObjectSchemaInstance */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const Minimatch = minimatch.Minimatch;
const debug = createDebug("@eslint/config-array");

/**
 * A cache for minimatch instances.
 * @type {Map<string, IMinimatch>}
 */
const minimatchCache = new Map();

/**
 * A cache for negated minimatch instances.
 * @type {Map<string, IMinimatch>}
 */
const negatedMinimatchCache = new Map();

/**
 * Options to use with minimatch.
 * @type {Object}
 */
const MINIMATCH_OPTIONS = {
	// matchBase: true,
	dot: true,
	allowWindowsEscape: true,
};

/**
 * The types of config objects that are supported.
 * @type {Set<string>}
 */
const CONFIG_TYPES = new Set(["array", "function"]);

/**
 * Fields that are considered metadata and not part of the config object.
 * @type {Set<string>}
 */
const META_FIELDS = new Set(["name", "basePath"]);

/**
 * A schema containing just files and ignores for early validation.
 * @type {ObjectSchemaInstance}
 */
const FILES_AND_IGNORES_SCHEMA = new objectSchema.ObjectSchema(filesAndIgnoresSchema);

// Precomputed constant objects returned by `ConfigArray.getConfigWithStatus`.

const CONFIG_WITH_STATUS_EXTERNAL = Object.freeze({ status: "external" });
const CONFIG_WITH_STATUS_IGNORED = Object.freeze({ status: "ignored" });
const CONFIG_WITH_STATUS_UNCONFIGURED = Object.freeze({
	status: "unconfigured",
});

// Match two leading dots followed by a slash or the end of input.
const EXTERNAL_PATH_REGEX = /^\.\.(?:\/|$)/u;

/**
 * Wrapper error for config validation errors that adds a name to the front of the
 * error message.
 */
class ConfigError extends Error {
	/**
	 * Creates a new instance.
	 * @param {string} name The config object name causing the error.
	 * @param {number} index The index of the config object in the array.
	 * @param {Object} options The options for the error.
	 * @param {Error} [options.cause] The error that caused this error.
	 * @param {string} [options.message] The message to use for the error.
	 */
	constructor(name, index, { cause, message }) {
		const finalMessage = message || cause.message;

		super(`Config ${name}: ${finalMessage}`, { cause });

		// copy over custom properties that aren't represented
		if (cause) {
			for (const key of Object.keys(cause)) {
				if (!(key in this)) {
					this[key] = cause[key];
				}
			}
		}

		/**
		 * The name of the error.
		 * @type {string}
		 * @readonly
		 */
		this.name = "ConfigError";

		/**
		 * The index of the config object in the array.
		 * @type {number}
		 * @readonly
		 */
		this.index = index;
	}
}

/**
 * Gets the name of a config object.
 * @param {ConfigObject} config The config object to get the name of.
 * @returns {string} The name of the config object.
 */
function getConfigName(config) {
	if (config && typeof config.name === "string" && config.name) {
		return `"${config.name}"`;
	}

	return "(unnamed)";
}

/**
 * Rethrows a config error with additional information about the config object.
 * @param {object} config The config object to get the name of.
 * @param {number} index The index of the config object in the array.
 * @param {Error} error The error to rethrow.
 * @throws {ConfigError} When the error is rethrown for a config.
 */
function rethrowConfigError(config, index, error) {
	const configName = getConfigName(config);
	throw new ConfigError(configName, index, { cause: error });
}

/**
 * Shorthand for checking if a value is a string.
 * @param {any} value The value to check.
 * @returns {boolean} True if a string, false if not.
 */
function isString(value) {
	return typeof value === "string";
}

/**
 * Creates a function that asserts that the config is valid
 * during normalization. This checks that the config is not nullish
 * and that files and ignores keys  of a config object are valid as per base schema.
 * @param {Object} config The config object to check.
 * @param {number} index The index of the config object in the array.
 * @returns {void}
 * @throws {ConfigError} If the files and ignores keys of a config object are not valid.
 */
function assertValidBaseConfig(config, index) {
	if (config === null) {
		throw new ConfigError(getConfigName(config), index, {
			message: "Unexpected null config.",
		});
	}

	if (config === undefined) {
		throw new ConfigError(getConfigName(config), index, {
			message: "Unexpected undefined config.",
		});
	}

	if (typeof config !== "object") {
		throw new ConfigError(getConfigName(config), index, {
			message: "Unexpected non-object config.",
		});
	}

	const validateConfig = {};

	if ("basePath" in config) {
		validateConfig.basePath = config.basePath;
	}

	if ("files" in config) {
		validateConfig.files = config.files;
	}

	if ("ignores" in config) {
		validateConfig.ignores = config.ignores;
	}

	try {
		FILES_AND_IGNORES_SCHEMA.validate(validateConfig);
	} catch (validationError) {
		rethrowConfigError(config, index, validationError);
	}
}

/**
 * Wrapper around minimatch that caches minimatch patterns for
 * faster matching speed over multiple file path evaluations.
 * @param {string} filepath The file path to match.
 * @param {string} pattern The glob pattern to match against.
 * @param {object} options The minimatch options to use.
 * @returns
 */
function doMatch(filepath, pattern, options = {}) {
	let cache = minimatchCache;

	if (options.flipNegate) {
		cache = negatedMinimatchCache;
	}

	let matcher = cache.get(pattern);

	if (!matcher) {
		matcher = new Minimatch(
			pattern,
			Object.assign({}, MINIMATCH_OPTIONS, options),
		);
		cache.set(pattern, matcher);
	}

	return matcher.match(filepath);
}

/**
 * Normalizes a pattern by removing the leading "./" if present.
 * @param {string} pattern The pattern to normalize.
 * @returns {string} The normalized pattern.
 */
function normalizePattern(pattern) {
	if (isString(pattern)) {
		if (pattern.startsWith("./")) {
			return pattern.slice(2);
		}

		if (pattern.startsWith("!./")) {
			return `!${pattern.slice(3)}`;
		}
	}

	return pattern;
}

/**
 * Checks if a given pattern requires normalization.
 * @param {any} pattern The pattern to check.
 * @returns {boolean} True if the pattern needs normalization, false otherwise.
 *
 */
function needsPatternNormalization(pattern) {
	return (
		isString(pattern) &&
		(pattern.startsWith("./") || pattern.startsWith("!./"))
	);
}

/**
 * Normalizes `files` and `ignores` patterns in a config by removing "./" prefixes.
 * @param {Object} config The config object to normalize patterns in.
 * @param {string} namespacedBasePath The namespaced base path of the directory to which config base path is relative.
 * @param {PathImpl} path Path-handling implementation.
 * @returns {Object} The normalized config object.
 */
function normalizeConfigPatterns(config, namespacedBasePath, path) {
	if (!config) {
		return config;
	}

	const hasBasePath = typeof config.basePath === "string";

	let needsNormalization = false;

	if (hasBasePath) {
		needsNormalization = true;
	}

	if (!needsNormalization && Array.isArray(config.files)) {
		needsNormalization = config.files.some(pattern => {
			if (Array.isArray(pattern)) {
				return pattern.some(needsPatternNormalization);
			}
			return needsPatternNormalization(pattern);
		});
	}

	if (!needsNormalization && Array.isArray(config.ignores)) {
		needsNormalization = config.ignores.some(needsPatternNormalization);
	}

	if (!needsNormalization) {
		return config;
	}

	const newConfig = { ...config };

	if (hasBasePath) {
		if (path.isAbsolute(config.basePath)) {
			newConfig.basePath = path.toNamespacedPath(config.basePath);
		} else {
			newConfig.basePath = path.resolve(
				namespacedBasePath,
				config.basePath,
			);
		}
	}

	if (Array.isArray(newConfig.files)) {
		newConfig.files = newConfig.files.map(pattern => {
			if (Array.isArray(pattern)) {
				return pattern.map(normalizePattern);
			}
			return normalizePattern(pattern);
		});
	}

	if (Array.isArray(newConfig.ignores)) {
		newConfig.ignores = newConfig.ignores.map(normalizePattern);
	}

	return newConfig;
}

/**
 * Normalizes a `ConfigArray` by flattening it and executing any functions
 * that are found inside.
 * @param {Array} items The items in a `ConfigArray`.
 * @param {Object} context The context object to pass into any function
 *      found.
 * @param {Array<string>} extraConfigTypes The config types to check.
 * @param {string} namespacedBasePath The namespaced base path of the directory to which config base paths are relative.
 * @param {PathImpl} path Path-handling implementation.
 * @returns {Promise<Array>} A flattened array containing only config objects.
 * @throws {TypeError} When a config function returns a function.
 */
async function normalize(
	items,
	context,
	extraConfigTypes,
	namespacedBasePath,
	path,
) {
	const allowFunctions = extraConfigTypes.includes("function");
	const allowArrays = extraConfigTypes.includes("array");

	async function* flatTraverse(array) {
		for (let item of array) {
			if (typeof item === "function") {
				if (!allowFunctions) {
					throw new TypeError("Unexpected function.");
				}

				item = item(context);
				if (item.then) {
					item = await item;
				}
			}

			if (Array.isArray(item)) {
				if (!allowArrays) {
					throw new TypeError("Unexpected array.");
				}
				yield* flatTraverse(item);
			} else if (typeof item === "function") {
				throw new TypeError(
					"A config function can only return an object or array.",
				);
			} else {
				yield item;
			}
		}
	}

	/*
	 * Async iterables cannot be used with the spread operator, so we need to manually
	 * create the array to return.
	 */
	const asyncIterable = await flatTraverse(items);
	const configs = [];

	for await (const config of asyncIterable) {
		configs.push(normalizeConfigPatterns(config, namespacedBasePath, path));
	}

	return configs;
}

/**
 * Normalizes a `ConfigArray` by flattening it and executing any functions
 * that are found inside.
 * @param {Array} items The items in a `ConfigArray`.
 * @param {Object} context The context object to pass into any function
 *      found.
 * @param {Array<string>} extraConfigTypes The config types to check.
 * @param {string} namespacedBasePath The namespaced base path of the directory to which config base paths are relative.
 * @param {PathImpl} path Path-handling implementation
 * @returns {Array} A flattened array containing only config objects.
 * @throws {TypeError} When a config function returns a function.
 */
function normalizeSync(
	items,
	context,
	extraConfigTypes,
	namespacedBasePath,
	path,
) {
	const allowFunctions = extraConfigTypes.includes("function");
	const allowArrays = extraConfigTypes.includes("array");

	function* flatTraverse(array) {
		for (let item of array) {
			if (typeof item === "function") {
				if (!allowFunctions) {
					throw new TypeError("Unexpected function.");
				}

				item = item(context);
				if (item.then) {
					throw new TypeError(
						"Async config functions are not supported.",
					);
				}
			}

			if (Array.isArray(item)) {
				if (!allowArrays) {
					throw new TypeError("Unexpected array.");
				}

				yield* flatTraverse(item);
			} else if (typeof item === "function") {
				throw new TypeError(
					"A config function can only return an object or array.",
				);
			} else {
				yield item;
			}
		}
	}

	const configs = [];

	for (const config of flatTraverse(items)) {
		configs.push(normalizeConfigPatterns(config, namespacedBasePath, path));
	}

	return configs;
}

/**
 * Converts a given path to a relative path with all separator characters replaced by forward slashes (`"/"`).
 * @param {string} fileOrDirPath The unprocessed path to convert.
 * @param {string} namespacedBasePath The namespaced base path of the directory to which the calculated path shall be relative.
 * @param {PathImpl} path Path-handling implementations.
 * @returns {string} A relative path with all separator characters replaced by forward slashes.
 */
function toRelativePath(fileOrDirPath, namespacedBasePath, path) {
	const fullPath = path.resolve(namespacedBasePath, fileOrDirPath);
	const namespacedFullPath = path.toNamespacedPath(fullPath);
	const relativePath = path.relative(namespacedBasePath, namespacedFullPath);
	return relativePath.replaceAll(path.SEPARATOR, "/");
}

/**
 * Determines if a given file path should be ignored based on the given
 * matcher.
 * @param {Array<{ basePath?: string, ignores: Array<string|((string) => boolean)>}>} configs Configuration objects containing `ignores`.
 * @param {string} filePath The unprocessed file path to check.
 * @param {string} relativeFilePath The path of the file to check relative to the base path,
 * 		using forward slash (`"/"`) as a separator.
 * @param {Object} [basePathData] Additional data needed to recalculate paths for configuration objects
 *  	that have `basePath` property.
 * @param {string} [basePathData.basePath] Namespaced path to witch `relativeFilePath` is relative.
 * @param {PathImpl} [basePathData.path] Path-handling implementation.
 * @returns {boolean} True if the path should be ignored and false if not.
 */
function shouldIgnorePath(
	configs,
	filePath,
	relativeFilePath,
	{ basePath, path } = {},
) {
	let shouldIgnore = false;

	for (const config of configs) {
		let relativeFilePathToCheck = relativeFilePath;
		if (config.basePath) {
			relativeFilePathToCheck = toRelativePath(
				path.resolve(basePath, relativeFilePath),
				config.basePath,
				path,
			);

			if (
				relativeFilePathToCheck === "" ||
				EXTERNAL_PATH_REGEX.test(relativeFilePathToCheck)
			) {
				continue;
			}

			if (relativeFilePath.endsWith("/")) {
				relativeFilePathToCheck += "/";
			}
		}
		shouldIgnore = config.ignores.reduce((ignored, matcher) => {
			if (!ignored) {
				if (typeof matcher === "function") {
					return matcher(filePath);
				}

				// don't check negated patterns because we're not ignored yet
				if (!matcher.startsWith("!")) {
					return doMatch(relativeFilePathToCheck, matcher);
				}

				// otherwise we're still not ignored
				return false;
			}

			// only need to check negated patterns because we're ignored
			if (typeof matcher === "string" && matcher.startsWith("!")) {
				return !doMatch(relativeFilePathToCheck, matcher, {
					flipNegate: true,
				});
			}

			return ignored;
		}, shouldIgnore);
	}

	return shouldIgnore;
}

/**
 * Determines if a given file path is matched by a config. If the config
 * has no `files` field, then it matches; otherwise, if a `files` field
 * is present then we match the globs in `files` and exclude any globs in
 * `ignores`.
 * @param {string} filePath The unprocessed file path to check.
 * @param {string} relativeFilePath The path of the file to check relative to the base path,
 * 		using forward slash (`"/"`) as a separator.
 * @param {Object} config The config object to check.
 * @returns {boolean} True if the file path is matched by the config,
 *      false if not.
 */
function pathMatches(filePath, relativeFilePath, config) {
	// match both strings and functions
	function match(pattern) {
		if (isString(pattern)) {
			return doMatch(relativeFilePath, pattern);
		}

		if (typeof pattern === "function") {
			return pattern(filePath);
		}

		throw new TypeError(`Unexpected matcher type ${pattern}.`);
	}

	// check for all matches to config.files
	let filePathMatchesPattern = config.files.some(pattern => {
		if (Array.isArray(pattern)) {
			return pattern.every(match);
		}

		return match(pattern);
	});

	/*
	 * If the file path matches the config.files patterns, then check to see
	 * if there are any files to ignore.
	 */
	if (filePathMatchesPattern && config.ignores) {
		/*
		 * Pass config object without `basePath`, because `relativeFilePath` is already
		 * calculated as relative to it.
		 */
		filePathMatchesPattern = !shouldIgnorePath(
			[{ ignores: config.ignores }],
			filePath,
			relativeFilePath,
		);
	}

	return filePathMatchesPattern;
}

/**
 * Ensures that a ConfigArray has been normalized.
 * @param {ConfigArray} configArray The ConfigArray to check.
 * @returns {void}
 * @throws {Error} When the `ConfigArray` is not normalized.
 */
function assertNormalized(configArray) {
	// TODO: Throw more verbose error
	if (!configArray.isNormalized()) {
		throw new Error(
			"ConfigArray must be normalized to perform this operation.",
		);
	}
}

/**
 * Ensures that config types are valid.
 * @param {Array<string>} extraConfigTypes The config types to check.
 * @returns {void}
 * @throws {TypeError} When the config types array is invalid.
 */
function assertExtraConfigTypes(extraConfigTypes) {
	if (extraConfigTypes.length > 2) {
		throw new TypeError(
			"configTypes must be an array with at most two items.",
		);
	}

	for (const configType of extraConfigTypes) {
		if (!CONFIG_TYPES.has(configType)) {
			throw new TypeError(
				`Unexpected config type "${configType}" found. Expected one of: "object", "array", "function".`,
			);
		}
	}
}

/**
 * Returns path-handling implementations for Unix or Windows, depending on a given absolute path.
 * @param {string} fileOrDirPath The absolute path to check.
 * @returns {PathImpl} Path-handling implementations for the specified path.
 * @throws {Error} An error is thrown if the specified argument is not an absolute path.
 */
function getPathImpl(fileOrDirPath) {
	// Posix absolute paths always start with a slash.
	if (fileOrDirPath.startsWith("/")) {
		return posixPath__namespace;
	}

	// Windows absolute paths start with a letter followed by a colon and at least one backslash,
	// or with two backslashes in the case of UNC paths.
	// Forward slashed are automatically normalized to backslashes.
	if (/^(?:[A-Za-z]:[/\\]|[/\\]{2})/u.test(fileOrDirPath)) {
		return windowsPath__namespace;
	}

	throw new Error(
		`Expected an absolute path but received "${fileOrDirPath}"`,
	);
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

const ConfigArraySymbol = {
	isNormalized: Symbol("isNormalized"),
	configCache: Symbol("configCache"),
	schema: Symbol("schema"),
	finalizeConfig: Symbol("finalizeConfig"),
	preprocessConfig: Symbol("preprocessConfig"),
};

// used to store calculate data for faster lookup
const dataCache = new WeakMap();

/**
 * Represents an array of config objects and provides method for working with
 * those config objects.
 */
class ConfigArray extends Array {
	/**
	 * The namespaced path of the config file directory.
	 * @type {string}
	 */
	#namespacedBasePath;

	/**
	 * Path-handling implementations.
	 * @type {PathImpl}
	 */
	#path;

	/**
	 * Creates a new instance of ConfigArray.
	 * @param {Iterable|Function|Object} configs An iterable yielding config
	 *      objects, or a config function, or a config object.
	 * @param {Object} options The options for the ConfigArray.
	 * @param {string} [options.basePath="/"] The absolute path of the config file directory.
	 * 		Defaults to `"/"`.
	 * @param {boolean} [options.normalized=false] Flag indicating if the
	 *      configs have already been normalized.
	 * @param {Object} [options.schema] The additional schema
	 *      definitions to use for the ConfigArray schema.
	 * @param {Array<string>} [options.extraConfigTypes] List of config types supported.
	 * @throws {TypeError} When the `basePath` is not a non-empty string,
	 */
	constructor(
		configs,
		{
			basePath = "/",
			normalized = false,
			schema: customSchema,
			extraConfigTypes = [],
		} = {},
	) {
		super();

		/**
		 * Tracks if the array has been normalized.
		 * @property isNormalized
		 * @type {boolean}
		 * @private
		 */
		this[ConfigArraySymbol.isNormalized] = normalized;

		/**
		 * The schema used for validating and merging configs.
		 * @property schema
		 * @type {ObjectSchemaInstance}
		 * @private
		 */
		this[ConfigArraySymbol.schema] = new objectSchema.ObjectSchema(
			Object.assign({}, customSchema, baseSchema),
		);

		if (!isString(basePath) || !basePath) {
			throw new TypeError("basePath must be a non-empty string");
		}

		/**
		 * The path of the config file that this array was loaded from.
		 * This is used to calculate filename matches.
		 * @property basePath
		 * @type {string}
		 */
		this.basePath = basePath;

		assertExtraConfigTypes(extraConfigTypes);

		/**
		 * The supported config types.
		 * @type {Array<string>}
		 */
		this.extraConfigTypes = [...extraConfigTypes];
		Object.freeze(this.extraConfigTypes);

		/**
		 * A cache to store calculated configs for faster repeat lookup.
		 * @property configCache
		 * @type {Map<string, Object>}
		 * @private
		 */
		this[ConfigArraySymbol.configCache] = new Map();

		// init cache
		dataCache.set(this, {
			explicitMatches: new Map(),
			directoryMatches: new Map(),
			files: undefined,
			ignores: undefined,
		});

		// load the configs into this array
		if (Array.isArray(configs)) {
			this.push(...configs);
		} else {
			this.push(configs);
		}

		// select path-handling implementations depending on the base path
		this.#path = getPathImpl(basePath);

		// On Windows, `path.relative()` returns an absolute path when given two paths on different drives.
		// The namespaced base path is useful to make sure that calculated relative paths are always relative.
		// On Unix, it is identical to the base path.
		this.#namespacedBasePath = this.#path.toNamespacedPath(basePath);
	}

	/**
	 * Prevent normal array methods from creating a new `ConfigArray` instance.
	 * This is to ensure that methods such as `slice()` won't try to create a
	 * new instance of `ConfigArray` behind the scenes as doing so may throw
	 * an error due to the different constructor signature.
	 * @type {ArrayConstructor} The `Array` constructor.
	 */
	static get [Symbol.species]() {
		return Array;
	}

	/**
	 * Returns the `files` globs from every config object in the array.
	 * This can be used to determine which files will be matched by a
	 * config array or to use as a glob pattern when no patterns are provided
	 * for a command line interface.
	 * @returns {Array<string|Function>} An array of matchers.
	 */
	get files() {
		assertNormalized(this);

		// if this data has been cached, retrieve it
		const cache = dataCache.get(this);

		if (cache.files) {
			return cache.files;
		}

		// otherwise calculate it

		const result = [];

		for (const config of this) {
			if (config.files) {
				config.files.forEach(filePattern => {
					result.push(filePattern);
				});
			}
		}

		// store result
		cache.files = result;
		dataCache.set(this, cache);

		return result;
	}

	/**
	 * Returns ignore matchers that should always be ignored regardless of
	 * the matching `files` fields in any configs. This is necessary to mimic
	 * the behavior of things like .gitignore and .eslintignore, allowing a
	 * globbing operation to be faster.
	 * @returns {Object[]} An array of config objects representing global ignores.
	 */
	get ignores() {
		assertNormalized(this);

		// if this data has been cached, retrieve it
		const cache = dataCache.get(this);

		if (cache.ignores) {
			return cache.ignores;
		}

		// otherwise calculate it

		const result = [];

		for (const config of this) {
			/*
			 * We only count ignores if there are no other keys in the object.
			 * In this case, it acts list a globally ignored pattern. If there
			 * are additional keys, then ignores act like exclusions.
			 */
			if (
				config.ignores &&
				Object.keys(config).filter(key => !META_FIELDS.has(key))
					.length === 1
			) {
				result.push(config);
			}
		}

		// store result
		cache.ignores = result;
		dataCache.set(this, cache);

		return result;
	}

	/**
	 * Indicates if the config array has been normalized.
	 * @returns {boolean} True if the config array is normalized, false if not.
	 */
	isNormalized() {
		return this[ConfigArraySymbol.isNormalized];
	}

	/**
	 * Normalizes a config array by flattening embedded arrays and executing
	 * config functions.
	 * @param {Object} [context] The context object for config functions.
	 * @returns {Promise<ConfigArray>} The current ConfigArray instance.
	 */
	async normalize(context = {}) {
		if (!this.isNormalized()) {
			const normalizedConfigs = await normalize(
				this,
				context,
				this.extraConfigTypes,
				this.#namespacedBasePath,
				this.#path,
			);
			this.length = 0;
			this.push(
				...normalizedConfigs.map(
					this[ConfigArraySymbol.preprocessConfig].bind(this),
				),
			);
			this.forEach(assertValidBaseConfig);
			this[ConfigArraySymbol.isNormalized] = true;

			// prevent further changes
			Object.freeze(this);
		}

		return this;
	}

	/**
	 * Normalizes a config array by flattening embedded arrays and executing
	 * config functions.
	 * @param {Object} [context] The context object for config functions.
	 * @returns {ConfigArray} The current ConfigArray instance.
	 */
	normalizeSync(context = {}) {
		if (!this.isNormalized()) {
			const normalizedConfigs = normalizeSync(
				this,
				context,
				this.extraConfigTypes,
				this.#namespacedBasePath,
				this.#path,
			);
			this.length = 0;
			this.push(
				...normalizedConfigs.map(
					this[ConfigArraySymbol.preprocessConfig].bind(this),
				),
			);
			this.forEach(assertValidBaseConfig);
			this[ConfigArraySymbol.isNormalized] = true;

			// prevent further changes
			Object.freeze(this);
		}

		return this;
	}

	/* eslint-disable class-methods-use-this -- Desired as instance methods */

	/**
	 * Finalizes the state of a config before being cached and returned by
	 * `getConfig()`. Does nothing by default but is provided to be
	 * overridden by subclasses as necessary.
	 * @param {Object} config The config to finalize.
	 * @returns {Object} The finalized config.
	 */
	// Cast key to `never` to prevent TypeScript from adding the signature `[x: symbol]: (config: any) => any` to the type of the class.
	[/** @type {never} */ (ConfigArraySymbol.finalizeConfig)](config) {
		return config;
	}

	/**
	 * Preprocesses a config during the normalization process. This is the
	 * method to override if you want to convert an array item before it is
	 * validated for the first time. For example, if you want to replace a
	 * string with an object, this is the method to override.
	 * @param {Object} config The config to preprocess.
	 * @returns {Object} The config to use in place of the argument.
	 */
	// Cast key to `never` to prevent TypeScript from adding the signature `[x: symbol]: (config: any) => any` to the type of the class.
	[/** @type {never} */ (ConfigArraySymbol.preprocessConfig)](config) {
		return config;
	}

	/* eslint-enable class-methods-use-this -- Desired as instance methods */

	/**
	 * Returns the config object for a given file path and a status that can be used to determine why a file has no config.
	 * @param {string} filePath The path of a file to get a config for.
	 * @returns {{ config?: Object, status: "ignored"|"external"|"unconfigured"|"matched" }}
	 * An object with an optional property `config` and property `status`.
	 * `config` is the config object for the specified file as returned by {@linkcode ConfigArray.getConfig},
	 * `status` a is one of the constants returned by {@linkcode ConfigArray.getConfigStatus}.
	 */
	getConfigWithStatus(filePath) {
		assertNormalized(this);

		const cache = this[ConfigArraySymbol.configCache];

		// first check the cache for a filename match to avoid duplicate work
		if (cache.has(filePath)) {
			return cache.get(filePath);
		}

		// check to see if the file is outside the base path

		const relativeToBaseFilePath = toRelativePath(
			filePath,
			this.#namespacedBasePath,
			this.#path,
		);

		if (EXTERNAL_PATH_REGEX.test(relativeToBaseFilePath)) {
			debug(`No config for file ${filePath} outside of base path`);

			// cache and return result
			cache.set(filePath, CONFIG_WITH_STATUS_EXTERNAL);
			return CONFIG_WITH_STATUS_EXTERNAL;
		}

		// next check to see if the file should be ignored

		// check if this should be ignored due to its directory
		if (this.isDirectoryIgnored(this.#path.dirname(filePath))) {
			debug(`Ignoring ${filePath} based on directory pattern`);

			// cache and return result
			cache.set(filePath, CONFIG_WITH_STATUS_IGNORED);
			return CONFIG_WITH_STATUS_IGNORED;
		}

		if (
			shouldIgnorePath(this.ignores, filePath, relativeToBaseFilePath, {
				basePath: this.#namespacedBasePath,
				path: this.#path,
			})
		) {
			debug(`Ignoring ${filePath} based on file pattern`);

			// cache and return result
			cache.set(filePath, CONFIG_WITH_STATUS_IGNORED);
			return CONFIG_WITH_STATUS_IGNORED;
		}

		// filePath isn't automatically ignored, so try to construct config

		const matchingConfigIndices = [];
		let matchFound = false;
		const universalPattern = /^\*$|^!|\/\*{1,2}$/u;

		this.forEach((config, index) => {
			const relativeFilePath = config.basePath
				? toRelativePath(
						this.#path.resolve(this.#namespacedBasePath, filePath),
						config.basePath,
						this.#path,
					)
				: relativeToBaseFilePath;

			if (config.basePath && EXTERNAL_PATH_REGEX.test(relativeFilePath)) {
				debug(
					`Skipped config found for ${filePath} (based on config's base path: ${config.basePath}`,
				);
				return;
			}

			if (!config.files) {
				if (!config.ignores) {
					debug(`Universal config found for ${filePath}`);
					matchingConfigIndices.push(index);
					return;
				}

				if (
					Object.keys(config).filter(key => !META_FIELDS.has(key))
						.length === 1
				) {
					debug(
						`Skipped config found for ${filePath} (global ignores)`,
					);
					return;
				}

				/*
				 * Pass config object without `basePath`, because `relativeFilePath` is already
				 * calculated as relative to it.
				 */
				if (
					shouldIgnorePath(
						[{ ignores: config.ignores }],
						filePath,
						relativeFilePath,
					)
				) {
					debug(
						`Skipped config found for ${filePath} (based on ignores: ${config.ignores})`,
					);
					return;
				}

				debug(
					`Matching config found for ${filePath} (based on ignores: ${config.ignores})`,
				);
				matchingConfigIndices.push(index);
				return;
			}

			/*
			 * If a config has a files pattern * or patterns ending in /** or /*,
			 * and the filePath only matches those patterns, then the config is only
			 * applied if there is another config where the filePath matches
			 * a file with a specific extensions such as *.js.
			 */

			const nonUniversalFiles = [];
			const universalFiles = config.files.filter(element => {
				if (Array.isArray(element)) {
					/*
					 * filePath matches an element that is an array only if it matches
					 * all patterns in it (AND operation). Therefore, if there is at least
					 * one non-universal pattern in the array, and filePath matches the array,
					 * then we know for sure that filePath matches at least one non-universal
					 * pattern, so we can consider the entire array to be non-universal.
					 * In other words, all patterns in the array need to be universal
					 * for it to be considered universal.
					 */
					if (
						element.every(pattern => universalPattern.test(pattern))
					) {
						return true;
					}

					nonUniversalFiles.push(element);
					return false;
				}

				// element is a string

				if (universalPattern.test(element)) {
					return true;
				}

				nonUniversalFiles.push(element);
				return false;
			});

			// universal patterns were found so we need to check the config twice
			if (universalFiles.length) {
				debug("Universal files patterns found. Checking carefully.");

				// check that the config matches without the non-universal files first
				if (
					nonUniversalFiles.length &&
					pathMatches(filePath, relativeFilePath, {
						files: nonUniversalFiles,
						ignores: config.ignores,
					})
				) {
					debug(`Matching config found for ${filePath}`);
					matchingConfigIndices.push(index);
					matchFound = true;
					return;
				}

				// if there wasn't a match then check if it matches with universal files
				if (
					universalFiles.length &&
					pathMatches(filePath, relativeFilePath, {
						files: universalFiles,
						ignores: config.ignores,
					})
				) {
					debug(`Matching config found for ${filePath}`);
					matchingConfigIndices.push(index);
					return;
				}

				// if we make here, then there was no match
				return;
			}

			// the normal case
			if (pathMatches(filePath, relativeFilePath, config)) {
				debug(`Matching config found for ${filePath}`);
				matchingConfigIndices.push(index);
				matchFound = true;
			}
		});

		// if matching both files and ignores, there will be no config to create
		if (!matchFound) {
			debug(`No matching configs found for ${filePath}`);

			// cache and return result
			cache.set(filePath, CONFIG_WITH_STATUS_UNCONFIGURED);
			return CONFIG_WITH_STATUS_UNCONFIGURED;
		}

		// check to see if there is a config cached by indices
		const indicesKey = matchingConfigIndices.toString();
		let configWithStatus = cache.get(indicesKey);

		if (configWithStatus) {
			// also store for filename for faster lookup next time
			cache.set(filePath, configWithStatus);

			return configWithStatus;
		}

		// otherwise construct the config

		// eslint-disable-next-line array-callback-return, consistent-return -- rethrowConfigError always throws an error
		let finalConfig = matchingConfigIndices.reduce((result, index) => {
			try {
				return this[ConfigArraySymbol.schema].merge(
					result,
					this[index],
				);
			} catch (validationError) {
				rethrowConfigError(this[index], index, validationError);
			}
		}, {});

		finalConfig = this[ConfigArraySymbol.finalizeConfig](finalConfig);

		configWithStatus = Object.freeze({
			config: finalConfig,
			status: "matched",
		});
		cache.set(filePath, configWithStatus);
		cache.set(indicesKey, configWithStatus);

		return configWithStatus;
	}

	/**
	 * Returns the config object for a given file path.
	 * @param {string} filePath The path of a file to get a config for.
	 * @returns {Object|undefined} The config object for this file or `undefined`.
	 */
	getConfig(filePath) {
		return this.getConfigWithStatus(filePath).config;
	}

	/**
	 * Determines whether a file has a config or why it doesn't.
	 * @param {string} filePath The path of the file to check.
	 * @returns {"ignored"|"external"|"unconfigured"|"matched"} One of the following values:
	 * * `"ignored"`: the file is ignored
	 * * `"external"`: the file is outside the base path
	 * * `"unconfigured"`: the file is not matched by any config
	 * * `"matched"`: the file has a matching config
	 */
	getConfigStatus(filePath) {
		return this.getConfigWithStatus(filePath).status;
	}

	/**
	 * Determines if the given filepath is ignored based on the configs.
	 * @param {string} filePath The path of a file to check.
	 * @returns {boolean} True if the path is ignored, false if not.
	 * @deprecated Use `isFileIgnored` instead.
	 */
	isIgnored(filePath) {
		return this.isFileIgnored(filePath);
	}

	/**
	 * Determines if the given filepath is ignored based on the configs.
	 * @param {string} filePath The path of a file to check.
	 * @returns {boolean} True if the path is ignored, false if not.
	 */
	isFileIgnored(filePath) {
		return this.getConfigStatus(filePath) === "ignored";
	}

	/**
	 * Determines if the given directory is ignored based on the configs.
	 * This checks only default `ignores` that don't have `files` in the
	 * same config. A pattern such as `/foo` be considered to ignore the directory
	 * while a pattern such as `/foo/**` is not considered to ignore the
	 * directory because it is matching files.
	 * @param {string} directoryPath The path of a directory to check.
	 * @returns {boolean} True if the directory is ignored, false if not. Will
	 * 		return true for any directory that is not inside of `basePath`.
	 * @throws {Error} When the `ConfigArray` is not normalized.
	 */
	isDirectoryIgnored(directoryPath) {
		assertNormalized(this);

		const relativeDirectoryPath = toRelativePath(
			directoryPath,
			this.#namespacedBasePath,
			this.#path,
		);

		// basePath directory can never be ignored
		if (relativeDirectoryPath === "") {
			return false;
		}

		if (EXTERNAL_PATH_REGEX.test(relativeDirectoryPath)) {
			return true;
		}

		// first check the cache
		const cache = dataCache.get(this).directoryMatches;

		if (cache.has(relativeDirectoryPath)) {
			return cache.get(relativeDirectoryPath);
		}

		const directoryParts = relativeDirectoryPath.split("/");
		let relativeDirectoryToCheck = "";
		let result;

		/*
		 * In order to get the correct gitignore-style ignores, where an
		 * ignored parent directory cannot have any descendants unignored,
		 * we need to check every directory starting at the parent all
		 * the way down to the actual requested directory.
		 *
		 * We aggressively cache all of this info to make sure we don't
		 * have to recalculate everything for every call.
		 */
		do {
			relativeDirectoryToCheck += `${directoryParts.shift()}/`;

			result = shouldIgnorePath(
				this.ignores,
				this.#path.join(this.basePath, relativeDirectoryToCheck),
				relativeDirectoryToCheck,
				{
					basePath: this.#namespacedBasePath,
					path: this.#path,
				},
			);

			cache.set(relativeDirectoryToCheck, result);
		} while (!result && directoryParts.length);

		// also cache the result for the requested path
		cache.set(relativeDirectoryPath, result);

		return result;
	}
}

Object.defineProperty(exports, "ObjectSchema", {
	enumerable: true,
	get: function () { return objectSchema.ObjectSchema; }
});
exports.ConfigArray = ConfigArray;
exports.ConfigArraySymbol = ConfigArraySymbol;

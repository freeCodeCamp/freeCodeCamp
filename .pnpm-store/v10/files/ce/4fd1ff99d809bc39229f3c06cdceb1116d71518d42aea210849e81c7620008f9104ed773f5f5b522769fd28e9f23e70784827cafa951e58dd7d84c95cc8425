'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));
var minimatch = _interopDefault(require('minimatch'));
var createDebug = _interopDefault(require('debug'));
var objectSchema = require('@humanwhocodes/object-schema');

/**
 * @fileoverview ConfigSchema
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Assets that a given value is an array.
 * @param {*} value The value to check.
 * @returns {void}
 * @throws {TypeError} When the value is not an array. 
 */
function assertIsArray(value) {
	if (!Array.isArray(value)) {
		throw new TypeError('Expected value to be an array.');
	}
}

/**
 * Assets that a given value is an array containing only strings and functions.
 * @param {*} value The value to check.
 * @returns {void}
 * @throws {TypeError} When the value is not an array of strings and functions.
 */
function assertIsArrayOfStringsAndFunctions(value, name) {
	assertIsArray(value);

	if (value.some(item => typeof item !== 'string' && typeof item !== 'function')) {
		throw new TypeError('Expected array to only contain strings.');
	}
}

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

/**
 * The base schema that every ConfigArray uses.
 * @type Object
 */
const baseSchema = Object.freeze({
	name: {
		required: false,
		merge() {
			return undefined;
		},
		validate(value) {
			if (typeof value !== 'string') {
				throw new TypeError('Property must be a string.');
			}
		}
	},
	files: {
		required: false,
		merge() {
			return undefined;
		},
		validate(value) {

			// first check if it's an array
			assertIsArray(value);

			// then check each member
			value.forEach(item => {
				if (Array.isArray(item)) {
					assertIsArrayOfStringsAndFunctions(item);
				} else if (typeof item !== 'string' && typeof item !== 'function') {
					throw new TypeError('Items must be a string, a function, or an array of strings and functions.');
				}
			});

		}
	},
	ignores: {
		required: false,
		merge() {
			return undefined;
		},
		validate: assertIsArrayOfStringsAndFunctions
	}
});

/**
 * @fileoverview ConfigArray
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const debug = createDebug('@hwc/config-array');

const MINIMATCH_OPTIONS = {
	matchBase: true
};

/**
 * Shorthand for checking if a value is a string.
 * @param {any} value The value to check.
 * @returns {boolean} True if a string, false if not. 
 */
function isString(value) {
	return typeof value === 'string';
}

/**
 * Normalizes a `ConfigArray` by flattening it and executing any functions
 * that are found inside.
 * @param {Array} items The items in a `ConfigArray`.
 * @param {Object} context The context object to pass into any function
 *      found.
 * @returns {Array} A flattened array containing only config objects.
 * @throws {TypeError} When a config function returns a function.
 */
async function normalize(items, context) {

	// TODO: Allow async config functions

	function *flatTraverse(array) {
		for (let item of array) {
			if (typeof item === 'function') {
				item = item(context);
			}

			if (Array.isArray(item)) {
				yield * flatTraverse(item);
			} else if (typeof item === 'function') {
				throw new TypeError('A config function can only return an object or array.');
			} else {
				yield item;
			}
		}
	}

	return [...flatTraverse(items)];
}

/**
 * Determines if a given file path is matched by a config. If the config
 * has no `files` field, then it matches; otherwise, if a `files` field
 * is present then we match the globs in `files` and exclude any globs in
 * `ignores`.
 * @param {string} filePath The absolute file path to check.
 * @param {Object} config The config object to check.
 * @returns {boolean} True if the file path is matched by the config,
 *      false if not.
 */
function pathMatches(filePath, basePath, config) {

	// a config without a `files` field always matches
	if (!config.files) {
		return true;
	}

	// if files isn't an array, throw an error
	if (!Array.isArray(config.files) || config.files.length === 0) {
		throw new TypeError('The files key must be a non-empty array.');
	}

	const relativeFilePath = path.relative(basePath, filePath);

	// match both strings and functions
	const match = pattern => {
		if (isString(pattern)) {
			return minimatch(relativeFilePath, pattern, MINIMATCH_OPTIONS);
		}

		if (typeof pattern === 'function') {
			return pattern(filePath);
		}
	};

	// check for all matches to config.files
	let matches = config.files.some(pattern => {
		if (Array.isArray(pattern)) {
			return pattern.every(match);
		}

		return match(pattern);
	});

	/*
	 * If the file path matches the config.files patterns, then check to see
	 * if there are any files to ignore.
	 */
	if (matches && config.ignores) {
		matches = !config.ignores.some(pattern => {
			return minimatch(filePath, pattern, MINIMATCH_OPTIONS);
		});
	}

	return matches;
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
		throw new Error('ConfigArray must be normalized to perform this operation.');
	}
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

const ConfigArraySymbol = {
	isNormalized: Symbol('isNormalized'),
	configCache: Symbol('configCache'),
	schema: Symbol('schema'),
	finalizeConfig: Symbol('finalizeConfig'),
	preprocessConfig: Symbol('preprocessConfig')
};

/**
 * Represents an array of config objects and provides method for working with
 * those config objects.
 */
class ConfigArray extends Array {

	/**
	 * Creates a new instance of ConfigArray.
	 * @param {Iterable|Function|Object} configs An iterable yielding config
	 *      objects, or a config function, or a config object.
	 * @param {string} [options.basePath=""] The path of the config file
	 * @param {boolean} [options.normalized=false] Flag indicating if the
	 *      configs have already been normalized.
	 * @param {Object} [options.schema] The additional schema 
	 *      definitions to use for the ConfigArray schema.
	 */
	constructor(configs, { basePath = '', normalized = false, schema: customSchema } = {}) {
		super();

		/**
		 * Tracks if the array has been normalized.
		 * @property isNormalized
		 * @type boolean
		 * @private
		 */
		this[ConfigArraySymbol.isNormalized] = normalized;

		/**
		 * The schema used for validating and merging configs.
		 * @property schema
		 * @type ObjectSchema
		 * @private
		 */
		this[ConfigArraySymbol.schema] = new objectSchema.ObjectSchema({
			...customSchema,
			...baseSchema
		});

		/**
		 * The path of the config file that this array was loaded from.
		 * This is used to calculate filename matches.
		 * @property basePath
		 * @type string
		 */
		this.basePath = basePath;

		/**
		 * A cache to store calculated configs for faster repeat lookup.
		 * @property configCache
		 * @type Map
		 * @private
		 */
		this[ConfigArraySymbol.configCache] = new Map();

		// load the configs into this array
		if (Array.isArray(configs)) {
			this.push(...configs);
		} else {
			this.push(configs);
		}

	}

	/**
	 * Prevent normal array methods from creating a new `ConfigArray` instance.
	 * This is to ensure that methods such as `slice()` won't try to create a 
	 * new instance of `ConfigArray` behind the scenes as doing so may throw
	 * an error due to the different constructor signature.
	 * @returns {Function} The `Array` constructor.
	 */
	static get [Symbol.species]() {
		return Array;
	}

	/**
	 * Returns the `files` globs from every config object in the array.
	 * Negated patterns (those beginning with `!`) are not returned.
	 * This can be used to determine which files will be matched by a
	 * config array or to use as a glob pattern when no patterns are provided
	 * for a command line interface.
	 * @returns {string[]} An array of string patterns.
	 */
	get files() {

		assertNormalized(this);

		const result = [];

		for (const config of this) {
			if (config.files) {
				config.files.forEach(filePattern => {
					if (Array.isArray(filePattern)) {
						result.push(...filePattern.filter(pattern => {
							return isString(pattern) && !pattern.startsWith('!');
						}));
					} else if (isString(filePattern) && !filePattern.startsWith('!')) {
						result.push(filePattern);
					}
				});
			}
		}

		return result;
	}

	/**
	 * Returns the file globs that should always be ignored regardless of
	 * the matching `files` fields in any configs. This is necessary to mimic
	 * the behavior of things like .gitignore and .eslintignore, allowing a
	 * globbing operation to be faster.
	 * @returns {string[]} An array of string patterns to be ignored.
	 */
	get ignores() {

		assertNormalized(this);

		const result = [];

		for (const config of this) {
			if (config.ignores && !config.files) {
				result.push(...config.ignores.filter(isString));
			}
		}

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
	 * @param {ConfigContext} context The context object for config functions.
	 * @returns {ConfigArray} A new ConfigArray instance that is normalized.
	 */
	async normalize(context = {}) {

		if (!this.isNormalized()) {
			const normalizedConfigs = await normalize(this, context);
			this.length = 0;
			this.push(...normalizedConfigs.map(this[ConfigArraySymbol.preprocessConfig]));
			this[ConfigArraySymbol.isNormalized] = true;

			// prevent further changes
			Object.freeze(this);
		}

		return this;
	}

	/**
	 * Finalizes the state of a config before being cached and returned by
	 * `getConfig()`. Does nothing by default but is provided to be
	 * overridden by subclasses as necessary.
	 * @param {Object} config The config to finalize.
	 * @returns {Object} The finalized config.
	 */
	[ConfigArraySymbol.finalizeConfig](config) {
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
	[ConfigArraySymbol.preprocessConfig](config) {
		return config;
	}

	/**
	 * Returns the config object for a given file path.
	 * @param {string} filePath The complete path of a file to get a config for.
	 * @returns {Object} The config object for this file.
	 */
	getConfig(filePath) {

		assertNormalized(this);

		// first check the cache to avoid duplicate work
		let finalConfig = this[ConfigArraySymbol.configCache].get(filePath);

		if (finalConfig) {
			return finalConfig;
		}

		// No config found in cache, so calculate a new one

		const matchingConfigs = [];

		for (const config of this) {
			if (pathMatches(filePath, this.basePath, config)) {
				debug(`Matching config found for ${filePath}`);
				matchingConfigs.push(config);
			} else {
				debug(`No matching config found for ${filePath}`);
			}
		}

		finalConfig = matchingConfigs.reduce((result, config) => {
			return this[ConfigArraySymbol.schema].merge(result, config);
		}, {}, this);

		finalConfig = this[ConfigArraySymbol.finalizeConfig](finalConfig);

		this[ConfigArraySymbol.configCache].set(filePath, finalConfig);

		return finalConfig;
	}

}

exports.ConfigArray = ConfigArray;
exports.ConfigArraySymbol = ConfigArraySymbol;

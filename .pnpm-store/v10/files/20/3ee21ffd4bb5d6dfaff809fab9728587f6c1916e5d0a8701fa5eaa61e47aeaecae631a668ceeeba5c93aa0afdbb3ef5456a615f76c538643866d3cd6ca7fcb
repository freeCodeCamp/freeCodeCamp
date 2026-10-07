/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RequestShortener = require("../RequestShortener");

/** @typedef {import("../../declarations/WebpackOptions").StatsOptions} StatsOptions */
/** @typedef {import("../../declarations/WebpackOptions").StatsValue} StatsValue */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compilation").CreateStatsOptionsContext} CreateStatsOptionsContext */
/** @typedef {import("../Compilation").KnownNormalizedStatsOptions} KnownNormalizedStatsOptions */
/** @typedef {import("../Compilation").NormalizedStatsOptions} NormalizedStatsOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("./DefaultStatsFactoryPlugin").StatsError} StatsError */

/**
 * Processes the provided normalized stats option.
 * @param {Partial<NormalizedStatsOptions>} options options
 * @param {StatsOptions} defaults default options
 */
const applyDefaults = (options, defaults) => {
	for (const _k of Object.keys(defaults)) {
		const key = /** @type {keyof StatsOptions} */ (_k);
		if (typeof options[key] === "undefined") {
			options[/** @type {keyof NormalizedStatsOptions} */ (key)] =
				defaults[key];
		}
	}
};

/** @typedef {{ [Key in Exclude<StatsValue, boolean | EXPECTED_OBJECT | "normal">]: StatsOptions }} NamedPresets */

/** @type {NamedPresets} */
const NAMED_PRESETS = {
	verbose: {
		hash: true,
		builtAt: true,
		relatedAssets: true,
		entrypoints: true,
		chunkGroups: true,
		ids: true,
		modules: false,
		chunks: true,
		chunkRelations: true,
		chunkModules: true,
		dependentModules: true,
		chunkOrigins: true,
		depth: true,
		env: true,
		reasons: true,
		usedExports: true,
		providedExports: true,
		optimizationBailout: true,
		errorDetails: true,
		errorStack: true,
		errorCause: true,
		errorErrors: true,
		publicPath: true,
		logging: "verbose",
		orphanModules: true,
		runtimeModules: true,
		exclude: false,
		errorsSpace: Infinity,
		warningsSpace: Infinity,
		modulesSpace: Infinity,
		chunkModulesSpace: Infinity,
		assetsSpace: Infinity,
		reasonsSpace: Infinity,
		children: true
	},
	detailed: {
		hash: true,
		builtAt: true,
		relatedAssets: true,
		entrypoints: true,
		chunkGroups: true,
		ids: true,
		chunks: true,
		chunkRelations: true,
		chunkModules: false,
		chunkOrigins: true,
		depth: true,
		usedExports: true,
		providedExports: true,
		optimizationBailout: true,
		errorDetails: true,
		errorCause: true,
		errorErrors: true,
		publicPath: true,
		logging: true,
		runtimeModules: true,
		exclude: false,
		errorsSpace: 1000,
		warningsSpace: 1000,
		modulesSpace: 1000,
		assetsSpace: 1000,
		reasonsSpace: 1000
	},
	minimal: {
		all: false,
		version: true,
		timings: true,
		modules: true,
		errorsSpace: 0,
		warningsSpace: 0,
		modulesSpace: 0,
		assets: true,
		assetsSpace: 0,
		errors: true,
		errorsCount: true,
		warnings: true,
		warningsCount: true,
		logging: "warn"
	},
	"errors-only": {
		all: false,
		errors: true,
		errorsCount: true,
		errorsSpace: Infinity,
		moduleTrace: true,
		logging: "error"
	},
	"errors-warnings": {
		all: false,
		errors: true,
		errorsCount: true,
		errorsSpace: Infinity,
		warnings: true,
		warningsCount: true,
		warningsSpace: Infinity,
		logging: "warn"
	},
	summary: {
		all: false,
		version: true,
		errorsCount: true,
		warningsCount: true
	},
	none: {
		all: false
	}
};

/**
 * Returns true when enabled, otherwise false.
 * @param {Partial<NormalizedStatsOptions>} all stats options
 * @returns {boolean} true when enabled, otherwise false
 */
const NORMAL_ON = ({ all }) => all !== false;
/**
 * Returns true when enabled, otherwise false.
 * @param {Partial<NormalizedStatsOptions>} all stats options
 * @returns {boolean} true when enabled, otherwise false
 */
const NORMAL_OFF = ({ all }) => all === true;
/**
 * Returns true when enabled, otherwise false.
 * @param {Partial<NormalizedStatsOptions>} all stats options
 * @param {CreateStatsOptionsContext} forToString stats options context
 * @returns {boolean} true when enabled, otherwise false
 */
const ON_FOR_TO_STRING = ({ all }, { forToString }) =>
	forToString ? all !== false : all === true;
/**
 * Returns true when enabled, otherwise false.
 * @param {Partial<NormalizedStatsOptions>} all stats options
 * @param {CreateStatsOptionsContext} forToString stats options context
 * @returns {boolean} true when enabled, otherwise false
 */
const OFF_FOR_TO_STRING = ({ all }, { forToString }) =>
	forToString ? all === true : all !== false;
/**
 * Auto for to string.
 * @param {Partial<NormalizedStatsOptions>} all stats options
 * @param {CreateStatsOptionsContext} forToString stats options context
 * @returns {boolean | "auto"} true when enabled, otherwise false
 */
const AUTO_FOR_TO_STRING = ({ all }, { forToString }) => {
	if (all === false) return false;
	if (all === true) return true;
	if (forToString) return "auto";
	return true;
};

/** @typedef {keyof NormalizedStatsOptions} DefaultsKeys */
/** @typedef {{ [Key in DefaultsKeys]: (options: Partial<NormalizedStatsOptions>, context: CreateStatsOptionsContext, compilation: Compilation) => NormalizedStatsOptions[Key] | RequestShortener }} Defaults */

/** @type {Defaults} */
const DEFAULTS = {
	context: (options, context, compilation) => compilation.compiler.context,
	requestShortener: (options, context, compilation) =>
		compilation.compiler.context === options.context
			? compilation.requestShortener
			: new RequestShortener(
					/** @type {string} */
					(options.context),
					compilation.compiler.root
				),
	performance: NORMAL_ON,
	hash: OFF_FOR_TO_STRING,
	env: NORMAL_OFF,
	version: NORMAL_ON,
	timings: NORMAL_ON,
	builtAt: OFF_FOR_TO_STRING,
	assets: NORMAL_ON,
	entrypoints: AUTO_FOR_TO_STRING,
	chunkGroups: OFF_FOR_TO_STRING,
	chunkGroupAuxiliary: OFF_FOR_TO_STRING,
	chunkGroupChildren: OFF_FOR_TO_STRING,
	chunkGroupMaxAssets: (o, { forToString }) => (forToString ? 5 : Infinity),
	chunks: OFF_FOR_TO_STRING,
	chunkRelations: OFF_FOR_TO_STRING,
	chunkModules: ({ all, modules }) => {
		if (all === false) return false;
		if (all === true) return true;
		if (modules) return false;
		return true;
	},
	dependentModules: OFF_FOR_TO_STRING,
	chunkOrigins: OFF_FOR_TO_STRING,
	ids: OFF_FOR_TO_STRING,
	modules: ({ all, chunks, chunkModules }, { forToString }) => {
		if (all === false) return false;
		if (all === true) return true;
		if (forToString && chunks && chunkModules) return false;
		return true;
	},
	nestedModules: OFF_FOR_TO_STRING,
	groupModulesByType: ON_FOR_TO_STRING,
	groupModulesByCacheStatus: ON_FOR_TO_STRING,
	groupModulesByLayer: ON_FOR_TO_STRING,
	groupModulesByAttributes: ON_FOR_TO_STRING,
	groupModulesByPath: ON_FOR_TO_STRING,
	groupModulesByExtension: ON_FOR_TO_STRING,
	modulesSpace: (o, { forToString }) => (forToString ? 15 : Infinity),
	chunkModulesSpace: (o, { forToString }) => (forToString ? 10 : Infinity),
	nestedModulesSpace: (o, { forToString }) => (forToString ? 10 : Infinity),
	relatedAssets: OFF_FOR_TO_STRING,
	groupAssetsByEmitStatus: ON_FOR_TO_STRING,
	groupAssetsByInfo: ON_FOR_TO_STRING,
	groupAssetsByPath: ON_FOR_TO_STRING,
	groupAssetsByExtension: ON_FOR_TO_STRING,
	groupAssetsByChunk: ON_FOR_TO_STRING,
	assetsSpace: (o, { forToString }) => (forToString ? 15 : Infinity),
	orphanModules: OFF_FOR_TO_STRING,
	runtimeModules: ({ all, runtime }, { forToString }) =>
		runtime !== undefined
			? runtime
			: forToString
				? all === true
				: all !== false,
	cachedModules: ({ all, cached }, { forToString }) =>
		cached !== undefined ? cached : forToString ? all === true : all !== false,
	moduleAssets: OFF_FOR_TO_STRING,
	depth: OFF_FOR_TO_STRING,
	cachedAssets: OFF_FOR_TO_STRING,
	reasons: OFF_FOR_TO_STRING,
	reasonsSpace: (o, { forToString }) => (forToString ? 15 : Infinity),
	groupReasonsByOrigin: ON_FOR_TO_STRING,
	usedExports: OFF_FOR_TO_STRING,
	providedExports: OFF_FOR_TO_STRING,
	optimizationBailout: OFF_FOR_TO_STRING,
	children: OFF_FOR_TO_STRING,
	source: NORMAL_OFF,
	moduleTrace: NORMAL_ON,
	errors: NORMAL_ON,
	errorsCount: NORMAL_ON,
	errorDetails: AUTO_FOR_TO_STRING,
	errorStack: OFF_FOR_TO_STRING,
	errorCause: AUTO_FOR_TO_STRING,
	errorErrors: AUTO_FOR_TO_STRING,
	warnings: NORMAL_ON,
	warningsCount: NORMAL_ON,
	publicPath: OFF_FOR_TO_STRING,
	logging: ({ all }, { forToString }) =>
		forToString && all !== false ? "info" : false,
	loggingDebug: () => [],
	loggingTrace: OFF_FOR_TO_STRING,
	excludeModules: () => [],
	excludeAssets: () => [],
	modulesSort: () => "depth",
	chunkModulesSort: () => "name",
	nestedModulesSort: () => false,
	chunksSort: () => false,
	assetsSort: () => "!size",
	outputPath: OFF_FOR_TO_STRING,
	colors: () => false
};

/**
 * Defines the normalize function type used by this module.
 * @template T
 * @typedef {(value: T, ...args: EXPECTED_ANY[]) => boolean} NormalizeFunction
 */

/**
 * Returns normalize fn.
 * @template {string} T
 * @param {string | ({ test: (value: T) => boolean }) | NormalizeFunction<T> | boolean} item item to normalize
 * @returns {NormalizeFunction<T>} normalize fn
 */
const normalizeFilter = (item) => {
	if (typeof item === "string") {
		const regExp = new RegExp(
			`[\\\\/]${item.replace(/[-[\]{}()*+?.\\^$|]/g, "\\$&")}([\\\\/]|$|!|\\?)`
		);
		return (ident) => regExp.test(/** @type {T} */ (ident));
	}
	if (item && typeof item === "object" && typeof item.test === "function") {
		return (ident) => item.test(ident);
	}
	if (typeof item === "boolean") {
		return () => item;
	}

	return /** @type {NormalizeFunction<T>} */ (item);
};

/** @typedef {keyof (KnownNormalizedStatsOptions | StatsOptions)} NormalizerKeys */
/** @typedef {{ [Key in NormalizerKeys]?: (value: StatsOptions[Key]) => KnownNormalizedStatsOptions[Key] }} Normalizers */

/**
 * Defines the warning filter fn callback.
 * @callback WarningFilterFn
 * @param {StatsError} warning warning
 * @param {string} warningString warning string
 * @returns {boolean} result
 */

/** @type {Normalizers} */
const NORMALIZER = {
	excludeModules: (value) => {
		if (!Array.isArray(value)) {
			value = value
				? /** @type {KnownNormalizedStatsOptions["excludeModules"]} */ ([value])
				: [];
		}
		return value.map(normalizeFilter);
	},
	excludeAssets: (value) => {
		if (!Array.isArray(value)) {
			value = value ? [value] : [];
		}
		return value.map(normalizeFilter);
	},
	warningsFilter: (value) => {
		if (!Array.isArray(value)) {
			value = value ? [value] : [];
		}
		return value.map(
			/**
			 * Handles the warnings filter callback for this hook.
			 * @param {StatsOptions["warningsFilter"]} filter a warning filter
			 * @returns {WarningFilterFn} result
			 */
			(filter) => {
				if (typeof filter === "string") {
					return (warning, warningString) => warningString.includes(filter);
				}
				if (filter instanceof RegExp) {
					return (warning, warningString) => filter.test(warningString);
				}
				if (typeof filter === "function") {
					return filter;
				}
				throw new Error(
					`Can only filter warnings with Strings or RegExps. (Given: ${filter})`
				);
			}
		);
	},
	logging: (value) => {
		if (value === true) value = "log";
		return /** @type {KnownNormalizedStatsOptions["logging"]} */ (value);
	},
	loggingDebug: (value) => {
		if (!Array.isArray(value)) {
			value = value
				? /** @type {KnownNormalizedStatsOptions["loggingDebug"]} */ ([value])
				: [];
		}
		return value.map(normalizeFilter);
	}
};

const PLUGIN_NAME = "DefaultStatsPresetPlugin";

class DefaultStatsPresetPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			for (const key of Object.keys(NAMED_PRESETS)) {
				const defaults = NAMED_PRESETS[/** @type {keyof NamedPresets} */ (key)];
				compilation.hooks.statsPreset
					.for(key)
					.tap(PLUGIN_NAME, (options, _context) => {
						applyDefaults(options, defaults);
					});
			}
			compilation.hooks.statsNormalize.tap(PLUGIN_NAME, (options, context) => {
				for (const key of Object.keys(DEFAULTS)) {
					if (options[key] === undefined) {
						options[key] = DEFAULTS[/** @type {DefaultsKeys} */ (key)](
							options,
							context,
							compilation
						);
					}
				}
				for (const key of Object.keys(NORMALIZER)) {
					options[key] =
						/** @type {NonNullable<Normalizers[keyof Normalizers]>} */
						(NORMALIZER[/** @type {NormalizerKeys} */ (key)])(options[key]);
				}
			});
		});
	}
}

module.exports = DefaultStatsPresetPlugin;

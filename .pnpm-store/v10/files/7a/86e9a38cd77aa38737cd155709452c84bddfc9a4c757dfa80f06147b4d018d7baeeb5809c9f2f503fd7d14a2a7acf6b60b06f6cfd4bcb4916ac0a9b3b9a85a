/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RequestShortener = require("../RequestShortener");

/** @typedef {import("../../declarations/WebpackOptions").StatsOptions} StatsOptions */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compilation").CreateStatsOptionsContext} CreateStatsOptionsContext */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("./DefaultStatsFactoryPlugin").StatsError} StatsError */

/**
 * @param {StatsOptions} options options
 * @param {StatsOptions} defaults default options
 */
const applyDefaults = (options, defaults) => {
	for (const _k of Object.keys(defaults)) {
		const key = /** @type {keyof StatsOptions} */ (_k);
		if (typeof options[key] === "undefined") {
			/** @type {TODO} */
			(options)[key] = defaults[key];
		}
	}
};

/** @typedef {Record<string, StatsOptions>} NamedPresets */
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
 * @param {StatsOptions} all stats option
 * @returns {boolean} true when enabled, otherwise false
 */
const NORMAL_ON = ({ all }) => all !== false;
/**
 * @param {StatsOptions} all stats option
 * @returns {boolean} true when enabled, otherwise false
 */
const NORMAL_OFF = ({ all }) => all === true;
/**
 * @param {StatsOptions} all stats option
 * @param {CreateStatsOptionsContext} forToString stats options context
 * @returns {boolean} true when enabled, otherwise false
 */
const ON_FOR_TO_STRING = ({ all }, { forToString }) =>
	forToString ? all !== false : all === true;
/**
 * @param {StatsOptions} all stats option
 * @param {CreateStatsOptionsContext} forToString stats options context
 * @returns {boolean} true when enabled, otherwise false
 */
const OFF_FOR_TO_STRING = ({ all }, { forToString }) =>
	forToString ? all === true : all !== false;
/**
 * @param {StatsOptions} all stats option
 * @param {CreateStatsOptionsContext} forToString stats options context
 * @returns {boolean | "auto"} true when enabled, otherwise false
 */
const AUTO_FOR_TO_STRING = ({ all }, { forToString }) => {
	if (all === false) return false;
	if (all === true) return true;
	if (forToString) return "auto";
	return true;
};

/** @typedef {Record<string, (options: StatsOptions, context: CreateStatsOptionsContext, compilation: Compilation) => StatsOptions[keyof StatsOptions] | RequestShortener>} Defaults */

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
 * @param {string | ({ test: function(string): boolean }) | (function(string): boolean) | boolean} item item to normalize
 * @returns {(function(string): boolean) | undefined} normalize fn
 */
const normalizeFilter = item => {
	if (typeof item === "string") {
		const regExp = new RegExp(
			`[\\\\/]${item.replace(/[-[\]{}()*+?.\\^$|]/g, "\\$&")}([\\\\/]|$|!|\\?)`
		);
		return ident => regExp.test(ident);
	}
	if (item && typeof item === "object" && typeof item.test === "function") {
		return ident => item.test(ident);
	}
	if (typeof item === "function") {
		return item;
	}
	if (typeof item === "boolean") {
		return () => item;
	}
};

/** @type {Record<string, function(any): any[]>} */
const NORMALIZER = {
	excludeModules: value => {
		if (!Array.isArray(value)) {
			value = value ? [value] : [];
		}
		return value.map(normalizeFilter);
	},
	excludeAssets: value => {
		if (!Array.isArray(value)) {
			value = value ? [value] : [];
		}
		return value.map(normalizeFilter);
	},
	warningsFilter: value => {
		if (!Array.isArray(value)) {
			value = value ? [value] : [];
		}
		/**
		 * @callback WarningFilterFn
		 * @param {StatsError} warning warning
		 * @param {string} warningString warning string
		 * @returns {boolean} result
		 */
		return value.map(
			/**
			 * @param {StatsOptions["warningsFilter"]} filter a warning filter
			 * @returns {WarningFilterFn} result
			 */
			filter => {
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
	logging: value => {
		if (value === true) value = "log";
		return value;
	},
	loggingDebug: value => {
		if (!Array.isArray(value)) {
			value = value ? [value] : [];
		}
		return value.map(normalizeFilter);
	}
};

class DefaultStatsPresetPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap("DefaultStatsPresetPlugin", compilation => {
			for (const key of Object.keys(NAMED_PRESETS)) {
				const defaults = NAMED_PRESETS[/** @type {keyof NamedPresets} */ (key)];
				compilation.hooks.statsPreset
					.for(key)
					.tap("DefaultStatsPresetPlugin", (options, context) => {
						applyDefaults(options, defaults);
					});
			}
			compilation.hooks.statsNormalize.tap(
				"DefaultStatsPresetPlugin",
				(options, context) => {
					for (const key of Object.keys(DEFAULTS)) {
						if (options[key] === undefined)
							options[key] = DEFAULTS[key](options, context, compilation);
					}
					for (const key of Object.keys(NORMALIZER)) {
						options[key] = NORMALIZER[key](options[key]);
					}
				}
			);
		});
	}
}
module.exports = DefaultStatsPresetPlugin;

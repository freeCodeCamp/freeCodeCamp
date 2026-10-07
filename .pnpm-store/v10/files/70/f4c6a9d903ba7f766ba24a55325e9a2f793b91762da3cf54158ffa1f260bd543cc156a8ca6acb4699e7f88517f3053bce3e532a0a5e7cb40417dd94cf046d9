/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");
const memoize = require("./util/memoize");

/** @typedef {import("../declarations/WebpackOptions").Entry} Entry */
/** @typedef {import("../declarations/WebpackOptions").EntryNormalized} EntryNormalized */
/** @typedef {import("../declarations/WebpackOptions").EntryObject} EntryObject */
/** @typedef {import("../declarations/WebpackOptions").ExternalItemFunctionData} ExternalItemFunctionData */
/** @typedef {import("../declarations/WebpackOptions").ExternalItemObjectKnown} ExternalItemObjectKnown */
/** @typedef {import("../declarations/WebpackOptions").ExternalItemObjectUnknown} ExternalItemObjectUnknown */
/** @typedef {import("../declarations/WebpackOptions").ExternalItemValue} ExternalItemValue */
/** @typedef {import("../declarations/WebpackOptions").Externals} Externals */
/** @typedef {import("../declarations/WebpackOptions").FileCacheOptions} FileCacheOptions */
/** @typedef {import("../declarations/WebpackOptions").LibraryOptions} LibraryOptions */
/** @typedef {import("../declarations/WebpackOptions").MemoryCacheOptions} MemoryCacheOptions */
/** @typedef {import("../declarations/WebpackOptions").ModuleOptions} ModuleOptions */
/** @typedef {import("../declarations/WebpackOptions").ResolveOptions} ResolveOptions */
/** @typedef {import("../declarations/WebpackOptions").RuleSetCondition} RuleSetCondition */
/** @typedef {import("../declarations/WebpackOptions").RuleSetConditionAbsolute} RuleSetConditionAbsolute */
/** @typedef {import("../declarations/WebpackOptions").RuleSetRule} RuleSetRule */
/** @typedef {import("../declarations/WebpackOptions").RuleSetUse} RuleSetUse */
/** @typedef {import("../declarations/WebpackOptions").RuleSetUseItem} RuleSetUseItem */
/** @typedef {import("../declarations/WebpackOptions").StatsOptions} StatsOptions */
/** @typedef {import("../declarations/WebpackOptions").WebpackOptions} Configuration */
/** @typedef {import("../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptionsNormalized */
/** @typedef {import("../declarations/WebpackOptions").WebpackPluginFunction} WebpackPluginFunction */
/** @typedef {import("../declarations/WebpackOptions").WebpackPluginInstance} WebpackPluginInstance */
/** @typedef {import("./ChunkGroup")} ChunkGroup */
/** @typedef {import("./Compilation").Asset} Asset */
/** @typedef {import("./Compilation").AssetInfo} AssetInfo */
/** @typedef {import("./Compilation").EntryOptions} EntryOptions */
/** @typedef {import("./Compilation").PathData} PathData */
/** @typedef {import("./Compiler").AssetEmittedInfo} AssetEmittedInfo */
/** @typedef {import("./MultiCompiler").MultiCompilerOptions} MultiCompilerOptions */
/** @typedef {import("./MultiStats")} MultiStats */
/** @typedef {import("./NormalModuleFactory").ResolveData} ResolveData */
/** @typedef {import("./Parser").ParserState} ParserState */
/** @typedef {import("./ResolverFactory").ResolvePluginInstance} ResolvePluginInstance */
/** @typedef {import("./ResolverFactory").Resolver} Resolver */
/** @typedef {import("./Watching")} Watching */
/** @typedef {import("./cli").Argument} Argument */
/** @typedef {import("./cli").Problem} Problem */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsAsset} StatsAsset */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsChunk} StatsChunk */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsChunkGroup} StatsChunkGroup */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsChunkOrigin} StatsChunkOrigin */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsCompilation} StatsCompilation */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsError} StatsError */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsLogging} StatsLogging */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsLoggingEntry} StatsLoggingEntry */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsModule} StatsModule */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsModuleIssuer} StatsModuleIssuer */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsModuleReason} StatsModuleReason */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsModuleTraceDependency} StatsModuleTraceDependency */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsModuleTraceItem} StatsModuleTraceItem */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsProfile} StatsProfile */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("./util/fs").OutputFileSystem} OutputFileSystem */

/**
 * @template {Function} T
 * @param {function(): T} factory factory function
 * @returns {T} function
 */
const lazyFunction = factory => {
	const fac = memoize(factory);
	const f = /** @type {any} */ (
		/**
		 * @param {...any} args args
		 * @returns {T} result
		 */
		(...args) => fac()(...args)
	);
	return /** @type {T} */ (f);
};

/**
 * @template A
 * @template B
 * @param {A} obj input a
 * @param {B} exports input b
 * @returns {A & B} merged
 */
const mergeExports = (obj, exports) => {
	const descriptors = Object.getOwnPropertyDescriptors(exports);
	for (const name of Object.keys(descriptors)) {
		const descriptor = descriptors[name];
		if (descriptor.get) {
			const fn = descriptor.get;
			Object.defineProperty(obj, name, {
				configurable: false,
				enumerable: true,
				get: memoize(fn)
			});
		} else if (typeof descriptor.value === "object") {
			Object.defineProperty(obj, name, {
				configurable: false,
				enumerable: true,
				writable: false,
				value: mergeExports({}, descriptor.value)
			});
		} else {
			throw new Error(
				"Exposed values must be either a getter or an nested object"
			);
		}
	}
	return /** @type {A & B} */ (Object.freeze(obj));
};

const fn = lazyFunction(() => require("./webpack"));
module.exports = mergeExports(fn, {
	get webpack() {
		return require("./webpack");
	},
	/**
	 * @returns {function(Configuration | Configuration[]): void} validate fn
	 */
	get validate() {
		const webpackOptionsSchemaCheck = require("../schemas/WebpackOptions.check.js");
		const getRealValidate = memoize(
			/**
			 * @returns {function(Configuration | Configuration[]): void} validate fn
			 */
			() => {
				const validateSchema = require("./validateSchema");
				const webpackOptionsSchema = require("../schemas/WebpackOptions.json");
				return options => validateSchema(webpackOptionsSchema, options);
			}
		);
		return options => {
			if (!webpackOptionsSchemaCheck(/** @type {TODO} */ (options)))
				getRealValidate()(options);
		};
	},
	get validateSchema() {
		const validateSchema = require("./validateSchema");
		return validateSchema;
	},
	get version() {
		return /** @type {string} */ (require("../package.json").version);
	},

	get cli() {
		return require("./cli");
	},
	get AutomaticPrefetchPlugin() {
		return require("./AutomaticPrefetchPlugin");
	},
	get AsyncDependenciesBlock() {
		return require("./AsyncDependenciesBlock");
	},
	get BannerPlugin() {
		return require("./BannerPlugin");
	},
	get Cache() {
		return require("./Cache");
	},
	get Chunk() {
		return require("./Chunk");
	},
	get ChunkGraph() {
		return require("./ChunkGraph");
	},
	get CleanPlugin() {
		return require("./CleanPlugin");
	},
	get Compilation() {
		return require("./Compilation");
	},
	get Compiler() {
		return require("./Compiler");
	},
	get ConcatenationScope() {
		return require("./ConcatenationScope");
	},
	get ContextExclusionPlugin() {
		return require("./ContextExclusionPlugin");
	},
	get ContextReplacementPlugin() {
		return require("./ContextReplacementPlugin");
	},
	get DefinePlugin() {
		return require("./DefinePlugin");
	},
	get DelegatedPlugin() {
		return require("./DelegatedPlugin");
	},
	get Dependency() {
		return require("./Dependency");
	},
	get DllPlugin() {
		return require("./DllPlugin");
	},
	get DllReferencePlugin() {
		return require("./DllReferencePlugin");
	},
	get DynamicEntryPlugin() {
		return require("./DynamicEntryPlugin");
	},
	get EntryOptionPlugin() {
		return require("./EntryOptionPlugin");
	},
	get EntryPlugin() {
		return require("./EntryPlugin");
	},
	get EnvironmentPlugin() {
		return require("./EnvironmentPlugin");
	},
	get EvalDevToolModulePlugin() {
		return require("./EvalDevToolModulePlugin");
	},
	get EvalSourceMapDevToolPlugin() {
		return require("./EvalSourceMapDevToolPlugin");
	},
	get ExternalModule() {
		return require("./ExternalModule");
	},
	get ExternalsPlugin() {
		return require("./ExternalsPlugin");
	},
	get Generator() {
		return require("./Generator");
	},
	get HotUpdateChunk() {
		return require("./HotUpdateChunk");
	},
	get HotModuleReplacementPlugin() {
		return require("./HotModuleReplacementPlugin");
	},
	get InitFragment() {
		return require("./InitFragment");
	},
	get IgnorePlugin() {
		return require("./IgnorePlugin");
	},
	get JavascriptModulesPlugin() {
		return util.deprecate(
			() => require("./javascript/JavascriptModulesPlugin"),
			"webpack.JavascriptModulesPlugin has moved to webpack.javascript.JavascriptModulesPlugin",
			"DEP_WEBPACK_JAVASCRIPT_MODULES_PLUGIN"
		)();
	},
	get LibManifestPlugin() {
		return require("./LibManifestPlugin");
	},
	get LibraryTemplatePlugin() {
		return util.deprecate(
			() => require("./LibraryTemplatePlugin"),
			"webpack.LibraryTemplatePlugin is deprecated and has been replaced by compilation.outputOptions.library or compilation.addEntry + passing a library option",
			"DEP_WEBPACK_LIBRARY_TEMPLATE_PLUGIN"
		)();
	},
	get LoaderOptionsPlugin() {
		return require("./LoaderOptionsPlugin");
	},
	get LoaderTargetPlugin() {
		return require("./LoaderTargetPlugin");
	},
	get Module() {
		return require("./Module");
	},
	get ModuleFilenameHelpers() {
		return require("./ModuleFilenameHelpers");
	},
	get ModuleGraph() {
		return require("./ModuleGraph");
	},
	get ModuleGraphConnection() {
		return require("./ModuleGraphConnection");
	},
	get NoEmitOnErrorsPlugin() {
		return require("./NoEmitOnErrorsPlugin");
	},
	get NormalModule() {
		return require("./NormalModule");
	},
	get NormalModuleReplacementPlugin() {
		return require("./NormalModuleReplacementPlugin");
	},
	get MultiCompiler() {
		return require("./MultiCompiler");
	},
	get OptimizationStages() {
		return require("./OptimizationStages");
	},
	get Parser() {
		return require("./Parser");
	},
	get PlatformPlugin() {
		return require("./PlatformPlugin");
	},
	get PrefetchPlugin() {
		return require("./PrefetchPlugin");
	},
	get ProgressPlugin() {
		return require("./ProgressPlugin");
	},
	get ProvidePlugin() {
		return require("./ProvidePlugin");
	},
	get RuntimeGlobals() {
		return require("./RuntimeGlobals");
	},
	get RuntimeModule() {
		return require("./RuntimeModule");
	},
	get SingleEntryPlugin() {
		return util.deprecate(
			() => require("./EntryPlugin"),
			"SingleEntryPlugin was renamed to EntryPlugin",
			"DEP_WEBPACK_SINGLE_ENTRY_PLUGIN"
		)();
	},
	get SourceMapDevToolPlugin() {
		return require("./SourceMapDevToolPlugin");
	},
	get Stats() {
		return require("./Stats");
	},
	get Template() {
		return require("./Template");
	},
	get UsageState() {
		return require("./ExportsInfo").UsageState;
	},
	get WatchIgnorePlugin() {
		return require("./WatchIgnorePlugin");
	},
	get WebpackError() {
		return require("./WebpackError");
	},
	get WebpackOptionsApply() {
		return require("./WebpackOptionsApply");
	},
	get WebpackOptionsDefaulter() {
		return util.deprecate(
			() => require("./WebpackOptionsDefaulter"),
			"webpack.WebpackOptionsDefaulter is deprecated and has been replaced by webpack.config.getNormalizedWebpackOptions and webpack.config.applyWebpackOptionsDefaults",
			"DEP_WEBPACK_OPTIONS_DEFAULTER"
		)();
	},
	// TODO webpack 6 deprecate
	get WebpackOptionsValidationError() {
		return require("schema-utils").ValidationError;
	},
	get ValidationError() {
		return require("schema-utils").ValidationError;
	},

	cache: {
		get MemoryCachePlugin() {
			return require("./cache/MemoryCachePlugin");
		}
	},

	config: {
		get getNormalizedWebpackOptions() {
			return require("./config/normalization").getNormalizedWebpackOptions;
		},
		get applyWebpackOptionsDefaults() {
			return require("./config/defaults").applyWebpackOptionsDefaults;
		}
	},

	dependencies: {
		get ModuleDependency() {
			return require("./dependencies/ModuleDependency");
		},
		get HarmonyImportDependency() {
			return require("./dependencies/HarmonyImportDependency");
		},
		get ConstDependency() {
			return require("./dependencies/ConstDependency");
		},
		get NullDependency() {
			return require("./dependencies/NullDependency");
		}
	},

	ids: {
		get ChunkModuleIdRangePlugin() {
			return require("./ids/ChunkModuleIdRangePlugin");
		},
		get NaturalModuleIdsPlugin() {
			return require("./ids/NaturalModuleIdsPlugin");
		},
		get OccurrenceModuleIdsPlugin() {
			return require("./ids/OccurrenceModuleIdsPlugin");
		},
		get NamedModuleIdsPlugin() {
			return require("./ids/NamedModuleIdsPlugin");
		},
		get DeterministicChunkIdsPlugin() {
			return require("./ids/DeterministicChunkIdsPlugin");
		},
		get DeterministicModuleIdsPlugin() {
			return require("./ids/DeterministicModuleIdsPlugin");
		},
		get NamedChunkIdsPlugin() {
			return require("./ids/NamedChunkIdsPlugin");
		},
		get OccurrenceChunkIdsPlugin() {
			return require("./ids/OccurrenceChunkIdsPlugin");
		},
		get HashedModuleIdsPlugin() {
			return require("./ids/HashedModuleIdsPlugin");
		}
	},

	javascript: {
		get EnableChunkLoadingPlugin() {
			return require("./javascript/EnableChunkLoadingPlugin");
		},
		get JavascriptModulesPlugin() {
			return require("./javascript/JavascriptModulesPlugin");
		},
		get JavascriptParser() {
			return require("./javascript/JavascriptParser");
		}
	},

	optimize: {
		get AggressiveMergingPlugin() {
			return require("./optimize/AggressiveMergingPlugin");
		},
		get AggressiveSplittingPlugin() {
			return util.deprecate(
				() => require("./optimize/AggressiveSplittingPlugin"),
				"AggressiveSplittingPlugin is deprecated in favor of SplitChunksPlugin",
				"DEP_WEBPACK_AGGRESSIVE_SPLITTING_PLUGIN"
			)();
		},
		get InnerGraph() {
			return require("./optimize/InnerGraph");
		},
		get LimitChunkCountPlugin() {
			return require("./optimize/LimitChunkCountPlugin");
		},
		get MergeDuplicateChunksPlugin() {
			return require("./optimize/MergeDuplicateChunksPlugin.js");
		},
		get MinChunkSizePlugin() {
			return require("./optimize/MinChunkSizePlugin");
		},
		get ModuleConcatenationPlugin() {
			return require("./optimize/ModuleConcatenationPlugin");
		},
		get RealContentHashPlugin() {
			return require("./optimize/RealContentHashPlugin");
		},
		get RuntimeChunkPlugin() {
			return require("./optimize/RuntimeChunkPlugin");
		},
		get SideEffectsFlagPlugin() {
			return require("./optimize/SideEffectsFlagPlugin");
		},
		get SplitChunksPlugin() {
			return require("./optimize/SplitChunksPlugin");
		}
	},

	runtime: {
		get GetChunkFilenameRuntimeModule() {
			return require("./runtime/GetChunkFilenameRuntimeModule");
		},
		get LoadScriptRuntimeModule() {
			return require("./runtime/LoadScriptRuntimeModule");
		}
	},

	prefetch: {
		get ChunkPrefetchPreloadPlugin() {
			return require("./prefetch/ChunkPrefetchPreloadPlugin");
		}
	},

	web: {
		get FetchCompileWasmPlugin() {
			return require("./web/FetchCompileWasmPlugin");
		},
		get FetchCompileAsyncWasmPlugin() {
			return require("./web/FetchCompileAsyncWasmPlugin");
		},
		get JsonpChunkLoadingRuntimeModule() {
			return require("./web/JsonpChunkLoadingRuntimeModule");
		},
		get JsonpTemplatePlugin() {
			return require("./web/JsonpTemplatePlugin");
		},
		get CssLoadingRuntimeModule() {
			return require("./css/CssLoadingRuntimeModule");
		}
	},

	esm: {
		get ModuleChunkLoadingRuntimeModule() {
			return require("./esm/ModuleChunkLoadingRuntimeModule");
		}
	},

	webworker: {
		get WebWorkerTemplatePlugin() {
			return require("./webworker/WebWorkerTemplatePlugin");
		}
	},

	node: {
		get NodeEnvironmentPlugin() {
			return require("./node/NodeEnvironmentPlugin");
		},
		get NodeSourcePlugin() {
			return require("./node/NodeSourcePlugin");
		},
		get NodeTargetPlugin() {
			return require("./node/NodeTargetPlugin");
		},
		get NodeTemplatePlugin() {
			return require("./node/NodeTemplatePlugin");
		},
		get ReadFileCompileWasmPlugin() {
			return require("./node/ReadFileCompileWasmPlugin");
		},
		get ReadFileCompileAsyncWasmPlugin() {
			return require("./node/ReadFileCompileAsyncWasmPlugin");
		}
	},

	electron: {
		get ElectronTargetPlugin() {
			return require("./electron/ElectronTargetPlugin");
		}
	},

	wasm: {
		get AsyncWebAssemblyModulesPlugin() {
			return require("./wasm-async/AsyncWebAssemblyModulesPlugin");
		},
		get EnableWasmLoadingPlugin() {
			return require("./wasm/EnableWasmLoadingPlugin");
		}
	},

	css: {
		get CssModulesPlugin() {
			return require("./css/CssModulesPlugin");
		}
	},

	library: {
		get AbstractLibraryPlugin() {
			return require("./library/AbstractLibraryPlugin");
		},
		get EnableLibraryPlugin() {
			return require("./library/EnableLibraryPlugin");
		}
	},

	container: {
		get ContainerPlugin() {
			return require("./container/ContainerPlugin");
		},
		get ContainerReferencePlugin() {
			return require("./container/ContainerReferencePlugin");
		},
		get ModuleFederationPlugin() {
			return require("./container/ModuleFederationPlugin");
		},
		get scope() {
			return require("./container/options").scope;
		}
	},

	sharing: {
		get ConsumeSharedPlugin() {
			return require("./sharing/ConsumeSharedPlugin");
		},
		get ProvideSharedPlugin() {
			return require("./sharing/ProvideSharedPlugin");
		},
		get SharePlugin() {
			return require("./sharing/SharePlugin");
		},
		get scope() {
			return require("./container/options").scope;
		}
	},

	debug: {
		get ProfilingPlugin() {
			return require("./debug/ProfilingPlugin");
		}
	},

	util: {
		get createHash() {
			return require("./util/createHash");
		},
		get comparators() {
			return require("./util/comparators");
		},
		get runtime() {
			return require("./util/runtime");
		},
		get serialization() {
			return require("./util/serialization");
		},
		get cleverMerge() {
			return require("./util/cleverMerge").cachedCleverMerge;
		},
		get LazySet() {
			return require("./util/LazySet");
		},
		get compileBooleanMatcher() {
			return require("./util/compileBooleanMatcher");
		}
	},

	get sources() {
		return require("webpack-sources");
	},

	experiments: {
		schemes: {
			get HttpUriPlugin() {
				return require("./schemes/HttpUriPlugin");
			}
		},
		ids: {
			get SyncModuleIdsPlugin() {
				return require("./ids/SyncModuleIdsPlugin");
			}
		}
	}
});

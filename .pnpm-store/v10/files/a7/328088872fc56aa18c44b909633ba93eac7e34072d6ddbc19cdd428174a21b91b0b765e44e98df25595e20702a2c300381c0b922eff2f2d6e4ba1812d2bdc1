/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");
const asyncLib = require("neo-async");
const {
	AsyncParallelHook,
	AsyncSeriesBailHook,
	AsyncSeriesHook,
	HookMap,
	SyncBailHook,
	SyncHook,
	SyncWaterfallHook
} = require("tapable");
const { CachedSource } = require("webpack-sources");
const { MultiItemCache } = require("./CacheFacade");
const Chunk = require("./Chunk");
const ChunkGraph = require("./ChunkGraph");
const ChunkGroup = require("./ChunkGroup");
const ChunkRenderError = require("./ChunkRenderError");
const ChunkTemplate = require("./ChunkTemplate");
const CodeGenerationError = require("./CodeGenerationError");
const CodeGenerationResults = require("./CodeGenerationResults");
const Dependency = require("./Dependency");
const DependencyTemplates = require("./DependencyTemplates");
const Entrypoint = require("./Entrypoint");
const ErrorHelpers = require("./ErrorHelpers");
const FileSystemInfo = require("./FileSystemInfo");
const {
	connectChunkGroupAndChunk,
	connectChunkGroupParentAndChild,
	connectEntrypointAndDependOn
} = require("./GraphHelpers");
const {
	makeWebpackError,
	tryRunOrWebpackError
} = require("./HookWebpackError");
const MainTemplate = require("./MainTemplate");
const Module = require("./Module");
const ModuleDependencyError = require("./ModuleDependencyError");
const ModuleDependencyWarning = require("./ModuleDependencyWarning");
const ModuleGraph = require("./ModuleGraph");
const ModuleHashingError = require("./ModuleHashingError");
const ModuleNotFoundError = require("./ModuleNotFoundError");
const ModuleProfile = require("./ModuleProfile");
const ModuleRestoreError = require("./ModuleRestoreError");
const ModuleStoreError = require("./ModuleStoreError");
const ModuleTemplate = require("./ModuleTemplate");
const { WEBPACK_MODULE_TYPE_RUNTIME } = require("./ModuleTypeConstants");
const RuntimeGlobals = require("./RuntimeGlobals");
const RuntimeTemplate = require("./RuntimeTemplate");
const Stats = require("./Stats");
const WebpackError = require("./WebpackError");
const buildChunkGraph = require("./buildChunkGraph");
const BuildCycleError = require("./errors/BuildCycleError");
const { LogType, Logger } = require("./logging/Logger");
const StatsFactory = require("./stats/StatsFactory");
const StatsPrinter = require("./stats/StatsPrinter");
const { equals: arrayEquals } = require("./util/ArrayHelpers");
const AsyncQueue = require("./util/AsyncQueue");
const LazySet = require("./util/LazySet");
const { getOrInsert } = require("./util/MapHelpers");
const WeakTupleMap = require("./util/WeakTupleMap");
const { cachedCleverMerge } = require("./util/cleverMerge");
const {
	compareIds,
	compareLocations,
	compareModulesByIdentifier,
	compareSelect,
	compareStringsNumeric,
	concatComparators
} = require("./util/comparators");
const createHash = require("./util/createHash");
const {
	arrayToSetDeprecation,
	createFakeHook,
	soonFrozenObjectDeprecation
} = require("./util/deprecation");
const processAsyncTree = require("./util/processAsyncTree");
const { getRuntimeKey } = require("./util/runtime");
const { isSourceEqual } = require("./util/source");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../declarations/WebpackOptions").OutputNormalized} OutputOptions */
/** @typedef {import("../declarations/WebpackOptions").HashFunction} HashFunction */
/** @typedef {import("../declarations/WebpackOptions").HashDigest} HashDigest */
/** @typedef {import("../declarations/WebpackOptions").HashDigestLength} HashDigestLength */
/** @typedef {import("../declarations/WebpackOptions").StatsOptions} StatsOptions */
/** @typedef {import("../declarations/WebpackOptions").Plugins} Plugins */
/** @typedef {import("./config/defaults").WebpackOptionsNormalizedWithDefaults} WebpackOptions */
/** @typedef {import("./config/defaults").OutputNormalizedWithDefaults} OutputOptionsWithDefaults */
/** @typedef {import("./AsyncDependenciesBlock")} AsyncDependenciesBlock */
/** @typedef {import("./Cache")} Cache */
/** @typedef {import("./CacheFacade")} CacheFacade */
/** @typedef {import("./Chunk").ChunkName} ChunkName */
/** @typedef {import("./Chunk").ChunkId} ChunkId */
/** @typedef {import("./ChunkGroup").ChunkGroupOptions} ChunkGroupOptions */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Compiler").CompilationParams} CompilationParams */
/** @typedef {import("./Compiler").MemCache} MemCache */
/** @typedef {import("./Compiler").WeakReferences} WeakReferences */
/** @typedef {import("./Compiler").ModuleMemCachesItem} ModuleMemCachesItem */
/** @typedef {import("./Compiler").Records} Records */
/** @typedef {import("./DependenciesBlock")} DependenciesBlock */
/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("./Dependency").ReferencedExports} ReferencedExports */
/** @typedef {import("./Entrypoint").EntryOptions} EntryOptions */
/** @typedef {import("./Module").NameForCondition} NameForCondition */
/** @typedef {import("./Module").BuildInfo} BuildInfo */
/** @typedef {import("./Module").ValueCacheVersions} ValueCacheVersions */
/** @typedef {import("./Module").RuntimeRequirements} RuntimeRequirements */
/** @typedef {import("./NormalModule").NormalModuleCompilationHooks} NormalModuleCompilationHooks */
/** @typedef {import("./Module").FactoryMeta} FactoryMeta */
/** @typedef {import("./Module").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("./ModuleFactory")} ModuleFactory */
/** @typedef {import("../declarations/WebpackOptions").ResolveOptions} ResolveOptions */
/** @typedef {import("./ChunkGraph").ModuleId} ModuleId */
/** @typedef {import("./ModuleGraphConnection")} ModuleGraphConnection */
/** @typedef {import("./ModuleFactory").ModuleFactoryCreateDataContextInfo} ModuleFactoryCreateDataContextInfo */
/** @typedef {import("./ModuleFactory").ModuleFactoryResult} ModuleFactoryResult */
/** @typedef {import("./NormalModule")} NormalModule */
/** @typedef {import("./NormalModule").AnyLoaderContext} AnyLoaderContext */
/** @typedef {import("./NormalModule").ParserOptions} ParserOptions */
/** @typedef {import("./NormalModule").GeneratorOptions} GeneratorOptions */
/** @typedef {import("./RequestShortener")} RequestShortener */
/** @typedef {import("./RuntimeModule")} RuntimeModule */
/** @typedef {import("./Template").RenderManifestEntry} RenderManifestEntry */
/** @typedef {import("./Template").RenderManifestOptions} RenderManifestOptions */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsAsset} StatsAsset */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsError} StatsError */
/** @typedef {import("./stats/DefaultStatsFactoryPlugin").StatsModule} StatsModule */
/** @typedef {import("./TemplatedPathPlugin").TemplatePath} TemplatePath */
/** @typedef {import("./util/Hash")} Hash */

/**
 * Defines the shared type used by this module.
 * @template T
 * @typedef {import("tapable").AsArray<T>} AsArray<T>
 */

/**
 * Defines the shared type used by this module.
 * @template T
 * @typedef {import("./util/deprecation").FakeHook<T>} FakeHook<T>
 */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */

/**
 * Defines the callback callback.
 * @callback Callback
 * @param {(WebpackError | null)=} err
 * @returns {void}
 */

/**
 * Defines the module callback callback.
 * @callback ModuleCallback
 * @param {WebpackError | null=} err
 * @param {Module | null=} result
 * @returns {void}
 */

/**
 * Defines the module factory result callback callback.
 * @callback ModuleFactoryResultCallback
 * @param {WebpackError | null=} err
 * @param {ModuleFactoryResult | null=} result
 * @returns {void}
 */

/**
 * Defines the module or module factory result callback callback.
 * @callback ModuleOrModuleFactoryResultCallback
 * @param {WebpackError | null=} err
 * @param {Module | ModuleFactoryResult | null=} result
 * @returns {void}
 */

/**
 * Defines the execute module callback callback.
 * @callback ExecuteModuleCallback
 * @param {WebpackError | null=} err
 * @param {ExecuteModuleResult | null=} result
 * @returns {void}
 */

/** @typedef {new (...args: EXPECTED_ANY[]) => Dependency} DependencyConstructor */

/** @typedef {Record<string, Source>} CompilationAssets */

/**
 * Defines the available modules chunk group mapping type used by this module.
 * @typedef {object} AvailableModulesChunkGroupMapping
 * @property {ChunkGroup} chunkGroup
 * @property {Set<Module>} availableModules
 * @property {boolean} needCopy
 */

/**
 * Defines the dependencies block like type used by this module.
 * @typedef {object} DependenciesBlockLike
 * @property {Dependency[]} dependencies
 * @property {AsyncDependenciesBlock[]} blocks
 */

/** @typedef {Set<Chunk>} Chunks */

/**
 * Defines the chunk path data type used by this module.
 * @typedef {object} ChunkPathData
 * @property {string | number} id
 * @property {string=} name
 * @property {string} hash
 * @property {HashWithLengthFunction=} hashWithLength
 * @property {(Record<string, string>)=} contentHash
 * @property {(Record<string, HashWithLengthFunction>)=} contentHashWithLength
 */

/**
 * Defines the chunk hash context type used by this module.
 * @typedef {object} ChunkHashContext
 * @property {CodeGenerationResults} codeGenerationResults results of code generation
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {ModuleGraph} moduleGraph the module graph
 * @property {ChunkGraph} chunkGraph the chunk graph
 */

/**
 * Defines the runtime requirements context type used by this module.
 * @typedef {object} RuntimeRequirementsContext
 * @property {ChunkGraph} chunkGraph the chunk graph
 * @property {CodeGenerationResults} codeGenerationResults the code generation results
 */

/**
 * Defines the execute module options type used by this module.
 * @typedef {object} ExecuteModuleOptions
 * @property {EntryOptions=} entryOptions
 */

/** @typedef {LazySet<string>} FileSystemDependencies */

/** @typedef {EXPECTED_ANY} ExecuteModuleExports */

/**
 * Defines the execute module result type used by this module.
 * @typedef {object} ExecuteModuleResult
 * @property {ExecuteModuleExports} exports
 * @property {boolean} cacheable
 * @property {ExecuteModuleAssets} assets
 * @property {FileSystemDependencies} fileDependencies
 * @property {FileSystemDependencies} contextDependencies
 * @property {FileSystemDependencies} missingDependencies
 * @property {FileSystemDependencies} buildDependencies
 */

/**
 * Defines the execute module object type used by this module.
 * @typedef {object} ExecuteModuleObject
 * @property {string=} id module id
 * @property {ExecuteModuleExports} exports exports
 * @property {boolean} loaded is loaded
 * @property {Error=} error error
 */

/**
 * Defines the execute module argument type used by this module.
 * @typedef {object} ExecuteModuleArgument
 * @property {Module} module
 * @property {ExecuteModuleObject=} moduleObject
 * @property {CodeGenerationResult} codeGenerationResult
 */

/** @typedef {((id: string) => ExecuteModuleExports) & { i?: ((options: ExecuteOptions) => void)[], c?: Record<string, ExecuteModuleObject> }} WebpackRequire */

/**
 * Defines the execute options type used by this module.
 * @typedef {object} ExecuteOptions
 * @property {string=} id module id
 * @property {ExecuteModuleObject} module module
 * @property {WebpackRequire} require require function
 */

/** @typedef {Map<string, { source: Source, info: AssetInfo | undefined }>} ExecuteModuleAssets */

/**
 * Defines the execute module context type used by this module.
 * @typedef {object} ExecuteModuleContext
 * @property {ExecuteModuleAssets} assets
 * @property {Chunk} chunk
 * @property {ChunkGraph} chunkGraph
 * @property {WebpackRequire=} __webpack_require__
 */

/**
 * Defines the entry data type used by this module.
 * @typedef {object} EntryData
 * @property {Dependency[]} dependencies dependencies of the entrypoint that should be evaluated at startup
 * @property {Dependency[]} includeDependencies dependencies of the entrypoint that should be included but not evaluated
 * @property {EntryOptions} options options of the entrypoint
 */

/**
 * Defines the log entry type used by this module.
 * @typedef {object} LogEntry
 * @property {keyof LogType} type
 * @property {EXPECTED_ANY[]=} args
 * @property {number} time
 * @property {string[]=} trace
 */

/**
 * Defines the known asset info type used by this module.
 * @typedef {object} KnownAssetInfo
 * @property {boolean=} immutable true, if the asset can be long term cached forever (contains a hash)
 * @property {boolean=} minimized whether the asset is minimized
 * @property {string | string[]=} fullhash the value(s) of the full hash used for this asset
 * @property {string | string[]=} chunkhash the value(s) of the chunk hash used for this asset
 * @property {string | string[]=} modulehash the value(s) of the module hash used for this asset
 * @property {string | string[]=} contenthash the value(s) of the content hash used for this asset
 * @property {string=} sourceFilename when asset was created from a source file (potentially transformed), the original filename relative to compilation context
 * @property {number=} size size in bytes, only set after asset has been emitted
 * @property {boolean=} development true, when asset is only used for development and doesn't count towards user-facing assets
 * @property {boolean=} hotModuleReplacement true, when asset ships data for updating an existing application (HMR)
 * @property {boolean=} javascriptModule true, when asset is javascript and an ESM
 * @property {boolean=} manifest true, when file is a manifest
 * @property {Record<string, null | string | string[]>=} related object of pointers to other assets, keyed by type of relation (only points from parent to child)
 */

/** @typedef {KnownAssetInfo & Record<string, EXPECTED_ANY>} AssetInfo */

/** @typedef {{ path: string, info: AssetInfo }} InterpolatedPathAndAssetInfo */

/**
 * Defines the asset type used by this module.
 * @typedef {object} Asset
 * @property {string} name the filename of the asset
 * @property {Source} source source of the asset
 * @property {AssetInfo} info info about the asset
 */

/** @typedef {(length: number) => string} HashWithLengthFunction */

/**
 * Defines the module path data type used by this module.
 * @typedef {object} ModulePathData
 * @property {string | number} id
 * @property {string} hash
 * @property {HashWithLengthFunction=} hashWithLength
 */

/** @typedef {(id: string | number) => string | number} PrepareIdFunction */

/**
 * Defines the path data type used by this module.
 * @typedef {object} PathData
 * @property {ChunkGraph=} chunkGraph
 * @property {string=} hash
 * @property {HashWithLengthFunction=} hashWithLength
 * @property {(Chunk | ChunkPathData)=} chunk
 * @property {(Module | ModulePathData)=} module
 * @property {RuntimeSpec=} runtime
 * @property {string=} filename
 * @property {string=} basename
 * @property {string=} query
 * @property {string=} contentHashType
 * @property {string=} contentHash
 * @property {HashWithLengthFunction=} contentHashWithLength
 * @property {boolean=} noChunkHash
 * @property {string=} url
 * @property {string=} local
 * @property {PrepareIdFunction=} prepareId
 */

/** @typedef {"module" | "chunk" | "root-of-chunk" | "nested"} ExcludeModulesType */

/**
 * Defines the known normalized stats options type used by this module.
 * @typedef {object} KnownNormalizedStatsOptions
 * @property {string} context
 * @property {RequestShortener} requestShortener
 * @property {string | false} chunksSort
 * @property {string | false} modulesSort
 * @property {string | false} chunkModulesSort
 * @property {string | false} nestedModulesSort
 * @property {string | false} assetsSort
 * @property {boolean} ids
 * @property {boolean} cachedAssets
 * @property {boolean} groupAssetsByEmitStatus
 * @property {boolean} groupAssetsByPath
 * @property {boolean} groupAssetsByExtension
 * @property {number} assetsSpace
 * @property {((value: string, asset: StatsAsset) => boolean)[]} excludeAssets
 * @property {((name: string, module: StatsModule, type: ExcludeModulesType) => boolean)[]} excludeModules
 * @property {((warning: StatsError, textValue: string) => boolean)[]} warningsFilter
 * @property {boolean} cachedModules
 * @property {boolean} orphanModules
 * @property {boolean} dependentModules
 * @property {boolean} runtimeModules
 * @property {boolean} groupModulesByCacheStatus
 * @property {boolean} groupModulesByLayer
 * @property {boolean} groupModulesByAttributes
 * @property {boolean} groupModulesByPath
 * @property {boolean} groupModulesByExtension
 * @property {boolean} groupModulesByType
 * @property {boolean | "auto"} entrypoints
 * @property {boolean} chunkGroups
 * @property {boolean} chunkGroupAuxiliary
 * @property {boolean} chunkGroupChildren
 * @property {number} chunkGroupMaxAssets
 * @property {number} modulesSpace
 * @property {number} chunkModulesSpace
 * @property {number} nestedModulesSpace
 * @property {false | "none" | "error" | "warn" | "info" | "log" | "verbose"} logging
 * @property {((value: string) => boolean)[]} loggingDebug
 * @property {boolean} loggingTrace
 * @property {EXPECTED_ANY} _env
 */

/** @typedef {KnownNormalizedStatsOptions & Omit<StatsOptions, keyof KnownNormalizedStatsOptions> & Record<string, EXPECTED_ANY>} NormalizedStatsOptions */

/**
 * Defines the known create stats options context type used by this module.
 * @typedef {object} KnownCreateStatsOptionsContext
 * @property {boolean=} forToString
 */

/** @typedef {KnownCreateStatsOptionsContext & Record<string, EXPECTED_ANY>} CreateStatsOptionsContext */

/** @typedef {{ module: Module, hash: string, runtime: RuntimeSpec, runtimes: RuntimeSpec[] }} CodeGenerationJob */

/** @typedef {CodeGenerationJob[]} CodeGenerationJobs */

/** @typedef {{ javascript: ModuleTemplate }} ModuleTemplates */

/** @typedef {Set<Module>} NotCodeGeneratedModules */

/** @type {AssetInfo} */
const EMPTY_ASSET_INFO = Object.freeze({});

const esmDependencyCategory = "esm";

// TODO webpack 6: remove
const deprecatedNormalModuleLoaderHook = util.deprecate(
	/**
	 * Handles the callback logic for this hook.
	 * @param {Compilation} compilation compilation
	 * @returns {NormalModuleCompilationHooks["loader"]} hooks
	 */
	(compilation) =>
		require("./NormalModule").getCompilationHooks(compilation).loader,
	"Compilation.hooks.normalModuleLoader was moved to NormalModule.getCompilationHooks(compilation).loader",
	"DEP_WEBPACK_COMPILATION_NORMAL_MODULE_LOADER_HOOK"
);

// TODO webpack 6: remove
/**
 * Define removed module templates.
 * @param {ModuleTemplates | undefined} moduleTemplates module templates
 */
const defineRemovedModuleTemplates = (moduleTemplates) => {
	Object.defineProperties(moduleTemplates, {
		asset: {
			enumerable: false,
			configurable: false,
			get: () => {
				throw new WebpackError(
					"Compilation.moduleTemplates.asset has been removed"
				);
			}
		},
		webassembly: {
			enumerable: false,
			configurable: false,
			get: () => {
				throw new WebpackError(
					"Compilation.moduleTemplates.webassembly has been removed"
				);
			}
		}
	});
	moduleTemplates = undefined;
};

const byId = compareSelect((c) => c.id, compareIds);

const byNameOrHash = concatComparators(
	compareSelect((c) => c.name, compareIds),
	compareSelect((c) => c.fullHash, compareIds)
);

const byMessage = compareSelect(
	(err) => `${err.message}`,
	compareStringsNumeric
);

const byModule = compareSelect(
	(err) => (err.module && err.module.identifier()) || "",
	compareStringsNumeric
);

const byLocation = compareSelect((err) => err.loc, compareLocations);

const compareErrors = concatComparators(byModule, byLocation, byMessage);

/**
 * Defines the known unsafe cache data type used by this module.
 * @typedef {object} KnownUnsafeCacheData
 * @property {FactoryMeta=} factoryMeta factory meta
 * @property {ResolveOptions=} resolveOptions resolve options
 * @property {ParserOptions=} parserOptions
 * @property {GeneratorOptions=} generatorOptions
 */

/** @typedef {KnownUnsafeCacheData & Record<string, EXPECTED_ANY>} UnsafeCacheData */

/**
 * Defines the module with restore from unsafe cache type used by this module.
 * @typedef {Module & { restoreFromUnsafeCache?: (unsafeCacheData: UnsafeCacheData, moduleFactory: ModuleFactory, compilationParams: CompilationParams) => void }} ModuleWithRestoreFromUnsafeCache
 */

/** @typedef {(module: Module) => boolean} UnsafeCachePredicate */

/** @type {WeakMap<Dependency, ModuleWithRestoreFromUnsafeCache | null>} */
const unsafeCacheDependencies = new WeakMap();

/** @type {WeakMap<ModuleWithRestoreFromUnsafeCache, UnsafeCacheData>} */
const unsafeCacheData = new WeakMap();

/** @typedef {{ id: ModuleId, modules?: Map<Module, ModuleId>, blocks?: (ChunkId | null)[] }} References */
/** @typedef {Map<Module, WeakTupleMap<EXPECTED_ANY[], EXPECTED_ANY>>} ModuleMemCaches */

class Compilation {
	/**
	 * Creates an instance of Compilation.
	 * @param {Compiler} compiler the compiler which created the compilation
	 * @param {CompilationParams} params the compilation parameters
	 */
	constructor(compiler, params) {
		this._backCompat = compiler._backCompat;

		const getNormalModuleLoader = () => deprecatedNormalModuleLoaderHook(this);
		/** @typedef {{ additionalAssets?: boolean | ((assets: CompilationAssets) => void) }} ProcessAssetsAdditionalOptions */
		/** @type {AsyncSeriesHook<[CompilationAssets], ProcessAssetsAdditionalOptions>} */
		const processAssetsHook = new AsyncSeriesHook(["assets"]);

		/** @type {Set<string>} */
		let savedAssets = new Set();
		/**
		 * Returns new assets.
		 * @param {CompilationAssets} assets assets
		 * @returns {CompilationAssets} new assets
		 */
		const popNewAssets = (assets) => {
			/** @type {undefined | CompilationAssets} */
			let newAssets;
			for (const file of Object.keys(assets)) {
				if (savedAssets.has(file)) continue;
				if (newAssets === undefined) {
					newAssets = Object.create(null);
				}
				/** @type {CompilationAssets} */
				(newAssets)[file] = assets[file];
				savedAssets.add(file);
			}
			return /** @type {CompilationAssets} */ (newAssets);
		};
		processAssetsHook.intercept({
			name: "Compilation",
			call: () => {
				savedAssets = new Set(Object.keys(this.assets));
			},
			register: (tap) => {
				const { type, name } = tap;
				const { fn, additionalAssets, ...remainingTap } = tap;
				const additionalAssetsFn =
					additionalAssets === true ? fn : additionalAssets;
				/** @typedef {WeakSet<CompilationAssets>} ProcessedAssets */

				/** @type {ProcessedAssets | undefined} */
				const processedAssets = additionalAssetsFn ? new WeakSet() : undefined;
				/**
				 * Gets available assets.
				 * @param {CompilationAssets} assets to be processed by additionalAssetsFn
				 * @returns {CompilationAssets} available assets
				 */
				const getAvailableAssets = (assets) => {
					/** @type {CompilationAssets} */
					const availableAssets = {};
					for (const file of Object.keys(assets)) {
						// https://github.com/webpack-contrib/compression-webpack-plugin/issues/390
						if (this.assets[file]) {
							availableAssets[file] = assets[file];
						}
					}
					return availableAssets;
				};
				switch (type) {
					case "sync":
						if (additionalAssetsFn) {
							this.hooks.processAdditionalAssets.tap(name, (assets) => {
								if (
									/** @type {ProcessedAssets} */
									(processedAssets).has(this.assets)
								) {
									additionalAssetsFn(getAvailableAssets(assets));
								}
							});
						}
						return {
							...remainingTap,
							type: "async",
							/**
							 * Processes the provided asset.
							 * @param {CompilationAssets} assets assets
							 * @param {(err?: Error | null, result?: void) => void} callback callback
							 * @returns {void}
							 */
							fn: (assets, callback) => {
								try {
									fn(assets);
								} catch (err) {
									return callback(/** @type {Error} */ (err));
								}
								if (processedAssets !== undefined) {
									processedAssets.add(this.assets);
								}
								const newAssets = popNewAssets(assets);
								if (newAssets !== undefined) {
									this.hooks.processAdditionalAssets.callAsync(
										newAssets,
										callback
									);
									return;
								}
								callback();
							}
						};
					case "async":
						if (additionalAssetsFn) {
							this.hooks.processAdditionalAssets.tapAsync(
								name,
								(assets, callback) => {
									if (
										/** @type {ProcessedAssets} */
										(processedAssets).has(this.assets)
									) {
										return additionalAssetsFn(
											getAvailableAssets(assets),
											callback
										);
									}
									callback();
								}
							);
						}
						return {
							...remainingTap,
							/**
							 * Processes the provided asset.
							 * @param {CompilationAssets} assets assets
							 * @param {(err?: Error | null, result?: void) => void} callback callback
							 * @returns {void}
							 */
							fn: (assets, callback) => {
								fn(
									assets,
									/**
									 * Handles the callback logic for this hook.
									 * @param {Error} err err
									 * @returns {void}
									 */
									(err) => {
										if (err) return callback(err);
										if (processedAssets !== undefined) {
											processedAssets.add(this.assets);
										}
										const newAssets = popNewAssets(assets);
										if (newAssets !== undefined) {
											this.hooks.processAdditionalAssets.callAsync(
												newAssets,
												callback
											);
											return;
										}
										callback();
									}
								);
							}
						};
					case "promise":
						if (additionalAssetsFn) {
							this.hooks.processAdditionalAssets.tapPromise(name, (assets) => {
								if (
									/** @type {ProcessedAssets} */
									(processedAssets).has(this.assets)
								) {
									return additionalAssetsFn(getAvailableAssets(assets));
								}
								return Promise.resolve();
							});
						}
						return {
							...remainingTap,
							/**
							 * Returns result.
							 * @param {CompilationAssets} assets assets
							 * @returns {Promise<CompilationAssets>} result
							 */
							fn: (assets) => {
								const p = fn(assets);
								if (!p || !p.then) return p;
								return p.then(() => {
									if (processedAssets !== undefined) {
										processedAssets.add(this.assets);
									}
									const newAssets = popNewAssets(assets);
									if (newAssets !== undefined) {
										return this.hooks.processAdditionalAssets.promise(
											newAssets
										);
									}
								});
							}
						};
				}
			}
		});

		/** @type {SyncHook<[CompilationAssets]>} */
		const afterProcessAssetsHook = new SyncHook(["assets"]);

		/**
		 * Creates a process assets hook.
		 * @template T
		 * @param {string} name name of the hook
		 * @param {number} stage new stage
		 * @param {() => AsArray<T>} getArgs get old hook function args
		 * @param {string=} code deprecation code (not deprecated when unset)
		 * @returns {FakeHook<Pick<AsyncSeriesHook<T>, "tap" | "tapAsync" | "tapPromise" | "name">> | undefined} fake hook which redirects
		 */
		const createProcessAssetsHook = (name, stage, getArgs, code) => {
			if (!this._backCompat && code) return;
			/**
			 * Returns error message.
			 * @param {string} reason reason
			 * @returns {string} error message
			 */
			const errorMessage = (
				reason
			) => `Can't automatically convert plugin using Compilation.hooks.${name} to Compilation.hooks.processAssets because ${reason}.
BREAKING CHANGE: Asset processing hooks in Compilation has been merged into a single Compilation.hooks.processAssets hook.`;
			/**
			 * Normalizes tap options for migrated process-assets hooks.
			 * @param {string | (import("tapable").TapOptions & { name: string } & ProcessAssetsAdditionalOptions)} options hook options
			 * @returns {import("tapable").TapOptions & { name: string } & ProcessAssetsAdditionalOptions} modified options
			 */
			const getOptions = (options) => {
				if (typeof options === "string") options = { name: options };
				if (options.stage) {
					throw new Error(errorMessage("it's using the 'stage' option"));
				}
				return { ...options, stage };
			};
			return createFakeHook(
				{
					name,
					/** @type {AsyncSeriesHook<T>["intercept"]} */
					intercept(_interceptor) {
						throw new Error(errorMessage("it's using 'intercept'"));
					},
					/** @type {AsyncSeriesHook<T>["tap"]} */
					tap: (options, fn) => {
						processAssetsHook.tap(getOptions(options), () => fn(...getArgs()));
					},
					/** @type {AsyncSeriesHook<T>["tapAsync"]} */
					tapAsync: (options, fn) => {
						processAssetsHook.tapAsync(
							getOptions(options),
							(assets, callback) =>
								/** @type {EXPECTED_ANY} */ (fn)(...getArgs(), callback)
						);
					},
					/** @type {AsyncSeriesHook<T>["tapPromise"]} */
					tapPromise: (options, fn) => {
						processAssetsHook.tapPromise(getOptions(options), () =>
							fn(...getArgs())
						);
					}
				},
				`${name} is deprecated (use Compilation.hooks.processAssets instead and use one of Compilation.PROCESS_ASSETS_STAGE_* as stage option)`,
				code
			);
		};
		this.hooks = Object.freeze({
			/** @type {SyncHook<[Module]>} */
			buildModule: new SyncHook(["module"]),
			/** @type {SyncHook<[Module]>} */
			rebuildModule: new SyncHook(["module"]),
			/** @type {SyncHook<[Module, WebpackError]>} */
			failedModule: new SyncHook(["module", "error"]),
			/** @type {SyncHook<[Module]>} */
			succeedModule: new SyncHook(["module"]),
			/** @type {SyncHook<[Module]>} */
			stillValidModule: new SyncHook(["module"]),

			/** @type {SyncHook<[Dependency, EntryOptions]>} */
			addEntry: new SyncHook(["entry", "options"]),
			/** @type {SyncHook<[Dependency, EntryOptions, Error]>} */
			failedEntry: new SyncHook(["entry", "options", "error"]),
			/** @type {SyncHook<[Dependency, EntryOptions, Module]>} */
			succeedEntry: new SyncHook(["entry", "options", "module"]),

			/** @type {SyncWaterfallHook<[ReferencedExports, Dependency, RuntimeSpec]>} */
			dependencyReferencedExports: new SyncWaterfallHook([
				"referencedExports",
				"dependency",
				"runtime"
			]),

			/** @type {SyncHook<[ExecuteModuleArgument, ExecuteModuleContext]>} */
			executeModule: new SyncHook(["options", "context"]),
			/** @type {AsyncParallelHook<[ExecuteModuleArgument, ExecuteModuleContext]>} */
			prepareModuleExecution: new AsyncParallelHook(["options", "context"]),

			/** @type {AsyncSeriesHook<[Iterable<Module>]>} */
			finishModules: new AsyncSeriesHook(["modules"]),
			/** @type {AsyncSeriesHook<[Module]>} */
			finishRebuildingModule: new AsyncSeriesHook(["module"]),
			/** @type {SyncHook<[]>} */
			unseal: new SyncHook([]),
			/** @type {SyncHook<[]>} */
			seal: new SyncHook([]),

			/** @type {SyncHook<[]>} */
			beforeChunks: new SyncHook([]),
			/**
			 * The `afterChunks` hook is called directly after the chunks and module graph have
			 * been created and before the chunks and modules have been optimized. This hook is useful to
			 * inspect, analyze, and/or modify the chunk graph.
			 * @type {SyncHook<[Iterable<Chunk>]>}
			 */
			afterChunks: new SyncHook(["chunks"]),

			/** @type {SyncBailHook<[Iterable<Module>], boolean | void>} */
			optimizeDependencies: new SyncBailHook(["modules"]),
			/** @type {SyncHook<[Iterable<Module>]>} */
			afterOptimizeDependencies: new SyncHook(["modules"]),

			/** @type {SyncHook<[]>} */
			optimize: new SyncHook([]),
			/** @type {SyncBailHook<[Iterable<Module>], boolean | void>} */
			optimizeModules: new SyncBailHook(["modules"]),
			/** @type {SyncHook<[Iterable<Module>]>} */
			afterOptimizeModules: new SyncHook(["modules"]),

			/** @type {SyncBailHook<[Iterable<Chunk>, ChunkGroup[]], boolean | void>} */
			optimizeChunks: new SyncBailHook(["chunks", "chunkGroups"]),
			/** @type {SyncHook<[Iterable<Chunk>, ChunkGroup[]]>} */
			afterOptimizeChunks: new SyncHook(["chunks", "chunkGroups"]),

			/** @type {AsyncSeriesHook<[Iterable<Chunk>, Iterable<Module>]>} */
			optimizeTree: new AsyncSeriesHook(["chunks", "modules"]),
			/** @type {SyncHook<[Iterable<Chunk>, Iterable<Module>]>} */
			afterOptimizeTree: new SyncHook(["chunks", "modules"]),

			/** @type {AsyncSeriesBailHook<[Iterable<Chunk>, Iterable<Module>], void>} */
			optimizeChunkModules: new AsyncSeriesBailHook(["chunks", "modules"]),
			/** @type {SyncHook<[Iterable<Chunk>, Iterable<Module>]>} */
			afterOptimizeChunkModules: new SyncHook(["chunks", "modules"]),
			/** @type {SyncBailHook<[], boolean | void>} */
			shouldRecord: new SyncBailHook([]),

			/** @type {SyncHook<[Chunk, RuntimeRequirements, RuntimeRequirementsContext]>} */
			additionalChunkRuntimeRequirements: new SyncHook([
				"chunk",
				"runtimeRequirements",
				"context"
			]),
			/** @type {HookMap<SyncBailHook<[Chunk, RuntimeRequirements, RuntimeRequirementsContext], void>>} */
			runtimeRequirementInChunk: new HookMap(
				() => new SyncBailHook(["chunk", "runtimeRequirements", "context"])
			),
			/** @type {SyncHook<[Module, RuntimeRequirements, RuntimeRequirementsContext]>} */
			additionalModuleRuntimeRequirements: new SyncHook([
				"module",
				"runtimeRequirements",
				"context"
			]),
			/** @type {HookMap<SyncBailHook<[Module, RuntimeRequirements, RuntimeRequirementsContext], void>>} */
			runtimeRequirementInModule: new HookMap(
				() => new SyncBailHook(["module", "runtimeRequirements", "context"])
			),
			/** @type {SyncHook<[Chunk, RuntimeRequirements, RuntimeRequirementsContext]>} */
			additionalTreeRuntimeRequirements: new SyncHook([
				"chunk",
				"runtimeRequirements",
				"context"
			]),
			/** @type {HookMap<SyncBailHook<[Chunk, RuntimeRequirements, RuntimeRequirementsContext], void>>} */
			runtimeRequirementInTree: new HookMap(
				() => new SyncBailHook(["chunk", "runtimeRequirements", "context"])
			),

			/** @type {SyncHook<[RuntimeModule, Chunk]>} */
			runtimeModule: new SyncHook(["module", "chunk"]),

			/** @type {SyncHook<[Iterable<Module>, Records]>} */
			reviveModules: new SyncHook(["modules", "records"]),
			/** @type {SyncHook<[Iterable<Module>]>} */
			beforeModuleIds: new SyncHook(["modules"]),
			/** @type {SyncHook<[Iterable<Module>]>} */
			moduleIds: new SyncHook(["modules"]),
			/** @type {SyncHook<[Iterable<Module>]>} */
			optimizeModuleIds: new SyncHook(["modules"]),
			/** @type {SyncHook<[Iterable<Module>]>} */
			afterOptimizeModuleIds: new SyncHook(["modules"]),

			/** @type {SyncHook<[Iterable<Chunk>, Records]>} */
			reviveChunks: new SyncHook(["chunks", "records"]),
			/** @type {SyncHook<[Iterable<Chunk>]>} */
			beforeChunkIds: new SyncHook(["chunks"]),
			/** @type {SyncHook<[Iterable<Chunk>]>} */
			chunkIds: new SyncHook(["chunks"]),
			/** @type {SyncHook<[Iterable<Chunk>]>} */
			optimizeChunkIds: new SyncHook(["chunks"]),
			/** @type {SyncHook<[Iterable<Chunk>]>} */
			afterOptimizeChunkIds: new SyncHook(["chunks"]),

			/** @type {SyncHook<[Iterable<Module>, Records]>} */
			recordModules: new SyncHook(["modules", "records"]),
			/** @type {SyncHook<[Iterable<Chunk>, Records]>} */
			recordChunks: new SyncHook(["chunks", "records"]),

			/** @type {SyncHook<[Iterable<Module>]>} */
			optimizeCodeGeneration: new SyncHook(["modules"]),

			/** @type {SyncHook<[]>} */
			beforeModuleHash: new SyncHook([]),
			/** @type {SyncHook<[]>} */
			afterModuleHash: new SyncHook([]),

			/** @type {SyncHook<[]>} */
			beforeCodeGeneration: new SyncHook([]),
			/** @type {SyncHook<[]>} */
			afterCodeGeneration: new SyncHook([]),

			/** @type {SyncHook<[]>} */
			beforeRuntimeRequirements: new SyncHook([]),
			/** @type {SyncHook<[]>} */
			afterRuntimeRequirements: new SyncHook([]),

			/** @type {SyncHook<[]>} */
			beforeHash: new SyncHook([]),
			/** @type {SyncHook<[Chunk]>} */
			contentHash: new SyncHook(["chunk"]),
			/** @type {SyncHook<[]>} */
			afterHash: new SyncHook([]),
			/** @type {SyncHook<[Records]>} */
			recordHash: new SyncHook(["records"]),
			/** @type {SyncHook<[Compilation, Records]>} */
			record: new SyncHook(["compilation", "records"]),

			/** @type {SyncHook<[]>} */
			beforeModuleAssets: new SyncHook([]),
			/** @type {SyncBailHook<[], boolean | void>} */
			shouldGenerateChunkAssets: new SyncBailHook([]),
			/** @type {SyncHook<[]>} */
			beforeChunkAssets: new SyncHook([]),
			// TODO webpack 6 remove
			/** @deprecated */
			additionalChunkAssets:
				/** @type {FakeHook<Pick<AsyncSeriesHook<[Chunks]>, "tap" | "tapAsync" | "tapPromise" | "name">>} */
				(
					createProcessAssetsHook(
						"additionalChunkAssets",
						Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
						() => [this.chunks],
						"DEP_WEBPACK_COMPILATION_ADDITIONAL_CHUNK_ASSETS"
					)
				),

			// TODO webpack 6 deprecate
			/** @deprecated */
			additionalAssets:
				/** @type {FakeHook<Pick<AsyncSeriesHook<[]>, "tap" | "tapAsync" | "tapPromise" | "name">>} */
				(
					createProcessAssetsHook(
						"additionalAssets",
						Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
						() => []
					)
				),
			// TODO webpack 6 remove
			/** @deprecated */
			optimizeChunkAssets:
				/** @type {FakeHook<Pick<AsyncSeriesHook<[Chunks]>, "tap" | "tapAsync" | "tapPromise" | "name">>} */
				(
					createProcessAssetsHook(
						"optimizeChunkAssets",
						Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE,
						() => [this.chunks],
						"DEP_WEBPACK_COMPILATION_OPTIMIZE_CHUNK_ASSETS"
					)
				),
			// TODO webpack 6 remove
			/** @deprecated */
			afterOptimizeChunkAssets:
				/** @type {FakeHook<Pick<AsyncSeriesHook<[Chunks]>, "tap" | "tapAsync" | "tapPromise" | "name">>} */
				(
					createProcessAssetsHook(
						"afterOptimizeChunkAssets",
						Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE + 1,
						() => [this.chunks],
						"DEP_WEBPACK_COMPILATION_AFTER_OPTIMIZE_CHUNK_ASSETS"
					)
				),
			// TODO webpack 6 deprecate
			/** @deprecated */
			optimizeAssets: processAssetsHook,
			// TODO webpack 6 deprecate
			/** @deprecated */
			afterOptimizeAssets: afterProcessAssetsHook,

			processAssets: processAssetsHook,
			afterProcessAssets: afterProcessAssetsHook,
			/** @type {AsyncSeriesHook<[CompilationAssets]>} */
			processAdditionalAssets: new AsyncSeriesHook(["assets"]),

			/** @type {SyncBailHook<[], boolean | void>} */
			needAdditionalSeal: new SyncBailHook([]),
			/** @type {AsyncSeriesHook<[]>} */
			afterSeal: new AsyncSeriesHook([]),

			/** @type {SyncWaterfallHook<[RenderManifestEntry[], RenderManifestOptions]>} */
			renderManifest: new SyncWaterfallHook(["result", "options"]),

			/** @type {SyncHook<[Hash]>} */
			fullHash: new SyncHook(["hash"]),
			/** @type {SyncHook<[Chunk, Hash, ChunkHashContext]>} */
			chunkHash: new SyncHook(["chunk", "chunkHash", "ChunkHashContext"]),

			/** @type {SyncHook<[Module, string]>} */
			moduleAsset: new SyncHook(["module", "filename"]),
			/** @type {SyncHook<[Chunk, string]>} */
			chunkAsset: new SyncHook(["chunk", "filename"]),

			/** @type {SyncWaterfallHook<[string, PathData, AssetInfo | undefined]>} */
			assetPath: new SyncWaterfallHook(["path", "options", "assetInfo"]),

			/** @type {SyncBailHook<[], boolean | void>} */
			needAdditionalPass: new SyncBailHook([]),

			/** @type {SyncHook<[Compiler, string, number]>} */
			childCompiler: new SyncHook([
				"childCompiler",
				"compilerName",
				"compilerIndex"
			]),

			/** @type {SyncBailHook<[string, LogEntry], boolean | void>} */
			log: new SyncBailHook(["origin", "logEntry"]),

			/** @type {SyncWaterfallHook<[Error[]]>} */
			processWarnings: new SyncWaterfallHook(["warnings"]),
			/** @type {SyncWaterfallHook<[Error[]]>} */
			processErrors: new SyncWaterfallHook(["errors"]),

			/** @type {HookMap<SyncHook<[Partial<NormalizedStatsOptions>, CreateStatsOptionsContext]>>} */
			statsPreset: new HookMap(() => new SyncHook(["options", "context"])),
			/** @type {SyncHook<[Partial<NormalizedStatsOptions>, CreateStatsOptionsContext]>} */
			statsNormalize: new SyncHook(["options", "context"]),
			/** @type {SyncHook<[StatsFactory, NormalizedStatsOptions]>} */
			statsFactory: new SyncHook(["statsFactory", "options"]),
			/** @type {SyncHook<[StatsPrinter, NormalizedStatsOptions]>} */
			statsPrinter: new SyncHook(["statsPrinter", "options"]),

			/**
			 * Gets normal module loader.
			 * @deprecated
			 * @returns {SyncHook<[AnyLoaderContext, NormalModule]>} normal module loader hook
			 */
			get normalModuleLoader() {
				return getNormalModuleLoader();
			}
		});
		/** @type {string=} */
		this.name = undefined;
		/** @type {number | undefined} */
		this.startTime = undefined;
		/** @type {number | undefined} */
		this.endTime = undefined;
		/** @type {Compiler} */
		this.compiler = compiler;
		this.resolverFactory = compiler.resolverFactory;
		/** @type {InputFileSystem} */
		this.inputFileSystem =
			/** @type {InputFileSystem} */
			(compiler.inputFileSystem);
		this.fileSystemInfo = new FileSystemInfo(this.inputFileSystem, {
			unmanagedPaths: compiler.unmanagedPaths,
			managedPaths: compiler.managedPaths,
			immutablePaths: compiler.immutablePaths,
			logger: this.getLogger("webpack.FileSystemInfo"),
			hashFunction: compiler.options.output.hashFunction
		});
		if (compiler.fileTimestamps) {
			this.fileSystemInfo.addFileTimestamps(compiler.fileTimestamps, true);
		}
		if (compiler.contextTimestamps) {
			this.fileSystemInfo.addContextTimestamps(
				compiler.contextTimestamps,
				true
			);
		}
		/** @type {ValueCacheVersions} */
		this.valueCacheVersions = new Map();
		this.requestShortener = compiler.requestShortener;
		this.compilerPath = compiler.compilerPath;

		this.logger = this.getLogger("webpack.Compilation");

		const options = /** @type {WebpackOptions} */ (compiler.options);
		this.options = options;
		this.outputOptions =
			/** @type {OutputOptionsWithDefaults} */
			(options && options.output);
		/** @type {boolean} */
		this.bail = (options && options.bail) || false;
		/** @type {boolean} */
		this.profile = (options && options.profile) || false;

		this.params = params;
		this.mainTemplate = new MainTemplate(this.outputOptions, this);
		this.chunkTemplate = new ChunkTemplate(this.outputOptions, this);
		this.runtimeTemplate = new RuntimeTemplate(
			this,
			this.outputOptions,
			this.requestShortener
		);
		/** @type {ModuleTemplates} */
		this.moduleTemplates = {
			javascript: new ModuleTemplate(this.runtimeTemplate, this)
		};
		defineRemovedModuleTemplates(this.moduleTemplates);

		// We need to think how implement types here
		/** @type {ModuleMemCaches | undefined} */
		this.moduleMemCaches = undefined;
		/** @type {ModuleMemCaches | undefined} */
		this.moduleMemCaches2 = undefined;
		/** @type {ModuleGraph} */
		this.moduleGraph = new ModuleGraph();
		/** @type {ChunkGraph} */
		this.chunkGraph = new ChunkGraph(
			this.moduleGraph,
			this.outputOptions.hashFunction
		);
		/** @type {CodeGenerationResults | undefined} */
		this.codeGenerationResults = undefined;

		/** @type {AsyncQueue<Module, Module, Module>} */
		this.processDependenciesQueue = new AsyncQueue({
			name: "processDependencies",
			parallelism: options.parallelism || 100,
			processor: this._processModuleDependencies.bind(this)
		});
		/** @type {AsyncQueue<Module, string, Module>} */
		this.addModuleQueue = new AsyncQueue({
			name: "addModule",
			parent: this.processDependenciesQueue,
			getKey: (module) => module.identifier(),
			processor: this._addModule.bind(this)
		});
		/** @type {AsyncQueue<FactorizeModuleOptions, string, Module | ModuleFactoryResult>} */
		this.factorizeQueue = new AsyncQueue({
			name: "factorize",
			parent: this.addModuleQueue,
			processor: this._factorizeModule.bind(this)
		});
		/** @type {AsyncQueue<Module, Module, Module>} */
		this.buildQueue = new AsyncQueue({
			name: "build",
			parent: this.factorizeQueue,
			processor: this._buildModule.bind(this)
		});
		/** @type {AsyncQueue<Module, Module, Module>} */
		this.rebuildQueue = new AsyncQueue({
			name: "rebuild",
			parallelism: options.parallelism || 100,
			processor: this._rebuildModule.bind(this)
		});

		/**
		 * Modules in value are building during the build of Module in key.
		 * Means value blocking key from finishing.
		 * Needed to detect build cycles.
		 * @type {WeakMap<Module, Set<Module>>}
		 */
		this.creatingModuleDuringBuild = new WeakMap();

		/** @type {Map<Exclude<ChunkName, null>, EntryData>} */
		this.entries = new Map();
		/** @type {EntryData} */
		this.globalEntry = {
			dependencies: [],
			includeDependencies: [],
			options: {
				name: undefined
			}
		};
		/** @type {Map<string, Entrypoint>} */
		this.entrypoints = new Map();
		/** @type {Entrypoint[]} */
		this.asyncEntrypoints = [];
		/** @type {Chunks} */
		this.chunks = new Set();
		/** @type {ChunkGroup[]} */
		this.chunkGroups = [];
		/** @type {Map<string, ChunkGroup>} */
		this.namedChunkGroups = new Map();
		/** @type {Map<string, Chunk>} */
		this.namedChunks = new Map();
		/** @type {Set<Module>} */
		this.modules = new Set();
		if (this._backCompat) {
			arrayToSetDeprecation(this.chunks, "Compilation.chunks");
			arrayToSetDeprecation(this.modules, "Compilation.modules");
		}
		/**
		 * @private
		 * @type {Map<string, Module>}
		 */
		this._modules = new Map();
		/** @type {Records | null} */
		this.records = null;
		/** @type {string[]} */
		this.additionalChunkAssets = [];
		/** @type {CompilationAssets} */
		this.assets = {};
		/** @type {Map<string, AssetInfo>} */
		this.assetsInfo = new Map();
		/** @type {Map<string, Map<string, Set<string>>>} */
		this._assetsRelatedIn = new Map();
		/** @type {Error[]} */
		this.errors = [];
		/** @type {Error[]} */
		this.warnings = [];
		/** @type {Compilation[]} */
		this.children = [];
		/** @type {Map<string, LogEntry[]>} */
		this.logging = new Map();
		/** @type {Map<DependencyConstructor, ModuleFactory>} */
		this.dependencyFactories = new Map();
		/** @type {DependencyTemplates} */
		this.dependencyTemplates = new DependencyTemplates(
			this.outputOptions.hashFunction
		);
		/** @type {Record<string, number>} */
		this.childrenCounters = {};
		/** @type {Set<number> | null} */
		this.usedChunkIds = null;
		/** @type {Set<number> | null} */
		this.usedModuleIds = null;
		/** @type {boolean} */
		this.needAdditionalPass = false;
		/** @type {Set<ModuleWithRestoreFromUnsafeCache>} */
		this._restoredUnsafeCacheModuleEntries = new Set();
		/** @type {Map<string, ModuleWithRestoreFromUnsafeCache>} */
		this._restoredUnsafeCacheEntries = new Map();
		/** @type {WeakSet<Module>} */
		this.builtModules = new WeakSet();
		/** @type {WeakSet<Module>} */
		this.codeGeneratedModules = new WeakSet();
		/** @type {WeakSet<Module>} */
		this.buildTimeExecutedModules = new WeakSet();
		/** @type {Set<string>} */
		this.emittedAssets = new Set();
		/** @type {Set<string>} */
		this.comparedForEmitAssets = new Set();
		/** @type {FileSystemDependencies} */
		this.fileDependencies = new LazySet();
		/** @type {FileSystemDependencies} */
		this.contextDependencies = new LazySet();
		/** @type {FileSystemDependencies} */
		this.missingDependencies = new LazySet();
		/** @type {FileSystemDependencies} */
		this.buildDependencies = new LazySet();
		// TODO webpack 6 remove
		/**
		 * @deprecated
		 * @type {{ add: (item: string) => FileSystemDependencies }}
		 */
		this.compilationDependencies = {
			add: util.deprecate(
				/**
				 * Handles the add callback for this hook.
				 * @param {string} item item
				 * @returns {FileSystemDependencies} file dependencies
				 */
				(item) => this.fileDependencies.add(item),
				"Compilation.compilationDependencies is deprecated (used Compilation.fileDependencies instead)",
				"DEP_WEBPACK_COMPILATION_COMPILATION_DEPENDENCIES"
			)
		};

		this._modulesCache = this.getCache("Compilation/modules");
		this._assetsCache = this.getCache("Compilation/assets");
		this._codeGenerationCache = this.getCache("Compilation/codeGeneration");

		const unsafeCache = options.module.unsafeCache;
		/** @type {boolean} */
		this._unsafeCache = Boolean(unsafeCache);
		/** @type {UnsafeCachePredicate} */
		this._unsafeCachePredicate =
			typeof unsafeCache === "function" ? unsafeCache : () => true;
	}

	getStats() {
		return new Stats(this);
	}

	/**
	 * Creates a stats options.
	 * @param {string | boolean | StatsOptions | undefined} optionsOrPreset stats option value
	 * @param {CreateStatsOptionsContext=} context context
	 * @returns {NormalizedStatsOptions} normalized options
	 */
	createStatsOptions(optionsOrPreset, context = {}) {
		if (typeof optionsOrPreset === "boolean") {
			optionsOrPreset = {
				preset: optionsOrPreset === false ? "none" : "normal"
			};
		} else if (typeof optionsOrPreset === "string") {
			optionsOrPreset = { preset: optionsOrPreset };
		}
		if (typeof optionsOrPreset === "object" && optionsOrPreset !== null) {
			// We use this method of shallow cloning this object to include
			// properties in the prototype chain
			/** @type {Partial<NormalizedStatsOptions>} */
			const options = {};
			for (const key in optionsOrPreset) {
				options[key] = optionsOrPreset[/** @type {keyof StatsOptions} */ (key)];
			}
			if (options.preset !== undefined) {
				this.hooks.statsPreset.for(options.preset).call(options, context);
			}
			this.hooks.statsNormalize.call(options, context);
			return /** @type {NormalizedStatsOptions} */ (options);
		}
		/** @type {Partial<NormalizedStatsOptions>} */
		const options = {};
		this.hooks.statsNormalize.call(options, context);
		return /** @type {NormalizedStatsOptions} */ (options);
	}

	/**
	 * Creates a stats factory.
	 * @param {NormalizedStatsOptions} options options
	 * @returns {StatsFactory} the stats factory
	 */
	createStatsFactory(options) {
		const statsFactory = new StatsFactory();
		this.hooks.statsFactory.call(statsFactory, options);
		return statsFactory;
	}

	/**
	 * Creates a stats printer.
	 * @param {NormalizedStatsOptions} options options
	 * @returns {StatsPrinter} the stats printer
	 */
	createStatsPrinter(options) {
		const statsPrinter = new StatsPrinter();
		this.hooks.statsPrinter.call(statsPrinter, options);
		return statsPrinter;
	}

	/**
	 * Returns the cache facade instance.
	 * @param {string} name cache name
	 * @returns {CacheFacade} the cache facade instance
	 */
	getCache(name) {
		return this.compiler.getCache(name);
	}

	/**
	 * Returns a logger with that name.
	 * @param {string | (() => string)} name name of the logger, or function called once to get the logger name
	 * @returns {Logger} a logger with that name
	 */
	getLogger(name) {
		if (!name) {
			throw new TypeError("Compilation.getLogger(name) called without a name");
		}
		/** @type {LogEntry[] | undefined} */
		let logEntries;
		return new Logger(
			(type, args) => {
				if (typeof name === "function") {
					name = name();
					if (!name) {
						throw new TypeError(
							"Compilation.getLogger(name) called with a function not returning a name"
						);
					}
				}
				/** @type {LogEntry["trace"]} */
				let trace;
				switch (type) {
					case LogType.warn:
					case LogType.error:
					case LogType.trace:
						trace = ErrorHelpers.cutOffLoaderExecution(
							/** @type {string} */ (new Error("Trace").stack)
						)
							.split("\n")
							.slice(3);
						break;
				}
				/** @type {LogEntry} */
				const logEntry = {
					time: Date.now(),
					type,
					args,
					trace
				};
				/* eslint-disable no-console */
				if (this.hooks.log.call(name, logEntry) === undefined) {
					if (
						logEntry.type === LogType.profileEnd &&
						typeof console.profileEnd === "function"
					) {
						console.profileEnd(
							`[${name}] ${/** @type {NonNullable<LogEntry["args"]>} */ (logEntry.args)[0]}`
						);
					}
					if (logEntries === undefined) {
						logEntries = this.logging.get(name);
						if (logEntries === undefined) {
							logEntries = [];
							this.logging.set(name, logEntries);
						}
					}
					logEntries.push(logEntry);
					if (
						logEntry.type === LogType.profile &&
						typeof console.profile === "function"
					) {
						console.profile(
							`[${name}] ${
								/** @type {NonNullable<LogEntry["args"]>} */
								(logEntry.args)[0]
							}`
						);
					}
					/* eslint-enable no-console */
				}
			},
			(childName) => {
				if (typeof name === "function") {
					if (typeof childName === "function") {
						return this.getLogger(() => {
							if (typeof name === "function") {
								name = name();
								if (!name) {
									throw new TypeError(
										"Compilation.getLogger(name) called with a function not returning a name"
									);
								}
							}
							if (typeof childName === "function") {
								childName = childName();
								if (!childName) {
									throw new TypeError(
										"Logger.getChildLogger(name) called with a function not returning a name"
									);
								}
							}
							return `${name}/${childName}`;
						});
					}
					return this.getLogger(() => {
						if (typeof name === "function") {
							name = name();
							if (!name) {
								throw new TypeError(
									"Compilation.getLogger(name) called with a function not returning a name"
								);
							}
						}
						return `${name}/${childName}`;
					});
				}
				if (typeof childName === "function") {
					return this.getLogger(() => {
						if (typeof childName === "function") {
							childName = childName();
							if (!childName) {
								throw new TypeError(
									"Logger.getChildLogger(name) called with a function not returning a name"
								);
							}
						}
						return `${name}/${childName}`;
					});
				}
				return this.getLogger(`${name}/${childName}`);
			}
		);
	}

	/**
	 * Adds the provided module to the compilation.
	 * @param {Module} module module to be added that was created
	 * @param {ModuleCallback} callback returns the module in the compilation,
	 * it could be the passed one (if new), or an already existing in the compilation
	 * @returns {void}
	 */
	addModule(module, callback) {
		this.addModuleQueue.add(module, callback);
	}

	/**
	 * Adds the provided module to the compilation.
	 * @param {Module} module module to be added that was created
	 * @param {ModuleCallback} callback returns the module in the compilation,
	 * it could be the passed one (if new), or an already existing in the compilation
	 * @returns {void}
	 */
	_addModule(module, callback) {
		const identifier = module.identifier();
		const alreadyAddedModule = this._modules.get(identifier);
		if (alreadyAddedModule) {
			return callback(null, alreadyAddedModule);
		}

		const currentProfile = this.profile
			? this.moduleGraph.getProfile(module)
			: undefined;
		if (currentProfile !== undefined) {
			currentProfile.markRestoringStart();
		}

		this._modulesCache.get(identifier, null, (err, cacheModule) => {
			if (err) return callback(new ModuleRestoreError(module, err));

			if (currentProfile !== undefined) {
				currentProfile.markRestoringEnd();
				currentProfile.markIntegrationStart();
			}

			if (cacheModule) {
				cacheModule.updateCacheModule(module);

				module = cacheModule;
			}
			this._modules.set(identifier, module);
			this.modules.add(module);
			if (this._backCompat) {
				ModuleGraph.setModuleGraphForModule(module, this.moduleGraph);
			}
			if (currentProfile !== undefined) {
				currentProfile.markIntegrationEnd();
			}
			callback(null, module);
		});
	}

	/**
	 * Fetches a module from a compilation by its identifier
	 * @param {Module} module the module provided
	 * @returns {Module} the module requested
	 */
	getModule(module) {
		const identifier = module.identifier();
		return /** @type {Module} */ (this._modules.get(identifier));
	}

	/**
	 * Attempts to search for a module by its identifier
	 * @param {string} identifier identifier (usually path) for module
	 * @returns {Module | undefined} attempt to search for module and return it, else undefined
	 */
	findModule(identifier) {
		return this._modules.get(identifier);
	}

	/**
	 * Schedules a build of the module object
	 * @param {Module} module module to be built
	 * @param {ModuleCallback} callback the callback
	 * @returns {void}
	 */
	buildModule(module, callback) {
		this.buildQueue.add(module, callback);
	}

	/**
	 * Builds the module object
	 * @param {Module} module module to be built
	 * @param {ModuleCallback} callback the callback
	 * @returns {void}
	 */
	_buildModule(module, callback) {
		const currentProfile = this.profile
			? this.moduleGraph.getProfile(module)
			: undefined;
		if (currentProfile !== undefined) {
			currentProfile.markBuildingStart();
		}

		module.needBuild(
			{
				compilation: this,
				fileSystemInfo: this.fileSystemInfo,
				valueCacheVersions: this.valueCacheVersions
			},
			(err, needBuild) => {
				if (err) return callback(err);

				if (!needBuild) {
					if (currentProfile !== undefined) {
						currentProfile.markBuildingEnd();
					}
					this.hooks.stillValidModule.call(module);
					return callback();
				}

				this.hooks.buildModule.call(module);
				this.builtModules.add(module);
				module.build(
					this.options,
					this,
					this.resolverFactory.get("normal", module.resolveOptions),
					/** @type {InputFileSystem} */
					(this.inputFileSystem),
					(err) => {
						if (currentProfile !== undefined) {
							currentProfile.markBuildingEnd();
						}
						if (err) {
							this.hooks.failedModule.call(module, err);
							return callback(err);
						}
						if (currentProfile !== undefined) {
							currentProfile.markStoringStart();
						}
						this._modulesCache.store(
							module.identifier(),
							null,
							module,
							(err) => {
								if (currentProfile !== undefined) {
									currentProfile.markStoringEnd();
								}
								if (err) {
									this.hooks.failedModule.call(
										module,
										/** @type {WebpackError} */ (err)
									);
									return callback(new ModuleStoreError(module, err));
								}
								this.hooks.succeedModule.call(module);
								return callback();
							}
						);
					}
				);
			}
		);
	}

	/**
	 * Process module dependencies.
	 * @param {Module} module to be processed for deps
	 * @param {ModuleCallback} callback callback to be triggered
	 * @returns {void}
	 */
	processModuleDependencies(module, callback) {
		this.processDependenciesQueue.add(module, callback);
	}

	/**
	 * Process module dependencies non recursive.
	 * @param {Module} module to be processed for deps
	 * @returns {void}
	 */
	processModuleDependenciesNonRecursive(module) {
		/**
		 * Process dependencies block.
		 * @param {DependenciesBlock} block block
		 */
		const processDependenciesBlock = (block) => {
			if (block.dependencies) {
				let i = 0;
				for (const dep of block.dependencies) {
					this.moduleGraph.setParents(dep, block, module, i++);
				}
			}
			if (block.blocks) {
				for (const b of block.blocks) processDependenciesBlock(b);
			}
		};

		processDependenciesBlock(module);
	}

	/**
	 * Process module dependencies.
	 * @param {Module} module to be processed for deps
	 * @param {ModuleCallback} callback callback to be triggered
	 * @returns {void}
	 */
	_processModuleDependencies(module, callback) {
		/** @type {{ factory: ModuleFactory, dependencies: Dependency[], context: string | undefined, originModule: Module | null }[]} */
		const sortedDependencies = [];
		/** @type {boolean} */
		const hasLowPriorityDependencies = module.dependencies.some(
			Dependency.isLowPriorityDependency
		);

		/** @type {DependenciesBlock} */
		let currentBlock;

		/** @type {Map<ModuleFactory, Map<string, Dependency[]>>} */
		let dependencies;
		/** @type {DependencyConstructor} */
		let factoryCacheKey;
		/** @type {ModuleFactory} */
		let factoryCacheKey2;
		/** @typedef {Map<string, Dependency[]>} FactoryCacheValue */
		/** @type {FactoryCacheValue | undefined} */
		let factoryCacheValue;
		/** @type {string} */
		let listCacheKey1;
		/** @type {string} */
		let listCacheKey2;
		/** @type {Dependency[]} */
		let listCacheValue;

		let inProgressSorting = 1;
		let inProgressTransitive = 1;

		/**
		 * On dependencies sorted.
		 * @param {WebpackError=} err error
		 * @returns {void}
		 */
		const onDependenciesSorted = (err) => {
			if (err) return callback(err);

			// early exit without changing parallelism back and forth
			if (sortedDependencies.length === 0 && inProgressTransitive === 1) {
				return callback();
			}

			// This is nested so we need to allow one additional task
			this.processDependenciesQueue.increaseParallelism();

			for (const item of sortedDependencies) {
				inProgressTransitive++;
				// eslint-disable-next-line no-loop-func
				this.handleModuleCreation(item, (err) => {
					// In V8, the Error objects keep a reference to the functions on the stack. These warnings &
					// errors are created inside closures that keep a reference to the Compilation, so errors are
					// leaking the Compilation object.
					if (err && this.bail) {
						if (inProgressTransitive <= 0) return;
						inProgressTransitive = -1;
						// eslint-disable-next-line no-self-assign
						err.stack = err.stack;
						onTransitiveTasksFinished(err);
						return;
					}
					if (--inProgressTransitive === 0) onTransitiveTasksFinished();
				});
			}
			if (--inProgressTransitive === 0) onTransitiveTasksFinished();
		};

		/**
		 * On transitive tasks finished.
		 * @param {WebpackError=} err error
		 * @returns {void}
		 */
		const onTransitiveTasksFinished = (err) => {
			if (err) return callback(err);
			this.processDependenciesQueue.decreaseParallelism();

			return callback();
		};

		/**
		 * Process dependency.
		 * @param {Dependency} dep dependency
		 * @param {number} index index in block
		 * @returns {void}
		 */
		const processDependency = (dep, index) => {
			this.moduleGraph.setParents(dep, currentBlock, module, index);
			if (this._unsafeCache) {
				try {
					const unsafeCachedModule = unsafeCacheDependencies.get(dep);
					if (unsafeCachedModule === null) return;
					if (unsafeCachedModule !== undefined) {
						if (
							this._restoredUnsafeCacheModuleEntries.has(unsafeCachedModule)
						) {
							this._handleExistingModuleFromUnsafeCache(
								module,
								dep,
								unsafeCachedModule
							);
							return;
						}
						const identifier = unsafeCachedModule.identifier();
						const cachedModule =
							this._restoredUnsafeCacheEntries.get(identifier);
						if (cachedModule !== undefined) {
							// update unsafe cache to new module
							unsafeCacheDependencies.set(dep, cachedModule);
							this._handleExistingModuleFromUnsafeCache(
								module,
								dep,
								cachedModule
							);
							return;
						}
						inProgressSorting++;
						this._modulesCache.get(identifier, null, (err, cachedModule) => {
							if (err) {
								if (inProgressSorting <= 0) return;
								inProgressSorting = -1;
								onDependenciesSorted(/** @type {WebpackError} */ (err));
								return;
							}
							try {
								if (!this._restoredUnsafeCacheEntries.has(identifier)) {
									const data = unsafeCacheData.get(cachedModule);
									if (data === undefined) {
										processDependencyForResolving(dep);
										if (--inProgressSorting === 0) onDependenciesSorted();
										return;
									}
									if (cachedModule !== unsafeCachedModule) {
										unsafeCacheDependencies.set(dep, cachedModule);
									}
									cachedModule.restoreFromUnsafeCache(
										data,
										this.params.normalModuleFactory,
										this.params
									);
									this._restoredUnsafeCacheEntries.set(
										identifier,
										cachedModule
									);
									this._restoredUnsafeCacheModuleEntries.add(cachedModule);
									if (!this.modules.has(cachedModule)) {
										inProgressTransitive++;
										this._handleNewModuleFromUnsafeCache(
											module,
											dep,
											cachedModule,
											(err) => {
												if (err) {
													if (inProgressTransitive <= 0) return;
													inProgressTransitive = -1;
													onTransitiveTasksFinished(err);
												}
												if (--inProgressTransitive === 0) {
													return onTransitiveTasksFinished();
												}
											}
										);
										if (--inProgressSorting === 0) onDependenciesSorted();
										return;
									}
								}
								if (unsafeCachedModule !== cachedModule) {
									unsafeCacheDependencies.set(dep, cachedModule);
								}
								this._handleExistingModuleFromUnsafeCache(
									module,
									dep,
									cachedModule
								); // a3
							} catch (err) {
								if (inProgressSorting <= 0) return;
								inProgressSorting = -1;
								onDependenciesSorted(/** @type {WebpackError} */ (err));
								return;
							}
							if (--inProgressSorting === 0) onDependenciesSorted();
						});
						return;
					}
				} catch (err) {
					// eslint-disable-next-line no-console
					console.error(err);
				}
			}
			processDependencyForResolving(dep);
		};

		/**
		 * Process dependency for resolving.
		 * @param {Dependency} dep dependency
		 * @returns {void}
		 */
		const processDependencyForResolving = (dep) => {
			const resourceIdent = dep.getResourceIdentifier();
			if (resourceIdent !== undefined && resourceIdent !== null) {
				const category = dep.category;
				const constructor =
					/** @type {DependencyConstructor} */
					(dep.constructor);
				if (factoryCacheKey === constructor) {
					// Fast path 1: same constructor as prev item
					if (listCacheKey1 === category && listCacheKey2 === resourceIdent) {
						// Super fast path 1: also same resource
						listCacheValue.push(dep);
						return;
					}
				} else {
					const factory = this.dependencyFactories.get(constructor);
					if (factory === undefined) {
						throw new Error(
							`No module factory available for dependency type: ${constructor.name}`
						);
					}
					if (factoryCacheKey2 === factory) {
						// Fast path 2: same factory as prev item
						factoryCacheKey = constructor;
						if (listCacheKey1 === category && listCacheKey2 === resourceIdent) {
							// Super fast path 2: also same resource
							listCacheValue.push(dep);
							return;
						}
					} else {
						// Slow path
						if (factoryCacheKey2 !== undefined) {
							// Archive last cache entry
							if (dependencies === undefined) dependencies = new Map();
							dependencies.set(
								factoryCacheKey2,
								/** @type {FactoryCacheValue} */ (factoryCacheValue)
							);
							factoryCacheValue = dependencies.get(factory);
							if (factoryCacheValue === undefined) {
								factoryCacheValue = new Map();
							}
						} else {
							factoryCacheValue = new Map();
						}
						factoryCacheKey = constructor;
						factoryCacheKey2 = factory;
					}
				}
				// Here webpack is using heuristic that assumes
				// mostly esm dependencies would be used
				// so we don't allocate extra string for them
				const cacheKey =
					category === esmDependencyCategory
						? resourceIdent
						: `${category}${resourceIdent}`;
				let list = /** @type {FactoryCacheValue} */ (factoryCacheValue).get(
					cacheKey
				);
				if (list === undefined) {
					/** @type {FactoryCacheValue} */
					(factoryCacheValue).set(cacheKey, (list = []));
					const newItem = {
						factory: factoryCacheKey2,
						dependencies: list,
						context: dep.getContext(),
						originModule: module
					};
					if (hasLowPriorityDependencies) {
						let insertIndex = sortedDependencies.length;
						while (insertIndex > 0) {
							const item = sortedDependencies[insertIndex - 1];
							const isAllLowPriorityDependencies = item.dependencies.every(
								Dependency.isLowPriorityDependency
							);
							if (isAllLowPriorityDependencies) {
								insertIndex--;
							} else {
								break;
							}
						}
						sortedDependencies.splice(insertIndex, 0, newItem);
					} else {
						sortedDependencies.push(newItem);
					}
				}
				list.push(dep);
				listCacheKey1 = category;
				listCacheKey2 = resourceIdent;
				listCacheValue = list;
			}
		};

		try {
			/** @type {DependenciesBlock[]} */
			const queue = [module];
			do {
				const block = /** @type {DependenciesBlock} */ (queue.pop());
				if (block.dependencies) {
					currentBlock = block;
					let i = 0;
					for (const dep of block.dependencies) processDependency(dep, i++);
				}
				if (block.blocks) {
					for (const b of block.blocks) queue.push(b);
				}
			} while (queue.length !== 0);
		} catch (err) {
			return callback(/** @type {WebpackError} */ (err));
		}

		if (--inProgressSorting === 0) onDependenciesSorted();
	}

	/**
	 * Handle new module from unsafe cache.
	 * @private
	 * @param {Module} originModule original module
	 * @param {Dependency} dependency dependency
	 * @param {Module} module cached module
	 * @param {Callback} callback callback
	 */
	_handleNewModuleFromUnsafeCache(originModule, dependency, module, callback) {
		const moduleGraph = this.moduleGraph;

		moduleGraph.setResolvedModule(originModule, dependency, module);

		moduleGraph.setIssuerIfUnset(
			module,
			originModule !== undefined ? originModule : null
		);

		this._modules.set(module.identifier(), module);
		this.modules.add(module);
		if (this._backCompat) {
			ModuleGraph.setModuleGraphForModule(module, this.moduleGraph);
		}

		this._handleModuleBuildAndDependencies(
			originModule,
			module,
			true,
			false,
			callback
		);
	}

	/**
	 * Handle existing module from unsafe cache.
	 * @private
	 * @param {Module} originModule original modules
	 * @param {Dependency} dependency dependency
	 * @param {Module} module cached module
	 */
	_handleExistingModuleFromUnsafeCache(originModule, dependency, module) {
		const moduleGraph = this.moduleGraph;

		moduleGraph.setResolvedModule(originModule, dependency, module);
	}

	/**
	 * Processes the provided factorize module option.
	 * @param {FactorizeModuleOptions} options options
	 * @param {ModuleOrModuleFactoryResultCallback} callback callback
	 * @returns {void}
	 */
	_factorizeModule(
		{
			currentProfile,
			factory,
			dependencies,
			originModule,
			factoryResult,
			contextInfo,
			context
		},
		callback
	) {
		if (currentProfile !== undefined) {
			currentProfile.markFactoryStart();
		}
		factory.create(
			{
				contextInfo: {
					issuer: originModule
						? /** @type {NameForCondition} */ (originModule.nameForCondition())
						: "",
					issuerLayer: originModule ? originModule.layer : null,
					compiler: this.compiler.name,
					...contextInfo
				},
				resolveOptions: originModule ? originModule.resolveOptions : undefined,
				context:
					context ||
					(originModule
						? /** @type {string} */ (originModule.context)
						: this.compiler.context),
				dependencies
			},
			(err, result) => {
				if (result) {
					// TODO webpack 6: remove
					// For backward-compat
					if (result.module === undefined && result instanceof Module) {
						result = {
							module: result
						};
					}
					if (!factoryResult) {
						const {
							fileDependencies,
							contextDependencies,
							missingDependencies
						} = result;
						if (fileDependencies) {
							this.fileDependencies.addAll(fileDependencies);
						}
						if (contextDependencies) {
							this.contextDependencies.addAll(contextDependencies);
						}
						if (missingDependencies) {
							this.missingDependencies.addAll(missingDependencies);
						}
					}
				}
				if (err) {
					const notFoundError = new ModuleNotFoundError(
						originModule,
						err,
						/** @type {DependencyLocation} */
						(dependencies.map((d) => d.loc).find(Boolean))
					);
					return callback(notFoundError, factoryResult ? result : undefined);
				}
				if (!result) {
					return callback();
				}

				if (currentProfile !== undefined) {
					currentProfile.markFactoryEnd();
				}

				callback(null, factoryResult ? result : result.module);
			}
		);
	}

	/**
	 * Processes the provided module callback.
	 * @overload
	 * @param {FactorizeModuleOptions & { factoryResult?: false }} options options
	 * @param {ModuleCallback} callback callback
	 * @returns {void}
	 */
	/**
	 * Processes the provided module factory result callback.
	 * @overload
	 * @param {FactorizeModuleOptions & { factoryResult: true }} options options
	 * @param {ModuleFactoryResultCallback} callback callback
	 * @returns {void}
	 */
	/**
	 * Processes the provided |.
	 * @param {FactorizeModuleOptions & { factoryResult?: false } | FactorizeModuleOptions & { factoryResult: true }} options options
	 * @param {ModuleCallback | ModuleFactoryResultCallback} callback callback
	 */
	factorizeModule(options, callback) {
		this.factorizeQueue.add(
			options,
			/** @type {ModuleOrModuleFactoryResultCallback} */
			(callback)
		);
	}

	/**
	 * Defines the handle module creation options type used by this module.
	 * @typedef {object} HandleModuleCreationOptions
	 * @property {ModuleFactory} factory
	 * @property {Dependency[]} dependencies
	 * @property {Module | null} originModule
	 * @property {Partial<ModuleFactoryCreateDataContextInfo>=} contextInfo
	 * @property {string=} context
	 * @property {boolean=} recursive recurse into dependencies of the created module
	 * @property {boolean=} connectOrigin connect the resolved module with the origin module
	 * @property {boolean=} checkCycle check the cycle dependencies of the created module
	 */

	/**
	 * Handle module creation.
	 * @param {HandleModuleCreationOptions} options options object
	 * @param {ModuleCallback} callback callback
	 * @returns {void}
	 */
	handleModuleCreation(
		{
			factory,
			dependencies,
			originModule,
			contextInfo,
			context,
			recursive = true,
			connectOrigin = recursive,
			checkCycle = !recursive
		},
		callback
	) {
		const moduleGraph = this.moduleGraph;

		const currentProfile = this.profile ? new ModuleProfile() : undefined;

		this.factorizeModule(
			{
				currentProfile,
				factory,
				dependencies,
				factoryResult: true,
				originModule,
				contextInfo,
				context
			},
			(err, factoryResult) => {
				const applyFactoryResultDependencies = () => {
					const { fileDependencies, contextDependencies, missingDependencies } =
						/** @type {ModuleFactoryResult} */ (factoryResult);
					if (fileDependencies) {
						this.fileDependencies.addAll(fileDependencies);
					}
					if (contextDependencies) {
						this.contextDependencies.addAll(contextDependencies);
					}
					if (missingDependencies) {
						this.missingDependencies.addAll(missingDependencies);
					}
				};
				if (err) {
					if (factoryResult) applyFactoryResultDependencies();
					if (dependencies.every((d) => d.optional)) {
						this.warnings.push(err);
						return callback();
					}
					this.errors.push(err);
					return callback(err);
				}

				const newModule =
					/** @type {ModuleFactoryResult} */
					(factoryResult).module;

				if (!newModule) {
					applyFactoryResultDependencies();
					return callback();
				}

				if (currentProfile !== undefined) {
					moduleGraph.setProfile(newModule, currentProfile);
				}

				this.addModule(newModule, (err, _module) => {
					if (err) {
						applyFactoryResultDependencies();
						if (!err.module) {
							err.module = _module;
						}
						this.errors.push(err);

						return callback(err);
					}

					const module =
						/** @type {ModuleWithRestoreFromUnsafeCache} */
						(_module);

					if (
						this._unsafeCache &&
						/** @type {ModuleFactoryResult} */
						(factoryResult).cacheable !== false &&
						module.restoreFromUnsafeCache &&
						this._unsafeCachePredicate(module)
					) {
						const unsafeCacheableModule =
							/** @type {ModuleWithRestoreFromUnsafeCache} */
							(module);
						for (const dependency of dependencies) {
							moduleGraph.setResolvedModule(
								connectOrigin ? originModule : null,
								dependency,
								unsafeCacheableModule
							);
							unsafeCacheDependencies.set(dependency, unsafeCacheableModule);
						}
						if (!unsafeCacheData.has(unsafeCacheableModule)) {
							unsafeCacheData.set(
								unsafeCacheableModule,
								unsafeCacheableModule.getUnsafeCacheData()
							);
						}
					} else {
						applyFactoryResultDependencies();
						for (const dependency of dependencies) {
							moduleGraph.setResolvedModule(
								connectOrigin ? originModule : null,
								dependency,
								module
							);
						}
					}

					moduleGraph.setIssuerIfUnset(
						module,
						originModule !== undefined ? originModule : null
					);
					if (module !== newModule && currentProfile !== undefined) {
						const otherProfile = moduleGraph.getProfile(module);
						if (otherProfile !== undefined) {
							currentProfile.mergeInto(otherProfile);
						} else {
							moduleGraph.setProfile(module, currentProfile);
						}
					}

					this._handleModuleBuildAndDependencies(
						originModule,
						module,
						recursive,
						checkCycle,
						callback
					);
				});
			}
		);
	}

	/**
	 * Handle module build and dependencies.
	 * @private
	 * @param {Module | null} originModule original module
	 * @param {Module} module module
	 * @param {boolean} recursive true if make it recursive, otherwise false
	 * @param {boolean} checkCycle true if need to check cycle, otherwise false
	 * @param {ModuleCallback} callback callback
	 * @returns {void}
	 */
	_handleModuleBuildAndDependencies(
		originModule,
		module,
		recursive,
		checkCycle,
		callback
	) {
		// Check for cycles when build is trigger inside another build
		/** @type {Set<Module> | undefined} */
		let creatingModuleDuringBuildSet;
		if (
			checkCycle &&
			this.buildQueue.isProcessing(/** @type {Module} */ (originModule))
		) {
			// Track build dependency
			creatingModuleDuringBuildSet = this.creatingModuleDuringBuild.get(
				/** @type {Module} */
				(originModule)
			);
			if (creatingModuleDuringBuildSet === undefined) {
				/** @type {Set<Module>} */
				creatingModuleDuringBuildSet = new Set();
				this.creatingModuleDuringBuild.set(
					/** @type {Module} */
					(originModule),
					creatingModuleDuringBuildSet
				);
			}
			creatingModuleDuringBuildSet.add(module);

			// When building is blocked by another module
			// search for a cycle, cancel the cycle by throwing
			// an error (otherwise this would deadlock)
			const blockReasons = this.creatingModuleDuringBuild.get(module);
			if (blockReasons !== undefined) {
				const set = new Set(blockReasons);
				for (const item of set) {
					const blockReasons = this.creatingModuleDuringBuild.get(item);
					if (blockReasons !== undefined) {
						for (const m of blockReasons) {
							if (m === module) {
								return callback(new BuildCycleError(module));
							}
							set.add(m);
						}
					}
				}
			}
		}

		this.buildModule(module, (err) => {
			if (creatingModuleDuringBuildSet !== undefined) {
				creatingModuleDuringBuildSet.delete(module);
			}
			if (err) {
				if (!err.module) {
					err.module = module;
				}
				this.errors.push(err);

				return callback(err);
			}

			if (!recursive) {
				this.processModuleDependenciesNonRecursive(module);
				callback(null, module);
				return;
			}

			// This avoids deadlocks for circular dependencies
			if (this.processDependenciesQueue.isProcessing(module)) {
				return callback(null, module);
			}

			this.processModuleDependencies(module, (err) => {
				if (err) {
					return callback(err);
				}
				callback(null, module);
			});
		});
	}

	/**
	 * Adds the provided string to the compilation.
	 * @param {string} context context string path
	 * @param {Dependency} dependency dependency used to create Module chain
	 * @param {ModuleCallback} callback callback for when module chain is complete
	 * @returns {void} will throw if dependency instance is not a valid Dependency
	 */
	addModuleChain(context, dependency, callback) {
		return this.addModuleTree({ context, dependency }, callback);
	}

	/**
	 * Adds the provided object to the compilation.
	 * @param {object} options options
	 * @param {string} options.context context string path
	 * @param {Dependency} options.dependency dependency used to create Module chain
	 * @param {Partial<ModuleFactoryCreateDataContextInfo>=} options.contextInfo additional context info for the root module
	 * @param {ModuleCallback} callback callback for when module chain is complete
	 * @returns {void} will throw if dependency instance is not a valid Dependency
	 */
	addModuleTree({ context, dependency, contextInfo }, callback) {
		if (
			typeof dependency !== "object" ||
			dependency === null ||
			!dependency.constructor
		) {
			return callback(
				new WebpackError("Parameter 'dependency' must be a Dependency")
			);
		}
		const Dep =
			/** @type {DependencyConstructor} */
			(dependency.constructor);
		const moduleFactory = this.dependencyFactories.get(Dep);
		if (!moduleFactory) {
			return callback(
				new WebpackError(
					`No dependency factory available for this dependency type: ${dependency.constructor.name}`
				)
			);
		}

		this.handleModuleCreation(
			{
				factory: moduleFactory,
				dependencies: [dependency],
				originModule: null,
				contextInfo,
				context
			},
			(err, result) => {
				if (err && this.bail) {
					callback(err);
					this.buildQueue.stop();
					this.rebuildQueue.stop();
					this.processDependenciesQueue.stop();
					this.factorizeQueue.stop();
				} else if (!err && result) {
					callback(null, result);
				} else {
					callback();
				}
			}
		);
	}

	/**
	 * Adds the provided string to the compilation.
	 * @param {string} context context path for entry
	 * @param {Dependency} entry entry dependency that should be followed
	 * @param {string | EntryOptions} optionsOrName options or deprecated name of entry
	 * @param {ModuleCallback} callback callback function
	 * @returns {void} returns
	 */
	addEntry(context, entry, optionsOrName, callback) {
		// TODO webpack 6 remove
		const options =
			typeof optionsOrName === "object"
				? optionsOrName
				: { name: optionsOrName };

		this._addEntryItem(context, entry, "dependencies", options, callback);
	}

	/**
	 * Adds the provided string to the compilation.
	 * @param {string} context context path for entry
	 * @param {Dependency} dependency dependency that should be followed
	 * @param {EntryOptions} options options
	 * @param {ModuleCallback} callback callback function
	 * @returns {void} returns
	 */
	addInclude(context, dependency, options, callback) {
		this._addEntryItem(
			context,
			dependency,
			"includeDependencies",
			options,
			callback
		);
	}

	/**
	 * Adds the provided string to the compilation.
	 * @param {string} context context path for entry
	 * @param {Dependency} entry entry dependency that should be followed
	 * @param {"dependencies" | "includeDependencies"} target type of entry
	 * @param {EntryOptions} options options
	 * @param {ModuleCallback} callback callback function
	 * @returns {void} returns
	 */
	_addEntryItem(context, entry, target, options, callback) {
		const { name } = options;
		/** @type {EntryData | undefined} */
		let entryData =
			name !== undefined ? this.entries.get(name) : this.globalEntry;
		if (entryData === undefined) {
			entryData = {
				dependencies: [],
				includeDependencies: [],
				options: {
					name: undefined,
					...options
				}
			};
			entryData[target].push(entry);
			this.entries.set(
				/** @type {NonNullable<EntryOptions["name"]>} */
				(name),
				entryData
			);
		} else {
			entryData[target].push(entry);
			for (const key_ of Object.keys(options)) {
				const key = /** @type {keyof EntryOptions} */ (key_);
				if (options[key] === undefined) continue;
				if (entryData.options[key] === options[key]) continue;
				if (
					Array.isArray(entryData.options[key]) &&
					Array.isArray(options[key]) &&
					arrayEquals(entryData.options[key], options[key])
				) {
					continue;
				}
				if (entryData.options[key] === undefined) {
					/** @type {EntryOptions[keyof EntryOptions]} */
					(entryData.options[key]) = options[key];
				} else {
					return callback(
						new WebpackError(
							`Conflicting entry option ${key} = ${entryData.options[key]} vs ${options[key]}`
						)
					);
				}
			}
		}

		this.hooks.addEntry.call(entry, options);

		this.addModuleTree(
			{
				context,
				dependency: entry,
				contextInfo: entryData.options.layer
					? { issuerLayer: entryData.options.layer }
					: undefined
			},
			(err, module) => {
				if (err) {
					this.hooks.failedEntry.call(entry, options, err);
					return callback(err);
				}
				this.hooks.succeedEntry.call(
					entry,
					options,
					/** @type {Module} */
					(module)
				);
				return callback(null, module);
			}
		);
	}

	/**
	 * Processes the provided module.
	 * @param {Module} module module to be rebuilt
	 * @param {ModuleCallback} callback callback when module finishes rebuilding
	 * @returns {void}
	 */
	rebuildModule(module, callback) {
		this.rebuildQueue.add(module, callback);
	}

	/**
	 * Processes the provided module.
	 * @param {Module} module module to be rebuilt
	 * @param {ModuleCallback} callback callback when module finishes rebuilding
	 * @returns {void}
	 */
	_rebuildModule(module, callback) {
		this.hooks.rebuildModule.call(module);
		const oldDependencies = [...module.dependencies];
		const oldBlocks = [...module.blocks];
		module.invalidateBuild();
		this.buildQueue.invalidate(module);
		this.buildModule(module, (err) => {
			if (err) {
				return this.hooks.finishRebuildingModule.callAsync(module, (err2) => {
					if (err2) {
						callback(
							makeWebpackError(err2, "Compilation.hooks.finishRebuildingModule")
						);
						return;
					}
					callback(err);
				});
			}

			this.processDependenciesQueue.invalidate(module);
			this.moduleGraph.unfreeze();
			this.processModuleDependencies(module, (err) => {
				if (err) return callback(err);
				this.removeReasonsOfDependencyBlock(module, {
					dependencies: oldDependencies,
					blocks: oldBlocks
				});
				this.hooks.finishRebuildingModule.callAsync(module, (err2) => {
					if (err2) {
						callback(
							makeWebpackError(err2, "Compilation.hooks.finishRebuildingModule")
						);
						return;
					}
					callback(null, module);
				});
			});
		});
	}

	/**
	 * Compute affected modules.
	 * @private
	 * @param {Set<Module>} modules modules
	 */
	_computeAffectedModules(modules) {
		const moduleMemCacheCache = this.compiler.moduleMemCaches;
		if (!moduleMemCacheCache) return;
		if (!this.moduleMemCaches) {
			this.moduleMemCaches = new Map();
			this.moduleGraph.setModuleMemCaches(this.moduleMemCaches);
		}
		const { moduleGraph, moduleMemCaches } = this;
		/** @type {Set<Module>} */
		const affectedModules = new Set();
		/** @type {Set<Module>} */
		const infectedModules = new Set();
		let statNew = 0;
		let statChanged = 0;
		let statUnchanged = 0;
		let statReferencesChanged = 0;
		let statWithoutBuild = 0;

		/**
		 * Compute references.
		 * @param {Module} module module
		 * @returns {WeakReferences | undefined} references
		 */
		const computeReferences = (module) => {
			/** @type {WeakReferences | undefined} */
			let references;
			for (const connection of moduleGraph.getOutgoingConnections(module)) {
				const d = connection.dependency;
				const m = connection.module;
				if (!d || !m || unsafeCacheDependencies.has(d)) continue;
				if (references === undefined) references = new WeakMap();
				references.set(d, m);
			}
			return references;
		};

		/**
		 * Compares references.
		 * @param {Module} module the module
		 * @param {WeakReferences | undefined} references references
		 * @returns {boolean} true, when the references differ
		 */
		const compareReferences = (module, references) => {
			if (references === undefined) return true;
			for (const connection of moduleGraph.getOutgoingConnections(module)) {
				const d = connection.dependency;
				if (!d) continue;
				const entry = references.get(d);
				if (entry === undefined) continue;
				if (entry !== connection.module) return false;
			}
			return true;
		};

		const modulesWithoutCache = new Set(modules);
		for (const [module, cachedMemCache] of moduleMemCacheCache) {
			if (modulesWithoutCache.has(module)) {
				const buildInfo = module.buildInfo;
				if (buildInfo) {
					if (cachedMemCache.buildInfo !== buildInfo) {
						// use a new one
						/** @type {MemCache} */
						const memCache = new WeakTupleMap();
						moduleMemCaches.set(module, memCache);
						affectedModules.add(module);
						cachedMemCache.buildInfo = buildInfo;
						cachedMemCache.references = computeReferences(module);
						cachedMemCache.memCache = memCache;
						statChanged++;
					} else if (!compareReferences(module, cachedMemCache.references)) {
						// use a new one
						/** @type {MemCache} */
						const memCache = new WeakTupleMap();
						moduleMemCaches.set(module, memCache);
						affectedModules.add(module);
						cachedMemCache.references = computeReferences(module);
						cachedMemCache.memCache = memCache;
						statReferencesChanged++;
					} else {
						// keep the old mem cache
						moduleMemCaches.set(module, cachedMemCache.memCache);
						statUnchanged++;
					}
				} else {
					infectedModules.add(module);
					moduleMemCacheCache.delete(module);
					statWithoutBuild++;
				}
				modulesWithoutCache.delete(module);
			} else {
				moduleMemCacheCache.delete(module);
			}
		}

		for (const module of modulesWithoutCache) {
			const buildInfo = module.buildInfo;
			if (buildInfo) {
				// create a new entry
				const memCache = new WeakTupleMap();
				moduleMemCacheCache.set(module, {
					buildInfo,
					references: computeReferences(module),
					memCache
				});
				moduleMemCaches.set(module, memCache);
				affectedModules.add(module);
				statNew++;
			} else {
				infectedModules.add(module);
				statWithoutBuild++;
			}
		}

		/**
		 * Reduce affect type.
		 * @param {Readonly<ModuleGraphConnection[]>} connections connections
		 * @returns {symbol | boolean} result
		 */
		const reduceAffectType = (connections) => {
			let affected = false;
			for (const { dependency } of connections) {
				if (!dependency) continue;
				const type = dependency.couldAffectReferencingModule();
				if (type === Dependency.TRANSITIVE) return Dependency.TRANSITIVE;
				if (type === false) continue;
				affected = true;
			}
			return affected;
		};
		/** @type {Set<Module>} */
		const directOnlyInfectedModules = new Set();
		for (const module of infectedModules) {
			for (const [
				referencingModule,
				connections
			] of moduleGraph.getIncomingConnectionsByOriginModule(module)) {
				if (!referencingModule) continue;
				if (infectedModules.has(referencingModule)) continue;
				const type = reduceAffectType(connections);
				if (!type) continue;
				if (type === true) {
					directOnlyInfectedModules.add(referencingModule);
				} else {
					infectedModules.add(referencingModule);
				}
			}
		}
		for (const module of directOnlyInfectedModules) infectedModules.add(module);
		/** @type {Set<Module>} */
		const directOnlyAffectModules = new Set();
		for (const module of affectedModules) {
			for (const [
				referencingModule,
				connections
			] of moduleGraph.getIncomingConnectionsByOriginModule(module)) {
				if (!referencingModule) continue;
				if (infectedModules.has(referencingModule)) continue;
				if (affectedModules.has(referencingModule)) continue;
				const type = reduceAffectType(connections);
				if (!type) continue;
				if (type === true) {
					directOnlyAffectModules.add(referencingModule);
				} else {
					affectedModules.add(referencingModule);
				}
				/** @type {MemCache} */
				const memCache = new WeakTupleMap();
				const cache =
					/** @type {ModuleMemCachesItem} */
					(moduleMemCacheCache.get(referencingModule));
				cache.memCache = memCache;
				moduleMemCaches.set(referencingModule, memCache);
			}
		}
		for (const module of directOnlyAffectModules) affectedModules.add(module);
		this.logger.log(
			`${Math.round(
				(100 * (affectedModules.size + infectedModules.size)) /
					this.modules.size
			)}% (${affectedModules.size} affected + ${
				infectedModules.size
			} infected of ${
				this.modules.size
			}) modules flagged as affected (${statNew} new modules, ${statChanged} changed, ${statReferencesChanged} references changed, ${statUnchanged} unchanged, ${statWithoutBuild} were not built)`
		);
	}

	_computeAffectedModulesWithChunkGraph() {
		const { moduleMemCaches } = this;
		if (!moduleMemCaches) return;
		const moduleMemCaches2 = (this.moduleMemCaches2 = new Map());
		const { moduleGraph, chunkGraph } = this;
		const key = "memCache2";
		let statUnchanged = 0;
		let statChanged = 0;
		let statNew = 0;
		/**
		 * Compute references.
		 * @param {Module} module module
		 * @returns {References} references
		 */
		const computeReferences = (module) => {
			const id = /** @type {ModuleId} */ (chunkGraph.getModuleId(module));
			/** @type {Map<Module, ModuleId> | undefined} */
			let modules;
			/** @type {(ChunkId | null)[] | undefined} */
			let blocks;
			const outgoing = moduleGraph.getOutgoingConnectionsByModule(module);
			if (outgoing !== undefined) {
				for (const m of outgoing.keys()) {
					if (!m) continue;
					if (modules === undefined) modules = new Map();
					modules.set(m, /** @type {ModuleId} */ (chunkGraph.getModuleId(m)));
				}
			}
			if (module.blocks.length > 0) {
				blocks = [];
				const queue = [...module.blocks];
				for (const block of queue) {
					const chunkGroup = chunkGraph.getBlockChunkGroup(block);
					if (chunkGroup) {
						for (const chunk of chunkGroup.chunks) {
							blocks.push(chunk.id);
						}
					} else {
						blocks.push(null);
					}
					// eslint-disable-next-line prefer-spread
					queue.push.apply(queue, block.blocks);
				}
			}
			return { id, modules, blocks };
		};
		/**
		 * Compares references.
		 * @param {Module} module module
		 * @param {object} references references
		 * @param {string | number} references.id id
		 * @param {Map<Module, string | number | undefined>=} references.modules modules
		 * @param {(string | number | null)[]=} references.blocks blocks
		 * @returns {boolean} ok?
		 */
		const compareReferences = (module, { id, modules, blocks }) => {
			if (id !== chunkGraph.getModuleId(module)) return false;
			if (modules !== undefined) {
				for (const [module, id] of modules) {
					if (chunkGraph.getModuleId(module) !== id) return false;
				}
			}
			if (blocks !== undefined) {
				const queue = [...module.blocks];
				let i = 0;
				for (const block of queue) {
					const chunkGroup = chunkGraph.getBlockChunkGroup(block);
					if (chunkGroup) {
						for (const chunk of chunkGroup.chunks) {
							if (i >= blocks.length || blocks[i++] !== chunk.id) return false;
						}
					} else if (i >= blocks.length || blocks[i++] !== null) {
						return false;
					}
					// eslint-disable-next-line prefer-spread
					queue.push.apply(queue, block.blocks);
				}
				if (i !== blocks.length) return false;
			}
			return true;
		};

		for (const [module, memCache] of moduleMemCaches) {
			/** @type {{ references: References, memCache: MemCache } | undefined} */
			const cache = memCache.get(key);
			if (cache === undefined) {
				/** @type {WeakTupleMap<Module[], RuntimeRequirements | null> | undefined} */
				const memCache2 = new WeakTupleMap();
				memCache.set(key, {
					references: computeReferences(module),
					memCache: memCache2
				});
				moduleMemCaches2.set(module, memCache2);
				statNew++;
			} else if (!compareReferences(module, cache.references)) {
				/** @type {WeakTupleMap<Module[], RuntimeRequirements | null> | undefined} */
				const memCache = new WeakTupleMap();
				cache.references = computeReferences(module);
				cache.memCache = memCache;
				moduleMemCaches2.set(module, memCache);
				statChanged++;
			} else {
				moduleMemCaches2.set(module, cache.memCache);
				statUnchanged++;
			}
		}

		this.logger.log(
			`${Math.round(
				(100 * statChanged) / (statNew + statChanged + statUnchanged)
			)}% modules flagged as affected by chunk graph (${statNew} new modules, ${statChanged} changed, ${statUnchanged} unchanged)`
		);
	}

	/**
	 * Processes the provided callback.
	 * @param {Callback} callback callback
	 */
	finish(callback) {
		this.factorizeQueue.clear();
		if (this.profile) {
			this.logger.time("finish module profiles");

			const ParallelismFactorCalculator = require("./util/ParallelismFactorCalculator");

			const p = new ParallelismFactorCalculator();
			const moduleGraph = this.moduleGraph;
			/** @type {Map<Module, ModuleProfile>} */
			const modulesWithProfiles = new Map();
			for (const module of this.modules) {
				const profile = moduleGraph.getProfile(module);
				if (!profile) continue;
				modulesWithProfiles.set(module, profile);
				p.range(
					profile.buildingStartTime,
					profile.buildingEndTime,
					(f) => (profile.buildingParallelismFactor = f)
				);
				p.range(
					profile.factoryStartTime,
					profile.factoryEndTime,
					(f) => (profile.factoryParallelismFactor = f)
				);
				p.range(
					profile.integrationStartTime,
					profile.integrationEndTime,
					(f) => (profile.integrationParallelismFactor = f)
				);
				p.range(
					profile.storingStartTime,
					profile.storingEndTime,
					(f) => (profile.storingParallelismFactor = f)
				);
				p.range(
					profile.restoringStartTime,
					profile.restoringEndTime,
					(f) => (profile.restoringParallelismFactor = f)
				);
				if (profile.additionalFactoryTimes) {
					for (const { start, end } of profile.additionalFactoryTimes) {
						const influence = (end - start) / profile.additionalFactories;
						p.range(
							start,
							end,
							(f) =>
								(profile.additionalFactoriesParallelismFactor += f * influence)
						);
					}
				}
			}
			p.calculate();

			const logger = this.getLogger("webpack.Compilation.ModuleProfile");
			// Avoid coverage problems due indirect changes
			/**
			 * Processes the provided value.
			 * @param {number} value value
			 * @param {string} msg message
			 */
			/* istanbul ignore next */
			const logByValue = (value, msg) => {
				if (value > 1000) {
					logger.error(msg);
				} else if (value > 500) {
					logger.warn(msg);
				} else if (value > 200) {
					logger.info(msg);
				} else if (value > 30) {
					logger.log(msg);
				} else {
					logger.debug(msg);
				}
			};
			/**
			 * Log normal summary.
			 * @param {string} category a category
			 * @param {(profile: ModuleProfile) => number} getDuration get duration callback
			 * @param {(profile: ModuleProfile) => number} getParallelism get parallelism callback
			 */
			const logNormalSummary = (category, getDuration, getParallelism) => {
				let sum = 0;
				let max = 0;
				for (const [module, profile] of modulesWithProfiles) {
					const p = getParallelism(profile);
					const d = getDuration(profile);
					if (d === 0 || p === 0) continue;
					const t = d / p;
					sum += t;
					if (t <= 10) continue;
					logByValue(
						t,
						` | ${Math.round(t)} ms${
							p >= 1.1 ? ` (parallelism ${Math.round(p * 10) / 10})` : ""
						} ${category} > ${module.readableIdentifier(this.requestShortener)}`
					);
					max = Math.max(max, t);
				}
				if (sum <= 10) return;
				logByValue(
					Math.max(sum / 10, max),
					`${Math.round(sum)} ms ${category}`
				);
			};
			/**
			 * Log by loaders summary.
			 * @param {string} category a category
			 * @param {(profile: ModuleProfile) => number} getDuration get duration callback
			 * @param {(profile: ModuleProfile) => number} getParallelism get parallelism callback
			 */
			const logByLoadersSummary = (category, getDuration, getParallelism) => {
				/** @type {Map<string, { module: Module, profile: ModuleProfile }[]>} */
				const map = new Map();
				for (const [module, profile] of modulesWithProfiles) {
					const list = getOrInsert(
						map,
						`${module.type}!${module.identifier().replace(/(!|^)[^!]*$/, "")}`,
						() => []
					);
					list.push({ module, profile });
				}

				let sum = 0;
				let max = 0;
				for (const [key, modules] of map) {
					let innerSum = 0;
					let innerMax = 0;
					for (const { module, profile } of modules) {
						const p = getParallelism(profile);
						const d = getDuration(profile);
						if (d === 0 || p === 0) continue;
						const t = d / p;
						innerSum += t;
						if (t <= 10) continue;
						logByValue(
							t,
							` |  | ${Math.round(t)} ms${
								p >= 1.1 ? ` (parallelism ${Math.round(p * 10) / 10})` : ""
							} ${category} > ${module.readableIdentifier(
								this.requestShortener
							)}`
						);
						innerMax = Math.max(innerMax, t);
					}
					sum += innerSum;
					if (innerSum <= 10) continue;
					const idx = key.indexOf("!");
					const loaders = key.slice(idx + 1);
					const moduleType = key.slice(0, idx);
					const t = Math.max(innerSum / 10, innerMax);
					logByValue(
						t,
						` | ${Math.round(innerSum)} ms ${category} > ${
							loaders
								? `${
										modules.length
									} x ${moduleType} with ${this.requestShortener.shorten(
										loaders
									)}`
								: `${modules.length} x ${moduleType}`
						}`
					);
					max = Math.max(max, t);
				}
				if (sum <= 10) return;
				logByValue(
					Math.max(sum / 10, max),
					`${Math.round(sum)} ms ${category}`
				);
			};
			logNormalSummary(
				"resolve to new modules",
				(p) => p.factory,
				(p) => p.factoryParallelismFactor
			);
			logNormalSummary(
				"resolve to existing modules",
				(p) => p.additionalFactories,
				(p) => p.additionalFactoriesParallelismFactor
			);
			logNormalSummary(
				"integrate modules",
				(p) => p.restoring,
				(p) => p.restoringParallelismFactor
			);
			logByLoadersSummary(
				"build modules",
				(p) => p.building,
				(p) => p.buildingParallelismFactor
			);
			logNormalSummary(
				"store modules",
				(p) => p.storing,
				(p) => p.storingParallelismFactor
			);
			logNormalSummary(
				"restore modules",
				(p) => p.restoring,
				(p) => p.restoringParallelismFactor
			);
			this.logger.timeEnd("finish module profiles");
		}
		this.logger.time("compute affected modules");
		this._computeAffectedModules(this.modules);
		this.logger.timeEnd("compute affected modules");
		this.logger.time("finish modules");
		const { modules, moduleMemCaches } = this;
		this.hooks.finishModules.callAsync(modules, (err) => {
			this.logger.timeEnd("finish modules");
			if (err) return callback(/** @type {WebpackError} */ (err));

			// extract warnings and errors from modules
			this.moduleGraph.freeze("dependency errors");
			// TODO keep a cacheToken (= {}) for each module in the graph
			// create a new one per compilation and flag all updated files
			// and parents with it
			this.logger.time("report dependency errors and warnings");
			for (const module of modules) {
				// TODO only run for modules with changed cacheToken
				// global WeakMap<CacheToken, WeakSet<Module>> to keep modules without errors/warnings
				const memCache = moduleMemCaches && moduleMemCaches.get(module);
				if (memCache && memCache.get("noWarningsOrErrors")) continue;
				let hasProblems = this.reportDependencyErrorsAndWarnings(module, [
					module
				]);
				const errors = module.getErrors();
				if (errors !== undefined) {
					for (const error of errors) {
						if (!error.module) {
							error.module = module;
						}
						this.errors.push(error);
						hasProblems = true;
					}
				}
				const warnings = module.getWarnings();
				if (warnings !== undefined) {
					for (const warning of warnings) {
						if (!warning.module) {
							warning.module = module;
						}
						this.warnings.push(warning);
						hasProblems = true;
					}
				}
				if (!hasProblems && memCache) memCache.set("noWarningsOrErrors", true);
			}
			this.moduleGraph.unfreeze();
			this.logger.timeEnd("report dependency errors and warnings");

			callback();
		});
	}

	unseal() {
		this.hooks.unseal.call();
		this.chunks.clear();
		this.chunkGroups.length = 0;
		this.namedChunks.clear();
		this.namedChunkGroups.clear();
		this.entrypoints.clear();
		this.additionalChunkAssets.length = 0;
		this.assets = {};
		this.assetsInfo.clear();
		this.moduleGraph.removeAllModuleAttributes();
		this.moduleGraph.unfreeze();
		this.moduleMemCaches2 = undefined;
	}

	/**
	 * Processes the provided callback.
	 * @param {Callback} callback signals when the call finishes
	 * @returns {void}
	 */
	seal(callback) {
		/**
		 * Processes the provided err.
		 * @param {WebpackError=} err err
		 * @returns {void}
		 */
		const finalCallback = (err) => {
			this.factorizeQueue.clear();
			this.buildQueue.clear();
			this.rebuildQueue.clear();
			this.processDependenciesQueue.clear();
			this.addModuleQueue.clear();
			return callback(err);
		};

		if (this._backCompat) {
			for (const module of this.modules) {
				ChunkGraph.setChunkGraphForModule(module, this.chunkGraph);
			}
		}

		this.hooks.seal.call();

		this.logger.time("optimize dependencies");
		while (this.hooks.optimizeDependencies.call(this.modules)) {
			/* empty */
		}
		this.hooks.afterOptimizeDependencies.call(this.modules);
		this.logger.timeEnd("optimize dependencies");

		this.logger.time("create chunks");
		this.hooks.beforeChunks.call();
		this.moduleGraph.freeze("seal");
		/** @type {Map<Entrypoint, Module[]>} */
		const chunkGraphInit = new Map();
		for (const [name, { dependencies, includeDependencies, options }] of this
			.entries) {
			const chunk = this.addChunk(name);
			if (options.filename) {
				chunk.filenameTemplate = options.filename;
			}
			const entrypoint = new Entrypoint(options);
			if (!options.dependOn && !options.runtime) {
				entrypoint.setRuntimeChunk(chunk);
			}
			entrypoint.setEntrypointChunk(chunk);
			this.namedChunkGroups.set(name, entrypoint);
			this.entrypoints.set(name, entrypoint);
			this.chunkGroups.push(entrypoint);
			connectChunkGroupAndChunk(entrypoint, chunk);

			/** @type {Set<Module>} */
			const entryModules = new Set();
			for (const dep of [...this.globalEntry.dependencies, ...dependencies]) {
				entrypoint.addOrigin(
					null,
					{ name },
					/** @type {Dependency & { request: string }} */
					(dep).request
				);

				const module = this.moduleGraph.getModule(dep);
				if (module) {
					this.chunkGraph.connectChunkAndEntryModule(chunk, module, entrypoint);
					entryModules.add(module);
					const modulesList = chunkGraphInit.get(entrypoint);
					if (modulesList === undefined) {
						chunkGraphInit.set(entrypoint, [module]);
					} else {
						modulesList.push(module);
					}
				}
			}

			this.assignDepths(entryModules);

			/**
			 * Returns sorted deps.
			 * @param {Dependency[]} deps deps
			 * @returns {Module[]} sorted deps
			 */
			const mapAndSort = (deps) =>
				/** @type {Module[]} */
				(
					deps.map((dep) => this.moduleGraph.getModule(dep)).filter(Boolean)
				).sort(compareModulesByIdentifier);
			const includedModules = [
				...mapAndSort(this.globalEntry.includeDependencies),
				...mapAndSort(includeDependencies)
			];

			let modulesList = chunkGraphInit.get(entrypoint);
			if (modulesList === undefined) {
				chunkGraphInit.set(entrypoint, (modulesList = []));
			}
			for (const module of includedModules) {
				this.assignDepths([module]);
				modulesList.push(module);
			}
		}
		/** @type {Set<Chunk>} */
		const runtimeChunks = new Set();
		outer: for (const [
			name,
			{
				options: { dependOn, runtime }
			}
		] of this.entries) {
			if (dependOn && runtime) {
				const err =
					new WebpackError(`Entrypoint '${name}' has 'dependOn' and 'runtime' specified. This is not valid.
Entrypoints that depend on other entrypoints do not have their own runtime.
They will use the runtime(s) from referenced entrypoints instead.
Remove the 'runtime' option from the entrypoint.`);
				const entry = /** @type {Entrypoint} */ (this.entrypoints.get(name));
				err.chunk = entry.getEntrypointChunk();
				this.errors.push(err);
			}
			if (dependOn) {
				const entry = /** @type {Entrypoint} */ (this.entrypoints.get(name));
				const referencedChunks = entry
					.getEntrypointChunk()
					.getAllReferencedChunks();
				for (const dep of dependOn) {
					const dependency = this.entrypoints.get(dep);
					if (!dependency) {
						throw new Error(
							`Entry ${name} depends on ${dep}, but this entry was not found`
						);
					}
					if (referencedChunks.has(dependency.getEntrypointChunk())) {
						const err = new WebpackError(
							`Entrypoints '${name}' and '${dep}' use 'dependOn' to depend on each other in a circular way.`
						);
						const entryChunk = entry.getEntrypointChunk();
						err.chunk = entryChunk;
						this.errors.push(err);
						entry.setRuntimeChunk(entryChunk);
						continue outer;
					}
					connectEntrypointAndDependOn(entry, dependency);
					connectChunkGroupParentAndChild(dependency, entry);
				}
			} else if (runtime) {
				const entry = /** @type {Entrypoint} */ (this.entrypoints.get(name));
				let chunk = this.namedChunks.get(runtime);
				if (chunk) {
					if (!runtimeChunks.has(chunk)) {
						const err =
							new WebpackError(`Entrypoint '${name}' has a 'runtime' option which points to another entrypoint named '${runtime}'.
It's not valid to use other entrypoints as runtime chunk.
Did you mean to use 'dependOn: ${JSON.stringify(
								runtime
							)}' instead to allow using entrypoint '${name}' within the runtime of entrypoint '${runtime}'? For this '${runtime}' must always be loaded when '${name}' is used.
Or do you want to use the entrypoints '${name}' and '${runtime}' independently on the same page with a shared runtime? In this case give them both the same value for the 'runtime' option. It must be a name not already used by an entrypoint.`);
						const entryChunk =
							/** @type {Chunk} */
							(entry.getEntrypointChunk());
						err.chunk = entryChunk;
						this.errors.push(err);
						entry.setRuntimeChunk(entryChunk);
						continue;
					}
				} else {
					chunk = this.addChunk(runtime);
					chunk.preventIntegration = true;
					runtimeChunks.add(chunk);
				}
				entry.unshiftChunk(chunk);
				chunk.addGroup(entry);
				entry.setRuntimeChunk(chunk);
			}
		}

		buildChunkGraph(this, chunkGraphInit);
		this.hooks.afterChunks.call(this.chunks);
		this.logger.timeEnd("create chunks");

		this.logger.time("optimize");
		this.hooks.optimize.call();

		while (this.hooks.optimizeModules.call(this.modules)) {
			/* empty */
		}
		this.hooks.afterOptimizeModules.call(this.modules);

		while (this.hooks.optimizeChunks.call(this.chunks, this.chunkGroups)) {
			/* empty */
		}
		this.hooks.afterOptimizeChunks.call(this.chunks, this.chunkGroups);

		this.hooks.optimizeTree.callAsync(this.chunks, this.modules, (err) => {
			if (err) {
				return finalCallback(
					makeWebpackError(err, "Compilation.hooks.optimizeTree")
				);
			}

			this.hooks.afterOptimizeTree.call(this.chunks, this.modules);

			this.hooks.optimizeChunkModules.callAsync(
				this.chunks,
				this.modules,
				(err) => {
					if (err) {
						return finalCallback(
							makeWebpackError(err, "Compilation.hooks.optimizeChunkModules")
						);
					}

					this.hooks.afterOptimizeChunkModules.call(this.chunks, this.modules);

					const shouldRecord = this.hooks.shouldRecord.call() !== false;

					this.hooks.reviveModules.call(
						this.modules,
						/** @type {Records} */
						(this.records)
					);
					this.hooks.beforeModuleIds.call(this.modules);
					this.hooks.moduleIds.call(this.modules);
					this.hooks.optimizeModuleIds.call(this.modules);
					this.hooks.afterOptimizeModuleIds.call(this.modules);

					this.hooks.reviveChunks.call(
						this.chunks,
						/** @type {Records} */
						(this.records)
					);
					this.hooks.beforeChunkIds.call(this.chunks);
					this.hooks.chunkIds.call(this.chunks);
					this.hooks.optimizeChunkIds.call(this.chunks);
					this.hooks.afterOptimizeChunkIds.call(this.chunks);

					this.assignRuntimeIds();

					this.logger.time("compute affected modules with chunk graph");
					this._computeAffectedModulesWithChunkGraph();
					this.logger.timeEnd("compute affected modules with chunk graph");

					this.sortItemsWithChunkIds();

					if (shouldRecord) {
						this.hooks.recordModules.call(
							this.modules,
							/** @type {Records} */
							(this.records)
						);
						this.hooks.recordChunks.call(
							this.chunks,
							/** @type {Records} */
							(this.records)
						);
					}

					this.hooks.optimizeCodeGeneration.call(this.modules);
					this.logger.timeEnd("optimize");

					this.logger.time("module hashing");
					this.hooks.beforeModuleHash.call();
					this.createModuleHashes();
					this.hooks.afterModuleHash.call();
					this.logger.timeEnd("module hashing");

					this.logger.time("code generation");
					this.hooks.beforeCodeGeneration.call();
					this.codeGeneration((err) => {
						if (err) {
							return finalCallback(err);
						}
						this.hooks.afterCodeGeneration.call();
						this.logger.timeEnd("code generation");

						this.logger.time("runtime requirements");
						this.hooks.beforeRuntimeRequirements.call();
						this.processRuntimeRequirements();
						this.hooks.afterRuntimeRequirements.call();
						this.logger.timeEnd("runtime requirements");

						this.logger.time("hashing");
						this.hooks.beforeHash.call();
						const codeGenerationJobs = this.createHash();
						this.hooks.afterHash.call();
						this.logger.timeEnd("hashing");

						this._runCodeGenerationJobs(codeGenerationJobs, (err) => {
							if (err) {
								return finalCallback(err);
							}

							if (shouldRecord) {
								this.logger.time("record hash");
								this.hooks.recordHash.call(
									/** @type {Records} */
									(this.records)
								);
								this.logger.timeEnd("record hash");
							}

							this.logger.time("module assets");
							this.clearAssets();

							this.hooks.beforeModuleAssets.call();
							this.createModuleAssets();
							this.logger.timeEnd("module assets");

							const cont = () => {
								this.logger.time("process assets");
								this.hooks.processAssets.callAsync(this.assets, (err) => {
									if (err) {
										return finalCallback(
											makeWebpackError(err, "Compilation.hooks.processAssets")
										);
									}
									this.hooks.afterProcessAssets.call(this.assets);
									this.logger.timeEnd("process assets");
									this.assets =
										/** @type {CompilationAssets} */
										(
											this._backCompat
												? soonFrozenObjectDeprecation(
														this.assets,
														"Compilation.assets",
														"DEP_WEBPACK_COMPILATION_ASSETS",
														`BREAKING CHANGE: No more changes should happen to Compilation.assets after sealing the Compilation.
	Do changes to assets earlier, e. g. in Compilation.hooks.processAssets.
	Make sure to select an appropriate stage from Compilation.PROCESS_ASSETS_STAGE_*.`
													)
												: Object.freeze(this.assets)
										);

									this.summarizeDependencies();
									if (shouldRecord) {
										this.hooks.record.call(
											this,
											/** @type {Records} */
											(this.records)
										);
									}

									if (this.hooks.needAdditionalSeal.call()) {
										this.unseal();
										return this.seal(callback);
									}
									return this.hooks.afterSeal.callAsync((err) => {
										if (err) {
											return finalCallback(
												makeWebpackError(err, "Compilation.hooks.afterSeal")
											);
										}
										this.fileSystemInfo.logStatistics();
										finalCallback();
									});
								});
							};

							this.logger.time("create chunk assets");
							if (this.hooks.shouldGenerateChunkAssets.call() !== false) {
								this.hooks.beforeChunkAssets.call();
								this.createChunkAssets((err) => {
									this.logger.timeEnd("create chunk assets");
									if (err) {
										return finalCallback(err);
									}
									cont();
								});
							} else {
								this.logger.timeEnd("create chunk assets");
								cont();
							}
						});
					});
				}
			);
		});
	}

	/**
	 * Report dependency errors and warnings.
	 * @param {Module} module module to report from
	 * @param {DependenciesBlock[]} blocks blocks to report from
	 * @returns {boolean} true, when it has warnings or errors
	 */
	reportDependencyErrorsAndWarnings(module, blocks) {
		let hasProblems = false;
		for (const block of blocks) {
			const dependencies = block.dependencies;

			for (const d of dependencies) {
				const warnings = d.getWarnings(this.moduleGraph);
				if (warnings) {
					for (const w of warnings) {
						const warning = new ModuleDependencyWarning(module, w, d.loc);
						this.warnings.push(warning);
						hasProblems = true;
					}
				}
				const errors = d.getErrors(this.moduleGraph);
				if (errors) {
					for (const e of errors) {
						const error = new ModuleDependencyError(module, e, d.loc);
						this.errors.push(error);
						hasProblems = true;
					}
				}
			}

			if (this.reportDependencyErrorsAndWarnings(module, block.blocks)) {
				hasProblems = true;
			}
		}
		return hasProblems;
	}

	/**
	 * Generates code and runtime requirements for this module.
	 * @param {Callback} callback callback
	 */
	codeGeneration(callback) {
		const { chunkGraph } = this;
		this.codeGenerationResults = new CodeGenerationResults(
			this.outputOptions.hashFunction
		);
		/** @type {CodeGenerationJobs} */
		const jobs = [];
		for (const module of this.modules) {
			const runtimes = chunkGraph.getModuleRuntimes(module);
			if (runtimes.size === 1) {
				for (const runtime of runtimes) {
					const hash = chunkGraph.getModuleHash(module, runtime);
					jobs.push({ module, hash, runtime, runtimes: [runtime] });
				}
			} else if (runtimes.size > 1) {
				/** @type {Map<string, { runtimes: RuntimeSpec[] }>} */
				const map = new Map();
				for (const runtime of runtimes) {
					const hash = chunkGraph.getModuleHash(module, runtime);
					const job = map.get(hash);
					if (job === undefined) {
						const newJob = { module, hash, runtime, runtimes: [runtime] };
						jobs.push(newJob);
						map.set(hash, newJob);
					} else {
						job.runtimes.push(runtime);
					}
				}
			}
		}

		this._runCodeGenerationJobs(jobs, callback);
	}

	/**
	 * Run code generation jobs.
	 * @private
	 * @param {CodeGenerationJobs} jobs code generation jobs
	 * @param {Callback} callback callback
	 * @returns {void}
	 */
	_runCodeGenerationJobs(jobs, callback) {
		if (jobs.length === 0) {
			return callback();
		}
		let statModulesFromCache = 0;
		let statModulesGenerated = 0;
		const { chunkGraph, moduleGraph, dependencyTemplates, runtimeTemplate } =
			this;
		const results =
			/** @type {CodeGenerationResults} */
			(this.codeGenerationResults);
		/** @type {WebpackError[]} */
		const errors = [];
		/** @type {NotCodeGeneratedModules | undefined} */
		let notCodeGeneratedModules;
		const runIteration = () => {
			/** @type {CodeGenerationJobs} */
			let delayedJobs = [];
			/** @type {Set<Module>} */
			let delayedModules = new Set();
			asyncLib.eachLimit(
				jobs,
				this.options.parallelism,
				(job, callback) => {
					const { module } = job;
					const { codeGenerationDependencies } = module;
					if (
						codeGenerationDependencies !== undefined &&
						(notCodeGeneratedModules === undefined ||
							codeGenerationDependencies.some((dep) => {
								const referencedModule = /** @type {Module} */ (
									moduleGraph.getModule(dep)
								);
								return /** @type {NotCodeGeneratedModules} */ (
									notCodeGeneratedModules
								).has(referencedModule);
							}))
					) {
						delayedJobs.push(job);
						delayedModules.add(module);
						return callback();
					}
					const { hash, runtime, runtimes } = job;
					this._codeGenerationModule(
						module,
						runtime,
						runtimes,
						hash,
						dependencyTemplates,
						chunkGraph,
						moduleGraph,
						runtimeTemplate,
						errors,
						results,
						(err, codeGenerated) => {
							if (codeGenerated) statModulesGenerated++;
							else statModulesFromCache++;
							callback(err);
						}
					);
				},
				(err) => {
					if (err) return callback(/** @type {WebpackError} */ (err));
					if (delayedJobs.length > 0) {
						if (delayedJobs.length === jobs.length) {
							return callback(
								/** @type {WebpackError} */ (
									new Error(
										`Unable to make progress during code generation because of circular code generation dependency: ${Array.from(
											delayedModules,
											(m) => m.identifier()
										).join(", ")}`
									)
								)
							);
						}
						jobs = delayedJobs;
						delayedJobs = [];
						notCodeGeneratedModules = delayedModules;
						delayedModules = new Set();
						return runIteration();
					}
					if (errors.length > 0) {
						errors.sort(
							compareSelect((err) => err.module, compareModulesByIdentifier)
						);
						for (const error of errors) {
							this.errors.push(error);
						}
					}
					this.logger.log(
						`${Math.round(
							(100 * statModulesGenerated) /
								(statModulesGenerated + statModulesFromCache)
						)}% code generated (${statModulesGenerated} generated, ${statModulesFromCache} from cache)`
					);
					callback();
				}
			);
		};
		runIteration();
	}

	/**
	 * Code generation module.
	 * @param {Module} module module
	 * @param {RuntimeSpec} runtime runtime
	 * @param {RuntimeSpec[]} runtimes runtimes
	 * @param {string} hash hash
	 * @param {DependencyTemplates} dependencyTemplates dependencyTemplates
	 * @param {ChunkGraph} chunkGraph chunkGraph
	 * @param {ModuleGraph} moduleGraph moduleGraph
	 * @param {RuntimeTemplate} runtimeTemplate runtimeTemplate
	 * @param {WebpackError[]} errors errors
	 * @param {CodeGenerationResults} results results
	 * @param {(err?: WebpackError | null, result?: boolean) => void} callback callback
	 */
	_codeGenerationModule(
		module,
		runtime,
		runtimes,
		hash,
		dependencyTemplates,
		chunkGraph,
		moduleGraph,
		runtimeTemplate,
		errors,
		results,
		callback
	) {
		let codeGenerated = false;
		const cache = new MultiItemCache(
			runtimes.map((runtime) =>
				this._codeGenerationCache.getItemCache(
					`${module.identifier()}|${getRuntimeKey(runtime)}`,
					`${hash}|${dependencyTemplates.getHash()}`
				)
			)
		);
		cache.get((err, cachedResult) => {
			if (err) return callback(/** @type {WebpackError} */ (err));
			/** @type {CodeGenerationResult} */
			let result;
			if (!cachedResult) {
				try {
					codeGenerated = true;
					this.codeGeneratedModules.add(module);
					result = module.codeGeneration({
						chunkGraph,
						moduleGraph,
						dependencyTemplates,
						runtimeTemplate,
						runtime,
						runtimes,
						codeGenerationResults: results,
						compilation: this
					});
				} catch (err) {
					errors.push(
						new CodeGenerationError(module, /** @type {Error} */ (err))
					);
					result = cachedResult = {
						sources: new Map(),
						runtimeRequirements: null
					};
				}
			} else {
				result = cachedResult;
			}
			for (const runtime of runtimes) {
				results.add(module, runtime, result);
			}
			if (!cachedResult) {
				cache.store(result, (err) =>
					callback(/** @type {WebpackError} */ (err), codeGenerated)
				);
			} else {
				callback(null, codeGenerated);
			}
		});
	}

	_getChunkGraphEntries() {
		/** @type {Set<Chunk>} */
		const treeEntries = new Set();
		for (const ep of this.entrypoints.values()) {
			const chunk = ep.getRuntimeChunk();
			if (chunk) treeEntries.add(chunk);
		}
		for (const ep of this.asyncEntrypoints) {
			const chunk = ep.getRuntimeChunk();
			if (chunk) treeEntries.add(chunk);
		}
		return treeEntries;
	}

	/**
	 * Process runtime requirements.
	 * @param {object} options options
	 * @param {ChunkGraph=} options.chunkGraph the chunk graph
	 * @param {Iterable<Module>=} options.modules modules
	 * @param {Iterable<Chunk>=} options.chunks chunks
	 * @param {CodeGenerationResults=} options.codeGenerationResults codeGenerationResults
	 * @param {Iterable<Chunk>=} options.chunkGraphEntries chunkGraphEntries
	 * @returns {void}
	 */
	processRuntimeRequirements({
		chunkGraph = this.chunkGraph,
		modules = this.modules,
		chunks = this.chunks,
		codeGenerationResults = /** @type {CodeGenerationResults} */ (
			this.codeGenerationResults
		),
		chunkGraphEntries = this._getChunkGraphEntries()
	} = {}) {
		const context = { chunkGraph, codeGenerationResults };
		const { moduleMemCaches2 } = this;
		this.logger.time("runtime requirements.modules");
		const additionalModuleRuntimeRequirements =
			this.hooks.additionalModuleRuntimeRequirements;
		const runtimeRequirementInModule = this.hooks.runtimeRequirementInModule;
		for (const module of modules) {
			if (chunkGraph.getNumberOfModuleChunks(module) > 0) {
				const memCache = moduleMemCaches2 && moduleMemCaches2.get(module);
				for (const runtime of chunkGraph.getModuleRuntimes(module)) {
					if (memCache) {
						const cached = memCache.get(
							`moduleRuntimeRequirements-${getRuntimeKey(runtime)}`
						);
						if (cached !== undefined) {
							if (cached !== null) {
								chunkGraph.addModuleRuntimeRequirements(
									module,
									runtime,
									/** @type {RuntimeRequirements} */
									(cached),
									false
								);
							}
							continue;
						}
					}
					/** @type {RuntimeRequirements} */
					let set;
					const runtimeRequirements =
						codeGenerationResults.getRuntimeRequirements(module, runtime);
					if (runtimeRequirements && runtimeRequirements.size > 0) {
						set = new Set(runtimeRequirements);
					} else if (additionalModuleRuntimeRequirements.isUsed()) {
						set = new Set();
					} else {
						if (memCache) {
							memCache.set(
								`moduleRuntimeRequirements-${getRuntimeKey(runtime)}`,
								null
							);
						}
						continue;
					}
					additionalModuleRuntimeRequirements.call(module, set, context);

					for (const r of set) {
						const hook = runtimeRequirementInModule.get(r);
						if (hook !== undefined) hook.call(module, set, context);
					}
					if (set.size === 0) {
						if (memCache) {
							memCache.set(
								`moduleRuntimeRequirements-${getRuntimeKey(runtime)}`,
								null
							);
						}
					} else if (memCache) {
						memCache.set(
							`moduleRuntimeRequirements-${getRuntimeKey(runtime)}`,
							set
						);
						chunkGraph.addModuleRuntimeRequirements(
							module,
							runtime,
							set,
							false
						);
					} else {
						chunkGraph.addModuleRuntimeRequirements(module, runtime, set);
					}
				}
			}
		}
		this.logger.timeEnd("runtime requirements.modules");

		this.logger.time("runtime requirements.chunks");
		for (const chunk of chunks) {
			/** @type {RuntimeRequirements} */
			const set = new Set();
			for (const module of chunkGraph.getChunkModulesIterable(chunk)) {
				const runtimeRequirements = chunkGraph.getModuleRuntimeRequirements(
					module,
					chunk.runtime
				);
				for (const r of runtimeRequirements) set.add(r);
			}
			this.hooks.additionalChunkRuntimeRequirements.call(chunk, set, context);

			for (const r of set) {
				this.hooks.runtimeRequirementInChunk.for(r).call(chunk, set, context);
			}

			chunkGraph.addChunkRuntimeRequirements(chunk, set);
		}
		this.logger.timeEnd("runtime requirements.chunks");

		this.logger.time("runtime requirements.entries");
		for (const treeEntry of chunkGraphEntries) {
			/** @type {RuntimeRequirements} */
			const set = new Set();
			for (const chunk of treeEntry.getAllReferencedChunks()) {
				const runtimeRequirements =
					chunkGraph.getChunkRuntimeRequirements(chunk);
				for (const r of runtimeRequirements) set.add(r);
			}

			this.hooks.additionalTreeRuntimeRequirements.call(
				treeEntry,
				set,
				context
			);

			for (const r of set) {
				this.hooks.runtimeRequirementInTree
					.for(r)
					.call(treeEntry, set, context);
			}

			chunkGraph.addTreeRuntimeRequirements(treeEntry, set);
		}
		this.logger.timeEnd("runtime requirements.entries");
	}

	// TODO webpack 6 make chunkGraph argument non-optional
	/**
	 * Adds runtime module.
	 * @param {Chunk} chunk target chunk
	 * @param {RuntimeModule} module runtime module
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @returns {void}
	 */
	addRuntimeModule(chunk, module, chunkGraph = this.chunkGraph) {
		// Deprecated ModuleGraph association
		if (this._backCompat) {
			ModuleGraph.setModuleGraphForModule(module, this.moduleGraph);
		}

		// add it to the list
		this.modules.add(module);
		this._modules.set(module.identifier(), module);

		// connect to the chunk graph
		chunkGraph.connectChunkAndModule(chunk, module);
		chunkGraph.connectChunkAndRuntimeModule(chunk, module);
		if (module.fullHash) {
			chunkGraph.addFullHashModuleToChunk(chunk, module);
		} else if (module.dependentHash) {
			chunkGraph.addDependentHashModuleToChunk(chunk, module);
		}

		// attach runtime module
		module.attach(this, chunk, chunkGraph);

		// Setup internals
		const exportsInfo = this.moduleGraph.getExportsInfo(module);
		exportsInfo.setHasProvideInfo();
		if (typeof chunk.runtime === "string") {
			exportsInfo.setUsedForSideEffectsOnly(chunk.runtime);
		} else if (chunk.runtime === undefined) {
			exportsInfo.setUsedForSideEffectsOnly(undefined);
		} else {
			for (const runtime of chunk.runtime) {
				exportsInfo.setUsedForSideEffectsOnly(runtime);
			}
		}
		chunkGraph.addModuleRuntimeRequirements(
			module,
			chunk.runtime,
			new Set([RuntimeGlobals.requireScope])
		);

		// runtime modules don't need ids
		chunkGraph.setModuleId(module, "");

		// Call hook
		this.hooks.runtimeModule.call(module, chunk);
	}

	/**
	 * If `module` is passed, `loc` and `request` must also be passed.
	 * @param {string | ChunkGroupOptions} groupOptions options for the chunk group
	 * @param {Module=} module the module the references the chunk group
	 * @param {DependencyLocation=} loc the location from with the chunk group is referenced (inside of module)
	 * @param {string=} request the request from which the chunk group is referenced
	 * @returns {ChunkGroup} the new or existing chunk group
	 */
	addChunkInGroup(groupOptions, module, loc, request) {
		if (typeof groupOptions === "string") {
			groupOptions = { name: groupOptions };
		}
		const name = groupOptions.name;
		if (name) {
			const chunkGroup = this.namedChunkGroups.get(name);
			if (chunkGroup !== undefined) {
				if (module) {
					chunkGroup.addOrigin(
						module,
						/** @type {DependencyLocation} */
						(loc),
						/** @type {string} */
						(request)
					);
				}
				return chunkGroup;
			}
		}
		const chunkGroup = new ChunkGroup(groupOptions);
		if (module) {
			chunkGroup.addOrigin(
				module,
				/** @type {DependencyLocation} */
				(loc),
				/** @type {string} */
				(request)
			);
		}
		const chunk = this.addChunk(name);

		connectChunkGroupAndChunk(chunkGroup, chunk);

		this.chunkGroups.push(chunkGroup);
		if (name) {
			this.namedChunkGroups.set(name, chunkGroup);
		}
		return chunkGroup;
	}

	/**
	 * Adds the provided async entrypoint to this chunk group.
	 * @param {EntryOptions} options options for the entrypoint
	 * @param {Module} module the module the references the chunk group
	 * @param {DependencyLocation} loc the location from with the chunk group is referenced (inside of module)
	 * @param {string} request the request from which the chunk group is referenced
	 * @returns {Entrypoint} the new or existing entrypoint
	 */
	addAsyncEntrypoint(options, module, loc, request) {
		const name = options.name;
		if (name) {
			const entrypoint = this.namedChunkGroups.get(name);
			if (entrypoint instanceof Entrypoint) {
				if (module) {
					entrypoint.addOrigin(module, loc, request);
				}
				return entrypoint;
			} else if (entrypoint) {
				throw new Error(
					`Cannot add an async entrypoint with the name '${name}', because there is already an chunk group with this name`
				);
			}
		}
		const chunk = this.addChunk(name);
		if (options.filename) {
			chunk.filenameTemplate = options.filename;
		}
		const entrypoint = new Entrypoint(options, false);
		entrypoint.setRuntimeChunk(chunk);
		entrypoint.setEntrypointChunk(chunk);
		if (name) {
			this.namedChunkGroups.set(name, entrypoint);
		}
		this.chunkGroups.push(entrypoint);
		this.asyncEntrypoints.push(entrypoint);
		connectChunkGroupAndChunk(entrypoint, chunk);
		if (module) {
			entrypoint.addOrigin(module, loc, request);
		}
		return entrypoint;
	}

	/**
	 * This method first looks to see if a name is provided for a new chunk,
	 * and first looks to see if any named chunks already exist and reuse that chunk instead.
	 * @param {ChunkName=} name optional chunk name to be provided
	 * @returns {Chunk} create a chunk (invoked during seal event)
	 */
	addChunk(name) {
		if (name) {
			const chunk = this.namedChunks.get(name);
			if (chunk !== undefined) {
				return chunk;
			}
		}
		const chunk = new Chunk(name, this._backCompat);
		this.chunks.add(chunk);
		if (this._backCompat) {
			ChunkGraph.setChunkGraphForChunk(chunk, this.chunkGraph);
		}
		if (name) {
			this.namedChunks.set(name, chunk);
		}
		return chunk;
	}

	/**
	 * Processes the provided module.
	 * @deprecated
	 * @param {Module} module module to assign depth
	 * @returns {void}
	 */
	assignDepth(module) {
		const moduleGraph = this.moduleGraph;

		const queue = new Set([module]);
		/** @type {number} */
		let depth;

		moduleGraph.setDepth(module, 0);

		/**
		 * Processes the provided module.
		 * @param {Module} module module for processing
		 * @returns {void}
		 */
		const processModule = (module) => {
			if (!moduleGraph.setDepthIfLower(module, depth)) return;
			queue.add(module);
		};

		for (module of queue) {
			queue.delete(module);
			depth = /** @type {number} */ (moduleGraph.getDepth(module)) + 1;

			for (const connection of moduleGraph.getOutgoingConnections(module)) {
				const refModule = connection.module;
				if (refModule) {
					processModule(refModule);
				}
			}
		}
	}

	/**
	 * Assigns depth values to the provided modules.
	 * @param {Module[] | Set<Module>} modules modules to assign depth
	 * @returns {void}
	 */
	assignDepths(modules) {
		const moduleGraph = this.moduleGraph;

		/** @type {Set<Module>} */
		const queue = new Set(modules);
		// Track these in local variables so that queue only has one data type
		let nextDepthAt = queue.size;
		let depth = 0;

		let i = 0;
		for (const module of queue) {
			moduleGraph.setDepth(module, depth);
			// Some of these results come from cache, which speeds this up
			const connections = moduleGraph.getOutgoingConnectionsByModule(module);
			// connections will be undefined if there are no outgoing connections
			if (connections) {
				for (const refModule of connections.keys()) {
					if (refModule) queue.add(refModule);
				}
			}
			i++;
			// Since this is a breadth-first search, all modules added to the queue
			// while at depth N will be depth N+1
			if (i >= nextDepthAt) {
				depth++;
				nextDepthAt = queue.size;
			}
		}
	}

	/**
	 * Gets dependency referenced exports.
	 * @param {Dependency} dependency the dependency
	 * @param {RuntimeSpec} runtime the runtime
	 * @returns {ReferencedExports} referenced exports
	 */
	getDependencyReferencedExports(dependency, runtime) {
		const referencedExports = dependency.getReferencedExports(
			this.moduleGraph,
			runtime
		);
		return this.hooks.dependencyReferencedExports.call(
			referencedExports,
			dependency,
			runtime
		);
	}

	/**
	 * Removes reasons of dependency block.
	 * @param {Module} module module relationship for removal
	 * @param {DependenciesBlockLike} block dependencies block
	 * @returns {void}
	 */
	removeReasonsOfDependencyBlock(module, block) {
		if (block.blocks) {
			for (const b of block.blocks) {
				this.removeReasonsOfDependencyBlock(module, b);
			}
		}

		if (block.dependencies) {
			for (const dep of block.dependencies) {
				const originalModule = this.moduleGraph.getModule(dep);
				if (originalModule) {
					this.moduleGraph.removeConnection(dep);

					if (this.chunkGraph) {
						for (const chunk of this.chunkGraph.getModuleChunks(
							originalModule
						)) {
							this.patchChunksAfterReasonRemoval(originalModule, chunk);
						}
					}
				}
			}
		}
	}

	/**
	 * Patch chunks after reason removal.
	 * @param {Module} module module to patch tie
	 * @param {Chunk} chunk chunk to patch tie
	 * @returns {void}
	 */
	patchChunksAfterReasonRemoval(module, chunk) {
		if (!module.hasReasons(this.moduleGraph, chunk.runtime)) {
			this.removeReasonsOfDependencyBlock(module, module);
		}
		if (
			!module.hasReasonForChunk(chunk, this.moduleGraph, this.chunkGraph) &&
			this.chunkGraph.isModuleInChunk(module, chunk)
		) {
			this.chunkGraph.disconnectChunkAndModule(chunk, module);
			this.removeChunkFromDependencies(module, chunk);
		}
	}

	/**
	 * Removes chunk from dependencies.
	 * @param {DependenciesBlock} block block tie for Chunk
	 * @param {Chunk} chunk chunk to remove from dep
	 * @returns {void}
	 */
	removeChunkFromDependencies(block, chunk) {
		/**
		 * Iterator dependency.
		 * @param {Dependency} d dependency to (maybe) patch up
		 */
		const iteratorDependency = (d) => {
			const depModule = this.moduleGraph.getModule(d);
			if (!depModule) {
				return;
			}
			this.patchChunksAfterReasonRemoval(depModule, chunk);
		};

		const blocks = block.blocks;
		for (const asyncBlock of blocks) {
			const chunkGroup =
				/** @type {ChunkGroup} */
				(this.chunkGraph.getBlockChunkGroup(asyncBlock));
			// Grab all chunks from the first Block's AsyncDepBlock
			const chunks = chunkGroup.chunks;
			// For each chunk in chunkGroup
			for (const iteratedChunk of chunks) {
				chunkGroup.removeChunk(iteratedChunk);
				// Recurse
				this.removeChunkFromDependencies(block, iteratedChunk);
			}
		}

		if (block.dependencies) {
			for (const dep of block.dependencies) iteratorDependency(dep);
		}
	}

	assignRuntimeIds() {
		const { chunkGraph } = this;
		/**
		 * Process entrypoint.
		 * @param {Entrypoint} ep an entrypoint
		 */
		const processEntrypoint = (ep) => {
			const runtime = /** @type {string} */ (ep.options.runtime || ep.name);
			const chunk = /** @type {Chunk} */ (ep.getRuntimeChunk());
			chunkGraph.setRuntimeId(runtime, /** @type {ChunkId} */ (chunk.id));
		};
		for (const ep of this.entrypoints.values()) {
			processEntrypoint(ep);
		}
		for (const ep of this.asyncEntrypoints) {
			processEntrypoint(ep);
		}
	}

	sortItemsWithChunkIds() {
		for (const chunkGroup of this.chunkGroups) {
			chunkGroup.sortItems();
		}

		this.errors.sort(compareErrors);
		this.warnings.sort(compareErrors);
		this.children.sort(byNameOrHash);
	}

	summarizeDependencies() {
		for (const child of this.children) {
			this.fileDependencies.addAll(child.fileDependencies);
			this.contextDependencies.addAll(child.contextDependencies);
			this.missingDependencies.addAll(child.missingDependencies);
			this.buildDependencies.addAll(child.buildDependencies);
		}

		for (const module of this.modules) {
			module.addCacheDependencies(
				this.fileDependencies,
				this.contextDependencies,
				this.missingDependencies,
				this.buildDependencies
			);
		}
	}

	createModuleHashes() {
		let statModulesHashed = 0;
		let statModulesFromCache = 0;
		const { chunkGraph, runtimeTemplate, moduleMemCaches2 } = this;
		const { hashFunction, hashDigest, hashDigestLength } = this.outputOptions;
		/** @type {WebpackError[]} */
		const errors = [];
		for (const module of this.modules) {
			const memCache = moduleMemCaches2 && moduleMemCaches2.get(module);
			for (const runtime of chunkGraph.getModuleRuntimes(module)) {
				if (memCache) {
					const digest =
						/** @type {string} */
						(memCache.get(`moduleHash-${getRuntimeKey(runtime)}`));
					if (digest !== undefined) {
						chunkGraph.setModuleHashes(
							module,
							runtime,
							digest,
							digest.slice(0, hashDigestLength)
						);
						statModulesFromCache++;
						continue;
					}
				}
				statModulesHashed++;
				const digest = this._createModuleHash(
					module,
					chunkGraph,
					runtime,
					hashFunction,
					runtimeTemplate,
					hashDigest,
					hashDigestLength,
					errors
				);
				if (memCache) {
					memCache.set(`moduleHash-${getRuntimeKey(runtime)}`, digest);
				}
			}
		}
		if (errors.length > 0) {
			errors.sort(
				compareSelect((err) => err.module, compareModulesByIdentifier)
			);
			for (const error of errors) {
				this.errors.push(error);
			}
		}
		this.logger.log(
			`${statModulesHashed} modules hashed, ${statModulesFromCache} from cache (${
				Math.round(
					(100 * (statModulesHashed + statModulesFromCache)) / this.modules.size
				) / 100
			} variants per module in average)`
		);
	}

	/**
	 * Create module hash.
	 * @private
	 * @param {Module} module module
	 * @param {ChunkGraph} chunkGraph the chunk graph
	 * @param {RuntimeSpec} runtime runtime
	 * @param {HashFunction} hashFunction hash function
	 * @param {RuntimeTemplate} runtimeTemplate runtime template
	 * @param {HashDigest} hashDigest hash digest
	 * @param {HashDigestLength} hashDigestLength hash digest length
	 * @param {WebpackError[]} errors errors
	 * @returns {string} module hash digest
	 */
	_createModuleHash(
		module,
		chunkGraph,
		runtime,
		hashFunction,
		runtimeTemplate,
		hashDigest,
		hashDigestLength,
		errors
	) {
		/** @type {string} */
		let moduleHashDigest;
		try {
			const moduleHash = createHash(hashFunction);
			module.updateHash(moduleHash, {
				chunkGraph,
				runtime,
				runtimeTemplate
			});
			moduleHashDigest = moduleHash.digest(hashDigest);
		} catch (err) {
			errors.push(new ModuleHashingError(module, /** @type {Error} */ (err)));
			moduleHashDigest = "XXXXXX";
		}
		chunkGraph.setModuleHashes(
			module,
			runtime,
			moduleHashDigest,
			moduleHashDigest.slice(0, hashDigestLength)
		);
		return moduleHashDigest;
	}

	createHash() {
		this.logger.time("hashing: initialize hash");
		const chunkGraph = /** @type {ChunkGraph} */ (this.chunkGraph);
		const runtimeTemplate = this.runtimeTemplate;
		const outputOptions = this.outputOptions;
		const hashFunction = outputOptions.hashFunction;
		const hashDigest = outputOptions.hashDigest;
		const hashDigestLength = outputOptions.hashDigestLength;
		const hash = createHash(hashFunction);
		if (outputOptions.hashSalt) {
			hash.update(outputOptions.hashSalt);
		}
		this.logger.timeEnd("hashing: initialize hash");
		if (this.children.length > 0) {
			this.logger.time("hashing: hash child compilations");
			for (const child of this.children) {
				hash.update(/** @type {string} */ (child.hash));
			}
			this.logger.timeEnd("hashing: hash child compilations");
		}
		if (this.warnings.length > 0) {
			this.logger.time("hashing: hash warnings");
			for (const warning of this.warnings) {
				hash.update(`${warning.message}`);
			}
			this.logger.timeEnd("hashing: hash warnings");
		}
		if (this.errors.length > 0) {
			this.logger.time("hashing: hash errors");
			for (const error of this.errors) {
				hash.update(`${error.message}`);
			}
			this.logger.timeEnd("hashing: hash errors");
		}

		this.logger.time("hashing: sort chunks");
		/*
		 * Chunks are hashed in 4 categories, in this order:
		 * 1. Async chunks - no hash dependencies on other chunks
		 * 2. Non-entry initial chunks (e.g. shared split chunks) - no hash
		 *    dependencies on other chunks, but runtime chunks may read their
		 *    hashes via GetChunkFilenameRuntimeModule (dependentHash)
		 * 3. Runtime chunks - may use hashes of async and non-entry initial
		 *    chunks (via GetChunkFilenameRuntimeModule). Ordered by references
		 *    between each other (for async entrypoints)
		 * 4. Entry chunks - may depend on runtimeChunk.hash (via
		 *    createChunkHashHandler for ESM/CJS entry importing runtime)
		 *
		 * This ordering ensures all hash dependencies flow in one direction:
		 * async/initial → runtime → entry, with no circular dependencies.
		 * Chunks within each category are sorted by id for determinism.
		 */
		/** @type {Chunk[]} */
		const unorderedRuntimeChunks = [];
		/** @type {Chunk[]} */
		const initialChunks = [];
		/** @type {Chunk[]} */
		const entryChunks = [];
		/** @type {Chunk[]} */
		const asyncChunks = [];
		for (const c of this.chunks) {
			if (c.hasRuntime()) {
				unorderedRuntimeChunks.push(c);
			} else if (chunkGraph.getNumberOfEntryModules(c) > 0) {
				entryChunks.push(c);
			} else if (c.canBeInitial()) {
				initialChunks.push(c);
			} else {
				asyncChunks.push(c);
			}
		}
		unorderedRuntimeChunks.sort(byId);
		entryChunks.sort(byId);
		initialChunks.sort(byId);
		asyncChunks.sort(byId);

		/** @typedef {{ chunk: Chunk, referencedBy: RuntimeChunkInfo[], remaining: number }} RuntimeChunkInfo */
		/** @type {Map<Chunk, RuntimeChunkInfo>} */
		const runtimeChunksMap = new Map();
		for (const chunk of unorderedRuntimeChunks) {
			runtimeChunksMap.set(chunk, {
				chunk,
				referencedBy: [],
				remaining: 0
			});
		}
		let remaining = 0;
		for (const info of runtimeChunksMap.values()) {
			for (const other of new Set(
				[...info.chunk.getAllReferencedAsyncEntrypoints()].map(
					(e) => e.chunks[e.chunks.length - 1]
				)
			)) {
				const otherInfo = runtimeChunksMap.get(other);
				// other may be a non-runtime chunk (e.g. worker chunk)
				// when you have a worker chunk in your app.js (new Worker(...)) and as a separate entry point
				if (otherInfo) {
					otherInfo.referencedBy.push(info);
					info.remaining++;
					remaining++;
				}
			}
		}
		/** @type {Chunk[]} */
		const runtimeChunks = [];
		for (const info of runtimeChunksMap.values()) {
			if (info.remaining === 0) {
				runtimeChunks.push(info.chunk);
			}
		}
		// If there are any references between chunks
		// make sure to follow these chains
		if (remaining > 0) {
			/** @type {Chunk[]} */
			const readyChunks = [];
			for (const chunk of runtimeChunks) {
				const hasFullHashModules =
					chunkGraph.getNumberOfChunkFullHashModules(chunk) !== 0;
				const info =
					/** @type {RuntimeChunkInfo} */
					(runtimeChunksMap.get(chunk));
				for (const otherInfo of info.referencedBy) {
					if (hasFullHashModules) {
						chunkGraph.upgradeDependentToFullHashModules(otherInfo.chunk);
					}
					remaining--;
					if (--otherInfo.remaining === 0) {
						readyChunks.push(otherInfo.chunk);
					}
				}
				if (readyChunks.length > 0) {
					// This ensures deterministic ordering, since referencedBy is non-deterministic
					readyChunks.sort(byId);
					for (const c of readyChunks) runtimeChunks.push(c);
					readyChunks.length = 0;
				}
			}
		}
		// If there are still remaining references we have cycles and want to create a warning
		if (remaining > 0) {
			/** @type {RuntimeChunkInfo[]} */
			const circularRuntimeChunkInfo = [];
			for (const info of runtimeChunksMap.values()) {
				if (info.remaining !== 0) {
					circularRuntimeChunkInfo.push(info);
				}
			}
			circularRuntimeChunkInfo.sort(compareSelect((i) => i.chunk, byId));
			const err =
				new WebpackError(`Circular dependency between chunks with runtime (${Array.from(
					circularRuntimeChunkInfo,
					(c) => c.chunk.name || c.chunk.id
				).join(", ")})
This prevents using hashes of each other and should be avoided.`);
			err.chunk = circularRuntimeChunkInfo[0].chunk;
			this.warnings.push(err);
			for (const i of circularRuntimeChunkInfo) runtimeChunks.push(i.chunk);
		}
		this.logger.timeEnd("hashing: sort chunks");

		/** @type {Set<Chunk>} */
		const fullHashChunks = new Set();
		/** @type {CodeGenerationJobs} */
		const codeGenerationJobs = [];
		/** @type {Map<string, Map<Module, CodeGenerationJob>>} */
		const codeGenerationJobsMap = new Map();
		/** @type {WebpackError[]} */
		const errors = [];

		/**
		 * Processes the provided chunk.
		 * @param {Chunk} chunk chunk
		 */
		const processChunk = (chunk) => {
			// Last minute module hash generation for modules that depend on chunk hashes
			this.logger.time("hashing: hash runtime modules");
			const runtime = chunk.runtime;
			for (const module of chunkGraph.getChunkModulesIterable(chunk)) {
				if (!chunkGraph.hasModuleHashes(module, runtime)) {
					const hash = this._createModuleHash(
						module,
						chunkGraph,
						runtime,
						hashFunction,
						runtimeTemplate,
						hashDigest,
						hashDigestLength,
						errors
					);
					let hashMap = codeGenerationJobsMap.get(hash);
					if (hashMap) {
						const moduleJob = hashMap.get(module);
						if (moduleJob) {
							moduleJob.runtimes.push(runtime);
							continue;
						}
					} else {
						hashMap = new Map();
						codeGenerationJobsMap.set(hash, hashMap);
					}
					const job = {
						module,
						hash,
						runtime,
						runtimes: [runtime]
					};
					hashMap.set(module, job);
					codeGenerationJobs.push(job);
				}
			}
			this.logger.timeAggregate("hashing: hash runtime modules");
			try {
				this.logger.time("hashing: hash chunks");
				const chunkHash = createHash(hashFunction);
				if (outputOptions.hashSalt) {
					chunkHash.update(outputOptions.hashSalt);
				}
				chunk.updateHash(chunkHash, chunkGraph);
				this.hooks.chunkHash.call(chunk, chunkHash, {
					chunkGraph,
					codeGenerationResults:
						/** @type {CodeGenerationResults} */
						(this.codeGenerationResults),
					moduleGraph: this.moduleGraph,
					runtimeTemplate: this.runtimeTemplate
				});
				const chunkHashDigest = chunkHash.digest(hashDigest);
				hash.update(chunkHashDigest);
				chunk.hash = chunkHashDigest;
				chunk.renderedHash = chunk.hash.slice(0, hashDigestLength);
				const fullHashModules =
					chunkGraph.getChunkFullHashModulesIterable(chunk);
				if (fullHashModules) {
					fullHashChunks.add(chunk);
				} else {
					this.hooks.contentHash.call(chunk);
				}
			} catch (err) {
				this.errors.push(
					new ChunkRenderError(chunk, "", /** @type {Error} */ (err))
				);
			}
			this.logger.timeAggregate("hashing: hash chunks");
		};
		for (const chunk of asyncChunks) processChunk(chunk);
		for (const chunk of initialChunks) processChunk(chunk);
		for (const chunk of runtimeChunks) processChunk(chunk);
		for (const chunk of entryChunks) processChunk(chunk);
		if (errors.length > 0) {
			errors.sort(
				compareSelect((err) => err.module, compareModulesByIdentifier)
			);
			for (const error of errors) {
				this.errors.push(error);
			}
		}

		this.logger.timeAggregateEnd("hashing: hash runtime modules");
		this.logger.timeAggregateEnd("hashing: hash chunks");
		this.logger.time("hashing: hash digest");
		this.hooks.fullHash.call(hash);
		this.fullHash = hash.digest(hashDigest);
		this.hash = this.fullHash.slice(0, hashDigestLength);
		this.logger.timeEnd("hashing: hash digest");

		this.logger.time("hashing: process full hash modules");
		for (const chunk of fullHashChunks) {
			for (const module of /** @type {Iterable<RuntimeModule>} */ (
				chunkGraph.getChunkFullHashModulesIterable(chunk)
			)) {
				const moduleHash = createHash(hashFunction);
				module.updateHash(moduleHash, {
					chunkGraph,
					runtime: chunk.runtime,
					runtimeTemplate
				});
				const moduleHashDigest = moduleHash.digest(hashDigest);
				const oldHash = chunkGraph.getModuleHash(module, chunk.runtime);
				chunkGraph.setModuleHashes(
					module,
					chunk.runtime,
					moduleHashDigest,
					moduleHashDigest.slice(0, hashDigestLength)
				);
				/** @type {CodeGenerationJob} */
				(
					/** @type {Map<Module, CodeGenerationJob>} */
					(codeGenerationJobsMap.get(oldHash)).get(module)
				).hash = moduleHashDigest;
			}
			const chunkHash = createHash(hashFunction);
			chunkHash.update(/** @type {string} */ (chunk.hash));
			chunkHash.update(this.hash);
			const chunkHashDigest = chunkHash.digest(hashDigest);
			chunk.hash = chunkHashDigest;
			chunk.renderedHash = chunk.hash.slice(0, hashDigestLength);
			this.hooks.contentHash.call(chunk);
		}
		this.logger.timeEnd("hashing: process full hash modules");
		return codeGenerationJobs;
	}

	/**
	 * Processes the provided file.
	 * @param {string} file file name
	 * @param {Source} source asset source
	 * @param {AssetInfo} assetInfo extra asset information
	 * @returns {void}
	 */
	emitAsset(file, source, assetInfo = {}) {
		if (this.assets[file]) {
			if (!isSourceEqual(this.assets[file], source)) {
				this.errors.push(
					new WebpackError(
						`Conflict: Multiple assets emit different content to the same filename ${file}${
							assetInfo.sourceFilename
								? `. Original source ${assetInfo.sourceFilename}`
								: ""
						}`
					)
				);
				this.assets[file] = source;
				this._setAssetInfo(file, assetInfo);
				return;
			}
			const oldInfo = this.assetsInfo.get(file);
			const newInfo = { ...oldInfo, ...assetInfo };
			this._setAssetInfo(file, newInfo, oldInfo);
			return;
		}
		this.assets[file] = source;
		this._setAssetInfo(file, assetInfo, undefined);
	}

	/**
	 * Processes the provided file.
	 * @private
	 * @param {string} file file name
	 * @param {AssetInfo=} newInfo new asset information
	 * @param {AssetInfo=} oldInfo old asset information
	 */
	_setAssetInfo(file, newInfo, oldInfo = this.assetsInfo.get(file)) {
		if (newInfo === undefined) {
			this.assetsInfo.delete(file);
		} else {
			this.assetsInfo.set(file, newInfo);
		}
		const oldRelated = oldInfo && oldInfo.related;
		const newRelated = newInfo && newInfo.related;
		if (oldRelated) {
			for (const key of Object.keys(oldRelated)) {
				/**
				 * Processes the provided name.
				 * @param {string} name name
				 */
				const remove = (name) => {
					const relatedIn = this._assetsRelatedIn.get(name);
					if (relatedIn === undefined) return;
					const entry = relatedIn.get(key);
					if (entry === undefined) return;
					entry.delete(file);
					if (entry.size !== 0) return;
					relatedIn.delete(key);
					if (relatedIn.size === 0) this._assetsRelatedIn.delete(name);
				};
				const entry = oldRelated[key];
				if (Array.isArray(entry)) {
					for (const name of entry) {
						remove(name);
					}
				} else if (entry) {
					remove(entry);
				}
			}
		}
		if (newRelated) {
			for (const key of Object.keys(newRelated)) {
				/**
				 * Processes the provided name.
				 * @param {string} name name
				 */
				const add = (name) => {
					let relatedIn = this._assetsRelatedIn.get(name);
					if (relatedIn === undefined) {
						this._assetsRelatedIn.set(name, (relatedIn = new Map()));
					}
					let entry = relatedIn.get(key);
					if (entry === undefined) {
						relatedIn.set(key, (entry = new Set()));
					}
					entry.add(file);
				};
				const entry = newRelated[key];
				if (Array.isArray(entry)) {
					for (const name of entry) {
						add(name);
					}
				} else if (entry) {
					add(entry);
				}
			}
		}
	}

	/**
	 * Updates asset using the provided file.
	 * @param {string} file file name
	 * @param {Source | ((source: Source) => Source)} newSourceOrFunction new asset source or function converting old to new
	 * @param {(AssetInfo | ((assetInfo?: AssetInfo) => AssetInfo | undefined)) | undefined} assetInfoUpdateOrFunction new asset info or function converting old to new
	 */
	updateAsset(
		file,
		newSourceOrFunction,
		assetInfoUpdateOrFunction = undefined
	) {
		if (!this.assets[file]) {
			throw new Error(
				`Called Compilation.updateAsset for not existing filename ${file}`
			);
		}
		this.assets[file] =
			typeof newSourceOrFunction === "function"
				? newSourceOrFunction(this.assets[file])
				: newSourceOrFunction;
		if (assetInfoUpdateOrFunction !== undefined) {
			const oldInfo = this.assetsInfo.get(file) || EMPTY_ASSET_INFO;
			if (typeof assetInfoUpdateOrFunction === "function") {
				this._setAssetInfo(file, assetInfoUpdateOrFunction(oldInfo), oldInfo);
			} else {
				this._setAssetInfo(
					file,
					cachedCleverMerge(oldInfo, assetInfoUpdateOrFunction),
					oldInfo
				);
			}
		}
	}

	/**
	 * Processes the provided file.
	 * @param {string} file file name
	 * @param {string} newFile the new name of file
	 */
	renameAsset(file, newFile) {
		const source = this.assets[file];
		if (!source) {
			throw new Error(
				`Called Compilation.renameAsset for not existing filename ${file}`
			);
		}
		if (this.assets[newFile] && !isSourceEqual(this.assets[file], source)) {
			this.errors.push(
				new WebpackError(
					`Conflict: Called Compilation.renameAsset for already existing filename ${newFile} with different content`
				)
			);
		}
		const assetInfo = this.assetsInfo.get(file);
		// Update related in all other assets
		const relatedInInfo = this._assetsRelatedIn.get(file);
		if (relatedInInfo) {
			for (const [key, assets] of relatedInInfo) {
				for (const name of assets) {
					const info = this.assetsInfo.get(name);
					if (!info) continue;
					const related = info.related;
					if (!related) continue;
					const entry = related[key];
					/** @type {string | string[]} */
					let newEntry;
					if (Array.isArray(entry)) {
						newEntry = entry.map((x) => (x === file ? newFile : x));
					} else if (entry === file) {
						newEntry = newFile;
					} else {
						continue;
					}
					this.assetsInfo.set(name, {
						...info,
						related: {
							...related,
							[key]: newEntry
						}
					});
				}
			}
		}
		this._setAssetInfo(file, undefined, assetInfo);
		this._setAssetInfo(newFile, assetInfo);
		delete this.assets[file];
		this.assets[newFile] = source;
		for (const chunk of this.chunks) {
			{
				const size = chunk.files.size;
				chunk.files.delete(file);
				if (size !== chunk.files.size) {
					chunk.files.add(newFile);
				}
			}
			{
				const size = chunk.auxiliaryFiles.size;
				chunk.auxiliaryFiles.delete(file);
				if (size !== chunk.auxiliaryFiles.size) {
					chunk.auxiliaryFiles.add(newFile);
				}
			}
		}
	}

	/**
	 * Processes the provided file.
	 * @param {string} file file name
	 */
	deleteAsset(file) {
		if (!this.assets[file]) {
			return;
		}
		delete this.assets[file];
		const assetInfo = this.assetsInfo.get(file);
		this._setAssetInfo(file, undefined, assetInfo);
		const related = assetInfo && assetInfo.related;
		if (related) {
			for (const key of Object.keys(related)) {
				/**
				 * Checks used and delete.
				 * @param {string} file file
				 */
				const checkUsedAndDelete = (file) => {
					if (!this._assetsRelatedIn.has(file)) {
						this.deleteAsset(file);
					}
				};
				const items = related[key];
				if (Array.isArray(items)) {
					for (const file of items) {
						checkUsedAndDelete(file);
					}
				} else if (items) {
					checkUsedAndDelete(items);
				}
			}
		}
		// TODO If this becomes a performance problem
		// store a reverse mapping from asset to chunk
		for (const chunk of this.chunks) {
			chunk.files.delete(file);
			chunk.auxiliaryFiles.delete(file);
		}
	}

	getAssets() {
		/** @type {Readonly<Asset>[]} */
		const array = [];
		for (const assetName of Object.keys(this.assets)) {
			if (Object.prototype.hasOwnProperty.call(this.assets, assetName)) {
				array.push({
					name: assetName,
					source: this.assets[assetName],
					info: this.assetsInfo.get(assetName) || EMPTY_ASSET_INFO
				});
			}
		}
		return array;
	}

	/**
	 * Returns the asset or undefined when not found.
	 * @param {string} name the name of the asset
	 * @returns {Readonly<Asset> | undefined} the asset or undefined when not found
	 */
	getAsset(name) {
		if (!Object.prototype.hasOwnProperty.call(this.assets, name)) return;
		return {
			name,
			source: this.assets[name],
			info: this.assetsInfo.get(name) || EMPTY_ASSET_INFO
		};
	}

	clearAssets() {
		for (const chunk of this.chunks) {
			chunk.files.clear();
			chunk.auxiliaryFiles.clear();
		}
	}

	createModuleAssets() {
		const { chunkGraph } = this;
		for (const module of this.modules) {
			const buildInfo = /** @type {BuildInfo} */ (module.buildInfo);
			if (buildInfo.assets) {
				const assetsInfo = buildInfo.assetsInfo;
				for (const assetName of Object.keys(buildInfo.assets)) {
					const fileName = this.getPath(assetName, {
						chunkGraph: this.chunkGraph,
						module
					});
					for (const chunk of chunkGraph.getModuleChunksIterable(module)) {
						chunk.auxiliaryFiles.add(fileName);
					}
					this.emitAsset(
						fileName,
						buildInfo.assets[assetName],
						assetsInfo ? assetsInfo.get(assetName) : undefined
					);
					this.hooks.moduleAsset.call(module, fileName);
				}
			}
		}
	}

	/**
	 * Gets render manifest.
	 * @param {RenderManifestOptions} options options object
	 * @returns {RenderManifestEntry[]} manifest entries
	 */
	getRenderManifest(options) {
		return this.hooks.renderManifest.call([], options);
	}

	/**
	 * Creates a chunk assets.
	 * @param {Callback} callback signals when the call finishes
	 * @returns {void}
	 */
	createChunkAssets(callback) {
		const outputOptions = this.outputOptions;
		/** @type {WeakMap<Source, CachedSource>} */
		const cachedSourceMap = new WeakMap();
		/** @type {Map<string, { hash: string, source: Source, chunk: Chunk }>} */
		const alreadyWrittenFiles = new Map();

		asyncLib.forEachLimit(
			this.chunks,
			15,
			(chunk, callback) => {
				/** @type {RenderManifestEntry[]} */
				let manifest;
				try {
					manifest = this.getRenderManifest({
						chunk,
						hash: /** @type {string} */ (this.hash),
						fullHash: /** @type {string} */ (this.fullHash),
						outputOptions,
						codeGenerationResults:
							/** @type {CodeGenerationResults} */
							(this.codeGenerationResults),
						moduleTemplates: this.moduleTemplates,
						dependencyTemplates: this.dependencyTemplates,
						chunkGraph: this.chunkGraph,
						moduleGraph: this.moduleGraph,
						runtimeTemplate: this.runtimeTemplate
					});
				} catch (err) {
					this.errors.push(
						new ChunkRenderError(chunk, "", /** @type {Error} */ (err))
					);
					return callback();
				}
				asyncLib.each(
					manifest,
					(fileManifest, callback) => {
						const ident = fileManifest.identifier;
						const usedHash = /** @type {string} */ (fileManifest.hash);

						const assetCacheItem = this._assetsCache.getItemCache(
							ident,
							usedHash
						);

						assetCacheItem.get((err, sourceFromCache) => {
							/** @type {TemplatePath} */
							let filenameTemplate;
							/** @type {string} */
							let file;
							/** @type {AssetInfo} */
							let assetInfo;

							let inTry = true;
							/**
							 * Error and callback.
							 * @param {Error} err error
							 * @returns {void}
							 */
							const errorAndCallback = (err) => {
								const filename =
									file ||
									(typeof file === "string"
										? file
										: typeof filenameTemplate === "string"
											? filenameTemplate
											: "");

								this.errors.push(new ChunkRenderError(chunk, filename, err));
								inTry = false;
								return callback();
							};

							try {
								if ("filename" in fileManifest) {
									file = fileManifest.filename;
									assetInfo = fileManifest.info;
								} else {
									filenameTemplate = fileManifest.filenameTemplate;
									const pathAndInfo = this.getPathWithInfo(
										filenameTemplate,
										fileManifest.pathOptions
									);
									file = pathAndInfo.path;
									assetInfo = fileManifest.info
										? {
												...pathAndInfo.info,
												...fileManifest.info
											}
										: pathAndInfo.info;
								}

								if (err) {
									return errorAndCallback(err);
								}

								let source = sourceFromCache;

								// check if the same filename was already written by another chunk
								const alreadyWritten = alreadyWrittenFiles.get(file);
								if (alreadyWritten !== undefined) {
									if (alreadyWritten.hash !== usedHash) {
										inTry = false;
										return callback(
											new WebpackError(
												`Conflict: Multiple chunks emit assets to the same filename ${file}` +
													` (chunks ${alreadyWritten.chunk.id} and ${chunk.id})`
											)
										);
									}
									source = alreadyWritten.source;
								} else if (!source) {
									// render the asset
									source = fileManifest.render();

									// Ensure that source is a cached source to avoid additional cost because of repeated access
									if (!(source instanceof CachedSource)) {
										const cacheEntry = cachedSourceMap.get(source);
										if (cacheEntry) {
											source = cacheEntry;
										} else {
											const cachedSource = new CachedSource(source);
											cachedSourceMap.set(source, cachedSource);
											source = cachedSource;
										}
									}
								}
								this.emitAsset(file, source, assetInfo);
								if (fileManifest.auxiliary) {
									chunk.auxiliaryFiles.add(file);
								} else {
									chunk.files.add(file);
								}
								this.hooks.chunkAsset.call(chunk, file);
								alreadyWrittenFiles.set(file, {
									hash: usedHash,
									source,
									chunk
								});
								if (source !== sourceFromCache) {
									assetCacheItem.store(source, (err) => {
										if (err) return errorAndCallback(err);
										inTry = false;
										return callback();
									});
								} else {
									inTry = false;
									callback();
								}
							} catch (err) {
								if (!inTry) throw err;
								errorAndCallback(/** @type {Error} */ (err));
							}
						});
					},
					callback
				);
			},
			callback
		);
	}

	/**
	 * Returns interpolated path.
	 * @param {TemplatePath} filename used to get asset path with hash
	 * @param {PathData} data context data
	 * @returns {string} interpolated path
	 */
	getPath(filename, data = {}) {
		if (!data.hash) {
			data = {
				hash: this.hash,
				...data
			};
		}
		return this.getAssetPath(filename, data);
	}

	/**
	 * Gets path with info.
	 * @param {TemplatePath} filename used to get asset path with hash
	 * @param {PathData} data context data
	 * @returns {InterpolatedPathAndAssetInfo} interpolated path and asset info
	 */
	getPathWithInfo(filename, data = {}) {
		if (!data.hash) {
			data = {
				hash: this.hash,
				...data
			};
		}
		return this.getAssetPathWithInfo(filename, data);
	}

	/**
	 * Returns interpolated path.
	 * @param {TemplatePath} filename used to get asset path with hash
	 * @param {PathData} data context data
	 * @returns {string} interpolated path
	 */
	getAssetPath(filename, data) {
		return this.hooks.assetPath.call(
			typeof filename === "function" ? filename(data) : filename,
			data,
			undefined
		);
	}

	/**
	 * Gets asset path with info.
	 * @param {TemplatePath} filename used to get asset path with hash
	 * @param {PathData} data context data
	 * @returns {InterpolatedPathAndAssetInfo} interpolated path and asset info
	 */
	getAssetPathWithInfo(filename, data) {
		const assetInfo = {};
		// TODO webpack 5: refactor assetPath hook to receive { path, info } object
		const newPath = this.hooks.assetPath.call(
			typeof filename === "function" ? filename(data, assetInfo) : filename,
			data,
			assetInfo
		);
		return { path: newPath, info: assetInfo };
	}

	getWarnings() {
		return this.hooks.processWarnings.call(this.warnings);
	}

	getErrors() {
		return this.hooks.processErrors.call(this.errors);
	}

	/**
	 * This function allows you to run another instance of webpack inside of webpack however as
	 * a child with different settings and configurations (if desired) applied. It copies all hooks, plugins
	 * from parent (or top level compiler) and creates a child Compilation
	 * @param {string} name name of the child compiler
	 * @param {Partial<OutputOptions>=} outputOptions // Need to convert config schema to types for this
	 * @param {Plugins=} plugins webpack plugins that will be applied
	 * @returns {Compiler} creates a child Compiler instance
	 */
	createChildCompiler(name, outputOptions, plugins) {
		const idx = this.childrenCounters[name] || 0;
		this.childrenCounters[name] = idx + 1;
		return this.compiler.createChildCompiler(
			this,
			name,
			idx,
			outputOptions,
			plugins
		);
	}

	/**
	 * Processes the provided module.
	 * @param {Module} module the module
	 * @param {ExecuteModuleOptions} options options
	 * @param {ExecuteModuleCallback} callback callback
	 */
	executeModule(module, options, callback) {
		// Aggregate all referenced modules and ensure they are ready
		const modules = new Set([module]);
		processAsyncTree(
			modules,
			10,
			(module, push, callback) => {
				this.buildQueue.waitFor(module, (err) => {
					if (err) return callback(err);
					this.processDependenciesQueue.waitFor(module, (err) => {
						if (err) return callback(err);
						for (const { module: m } of this.moduleGraph.getOutgoingConnections(
							module
						)) {
							const size = modules.size;
							modules.add(m);
							if (modules.size !== size) push(m);
						}
						callback();
					});
				});
			},
			(err) => {
				if (err) return callback(/** @type {WebpackError} */ (err));

				// Create new chunk graph, chunk and entrypoint for the build time execution
				const chunkGraph = new ChunkGraph(
					this.moduleGraph,
					this.outputOptions.hashFunction
				);
				const runtime = "build time";
				const { hashFunction, hashDigest, hashDigestLength } =
					this.outputOptions;
				const runtimeTemplate = this.runtimeTemplate;

				const chunk = new Chunk("build time chunk", this._backCompat);
				chunk.id = /** @type {ChunkId} */ (chunk.name);
				chunk.ids = [chunk.id];
				chunk.runtime = runtime;

				const entrypoint = new Entrypoint({
					runtime,
					chunkLoading: false,
					...options.entryOptions
				});
				chunkGraph.connectChunkAndEntryModule(chunk, module, entrypoint);
				connectChunkGroupAndChunk(entrypoint, chunk);
				entrypoint.setRuntimeChunk(chunk);
				entrypoint.setEntrypointChunk(chunk);

				const chunks = new Set([chunk]);

				// Assign ids to modules and modules to the chunk
				for (const module of modules) {
					const id = module.identifier();
					chunkGraph.setModuleId(module, id);
					chunkGraph.connectChunkAndModule(chunk, module);
				}

				/** @type {WebpackError[]} */
				const errors = [];

				// Hash modules
				for (const module of modules) {
					this._createModuleHash(
						module,
						chunkGraph,
						runtime,
						hashFunction,
						runtimeTemplate,
						hashDigest,
						hashDigestLength,
						errors
					);
				}

				const codeGenerationResults = new CodeGenerationResults(
					this.outputOptions.hashFunction
				);
				/**
				 * Processes the provided module.
				 * @param {Module} module the module
				 * @param {Callback} callback callback
				 * @returns {void}
				 */
				const codeGen = (module, callback) => {
					this._codeGenerationModule(
						module,
						runtime,
						[runtime],
						chunkGraph.getModuleHash(module, runtime),
						this.dependencyTemplates,
						chunkGraph,
						this.moduleGraph,
						runtimeTemplate,
						errors,
						codeGenerationResults,
						(err, _codeGenerated) => {
							callback(err);
						}
					);
				};

				const reportErrors = () => {
					if (errors.length > 0) {
						errors.sort(
							compareSelect((err) => err.module, compareModulesByIdentifier)
						);
						for (const error of errors) {
							this.errors.push(error);
						}
						errors.length = 0;
					}
				};

				// Generate code for all aggregated modules
				asyncLib.eachLimit(
					/** @type {import("neo-async").IterableCollection<Module>} */ (
						/** @type {unknown} */ (modules)
					),
					10,
					codeGen,
					(err) => {
						if (err) return callback(err);
						reportErrors();

						// for backward-compat temporary set the chunk graph
						// TODO webpack 6
						const old = this.chunkGraph;
						this.chunkGraph = chunkGraph;
						this.processRuntimeRequirements({
							chunkGraph,
							modules,
							chunks,
							codeGenerationResults,
							chunkGraphEntries: chunks
						});
						this.chunkGraph = old;

						const runtimeModules =
							chunkGraph.getChunkRuntimeModulesIterable(chunk);

						// Hash runtime modules
						for (const module of runtimeModules) {
							modules.add(module);
							this._createModuleHash(
								module,
								chunkGraph,
								runtime,
								hashFunction,
								runtimeTemplate,
								hashDigest,
								hashDigestLength,
								errors
							);
						}

						// Generate code for all runtime modules
						asyncLib.eachLimit(
							/** @type {import("neo-async").IterableCollection<RuntimeModule>} */ (
								runtimeModules
							),
							10,
							codeGen,
							(err) => {
								if (err) return callback(err);
								reportErrors();

								/** @type {Map<Module, ExecuteModuleArgument>} */
								const moduleArgumentsMap = new Map();
								/** @type {Map<string, ExecuteModuleArgument>} */
								const moduleArgumentsById = new Map();

								/** @type {ExecuteModuleResult["fileDependencies"]} */
								const fileDependencies = new LazySet();
								/** @type {ExecuteModuleResult["contextDependencies"]} */
								const contextDependencies = new LazySet();
								/** @type {ExecuteModuleResult["missingDependencies"]} */
								const missingDependencies = new LazySet();
								/** @type {ExecuteModuleResult["buildDependencies"]} */
								const buildDependencies = new LazySet();

								/** @type {ExecuteModuleResult["assets"]} */
								const assets = new Map();

								let cacheable = true;

								/** @type {ExecuteModuleContext} */
								const context = {
									assets,
									__webpack_require__: undefined,
									chunk,
									chunkGraph
								};

								// Prepare execution
								asyncLib.eachLimit(
									modules,
									10,
									(module, callback) => {
										const codeGenerationResult = codeGenerationResults.get(
											module,
											runtime
										);
										/** @type {ExecuteModuleArgument} */
										const moduleArgument = {
											module,
											codeGenerationResult,
											moduleObject: undefined
										};
										moduleArgumentsMap.set(module, moduleArgument);
										moduleArgumentsById.set(
											module.identifier(),
											moduleArgument
										);
										module.addCacheDependencies(
											fileDependencies,
											contextDependencies,
											missingDependencies,
											buildDependencies
										);
										if (
											/** @type {BuildInfo} */ (module.buildInfo).cacheable ===
											false
										) {
											cacheable = false;
										}
										if (module.buildInfo && module.buildInfo.assets) {
											const { assets: moduleAssets, assetsInfo } =
												module.buildInfo;
											for (const assetName of Object.keys(moduleAssets)) {
												assets.set(assetName, {
													source: moduleAssets[assetName],
													info: assetsInfo
														? assetsInfo.get(assetName)
														: undefined
												});
											}
										}
										this.hooks.prepareModuleExecution.callAsync(
											moduleArgument,
											context,
											callback
										);
									},
									(err) => {
										if (err) return callback(/** @type {WebpackError} */ (err));

										/** @type {ExecuteModuleExports | undefined} */
										let exports;
										try {
											const {
												strictModuleErrorHandling,
												strictModuleExceptionHandling
											} = this.outputOptions;

											/** @type {WebpackRequire} */
											const __webpack_require__ = (id) => {
												const cached = moduleCache[id];
												if (cached !== undefined) {
													if (cached.error) throw cached.error;
													return cached.exports;
												}
												const moduleArgument = moduleArgumentsById.get(id);
												return __webpack_require_module__(
													/** @type {ExecuteModuleArgument} */
													(moduleArgument),
													id
												);
											};
											const interceptModuleExecution = (__webpack_require__[
												/** @type {"i"} */
												(
													RuntimeGlobals.interceptModuleExecution.replace(
														`${RuntimeGlobals.require}.`,
														""
													)
												)
											] = /** @type {NonNullable<WebpackRequire["i"]>} */ ([]));
											const moduleCache = (__webpack_require__[
												/** @type {"c"} */ (
													RuntimeGlobals.moduleCache.replace(
														`${RuntimeGlobals.require}.`,
														""
													)
												)
											] = /** @type {NonNullable<WebpackRequire["c"]>} */ ({}));

											context.__webpack_require__ = __webpack_require__;

											/**
											 * Webpack require module.
											 * @param {ExecuteModuleArgument} moduleArgument the module argument
											 * @param {string=} id id
											 * @returns {ExecuteModuleExports} exports
											 */
											const __webpack_require_module__ = (
												moduleArgument,
												id
											) => {
												/** @type {ExecuteOptions} */
												const execOptions = {
													id,
													module: {
														id,
														exports: {},
														loaded: false,
														error: undefined
													},
													require: __webpack_require__
												};
												for (const handler of interceptModuleExecution) {
													handler(execOptions);
												}
												const module = moduleArgument.module;
												this.buildTimeExecutedModules.add(module);
												const moduleObject = execOptions.module;
												moduleArgument.moduleObject = moduleObject;
												try {
													if (id) moduleCache[id] = moduleObject;

													tryRunOrWebpackError(
														() =>
															this.hooks.executeModule.call(
																moduleArgument,
																context
															),
														"Compilation.hooks.executeModule"
													);
													moduleObject.loaded = true;
													return moduleObject.exports;
												} catch (execErr) {
													if (strictModuleExceptionHandling) {
														if (id) delete moduleCache[id];
													} else if (strictModuleErrorHandling) {
														moduleObject.error =
															/** @type {WebpackError} */
															(execErr);
													}
													if (!(/** @type {WebpackError} */ (execErr).module)) {
														/** @type {WebpackError} */
														(execErr).module = module;
													}
													throw execErr;
												}
											};

											for (const runtimeModule of chunkGraph.getChunkRuntimeModulesInOrder(
												chunk
											)) {
												__webpack_require_module__(
													/** @type {ExecuteModuleArgument} */
													(moduleArgumentsMap.get(runtimeModule))
												);
											}

											exports = __webpack_require__(module.identifier());
										} catch (execErr) {
											const { message, stack, module } =
												/** @type {WebpackError} */
												(execErr);
											const err = new WebpackError(
												`Execution of module code from module graph (${
													/** @type {Module} */
													(module).readableIdentifier(this.requestShortener)
												}) failed: ${message}`,
												{ cause: execErr }
											);
											err.stack = stack;
											err.module = module;
											return callback(err);
										}

										callback(null, {
											exports,
											assets,
											cacheable,
											fileDependencies,
											contextDependencies,
											missingDependencies,
											buildDependencies
										});
									}
								);
							}
						);
					}
				);
			}
		);
	}

	checkConstraints() {
		const chunkGraph = this.chunkGraph;

		/** @type {Set<ModuleId>} */
		const usedIds = new Set();

		for (const module of this.modules) {
			if (module.type === WEBPACK_MODULE_TYPE_RUNTIME) continue;
			const moduleId = chunkGraph.getModuleId(module);
			if (moduleId === null) continue;
			if (usedIds.has(moduleId)) {
				throw new Error(`checkConstraints: duplicate module id ${moduleId}`);
			}
			usedIds.add(moduleId);
		}

		for (const chunk of this.chunks) {
			for (const module of chunkGraph.getChunkModulesIterable(chunk)) {
				if (!this.modules.has(module)) {
					throw new Error(
						"checkConstraints: module in chunk but not in compilation " +
							` ${chunk.debugId} ${module.debugId}`
					);
				}
			}
			for (const module of chunkGraph.getChunkEntryModulesIterable(chunk)) {
				if (!this.modules.has(module)) {
					throw new Error(
						"checkConstraints: entry module in chunk but not in compilation " +
							` ${chunk.debugId} ${module.debugId}`
					);
				}
			}
		}

		for (const chunkGroup of this.chunkGroups) {
			chunkGroup.checkConstraints();
		}
	}
}

/**
 * Defines the factorize module options type used by this module.
 * @typedef {object} FactorizeModuleOptions
 * @property {ModuleProfile=} currentProfile
 * @property {ModuleFactory} factory
 * @property {Dependency[]} dependencies
 * @property {boolean=} factoryResult return full ModuleFactoryResult instead of only module
 * @property {Module | null} originModule
 * @property {Partial<ModuleFactoryCreateDataContextInfo>=} contextInfo
 * @property {string=} context
 */

/**
 * Processes the provided factorize module option.
 * @param {FactorizeModuleOptions} options options object
 * @param {ModuleCallback | ModuleFactoryResultCallback} callback callback
 * @returns {void}
 */

// Hide from typescript
const compilationPrototype = Compilation.prototype;

// TODO webpack 6 remove
Object.defineProperty(compilationPrototype, "modifyHash", {
	writable: false,
	enumerable: false,
	configurable: false,
	value: () => {
		throw new Error(
			"Compilation.modifyHash was removed in favor of Compilation.hooks.fullHash"
		);
	}
});

// TODO webpack 6 remove
Object.defineProperty(compilationPrototype, "cache", {
	enumerable: false,
	configurable: false,
	get: util.deprecate(
		/**
		 * Returns the cache.
		 * @this {Compilation} the compilation
		 * @returns {Cache} the cache
		 */
		function cache() {
			return this.compiler.cache;
		},
		"Compilation.cache was removed in favor of Compilation.getCache()",
		"DEP_WEBPACK_COMPILATION_CACHE"
	),
	set: util.deprecate(
		/**
		 * Handles the value callback for this hook.
		 * @param {EXPECTED_ANY} _v value
		 */
		(_v) => {},
		"Compilation.cache was removed in favor of Compilation.getCache()",
		"DEP_WEBPACK_COMPILATION_CACHE"
	)
});

/**
 * Add additional assets to the compilation.
 */
Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL = -2000;

/**
 * Basic preprocessing of assets.
 */
Compilation.PROCESS_ASSETS_STAGE_PRE_PROCESS = -1000;

/**
 * Derive new assets from existing assets.
 * Existing assets should not be treated as complete.
 */
Compilation.PROCESS_ASSETS_STAGE_DERIVED = -200;

/**
 * Add additional sections to existing assets, like a banner or initialization code.
 */
Compilation.PROCESS_ASSETS_STAGE_ADDITIONS = -100;

/**
 * Optimize existing assets in a general way.
 */
Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE = 100;

/**
 * Optimize the count of existing assets, e. g. by merging them.
 * Only assets of the same type should be merged.
 * For assets of different types see PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE.
 */
Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT = 200;

/**
 * Optimize the compatibility of existing assets, e. g. add polyfills or vendor-prefixes.
 */
Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_COMPATIBILITY = 300;

/**
 * Optimize the size of existing assets, e. g. by minimizing or omitting whitespace.
 */
Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE = 400;

/**
 * Add development tooling to assets, e. g. by extracting a SourceMap.
 */
Compilation.PROCESS_ASSETS_STAGE_DEV_TOOLING = 500;

/**
 * Optimize the count of existing assets, e. g. by inlining assets of into other assets.
 * Only assets of different types should be inlined.
 * For assets of the same type see PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT.
 */
Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE = 700;

/**
 * Summarize the list of existing assets
 * e. g. creating an assets manifest of Service Workers.
 */
Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE = 1000;

/**
 * Optimize the hashes of the assets, e. g. by generating real hashes of the asset content.
 */
Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_HASH = 2500;

/**
 * Optimize the transfer of existing assets, e. g. by preparing a compressed (gzip) file as separate asset.
 */
Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER = 3000;

/**
 * Analyse existing assets.
 */
Compilation.PROCESS_ASSETS_STAGE_ANALYSE = 4000;

/**
 * Creating assets for reporting purposes.
 */
Compilation.PROCESS_ASSETS_STAGE_REPORT = 5000;

module.exports = Compilation;

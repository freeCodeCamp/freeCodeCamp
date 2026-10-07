/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const asyncLib = require("neo-async");
const {
	AsyncParallelHook,
	AsyncSeriesHook,
	SyncBailHook,
	SyncHook
} = require("tapable");
const { SizeOnlySource } = require("webpack-sources");
const Cache = require("./Cache");
const CacheFacade = require("./CacheFacade");
const ChunkGraph = require("./ChunkGraph");
const Compilation = require("./Compilation");
const ConcurrentCompilationError = require("./ConcurrentCompilationError");
const ContextModuleFactory = require("./ContextModuleFactory");
const ModuleGraph = require("./ModuleGraph");
const NormalModuleFactory = require("./NormalModuleFactory");
const RequestShortener = require("./RequestShortener");
const ResolverFactory = require("./ResolverFactory");
const Stats = require("./Stats");
const Watching = require("./Watching");
const WebpackError = require("./WebpackError");
const { Logger } = require("./logging/Logger");
const { dirname, join, mkdirp } = require("./util/fs");
const { makePathsRelative } = require("./util/identifier");
const memoize = require("./util/memoize");
const parseJson = require("./util/parseJson");
const { isSourceEqual } = require("./util/source");
const webpack = require(".");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../declarations/WebpackOptions").EntryNormalized} Entry */
/** @typedef {import("../declarations/WebpackOptions").OutputNormalized} OutputOptions */
/** @typedef {import("../declarations/WebpackOptions").WatchOptions} WatchOptions */
/** @typedef {import("../declarations/WebpackOptions").WebpackOptionsNormalized} WebpackOptions */
/** @typedef {import("../declarations/WebpackOptions").Plugins} Plugins */
/** @typedef {import("./webpack").WebpackPluginFunction} WebpackPluginFunction */
/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./Dependency")} Dependency */
/** @typedef {import("./HotModuleReplacementPlugin").ChunkHashes} ChunkHashes */
/** @typedef {import("./HotModuleReplacementPlugin").ChunkModuleHashes} ChunkModuleHashes */
/** @typedef {import("./HotModuleReplacementPlugin").ChunkModuleIds} ChunkModuleIds */
/** @typedef {import("./HotModuleReplacementPlugin").ChunkRuntime} ChunkRuntime */
/** @typedef {import("./HotModuleReplacementPlugin").FullHashChunkModuleHashes} FullHashChunkModuleHashes */
/** @typedef {import("./HotModuleReplacementPlugin").HotIndex} HotIndex */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./Module").BuildInfo} BuildInfo */
/** @typedef {import("./RecordIdsPlugin").RecordsChunks} RecordsChunks */
/** @typedef {import("./RecordIdsPlugin").RecordsModules} RecordsModules */
/** @typedef {import("./config/target").PlatformTargetProperties} PlatformTargetProperties */
/** @typedef {import("./logging/createConsoleLogger").LoggingFunction} LoggingFunction */
/** @typedef {import("./optimize/AggressiveSplittingPlugin").SplitData} SplitData */
/** @typedef {import("./util/fs").IStats} IStats */
/** @typedef {import("./util/fs").InputFileSystem} InputFileSystem */
/** @typedef {import("./util/fs").IntermediateFileSystem} IntermediateFileSystem */
/** @typedef {import("./util/fs").OutputFileSystem} OutputFileSystem */
/** @typedef {import("./util/fs").TimeInfoEntries} TimeInfoEntries */
/** @typedef {import("./util/fs").WatchFileSystem} WatchFileSystem */
/** @typedef {import("schema-utils").validate} Validate */
/** @typedef {import("schema-utils").Schema} Schema */
/** @typedef {import("schema-utils").ValidationErrorConfiguration} ValidationErrorConfiguration */

/**
 * Defines the compilation params type used by this module.
 * @typedef {object} CompilationParams
 * @property {NormalModuleFactory} normalModuleFactory
 * @property {ContextModuleFactory} contextModuleFactory
 */

/**
 * Defines the callback type used by this module.
 * @template T
 * @template [R=void]
 * @typedef {import("./webpack").Callback<T, R>} Callback
 */

/** @typedef {import("./webpack").ErrorCallback} ErrorCallback */

/**
 * Defines the run as child callback callback.
 * @callback RunAsChildCallback
 * @param {Error | null} err
 * @param {Chunk[]=} entries
 * @param {Compilation=} compilation
 * @returns {void}
 */

/**
 * Defines the known records type used by this module.
 * @typedef {object} KnownRecords
 * @property {SplitData[]=} aggressiveSplits
 * @property {RecordsChunks=} chunks
 * @property {RecordsModules=} modules
 * @property {string=} hash
 * @property {HotIndex=} hotIndex
 * @property {FullHashChunkModuleHashes=} fullHashChunkModuleHashes
 * @property {ChunkModuleHashes=} chunkModuleHashes
 * @property {ChunkHashes=} chunkHashes
 * @property {ChunkRuntime=} chunkRuntime
 * @property {ChunkModuleIds=} chunkModuleIds
 */

/** @typedef {KnownRecords & Record<string, KnownRecords[]> & Record<string, EXPECTED_ANY>} Records */

/**
 * Defines the asset emitted info type used by this module.
 * @typedef {object} AssetEmittedInfo
 * @property {Buffer} content
 * @property {Source} source
 * @property {Compilation} compilation
 * @property {string} outputPath
 * @property {string} targetPath
 */

/** @typedef {{ sizeOnlySource: SizeOnlySource | undefined, writtenTo: Map<string, number> }} CacheEntry */
/** @typedef {{ path: string, source: Source, size: number | undefined, waiting: ({ cacheEntry: CacheEntry, file: string }[] | undefined) }} SimilarEntry */

/** @typedef {WeakMap<Dependency, Module>} WeakReferences */
/** @typedef {import("./util/WeakTupleMap")<EXPECTED_ANY[], EXPECTED_ANY>} MemCache */
/** @typedef {{ buildInfo: BuildInfo, references: WeakReferences | undefined, memCache: MemCache }} ModuleMemCachesItem */

/**
 * Checks whether this object is sorted.
 * @template T
 * @param {T[]} array an array
 * @returns {boolean} true, if the array is sorted
 */
const isSorted = (array) => {
	for (let i = 1; i < array.length; i++) {
		if (array[i - 1] > array[i]) return false;
	}
	return true;
};

/**
 * Returns the object with properties sorted by property name.
 * @template {object} T
 * @param {T} obj an object
 * @param {(keyof T)[]} keys the keys of the object
 * @returns {T} the object with properties sorted by property name
 */
const sortObject = (obj, keys) => {
	const o = /** @type {T} */ ({});
	for (const k of keys.sort()) {
		o[k] = obj[k];
	}
	return o;
};

/**
 * Returns true, if the filename contains any hash.
 * @param {string} filename filename
 * @param {string | string[] | undefined} hashes list of hashes
 * @returns {boolean} true, if the filename contains any hash
 */
const includesHash = (filename, hashes) => {
	if (!hashes) return false;
	if (Array.isArray(hashes)) {
		return hashes.some((hash) => filename.includes(hash));
	}
	return filename.includes(hashes);
};

const getValidate = memoize(() => require("schema-utils").validate);

class Compiler {
	/**
	 * Creates an instance of Compiler.
	 * @param {string} context the compilation path
	 * @param {WebpackOptions} options options
	 */
	constructor(context, options = /** @type {WebpackOptions} */ ({})) {
		this.hooks = Object.freeze({
			/** @type {SyncHook<[]>} */
			initialize: new SyncHook([]),

			/** @type {SyncBailHook<[Compilation], boolean | void>} */
			shouldEmit: new SyncBailHook(["compilation"]),
			/** @type {AsyncSeriesHook<[Stats]>} */
			done: new AsyncSeriesHook(["stats"]),
			/** @type {SyncHook<[Stats]>} */
			afterDone: new SyncHook(["stats"]),
			/** @type {AsyncSeriesHook<[]>} */
			additionalPass: new AsyncSeriesHook([]),
			/** @type {AsyncSeriesHook<[Compiler]>} */
			beforeRun: new AsyncSeriesHook(["compiler"]),
			/** @type {AsyncSeriesHook<[Compiler]>} */
			run: new AsyncSeriesHook(["compiler"]),
			/** @type {AsyncSeriesHook<[Compilation]>} */
			emit: new AsyncSeriesHook(["compilation"]),
			/** @type {AsyncSeriesHook<[string, AssetEmittedInfo]>} */
			assetEmitted: new AsyncSeriesHook(["file", "info"]),
			/** @type {AsyncSeriesHook<[Compilation]>} */
			afterEmit: new AsyncSeriesHook(["compilation"]),

			/** @type {SyncHook<[Compilation, CompilationParams]>} */
			thisCompilation: new SyncHook(["compilation", "params"]),
			/** @type {SyncHook<[Compilation, CompilationParams]>} */
			compilation: new SyncHook(["compilation", "params"]),
			/** @type {SyncHook<[NormalModuleFactory]>} */
			normalModuleFactory: new SyncHook(["normalModuleFactory"]),
			/** @type {SyncHook<[ContextModuleFactory]>}  */
			contextModuleFactory: new SyncHook(["contextModuleFactory"]),

			/** @type {AsyncSeriesHook<[CompilationParams]>} */
			beforeCompile: new AsyncSeriesHook(["params"]),
			/** @type {SyncHook<[CompilationParams]>} */
			compile: new SyncHook(["params"]),
			/** @type {AsyncParallelHook<[Compilation]>} */
			make: new AsyncParallelHook(["compilation"]),
			/** @type {AsyncParallelHook<[Compilation]>} */
			finishMake: new AsyncSeriesHook(["compilation"]),
			/** @type {AsyncSeriesHook<[Compilation]>} */
			afterCompile: new AsyncSeriesHook(["compilation"]),

			/** @type {AsyncSeriesHook<[]>} */
			readRecords: new AsyncSeriesHook([]),
			/** @type {AsyncSeriesHook<[]>} */
			emitRecords: new AsyncSeriesHook([]),

			/** @type {AsyncSeriesHook<[Compiler]>} */
			watchRun: new AsyncSeriesHook(["compiler"]),
			/** @type {SyncHook<[Error]>} */
			failed: new SyncHook(["error"]),
			/** @type {SyncHook<[string | null, number]>} */
			invalid: new SyncHook(["filename", "changeTime"]),
			/** @type {SyncHook<[]>} */
			watchClose: new SyncHook([]),
			/** @type {AsyncSeriesHook<[]>} */
			shutdown: new AsyncSeriesHook([]),

			/** @type {SyncBailHook<[string, string, EXPECTED_ANY[] | undefined], true | void>} */
			infrastructureLog: new SyncBailHook(["origin", "type", "args"]),

			// TODO the following hooks are weirdly located here
			// TODO move them for webpack 5
			/** @type {SyncHook<[]>} */
			validate: new SyncHook([]),
			/** @type {SyncHook<[]>} */
			environment: new SyncHook([]),
			/** @type {SyncHook<[]>} */
			afterEnvironment: new SyncHook([]),
			/** @type {SyncHook<[Compiler]>} */
			afterPlugins: new SyncHook(["compiler"]),
			/** @type {SyncHook<[Compiler]>} */
			afterResolvers: new SyncHook(["compiler"]),
			/** @type {SyncBailHook<[string, Entry], boolean | void>} */
			entryOption: new SyncBailHook(["context", "entry"])
		});

		this.webpack = webpack;

		/** @type {string | undefined} */
		this.name = undefined;
		/** @type {Compilation | undefined} */
		this.parentCompilation = undefined;
		/** @type {Compiler} */
		this.root = this;
		/** @type {string} */
		this.outputPath = "";
		/** @type {Watching | undefined} */
		this.watching = undefined;

		/** @type {OutputFileSystem | null} */
		this.outputFileSystem = null;
		/** @type {IntermediateFileSystem | null} */
		this.intermediateFileSystem = null;
		/** @type {InputFileSystem | null} */
		this.inputFileSystem = null;
		/** @type {WatchFileSystem | null} */
		this.watchFileSystem = null;

		/** @type {string | null} */
		this.recordsInputPath = null;
		/** @type {string | null} */
		this.recordsOutputPath = null;
		/** @type {Records} */
		this.records = {};
		/** @type {Set<string | RegExp>} */
		this.managedPaths = new Set();
		/** @type {Set<string | RegExp>} */
		this.unmanagedPaths = new Set();
		/** @type {Set<string | RegExp>} */
		this.immutablePaths = new Set();

		/** @type {ReadonlySet<string> | undefined} */
		this.modifiedFiles = undefined;
		/** @type {ReadonlySet<string> | undefined} */
		this.removedFiles = undefined;
		/** @type {TimeInfoEntries | undefined} */
		this.fileTimestamps = undefined;
		/** @type {TimeInfoEntries | undefined} */
		this.contextTimestamps = undefined;
		/** @type {number | undefined} */
		this.fsStartTime = undefined;

		/** @type {ResolverFactory} */
		this.resolverFactory = new ResolverFactory();

		/** @type {LoggingFunction | undefined} */
		this.infrastructureLogger = undefined;

		/** @type {Readonly<PlatformTargetProperties>} */
		this.platform = {
			web: null,
			browser: null,
			webworker: null,
			node: null,
			nwjs: null,
			electron: null
		};

		this.options = options;

		this.context = context;

		this.requestShortener = new RequestShortener(context, this.root);

		this.cache = new Cache();

		/** @type {Map<Module, ModuleMemCachesItem> | undefined} */
		this.moduleMemCaches = undefined;

		this.compilerPath = "";

		/** @type {boolean} */
		this.running = false;

		/** @type {boolean} */
		this.idle = false;

		/** @type {boolean} */
		this.watchMode = false;

		this._backCompat = this.options.experiments.backCompat !== false;

		/** @type {Compilation | undefined} */
		this._lastCompilation = undefined;
		/** @type {NormalModuleFactory | undefined} */
		this._lastNormalModuleFactory = undefined;

		/**
		 * @private
		 * @type {WeakMap<Source, CacheEntry>}
		 */
		this._assetEmittingSourceCache = new WeakMap();
		/**
		 * @private
		 * @type {Map<string, number>}
		 */
		this._assetEmittingWrittenFiles = new Map();
		/**
		 * @private
		 * @type {Set<string>}
		 */
		this._assetEmittingPreviousFiles = new Set();
	}

	/**
	 * Returns the cache facade instance.
	 * @param {string} name cache name
	 * @returns {CacheFacade} the cache facade instance
	 */
	getCache(name) {
		return new CacheFacade(
			this.cache,
			`${this.compilerPath}${name}`,
			this.options.output.hashFunction
		);
	}

	/**
	 * Gets infrastructure logger.
	 * @param {string | (() => string)} name name of the logger, or function called once to get the logger name
	 * @returns {Logger} a logger with that name
	 */
	getInfrastructureLogger(name) {
		if (!name) {
			throw new TypeError(
				"Compiler.getInfrastructureLogger(name) called without a name"
			);
		}
		return new Logger(
			(type, args) => {
				if (typeof name === "function") {
					name = name();
					if (!name) {
						throw new TypeError(
							"Compiler.getInfrastructureLogger(name) called with a function not returning a name"
						);
					}
				}
				if (
					this.hooks.infrastructureLog.call(name, type, args) === undefined &&
					this.infrastructureLogger !== undefined
				) {
					this.infrastructureLogger(name, type, args);
				}
			},
			(childName) => {
				if (typeof name === "function") {
					if (typeof childName === "function") {
						return this.getInfrastructureLogger(() => {
							if (typeof name === "function") {
								name = name();
								if (!name) {
									throw new TypeError(
										"Compiler.getInfrastructureLogger(name) called with a function not returning a name"
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
					return this.getInfrastructureLogger(() => {
						if (typeof name === "function") {
							name = name();
							if (!name) {
								throw new TypeError(
									"Compiler.getInfrastructureLogger(name) called with a function not returning a name"
								);
							}
						}
						return `${name}/${childName}`;
					});
				}
				if (typeof childName === "function") {
					return this.getInfrastructureLogger(() => {
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
				return this.getInfrastructureLogger(`${name}/${childName}`);
			}
		);
	}

	// TODO webpack 6: solve this in a better way
	// e.g. move compilation specific info from Modules into ModuleGraph
	_cleanupLastCompilation() {
		if (this._lastCompilation !== undefined) {
			for (const childCompilation of this._lastCompilation.children) {
				for (const module of childCompilation.modules) {
					ChunkGraph.clearChunkGraphForModule(module);
					ModuleGraph.clearModuleGraphForModule(module);
					module.cleanupForCache();
				}
				for (const chunk of childCompilation.chunks) {
					ChunkGraph.clearChunkGraphForChunk(chunk);
				}
			}

			for (const module of this._lastCompilation.modules) {
				ChunkGraph.clearChunkGraphForModule(module);
				ModuleGraph.clearModuleGraphForModule(module);
				module.cleanupForCache();
			}
			for (const chunk of this._lastCompilation.chunks) {
				ChunkGraph.clearChunkGraphForChunk(chunk);
			}
			this._lastCompilation = undefined;
		}
	}

	// TODO webpack 6: solve this in a better way
	_cleanupLastNormalModuleFactory() {
		if (this._lastNormalModuleFactory !== undefined) {
			this._lastNormalModuleFactory.cleanupForCache();
			this._lastNormalModuleFactory = undefined;
		}
	}

	/**
	 * Returns a compiler watcher.
	 * @param {WatchOptions} watchOptions the watcher's options
	 * @param {Callback<Stats>} handler signals when the call finishes
	 * @returns {Watching | undefined} a compiler watcher
	 */
	watch(watchOptions, handler) {
		if (this.running) {
			handler(new ConcurrentCompilationError());
			return;
		}

		this.running = true;
		this.watchMode = true;
		this.watching = new Watching(this, watchOptions, handler);
		return this.watching;
	}

	/**
	 * Processes the provided stat.
	 * @param {Callback<Stats>} callback signals when the call finishes
	 * @returns {void}
	 */
	run(callback) {
		if (this.running) {
			callback(new ConcurrentCompilationError());
			return;
		}

		/** @type {Logger | undefined} */
		let logger;

		/**
		 * Processes the provided err.
		 * @param {Error | null} err error
		 * @param {Stats=} stats stats
		 */
		const finalCallback = (err, stats) => {
			if (logger) logger.time("beginIdle");
			this.idle = true;
			this.cache.beginIdle();
			if (logger) logger.timeEnd("beginIdle");
			this.running = false;
			if (err) {
				this.hooks.failed.call(err);
			}
			if (callback !== undefined) callback(err, stats);
			this.hooks.afterDone.call(/** @type {Stats} */ (stats));
		};

		const startTime = Date.now();

		this.running = true;

		/**
		 * Processes the provided err.
		 * @param {Error | null} err error
		 * @param {Compilation=} _compilation compilation
		 * @returns {void}
		 */
		const onCompiled = (err, _compilation) => {
			if (err) return finalCallback(err);

			const compilation = /** @type {Compilation} */ (_compilation);

			if (this.hooks.shouldEmit.call(compilation) === false) {
				compilation.startTime = startTime;
				compilation.endTime = Date.now();
				const stats = new Stats(compilation);
				this.hooks.done.callAsync(stats, (err) => {
					if (err) return finalCallback(err);
					return finalCallback(null, stats);
				});
				return;
			}

			process.nextTick(() => {
				logger = compilation.getLogger("webpack.Compiler");
				logger.time("emitAssets");
				this.emitAssets(compilation, (err) => {
					/** @type {Logger} */
					(logger).timeEnd("emitAssets");
					if (err) return finalCallback(err);

					if (compilation.hooks.needAdditionalPass.call()) {
						compilation.needAdditionalPass = true;

						compilation.startTime = startTime;
						compilation.endTime = Date.now();
						/** @type {Logger} */
						(logger).time("done hook");
						const stats = new Stats(compilation);
						this.hooks.done.callAsync(stats, (err) => {
							/** @type {Logger} */
							(logger).timeEnd("done hook");
							if (err) return finalCallback(err);

							this.hooks.additionalPass.callAsync((err) => {
								if (err) return finalCallback(err);
								this.compile(onCompiled);
							});
						});
						return;
					}

					/** @type {Logger} */
					(logger).time("emitRecords");
					this.emitRecords((err) => {
						/** @type {Logger} */
						(logger).timeEnd("emitRecords");
						if (err) return finalCallback(err);

						compilation.startTime = startTime;
						compilation.endTime = Date.now();
						/** @type {Logger} */
						(logger).time("done hook");
						const stats = new Stats(compilation);
						this.hooks.done.callAsync(stats, (err) => {
							/** @type {Logger} */
							(logger).timeEnd("done hook");
							if (err) return finalCallback(err);
							this.cache.storeBuildDependencies(
								compilation.buildDependencies,
								(err) => {
									if (err) return finalCallback(err);
									return finalCallback(null, stats);
								}
							);
						});
					});
				});
			});
		};

		const run = () => {
			this.hooks.beforeRun.callAsync(this, (err) => {
				if (err) return finalCallback(err);

				this.hooks.run.callAsync(this, (err) => {
					if (err) return finalCallback(err);

					this.readRecords((err) => {
						if (err) return finalCallback(err);

						this.compile(onCompiled);
					});
				});
			});
		};

		if (this.idle) {
			this.cache.endIdle((err) => {
				if (err) return finalCallback(err);

				this.idle = false;
				run();
			});
		} else {
			run();
		}
	}

	/**
	 * Processes the provided run as child callback.
	 * @param {RunAsChildCallback} callback signals when the call finishes
	 * @returns {void}
	 */
	runAsChild(callback) {
		const startTime = Date.now();

		/**
		 * Processes the provided err.
		 * @param {Error | null} err error
		 * @param {Chunk[]=} entries entries
		 * @param {Compilation=} compilation compilation
		 */
		const finalCallback = (err, entries, compilation) => {
			try {
				callback(err, entries, compilation);
			} catch (runAsChildErr) {
				const err = new WebpackError(
					`compiler.runAsChild callback error: ${runAsChildErr}`,
					{ cause: runAsChildErr }
				);
				err.details = /** @type {Error} */ (runAsChildErr).stack;
				/** @type {Compilation} */
				(this.parentCompilation).errors.push(err);
			}
		};

		this.compile((err, _compilation) => {
			if (err) return finalCallback(err);

			const compilation = /** @type {Compilation} */ (_compilation);
			const parentCompilation = /** @type {Compilation} */ (
				this.parentCompilation
			);

			parentCompilation.children.push(compilation);

			for (const { name, source, info } of compilation.getAssets()) {
				parentCompilation.emitAsset(name, source, info);
			}

			/** @type {Chunk[]} */
			const entries = [];

			for (const ep of compilation.entrypoints.values()) {
				entries.push(...ep.chunks);
			}

			compilation.startTime = startTime;
			compilation.endTime = Date.now();

			return finalCallback(null, entries, compilation);
		});
	}

	purgeInputFileSystem() {
		if (this.inputFileSystem && this.inputFileSystem.purge) {
			this.inputFileSystem.purge();
		}
	}

	/**
	 * Processes the provided compilation.
	 * @param {Compilation} compilation the compilation
	 * @param {ErrorCallback} callback signals when the assets are emitted
	 * @returns {void}
	 */
	emitAssets(compilation, callback) {
		/** @type {string} */
		let outputPath;

		/**
		 * Processes the provided err.
		 * @param {Error=} err error
		 * @returns {void}
		 */
		const emitFiles = (err) => {
			if (err) return callback(err);

			const assets = compilation.getAssets();
			compilation.assets = { ...compilation.assets };
			/** @type {Map<string, SimilarEntry>} */
			const caseInsensitiveMap = new Map();
			/** @type {Set<string>} */
			const allTargetPaths = new Set();
			asyncLib.forEachLimit(
				assets,
				15,
				({ name: file, source, info }, callback) => {
					let targetFile = file;
					let immutable = info.immutable;
					const queryOrHashStringIdx = targetFile.search(/[?#]/);
					if (queryOrHashStringIdx >= 0) {
						targetFile = targetFile.slice(0, queryOrHashStringIdx);
						// We may remove the hash, which is in the query string
						// So we recheck if the file is immutable
						// This doesn't cover all cases, but immutable is only a performance optimization anyway
						immutable =
							immutable &&
							(includesHash(targetFile, info.contenthash) ||
								includesHash(targetFile, info.chunkhash) ||
								includesHash(targetFile, info.modulehash) ||
								includesHash(targetFile, info.fullhash));
					}

					/**
					 * Processes the provided err.
					 * @param {Error=} err error
					 * @returns {void}
					 */
					const writeOut = (err) => {
						if (err) return callback(err);
						const targetPath = join(
							/** @type {OutputFileSystem} */
							(this.outputFileSystem),
							outputPath,
							targetFile
						);
						allTargetPaths.add(targetPath);

						// check if the target file has already been written by this Compiler
						const targetFileGeneration =
							this._assetEmittingWrittenFiles.get(targetPath);

						// create an cache entry for this Source if not already existing
						let cacheEntry = this._assetEmittingSourceCache.get(source);
						if (cacheEntry === undefined) {
							cacheEntry = {
								sizeOnlySource: undefined,
								/** @type {CacheEntry["writtenTo"]} */
								writtenTo: new Map()
							};
							this._assetEmittingSourceCache.set(source, cacheEntry);
						}

						/** @type {SimilarEntry | undefined} */
						let similarEntry;

						const checkSimilarFile = () => {
							const caseInsensitiveTargetPath = targetPath.toLowerCase();
							similarEntry = caseInsensitiveMap.get(caseInsensitiveTargetPath);
							if (similarEntry !== undefined) {
								const { path: other, source: otherSource } = similarEntry;
								if (isSourceEqual(otherSource, source)) {
									// Size may or may not be available at this point.
									// If it's not available add to "waiting" list and it will be updated once available
									if (similarEntry.size !== undefined) {
										updateWithReplacementSource(similarEntry.size);
									} else {
										if (!similarEntry.waiting) similarEntry.waiting = [];
										similarEntry.waiting.push({ file, cacheEntry });
									}
									alreadyWritten();
								} else {
									const err =
										new WebpackError(`Prevent writing to file that only differs in casing or query string from already written file.
This will lead to a race-condition and corrupted files on case-insensitive file systems.
${targetPath}
${other}`);
									err.file = file;
									callback(err);
								}
								return true;
							}
							caseInsensitiveMap.set(
								caseInsensitiveTargetPath,
								(similarEntry = /** @type {SimilarEntry} */ ({
									path: targetPath,
									source,
									size: undefined,
									waiting: undefined
								}))
							);
							return false;
						};

						/**
						 * get the binary (Buffer) content from the Source
						 * @returns {Buffer} content for the source
						 */
						const getContent = () => {
							if (typeof source.buffer === "function") {
								return source.buffer();
							}
							const bufferOrString = source.source();
							if (Buffer.isBuffer(bufferOrString)) {
								return bufferOrString;
							}
							return Buffer.from(bufferOrString, "utf8");
						};

						const alreadyWritten = () => {
							// cache the information that the Source has been already been written to that location
							if (targetFileGeneration === undefined) {
								const newGeneration = 1;
								this._assetEmittingWrittenFiles.set(targetPath, newGeneration);
								/** @type {CacheEntry} */
								(cacheEntry).writtenTo.set(targetPath, newGeneration);
							} else {
								/** @type {CacheEntry} */
								(cacheEntry).writtenTo.set(targetPath, targetFileGeneration);
							}
							callback();
						};

						/**
						 * Write the file to output file system
						 * @param {Buffer} content content to be written
						 * @returns {void}
						 */
						const doWrite = (content) => {
							/** @type {OutputFileSystem} */
							(this.outputFileSystem).writeFile(targetPath, content, (err) => {
								if (err) return callback(err);

								// information marker that the asset has been emitted
								compilation.emittedAssets.add(file);

								// cache the information that the Source has been written to that location
								const newGeneration =
									targetFileGeneration === undefined
										? 1
										: targetFileGeneration + 1;
								/** @type {CacheEntry} */
								(cacheEntry).writtenTo.set(targetPath, newGeneration);
								this._assetEmittingWrittenFiles.set(targetPath, newGeneration);
								this.hooks.assetEmitted.callAsync(
									file,
									{
										content,
										source,
										outputPath,
										compilation,
										targetPath
									},
									callback
								);
							});
						};

						/**
						 * Updates with replacement source.
						 * @param {number} size size
						 */
						const updateWithReplacementSource = (size) => {
							updateFileWithReplacementSource(
								file,
								/** @type {CacheEntry} */ (cacheEntry),
								size
							);
							/** @type {SimilarEntry} */
							(similarEntry).size = size;
							if (
								/** @type {SimilarEntry} */ (similarEntry).waiting !== undefined
							) {
								for (const { file, cacheEntry } of /** @type {SimilarEntry} */ (
									similarEntry
								).waiting) {
									updateFileWithReplacementSource(file, cacheEntry, size);
								}
							}
						};

						/**
						 * Updates file with replacement source.
						 * @param {string} file file
						 * @param {CacheEntry} cacheEntry cache entry
						 * @param {number} size size
						 */
						const updateFileWithReplacementSource = (
							file,
							cacheEntry,
							size
						) => {
							// Create a replacement resource which only allows to ask for size
							// This allows to GC all memory allocated by the Source
							// (expect when the Source is stored in any other cache)
							if (!cacheEntry.sizeOnlySource) {
								cacheEntry.sizeOnlySource = new SizeOnlySource(size);
							}
							compilation.updateAsset(file, cacheEntry.sizeOnlySource, {
								size
							});
						};

						/**
						 * Process existing file.
						 * @param {IStats} stats stats
						 * @returns {void}
						 */
						const processExistingFile = (stats) => {
							// skip emitting if it's already there and an immutable file
							if (immutable) {
								updateWithReplacementSource(/** @type {number} */ (stats.size));
								return alreadyWritten();
							}

							const content = getContent();

							updateWithReplacementSource(content.length);

							// if it exists and content on disk matches content
							// skip writing the same content again
							// (to keep mtime and don't trigger watchers)
							// for a fast negative match file size is compared first
							if (content.length === stats.size) {
								compilation.comparedForEmitAssets.add(file);
								return /** @type {OutputFileSystem} */ (
									this.outputFileSystem
								).readFile(targetPath, (err, existingContent) => {
									if (
										err ||
										!content.equals(/** @type {Buffer} */ (existingContent))
									) {
										return doWrite(content);
									}
									return alreadyWritten();
								});
							}

							return doWrite(content);
						};

						const processMissingFile = () => {
							const content = getContent();

							updateWithReplacementSource(content.length);

							return doWrite(content);
						};

						// if the target file has already been written
						if (targetFileGeneration !== undefined) {
							// check if the Source has been written to this target file
							const writtenGeneration = /** @type {CacheEntry} */ (
								cacheEntry
							).writtenTo.get(targetPath);
							if (writtenGeneration === targetFileGeneration) {
								// if yes, we may skip writing the file
								// if it's already there
								// (we assume one doesn't modify files while the Compiler is running, other then removing them)

								if (this._assetEmittingPreviousFiles.has(targetPath)) {
									const sizeOnlySource = /** @type {SizeOnlySource} */ (
										/** @type {CacheEntry} */ (cacheEntry).sizeOnlySource
									);

									// We assume that assets from the last compilation say intact on disk (they are not removed)
									compilation.updateAsset(file, sizeOnlySource, {
										size: sizeOnlySource.size()
									});

									return callback();
								}
								// Settings immutable will make it accept file content without comparing when file exist
								immutable = true;
							} else if (!immutable) {
								if (checkSimilarFile()) return;
								// We wrote to this file before which has very likely a different content
								// skip comparing and assume content is different for performance
								// This case happens often during watch mode.
								return processMissingFile();
							}
						}

						if (checkSimilarFile()) return;
						if (this.options.output.compareBeforeEmit) {
							/** @type {OutputFileSystem} */
							(this.outputFileSystem).stat(targetPath, (err, stats) => {
								const exists = !err && /** @type {IStats} */ (stats).isFile();

								if (exists) {
									processExistingFile(/** @type {IStats} */ (stats));
								} else {
									processMissingFile();
								}
							});
						} else {
							processMissingFile();
						}
					};

					if (/\/|\\/.test(targetFile)) {
						const fs = /** @type {OutputFileSystem} */ (this.outputFileSystem);
						const dir = dirname(fs, join(fs, outputPath, targetFile));
						mkdirp(fs, dir, writeOut);
					} else {
						writeOut();
					}
				},
				(err) => {
					// Clear map to free up memory
					caseInsensitiveMap.clear();
					if (err) {
						this._assetEmittingPreviousFiles.clear();
						return callback(err);
					}

					this._assetEmittingPreviousFiles = allTargetPaths;

					this.hooks.afterEmit.callAsync(compilation, (err) => {
						if (err) return callback(err);

						return callback(null);
					});
				}
			);
		};

		this.hooks.emit.callAsync(compilation, (err) => {
			if (err) return callback(err);
			outputPath = compilation.getPath(this.outputPath, {});
			mkdirp(
				/** @type {OutputFileSystem} */ (this.outputFileSystem),
				outputPath,
				emitFiles
			);
		});
	}

	/**
	 * Processes the provided error callback.
	 * @param {ErrorCallback} callback signals when the call finishes
	 * @returns {void}
	 */
	emitRecords(callback) {
		if (this.hooks.emitRecords.isUsed()) {
			if (this.recordsOutputPath) {
				asyncLib.parallel(
					[
						(cb) => this.hooks.emitRecords.callAsync(cb),
						this._emitRecords.bind(this)
					],
					(err) => callback(/** @type {Error | null} */ (err))
				);
			} else {
				this.hooks.emitRecords.callAsync(callback);
			}
		} else if (this.recordsOutputPath) {
			this._emitRecords(callback);
		} else {
			callback(null);
		}
	}

	/**
	 * Processes the provided error callback.
	 * @param {ErrorCallback} callback signals when the call finishes
	 * @returns {void}
	 */
	_emitRecords(callback) {
		const writeFile = () => {
			/** @type {OutputFileSystem} */
			(this.outputFileSystem).writeFile(
				/** @type {string} */ (this.recordsOutputPath),
				JSON.stringify(
					this.records,
					(n, value) => {
						if (
							typeof value === "object" &&
							value !== null &&
							!Array.isArray(value)
						) {
							const keys = Object.keys(value);
							if (!isSorted(keys)) {
								return sortObject(value, keys);
							}
						}
						return value;
					},
					2
				),
				callback
			);
		};

		const recordsOutputPathDirectory = dirname(
			/** @type {OutputFileSystem} */
			(this.outputFileSystem),
			/** @type {string} */
			(this.recordsOutputPath)
		);
		if (!recordsOutputPathDirectory) {
			return writeFile();
		}
		mkdirp(
			/** @type {OutputFileSystem} */ (this.outputFileSystem),
			recordsOutputPathDirectory,
			(err) => {
				if (err) return callback(err);
				writeFile();
			}
		);
	}

	/**
	 * Processes the provided error callback.
	 * @param {ErrorCallback} callback signals when the call finishes
	 * @returns {void}
	 */
	readRecords(callback) {
		if (this.hooks.readRecords.isUsed()) {
			if (this.recordsInputPath) {
				asyncLib.parallel(
					[
						(cb) => this.hooks.readRecords.callAsync(cb),
						this._readRecords.bind(this)
					],
					(err) => callback(/** @type {Error | null} */ (err))
				);
			} else {
				this.records = {};
				this.hooks.readRecords.callAsync(callback);
			}
		} else if (this.recordsInputPath) {
			this._readRecords(callback);
		} else {
			this.records = {};
			callback(null);
		}
	}

	/**
	 * Processes the provided error callback.
	 * @param {ErrorCallback} callback signals when the call finishes
	 * @returns {void}
	 */
	_readRecords(callback) {
		if (!this.recordsInputPath) {
			this.records = {};
			return callback(null);
		}
		/** @type {InputFileSystem} */
		(this.inputFileSystem).stat(this.recordsInputPath, (err) => {
			// It doesn't exist
			// We can ignore this.
			if (err) return callback(null);

			/** @type {InputFileSystem} */
			(this.inputFileSystem).readFile(
				/** @type {string} */
				(this.recordsInputPath),
				(err, content) => {
					if (err) return callback(err);

					try {
						this.records =
							/** @type {Records} */
							(parseJson(/** @type {Buffer} */ (content).toString("utf8")));
					} catch (parseErr) {
						return callback(
							new Error(
								`Cannot parse records: ${/** @type {Error} */ (parseErr).message}`
							)
						);
					}

					return callback(null);
				}
			);
		});
	}

	/**
	 * Creates a child compiler.
	 * @param {Compilation} compilation the compilation
	 * @param {string} compilerName the compiler's name
	 * @param {number} compilerIndex the compiler's index
	 * @param {Partial<OutputOptions>=} outputOptions the output options
	 * @param {Plugins=} plugins the plugins to apply
	 * @returns {Compiler} a child compiler
	 */
	createChildCompiler(
		compilation,
		compilerName,
		compilerIndex,
		outputOptions,
		plugins
	) {
		const childCompiler = new Compiler(this.context, {
			...this.options,
			output: {
				...this.options.output,
				...outputOptions
			}
		});
		childCompiler.name = compilerName;
		childCompiler.outputPath = this.outputPath;
		childCompiler.inputFileSystem = this.inputFileSystem;
		childCompiler.outputFileSystem = null;
		childCompiler.resolverFactory = this.resolverFactory;
		childCompiler.modifiedFiles = this.modifiedFiles;
		childCompiler.removedFiles = this.removedFiles;
		childCompiler.fileTimestamps = this.fileTimestamps;
		childCompiler.contextTimestamps = this.contextTimestamps;
		childCompiler.fsStartTime = this.fsStartTime;
		childCompiler.cache = this.cache;
		childCompiler.compilerPath = `${this.compilerPath}${compilerName}|${compilerIndex}|`;
		childCompiler._backCompat = this._backCompat;

		const relativeCompilerName = makePathsRelative(
			this.context,
			compilerName,
			this.root
		);
		if (!this.records[relativeCompilerName]) {
			this.records[relativeCompilerName] = [];
		}
		if (this.records[relativeCompilerName][compilerIndex]) {
			childCompiler.records =
				/** @type {Records} */
				(this.records[relativeCompilerName][compilerIndex]);
		} else {
			this.records[relativeCompilerName].push((childCompiler.records = {}));
		}

		childCompiler.parentCompilation = compilation;
		childCompiler.root = this.root;
		if (Array.isArray(plugins)) {
			for (const plugin of plugins) {
				if (typeof plugin === "function") {
					/** @type {WebpackPluginFunction} */
					(plugin).call(childCompiler, childCompiler);
				} else if (plugin) {
					plugin.apply(childCompiler);
				}
			}
		}
		for (const name in this.hooks) {
			if (
				![
					"make",
					"compile",
					"emit",
					"afterEmit",
					"invalid",
					"done",
					"thisCompilation"
				].includes(name) &&
				childCompiler.hooks[/** @type {keyof Compiler["hooks"]} */ (name)]
			) {
				childCompiler.hooks[
					/** @type {keyof Compiler["hooks"]} */
					(name)
				].taps = [
					...this.hooks[
						/** @type {keyof Compiler["hooks"]} */
						(name)
					].taps
				];
			}
		}

		compilation.hooks.childCompiler.call(
			childCompiler,
			compilerName,
			compilerIndex
		);

		return childCompiler;
	}

	isChild() {
		return Boolean(this.parentCompilation);
	}

	/**
	 * Creates a compilation.
	 * @param {CompilationParams} params the compilation parameters
	 * @returns {Compilation} compilation
	 */
	createCompilation(params) {
		this._cleanupLastCompilation();
		return (this._lastCompilation = new Compilation(this, params));
	}

	/**
	 * Returns the created compilation.
	 * @param {CompilationParams} params the compilation parameters
	 * @returns {Compilation} the created compilation
	 */
	newCompilation(params) {
		const compilation = this.createCompilation(params);
		compilation.name = this.name;
		compilation.records = this.records;
		this.hooks.thisCompilation.call(compilation, params);
		this.hooks.compilation.call(compilation, params);
		return compilation;
	}

	createNormalModuleFactory() {
		this._cleanupLastNormalModuleFactory();
		const normalModuleFactory = new NormalModuleFactory({
			context: this.options.context,
			fs: /** @type {InputFileSystem} */ (this.inputFileSystem),
			resolverFactory: this.resolverFactory,
			options: this.options.module,
			associatedObjectForCache: this.root
		});
		this._lastNormalModuleFactory = normalModuleFactory;
		this.hooks.normalModuleFactory.call(normalModuleFactory);
		return normalModuleFactory;
	}

	createContextModuleFactory() {
		const contextModuleFactory = new ContextModuleFactory(this.resolverFactory);
		this.hooks.contextModuleFactory.call(contextModuleFactory);
		return contextModuleFactory;
	}

	newCompilationParams() {
		const params = {
			normalModuleFactory: this.createNormalModuleFactory(),
			contextModuleFactory: this.createContextModuleFactory()
		};
		return params;
	}

	/**
	 * Processes the provided compilation.
	 * @param {Callback<Compilation>} callback signals when the compilation finishes
	 * @returns {void}
	 */
	compile(callback) {
		const params = this.newCompilationParams();
		this.hooks.beforeCompile.callAsync(params, (err) => {
			if (err) return callback(err);

			this.hooks.compile.call(params);

			const compilation = this.newCompilation(params);

			const logger = compilation.getLogger("webpack.Compiler");

			logger.time("make hook");
			this.hooks.make.callAsync(compilation, (err) => {
				logger.timeEnd("make hook");
				if (err) return callback(err);

				logger.time("finish make hook");
				this.hooks.finishMake.callAsync(compilation, (err) => {
					logger.timeEnd("finish make hook");
					if (err) return callback(err);

					process.nextTick(() => {
						logger.time("finish compilation");
						compilation.finish((err) => {
							logger.timeEnd("finish compilation");
							if (err) return callback(err);

							logger.time("seal compilation");
							compilation.seal((err) => {
								logger.timeEnd("seal compilation");
								if (err) return callback(err);

								logger.time("afterCompile hook");
								this.hooks.afterCompile.callAsync(compilation, (err) => {
									logger.timeEnd("afterCompile hook");
									if (err) return callback(err);

									return callback(null, compilation);
								});
							});
						});
					});
				});
			});
		});
	}

	/**
	 * Processes the provided error callback.
	 * @param {ErrorCallback} callback signals when the compiler closes
	 * @returns {void}
	 */
	close(callback) {
		if (this.watching) {
			// When there is still an active watching, close this first
			this.watching.close((_err) => {
				this.close(callback);
			});
			return;
		}
		this.hooks.shutdown.callAsync((err) => {
			if (err) return callback(err);
			// Get rid of reference to last compilation to avoid leaking memory
			// We can't run this._cleanupLastCompilation() as the Stats to this compilation
			// might be still in use. We try to get rid of the reference to the cache instead.
			this._lastCompilation = undefined;
			this._lastNormalModuleFactory = undefined;
			this.cache.shutdown(callback);
		});
	}

	/**
	 * Schema validation function with optional pre-compiled check
	 * @template {EXPECTED_OBJECT | EXPECTED_OBJECT[]} [T=EXPECTED_OBJECT]
	 * @param {Schema | (() => Schema)} schema schema
	 * @param {T} value value
	 * @param {ValidationErrorConfiguration=} options options
	 * @param {((value: T) => boolean)=} check options
	 */
	validate(schema, value, options, check) {
		// Avoid validation at all when disabled
		if (this.options.validate === false) {
			return;
		}

		/**
		 * Returns schema.
		 * @returns {Schema} schema
		 */
		const getSchema = () => {
			if (typeof schema === "function") {
				return schema();
			}

			return schema;
		};

		// // If we have precompiled schema let's use it
		if (check) {
			if (!check(value)) {
				getValidate()(
					getSchema(),
					/** @type {EXPECTED_OBJECT | EXPECTED_OBJECT[]} */
					(value),
					options
				);
				require("util").deprecate(
					() => {},
					"webpack bug: Pre-compiled schema reports error while real schema is happy. This has performance drawbacks.",
					"DEP_WEBPACK_PRE_COMPILED_SCHEMA_INVALID"
				)();
			}
			return;
		}

		// Otherwise let's standard validation
		getValidate()(
			getSchema(),
			/** @type {EXPECTED_OBJECT | EXPECTED_OBJECT[]} */ (value),
			options
		);
	}
}

module.exports = Compiler;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");
const { WEBPACK_MODULE_TYPE_RUNTIME } = require("../ModuleTypeConstants");
const ModuleDependency = require("../dependencies/ModuleDependency");
const formatLocation = require("../formatLocation");
const { LogType } = require("../logging/Logger");
const AggressiveSplittingPlugin = require("../optimize/AggressiveSplittingPlugin");
const SizeLimitsPlugin = require("../performance/SizeLimitsPlugin");
const { countIterable } = require("../util/IterableHelpers");
const {
	compareChunksById,
	compareIds,
	compareLocations,
	compareModulesByIdentifier,
	compareNumbers,
	compareSelect,
	concatComparators
} = require("../util/comparators");
const { makePathsRelative, parseResource } = require("../util/identifier");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").StatsValue} StatsValue */
/** @typedef {import("./StatsFactory")} StatsFactory */
/** @typedef {import("./StatsFactory").StatsFactoryContext} StatsFactoryContext */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Chunk").ChunkId} ChunkId */
/** @typedef {import("../Chunk").ChunkName} ChunkName */
/** @typedef {import("../ChunkGraph").ModuleId} ModuleId */
/** @typedef {import("../ChunkGroup")} ChunkGroup */
/** @typedef {import("../ChunkGroup").OriginRecord} OriginRecord */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compilation").Asset} Asset */
/** @typedef {import("../Compilation").AssetInfo} AssetInfo */
/** @typedef {import("../Compilation").ExcludeModulesType} ExcludeModulesType */
/** @typedef {import("../Compilation").KnownNormalizedStatsOptions} KnownNormalizedStatsOptions */
/** @typedef {import("../Compilation").NormalizedStatsOptions} NormalizedStatsOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").NameForCondition} NameForCondition */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../ModuleGraphConnection")} ModuleGraphConnection */
/** @typedef {import("../ModuleProfile")} ModuleProfile */
/** @typedef {import("../WebpackError")} WebpackError */
/** @typedef {import("../serialization/AggregateErrorSerializer").AggregateError} AggregateError */
/** @typedef {import("../serialization/ErrorObjectSerializer").ErrorWithCause} ErrorWithCause */
/** @typedef {import("../ExportsInfo").ExportInfoName} ExportInfoName */

/**
 * Defines the shared type used by this module.
 * @template T
 * @typedef {import("../util/comparators").Comparator<T>} Comparator<T>
 */

/**
 * Defines the group config type used by this module.
 * @template I, G
 * @typedef {import("../util/smartGrouping").GroupConfig<I, G>} GroupConfig
 */

/** @typedef {KnownStatsCompilation & Record<string, EXPECTED_ANY>} StatsCompilation */
/**
 * Defines the known stats compilation type used by this module.
 * @typedef {object} KnownStatsCompilation
 * @property {EXPECTED_ANY=} env
 * @property {string=} name
 * @property {string=} hash
 * @property {string=} version
 * @property {number=} time
 * @property {number=} builtAt
 * @property {boolean=} needAdditionalPass
 * @property {string=} publicPath
 * @property {string=} outputPath
 * @property {Record<string, string[]>=} assetsByChunkName
 * @property {StatsAsset[]=} assets
 * @property {number=} filteredAssets
 * @property {StatsChunk[]=} chunks
 * @property {StatsModule[]=} modules
 * @property {number=} filteredModules
 * @property {Record<string, StatsChunkGroup>=} entrypoints
 * @property {Record<string, StatsChunkGroup>=} namedChunkGroups
 * @property {StatsError[]=} errors
 * @property {number=} errorsCount
 * @property {StatsError[]=} warnings
 * @property {number=} warningsCount
 * @property {StatsCompilation[]=} children
 * @property {Record<string, StatsLogging>=} logging
 * @property {number=} filteredWarningDetailsCount
 * @property {number=} filteredErrorDetailsCount
 */

/** @typedef {KnownStatsLogging & Record<string, EXPECTED_ANY>} StatsLogging */
/**
 * Defines the known stats logging type used by this module.
 * @typedef {object} KnownStatsLogging
 * @property {StatsLoggingEntry[]} entries
 * @property {number} filteredEntries
 * @property {boolean} debug
 */

/** @typedef {KnownStatsLoggingEntry & Record<string, EXPECTED_ANY>} StatsLoggingEntry */
/**
 * Defines the known stats logging entry type used by this module.
 * @typedef {object} KnownStatsLoggingEntry
 * @property {string} type
 * @property {string=} message
 * @property {string[]=} trace
 * @property {StatsLoggingEntry[]=} children
 * @property {EXPECTED_ANY[]=} args
 * @property {number=} time
 */

/** @typedef {KnownStatsAsset & Record<string, EXPECTED_ANY>} StatsAsset */
/** @typedef {string[]} ChunkIdHints */
/**
 * Defines the known stats asset type used by this module.
 * @typedef {object} KnownStatsAsset
 * @property {string} type
 * @property {string} name
 * @property {AssetInfo} info
 * @property {number} size
 * @property {boolean} emitted
 * @property {boolean} comparedForEmit
 * @property {boolean} cached
 * @property {StatsAsset[]=} related
 * @property {ChunkId[]=} chunks
 * @property {ChunkName[]=} chunkNames
 * @property {ChunkIdHints=} chunkIdHints
 * @property {ChunkId[]=} auxiliaryChunks
 * @property {ChunkName[]=} auxiliaryChunkNames
 * @property {ChunkIdHints=} auxiliaryChunkIdHints
 * @property {number=} filteredRelated
 * @property {boolean=} isOverSizeLimit
 */

/** @typedef {KnownStatsChunkGroup & Record<string, EXPECTED_ANY>} StatsChunkGroup */
/**
 * Defines the known stats chunk group type used by this module.
 * @typedef {object} KnownStatsChunkGroup
 * @property {ChunkName=} name
 * @property {ChunkId[]=} chunks
 * @property {({ name: string, size?: number })[]=} assets
 * @property {number=} filteredAssets
 * @property {number=} assetsSize
 * @property {({ name: string, size?: number })[]=} auxiliaryAssets
 * @property {number=} filteredAuxiliaryAssets
 * @property {number=} auxiliaryAssetsSize
 * @property {Record<string, StatsChunkGroup[]>=} children
 * @property {Record<string, string[]>=} childAssets
 * @property {boolean=} isOverSizeLimit
 */

/** @typedef {Module[]} ModuleIssuerPath */
/** @typedef {KnownStatsModule & Record<string, EXPECTED_ANY>} StatsModule */
/**
 * Defines the known stats module type used by this module.
 * @typedef {object} KnownStatsModule
 * @property {string=} type
 * @property {string=} moduleType
 * @property {(string | null)=} layer
 * @property {string=} identifier
 * @property {string=} name
 * @property {NameForCondition | null=} nameForCondition
 * @property {number=} index
 * @property {number=} preOrderIndex
 * @property {number=} index2
 * @property {number=} postOrderIndex
 * @property {number=} size
 * @property {Record<string, number>=} sizes
 * @property {boolean=} cacheable
 * @property {boolean=} built
 * @property {boolean=} codeGenerated
 * @property {boolean=} buildTimeExecuted
 * @property {boolean=} cached
 * @property {boolean=} optional
 * @property {boolean=} orphan
 * @property {ModuleId=} id
 * @property {ModuleId | null=} issuerId
 * @property {ChunkId[]=} chunks
 * @property {string[]=} assets
 * @property {boolean=} dependent
 * @property {(string | null)=} issuer
 * @property {(string | null)=} issuerName
 * @property {StatsModuleIssuer[] | null=} issuerPath
 * @property {boolean=} failed
 * @property {number=} errors
 * @property {number=} warnings
 * @property {StatsProfile=} profile
 * @property {StatsModuleReason[]=} reasons
 * @property {boolean | null | ExportInfoName[]=} usedExports
 * @property {ExportInfoName[] | null=} providedExports
 * @property {string[]=} optimizationBailout
 * @property {(number | null)=} depth
 * @property {StatsModule[]=} modules
 * @property {number=} filteredModules
 * @property {ReturnType<Source["source"]>=} source
 */

/** @typedef {KnownStatsProfile & Record<string, EXPECTED_ANY>} StatsProfile */
/**
 * Defines the known stats profile type used by this module.
 * @typedef {object} KnownStatsProfile
 * @property {number} total
 * @property {number} resolving
 * @property {number} restoring
 * @property {number} building
 * @property {number} integration
 * @property {number} storing
 * @property {number} additionalResolving
 * @property {number} additionalIntegration
 * @property {number} factory
 * @property {number} dependencies
 */

/** @typedef {KnownStatsModuleIssuer & Record<string, EXPECTED_ANY>} StatsModuleIssuer */
/**
 * Defines the known stats module issuer type used by this module.
 * @typedef {object} KnownStatsModuleIssuer
 * @property {string} identifier
 * @property {string} name
 * @property {ModuleId=} id
 * @property {StatsProfile} profile
 */

/** @typedef {KnownStatsModuleReason & Record<string, EXPECTED_ANY>} StatsModuleReason */
/**
 * Defines the known stats module reason type used by this module.
 * @typedef {object} KnownStatsModuleReason
 * @property {string | null} moduleIdentifier
 * @property {string | null} module
 * @property {string | null} moduleName
 * @property {string | null} resolvedModuleIdentifier
 * @property {string | null} resolvedModule
 * @property {string | null} type
 * @property {boolean} active
 * @property {string | null} explanation
 * @property {string | null} userRequest
 * @property {(string | null)=} loc
 * @property {ModuleId | null=} moduleId
 * @property {ModuleId | null=} resolvedModuleId
 */

/** @typedef {KnownStatsChunk & Record<string, EXPECTED_ANY>} StatsChunk */
/**
 * Defines the known stats chunk type used by this module.
 * @typedef {object} KnownStatsChunk
 * @property {boolean} rendered
 * @property {boolean} initial
 * @property {boolean} entry
 * @property {boolean} recorded
 * @property {string=} reason
 * @property {number} size
 * @property {Record<string, number>} sizes
 * @property {string[]} names
 * @property {string[]} idHints
 * @property {string[]=} runtime
 * @property {string[]} files
 * @property {string[]} auxiliaryFiles
 * @property {string} hash
 * @property {Record<string, ChunkId[]>} childrenByOrder
 * @property {ChunkId=} id
 * @property {ChunkId[]=} siblings
 * @property {ChunkId[]=} parents
 * @property {ChunkId[]=} children
 * @property {StatsModule[]=} modules
 * @property {number=} filteredModules
 * @property {StatsChunkOrigin[]=} origins
 */

/** @typedef {KnownStatsChunkOrigin & Record<string, EXPECTED_ANY>} StatsChunkOrigin */
/**
 * Defines the known stats chunk origin type used by this module.
 * @typedef {object} KnownStatsChunkOrigin
 * @property {string} module
 * @property {string} moduleIdentifier
 * @property {string} moduleName
 * @property {string} loc
 * @property {string} request
 * @property {ModuleId=} moduleId
 */

/** @typedef {KnownStatsModuleTraceItem & Record<string, EXPECTED_ANY>} StatsModuleTraceItem */
/**
 * Defines the known stats module trace item type used by this module.
 * @typedef {object} KnownStatsModuleTraceItem
 * @property {string=} originIdentifier
 * @property {string=} originName
 * @property {string=} moduleIdentifier
 * @property {string=} moduleName
 * @property {StatsModuleTraceDependency[]=} dependencies
 * @property {ModuleId=} originId
 * @property {ModuleId=} moduleId
 */

/** @typedef {KnownStatsModuleTraceDependency & Record<string, EXPECTED_ANY>} StatsModuleTraceDependency */
/**
 * Defines the known stats module trace dependency type used by this module.
 * @typedef {object} KnownStatsModuleTraceDependency
 * @property {string=} loc
 */

/** @typedef {KnownStatsError & Record<string, EXPECTED_ANY>} StatsError */
/**
 * Defines the known stats error type used by this module.
 * @typedef {object} KnownStatsError
 * @property {string} message
 * @property {string=} chunkName
 * @property {boolean=} chunkEntry
 * @property {boolean=} chunkInitial
 * @property {string=} file
 * @property {string=} moduleIdentifier
 * @property {string=} moduleName
 * @property {string=} loc
 * @property {ChunkId=} chunkId
 * @property {ModuleId=} moduleId
 * @property {StatsModuleTraceItem[]=} moduleTrace
 * @property {string=} details
 * @property {string=} stack
 * @property {KnownStatsError=} cause
 * @property {KnownStatsError[]=} errors
 * @property {string=} compilerPath
 */

/** @typedef {Asset & { type: string, related: PreprocessedAsset[] | undefined }} PreprocessedAsset */

/**
 * Defines the extractors by option type used by this module.
 * @template T
 * @template O
 * @typedef {Record<string, (object: O, data: T, context: StatsFactoryContext, options: NormalizedStatsOptions, factory: StatsFactory) => void>} ExtractorsByOption
 */

/** @typedef {{ name: string, chunkGroup: ChunkGroup }} ChunkGroupInfoWithName */
/** @typedef {{ origin: Module, module: Module }} ModuleTrace */

/**
 * Defines the simple extractors type used by this module.
 * @typedef {object} SimpleExtractors
 * @property {ExtractorsByOption<Compilation, StatsCompilation>} compilation
 * @property {ExtractorsByOption<PreprocessedAsset, StatsAsset>} asset
 * @property {ExtractorsByOption<PreprocessedAsset, StatsAsset>} asset$visible
 * @property {ExtractorsByOption<ChunkGroupInfoWithName, StatsChunkGroup>} chunkGroup
 * @property {ExtractorsByOption<Module, StatsModule>} module
 * @property {ExtractorsByOption<Module, StatsModule>} module$visible
 * @property {ExtractorsByOption<Module, StatsModuleIssuer>} moduleIssuer
 * @property {ExtractorsByOption<ModuleProfile, StatsProfile>} profile
 * @property {ExtractorsByOption<ModuleGraphConnection, StatsModuleReason>} moduleReason
 * @property {ExtractorsByOption<Chunk, StatsChunk>} chunk
 * @property {ExtractorsByOption<OriginRecord, StatsChunkOrigin>} chunkOrigin
 * @property {ExtractorsByOption<WebpackError, StatsError>} error
 * @property {ExtractorsByOption<WebpackError, StatsError>} warning
 * @property {ExtractorsByOption<WebpackError, StatsError>} cause
 * @property {ExtractorsByOption<ModuleTrace, StatsModuleTraceItem>} moduleTraceItem
 * @property {ExtractorsByOption<Dependency, StatsModuleTraceDependency>} moduleTraceDependency
 */

/**
 * Returns array of values.
 * @template T
 * @template I
 * @param {Iterable<T>} items items to select from
 * @param {(item: T) => Iterable<I>} selector selector function to select values from item
 * @returns {I[]} array of values
 */
const uniqueArray = (items, selector) => {
	/** @type {Set<I>} */
	const set = new Set();
	for (const item of items) {
		for (const i of selector(item)) {
			set.add(i);
		}
	}
	return [...set];
};

/**
 * Unique ordered array.
 * @template T
 * @template I
 * @param {Iterable<T>} items items to select from
 * @param {(item: T) => Iterable<I>} selector selector function to select values from item
 * @param {Comparator<I>} comparator comparator function
 * @returns {I[]} array of values
 */
const uniqueOrderedArray = (items, selector, comparator) =>
	uniqueArray(items, selector).sort(comparator);

/**
 * Defines the shared type used by this module.
 * @template T
 * @template R
 * @typedef {{ [P in keyof T]: R }} MappedValues<T, R>
 */

/**
 * Returns mapped object.
 * @template {object} T
 * @template {object} R
 * @param {T} obj object to be mapped
 * @param {(value: T[keyof T], key: keyof T) => R} fn mapping function
 * @returns {MappedValues<T, R>} mapped object
 */
const mapObject = (obj, fn) => {
	/** @type {MappedValues<T, R>} */
	const newObj = Object.create(null);
	for (const key of /** @type {(keyof T)[]} */ (Object.keys(obj))) {
		newObj[key] = fn(obj[key], key);
	}
	return newObj;
};

/**
 * Count with children.
 * @template T
 * @param {Compilation} compilation the compilation
 * @param {(compilation: Compilation, name: string) => T[]} getItems get items
 * @returns {number} total number
 */
const countWithChildren = (compilation, getItems) => {
	let count = getItems(compilation, "").length;
	for (const child of compilation.children) {
		count += countWithChildren(child, (c, type) =>
			getItems(c, `.children[].compilation${type}`)
		);
	}
	return count;
};

/** @type {ExtractorsByOption<string | ErrorWithCause | AggregateError | WebpackError, StatsError>} */
const EXTRACT_ERROR = {
	_: (object, error, context, { requestShortener }) => {
		// TODO webpack 6 disallow strings in the errors/warnings list
		if (typeof error === "string") {
			object.message = error;
		} else {
			if (/** @type {WebpackError} */ (error).chunk) {
				const chunk = /** @type {WebpackError} */ (error).chunk;
				object.chunkName =
					/** @type {string | undefined} */
					(chunk.name);
				object.chunkEntry = chunk.hasRuntime();
				object.chunkInitial = chunk.canBeInitial();
			}

			if (/** @type {WebpackError} */ (error).file) {
				object.file = /** @type {WebpackError} */ (error).file;
			}

			if (/** @type {WebpackError} */ (error).module) {
				object.moduleIdentifier =
					/** @type {WebpackError} */
					(error).module.identifier();
				object.moduleName =
					/** @type {WebpackError} */
					(error).module.readableIdentifier(requestShortener);
			}

			if (/** @type {WebpackError} */ (error).loc) {
				object.loc = formatLocation(/** @type {WebpackError} */ (error).loc);
			}

			object.message = error.message;
		}
	},
	ids: (object, error, { compilation: { chunkGraph } }) => {
		if (typeof error !== "string") {
			if (/** @type {WebpackError} */ (error).chunk) {
				object.chunkId = /** @type {ChunkId} */ (
					/** @type {WebpackError} */
					(error).chunk.id
				);
			}

			if (/** @type {WebpackError} */ (error).module) {
				object.moduleId =
					/** @type {ModuleId} */
					(chunkGraph.getModuleId(/** @type {WebpackError} */ (error).module));
			}
		}
	},
	moduleTrace: (object, error, context, options, factory) => {
		if (
			typeof error !== "string" &&
			/** @type {WebpackError} */ (error).module
		) {
			const {
				type,
				compilation: { moduleGraph }
			} = context;
			/** @type {Set<Module>} */
			const visitedModules = new Set();
			/** @type {ModuleTrace[]} */
			const moduleTrace = [];
			let current = /** @type {WebpackError} */ (error).module;
			while (current) {
				if (visitedModules.has(current)) break; // circular (technically impossible, but how knows)
				visitedModules.add(current);
				const origin = moduleGraph.getIssuer(current);
				if (!origin) break;
				moduleTrace.push({ origin, module: current });
				current = origin;
			}
			object.moduleTrace = factory.create(
				`${type}.moduleTrace`,
				moduleTrace,
				context
			);
		}
	},
	errorDetails: (
		object,
		error,
		{ type, compilation, cachedGetErrors },
		{ errorDetails }
	) => {
		if (
			typeof error !== "string" &&
			(errorDetails === true ||
				(type.endsWith(".error") && cachedGetErrors(compilation).length < 3))
		) {
			object.details = /** @type {WebpackError} */ (error).details;
		}
	},
	errorStack: (object, error, _context, { errorStack }) => {
		if (typeof error !== "string" && errorStack) {
			object.stack = error.stack;
		}
	},
	errorCause: (object, error, context, options, factory) => {
		if (
			typeof error !== "string" &&
			/** @type {ErrorWithCause} */ (error).cause
		) {
			const rawCause = /** @type {ErrorWithCause} */ (error).cause;
			/** @type {Error} */
			const cause =
				typeof rawCause === "string"
					? /** @type {Error} */ ({ message: rawCause })
					: /** @type {Error} */ (rawCause);
			const { type } = context;

			object.cause = factory.create(`${type}.cause`, cause, context);
		}
	},
	errorErrors: (object, error, context, options, factory) => {
		if (
			typeof error !== "string" &&
			/** @type {AggregateError} */
			(error).errors
		) {
			const { type } = context;
			object.errors = factory.create(
				`${type}.errors`,
				/** @type {Error[]} */
				(/** @type {AggregateError} */ (error).errors),
				context
			);
		}
	}
};

/** @typedef {((value: string) => boolean)} FilterItemTypeFn */

/** @type {SimpleExtractors} */
const SIMPLE_EXTRACTORS = {
	compilation: {
		_: (object, compilation, context, options) => {
			if (!context.makePathsRelative) {
				context.makePathsRelative = makePathsRelative.bindContextCache(
					compilation.compiler.context,
					compilation.compiler.root
				);
			}
			if (!context.cachedGetErrors) {
				/** @type {WeakMap<Compilation, Error[]>} */
				const map = new WeakMap();
				context.cachedGetErrors = (compilation) =>
					map.get(compilation) ||
					// eslint-disable-next-line no-sequences
					((errors) => (map.set(compilation, errors), errors))(
						compilation.getErrors()
					);
			}
			if (!context.cachedGetWarnings) {
				/** @type {WeakMap<Compilation, Error[]>} */
				const map = new WeakMap();
				context.cachedGetWarnings = (compilation) =>
					map.get(compilation) ||
					// eslint-disable-next-line no-sequences
					((warnings) => (map.set(compilation, warnings), warnings))(
						compilation.getWarnings()
					);
			}
			if (compilation.name) {
				object.name = compilation.name;
			}
			if (compilation.needAdditionalPass) {
				object.needAdditionalPass = true;
			}

			const { logging, loggingDebug, loggingTrace } = options;
			if (logging || (loggingDebug && loggingDebug.length > 0)) {
				const util = require("util");

				object.logging = {};
				/** @type {Set<keyof LogType>} */
				let acceptedTypes;
				let collapsedGroups = false;
				switch (logging) {
					case "error":
						acceptedTypes = new Set([LogType.error]);
						break;
					case "warn":
						acceptedTypes = new Set([LogType.error, LogType.warn]);
						break;
					case "info":
						acceptedTypes = new Set([
							LogType.error,
							LogType.warn,
							LogType.info
						]);
						break;
					case "log":
						acceptedTypes = new Set([
							LogType.error,
							LogType.warn,
							LogType.info,
							LogType.log,
							LogType.group,
							LogType.groupEnd,
							LogType.groupCollapsed,
							LogType.clear
						]);
						break;
					case "verbose":
						acceptedTypes = new Set([
							LogType.error,
							LogType.warn,
							LogType.info,
							LogType.log,
							LogType.group,
							LogType.groupEnd,
							LogType.groupCollapsed,
							LogType.profile,
							LogType.profileEnd,
							LogType.time,
							LogType.status,
							LogType.clear
						]);
						collapsedGroups = true;
						break;
					default:
						acceptedTypes = new Set();
						break;
				}
				const cachedMakePathsRelative = makePathsRelative.bindContextCache(
					options.context,
					compilation.compiler.root
				);
				let depthInCollapsedGroup = 0;
				for (const [origin, logEntries] of compilation.logging) {
					const debugMode = loggingDebug.some((fn) => fn(origin));
					if (logging === false && !debugMode) continue;
					/** @type {KnownStatsLoggingEntry[]} */
					const groupStack = [];
					/** @type {KnownStatsLoggingEntry[]} */
					const rootList = [];
					let currentList = rootList;
					let processedLogEntries = 0;
					for (const entry of logEntries) {
						let type = entry.type;
						if (!debugMode && !acceptedTypes.has(type)) continue;

						// Expand groups in verbose and debug modes
						if (
							type === LogType.groupCollapsed &&
							(debugMode || collapsedGroups)
						) {
							type = LogType.group;
						}

						if (depthInCollapsedGroup === 0) {
							processedLogEntries++;
						}

						if (type === LogType.groupEnd) {
							groupStack.pop();
							currentList =
								groupStack.length > 0
									? /** @type {KnownStatsLoggingEntry[]} */ (
											groupStack[groupStack.length - 1].children
										)
									: rootList;
							if (depthInCollapsedGroup > 0) depthInCollapsedGroup--;
							continue;
						}
						/** @type {undefined | string} */
						let message;
						if (entry.type === LogType.time) {
							const [label, first, second] =
								/** @type {[string, number, number]} */
								(entry.args);
							message = `${label}: ${first * 1000 + second / 1000000} ms`;
						} else if (entry.args && entry.args.length > 0) {
							message = util.format(entry.args[0], ...entry.args.slice(1));
						}
						/** @type {KnownStatsLoggingEntry} */
						const newEntry = {
							...entry,
							type,
							message,
							trace: loggingTrace ? entry.trace : undefined,
							children:
								type === LogType.group || type === LogType.groupCollapsed
									? []
									: undefined
						};
						currentList.push(newEntry);
						if (newEntry.children) {
							groupStack.push(newEntry);
							currentList = newEntry.children;
							if (depthInCollapsedGroup > 0) {
								depthInCollapsedGroup++;
							} else if (type === LogType.groupCollapsed) {
								depthInCollapsedGroup = 1;
							}
						}
					}
					let name = cachedMakePathsRelative(origin).replace(/\|/g, " ");
					if (name in object.logging) {
						let i = 1;
						while (`${name}#${i}` in object.logging) {
							i++;
						}
						name = `${name}#${i}`;
					}
					object.logging[name] = {
						entries: rootList,
						filteredEntries: logEntries.length - processedLogEntries,
						debug: debugMode
					};
				}
			}
		},
		hash: (object, compilation) => {
			object.hash = compilation.hash;
		},
		version: (object) => {
			object.version = require("../../package.json").version;
		},
		env: (object, compilation, context, { _env }) => {
			object.env = _env;
		},
		timings: (object, compilation) => {
			object.time =
				/** @type {number} */ (compilation.endTime) -
				/** @type {number} */ (compilation.startTime);
		},
		builtAt: (object, compilation) => {
			object.builtAt = /** @type {number} */ (compilation.endTime);
		},
		publicPath: (object, compilation) => {
			object.publicPath = compilation.getPath(
				compilation.outputOptions.publicPath
			);
		},
		outputPath: (object, compilation) => {
			object.outputPath = compilation.outputOptions.path;
		},
		assets: (object, compilation, context, options, factory) => {
			const { type } = context;
			/** @type {Map<string, Chunk[]>} */
			const compilationFileToChunks = new Map();
			/** @type {Map<string, Chunk[]>} */
			const compilationAuxiliaryFileToChunks = new Map();
			for (const chunk of compilation.chunks) {
				for (const file of chunk.files) {
					let array = compilationFileToChunks.get(file);
					if (array === undefined) {
						array = [];
						compilationFileToChunks.set(file, array);
					}
					array.push(chunk);
				}
				for (const file of chunk.auxiliaryFiles) {
					let array = compilationAuxiliaryFileToChunks.get(file);
					if (array === undefined) {
						array = [];
						compilationAuxiliaryFileToChunks.set(file, array);
					}
					array.push(chunk);
				}
			}
			/** @type {Map<string, PreprocessedAsset>} */
			const assetMap = new Map();
			/** @type {Set<PreprocessedAsset>} */
			const assets = new Set();
			for (const asset of compilation.getAssets()) {
				/** @type {PreprocessedAsset} */
				const item = {
					...asset,
					type: "asset",
					related: undefined
				};
				assets.add(item);
				assetMap.set(asset.name, item);
			}
			for (const item of assetMap.values()) {
				const related = item.info.related;
				if (!related) continue;
				for (const type of Object.keys(related)) {
					const relatedEntry = related[type];
					const deps = Array.isArray(relatedEntry)
						? relatedEntry
						: [relatedEntry];
					for (const dep of deps) {
						if (!dep) continue;
						const depItem = assetMap.get(dep);
						if (!depItem) continue;
						assets.delete(depItem);
						depItem.type = type;
						item.related = item.related || [];
						item.related.push(depItem);
					}
				}
			}

			object.assetsByChunkName = {};
			for (const [file, chunks] of [
				...compilationFileToChunks,
				...compilationAuxiliaryFileToChunks
			]) {
				for (const chunk of chunks) {
					const name = chunk.name;
					if (!name) continue;
					if (
						!Object.prototype.hasOwnProperty.call(
							object.assetsByChunkName,
							name
						)
					) {
						object.assetsByChunkName[name] = [];
					}
					object.assetsByChunkName[name].push(file);
				}
			}

			const groupedAssets = factory.create(`${type}.assets`, [...assets], {
				...context,
				compilationFileToChunks,
				compilationAuxiliaryFileToChunks
			});
			const limited = spaceLimited(
				groupedAssets,
				/** @type {number} */ (options.assetsSpace)
			);
			object.assets = limited.children;
			object.filteredAssets = limited.filteredChildren;
		},
		chunks: (object, compilation, context, options, factory) => {
			const { type } = context;
			object.chunks = factory.create(
				`${type}.chunks`,
				[...compilation.chunks],
				context
			);
		},
		modules: (object, compilation, context, options, factory) => {
			const { type } = context;
			const array = [...compilation.modules];
			const groupedModules = factory.create(`${type}.modules`, array, context);
			const limited = spaceLimited(groupedModules, options.modulesSpace);
			object.modules = limited.children;
			object.filteredModules = limited.filteredChildren;
		},
		entrypoints: (
			object,
			compilation,
			context,
			{ entrypoints, chunkGroups, chunkGroupAuxiliary, chunkGroupChildren },
			factory
		) => {
			const { type } = context;
			/** @type {ChunkGroupInfoWithName[]} */
			const array = Array.from(compilation.entrypoints, ([key, value]) => ({
				name: key,
				chunkGroup: value
			}));
			if (entrypoints === "auto" && !chunkGroups) {
				if (array.length > 5) return;
				if (
					!chunkGroupChildren &&
					array.every(({ chunkGroup }) => {
						if (chunkGroup.chunks.length !== 1) return false;
						const chunk = chunkGroup.chunks[0];
						return (
							chunk.files.size === 1 &&
							(!chunkGroupAuxiliary || chunk.auxiliaryFiles.size === 0)
						);
					})
				) {
					return;
				}
			}
			object.entrypoints = factory.create(
				`${type}.entrypoints`,
				array,
				context
			);
		},
		chunkGroups: (object, compilation, context, options, factory) => {
			const { type } = context;
			const array = Array.from(
				compilation.namedChunkGroups,
				([key, value]) => ({
					name: key,
					chunkGroup: value
				})
			);
			object.namedChunkGroups = factory.create(
				`${type}.namedChunkGroups`,
				array,
				context
			);
		},
		errors: (object, compilation, context, options, factory) => {
			const { type, cachedGetErrors } = context;
			const rawErrors = cachedGetErrors(compilation);
			const factorizedErrors = factory.create(
				`${type}.errors`,
				cachedGetErrors(compilation),
				context
			);
			let filtered = 0;
			if (options.errorDetails === "auto" && rawErrors.length >= 3) {
				filtered = rawErrors
					.map(
						(e) =>
							typeof e !== "string" && /** @type {WebpackError} */ (e).details
					)
					.filter(Boolean).length;
			}
			if (
				options.errorDetails === true ||
				!Number.isFinite(options.errorsSpace)
			) {
				object.errors = factorizedErrors;
				if (filtered) object.filteredErrorDetailsCount = filtered;
				return;
			}
			const [errors, filteredBySpace] = errorsSpaceLimit(
				factorizedErrors,
				/** @type {number} */
				(options.errorsSpace)
			);
			object.filteredErrorDetailsCount = filtered + filteredBySpace;
			object.errors = errors;
		},
		errorsCount: (object, compilation, { cachedGetErrors }) => {
			object.errorsCount = countWithChildren(compilation, (c) =>
				cachedGetErrors(c)
			);
		},
		warnings: (object, compilation, context, options, factory) => {
			const { type, cachedGetWarnings } = context;
			const rawWarnings = factory.create(
				`${type}.warnings`,
				cachedGetWarnings(compilation),
				context
			);
			let filtered = 0;
			if (options.errorDetails === "auto") {
				filtered = cachedGetWarnings(compilation)
					.map(
						(e) =>
							typeof e !== "string" && /** @type {WebpackError} */ (e).details
					)
					.filter(Boolean).length;
			}
			if (
				options.errorDetails === true ||
				!Number.isFinite(options.warningsSpace)
			) {
				object.warnings = rawWarnings;
				if (filtered) object.filteredWarningDetailsCount = filtered;
				return;
			}
			const [warnings, filteredBySpace] = errorsSpaceLimit(
				rawWarnings,
				/** @type {number} */
				(options.warningsSpace)
			);
			object.filteredWarningDetailsCount = filtered + filteredBySpace;
			object.warnings = warnings;
		},
		warningsCount: (
			object,
			compilation,
			context,
			{ warningsFilter },
			factory
		) => {
			const { type, cachedGetWarnings } = context;
			object.warningsCount = countWithChildren(compilation, (c, childType) => {
				if (
					!warningsFilter &&
					/** @type {KnownNormalizedStatsOptions["warningsFilter"]} */
					(warningsFilter).length === 0
				) {
					// Type is wrong, because we don't need the real value for counting
					return /** @type {EXPECTED_ANY[]} */ (cachedGetWarnings(c));
				}
				return factory
					.create(`${type}${childType}.warnings`, cachedGetWarnings(c), context)
					.filter(
						/**
						 * Handles the warnings count callback for this hook.
						 * @param {StatsError} warning warning
						 * @returns {boolean} result
						 */
						(warning) => {
							const warningString = Object.keys(warning)
								.map(
									(key) =>
										`${warning[/** @type {keyof KnownStatsError} */ (key)]}`
								)
								.join("\n");
							return !warningsFilter.some((filter) =>
								filter(warning, warningString)
							);
						}
					);
			});
		},
		children: (object, compilation, context, options, factory) => {
			const { type } = context;
			object.children = factory.create(
				`${type}.children`,
				compilation.children,
				context
			);
		}
	},
	asset: {
		_: (object, asset, context, options, factory) => {
			const { compilation } = context;
			object.type = asset.type;
			object.name = asset.name;
			object.size = asset.source.size();
			object.emitted = compilation.emittedAssets.has(asset.name);
			object.comparedForEmit = compilation.comparedForEmitAssets.has(
				asset.name
			);
			const cached = !object.emitted && !object.comparedForEmit;
			object.cached = cached;
			object.info = asset.info;
			if (!cached || options.cachedAssets) {
				Object.assign(
					object,
					factory.create(`${context.type}$visible`, asset, context)
				);
			}
		}
	},
	asset$visible: {
		_: (
			object,
			asset,
			{ compilationFileToChunks, compilationAuxiliaryFileToChunks }
		) => {
			const chunks = compilationFileToChunks.get(asset.name) || [];
			const auxiliaryChunks =
				compilationAuxiliaryFileToChunks.get(asset.name) || [];
			object.chunkNames = uniqueOrderedArray(
				chunks,
				(c) => (c.name ? [c.name] : []),
				compareIds
			);
			object.chunkIdHints = uniqueOrderedArray(
				chunks,
				(c) => [...c.idNameHints],
				compareIds
			);
			object.auxiliaryChunkNames = uniqueOrderedArray(
				auxiliaryChunks,
				(c) => (c.name ? [c.name] : []),
				compareIds
			);
			object.auxiliaryChunkIdHints = uniqueOrderedArray(
				auxiliaryChunks,
				(c) => [...c.idNameHints],
				compareIds
			);
			object.filteredRelated = asset.related ? asset.related.length : undefined;
		},
		relatedAssets: (object, asset, context, options, factory) => {
			const { type } = context;
			object.related = factory.create(
				`${type.slice(0, -8)}.related`,
				asset.related || [],
				context
			);
			object.filteredRelated = asset.related
				? asset.related.length -
					/** @type {StatsAsset[]} */ (object.related).length
				: undefined;
		},
		ids: (
			object,
			asset,
			{ compilationFileToChunks, compilationAuxiliaryFileToChunks }
		) => {
			const chunks = compilationFileToChunks.get(asset.name) || [];
			const auxiliaryChunks =
				compilationAuxiliaryFileToChunks.get(asset.name) || [];
			object.chunks = uniqueOrderedArray(
				chunks,
				(c) => /** @type {ChunkId[]} */ (c.ids),
				compareIds
			);
			object.auxiliaryChunks = uniqueOrderedArray(
				auxiliaryChunks,
				(c) => /** @type {ChunkId[]} */ (c.ids),
				compareIds
			);
		},
		performance: (object, asset) => {
			object.isOverSizeLimit = SizeLimitsPlugin.isOverSizeLimit(asset.source);
		}
	},
	chunkGroup: {
		_: (
			object,
			{ name, chunkGroup },
			{ compilation, compilation: { moduleGraph, chunkGraph } },
			{ ids, chunkGroupAuxiliary, chunkGroupChildren, chunkGroupMaxAssets }
		) => {
			const children =
				chunkGroupChildren &&
				chunkGroup.getChildrenByOrders(moduleGraph, chunkGraph);
			/**
			 * Returns } Asset object.
			 * @param {string} name Name
			 * @returns {{ name: string, size: number }} Asset object
			 */
			const toAsset = (name) => {
				const asset = compilation.getAsset(name);
				return {
					name,
					size: /** @type {number} */ (asset ? asset.info.size : -1)
				};
			};
			/** @type {(total: number, asset: { size: number }) => number} */
			const sizeReducer = (total, { size }) => total + size;
			const assets = uniqueArray(chunkGroup.chunks, (c) => c.files).map(
				toAsset
			);
			const auxiliaryAssets = uniqueOrderedArray(
				chunkGroup.chunks,
				(c) => c.auxiliaryFiles,
				compareIds
			).map(toAsset);
			const assetsSize = assets.reduce(sizeReducer, 0);
			const auxiliaryAssetsSize = auxiliaryAssets.reduce(sizeReducer, 0);
			/** @type {KnownStatsChunkGroup} */
			const statsChunkGroup = {
				name,
				chunks: ids
					? /** @type {ChunkId[]} */ (chunkGroup.chunks.map((c) => c.id))
					: undefined,
				assets: assets.length <= chunkGroupMaxAssets ? assets : undefined,
				filteredAssets:
					assets.length <= chunkGroupMaxAssets ? 0 : assets.length,
				assetsSize,
				auxiliaryAssets:
					chunkGroupAuxiliary && auxiliaryAssets.length <= chunkGroupMaxAssets
						? auxiliaryAssets
						: undefined,
				filteredAuxiliaryAssets:
					chunkGroupAuxiliary && auxiliaryAssets.length <= chunkGroupMaxAssets
						? 0
						: auxiliaryAssets.length,
				auxiliaryAssetsSize,
				children: children
					? mapObject(children, (groups) =>
							groups.map((group) => {
								const assets = uniqueArray(group.chunks, (c) => c.files).map(
									toAsset
								);
								const auxiliaryAssets = uniqueOrderedArray(
									group.chunks,
									(c) => c.auxiliaryFiles,
									compareIds
								).map(toAsset);

								/** @type {KnownStatsChunkGroup} */
								const childStatsChunkGroup = {
									name: group.name,
									chunks: ids
										? /** @type {ChunkId[]} */
											(group.chunks.map((c) => c.id))
										: undefined,
									assets:
										assets.length <= chunkGroupMaxAssets ? assets : undefined,
									filteredAssets:
										assets.length <= chunkGroupMaxAssets ? 0 : assets.length,
									auxiliaryAssets:
										chunkGroupAuxiliary &&
										auxiliaryAssets.length <= chunkGroupMaxAssets
											? auxiliaryAssets
											: undefined,
									filteredAuxiliaryAssets:
										chunkGroupAuxiliary &&
										auxiliaryAssets.length <= chunkGroupMaxAssets
											? 0
											: auxiliaryAssets.length
								};

								return childStatsChunkGroup;
							})
						)
					: undefined,
				childAssets: children
					? mapObject(children, (groups) => {
							/** @type {Set<string>} */
							const set = new Set();
							for (const group of groups) {
								for (const chunk of group.chunks) {
									for (const asset of chunk.files) {
										set.add(asset);
									}
								}
							}
							return [...set];
						})
					: undefined
			};
			Object.assign(object, statsChunkGroup);
		},
		performance: (object, { chunkGroup }) => {
			object.isOverSizeLimit = SizeLimitsPlugin.isOverSizeLimit(chunkGroup);
		}
	},
	module: {
		_: (object, module, context, options, factory) => {
			const { type } = context;
			const compilation = /** @type {Compilation} */ (context.compilation);
			const built = compilation.builtModules.has(module);
			const codeGenerated = compilation.codeGeneratedModules.has(module);
			const buildTimeExecuted =
				compilation.buildTimeExecutedModules.has(module);
			/** @type {{ [x: string]: number }} */
			const sizes = {};
			for (const sourceType of module.getSourceTypes()) {
				sizes[sourceType] = module.size(sourceType);
			}
			/** @type {KnownStatsModule} */
			const statsModule = {
				type: "module",
				moduleType: module.type,
				layer: module.layer,
				size: module.size(),
				sizes,
				built,
				codeGenerated,
				buildTimeExecuted,
				cached: !built && !codeGenerated
			};
			Object.assign(object, statsModule);
			if (built || codeGenerated || options.cachedModules) {
				Object.assign(
					object,
					factory.create(`${type}$visible`, module, context)
				);
			}
		}
	},
	module$visible: {
		_: (object, module, context, { requestShortener }, factory) => {
			const { type, rootModules } = context;
			const compilation = /** @type {Compilation} */ (context.compilation);
			const { moduleGraph } = compilation;
			/** @type {ModuleIssuerPath} */
			const path = [];
			const issuer = moduleGraph.getIssuer(module);
			let current = issuer;
			while (current) {
				path.push(current);
				current = moduleGraph.getIssuer(current);
			}
			path.reverse();
			const profile = moduleGraph.getProfile(module);
			const errors = module.getErrors();
			const errorsCount = errors !== undefined ? countIterable(errors) : 0;
			const warnings = module.getWarnings();
			const warningsCount =
				warnings !== undefined ? countIterable(warnings) : 0;
			/** @type {KnownStatsModule} */
			const statsModule = {
				identifier: module.identifier(),
				name: module.readableIdentifier(requestShortener),
				nameForCondition: module.nameForCondition(),
				index: /** @type {number} */ (moduleGraph.getPreOrderIndex(module)),
				preOrderIndex: /** @type {number} */ (
					moduleGraph.getPreOrderIndex(module)
				),
				index2: /** @type {number} */ (moduleGraph.getPostOrderIndex(module)),
				postOrderIndex: /** @type {number} */ (
					moduleGraph.getPostOrderIndex(module)
				),
				cacheable: /** @type {BuildInfo} */ (module.buildInfo).cacheable,
				optional: module.isOptional(moduleGraph),
				orphan:
					!type.endsWith("module.modules[].module$visible") &&
					compilation.chunkGraph.getNumberOfModuleChunks(module) === 0,
				dependent: rootModules ? !rootModules.has(module) : undefined,
				issuer: issuer && issuer.identifier(),
				issuerName: issuer && issuer.readableIdentifier(requestShortener),
				issuerPath:
					issuer &&
					/** @type {StatsModuleIssuer[] | undefined} */
					(factory.create(`${type.slice(0, -8)}.issuerPath`, path, context)),
				failed: errorsCount > 0,
				errors: errorsCount,
				warnings: warningsCount
			};
			Object.assign(object, statsModule);
			if (profile) {
				object.profile = factory.create(
					`${type.slice(0, -8)}.profile`,
					profile,
					context
				);
			}
		},
		ids: (object, module, { compilation: { chunkGraph, moduleGraph } }) => {
			object.id = /** @type {ModuleId} */ (chunkGraph.getModuleId(module));
			const issuer = moduleGraph.getIssuer(module);
			object.issuerId = issuer && chunkGraph.getModuleId(issuer);
			object.chunks =
				/** @type {ChunkId[]} */
				(
					Array.from(
						chunkGraph.getOrderedModuleChunksIterable(
							module,
							compareChunksById
						),
						(chunk) => chunk.id
					)
				);
		},
		moduleAssets: (object, module) => {
			object.assets = /** @type {BuildInfo} */ (module.buildInfo).assets
				? Object.keys(/** @type {BuildInfo} */ (module.buildInfo).assets)
				: [];
		},
		reasons: (object, module, context, options, factory) => {
			const {
				type,
				compilation: { moduleGraph }
			} = context;
			const groupsReasons = factory.create(
				`${type.slice(0, -8)}.reasons`,
				[...moduleGraph.getIncomingConnections(module)],
				context
			);
			const limited = spaceLimited(
				groupsReasons,
				/** @type {number} */
				(options.reasonsSpace)
			);
			object.reasons = limited.children;
			object.filteredReasons = limited.filteredChildren;
		},
		usedExports: (
			object,
			module,
			{ runtime, compilation: { moduleGraph } }
		) => {
			const usedExports = moduleGraph.getUsedExports(module, runtime);
			if (usedExports === null) {
				object.usedExports = null;
			} else if (typeof usedExports === "boolean") {
				object.usedExports = usedExports;
			} else {
				object.usedExports = [...usedExports];
			}
		},
		providedExports: (object, module, { compilation: { moduleGraph } }) => {
			const providedExports = moduleGraph.getProvidedExports(module);
			object.providedExports = Array.isArray(providedExports)
				? providedExports
				: null;
		},
		optimizationBailout: (
			object,
			module,
			{ compilation: { moduleGraph } },
			{ requestShortener }
		) => {
			object.optimizationBailout = moduleGraph
				.getOptimizationBailout(module)
				.map((item) => {
					if (typeof item === "function") return item(requestShortener);
					return item;
				});
		},
		depth: (object, module, { compilation: { moduleGraph } }) => {
			object.depth = moduleGraph.getDepth(module);
		},
		nestedModules: (object, module, context, options, factory) => {
			const { type } = context;
			const innerModules = /** @type {Module & { modules?: Module[] }} */ (
				module
			).modules;
			if (Array.isArray(innerModules)) {
				const groupedModules = factory.create(
					`${type.slice(0, -8)}.modules`,
					innerModules,
					context
				);
				const limited = spaceLimited(
					groupedModules,
					options.nestedModulesSpace
				);
				object.modules = limited.children;
				object.filteredModules = limited.filteredChildren;
			}
		},
		source: (object, module) => {
			const originalSource = module.originalSource();
			if (originalSource) {
				object.source = originalSource.source();
			}
		}
	},
	profile: {
		_: (object, profile) => {
			/** @type {KnownStatsProfile} */
			const statsProfile = {
				total:
					profile.factory +
					profile.restoring +
					profile.integration +
					profile.building +
					profile.storing,
				resolving: profile.factory,
				restoring: profile.restoring,
				building: profile.building,
				integration: profile.integration,
				storing: profile.storing,
				additionalResolving: profile.additionalFactories,
				additionalIntegration: profile.additionalIntegration,
				// TODO remove this in webpack 6
				factory: profile.factory,
				// TODO remove this in webpack 6
				dependencies: profile.additionalFactories
			};
			Object.assign(object, statsProfile);
		}
	},
	moduleIssuer: {
		_: (object, module, context, { requestShortener }, factory) => {
			const { type } = context;
			const compilation = /** @type {Compilation} */ (context.compilation);
			const { moduleGraph } = compilation;
			const profile = moduleGraph.getProfile(module);
			/** @type {Partial<KnownStatsModuleIssuer>} */
			const statsModuleIssuer = {
				identifier: module.identifier(),
				name: module.readableIdentifier(requestShortener)
			};
			Object.assign(object, statsModuleIssuer);
			if (profile) {
				object.profile = factory.create(`${type}.profile`, profile, context);
			}
		},
		ids: (object, module, { compilation: { chunkGraph } }) => {
			object.id = /** @type {ModuleId} */ (chunkGraph.getModuleId(module));
		}
	},
	moduleReason: {
		_: (object, reason, { runtime }, { requestShortener }) => {
			const dep = reason.dependency;
			const moduleDep =
				dep && dep instanceof ModuleDependency ? dep : undefined;
			/** @type {KnownStatsModuleReason} */
			const statsModuleReason = {
				moduleIdentifier: reason.originModule
					? reason.originModule.identifier()
					: null,
				module: reason.originModule
					? reason.originModule.readableIdentifier(requestShortener)
					: null,
				moduleName: reason.originModule
					? reason.originModule.readableIdentifier(requestShortener)
					: null,
				resolvedModuleIdentifier: reason.resolvedOriginModule
					? reason.resolvedOriginModule.identifier()
					: null,
				resolvedModule: reason.resolvedOriginModule
					? reason.resolvedOriginModule.readableIdentifier(requestShortener)
					: null,
				type: reason.dependency ? reason.dependency.type : null,
				active: reason.isActive(runtime),
				explanation: reason.explanation,
				userRequest: (moduleDep && moduleDep.userRequest) || null
			};
			Object.assign(object, statsModuleReason);
			if (reason.dependency) {
				const locInfo = formatLocation(reason.dependency.loc);
				if (locInfo) {
					object.loc = locInfo;
				}
			}
		},
		ids: (object, reason, { compilation: { chunkGraph } }) => {
			object.moduleId = reason.originModule
				? chunkGraph.getModuleId(reason.originModule)
				: null;
			object.resolvedModuleId = reason.resolvedOriginModule
				? chunkGraph.getModuleId(reason.resolvedOriginModule)
				: null;
		}
	},
	chunk: {
		_: (object, chunk, { makePathsRelative, compilation: { chunkGraph } }) => {
			const childIdByOrder = chunk.getChildIdsByOrders(chunkGraph);

			/** @type {KnownStatsChunk} */
			const statsChunk = {
				rendered: chunk.rendered,
				initial: chunk.canBeInitial(),
				entry: chunk.hasRuntime(),
				recorded: AggressiveSplittingPlugin.wasChunkRecorded(chunk),
				reason: chunk.chunkReason,
				size: chunkGraph.getChunkModulesSize(chunk),
				sizes: chunkGraph.getChunkModulesSizes(chunk),
				names: chunk.name ? [chunk.name] : [],
				idHints: [...chunk.idNameHints],
				runtime:
					chunk.runtime === undefined
						? undefined
						: typeof chunk.runtime === "string"
							? [makePathsRelative(chunk.runtime)]
							: Array.from(chunk.runtime.sort(), makePathsRelative),
				files: [...chunk.files],
				auxiliaryFiles: [...chunk.auxiliaryFiles].sort(compareIds),
				hash: /** @type {string} */ (chunk.renderedHash),
				childrenByOrder: childIdByOrder
			};
			Object.assign(object, statsChunk);
		},
		ids: (object, chunk) => {
			object.id = /** @type {ChunkId} */ (chunk.id);
		},
		chunkRelations: (object, chunk, _context) => {
			/** @typedef {Set<ChunkId>} ChunkRelations */
			/** @type {ChunkRelations} */
			const parents = new Set();
			/** @type {ChunkRelations} */
			const children = new Set();
			/** @type {ChunkRelations} */
			const siblings = new Set();

			for (const chunkGroup of chunk.groupsIterable) {
				for (const parentGroup of chunkGroup.parentsIterable) {
					for (const chunk of parentGroup.chunks) {
						parents.add(/** @type {ChunkId} */ (chunk.id));
					}
				}
				for (const childGroup of chunkGroup.childrenIterable) {
					for (const chunk of childGroup.chunks) {
						children.add(/** @type {ChunkId} */ (chunk.id));
					}
				}
				for (const sibling of chunkGroup.chunks) {
					if (sibling !== chunk) {
						siblings.add(/** @type {ChunkId} */ (sibling.id));
					}
				}
			}
			object.siblings = [...siblings].sort(compareIds);
			object.parents = [...parents].sort(compareIds);
			object.children = [...children].sort(compareIds);
		},
		chunkModules: (object, chunk, context, options, factory) => {
			const {
				type,
				compilation: { chunkGraph }
			} = context;
			const array = chunkGraph.getChunkModules(chunk);
			const groupedModules = factory.create(`${type}.modules`, array, {
				...context,
				runtime: chunk.runtime,
				rootModules: new Set(chunkGraph.getChunkRootModules(chunk))
			});
			const limited = spaceLimited(groupedModules, options.chunkModulesSpace);
			object.modules = limited.children;
			object.filteredModules = limited.filteredChildren;
		},
		chunkOrigins: (object, chunk, context, options, factory) => {
			const {
				type,
				compilation: { chunkGraph }
			} = context;
			/** @type {Set<string>} */
			const originsKeySet = new Set();
			/** @type {OriginRecord[]} */
			const origins = [];
			for (const g of chunk.groupsIterable) {
				origins.push(...g.origins);
			}
			const array = origins.filter((origin) => {
				const key = [
					origin.module ? chunkGraph.getModuleId(origin.module) : undefined,
					formatLocation(origin.loc),
					origin.request
				].join();
				if (originsKeySet.has(key)) return false;
				originsKeySet.add(key);
				return true;
			});
			object.origins = factory.create(`${type}.origins`, array, context);
		}
	},
	chunkOrigin: {
		_: (object, origin, context, { requestShortener }) => {
			/** @type {KnownStatsChunkOrigin} */
			const statsChunkOrigin = {
				module: origin.module ? origin.module.identifier() : "",
				moduleIdentifier: origin.module ? origin.module.identifier() : "",
				moduleName: origin.module
					? origin.module.readableIdentifier(requestShortener)
					: "",
				loc: formatLocation(origin.loc),
				request: origin.request
			};
			Object.assign(object, statsChunkOrigin);
		},
		ids: (object, origin, { compilation: { chunkGraph } }) => {
			object.moduleId = origin.module
				? /** @type {ModuleId} */ (chunkGraph.getModuleId(origin.module))
				: undefined;
		}
	},
	error: EXTRACT_ERROR,
	warning: EXTRACT_ERROR,
	cause: EXTRACT_ERROR,
	moduleTraceItem: {
		_: (object, { origin, module }, context, { requestShortener }, factory) => {
			const {
				type,
				compilation: { moduleGraph }
			} = context;
			object.originIdentifier = origin.identifier();
			object.originName = origin.readableIdentifier(requestShortener);
			object.moduleIdentifier = module.identifier();
			object.moduleName = module.readableIdentifier(requestShortener);
			const dependencies = [...moduleGraph.getIncomingConnections(module)]
				.filter((c) => c.resolvedOriginModule === origin && c.dependency)
				.map((c) => c.dependency);
			object.dependencies = factory.create(
				`${type}.dependencies`,
				/** @type {Dependency[]} */
				([...new Set(dependencies)]),
				context
			);
		},
		ids: (object, { origin, module }, { compilation: { chunkGraph } }) => {
			object.originId =
				/** @type {ModuleId} */
				(chunkGraph.getModuleId(origin));
			object.moduleId =
				/** @type {ModuleId} */
				(chunkGraph.getModuleId(module));
		}
	},
	moduleTraceDependency: {
		_: (object, dependency) => {
			object.loc = formatLocation(dependency.loc);
		}
	}
};

/** @type {Record<string, Record<string, (thing: ModuleGraphConnection, context: StatsFactoryContext, options: NormalizedStatsOptions, idx: number, i: number) => boolean | undefined>>} */
const FILTER = {
	"module.reasons": {
		"!orphanModules": (reason, { compilation: { chunkGraph } }) => {
			if (
				reason.originModule &&
				chunkGraph.getNumberOfModuleChunks(reason.originModule) === 0
			) {
				return false;
			}
		}
	}
};

/** @type {Record<string, Record<string, (thing: KnownStatsError, context: StatsFactoryContext, options: NormalizedStatsOptions, idx: number, i: number) => boolean | undefined>>} */
const FILTER_RESULTS = {
	"compilation.warnings": {
		warningsFilter: util.deprecate(
			(warning, context, { warningsFilter }) => {
				const warningString = Object.keys(warning)
					.map(
						(key) => `${warning[/** @type {keyof KnownStatsError} */ (key)]}`
					)
					.join("\n");
				return !warningsFilter.some((filter) => filter(warning, warningString));
			},
			"config.stats.warningsFilter is deprecated in favor of config.ignoreWarnings",
			"DEP_WEBPACK_STATS_WARNINGS_FILTER"
		)
	}
};

/** @type {Record<string, (comparators: Comparator<Module>[], context: StatsFactoryContext) => void>} */
const MODULES_SORTER = {
	_: (comparators, { compilation: { moduleGraph } }) => {
		comparators.push(
			compareSelect((m) => moduleGraph.getDepth(m), compareNumbers),
			compareSelect((m) => moduleGraph.getPreOrderIndex(m), compareNumbers),
			compareSelect((m) => m.identifier(), compareIds)
		);
	}
};

/**
 * @type {{
 * "compilation.chunks": Record<string, (comparators: Comparator<Chunk>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void>,
 * "compilation.modules": Record<string, (comparators: Comparator<Module>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void>,
 * "chunk.rootModules": Record<string, (comparators: Comparator<Module>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void>,
 * "chunk.modules": Record<string, (comparators: Comparator<Module>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void>,
 * "module.modules": Record<string, (comparators: Comparator<Module>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void>,
 * "module.reasons": Record<string, (comparators: Comparator<ModuleGraphConnection>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void>,
 * "chunk.origins": Record<string, (comparators: Comparator<OriginRecord>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void>,
 * }}
 */
const SORTERS = {
	"compilation.chunks": {
		_: (comparators) => {
			comparators.push(compareSelect((c) => c.id, compareIds));
		}
	},
	"compilation.modules": MODULES_SORTER,
	"chunk.rootModules": MODULES_SORTER,
	"chunk.modules": MODULES_SORTER,
	"module.modules": MODULES_SORTER,
	"module.reasons": {
		_: (comparators, _context) => {
			comparators.push(
				compareSelect((x) => x.originModule, compareModulesByIdentifier)
			);
			comparators.push(
				compareSelect((x) => x.resolvedOriginModule, compareModulesByIdentifier)
			);
			comparators.push(
				compareSelect(
					(x) => x.dependency,
					concatComparators(
						compareSelect(
							/**
							 * Handles the  callback for this hook.
							 * @param {Dependency} x dependency
							 * @returns {DependencyLocation} location
							 */
							(x) => x.loc,
							compareLocations
						),
						compareSelect((x) => x.type, compareIds)
					)
				)
			);
		}
	},
	"chunk.origins": {
		_: (comparators, { compilation: { chunkGraph } }) => {
			comparators.push(
				compareSelect(
					(origin) =>
						origin.module ? chunkGraph.getModuleId(origin.module) : undefined,
					compareIds
				),
				compareSelect((origin) => formatLocation(origin.loc), compareIds),
				compareSelect((origin) => origin.request, compareIds)
			);
		}
	}
};

/**
 * Defines the children type used by this module.
 * @template T
 * @typedef {T & { children?: Children<T>[] | undefined, filteredChildren?: number }} Children
 */

/**
 * Returns item size.
 * @template T
 * @param {Children<T>} item item
 * @returns {number} item size
 */
const getItemSize = (item) =>
	// Each item takes 1 line
	// + the size of the children
	// + 1 extra line when it has children and filteredChildren
	!item.children
		? 1
		: item.filteredChildren
			? 2 + getTotalSize(item.children)
			: 1 + getTotalSize(item.children);

/**
 * Returns total size.
 * @template T
 * @param {Children<T>[]} children children
 * @returns {number} total size
 */
const getTotalSize = (children) => {
	let size = 0;
	for (const child of children) {
		size += getItemSize(child);
	}
	return size;
};

/**
 * Returns total items.
 * @template T
 * @param {Children<T>[]} children children
 * @returns {number} total items
 */
const getTotalItems = (children) => {
	let count = 0;
	for (const child of children) {
		if (!child.children && !child.filteredChildren) {
			count++;
		} else {
			if (child.children) count += getTotalItems(child.children);
			if (child.filteredChildren) count += child.filteredChildren;
		}
	}
	return count;
};

/**
 * Returns collapsed children.
 * @template T
 * @param {Children<T>[]} children children
 * @returns {Children<T>[]} collapsed children
 */
const collapse = (children) => {
	// After collapse each child must take exactly one line
	/** @type {Children<T>[]} */
	const newChildren = [];
	for (const child of children) {
		if (child.children) {
			let filteredChildren = child.filteredChildren || 0;
			filteredChildren += getTotalItems(child.children);
			newChildren.push({
				...child,
				children: undefined,
				filteredChildren
			});
		} else {
			newChildren.push(child);
		}
	}
	return newChildren;
};

/**
 * Returns result.
 * @template T
 * @param {Children<T>[]} itemsAndGroups item and groups
 * @param {number} max max
 * @param {boolean=} filteredChildrenLineReserved filtered children line reserved
 * @returns {Children<T>} result
 */
const spaceLimited = (
	itemsAndGroups,
	max,
	filteredChildrenLineReserved = false
) => {
	if (max < 1) {
		return /** @type {Children<T>} */ ({
			children: undefined,
			filteredChildren: getTotalItems(itemsAndGroups)
		});
	}
	/** @type {Children<T>[] | undefined} */
	let children;
	/** @type {number | undefined} */
	let filteredChildren;
	// This are the groups, which take 1+ lines each
	/** @type {Children<T>[] | undefined} */
	const groups = [];
	// The sizes of the groups are stored in groupSizes
	/** @type {number[]} */
	const groupSizes = [];
	// This are the items, which take 1 line each
	/** @type {Children<T>[]} */
	const items = [];
	// The total of group sizes
	let groupsSize = 0;

	for (const itemOrGroup of itemsAndGroups) {
		// is item
		if (!itemOrGroup.children && !itemOrGroup.filteredChildren) {
			items.push(itemOrGroup);
		} else {
			groups.push(itemOrGroup);
			const size = getItemSize(itemOrGroup);
			groupSizes.push(size);
			groupsSize += size;
		}
	}

	if (groupsSize + items.length <= max) {
		// The total size in the current state fits into the max
		// keep all
		children = groups.length > 0 ? [...groups, ...items] : items;
	} else if (groups.length === 0) {
		// slice items to max
		// inner space marks that lines for filteredChildren already reserved
		const limit = max - (filteredChildrenLineReserved ? 0 : 1);
		filteredChildren = items.length - limit;
		items.length = limit;
		children = items;
	} else {
		// limit is the size when all groups are collapsed
		const limit =
			groups.length +
			(filteredChildrenLineReserved || items.length === 0 ? 0 : 1);
		if (limit < max) {
			// calculate how much we are over the size limit
			// this allows to approach the limit faster
			/** @type {number} */
			let oversize;
			// If each group would take 1 line the total would be below the maximum
			// collapse some groups, keep items
			while (
				(oversize =
					groupsSize +
					items.length +
					(filteredChildren && !filteredChildrenLineReserved ? 1 : 0) -
					max) > 0
			) {
				// Find the maximum group and process only this one
				const maxGroupSize = Math.max(...groupSizes);
				if (maxGroupSize < items.length) {
					filteredChildren = items.length;
					items.length = 0;
					continue;
				}
				for (let i = 0; i < groups.length; i++) {
					if (groupSizes[i] === maxGroupSize) {
						const group = groups[i];
						// run this algorithm recursively and limit the size of the children to
						// current size - oversize / number of groups
						// So it should always end up being smaller
						const headerSize = group.filteredChildren ? 2 : 1;
						const limited = spaceLimited(
							/** @type {Children<T>[]} */ (group.children),
							maxGroupSize -
								// we should use ceil to always feet in max
								Math.ceil(oversize / groups.length) -
								// we substitute size of group head
								headerSize,
							headerSize === 2
						);
						groups[i] = {
							...group,
							children: limited.children,
							filteredChildren: limited.filteredChildren
								? (group.filteredChildren || 0) + limited.filteredChildren
								: group.filteredChildren
						};
						const newSize = getItemSize(groups[i]);
						groupsSize -= maxGroupSize - newSize;
						groupSizes[i] = newSize;
						break;
					}
				}
			}
			children = [...groups, ...items];
		} else if (limit === max) {
			// If we have only enough space to show one line per group and one line for the filtered items
			// collapse all groups and items
			children = collapse(groups);
			filteredChildren = items.length;
		} else {
			// If we have no space
			// collapse complete group
			filteredChildren = getTotalItems(itemsAndGroups);
		}
	}

	return /** @type {Children<T>} */ ({ children, filteredChildren });
};

/**
 * Errors space limit.
 * @param {StatsError[]} errors errors
 * @param {number} max max
 * @returns {[StatsError[], number]} error space limit
 */
const errorsSpaceLimit = (errors, max) => {
	let filtered = 0;
	// Can not fit into limit
	// print only messages
	if (errors.length + 1 >= max) {
		return [
			errors.map((error) => {
				if (typeof error === "string" || !error.details) return error;
				filtered++;
				return { ...error, details: "" };
			}),
			filtered
		];
	}
	let fullLength = errors.length;
	let result = errors;

	let i = 0;
	for (; i < errors.length; i++) {
		const error = errors[i];
		if (typeof error !== "string" && error.details) {
			const splitted = error.details.split("\n");
			const len = splitted.length;
			fullLength += len;
			if (fullLength > max) {
				result = i > 0 ? errors.slice(0, i) : [];
				const overLimit = fullLength - max + 1;
				const error = errors[i++];
				result.push({
					...error,
					details:
						/** @type {string} */
						(error.details).split("\n").slice(0, -overLimit).join("\n"),
					filteredDetails: overLimit
				});
				filtered = errors.length - i;
				for (; i < errors.length; i++) {
					const error = errors[i];
					if (typeof error === "string" || !error.details) result.push(error);
					result.push({ ...error, details: "" });
				}
				break;
			} else if (fullLength === max) {
				result = errors.slice(0, ++i);
				filtered = errors.length - i;
				for (; i < errors.length; i++) {
					const error = errors[i];
					if (typeof error === "string" || !error.details) result.push(error);
					result.push({ ...error, details: "" });
				}
				break;
			}
		}
	}

	return [result, filtered];
};

/**
 * Returns } asset size.
 * @template {{ size: number }} T
 * @param {T[]} children children
 * @param {T[]} assets assets
 * @returns {{ size: number }} asset size
 */
const assetGroup = (children, assets) => {
	let size = 0;
	for (const asset of children) {
		size += asset.size;
	}
	return { size };
};

/** @typedef {{ size: number, sizes: Record<string, number> }} ModuleGroupBySizeResult */

/**
 * Returns size and sizes.
 * @template {ModuleGroupBySizeResult} T
 * @param {Children<T>[]} children children
 * @param {KnownStatsModule[]} modules modules
 * @returns {ModuleGroupBySizeResult} size and sizes
 */
const moduleGroup = (children, modules) => {
	let size = 0;
	/** @type {Record<string, number>} */
	const sizes = {};
	for (const module of children) {
		size += module.size;
		for (const key of Object.keys(module.sizes)) {
			sizes[key] = (sizes[key] || 0) + module.sizes[key];
		}
	}
	return {
		size,
		sizes
	};
};

/**
 * Returns } reason group.
 * @template {{ active: boolean }} T
 * @param {Children<T>[]} children children
 * @param {KnownStatsModuleReason[]} reasons reasons
 * @returns {{ active: boolean }} reason group
 */
const reasonGroup = (children, reasons) => {
	let active = false;
	for (const reason of children) {
		active = active || reason.active;
	}
	return {
		active
	};
};

const GROUP_EXTENSION_REGEXP = /(\.[^.]+?)(?:\?|(?: \+ \d+ modules?)?$)/;
const GROUP_PATH_REGEXP = /(.+)[/\\][^/\\]+?(?:\?|(?: \+ \d+ modules?)?$)/;

/** @typedef {{ type: string }} BaseGroup */

/**
 * Defines the base group with children type used by this module.
 * @template T
 * @typedef {BaseGroup & { children: T[], size: number }} BaseGroupWithChildren
 */

/** @typedef {(name: string, asset: StatsAsset) => boolean} AssetFilterItemFn */

/**
 * Describes the assets groupers shape.
 * @typedef {{
 * _: (groupConfigs: GroupConfig<KnownStatsAsset, BaseGroup & { filteredChildren: number, size: number } | BaseGroupWithChildren<KnownStatsAsset>>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void,
 * groupAssetsByInfo: (groupConfigs: GroupConfig<KnownStatsAsset, BaseGroupWithChildren<KnownStatsAsset>>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void,
 * groupAssetsByChunk: (groupConfigs: GroupConfig<KnownStatsAsset, BaseGroupWithChildren<KnownStatsAsset>>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void,
 * excludeAssets: (groupConfigs: GroupConfig<KnownStatsAsset, BaseGroup & { filteredChildren: number, size: number }>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void,
 * }} AssetsGroupers
 */

/** @type {AssetsGroupers} */
const ASSETS_GROUPERS = {
	_: (groupConfigs, context, options) => {
		/**
		 * Processes the provided name.
		 * @param {keyof KnownStatsAsset} name name
		 * @param {boolean=} exclude need exclude?
		 */
		const groupByFlag = (name, exclude) => {
			groupConfigs.push({
				getKeys: (asset) => (asset[name] ? ["1"] : undefined),
				getOptions: () => ({
					groupChildren: !exclude,
					force: exclude
				}),
				createGroup: (key, children, assets) =>
					exclude
						? {
								type: "assets by status",
								[name]: Boolean(key),
								filteredChildren: assets.length,
								...assetGroup(children, assets)
							}
						: {
								type: "assets by status",
								[name]: Boolean(key),
								children,
								...assetGroup(children, assets)
							}
			});
		};
		const {
			groupAssetsByEmitStatus,
			groupAssetsByPath,
			groupAssetsByExtension
		} = options;
		if (groupAssetsByEmitStatus) {
			groupByFlag("emitted");
			groupByFlag("comparedForEmit");
			groupByFlag("isOverSizeLimit");
		}
		if (groupAssetsByEmitStatus || !options.cachedAssets) {
			groupByFlag("cached", !options.cachedAssets);
		}
		if (groupAssetsByPath || groupAssetsByExtension) {
			groupConfigs.push({
				getKeys: (asset) => {
					const extensionMatch =
						groupAssetsByExtension && GROUP_EXTENSION_REGEXP.exec(asset.name);
					const extension = extensionMatch ? extensionMatch[1] : "";
					const pathMatch =
						groupAssetsByPath && GROUP_PATH_REGEXP.exec(asset.name);
					const path = pathMatch ? pathMatch[1].split(/[/\\]/) : [];
					/** @type {string[]} */
					const keys = [];
					if (groupAssetsByPath) {
						keys.push(".");
						if (extension) {
							keys.push(
								path.length
									? `${path.join("/")}/*${extension}`
									: `*${extension}`
							);
						}
						while (path.length > 0) {
							keys.push(`${path.join("/")}/`);
							path.pop();
						}
					} else if (extension) {
						keys.push(`*${extension}`);
					}
					return keys;
				},
				createGroup: (key, children, assets) => ({
					type: groupAssetsByPath ? "assets by path" : "assets by extension",
					name: key,
					children,
					...assetGroup(children, assets)
				})
			});
		}
	},
	groupAssetsByInfo: (groupConfigs, _context, _options) => {
		/**
		 * Group by asset info flag.
		 * @param {string} name name
		 */
		const groupByAssetInfoFlag = (name) => {
			groupConfigs.push({
				getKeys: (asset) =>
					asset.info && asset.info[name] ? ["1"] : undefined,
				createGroup: (key, children, assets) => ({
					type: "assets by info",
					info: {
						[name]: Boolean(key)
					},
					children,
					...assetGroup(children, assets)
				})
			});
		};
		groupByAssetInfoFlag("immutable");
		groupByAssetInfoFlag("development");
		groupByAssetInfoFlag("hotModuleReplacement");
	},
	groupAssetsByChunk: (groupConfigs, _context, _options) => {
		/**
		 * Processes the provided name.
		 * @param {keyof KnownStatsAsset} name name
		 */
		const groupByNames = (name) => {
			groupConfigs.push({
				getKeys: (asset) => /** @type {string[]} */ (asset[name]),
				createGroup: (key, children, assets) => ({
					type: "assets by chunk",
					[name]: [key],
					children,
					...assetGroup(children, assets)
				})
			});
		};
		groupByNames("chunkNames");
		groupByNames("auxiliaryChunkNames");
		groupByNames("chunkIdHints");
		groupByNames("auxiliaryChunkIdHints");
	},
	excludeAssets: (groupConfigs, context, { excludeAssets }) => {
		groupConfigs.push({
			getKeys: (asset) => {
				const ident = asset.name;
				const excluded = excludeAssets.some((fn) => fn(ident, asset));
				if (excluded) return ["excluded"];
			},
			getOptions: () => ({
				groupChildren: false,
				force: true
			}),
			createGroup: (key, children, assets) => ({
				type: "hidden assets",
				filteredChildren: assets.length,
				...assetGroup(children, assets)
			})
		});
	}
};

/**
 * Describes the modules groupers shape.
 * @typedef {{
 * _: (groupConfigs: GroupConfig<KnownStatsModule, BaseGroup & { filteredChildren?: number, children?: KnownStatsModule[], size: number, sizes: Record<string, number> }>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void,
 * excludeModules: (groupConfigs: GroupConfig<KnownStatsModule, BaseGroup & { filteredChildren: number, size: number, sizes: Record<string, number> }>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void,
 * }} ModulesGroupers
 */

/** @typedef {(name: string, module: StatsModule, type: "module" | "chunk" | "root-of-chunk" | "nested") => boolean} ModuleFilterItemTypeFn */

/**
 * @type {(type: ExcludeModulesType) => ModulesGroupers}
 */
const MODULES_GROUPERS = (type) => ({
	_: (groupConfigs, context, options) => {
		/**
		 * Processes the provided name.
		 * @param {keyof KnownStatsModule} name name
		 * @param {string} type type
		 * @param {boolean=} exclude need exclude?
		 */
		const groupByFlag = (name, type, exclude) => {
			groupConfigs.push({
				getKeys: (module) => (module[name] ? ["1"] : undefined),
				getOptions: () => ({
					groupChildren: !exclude,
					force: exclude
				}),
				createGroup: (key, children, modules) => ({
					type,
					[name]: Boolean(key),
					...(exclude ? { filteredChildren: modules.length } : { children }),
					...moduleGroup(
						/** @type {(KnownStatsModule & ModuleGroupBySizeResult)[]} */
						(children),
						modules
					)
				})
			});
		};
		const {
			groupModulesByCacheStatus,
			groupModulesByLayer,
			groupModulesByAttributes,
			groupModulesByType,
			groupModulesByPath,
			groupModulesByExtension
		} = options;
		if (groupModulesByAttributes) {
			groupByFlag("errors", "modules with errors");
			groupByFlag("warnings", "modules with warnings");
			groupByFlag("assets", "modules with assets");
			groupByFlag("optional", "optional modules");
		}
		if (groupModulesByCacheStatus) {
			groupByFlag("cacheable", "cacheable modules");
			groupByFlag("built", "built modules");
			groupByFlag("codeGenerated", "code generated modules");
		}
		if (groupModulesByCacheStatus || !options.cachedModules) {
			groupByFlag("cached", "cached modules", !options.cachedModules);
		}
		if (groupModulesByAttributes || !options.orphanModules) {
			groupByFlag("orphan", "orphan modules", !options.orphanModules);
		}
		if (groupModulesByAttributes || !options.dependentModules) {
			groupByFlag("dependent", "dependent modules", !options.dependentModules);
		}
		if (groupModulesByType || !options.runtimeModules) {
			groupConfigs.push({
				getKeys: (module) => {
					if (!module.moduleType) return;
					if (groupModulesByType) {
						return [module.moduleType.split("/", 1)[0]];
					} else if (module.moduleType === WEBPACK_MODULE_TYPE_RUNTIME) {
						return [WEBPACK_MODULE_TYPE_RUNTIME];
					}
				},
				getOptions: (key) => {
					const exclude =
						key === WEBPACK_MODULE_TYPE_RUNTIME && !options.runtimeModules;
					return {
						groupChildren: !exclude,
						force: exclude
					};
				},
				createGroup: (key, children, modules) => {
					const exclude =
						key === WEBPACK_MODULE_TYPE_RUNTIME && !options.runtimeModules;
					return {
						type: `${key} modules`,
						moduleType: key,
						...(exclude ? { filteredChildren: modules.length } : { children }),
						...moduleGroup(
							/** @type {(KnownStatsModule & ModuleGroupBySizeResult)[]} */
							(children),
							modules
						)
					};
				}
			});
		}
		if (groupModulesByLayer) {
			groupConfigs.push({
				getKeys: (module) => /** @type {string[]} */ ([module.layer]),
				createGroup: (key, children, modules) => ({
					type: "modules by layer",
					layer: key,
					children,
					...moduleGroup(
						/** @type {(KnownStatsModule & ModuleGroupBySizeResult)[]} */
						(children),
						modules
					)
				})
			});
		}
		if (groupModulesByPath || groupModulesByExtension) {
			groupConfigs.push({
				getKeys: (module) => {
					if (!module.name) return;
					const resource = parseResource(
						/** @type {string} */ (module.name.split("!").pop())
					).path;
					const dataUrl = /^data:[^,;]+/.exec(resource);
					if (dataUrl) return [dataUrl[0]];
					const extensionMatch =
						groupModulesByExtension && GROUP_EXTENSION_REGEXP.exec(resource);
					const extension = extensionMatch ? extensionMatch[1] : "";
					const pathMatch =
						groupModulesByPath && GROUP_PATH_REGEXP.exec(resource);
					const path = pathMatch ? pathMatch[1].split(/[/\\]/) : [];
					/** @type {string[]} */
					const keys = [];
					if (groupModulesByPath) {
						if (extension) {
							keys.push(
								path.length
									? `${path.join("/")}/*${extension}`
									: `*${extension}`
							);
						}
						while (path.length > 0) {
							keys.push(`${path.join("/")}/`);
							path.pop();
						}
					} else if (extension) {
						keys.push(`*${extension}`);
					}
					return keys;
				},
				createGroup: (key, children, modules) => {
					const isDataUrl = key.startsWith("data:");
					return {
						type: isDataUrl
							? "modules by mime type"
							: groupModulesByPath
								? "modules by path"
								: "modules by extension",
						name: isDataUrl ? key.slice(/* 'data:'.length */ 5) : key,
						children,
						...moduleGroup(
							/** @type {(KnownStatsModule & ModuleGroupBySizeResult)[]} */
							(children),
							modules
						)
					};
				}
			});
		}
	},
	excludeModules: (groupConfigs, context, { excludeModules }) => {
		groupConfigs.push({
			getKeys: (module) => {
				const name = module.name;
				if (name) {
					const excluded = excludeModules.some((fn) => fn(name, module, type));
					if (excluded) return ["1"];
				}
			},
			getOptions: () => ({
				groupChildren: false,
				force: true
			}),
			createGroup: (key, children, modules) => ({
				type: "hidden modules",
				filteredChildren: children.length,
				...moduleGroup(
					/** @type {(KnownStatsModule & ModuleGroupBySizeResult)[]} */
					(children),
					modules
				)
			})
		});
	}
});

/**
 * Defines the module reasons groupers type used by this module.
 * @typedef {{ groupReasonsByOrigin: (groupConfigs: GroupConfig<KnownStatsModuleReason, BaseGroup & { module: string, children: KnownStatsModuleReason[], active: boolean }>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void }} ModuleReasonsGroupers
 */

/** @type {ModuleReasonsGroupers} */
const MODULE_REASONS_GROUPERS = {
	groupReasonsByOrigin: (groupConfigs) => {
		groupConfigs.push({
			getKeys: (reason) => /** @type {string[]} */ ([reason.module]),
			createGroup: (key, children, reasons) => ({
				type: "from origin",
				module: key,
				children,
				...reasonGroup(children, reasons)
			})
		});
	}
};

/**
 * @type {{
 * "compilation.assets": AssetsGroupers,
 * "asset.related": AssetsGroupers,
 * "compilation.modules": ModulesGroupers,
 * "chunk.modules": ModulesGroupers,
 * "chunk.rootModules": ModulesGroupers,
 * "module.modules": ModulesGroupers,
 * "module.reasons": ModuleReasonsGroupers,
 * }}
 */
const RESULT_GROUPERS = {
	"compilation.assets": ASSETS_GROUPERS,
	"asset.related": ASSETS_GROUPERS,
	"compilation.modules": MODULES_GROUPERS("module"),
	"chunk.modules": MODULES_GROUPERS("chunk"),
	"chunk.rootModules": MODULES_GROUPERS("root-of-chunk"),
	"module.modules": MODULES_GROUPERS("nested"),
	"module.reasons": MODULE_REASONS_GROUPERS
};

// remove a prefixed "!" that can be specified to reverse sort order
/**
 * Normalizes field key.
 * @param {string} field a field name
 * @returns {field} normalized field
 */
const normalizeFieldKey = (field) => {
	if (field[0] === "!") {
		return field.slice(1);
	}
	return field;
};

// if a field is prefixed by a "!" reverse sort order
/**
 * Sorts order regular.
 * @param {string} field a field name
 * @returns {boolean} result
 */
const sortOrderRegular = (field) => {
	if (field[0] === "!") {
		return false;
	}
	return true;
};

/**
 * Returns comparators.
 * @template T
 * @param {string | false} field field name
 * @returns {(a: T, b: T) => 0 | 1 | -1} comparators
 */
const sortByField = (field) => {
	if (!field) {
		/**
		 * Returns zero.
		 * @param {T} a first
		 * @param {T} b second
		 * @returns {-1 | 0 | 1} zero
		 */
		const noSort = (a, b) => 0;
		return noSort;
	}

	const fieldKey = normalizeFieldKey(field);

	let sortFn = compareSelect((m) => m[fieldKey], compareIds);

	// if a field is prefixed with a "!" the sort is reversed!
	const sortIsRegular = sortOrderRegular(field);

	if (!sortIsRegular) {
		const oldSortFn = sortFn;
		sortFn = (a, b) => oldSortFn(b, a);
	}

	return sortFn;
};

/**
 * Describes the asset sorters shape.
 * @typedef {{
 * assetsSort: (comparators: Comparator<Asset>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void,
 * _: (comparators: Comparator<Asset>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void,
 * }} AssetSorters
 */

/** @type {AssetSorters} */
const ASSET_SORTERS = {
	assetsSort: (comparators, context, { assetsSort }) => {
		comparators.push(sortByField(assetsSort));
	},
	_: (comparators) => {
		comparators.push(compareSelect((a) => a.name, compareIds));
	}
};

/**
 * @type {{
 * "compilation.chunks": { chunksSort: (comparators: Comparator<Chunk>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void },
 * "compilation.modules": { modulesSort: (comparators: Comparator<Module>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void },
 * "chunk.modules": { chunkModulesSort: (comparators: Comparator<Module>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void },
 * "module.modules": { nestedModulesSort: (comparators: Comparator<Module>[], context: StatsFactoryContext, options: NormalizedStatsOptions) => void },
 * "compilation.assets": AssetSorters,
 * "asset.related": AssetSorters,
 * }}
 */
const RESULT_SORTERS = {
	"compilation.chunks": {
		chunksSort: (comparators, context, { chunksSort }) => {
			comparators.push(sortByField(chunksSort));
		}
	},
	"compilation.modules": {
		modulesSort: (comparators, context, { modulesSort }) => {
			comparators.push(sortByField(modulesSort));
		}
	},
	"chunk.modules": {
		chunkModulesSort: (comparators, context, { chunkModulesSort }) => {
			comparators.push(sortByField(chunkModulesSort));
		}
	},
	"module.modules": {
		nestedModulesSort: (comparators, context, { nestedModulesSort }) => {
			comparators.push(sortByField(nestedModulesSort));
		}
	},
	"compilation.assets": ASSET_SORTERS,
	"asset.related": ASSET_SORTERS
};

/**
 * Defines the extract function type used by this module.
 * @template T
 * @typedef {T extends Record<string, Record<string, infer F>> ? F : never} ExtractFunction
 */

/**
 * Processes the provided config.
 * @template {Record<string, Record<string, EXPECTED_ANY>>} T
 * @param {T} config the config see above
 * @param {NormalizedStatsOptions} options stats options
 * @param {(hookFor: keyof T, fn: ExtractFunction<T>) => void} fn handler function called for every active line in config
 * @returns {void}
 */
const iterateConfig = (config, options, fn) => {
	for (const hookFor of Object.keys(config)) {
		const subConfig = config[hookFor];
		for (const option of Object.keys(subConfig)) {
			if (option !== "_") {
				if (option.startsWith("!")) {
					if (options[option.slice(1)]) continue;
				} else {
					const value = options[option];
					if (
						value === false ||
						value === undefined ||
						(Array.isArray(value) && value.length === 0)
					) {
						continue;
					}
				}
			}
			fn(hookFor, subConfig[option]);
		}
	}
};

/** @type {Record<string, string>} */
const ITEM_NAMES = {
	"compilation.children[]": "compilation",
	"compilation.modules[]": "module",
	"compilation.entrypoints[]": "chunkGroup",
	"compilation.namedChunkGroups[]": "chunkGroup",
	"compilation.errors[]": "error",
	"compilation.warnings[]": "warning",
	"error.errors[]": "error",
	"warning.errors[]": "error",
	"chunk.modules[]": "module",
	"chunk.rootModules[]": "module",
	"chunk.origins[]": "chunkOrigin",
	"compilation.chunks[]": "chunk",
	"compilation.assets[]": "asset",
	"asset.related[]": "asset",
	"module.issuerPath[]": "moduleIssuer",
	"module.reasons[]": "moduleReason",
	"module.modules[]": "module",
	"module.children[]": "module",
	"moduleTrace[]": "moduleTraceItem",
	"moduleTraceItem.dependencies[]": "moduleTraceDependency"
};

/**
 * Defines the named object type used by this module.
 * @template T
 * @typedef {{ name: T }} NamedObject
 */

/**
 * Merges the provided values into a single result.
 * @template {{ name: string }} T
 * @param {T[]} items items to be merged
 * @returns {NamedObject<T>} an object
 */
const mergeToObject = (items) => {
	const obj = Object.create(null);
	for (const item of items) {
		obj[item.name] = item;
	}
	return obj;
};

/**
 * @template {{ name: string }} T
 * @type {Record<string, (items: T[]) => NamedObject<T>>}
 */
const MERGER = {
	"compilation.entrypoints": mergeToObject,
	"compilation.namedChunkGroups": mergeToObject
};

const PLUGIN_NAME = "DefaultStatsFactoryPlugin";

class DefaultStatsFactoryPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			compilation.hooks.statsFactory.tap(
				PLUGIN_NAME,
				/**
				 * Handles the callback logic for this hook.
				 * @param {StatsFactory} stats stats factory
				 * @param {NormalizedStatsOptions} options stats options
				 */
				(stats, options) => {
					iterateConfig(SIMPLE_EXTRACTORS, options, (hookFor, fn) => {
						stats.hooks.extract
							.for(hookFor)
							.tap(PLUGIN_NAME, (obj, data, ctx) =>
								fn(obj, data, ctx, options, stats)
							);
					});
					iterateConfig(FILTER, options, (hookFor, fn) => {
						stats.hooks.filter
							.for(hookFor)
							.tap(PLUGIN_NAME, (item, ctx, idx, i) =>
								fn(item, ctx, options, idx, i)
							);
					});
					iterateConfig(FILTER_RESULTS, options, (hookFor, fn) => {
						stats.hooks.filterResults
							.for(hookFor)
							.tap(PLUGIN_NAME, (item, ctx, idx, i) =>
								fn(item, ctx, options, idx, i)
							);
					});
					iterateConfig(SORTERS, options, (hookFor, fn) => {
						stats.hooks.sort
							.for(hookFor)
							.tap(PLUGIN_NAME, (comparators, ctx) =>
								fn(comparators, ctx, options)
							);
					});
					iterateConfig(RESULT_SORTERS, options, (hookFor, fn) => {
						stats.hooks.sortResults
							.for(hookFor)
							.tap(PLUGIN_NAME, (comparators, ctx) =>
								fn(comparators, ctx, options)
							);
					});
					iterateConfig(RESULT_GROUPERS, options, (hookFor, fn) => {
						stats.hooks.groupResults
							.for(hookFor)
							.tap(PLUGIN_NAME, (groupConfigs, ctx) =>
								fn(groupConfigs, ctx, options)
							);
					});
					for (const key of Object.keys(ITEM_NAMES)) {
						const itemName = ITEM_NAMES[key];
						stats.hooks.getItemName.for(key).tap(PLUGIN_NAME, () => itemName);
					}
					for (const key of Object.keys(MERGER)) {
						const merger = MERGER[key];
						stats.hooks.merge.for(key).tap(PLUGIN_NAME, merger);
					}
					if (options.children) {
						if (Array.isArray(options.children)) {
							stats.hooks.getItemFactory
								.for("compilation.children[].compilation")
								.tap(
									PLUGIN_NAME,
									/**
									 * Handles the callback logic for this hook.
									 * @param {Compilation} comp compilation
									 * @param {StatsFactoryContext} options options
									 * @returns {StatsFactory | undefined} stats factory
									 */
									(comp, { _index: idx }) => {
										const children =
											/** @type {StatsValue[]} */
											(options.children);
										if (idx < children.length) {
											return compilation.createStatsFactory(
												compilation.createStatsOptions(children[idx])
											);
										}
									}
								);
						} else if (options.children !== true) {
							const childFactory = compilation.createStatsFactory(
								compilation.createStatsOptions(options.children)
							);
							stats.hooks.getItemFactory
								.for("compilation.children[].compilation")
								.tap(PLUGIN_NAME, () => childFactory);
						}
					}
				}
			);
		});
	}
}

module.exports = DefaultStatsFactoryPlugin;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Chunk = require("../Chunk");
const { STAGE_ADVANCED } = require("../OptimizationStages");
const WebpackError = require("../WebpackError");
const { requestToId } = require("../ids/IdHelpers");
const { isSubset } = require("../util/SetHelpers");
const SortableSet = require("../util/SortableSet");
const {
	compareIterables,
	compareModulesByIdentifier
} = require("../util/comparators");
const createHash = require("../util/createHash");
const deterministicGrouping = require("../util/deterministicGrouping");
const { makePathsRelative } = require("../util/identifier");
const memoize = require("../util/memoize");
const MinMaxSizeWarning = require("./MinMaxSizeWarning");

/** @typedef {import("../../declarations/WebpackOptions").OptimizationSplitChunksCacheGroup} OptimizationSplitChunksCacheGroup */
/** @typedef {import("../../declarations/WebpackOptions").OptimizationSplitChunksOptions} OptimizationSplitChunksOptions */
/** @typedef {import("../../declarations/WebpackOptions").OptimizationSplitChunksSizes} OptimizationSplitChunksSizes */
/** @typedef {import("../config/defaults").OutputNormalizedWithDefaults} OutputOptions */
/** @typedef {import("../Chunk").ChunkName} ChunkName */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../ChunkGroup")} ChunkGroup */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").SourceType} SourceType */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../TemplatedPathPlugin").TemplatePath} TemplatePath */
/** @typedef {import("../util/deterministicGrouping").GroupedItems<Module>} DeterministicGroupingGroupedItemsForModule */
/** @typedef {import("../util/deterministicGrouping").Options<Module>} DeterministicGroupingOptionsForModule */
/** @typedef {import("../util/deterministicGrouping").Sizes} Sizes */

/**
 * Defines the chunk filter fn callback.
 * @callback ChunkFilterFn
 * @param {Chunk} chunk
 * @returns {boolean | undefined}
 */

/** @typedef {number} Priority */
/** @typedef {number} Size */
/** @typedef {number} CountOfChunk */
/** @typedef {number} CountOfRequest */

/**
 * Defines the combine size function callback.
 * @callback CombineSizeFunction
 * @param {Size} a
 * @param {Size} b
 * @returns {Size}
 */

/** @typedef {SourceType[]} SourceTypes */
/** @typedef {SourceType[]} DefaultSizeTypes */
/** @typedef {Record<SourceType, Size>} SplitChunksSizes */

/**
 * Defines the cache group source type used by this module.
 * @typedef {object} CacheGroupSource
 * @property {string} key
 * @property {Priority=} priority
 * @property {GetNameFn=} getName
 * @property {ChunkFilterFn=} chunksFilter
 * @property {boolean=} enforce
 * @property {SplitChunksSizes} minSize
 * @property {SplitChunksSizes} minSizeReduction
 * @property {SplitChunksSizes} minRemainingSize
 * @property {SplitChunksSizes} enforceSizeThreshold
 * @property {SplitChunksSizes} maxAsyncSize
 * @property {SplitChunksSizes} maxInitialSize
 * @property {CountOfChunk=} minChunks
 * @property {CountOfRequest=} maxAsyncRequests
 * @property {CountOfRequest=} maxInitialRequests
 * @property {TemplatePath=} filename
 * @property {string=} idHint
 * @property {string=} automaticNameDelimiter
 * @property {boolean=} reuseExistingChunk
 * @property {boolean=} usedExports
 */

/**
 * Defines the cache group type used by this module.
 * @typedef {object} CacheGroup
 * @property {string} key
 * @property {Priority} priority
 * @property {GetNameFn=} getName
 * @property {ChunkFilterFn} chunksFilter
 * @property {SplitChunksSizes} minSize
 * @property {SplitChunksSizes} minSizeReduction
 * @property {SplitChunksSizes} minRemainingSize
 * @property {SplitChunksSizes} enforceSizeThreshold
 * @property {SplitChunksSizes} maxAsyncSize
 * @property {SplitChunksSizes} maxInitialSize
 * @property {CountOfChunk} minChunks
 * @property {CountOfRequest} maxAsyncRequests
 * @property {CountOfRequest} maxInitialRequests
 * @property {TemplatePath=} filename
 * @property {string} idHint
 * @property {string} automaticNameDelimiter
 * @property {boolean} reuseExistingChunk
 * @property {boolean} usedExports
 * @property {boolean} _validateSize
 * @property {boolean} _validateRemainingSize
 * @property {SplitChunksSizes} _minSizeForMaxSize
 * @property {boolean} _conditionalEnforce
 */

/**
 * Defines the fallback cache group type used by this module.
 * @typedef {object} FallbackCacheGroup
 * @property {ChunkFilterFn} chunksFilter
 * @property {SplitChunksSizes} minSize
 * @property {SplitChunksSizes} maxAsyncSize
 * @property {SplitChunksSizes} maxInitialSize
 * @property {string} automaticNameDelimiter
 */

/**
 * Defines the cache groups context type used by this module.
 * @typedef {object} CacheGroupsContext
 * @property {ModuleGraph} moduleGraph
 * @property {ChunkGraph} chunkGraph
 */

/** @typedef {(module: Module) => OptimizationSplitChunksCacheGroup | OptimizationSplitChunksCacheGroup[] | void} RawGetCacheGroups */

/**
 * Defines the get cache groups callback.
 * @callback GetCacheGroups
 * @param {Module} module
 * @param {CacheGroupsContext} context
 * @returns {CacheGroupSource[] | null}
 */

/**
 * Defines the get name fn callback.
 * @callback GetNameFn
 * @param {Module} module
 * @param {Chunk[]} chunks
 * @param {string} key
 * @returns {string | undefined}
 */

/**
 * Defines the split chunks options type used by this module.
 * @typedef {object} SplitChunksOptions
 * @property {ChunkFilterFn} chunksFilter
 * @property {DefaultSizeTypes} defaultSizeTypes
 * @property {SplitChunksSizes} minSize
 * @property {SplitChunksSizes} minSizeReduction
 * @property {SplitChunksSizes} minRemainingSize
 * @property {SplitChunksSizes} enforceSizeThreshold
 * @property {SplitChunksSizes} maxInitialSize
 * @property {SplitChunksSizes} maxAsyncSize
 * @property {CountOfChunk} minChunks
 * @property {CountOfRequest} maxAsyncRequests
 * @property {CountOfRequest} maxInitialRequests
 * @property {boolean} hidePathInfo
 * @property {TemplatePath=} filename
 * @property {string} automaticNameDelimiter
 * @property {GetCacheGroups} getCacheGroups
 * @property {GetNameFn} getName
 * @property {boolean} usedExports
 * @property {FallbackCacheGroup} fallbackCacheGroup
 */

/** @typedef {Set<Chunk>} ChunkSet  */

/**
 * Defines the chunks info item type used by this module.
 * @typedef {object} ChunksInfoItem
 * @property {SortableSet<Module>} modules
 * @property {CacheGroup} cacheGroup
 * @property {number} cacheGroupIndex
 * @property {string=} name
 * @property {SplitChunksSizes} sizes
 * @property {ChunkSet} chunks
 * @property {ChunkSet} reusableChunks
 * @property {Set<bigint | Chunk>} chunksKeys
 */

/** @type {GetNameFn} */
const defaultGetName = () => undefined;

const deterministicGroupingForModules =
	/** @type {(options: DeterministicGroupingOptionsForModule) => DeterministicGroupingGroupedItemsForModule[]} */
	(deterministicGrouping);

/** @type {WeakMap<Module, string>} */
const getKeyCache = new WeakMap();

/**
 * Returns hashed filename.
 * @param {string} name a filename to hash
 * @param {OutputOptions} outputOptions hash function used
 * @returns {string} hashed filename
 */
const hashFilename = (name, outputOptions) => {
	const digest =
		/** @type {string} */
		(
			createHash(outputOptions.hashFunction)
				.update(name)
				.digest(outputOptions.hashDigest)
		);
	return digest.slice(0, 8);
};

/**
 * Returns the number of requests.
 * @param {Chunk} chunk the chunk
 * @returns {CountOfRequest} the number of requests
 */
const getRequests = (chunk) => {
	let requests = 0;
	for (const chunkGroup of chunk.groupsIterable) {
		requests = Math.max(requests, chunkGroup.chunks.length);
	}
	return requests;
};

/**
 * Returns result.
 * @template {object} T
 * @template {object} R
 * @param {T} obj obj an object
 * @param {(obj: T[keyof T], key: keyof T) => T[keyof T]} fn fn
 * @returns {T} result
 */
const mapObject = (obj, fn) => {
	/** @type {T} */
	const newObj = Object.create(null);
	for (const key of Object.keys(obj)) {
		newObj[/** @type {keyof T} */ (key)] = fn(
			obj[/** @type {keyof T} */ (key)],
			/** @type {keyof T} */
			(key)
		);
	}
	return newObj;
};

/**
 * Checks whether this object is overlap.
 * @template T
 * @param {Set<T>} a set
 * @param {Set<T>} b other set
 * @returns {boolean} true if at least one item of a is in b
 */
const isOverlap = (a, b) => {
	for (const item of a) {
		if (b.has(item)) return true;
	}
	return false;
};

const compareModuleIterables = compareIterables(compareModulesByIdentifier);

/**
 * Compares the provided values and returns their ordering.
 * @param {ChunksInfoItem} a item
 * @param {ChunksInfoItem} b item
 * @returns {number} compare result
 */
const compareEntries = (a, b) => {
	// 1. by priority
	const diffPriority = a.cacheGroup.priority - b.cacheGroup.priority;
	if (diffPriority) return diffPriority;
	// 2. by number of chunks
	const diffCount = a.chunks.size - b.chunks.size;
	if (diffCount) return diffCount;
	// 3. by size reduction
	const aSizeReduce = totalSize(a.sizes) * (a.chunks.size - 1);
	const bSizeReduce = totalSize(b.sizes) * (b.chunks.size - 1);
	const diffSizeReduce = aSizeReduce - bSizeReduce;
	if (diffSizeReduce) return diffSizeReduce;
	// 4. by cache group index
	const indexDiff = b.cacheGroupIndex - a.cacheGroupIndex;
	if (indexDiff) return indexDiff;
	// 5. by number of modules (to be able to compare by identifier)
	const modulesA = a.modules;
	const modulesB = b.modules;
	const diff = modulesA.size - modulesB.size;
	if (diff) return diff;
	// 6. by module identifiers
	modulesA.sort();
	modulesB.sort();
	return compareModuleIterables(modulesA, modulesB);
};

/**
 * Initial chunk filter.
 * @param {Chunk} chunk the chunk
 * @returns {boolean} true, if the chunk is an entry chunk
 */
const INITIAL_CHUNK_FILTER = (chunk) => chunk.canBeInitial();
/**
 * Async chunk filter.
 * @param {Chunk} chunk the chunk
 * @returns {boolean} true, if the chunk is an async chunk
 */
const ASYNC_CHUNK_FILTER = (chunk) => !chunk.canBeInitial();
/**
 * Returns always true.
 * @param {Chunk} _chunk the chunk
 * @returns {boolean} always true
 */
const ALL_CHUNK_FILTER = (_chunk) => true;

/**
 * Returns normalized representation.
 * @param {OptimizationSplitChunksSizes | undefined} value the sizes
 * @param {DefaultSizeTypes} defaultSizeTypes the default size types
 * @returns {SplitChunksSizes} normalized representation
 */
const normalizeSizes = (value, defaultSizeTypes) => {
	if (typeof value === "number") {
		/** @type {SplitChunksSizes} */
		const o = {};
		for (const sizeType of defaultSizeTypes) o[sizeType] = value;
		return o;
	} else if (typeof value === "object" && value !== null) {
		return { ...value };
	}
	return {};
};

/**
 * Merges the provided values into a single result.
 * @param {...(SplitChunksSizes | undefined)} sizes the sizes
 * @returns {SplitChunksSizes} the merged sizes
 */
const mergeSizes = (...sizes) => {
	/** @type {SplitChunksSizes} */
	let merged = {};
	for (let i = sizes.length - 1; i >= 0; i--) {
		merged = Object.assign(merged, sizes[i]);
	}
	return merged;
};

/**
 * Checks whether this object contains the size.
 * @param {SplitChunksSizes} sizes the sizes
 * @returns {boolean} true, if there are sizes > 0
 */
const hasNonZeroSizes = (sizes) => {
	for (const key of /** @type {SourceType[]} */ (Object.keys(sizes))) {
		if (sizes[key] > 0) return true;
	}
	return false;
};

/**
 * Returns the combine sizes.
 * @param {SplitChunksSizes} a first sizes
 * @param {SplitChunksSizes} b second sizes
 * @param {CombineSizeFunction} combine a function to combine sizes
 * @returns {SplitChunksSizes} the combine sizes
 */
const combineSizes = (a, b, combine) => {
	const aKeys = /** @type {Set<SourceType>} */ (new Set(Object.keys(a)));
	const bKeys = /** @type {Set<SourceType>} */ (new Set(Object.keys(b)));
	/** @type {SplitChunksSizes} */
	const result = {};
	for (const key of aKeys) {
		result[key] = bKeys.has(key) ? combine(a[key], b[key]) : a[key];
	}
	for (const key of bKeys) {
		if (!aKeys.has(key)) {
			result[key] = b[key];
		}
	}
	return result;
};

/**
 * Checks true if there are sizes and all existing sizes are at least minSize.
 * @param {SplitChunksSizes} sizes the sizes
 * @param {SplitChunksSizes} minSize the min sizes
 * @returns {boolean} true if there are sizes and all existing sizes are at least `minSize`
 */
const checkMinSize = (sizes, minSize) => {
	for (const key of /** @type {SourceType[]} */ (Object.keys(minSize))) {
		const size = sizes[key];
		if (size === undefined || size === 0) continue;
		if (size < minSize[key]) return false;
	}
	return true;
};

/**
 * Checks min size reduction.
 * @param {SplitChunksSizes} sizes the sizes
 * @param {SplitChunksSizes} minSizeReduction the min sizes
 * @param {CountOfChunk} chunkCount number of chunks
 * @returns {boolean} true if there are sizes and all existing sizes are at least `minSizeReduction`
 */
const checkMinSizeReduction = (sizes, minSizeReduction, chunkCount) => {
	for (const key of /** @type {SourceType[]} */ (
		Object.keys(minSizeReduction)
	)) {
		const size = sizes[key];
		if (size === undefined || size === 0) continue;
		if (size * chunkCount < minSizeReduction[key]) return false;
	}
	return true;
};

/**
 * Gets violating min sizes.
 * @param {SplitChunksSizes} sizes the sizes
 * @param {SplitChunksSizes} minSize the min sizes
 * @returns {undefined | SourceTypes} list of size types that are below min size
 */
const getViolatingMinSizes = (sizes, minSize) => {
	/** @type {SourceTypes | undefined} */
	let list;
	for (const key of /** @type {SourceType[]} */ (Object.keys(minSize))) {
		const size = sizes[key];
		if (size === undefined || size === 0) continue;
		if (size < minSize[key]) {
			if (list === undefined) list = [key];
			else list.push(key);
		}
	}
	return list;
};

/**
 * Returns the total size.
 * @param {SplitChunksSizes} sizes the sizes
 * @returns {Size} the total size
 */
const totalSize = (sizes) => {
	let size = 0;
	for (const key of /** @type {SourceType[]} */ (Object.keys(sizes))) {
		size += sizes[key];
	}
	return size;
};

/**
 * Returns a function to get the name of the chunk.
 * @param {OptimizationSplitChunksCacheGroup["name"]} name the chunk name
 * @returns {GetNameFn | undefined} a function to get the name of the chunk
 */
const normalizeName = (name) => {
	if (typeof name === "string") {
		return () => name;
	}
	if (typeof name === "function") {
		return /** @type {GetNameFn} */ (name);
	}
};

/**
 * Normalizes chunks filter.
 * @param {OptimizationSplitChunksCacheGroup["chunks"]} chunks the chunk filter option
 * @returns {ChunkFilterFn | undefined} the chunk filter function
 */
const normalizeChunksFilter = (chunks) => {
	if (chunks === "initial") {
		return INITIAL_CHUNK_FILTER;
	}
	if (chunks === "async") {
		return ASYNC_CHUNK_FILTER;
	}
	if (chunks === "all") {
		return ALL_CHUNK_FILTER;
	}
	if (chunks instanceof RegExp) {
		return (chunk) => (chunk.name ? chunks.test(chunk.name) : false);
	}
	if (typeof chunks === "function") {
		return chunks;
	}
};

/**
 * Normalizes cache groups.
 * @param {undefined | GetCacheGroups | Record<string, false | string | RegExp | RawGetCacheGroups | OptimizationSplitChunksCacheGroup>} cacheGroups the cache group options
 * @param {DefaultSizeTypes} defaultSizeTypes the default size types
 * @returns {GetCacheGroups} a function to get the cache groups
 */
const normalizeCacheGroups = (cacheGroups, defaultSizeTypes) => {
	if (typeof cacheGroups === "function") {
		return cacheGroups;
	}
	if (typeof cacheGroups === "object" && cacheGroups !== null) {
		/** @type {((module: Module, context: CacheGroupsContext, results: CacheGroupSource[]) => void)[]} */
		const handlers = [];
		for (const key of Object.keys(cacheGroups)) {
			const option = cacheGroups[key];
			if (option === false) {
				continue;
			}
			if (typeof option === "string" || option instanceof RegExp) {
				const source = createCacheGroupSource({}, key, defaultSizeTypes);
				handlers.push((module, context, results) => {
					if (checkTest(option, module, context)) {
						results.push(source);
					}
				});
			} else if (typeof option === "function") {
				/** @type {WeakMap<OptimizationSplitChunksCacheGroup, CacheGroupSource>} */
				const cache = new WeakMap();
				handlers.push((module, context, results) => {
					const result = option(module);
					if (result) {
						const groups = Array.isArray(result) ? result : [result];
						for (const group of groups) {
							const cachedSource = cache.get(group);
							if (cachedSource !== undefined) {
								results.push(cachedSource);
							} else {
								const source = createCacheGroupSource(
									group,
									key,
									defaultSizeTypes
								);
								cache.set(group, source);
								results.push(source);
							}
						}
					}
				});
			} else {
				const source = createCacheGroupSource(option, key, defaultSizeTypes);
				handlers.push((module, context, results) => {
					if (
						checkTest(option.test, module, context) &&
						checkModuleType(option.type, module) &&
						checkModuleLayer(option.layer, module)
					) {
						results.push(source);
					}
				});
			}
		}
		/**
		 * Returns the matching cache groups.
		 * @param {Module} module the current module
		 * @param {CacheGroupsContext} context the current context
		 * @returns {CacheGroupSource[]} the matching cache groups
		 */
		const fn = (module, context) => {
			/** @type {CacheGroupSource[]} */
			const results = [];
			for (const fn of handlers) {
				fn(module, context, results);
			}
			return results;
		};
		return fn;
	}
	return () => null;
};

/** @typedef {(module: Module, context: CacheGroupsContext) => boolean} CheckTestFn */

/**
 * Checks true, if the module should be selected.
 * @param {OptimizationSplitChunksCacheGroup["test"]} test test option
 * @param {Module} module the module
 * @param {CacheGroupsContext} context context object
 * @returns {boolean} true, if the module should be selected
 */
const checkTest = (test, module, context) => {
	if (test === undefined) return true;
	if (typeof test === "function") {
		return test(module, context);
	}
	if (typeof test === "boolean") return test;
	if (typeof test === "string") {
		const name = module.nameForCondition();
		return name ? name.startsWith(test) : false;
	}
	if (test instanceof RegExp) {
		const name = module.nameForCondition();
		return name ? test.test(name) : false;
	}
	return false;
};

/** @typedef {(type: string) => boolean} CheckModuleTypeFn */

/**
 * Checks module type.
 * @param {OptimizationSplitChunksCacheGroup["type"]} test type option
 * @param {Module} module the module
 * @returns {boolean} true, if the module should be selected
 */
const checkModuleType = (test, module) => {
	if (test === undefined) return true;
	if (typeof test === "function") {
		return test(module.type);
	}
	if (typeof test === "string") {
		const type = module.type;
		return test === type;
	}
	if (test instanceof RegExp) {
		const type = module.type;
		return test.test(type);
	}
	return false;
};

/** @typedef {(layer: string | null) => boolean} CheckModuleLayerFn */

/**
 * Checks module layer.
 * @param {OptimizationSplitChunksCacheGroup["layer"]} test type option
 * @param {Module} module the module
 * @returns {boolean} true, if the module should be selected
 */
const checkModuleLayer = (test, module) => {
	if (test === undefined) return true;
	if (typeof test === "function") {
		return test(module.layer);
	}
	if (typeof test === "string") {
		const layer = module.layer;
		return test === "" ? !layer : layer ? layer.startsWith(test) : false;
	}
	if (test instanceof RegExp) {
		const layer = module.layer;
		return layer ? test.test(layer) : false;
	}
	return false;
};

/**
 * Creates a cache group source.
 * @param {OptimizationSplitChunksCacheGroup} options the group options
 * @param {string} key key of cache group
 * @param {DefaultSizeTypes} defaultSizeTypes the default size types
 * @returns {CacheGroupSource} the normalized cached group
 */
const createCacheGroupSource = (options, key, defaultSizeTypes) => {
	const minSize = normalizeSizes(options.minSize, defaultSizeTypes);
	const minSizeReduction = normalizeSizes(
		options.minSizeReduction,
		defaultSizeTypes
	);
	const maxSize = normalizeSizes(options.maxSize, defaultSizeTypes);
	return {
		key,
		priority: options.priority,
		getName: normalizeName(options.name),
		chunksFilter: normalizeChunksFilter(options.chunks),
		enforce: options.enforce,
		minSize,
		minSizeReduction,
		minRemainingSize: mergeSizes(
			normalizeSizes(options.minRemainingSize, defaultSizeTypes),
			minSize
		),
		enforceSizeThreshold: normalizeSizes(
			options.enforceSizeThreshold,
			defaultSizeTypes
		),
		maxAsyncSize: mergeSizes(
			normalizeSizes(options.maxAsyncSize, defaultSizeTypes),
			maxSize
		),
		maxInitialSize: mergeSizes(
			normalizeSizes(options.maxInitialSize, defaultSizeTypes),
			maxSize
		),
		minChunks: options.minChunks,
		maxAsyncRequests: options.maxAsyncRequests,
		maxInitialRequests: options.maxInitialRequests,
		filename: options.filename,
		idHint: options.idHint,
		automaticNameDelimiter: options.automaticNameDelimiter,
		reuseExistingChunk: options.reuseExistingChunk,
		usedExports: options.usedExports
	};
};

const PLUGIN_NAME = "SplitChunksPlugin";

module.exports = class SplitChunksPlugin {
	/**
	 * Creates an instance of SplitChunksPlugin.
	 * @param {OptimizationSplitChunksOptions=} options plugin options
	 */
	constructor(options = {}) {
		const defaultSizeTypes = options.defaultSizeTypes || [
			"javascript",
			"unknown"
		];
		const fallbackCacheGroup = options.fallbackCacheGroup || {};
		const minSize = normalizeSizes(options.minSize, defaultSizeTypes);
		const minSizeReduction = normalizeSizes(
			options.minSizeReduction,
			defaultSizeTypes
		);
		const maxSize = normalizeSizes(options.maxSize, defaultSizeTypes);

		/** @type {SplitChunksOptions} */
		this.options = {
			chunksFilter:
				/** @type {ChunkFilterFn} */
				(normalizeChunksFilter(options.chunks || "all")),
			defaultSizeTypes,
			minSize,
			minSizeReduction,
			minRemainingSize: mergeSizes(
				normalizeSizes(options.minRemainingSize, defaultSizeTypes),
				minSize
			),
			enforceSizeThreshold: normalizeSizes(
				options.enforceSizeThreshold,
				defaultSizeTypes
			),
			maxAsyncSize: mergeSizes(
				normalizeSizes(options.maxAsyncSize, defaultSizeTypes),
				maxSize
			),
			maxInitialSize: mergeSizes(
				normalizeSizes(options.maxInitialSize, defaultSizeTypes),
				maxSize
			),
			minChunks: options.minChunks || 1,
			maxAsyncRequests: options.maxAsyncRequests || 1,
			maxInitialRequests: options.maxInitialRequests || 1,
			hidePathInfo: options.hidePathInfo || false,
			filename: options.filename || undefined,
			getCacheGroups: normalizeCacheGroups(
				options.cacheGroups,
				defaultSizeTypes
			),
			getName: options.name
				? /** @type {GetNameFn} */ (normalizeName(options.name))
				: defaultGetName,
			automaticNameDelimiter: options.automaticNameDelimiter || "-",
			usedExports: options.usedExports || false,
			fallbackCacheGroup: {
				chunksFilter:
					/** @type {ChunkFilterFn} */
					(
						normalizeChunksFilter(
							fallbackCacheGroup.chunks || options.chunks || "all"
						)
					),
				minSize: mergeSizes(
					normalizeSizes(fallbackCacheGroup.minSize, defaultSizeTypes),
					minSize
				),
				maxAsyncSize: mergeSizes(
					normalizeSizes(fallbackCacheGroup.maxAsyncSize, defaultSizeTypes),
					normalizeSizes(fallbackCacheGroup.maxSize, defaultSizeTypes),
					normalizeSizes(options.maxAsyncSize, defaultSizeTypes),
					normalizeSizes(options.maxSize, defaultSizeTypes)
				),
				maxInitialSize: mergeSizes(
					normalizeSizes(fallbackCacheGroup.maxInitialSize, defaultSizeTypes),
					normalizeSizes(fallbackCacheGroup.maxSize, defaultSizeTypes),
					normalizeSizes(options.maxInitialSize, defaultSizeTypes),
					normalizeSizes(options.maxSize, defaultSizeTypes)
				),
				automaticNameDelimiter:
					fallbackCacheGroup.automaticNameDelimiter ||
					options.automaticNameDelimiter ||
					"~"
			}
		};

		/** @type {WeakMap<CacheGroupSource, CacheGroup>} */
		this._cacheGroupCache = new WeakMap();
	}

	/**
	 * Returns the cache group (cached).
	 * @param {CacheGroupSource} cacheGroupSource source
	 * @returns {CacheGroup} the cache group (cached)
	 */
	_getCacheGroup(cacheGroupSource) {
		const cacheEntry = this._cacheGroupCache.get(cacheGroupSource);
		if (cacheEntry !== undefined) return cacheEntry;
		const minSize = mergeSizes(
			cacheGroupSource.minSize,
			cacheGroupSource.enforce ? undefined : this.options.minSize
		);
		const minSizeReduction = mergeSizes(
			cacheGroupSource.minSizeReduction,
			cacheGroupSource.enforce ? undefined : this.options.minSizeReduction
		);
		const minRemainingSize = mergeSizes(
			cacheGroupSource.minRemainingSize,
			cacheGroupSource.enforce ? undefined : this.options.minRemainingSize
		);
		const enforceSizeThreshold = mergeSizes(
			cacheGroupSource.enforceSizeThreshold,
			cacheGroupSource.enforce ? undefined : this.options.enforceSizeThreshold
		);
		/** @type {CacheGroup} */
		const cacheGroup = {
			key: cacheGroupSource.key,
			priority: cacheGroupSource.priority || 0,
			chunksFilter: cacheGroupSource.chunksFilter || this.options.chunksFilter,
			minSize,
			minSizeReduction,
			minRemainingSize,
			enforceSizeThreshold,
			maxAsyncSize: mergeSizes(
				cacheGroupSource.maxAsyncSize,
				cacheGroupSource.enforce ? undefined : this.options.maxAsyncSize
			),
			maxInitialSize: mergeSizes(
				cacheGroupSource.maxInitialSize,
				cacheGroupSource.enforce ? undefined : this.options.maxInitialSize
			),
			minChunks:
				cacheGroupSource.minChunks !== undefined
					? cacheGroupSource.minChunks
					: cacheGroupSource.enforce
						? 1
						: this.options.minChunks,
			maxAsyncRequests:
				cacheGroupSource.maxAsyncRequests !== undefined
					? cacheGroupSource.maxAsyncRequests
					: cacheGroupSource.enforce
						? Infinity
						: this.options.maxAsyncRequests,
			maxInitialRequests:
				cacheGroupSource.maxInitialRequests !== undefined
					? cacheGroupSource.maxInitialRequests
					: cacheGroupSource.enforce
						? Infinity
						: this.options.maxInitialRequests,
			getName:
				cacheGroupSource.getName !== undefined
					? cacheGroupSource.getName
					: this.options.getName,
			usedExports:
				cacheGroupSource.usedExports !== undefined
					? cacheGroupSource.usedExports
					: this.options.usedExports,
			filename:
				cacheGroupSource.filename !== undefined
					? cacheGroupSource.filename
					: this.options.filename,
			automaticNameDelimiter:
				cacheGroupSource.automaticNameDelimiter !== undefined
					? cacheGroupSource.automaticNameDelimiter
					: this.options.automaticNameDelimiter,
			idHint:
				cacheGroupSource.idHint !== undefined
					? cacheGroupSource.idHint
					: cacheGroupSource.key,
			reuseExistingChunk: cacheGroupSource.reuseExistingChunk || false,
			_validateSize: hasNonZeroSizes(minSize),
			_validateRemainingSize: hasNonZeroSizes(minRemainingSize),
			_minSizeForMaxSize: mergeSizes(
				cacheGroupSource.minSize,
				this.options.minSize
			),
			_conditionalEnforce: hasNonZeroSizes(enforceSizeThreshold)
		};
		this._cacheGroupCache.set(cacheGroupSource, cacheGroup);
		return cacheGroup;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const cachedMakePathsRelative = makePathsRelative.bindContextCache(
			compiler.context,
			compiler.root
		);
		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			const logger = compilation.getLogger(`webpack.${PLUGIN_NAME}`);
			let alreadyOptimized = false;
			compilation.hooks.unseal.tap(PLUGIN_NAME, () => {
				alreadyOptimized = false;
			});
			compilation.hooks.optimizeChunks.tap(
				{
					name: PLUGIN_NAME,
					stage: STAGE_ADVANCED
				},
				(chunks) => {
					if (alreadyOptimized) return;
					alreadyOptimized = true;
					logger.time("prepare");
					const chunkGraph = compilation.chunkGraph;
					const moduleGraph = compilation.moduleGraph;
					// Give each selected chunk an index (to create strings from chunks)
					/** @type {Map<Chunk, bigint>} */
					const chunkIndexMap = new Map();
					const ZERO = BigInt("0");
					const ONE = BigInt("1");
					const START = ONE << BigInt("31");
					let index = START;
					for (const chunk of chunks) {
						chunkIndexMap.set(
							chunk,
							index | BigInt((Math.random() * 0x7fffffff) | 0)
						);
						index <<= ONE;
					}
					/**
					 * Returns key of the chunks.
					 * @param {Iterable<Chunk, undefined, undefined>} chunks list of chunks
					 * @returns {bigint | Chunk} key of the chunks
					 */
					const getKey = (chunks) => {
						const iterator = chunks[Symbol.iterator]();
						let result = iterator.next();
						if (result.done) return ZERO;
						const first = result.value;
						result = iterator.next();
						if (result.done) return first;
						let key =
							/** @type {bigint} */ (chunkIndexMap.get(first)) |
							/** @type {bigint} */ (chunkIndexMap.get(result.value));
						while (!(result = iterator.next()).done) {
							const raw = chunkIndexMap.get(result.value);
							key ^= /** @type {bigint} */ (raw);
						}
						return key;
					};
					/**
					 * Returns stringified key.
					 * @param {bigint | Chunk} key key of the chunks
					 * @returns {string} stringified key
					 */
					const keyToString = (key) => {
						if (typeof key === "bigint") return key.toString(16);
						return /** @type {bigint} */ (chunkIndexMap.get(key)).toString(16);
					};

					const getChunkSetsInGraph = memoize(() => {
						/** @type {Map<bigint, ChunkSet>} */
						const chunkSetsInGraph = new Map();
						/** @type {ChunkSet} */
						const singleChunkSets = new Set();
						for (const module of compilation.modules) {
							const chunks = chunkGraph.getModuleChunksIterable(module);
							const chunksKey = getKey(chunks);
							if (typeof chunksKey === "bigint") {
								if (!chunkSetsInGraph.has(chunksKey)) {
									chunkSetsInGraph.set(chunksKey, new Set(chunks));
								}
							} else {
								singleChunkSets.add(chunksKey);
							}
						}
						return { chunkSetsInGraph, singleChunkSets };
					});

					/**
					 * Group chunks by exports.
					 * @param {Module} module the module
					 * @returns {Iterable<Chunk[]>} groups of chunks with equal exports
					 */
					const groupChunksByExports = (module) => {
						const exportsInfo = moduleGraph.getExportsInfo(module);
						/** @type {Map<string, Chunk[]>} */
						const groupedByUsedExports = new Map();
						for (const chunk of chunkGraph.getModuleChunksIterable(module)) {
							const key = exportsInfo.getUsageKey(chunk.runtime);
							const list = groupedByUsedExports.get(key);
							if (list !== undefined) {
								list.push(chunk);
							} else {
								groupedByUsedExports.set(key, [chunk]);
							}
						}
						return groupedByUsedExports.values();
					};

					/** @type {Map<Module, Iterable<Chunk[]>>} */
					const groupedByExportsMap = new Map();

					/** @typedef {Map<bigint | Chunk, ChunkSet>} ChunkSetsInGraph */

					const getExportsChunkSetsInGraph = memoize(() => {
						/** @type {ChunkSetsInGraph} */
						const chunkSetsInGraph = new Map();
						/** @type {ChunkSet} */
						const singleChunkSets = new Set();
						for (const module of compilation.modules) {
							const groupedChunks = [...groupChunksByExports(module)];
							groupedByExportsMap.set(module, groupedChunks);
							for (const chunks of groupedChunks) {
								if (chunks.length === 1) {
									singleChunkSets.add(chunks[0]);
								} else {
									const chunksKey = getKey(chunks);
									if (!chunkSetsInGraph.has(chunksKey)) {
										chunkSetsInGraph.set(chunksKey, new Set(chunks));
									}
								}
							}
						}
						return { chunkSetsInGraph, singleChunkSets };
					});

					/** @typedef {Map<CountOfChunk, ChunkSet[]>} ChunkSetsByCount */

					// group these set of chunks by count
					// to allow to check less sets via isSubset
					// (only smaller sets can be subset)
					/**
					 * Group chunk sets by count.
					 * @param {IterableIterator<ChunkSet>} chunkSets set of sets of chunks
					 * @returns {ChunkSetsByCount} map of sets of chunks by count
					 */
					const groupChunkSetsByCount = (chunkSets) => {
						/** @type {ChunkSetsByCount} */
						const chunkSetsByCount = new Map();
						for (const chunksSet of chunkSets) {
							const count = chunksSet.size;
							let array = chunkSetsByCount.get(count);
							if (array === undefined) {
								array = [];
								chunkSetsByCount.set(count, array);
							}
							array.push(chunksSet);
						}
						return chunkSetsByCount;
					};
					const getChunkSetsByCount = memoize(() =>
						groupChunkSetsByCount(
							getChunkSetsInGraph().chunkSetsInGraph.values()
						)
					);
					const getExportsChunkSetsByCount = memoize(() =>
						groupChunkSetsByCount(
							getExportsChunkSetsInGraph().chunkSetsInGraph.values()
						)
					);

					/** @typedef {(ChunkSet | Chunk)[]} Combinations */

					// Create a list of possible combinations
					/**
					 * Creates a get combinations.
					 * @param {ChunkSetsInGraph} chunkSets chunk sets
					 * @param {ChunkSet} singleChunkSets single chunks sets
					 * @param {ChunkSetsByCount} chunkSetsByCount chunk sets by count
					 * @returns {(key: bigint | Chunk) => Combinations} combinations
					 */
					const createGetCombinations = (
						chunkSets,
						singleChunkSets,
						chunkSetsByCount
					) => {
						/** @type {Map<bigint | Chunk, Combinations>} */
						const combinationsCache = new Map();

						return (key) => {
							const cacheEntry = combinationsCache.get(key);
							if (cacheEntry !== undefined) return cacheEntry;
							if (key instanceof Chunk) {
								const result = [key];
								combinationsCache.set(key, result);
								return result;
							}
							const chunksSet =
								/** @type {ChunkSet} */
								(chunkSets.get(key));
							/** @type {Combinations} */
							const array = [chunksSet];
							for (const [count, setArray] of chunkSetsByCount) {
								// "equal" is not needed because they would have been merge in the first step
								if (count < chunksSet.size) {
									for (const set of setArray) {
										if (isSubset(chunksSet, set)) {
											array.push(set);
										}
									}
								}
							}
							for (const chunk of singleChunkSets) {
								if (chunksSet.has(chunk)) {
									array.push(chunk);
								}
							}
							combinationsCache.set(key, array);
							return array;
						};
					};

					const getCombinationsFactory = memoize(() => {
						const { chunkSetsInGraph, singleChunkSets } = getChunkSetsInGraph();
						return createGetCombinations(
							chunkSetsInGraph,
							singleChunkSets,
							getChunkSetsByCount()
						);
					});

					/**
					 * Returns combinations by key.
					 * @param {bigint | Chunk} key key
					 * @returns {Combinations} combinations by key
					 */
					const getCombinations = (key) => getCombinationsFactory()(key);

					const getExportsCombinationsFactory = memoize(() => {
						const { chunkSetsInGraph, singleChunkSets } =
							getExportsChunkSetsInGraph();
						return createGetCombinations(
							chunkSetsInGraph,
							singleChunkSets,
							getExportsChunkSetsByCount()
						);
					});
					/**
					 * Gets exports combinations.
					 * @param {bigint | Chunk} key key
					 * @returns {Combinations} exports combinations by key
					 */
					const getExportsCombinations = (key) =>
						getExportsCombinationsFactory()(key);

					/**
					 * Defines the selected chunks result type used by this module.
					 * @typedef {object} SelectedChunksResult
					 * @property {Chunk[]} chunks the list of chunks
					 * @property {bigint | Chunk} key a key of the list
					 */

					/** @typedef {WeakMap<ChunkFilterFn, SelectedChunksResult>} ChunkMap */
					/** @type {WeakMap<ChunkSet | Chunk, ChunkMap>} */
					const selectedChunksCacheByChunksSet = new WeakMap();

					/**
					 * get list and key by applying the filter function to the list
					 * It is cached for performance reasons
					 * @param {ChunkSet | Chunk} chunks list of chunks
					 * @param {ChunkFilterFn} chunkFilter filter function for chunks
					 * @returns {SelectedChunksResult} list and key
					 */
					const getSelectedChunks = (chunks, chunkFilter) => {
						let entry = selectedChunksCacheByChunksSet.get(chunks);
						if (entry === undefined) {
							/** @type {ChunkMap} */
							entry = new WeakMap();
							selectedChunksCacheByChunksSet.set(chunks, entry);
						}
						let entry2 =
							/** @type {SelectedChunksResult} */
							(entry.get(chunkFilter));
						if (entry2 === undefined) {
							/** @type {Chunk[]} */
							const selectedChunks = [];
							if (chunks instanceof Chunk) {
								if (chunkFilter(chunks)) selectedChunks.push(chunks);
							} else {
								for (const chunk of chunks) {
									if (chunkFilter(chunk)) selectedChunks.push(chunk);
								}
							}
							entry2 = {
								chunks: selectedChunks,
								key: getKey(selectedChunks)
							};
							entry.set(chunkFilter, entry2);
						}
						return entry2;
					};

					/** @type {Map<string, boolean>} */
					const alreadyValidatedParents = new Map();
					/** @type {Set<string>} */
					const alreadyReportedErrors = new Set();

					// Map a list of chunks to a list of modules
					// For the key the chunk "index" is used, the value is a SortableSet of modules
					/** @type {Map<string, ChunksInfoItem>} */
					const chunksInfoMap = new Map();

					/**
					 * Adds module to chunks info map.
					 * @param {CacheGroup} cacheGroup the current cache group
					 * @param {number} cacheGroupIndex the index of the cache group of ordering
					 * @param {Chunk[]} selectedChunks chunks selected for this module
					 * @param {bigint | Chunk} selectedChunksKey a key of selectedChunks
					 * @param {Module} module the current module
					 * @returns {void}
					 */
					const addModuleToChunksInfoMap = (
						cacheGroup,
						cacheGroupIndex,
						selectedChunks,
						selectedChunksKey,
						module
					) => {
						// Break if minimum number of chunks is not reached
						if (selectedChunks.length < cacheGroup.minChunks) return;
						// Determine name for split chunk

						const name =
							/** @type {GetNameFn} */
							(cacheGroup.getName)(module, selectedChunks, cacheGroup.key);
						// Check if the name is ok
						const existingChunk = name && compilation.namedChunks.get(name);
						if (existingChunk) {
							const parentValidationKey = `${name}|${
								typeof selectedChunksKey === "bigint"
									? selectedChunksKey
									: selectedChunksKey.debugId
							}`;
							const valid = alreadyValidatedParents.get(parentValidationKey);
							if (valid === false) return;
							if (valid === undefined) {
								// Module can only be moved into the existing chunk if the existing chunk
								// is a parent of all selected chunks
								let isInAllParents = true;
								/** @type {Set<ChunkGroup>} */
								const queue = new Set();
								for (const chunk of selectedChunks) {
									for (const group of chunk.groupsIterable) {
										queue.add(group);
									}
								}
								for (const group of queue) {
									if (existingChunk.isInGroup(group)) continue;
									let hasParent = false;
									for (const parent of group.parentsIterable) {
										hasParent = true;
										queue.add(parent);
									}
									if (!hasParent) {
										isInAllParents = false;
									}
								}
								const valid = isInAllParents;
								alreadyValidatedParents.set(parentValidationKey, valid);
								if (!valid) {
									if (!alreadyReportedErrors.has(name)) {
										alreadyReportedErrors.add(name);
										compilation.errors.push(
											new WebpackError(
												`${PLUGIN_NAME}\n` +
													`Cache group "${cacheGroup.key}" conflicts with existing chunk.\n` +
													`Both have the same name "${name}" and existing chunk is not a parent of the selected modules.\n` +
													"Use a different name for the cache group or make sure that the existing chunk is a parent (e. g. via dependOn).\n" +
													'HINT: You can omit "name" to automatically create a name.\n' +
													"BREAKING CHANGE: webpack < 5 used to allow to use an entrypoint as splitChunk. " +
													"This is no longer allowed when the entrypoint is not a parent of the selected modules.\n" +
													"Remove this entrypoint and add modules to cache group's 'test' instead. " +
													"If you need modules to be evaluated on startup, add them to the existing entrypoints (make them arrays). " +
													"See migration guide of more info."
											)
										);
									}
									return;
								}
							}
						}
						// Create key for maps
						// When it has a name we use the name as key
						// Otherwise we create the key from chunks and cache group key
						// This automatically merges equal names
						const key =
							cacheGroup.key +
							(name
								? ` name:${name}`
								: ` chunks:${keyToString(selectedChunksKey)}`);
						// Add module to maps
						let info = chunksInfoMap.get(key);
						if (info === undefined) {
							chunksInfoMap.set(
								key,
								(info = {
									modules: new SortableSet(
										undefined,
										compareModulesByIdentifier
									),
									cacheGroup,
									cacheGroupIndex,
									name,
									sizes: {},
									chunks: new Set(),
									reusableChunks: new Set(),
									chunksKeys: new Set()
								})
							);
						}
						const oldSize = info.modules.size;
						info.modules.add(module);
						if (info.modules.size !== oldSize) {
							for (const type of module.getSourceTypes()) {
								info.sizes[type] = (info.sizes[type] || 0) + module.size(type);
							}
						}
						const oldChunksKeysSize = info.chunksKeys.size;
						info.chunksKeys.add(selectedChunksKey);
						if (oldChunksKeysSize !== info.chunksKeys.size) {
							for (const chunk of selectedChunks) {
								info.chunks.add(chunk);
							}
						}
					};

					const context = {
						moduleGraph,
						chunkGraph
					};

					logger.timeEnd("prepare");

					logger.time("modules");

					// Walk through all modules
					for (const module of compilation.modules) {
						// Get cache group
						const cacheGroups = this.options.getCacheGroups(module, context);
						if (!Array.isArray(cacheGroups) || cacheGroups.length === 0) {
							continue;
						}

						// Prepare some values (usedExports = false)
						const getCombs = memoize(() => {
							const chunks = chunkGraph.getModuleChunksIterable(module);
							const chunksKey = getKey(chunks);
							return getCombinations(chunksKey);
						});

						// Prepare some values (usedExports = true)
						const getCombsByUsedExports = memoize(() => {
							// fill the groupedByExportsMap
							getExportsChunkSetsInGraph();
							/** @type {Set<ChunkSet | Chunk>} */
							const set = new Set();
							const groupedByUsedExports =
								/** @type {Iterable<Chunk[]>} */
								(groupedByExportsMap.get(module));
							for (const chunks of groupedByUsedExports) {
								const chunksKey = getKey(chunks);
								for (const comb of getExportsCombinations(chunksKey)) {
									set.add(comb);
								}
							}
							return set;
						});

						let cacheGroupIndex = 0;
						for (const cacheGroupSource of cacheGroups) {
							const cacheGroup = this._getCacheGroup(cacheGroupSource);

							const combs = cacheGroup.usedExports
								? getCombsByUsedExports()
								: getCombs();
							// For all combination of chunk selection
							for (const chunkCombination of combs) {
								// Break if minimum number of chunks is not reached
								const count =
									chunkCombination instanceof Chunk ? 1 : chunkCombination.size;
								if (count < cacheGroup.minChunks) continue;
								// Select chunks by configuration
								const { chunks: selectedChunks, key: selectedChunksKey } =
									getSelectedChunks(
										chunkCombination,
										/** @type {ChunkFilterFn} */
										(cacheGroup.chunksFilter)
									);

								addModuleToChunksInfoMap(
									cacheGroup,
									cacheGroupIndex,
									selectedChunks,
									selectedChunksKey,
									module
								);
							}
							cacheGroupIndex++;
						}
					}

					logger.timeEnd("modules");

					logger.time("queue");

					/**
					 * Removes modules with source type.
					 * @param {ChunksInfoItem} info entry
					 * @param {SourceTypes} sourceTypes source types to be removed
					 */
					const removeModulesWithSourceType = (info, sourceTypes) => {
						for (const module of info.modules) {
							const types = module.getSourceTypes();
							if (sourceTypes.some((type) => types.has(type))) {
								info.modules.delete(module);
								for (const type of types) {
									info.sizes[type] -= module.size(type);
								}
							}
						}
					};

					/**
					 * Removes min size violating modules.
					 * @param {ChunksInfoItem} info entry
					 * @returns {boolean} true, if entry become empty
					 */
					const removeMinSizeViolatingModules = (info) => {
						if (!info.cacheGroup._validateSize) return false;
						const violatingSizes = getViolatingMinSizes(
							info.sizes,
							info.cacheGroup.minSize
						);
						if (violatingSizes === undefined) return false;
						removeModulesWithSourceType(info, violatingSizes);
						return info.modules.size === 0;
					};

					// Filter items were size < minSize
					for (const [key, info] of chunksInfoMap) {
						if (removeMinSizeViolatingModules(info)) {
							chunksInfoMap.delete(key);
						} else if (
							!checkMinSizeReduction(
								info.sizes,
								info.cacheGroup.minSizeReduction,
								info.chunks.size
							)
						) {
							chunksInfoMap.delete(key);
						}
					}

					/**
					 * Defines the max size queue item type used by this module.
					 * @typedef {object} MaxSizeQueueItem
					 * @property {SplitChunksSizes} minSize
					 * @property {SplitChunksSizes} maxAsyncSize
					 * @property {SplitChunksSizes} maxInitialSize
					 * @property {string} automaticNameDelimiter
					 * @property {string[]} keys
					 */

					/** @type {Map<Chunk, MaxSizeQueueItem>} */
					const maxSizeQueueMap = new Map();

					while (chunksInfoMap.size > 0) {
						// Find best matching entry
						/** @type {undefined | string} */
						let bestEntryKey;
						/** @type {undefined | ChunksInfoItem} */
						let bestEntry;
						for (const pair of chunksInfoMap) {
							const key = pair[0];
							const info = pair[1];
							if (
								bestEntry === undefined ||
								compareEntries(bestEntry, info) < 0
							) {
								bestEntry = info;
								bestEntryKey = key;
							}
						}

						const item = /** @type {ChunksInfoItem} */ (bestEntry);
						chunksInfoMap.delete(/** @type {string} */ (bestEntryKey));

						/** @type {ChunkName | undefined} */
						let chunkName = item.name;
						// Variable for the new chunk (lazy created)
						/** @type {Chunk | undefined} */
						let newChunk;
						// When no chunk name, check if we can reuse a chunk instead of creating a new one
						let isExistingChunk = false;
						let isReusedWithAllModules = false;
						if (chunkName) {
							const chunkByName = compilation.namedChunks.get(chunkName);
							if (chunkByName !== undefined) {
								newChunk = chunkByName;
								const oldSize = item.chunks.size;
								item.chunks.delete(newChunk);
								isExistingChunk = item.chunks.size !== oldSize;
							}
						} else if (item.cacheGroup.reuseExistingChunk) {
							outer: for (const chunk of item.chunks) {
								if (
									chunkGraph.getNumberOfChunkModules(chunk) !==
									item.modules.size
								) {
									continue;
								}
								if (
									item.chunks.size > 1 &&
									chunkGraph.getNumberOfEntryModules(chunk) > 0
								) {
									continue;
								}
								for (const module of item.modules) {
									if (!chunkGraph.isModuleInChunk(module, chunk)) {
										continue outer;
									}
								}
								if (!newChunk || !newChunk.name) {
									newChunk = chunk;
								} else if (
									chunk.name &&
									chunk.name.length < newChunk.name.length
								) {
									newChunk = chunk;
								} else if (
									chunk.name &&
									chunk.name.length === newChunk.name.length &&
									chunk.name < newChunk.name
								) {
									newChunk = chunk;
								}
							}
							if (newChunk) {
								item.chunks.delete(newChunk);
								chunkName = undefined;
								isExistingChunk = true;
								isReusedWithAllModules = true;
							}
						}

						const enforced =
							item.cacheGroup._conditionalEnforce &&
							checkMinSize(item.sizes, item.cacheGroup.enforceSizeThreshold);

						/** @type {Set<Chunk>} */
						const usedChunks = new Set(item.chunks);

						// Check if maxRequests condition can be fulfilled
						if (
							!enforced &&
							(Number.isFinite(item.cacheGroup.maxInitialRequests) ||
								Number.isFinite(item.cacheGroup.maxAsyncRequests))
						) {
							for (const chunk of usedChunks) {
								// respect max requests
								const maxRequests = chunk.isOnlyInitial()
									? item.cacheGroup.maxInitialRequests
									: chunk.canBeInitial()
										? Math.min(
												item.cacheGroup.maxInitialRequests,
												item.cacheGroup.maxAsyncRequests
											)
										: item.cacheGroup.maxAsyncRequests;
								if (
									Number.isFinite(maxRequests) &&
									getRequests(chunk) >= maxRequests
								) {
									usedChunks.delete(chunk);
								}
							}
						}

						outer: for (const chunk of usedChunks) {
							for (const module of item.modules) {
								if (chunkGraph.isModuleInChunk(module, chunk)) continue outer;
							}
							usedChunks.delete(chunk);
						}

						// Were some (invalid) chunks removed from usedChunks?
						// => readd all modules to the queue, as things could have been changed
						if (usedChunks.size < item.chunks.size) {
							if (isExistingChunk) {
								usedChunks.add(/** @type {Chunk} */ (newChunk));
							}
							if (usedChunks.size >= item.cacheGroup.minChunks) {
								const chunksArr = [...usedChunks];
								for (const module of item.modules) {
									addModuleToChunksInfoMap(
										item.cacheGroup,
										item.cacheGroupIndex,
										chunksArr,
										getKey(usedChunks),
										module
									);
								}
							}
							continue;
						}

						// Validate minRemainingSize constraint when a single chunk is left over
						if (
							!enforced &&
							item.cacheGroup._validateRemainingSize &&
							usedChunks.size === 1
						) {
							const [chunk] = usedChunks;
							/** @type {SplitChunksSizes} */
							const chunkSizes = Object.create(null);
							for (const module of chunkGraph.getChunkModulesIterable(chunk)) {
								if (!item.modules.has(module)) {
									for (const type of module.getSourceTypes()) {
										chunkSizes[type] =
											(chunkSizes[type] || 0) + module.size(type);
									}
								}
							}
							const violatingSizes = getViolatingMinSizes(
								chunkSizes,
								item.cacheGroup.minRemainingSize
							);
							if (violatingSizes !== undefined) {
								const oldModulesSize = item.modules.size;
								removeModulesWithSourceType(item, violatingSizes);
								if (
									item.modules.size > 0 &&
									item.modules.size !== oldModulesSize
								) {
									// queue this item again to be processed again
									// without violating modules
									chunksInfoMap.set(/** @type {string} */ (bestEntryKey), item);
								}
								continue;
							}
						}

						// Create the new chunk if not reusing one
						if (newChunk === undefined) {
							newChunk = compilation.addChunk(chunkName);
						}
						// Walk through all chunks
						for (const chunk of usedChunks) {
							// Add graph connections for splitted chunk
							chunk.split(newChunk);
						}

						// Add a note to the chunk
						newChunk.chunkReason =
							(newChunk.chunkReason ? `${newChunk.chunkReason}, ` : "") +
							(isReusedWithAllModules
								? "reused as split chunk"
								: "split chunk");
						if (item.cacheGroup.key) {
							newChunk.chunkReason += ` (cache group: ${item.cacheGroup.key})`;
						}
						if (chunkName) {
							newChunk.chunkReason += ` (name: ${chunkName})`;
						}
						if (item.cacheGroup.filename) {
							newChunk.filenameTemplate = item.cacheGroup.filename;
						}
						if (item.cacheGroup.idHint) {
							newChunk.idNameHints.add(item.cacheGroup.idHint);
						}
						if (!isReusedWithAllModules) {
							// Add all modules to the new chunk
							for (const module of item.modules) {
								if (!module.chunkCondition(newChunk, compilation)) continue;
								// Add module to new chunk
								chunkGraph.connectChunkAndModule(newChunk, module);
								// Remove module from used chunks
								for (const chunk of usedChunks) {
									chunkGraph.disconnectChunkAndModule(chunk, module);
								}
							}
						} else {
							// Remove all modules from used chunks
							for (const module of item.modules) {
								for (const chunk of usedChunks) {
									chunkGraph.disconnectChunkAndModule(chunk, module);
								}
							}
						}

						if (
							Object.keys(item.cacheGroup.maxAsyncSize).length > 0 ||
							Object.keys(item.cacheGroup.maxInitialSize).length > 0
						) {
							const oldMaxSizeSettings = maxSizeQueueMap.get(newChunk);
							maxSizeQueueMap.set(newChunk, {
								minSize: oldMaxSizeSettings
									? combineSizes(
											oldMaxSizeSettings.minSize,
											item.cacheGroup._minSizeForMaxSize,
											Math.max
										)
									: item.cacheGroup.minSize,
								maxAsyncSize: oldMaxSizeSettings
									? combineSizes(
											oldMaxSizeSettings.maxAsyncSize,
											item.cacheGroup.maxAsyncSize,
											Math.min
										)
									: item.cacheGroup.maxAsyncSize,
								maxInitialSize: oldMaxSizeSettings
									? combineSizes(
											oldMaxSizeSettings.maxInitialSize,
											item.cacheGroup.maxInitialSize,
											Math.min
										)
									: item.cacheGroup.maxInitialSize,
								automaticNameDelimiter: item.cacheGroup.automaticNameDelimiter,
								keys: oldMaxSizeSettings
									? [...oldMaxSizeSettings.keys, item.cacheGroup.key]
									: [item.cacheGroup.key]
							});
						}

						// remove all modules from other entries and update size
						for (const [key, info] of chunksInfoMap) {
							if (isOverlap(info.chunks, usedChunks)) {
								// update modules and total size
								// may remove it from the map when < minSize
								let updated = false;
								for (const module of item.modules) {
									if (info.modules.has(module)) {
										// remove module
										info.modules.delete(module);
										// update size
										for (const key of module.getSourceTypes()) {
											info.sizes[key] -= module.size(key);
										}
										updated = true;
									}
								}
								if (updated) {
									if (info.modules.size === 0) {
										chunksInfoMap.delete(key);
										continue;
									}
									if (
										removeMinSizeViolatingModules(info) ||
										!checkMinSizeReduction(
											info.sizes,
											info.cacheGroup.minSizeReduction,
											info.chunks.size
										)
									) {
										chunksInfoMap.delete(key);
										continue;
									}
								}
							}
						}
					}

					logger.timeEnd("queue");

					logger.time("maxSize");

					/** @type {Set<string>} */
					const incorrectMinMaxSizeSet = new Set();

					const { outputOptions } = compilation;

					// Make sure that maxSize is fulfilled
					const { fallbackCacheGroup } = this.options;
					for (const chunk of compilation.chunks) {
						const chunkConfig = maxSizeQueueMap.get(chunk);
						const {
							minSize,
							maxAsyncSize,
							maxInitialSize,
							automaticNameDelimiter
						} = chunkConfig || fallbackCacheGroup;
						if (!chunkConfig && !fallbackCacheGroup.chunksFilter(chunk)) {
							continue;
						}
						/** @type {SplitChunksSizes} */
						let maxSize;
						if (chunk.isOnlyInitial()) {
							maxSize = maxInitialSize;
						} else if (chunk.canBeInitial()) {
							maxSize = combineSizes(maxAsyncSize, maxInitialSize, Math.min);
						} else {
							maxSize = maxAsyncSize;
						}
						if (Object.keys(maxSize).length === 0) {
							continue;
						}
						for (const key of /** @type {SourceType[]} */ (
							Object.keys(maxSize)
						)) {
							const maxSizeValue = maxSize[key];
							const minSizeValue = minSize[key];
							if (
								typeof minSizeValue === "number" &&
								minSizeValue > maxSizeValue
							) {
								const keys = chunkConfig && chunkConfig.keys;
								const warningKey = `${
									keys && keys.join()
								} ${minSizeValue} ${maxSizeValue}`;
								if (!incorrectMinMaxSizeSet.has(warningKey)) {
									incorrectMinMaxSizeSet.add(warningKey);
									compilation.warnings.push(
										new MinMaxSizeWarning(keys, minSizeValue, maxSizeValue)
									);
								}
							}
						}
						const results = deterministicGroupingForModules({
							minSize,
							maxSize: mapObject(maxSize, (value, key) => {
								const minSizeValue = minSize[key];
								return typeof minSizeValue === "number"
									? Math.max(value, minSizeValue)
									: value;
							}),
							items: chunkGraph.getChunkModulesIterable(chunk),
							getKey(module) {
								const cache = getKeyCache.get(module);
								if (cache !== undefined) return cache;
								const ident = cachedMakePathsRelative(module.identifier());
								const nameForCondition =
									module.nameForCondition && module.nameForCondition();
								const name = nameForCondition
									? cachedMakePathsRelative(nameForCondition)
									: ident.replace(/^.*!|\?[^?!]*$/g, "");
								const fullKey =
									name +
									automaticNameDelimiter +
									hashFilename(ident, outputOptions);
								const key = requestToId(fullKey);
								getKeyCache.set(module, key);
								return key;
							},
							getSize(module) {
								/** @type {Sizes} */
								const size = Object.create(null);
								for (const key of module.getSourceTypes()) {
									size[key] = module.size(key);
								}
								return size;
							}
						});
						if (results.length <= 1) {
							continue;
						}
						for (let i = 0; i < results.length; i++) {
							const group = results[i];
							const key = this.options.hidePathInfo
								? hashFilename(group.key, outputOptions)
								: group.key;
							let name = chunk.name
								? chunk.name + automaticNameDelimiter + key
								: null;
							if (name && name.length > 100) {
								name =
									name.slice(0, 100) +
									automaticNameDelimiter +
									hashFilename(name, outputOptions);
							}
							if (i !== results.length - 1) {
								const newPart = compilation.addChunk(name);
								chunk.split(newPart);
								newPart.chunkReason = chunk.chunkReason;
								if (chunk.filenameTemplate) {
									newPart.filenameTemplate = chunk.filenameTemplate;
								}
								// Add all modules to the new chunk
								for (const module of group.items) {
									if (!module.chunkCondition(newPart, compilation)) {
										continue;
									}
									// Add module to new chunk
									chunkGraph.connectChunkAndModule(newPart, module);
									// Remove module from used chunks
									chunkGraph.disconnectChunkAndModule(chunk, module);
								}
							} else {
								// change the chunk to be a part
								chunk.name = name;
							}
						}
					}
					logger.timeEnd("maxSize");
				}
			);
		});
	}
};

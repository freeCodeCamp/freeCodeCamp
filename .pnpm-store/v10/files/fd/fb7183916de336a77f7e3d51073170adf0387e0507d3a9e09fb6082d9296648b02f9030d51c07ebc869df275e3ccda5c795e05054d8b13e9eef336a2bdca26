/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const createHash = require("../util/createHash");
const { makePathsRelative } = require("../util/identifier");
const numberHash = require("../util/numberHash");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../util/Hash").HashFunction} HashFunction */
/** @typedef {import("../util/identifier").AssociatedObjectForCache} AssociatedObjectForCache */
/** @typedef {import("../Module").BuildMeta} BuildMeta */

/**
 * Returns hash.
 * @param {string} str string to hash
 * @param {number} len max length of the hash
 * @param {HashFunction} hashFunction hash function to use
 * @returns {string} hash
 */
const getHash = (str, len, hashFunction) => {
	const hash = createHash(hashFunction);
	hash.update(str);
	const digest = hash.digest("hex");
	return digest.slice(0, len);
};

/**
 * Returns string prefixed by an underscore if it is a number.
 * @param {string} str the string
 * @returns {string} string prefixed by an underscore if it is a number
 */
const avoidNumber = (str) => {
	// max length of a number is 21 chars, bigger numbers a written as "...e+xx"
	if (str.length > 21) return str;
	const firstChar = str.charCodeAt(0);
	// skip everything that doesn't look like a number
	// charCodes: "-": 45, "1": 49, "9": 57
	if (firstChar < 49) {
		if (firstChar !== 45) return str;
	} else if (firstChar > 57) {
		return str;
	}
	if (str === String(Number(str))) {
		return `_${str}`;
	}
	return str;
};

/**
 * Returns id representation.
 * @param {string} request the request
 * @returns {string} id representation
 */
const requestToId = (request) =>
	request.replace(/^(\.\.?\/)+/, "").replace(/(^[.-]|[^a-z0-9_-])+/gi, "_");

/**
 * Shorten long string.
 * @param {string} string the string
 * @param {string} delimiter separator for string and hash
 * @param {HashFunction} hashFunction hash function to use
 * @returns {string} string with limited max length to 100 chars
 */
const shortenLongString = (string, delimiter, hashFunction) => {
	if (string.length < 100) return string;
	return (
		string.slice(0, 100 - 6 - delimiter.length) +
		delimiter +
		getHash(string, 6, hashFunction)
	);
};

/**
 * Gets short module name.
 * @param {Module} module the module
 * @param {string} context context directory
 * @param {AssociatedObjectForCache=} associatedObjectForCache an object to which the cache will be attached
 * @returns {string} short module name
 */
const getShortModuleName = (module, context, associatedObjectForCache) => {
	const libIdent = module.libIdent({ context, associatedObjectForCache });
	if (libIdent) return avoidNumber(libIdent);
	const nameForCondition = module.nameForCondition();
	if (nameForCondition) {
		return avoidNumber(
			makePathsRelative(context, nameForCondition, associatedObjectForCache)
		);
	}
	return "";
};

/**
 * Gets long module name.
 * @param {string} shortName the short name
 * @param {Module} module the module
 * @param {string} context context directory
 * @param {HashFunction} hashFunction hash function to use
 * @param {AssociatedObjectForCache=} associatedObjectForCache an object to which the cache will be attached
 * @returns {string} long module name
 */
const getLongModuleName = (
	shortName,
	module,
	context,
	hashFunction,
	associatedObjectForCache
) => {
	const fullName = getFullModuleName(module, context, associatedObjectForCache);
	return `${shortName}?${getHash(fullName, 4, hashFunction)}`;
};

/**
 * Gets full module name.
 * @param {Module} module the module
 * @param {string} context context directory
 * @param {AssociatedObjectForCache=} associatedObjectForCache an object to which the cache will be attached
 * @returns {string} full module name
 */
const getFullModuleName = (module, context, associatedObjectForCache) =>
	makePathsRelative(context, module.identifier(), associatedObjectForCache);

/**
 * Gets short chunk name.
 * @param {Chunk} chunk the chunk
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @param {string} context context directory
 * @param {string} delimiter delimiter for names
 * @param {HashFunction} hashFunction hash function to use
 * @param {AssociatedObjectForCache=} associatedObjectForCache an object to which the cache will be attached
 * @returns {string} short chunk name
 */
const getShortChunkName = (
	chunk,
	chunkGraph,
	context,
	delimiter,
	hashFunction,
	associatedObjectForCache
) => {
	const modules = chunkGraph.getChunkRootModules(chunk);
	const shortModuleNames = modules.map((m) =>
		requestToId(getShortModuleName(m, context, associatedObjectForCache))
	);
	chunk.idNameHints.sort();
	const chunkName = [...chunk.idNameHints, ...shortModuleNames]
		.filter(Boolean)
		.join(delimiter);
	return shortenLongString(chunkName, delimiter, hashFunction);
};

/**
 * Gets long chunk name.
 * @param {Chunk} chunk the chunk
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @param {string} context context directory
 * @param {string} delimiter delimiter for names
 * @param {HashFunction} hashFunction hash function to use
 * @param {AssociatedObjectForCache=} associatedObjectForCache an object to which the cache will be attached
 * @returns {string} short chunk name
 */
const getLongChunkName = (
	chunk,
	chunkGraph,
	context,
	delimiter,
	hashFunction,
	associatedObjectForCache
) => {
	const modules = chunkGraph.getChunkRootModules(chunk);
	const shortModuleNames = modules.map((m) =>
		requestToId(getShortModuleName(m, context, associatedObjectForCache))
	);
	const longModuleNames = modules.map((m) =>
		requestToId(
			getLongModuleName("", m, context, hashFunction, associatedObjectForCache)
		)
	);
	chunk.idNameHints.sort();
	const chunkName = [
		...chunk.idNameHints,
		...shortModuleNames,
		...longModuleNames
	]
		.filter(Boolean)
		.join(delimiter);
	return shortenLongString(chunkName, delimiter, hashFunction);
};

/**
 * Gets full chunk name.
 * @param {Chunk} chunk the chunk
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @param {string} context context directory
 * @param {AssociatedObjectForCache=} associatedObjectForCache an object to which the cache will be attached
 * @returns {string} full chunk name
 */
const getFullChunkName = (
	chunk,
	chunkGraph,
	context,
	associatedObjectForCache
) => {
	if (chunk.name) return chunk.name;
	const modules = chunkGraph.getChunkRootModules(chunk);
	const fullModuleNames = modules.map((m) =>
		makePathsRelative(context, m.identifier(), associatedObjectForCache)
	);
	return fullModuleNames.join();
};

/**
 * Adds to map of items.
 * @template K
 * @template V
 * @param {Map<K, V[]>} map a map from key to values
 * @param {K} key key
 * @param {V} value value
 * @returns {void}
 */
const addToMapOfItems = (map, key, value) => {
	let array = map.get(key);
	if (array === undefined) {
		array = [];
		map.set(key, array);
	}
	array.push(value);
};

/** @typedef {Set<string>} UsedModuleIds */

/**
 * Gets used module ids and modules.
 * @param {Compilation} compilation the compilation
 * @param {((module: Module) => boolean)=} filter filter modules
 * @returns {[UsedModuleIds, Module[]]} used module ids as strings and modules without id matching the filter
 */
const getUsedModuleIdsAndModules = (compilation, filter) => {
	const chunkGraph = compilation.chunkGraph;
	/** @type {Module[]} */
	const modules = [];

	/** @type {UsedModuleIds} */
	const usedIds = new Set();
	if (compilation.usedModuleIds) {
		for (const id of compilation.usedModuleIds) {
			usedIds.add(String(id));
		}
	}

	for (const module of compilation.modules) {
		if (!module.needId) continue;
		const moduleId = chunkGraph.getModuleId(module);
		if (moduleId !== null) {
			usedIds.add(String(moduleId));
		} else if (
			(!filter || filter(module)) &&
			(chunkGraph.getNumberOfModuleChunks(module) !== 0 ||
				// CSS modules need IDs even when not in chunks, for generating CSS class names(i.e. [id]-[local])
				/** @type {BuildMeta} */ (module.buildMeta).isCSSModule)
		) {
			modules.push(module);
		}
	}

	return [usedIds, modules];
};

/** @typedef {Set<string>} UsedChunkIds */

/**
 * Gets used chunk ids.
 * @param {Compilation} compilation the compilation
 * @returns {UsedChunkIds} used chunk ids as strings
 */
const getUsedChunkIds = (compilation) => {
	/** @type {UsedChunkIds} */
	const usedIds = new Set();
	if (compilation.usedChunkIds) {
		for (const id of compilation.usedChunkIds) {
			usedIds.add(String(id));
		}
	}

	for (const chunk of compilation.chunks) {
		const chunkId = chunk.id;
		if (chunkId !== null) {
			usedIds.add(String(chunkId));
		}
	}

	return usedIds;
};

/**
 * Returns list of items without a name.
 * @template T
 * @param {Iterable<T>} items list of items to be named
 * @param {(item: T) => string} getShortName get a short name for an item
 * @param {(item: T, name: string) => string} getLongName get a long name for an item
 * @param {(a: T, b: T) => -1 | 0 | 1} comparator order of items
 * @param {Set<string>} usedIds already used ids, will not be assigned
 * @param {(item: T, name: string) => void} assignName assign a name to an item
 * @returns {T[]} list of items without a name
 */
const assignNames = (
	items,
	getShortName,
	getLongName,
	comparator,
	usedIds,
	assignName
) => {
	/**
	 * Defines the map to item type used by this module.
	 * @template T
	 * @typedef {Map<string, T[]>} MapToItem
	 */

	/** @type {MapToItem<T>} */
	const nameToItems = new Map();

	for (const item of items) {
		const name = getShortName(item);
		addToMapOfItems(nameToItems, name, item);
	}

	/** @type {MapToItem<T>} */
	const nameToItems2 = new Map();

	for (const [name, items] of nameToItems) {
		if (items.length > 1 || !name) {
			for (const item of items) {
				const longName = getLongName(item, name);
				addToMapOfItems(nameToItems2, longName, item);
			}
		} else {
			addToMapOfItems(nameToItems2, name, items[0]);
		}
	}

	/** @type {T[]} */
	const unnamedItems = [];

	for (const [name, items] of nameToItems2) {
		if (!name) {
			for (const item of items) {
				unnamedItems.push(item);
			}
		} else if (items.length === 1 && !usedIds.has(name)) {
			assignName(items[0], name);
			usedIds.add(name);
		} else {
			items.sort(comparator);
			let i = 0;
			for (const item of items) {
				while (nameToItems2.has(name + i) && usedIds.has(name + i)) i++;
				assignName(item, name + i);
				usedIds.add(name + i);
				i++;
			}
		}
	}

	unnamedItems.sort(comparator);
	return unnamedItems;
};

/**
 * Assign deterministic ids.
 * @template T
 * @param {T[]} items list of items to be named
 * @param {(item: T) => string} getName get a name for an item
 * @param {(a: T, n: T) => -1 | 0 | 1} comparator order of items
 * @param {(item: T, id: number) => boolean} assignId assign an id to an item
 * @param {number[]} ranges usable ranges for ids
 * @param {number} expandFactor factor to create more ranges
 * @param {number} extraSpace extra space to allocate, i. e. when some ids are already used
 * @param {number} salt salting number to initialize hashing
 * @returns {void}
 */
const assignDeterministicIds = (
	items,
	getName,
	comparator,
	assignId,
	ranges = [10],
	expandFactor = 10,
	extraSpace = 0,
	salt = 0
) => {
	items.sort(comparator);

	// max 5% fill rate
	const optimalRange = Math.min(
		items.length * 20 + extraSpace,
		Number.MAX_SAFE_INTEGER
	);

	let i = 0;
	let range = ranges[i];
	while (range < optimalRange) {
		i++;
		if (i < ranges.length) {
			range = Math.min(ranges[i], Number.MAX_SAFE_INTEGER);
		} else if (expandFactor) {
			range = Math.min(range * expandFactor, Number.MAX_SAFE_INTEGER);
		} else {
			break;
		}
	}

	for (const item of items) {
		const ident = getName(item);
		/** @type {number} */
		let id;
		let i = salt;
		do {
			id = numberHash(ident + i++, range);
		} while (!assignId(item, id));
	}
};

/**
 * Assign ascending module ids.
 * @param {UsedModuleIds} usedIds used ids
 * @param {Iterable<Module>} modules the modules
 * @param {Compilation} compilation the compilation
 * @returns {void}
 */
const assignAscendingModuleIds = (usedIds, modules, compilation) => {
	const chunkGraph = compilation.chunkGraph;

	let nextId = 0;
	/** @type {(mod: Module) => void} */
	let assignId;
	if (usedIds.size > 0) {
		/**
		 * Processes the provided module.
		 * @param {Module} module the module
		 */
		assignId = (module) => {
			if (chunkGraph.getModuleId(module) === null) {
				while (usedIds.has(String(nextId))) nextId++;
				chunkGraph.setModuleId(module, nextId++);
			}
		};
	} else {
		/**
		 * Processes the provided module.
		 * @param {Module} module the module
		 */
		assignId = (module) => {
			if (chunkGraph.getModuleId(module) === null) {
				chunkGraph.setModuleId(module, nextId++);
			}
		};
	}
	for (const module of modules) {
		assignId(module);
	}
};

/**
 * Assign ascending chunk ids.
 * @param {Iterable<Chunk>} chunks the chunks
 * @param {Compilation} compilation the compilation
 * @returns {void}
 */
const assignAscendingChunkIds = (chunks, compilation) => {
	const usedIds = getUsedChunkIds(compilation);

	let nextId = 0;
	if (usedIds.size > 0) {
		for (const chunk of chunks) {
			if (chunk.id === null) {
				while (usedIds.has(String(nextId))) nextId++;
				chunk.id = nextId;
				chunk.ids = [nextId];
				nextId++;
			}
		}
	} else {
		for (const chunk of chunks) {
			if (chunk.id === null) {
				chunk.id = nextId;
				chunk.ids = [nextId];
				nextId++;
			}
		}
	}
};

module.exports.assignAscendingChunkIds = assignAscendingChunkIds;
module.exports.assignAscendingModuleIds = assignAscendingModuleIds;
module.exports.assignDeterministicIds = assignDeterministicIds;
module.exports.assignNames = assignNames;
module.exports.getFullChunkName = getFullChunkName;
module.exports.getFullModuleName = getFullModuleName;
module.exports.getLongChunkName = getLongChunkName;
module.exports.getLongModuleName = getLongModuleName;
module.exports.getShortChunkName = getShortChunkName;
module.exports.getShortModuleName = getShortModuleName;
module.exports.getUsedChunkIds = getUsedChunkIds;
module.exports.getUsedModuleIdsAndModules = getUsedModuleIdsAndModules;
module.exports.requestToId = requestToId;

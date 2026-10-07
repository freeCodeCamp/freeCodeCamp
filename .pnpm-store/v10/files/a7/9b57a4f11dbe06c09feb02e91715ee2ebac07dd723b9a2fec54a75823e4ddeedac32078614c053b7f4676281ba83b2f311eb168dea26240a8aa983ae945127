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
/** @typedef {typeof import("../util/Hash")} Hash */

/**
 * @param {string} str string to hash
 * @param {number} len max length of the hash
 * @param {string | Hash} hashFunction hash function to use
 * @returns {string} hash
 */
const getHash = (str, len, hashFunction) => {
	const hash = createHash(hashFunction);
	hash.update(str);
	const digest = /** @type {string} */ (hash.digest("hex"));
	return digest.slice(0, len);
};

/**
 * @param {string} str the string
 * @returns {string} string prefixed by an underscore if it is a number
 */
const avoidNumber = str => {
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
 * @param {string} request the request
 * @returns {string} id representation
 */
const requestToId = request =>
	request.replace(/^(\.\.?\/)+/, "").replace(/(^[.-]|[^a-zA-Z0-9_-])+/g, "_");
module.exports.requestToId = requestToId;

/**
 * @param {string} string the string
 * @param {string} delimiter separator for string and hash
 * @param {string | Hash} hashFunction hash function to use
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
 * @param {Module} module the module
 * @param {string} context context directory
 * @param {object=} associatedObjectForCache an object to which the cache will be attached
 * @returns {string} short module name
 */
const getShortModuleName = (module, context, associatedObjectForCache) => {
	const libIdent = module.libIdent({ context, associatedObjectForCache });
	if (libIdent) return avoidNumber(libIdent);
	const nameForCondition = module.nameForCondition();
	if (nameForCondition)
		return avoidNumber(
			makePathsRelative(context, nameForCondition, associatedObjectForCache)
		);
	return "";
};
module.exports.getShortModuleName = getShortModuleName;

/**
 * @param {string} shortName the short name
 * @param {Module} module the module
 * @param {string} context context directory
 * @param {string | Hash} hashFunction hash function to use
 * @param {object=} associatedObjectForCache an object to which the cache will be attached
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
module.exports.getLongModuleName = getLongModuleName;

/**
 * @param {Module} module the module
 * @param {string} context context directory
 * @param {object=} associatedObjectForCache an object to which the cache will be attached
 * @returns {string} full module name
 */
const getFullModuleName = (module, context, associatedObjectForCache) =>
	makePathsRelative(context, module.identifier(), associatedObjectForCache);
module.exports.getFullModuleName = getFullModuleName;

/**
 * @param {Chunk} chunk the chunk
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @param {string} context context directory
 * @param {string} delimiter delimiter for names
 * @param {string | Hash} hashFunction hash function to use
 * @param {object=} associatedObjectForCache an object to which the cache will be attached
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
	const shortModuleNames = modules.map(m =>
		requestToId(getShortModuleName(m, context, associatedObjectForCache))
	);
	chunk.idNameHints.sort();
	const chunkName = Array.from(chunk.idNameHints)
		.concat(shortModuleNames)
		.filter(Boolean)
		.join(delimiter);
	return shortenLongString(chunkName, delimiter, hashFunction);
};
module.exports.getShortChunkName = getShortChunkName;

/**
 * @param {Chunk} chunk the chunk
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @param {string} context context directory
 * @param {string} delimiter delimiter for names
 * @param {string | Hash} hashFunction hash function to use
 * @param {object=} associatedObjectForCache an object to which the cache will be attached
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
	const shortModuleNames = modules.map(m =>
		requestToId(getShortModuleName(m, context, associatedObjectForCache))
	);
	const longModuleNames = modules.map(m =>
		requestToId(
			getLongModuleName("", m, context, hashFunction, associatedObjectForCache)
		)
	);
	chunk.idNameHints.sort();
	const chunkName = Array.from(chunk.idNameHints)
		.concat(shortModuleNames, longModuleNames)
		.filter(Boolean)
		.join(delimiter);
	return shortenLongString(chunkName, delimiter, hashFunction);
};
module.exports.getLongChunkName = getLongChunkName;

/**
 * @param {Chunk} chunk the chunk
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @param {string} context context directory
 * @param {object=} associatedObjectForCache an object to which the cache will be attached
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
	const fullModuleNames = modules.map(m =>
		makePathsRelative(context, m.identifier(), associatedObjectForCache)
	);
	return fullModuleNames.join();
};
module.exports.getFullChunkName = getFullChunkName;

/**
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

/**
 * @param {Compilation} compilation the compilation
 * @param {function(Module): boolean=} filter filter modules
 * @returns {[Set<string>, Module[]]} used module ids as strings and modules without id matching the filter
 */
const getUsedModuleIdsAndModules = (compilation, filter) => {
	const chunkGraph = compilation.chunkGraph;

	const modules = [];

	/** @type {Set<string>} */
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
			chunkGraph.getNumberOfModuleChunks(module) !== 0
		) {
			modules.push(module);
		}
	}

	return [usedIds, modules];
};
module.exports.getUsedModuleIdsAndModules = getUsedModuleIdsAndModules;

/**
 * @param {Compilation} compilation the compilation
 * @returns {Set<string>} used chunk ids as strings
 */
const getUsedChunkIds = compilation => {
	/** @type {Set<string>} */
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
module.exports.getUsedChunkIds = getUsedChunkIds;

/**
 * @template T
 * @param {Iterable<T>} items list of items to be named
 * @param {function(T): string} getShortName get a short name for an item
 * @param {function(T, string): string} getLongName get a long name for an item
 * @param {function(T, T): -1|0|1} comparator order of items
 * @param {Set<string>} usedIds already used ids, will not be assigned
 * @param {function(T, string): void} assignName assign a name to an item
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
	/** @type {Map<string, T[]>} */
	const nameToItems = new Map();

	for (const item of items) {
		const name = getShortName(item);
		addToMapOfItems(nameToItems, name, item);
	}

	/** @type {Map<string, T[]>} */
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
module.exports.assignNames = assignNames;

/**
 * @template T
 * @param {T[]} items list of items to be named
 * @param {function(T): string} getName get a name for an item
 * @param {function(T, T): -1|0|1} comparator order of items
 * @param {function(T, number): boolean} assignId assign an id to an item
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
		let id;
		let i = salt;
		do {
			id = numberHash(ident + i++, range);
		} while (!assignId(item, id));
	}
};
module.exports.assignDeterministicIds = assignDeterministicIds;

/**
 * @param {Set<string>} usedIds used ids
 * @param {Iterable<Module>} modules the modules
 * @param {Compilation} compilation the compilation
 * @returns {void}
 */
const assignAscendingModuleIds = (usedIds, modules, compilation) => {
	const chunkGraph = compilation.chunkGraph;

	let nextId = 0;
	let assignId;
	if (usedIds.size > 0) {
		/**
		 * @param {Module} module the module
		 */
		assignId = module => {
			if (chunkGraph.getModuleId(module) === null) {
				while (usedIds.has(String(nextId))) nextId++;
				chunkGraph.setModuleId(module, nextId++);
			}
		};
	} else {
		/**
		 * @param {Module} module the module
		 */
		assignId = module => {
			if (chunkGraph.getModuleId(module) === null) {
				chunkGraph.setModuleId(module, nextId++);
			}
		};
	}
	for (const module of modules) {
		assignId(module);
	}
};
module.exports.assignAscendingModuleIds = assignAscendingModuleIds;

/**
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

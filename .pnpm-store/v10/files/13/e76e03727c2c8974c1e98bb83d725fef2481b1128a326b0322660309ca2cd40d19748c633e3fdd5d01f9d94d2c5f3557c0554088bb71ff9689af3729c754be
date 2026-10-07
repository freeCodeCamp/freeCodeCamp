/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { getFullModuleName } = require("../ids/IdHelpers");
const { compareRuntime } = require("./runtime");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Chunk").ChunkName} ChunkName */
/** @typedef {import("../Chunk").ChunkId} ChunkId */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../ChunkGraph").ModuleId} ModuleId */
/** @typedef {import("../ChunkGroup")} ChunkGroup */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../dependencies/HarmonyImportSideEffectDependency")} HarmonyImportSideEffectDependency */
/** @typedef {import("../dependencies/HarmonyImportSpecifierDependency")} HarmonyImportSpecifierDependency */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../dependencies/ModuleDependency")} ModuleDependency */

/**
 * Defines the dependency source order type used by this module.
 * @typedef {object} DependencySourceOrder
 * @property {number} main the main source order
 * @property {number} sub the sub source order
 */

/**
 * Defines the comparator type used by this module.
 * @template T
 * @typedef {(a: T, b: T) => -1 | 0 | 1} Comparator
 */
/**
 * Defines the raw parameterized comparator type used by this module.
 * @template {object} TArg
 * @template T
 * @typedef {(tArg: TArg, a: T, b: T) => -1 | 0 | 1} RawParameterizedComparator
 */
/**
 * Defines the parameterized comparator type used by this module.
 * @template {object} TArg
 * @template T
 * @typedef {(tArg: TArg) => Comparator<T>} ParameterizedComparator
 */

/**
 * Creates a cached parameterized comparator.
 * @template {object} TArg
 * @template {object} T
 * @param {RawParameterizedComparator<TArg, T>} fn comparator with argument
 * @returns {ParameterizedComparator<TArg, T>} comparator
 */
const createCachedParameterizedComparator = (fn) => {
	/** @type {WeakMap<EXPECTED_OBJECT, Comparator<T>>} */
	const map = new WeakMap();
	return (arg) => {
		const cachedResult = map.get(/** @type {EXPECTED_OBJECT} */ (arg));
		if (cachedResult !== undefined) return cachedResult;
		/**
		 * Returns compare result.
		 * @param {T} a first item
		 * @param {T} b second item
		 * @returns {-1 | 0 | 1} compare result
		 */
		const result = fn.bind(null, arg);
		map.set(/** @type {EXPECTED_OBJECT} */ (arg), result);
		return result;
	};
};

/**
 * Compares the provided values and returns their ordering.
 * @param {string | number} a first id
 * @param {string | number} b second id
 * @returns {-1 | 0 | 1} compare result
 */
const compareIds = (a, b) => {
	if (typeof a !== typeof b) {
		return typeof a < typeof b ? -1 : 1;
	}
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
};

/**
 * Compares iterables.
 * @template T
 * @param {Comparator<T>} elementComparator comparator for elements
 * @returns {Comparator<Iterable<T>>} comparator for iterables of elements
 */
const compareIterables = (elementComparator) => {
	const cacheEntry = compareIteratorsCache.get(elementComparator);
	if (cacheEntry !== undefined) return cacheEntry;
	/**
	 * Returns compare result.
	 * @param {Iterable<T>} a first value
	 * @param {Iterable<T>} b second value
	 * @returns {-1 | 0 | 1} compare result
	 */
	const result = (a, b) => {
		const aI = a[Symbol.iterator]();
		const bI = b[Symbol.iterator]();
		while (true) {
			const aItem = aI.next();
			const bItem = bI.next();
			if (aItem.done) {
				return bItem.done ? 0 : -1;
			} else if (bItem.done) {
				return 1;
			}
			const res = elementComparator(aItem.value, bItem.value);
			if (res !== 0) return res;
		}
	};
	compareIteratorsCache.set(elementComparator, result);
	return result;
};

/**
 * Compare two locations
 * @param {DependencyLocation} a A location node
 * @param {DependencyLocation} b A location node
 * @returns {-1 | 0 | 1} sorting comparator value
 */
const compareLocations = (a, b) => {
	const isObjectA = typeof a === "object" && a !== null;
	const isObjectB = typeof b === "object" && b !== null;
	if (!isObjectA || !isObjectB) {
		if (isObjectA) return 1;
		if (isObjectB) return -1;
		return 0;
	}
	if ("start" in a) {
		if ("start" in b) {
			const ap = a.start;
			const bp = b.start;
			if (ap.line < bp.line) return -1;
			if (ap.line > bp.line) return 1;
			if (
				/** @type {number} */ (ap.column) < /** @type {number} */ (bp.column)
			) {
				return -1;
			}
			if (
				/** @type {number} */ (ap.column) > /** @type {number} */ (bp.column)
			) {
				return 1;
			}
		} else {
			return -1;
		}
	} else if ("start" in b) {
		return 1;
	}
	if ("name" in a) {
		if ("name" in b) {
			if (a.name < b.name) return -1;
			if (a.name > b.name) return 1;
		} else {
			return -1;
		}
	} else if ("name" in b) {
		return 1;
	}
	if ("index" in a) {
		if ("index" in b) {
			if (/** @type {number} */ (a.index) < /** @type {number} */ (b.index)) {
				return -1;
			}
			if (/** @type {number} */ (a.index) > /** @type {number} */ (b.index)) {
				return 1;
			}
		} else {
			return -1;
		}
	} else if ("index" in b) {
		return 1;
	}
	return 0;
};

/**
 * Compares modules by id.
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @param {Module} a module
 * @param {Module} b module
 * @returns {-1 | 0 | 1} compare result
 */
const compareModulesById = (chunkGraph, a, b) =>
	compareIds(
		/** @type {ModuleId} */ (chunkGraph.getModuleId(a)),
		/** @type {ModuleId} */ (chunkGraph.getModuleId(b))
	);

/**
 * Compares the provided values and returns their ordering.
 * @param {number} a number
 * @param {number} b number
 * @returns {-1 | 0 | 1} compare result
 */
const compareNumbers = (a, b) => {
	if (typeof a !== typeof b) {
		return typeof a < typeof b ? -1 : 1;
	}
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
};

/**
 * Compares strings numeric.
 * @param {string} a string
 * @param {string} b string
 * @returns {-1 | 0 | 1} compare result
 */
const compareStringsNumeric = (a, b) => {
	const aLength = a.length;
	const bLength = b.length;

	let aChar = 0;
	let bChar = 0;

	let aIsDigit = false;
	let bIsDigit = false;
	let i = 0;
	let j = 0;
	while (i < aLength && j < bLength) {
		aChar = a.charCodeAt(i);
		bChar = b.charCodeAt(j);

		aIsDigit = aChar >= 48 && aChar <= 57;
		bIsDigit = bChar >= 48 && bChar <= 57;

		if (!aIsDigit && !bIsDigit) {
			if (aChar < bChar) return -1;
			if (aChar > bChar) return 1;
			i++;
			j++;
		} else if (aIsDigit && !bIsDigit) {
			// This segment of a is shorter than in b
			return 1;
		} else if (!aIsDigit && bIsDigit) {
			// This segment of b is shorter than in a
			return -1;
		} else {
			let aNumber = aChar - 48;
			let bNumber = bChar - 48;

			while (++i < aLength) {
				aChar = a.charCodeAt(i);
				if (aChar < 48 || aChar > 57) break;
				aNumber = aNumber * 10 + aChar - 48;
			}

			while (++j < bLength) {
				bChar = b.charCodeAt(j);
				if (bChar < 48 || bChar > 57) break;
				bNumber = bNumber * 10 + bChar - 48;
			}

			if (aNumber < bNumber) return -1;
			if (aNumber > bNumber) return 1;
		}
	}

	if (j < bLength) {
		// a is shorter than b
		bChar = b.charCodeAt(j);
		bIsDigit = bChar >= 48 && bChar <= 57;
		return bIsDigit ? -1 : 1;
	}
	if (i < aLength) {
		// b is shorter than a
		aChar = a.charCodeAt(i);
		aIsDigit = aChar >= 48 && aChar <= 57;
		return aIsDigit ? 1 : -1;
	}

	return 0;
};

/**
 * Compares modules by post order index or identifier.
 * @param {ModuleGraph} moduleGraph the module graph
 * @param {Module} a module
 * @param {Module} b module
 * @returns {-1 | 0 | 1} compare result
 */
const compareModulesByPostOrderIndexOrIdentifier = (moduleGraph, a, b) => {
	const cmp = compareNumbers(
		/** @type {number} */ (moduleGraph.getPostOrderIndex(a)),
		/** @type {number} */ (moduleGraph.getPostOrderIndex(b))
	);
	if (cmp !== 0) return cmp;
	return compareIds(a.identifier(), b.identifier());
};

/**
 * Compares modules by pre order index or identifier.
 * @param {ModuleGraph} moduleGraph the module graph
 * @param {Module} a module
 * @param {Module} b module
 * @returns {-1 | 0 | 1} compare result
 */
const compareModulesByPreOrderIndexOrIdentifier = (moduleGraph, a, b) => {
	const cmp = compareNumbers(
		/** @type {number} */ (moduleGraph.getPreOrderIndex(a)),
		/** @type {number} */ (moduleGraph.getPreOrderIndex(b))
	);
	if (cmp !== 0) return cmp;
	return compareIds(a.identifier(), b.identifier());
};

/**
 * Compares modules by id or identifier.
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @param {Module} a module
 * @param {Module} b module
 * @returns {-1 | 0 | 1} compare result
 */
const compareModulesByIdOrIdentifier = (chunkGraph, a, b) => {
	const cmp = compareIds(
		/** @type {ModuleId} */ (chunkGraph.getModuleId(a)),
		/** @type {ModuleId} */ (chunkGraph.getModuleId(b))
	);
	if (cmp !== 0) return cmp;
	return compareIds(a.identifier(), b.identifier());
};

/**
 * Compare modules by their full name. This differs from comparing by identifier in that the values have been normalized to be relative to the compiler context.
 * @param {{ context: string, root: object }} compiler the compiler, used for context and cache
 * @param {Module} a module
 * @param {Module} b module
 * @returns {-1 | 0 | 1} compare result
 */
const compareModulesByFullName = (compiler, a, b) => {
	const aName = getFullModuleName(a, compiler.context, compiler.root);
	const bName = getFullModuleName(b, compiler.context, compiler.root);
	return compareIds(aName, bName);
};

/**
 * Compares the provided values and returns their ordering.
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @param {Chunk} a chunk
 * @param {Chunk} b chunk
 * @returns {-1 | 0 | 1} compare result
 */
const compareChunks = (chunkGraph, a, b) => chunkGraph.compareChunks(a, b);

/**
 * Compares the provided values and returns their ordering.
 * @param {string} a first string
 * @param {string} b second string
 * @returns {-1 | 0 | 1} compare result
 */
const compareStrings = (a, b) => {
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
};

/**
 * Compares chunk groups by index.
 * @param {ChunkGroup} a first chunk group
 * @param {ChunkGroup} b second chunk group
 * @returns {-1 | 0 | 1} compare result
 */
const compareChunkGroupsByIndex = (a, b) =>
	/** @type {number} */ (a.index) < /** @type {number} */ (b.index) ? -1 : 1;

/**
 * Represents TwoKeyWeakMap.
 * @template {EXPECTED_OBJECT} K1
 * @template {EXPECTED_OBJECT} K2
 * @template T
 */
class TwoKeyWeakMap {
	constructor() {
		/**
		 * @private
		 * @type {WeakMap<K1, WeakMap<K2, T | undefined>>}
		 */
		this._map = new WeakMap();
	}

	/**
	 * Returns value.
	 * @param {K1} key1 first key
	 * @param {K2} key2 second key
	 * @returns {T | undefined} value
	 */
	get(key1, key2) {
		const childMap = this._map.get(key1);
		if (childMap === undefined) {
			return;
		}
		return childMap.get(key2);
	}

	/**
	 * Updates value using the provided key1.
	 * @param {K1} key1 first key
	 * @param {K2} key2 second key
	 * @param {T | undefined} value new value
	 * @returns {void}
	 */
	set(key1, key2, value) {
		let childMap = this._map.get(key1);
		if (childMap === undefined) {
			childMap = new WeakMap();
			this._map.set(key1, childMap);
		}
		childMap.set(key2, value);
	}
}

/** @type {TwoKeyWeakMap<Comparator<EXPECTED_ANY>, Comparator<EXPECTED_ANY>, Comparator<EXPECTED_ANY>>}} */
const concatComparatorsCache = new TwoKeyWeakMap();

/**
 * Concat comparators.
 * @template T
 * @param {Comparator<T>} c1 comparator
 * @param {Comparator<T>} c2 comparator
 * @param {Comparator<T>[]} cRest comparators
 * @returns {Comparator<T>} comparator
 */
const concatComparators = (c1, c2, ...cRest) => {
	if (cRest.length > 0) {
		const [c3, ...cRest2] = cRest;
		return concatComparators(c1, concatComparators(c2, c3, ...cRest2));
	}
	const cacheEntry = /** @type {Comparator<T>} */ (
		concatComparatorsCache.get(c1, c2)
	);
	if (cacheEntry !== undefined) return cacheEntry;
	/**
	 * Returns compare result.
	 * @param {T} a first value
	 * @param {T} b second value
	 * @returns {-1 | 0 | 1} compare result
	 */
	const result = (a, b) => {
		const res = c1(a, b);
		if (res !== 0) return res;
		return c2(a, b);
	};
	concatComparatorsCache.set(c1, c2, result);
	return result;
};

/**
 * Defines the selector type used by this module.
 * @template A, B
 * @typedef {(input: A) => B | undefined | null} Selector
 */

/** @type {TwoKeyWeakMap<Selector<EXPECTED_ANY, EXPECTED_ANY>, Comparator<EXPECTED_ANY>, Comparator<EXPECTED_ANY>>}} */
const compareSelectCache = new TwoKeyWeakMap();

/**
 * Compares the provided values and returns their ordering.
 * @template T
 * @template R
 * @param {Selector<T, R>} getter getter for value
 * @param {Comparator<R>} comparator comparator
 * @returns {Comparator<T>} comparator
 */
const compareSelect = (getter, comparator) => {
	const cacheEntry = compareSelectCache.get(getter, comparator);
	if (cacheEntry !== undefined) return cacheEntry;
	/**
	 * Returns compare result.
	 * @param {T} a first value
	 * @param {T} b second value
	 * @returns {-1 | 0 | 1} compare result
	 */
	const result = (a, b) => {
		const aValue = getter(a);
		const bValue = getter(b);
		if (aValue !== undefined && aValue !== null) {
			if (bValue !== undefined && bValue !== null) {
				return comparator(aValue, bValue);
			}
			return -1;
		}
		if (bValue !== undefined && bValue !== null) {
			return 1;
		}
		return 0;
	};
	compareSelectCache.set(getter, comparator, result);
	return result;
};

/** @type {WeakMap<Comparator<EXPECTED_ANY>, Comparator<Iterable<EXPECTED_ANY>>>} */
const compareIteratorsCache = new WeakMap();

// TODO this is no longer needed when minimum node.js version is >= 12
// since these versions ship with a stable sort function
/**
 * Keep original order.
 * @template T
 * @param {Iterable<T>} iterable original ordered list
 * @returns {Comparator<T>} comparator
 */
const keepOriginalOrder = (iterable) => {
	/** @type {Map<T, number>} */
	const map = new Map();
	let i = 0;
	for (const item of iterable) {
		map.set(item, i++);
	}
	return (a, b) =>
		compareNumbers(
			/** @type {number} */ (map.get(a)),
			/** @type {number} */ (map.get(b))
		);
};

/**
 * Compares chunks natural.
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @returns {Comparator<Chunk>} comparator
 */
const compareChunksNatural = (chunkGraph) => {
	const cmpFn = module.exports.compareModulesById(chunkGraph);
	const cmpIterableFn = compareIterables(cmpFn);
	return concatComparators(
		compareSelect((chunk) => /** @type {ChunkName} */ (chunk.name), compareIds),
		compareSelect((chunk) => chunk.runtime, compareRuntime),
		compareSelect(
			/**
			 * Handles the callback logic for this hook.
			 * @param {Chunk} chunk a chunk
			 * @returns {Iterable<Module>} modules
			 */
			(chunk) => chunkGraph.getOrderedChunkModulesIterable(chunk, cmpFn),
			cmpIterableFn
		)
	);
};

/**
 * For HarmonyImportSideEffectDependency and HarmonyImportSpecifierDependency, we should prioritize import order to match the behavior of running modules directly in a JS engine without a bundler.
 * For other types like ConstDependency, we can instead prioritize usage order.
 * https://github.com/webpack/webpack/pull/19686
 * @param {Dependency[]} dependencies dependencies
 * @param {WeakMap<Dependency, DependencySourceOrder>} dependencySourceOrderMap dependency source order map
 * @param {((dep: Dependency, index: number) => void)=} onDependencyReSort optional callback to set index for each dependency
 * @returns {void}
 */
const sortWithSourceOrder = (
	dependencies,
	dependencySourceOrderMap,
	onDependencyReSort
) => {
	/** @type {{ dep: Dependency, main: number, sub: number }[]} */
	const withSourceOrder = [];
	/** @type {number[]} */
	const positions = [];

	for (let i = 0; i < dependencies.length; i++) {
		const dep = dependencies[i];
		const cached = dependencySourceOrderMap.get(dep);

		if (cached) {
			positions.push(i);
			withSourceOrder.push({
				dep,
				main: cached.main,
				sub: cached.sub
			});
		} else {
			const sourceOrder = /** @type {number | undefined} */ (
				/** @type {ModuleDependency} */ (dep).sourceOrder
			);
			if (typeof sourceOrder === "number") {
				positions.push(i);
				withSourceOrder.push({
					dep,
					main: sourceOrder,
					sub: 0
				});
			}
		}
	}

	if (withSourceOrder.length <= 1) {
		return;
	}

	withSourceOrder.sort((a, b) => {
		if (a.main !== b.main) {
			return compareNumbers(a.main, b.main);
		}
		return compareNumbers(a.sub, b.sub);
	});

	// Second pass: place sorted deps back to original positions
	for (let i = 0; i < positions.length; i++) {
		const depIndex = positions[i];
		dependencies[depIndex] = withSourceOrder[i].dep;
		if (onDependencyReSort) {
			onDependencyReSort(dependencies[depIndex], depIndex);
		}
	}
};

module.exports.compareChunkGroupsByIndex = compareChunkGroupsByIndex;
/** @type {ParameterizedComparator<ChunkGraph, Chunk>} */
module.exports.compareChunks =
	createCachedParameterizedComparator(compareChunks);
/**
 * Returns compare result.
 * @param {Chunk} a chunk
 * @param {Chunk} b chunk
 * @returns {-1 | 0 | 1} compare result
 */
module.exports.compareChunksById = (a, b) =>
	compareIds(/** @type {ChunkId} */ (a.id), /** @type {ChunkId} */ (b.id));
module.exports.compareChunksNatural = compareChunksNatural;

module.exports.compareIds = compareIds;

module.exports.compareIterables = compareIterables;

module.exports.compareLocations = compareLocations;

/** @type {ParameterizedComparator<Compiler, Module>} */
module.exports.compareModulesByFullName = createCachedParameterizedComparator(
	compareModulesByFullName
);

/** @type {ParameterizedComparator<ChunkGraph, Module>} */
module.exports.compareModulesById =
	createCachedParameterizedComparator(compareModulesById);
/** @type {ParameterizedComparator<ChunkGraph, Module>} */
module.exports.compareModulesByIdOrIdentifier =
	createCachedParameterizedComparator(compareModulesByIdOrIdentifier);
/**
 * Returns compare result.
 * @param {Module} a module
 * @param {Module} b module
 * @returns {-1 | 0 | 1} compare result
 */
module.exports.compareModulesByIdentifier = (a, b) =>
	compareIds(a.identifier(), b.identifier());
/** @type {ParameterizedComparator<ModuleGraph, Module>} */
module.exports.compareModulesByPostOrderIndexOrIdentifier =
	createCachedParameterizedComparator(
		compareModulesByPostOrderIndexOrIdentifier
	);
/** @type {ParameterizedComparator<ModuleGraph, Module>} */
module.exports.compareModulesByPreOrderIndexOrIdentifier =
	createCachedParameterizedComparator(
		compareModulesByPreOrderIndexOrIdentifier
	);

module.exports.compareNumbers = compareNumbers;
module.exports.compareSelect = compareSelect;
module.exports.compareStrings = compareStrings;
module.exports.compareStringsNumeric = compareStringsNumeric;

module.exports.concatComparators = concatComparators;

module.exports.keepOriginalOrder = keepOriginalOrder;
module.exports.sortWithSourceOrder = sortWithSourceOrder;

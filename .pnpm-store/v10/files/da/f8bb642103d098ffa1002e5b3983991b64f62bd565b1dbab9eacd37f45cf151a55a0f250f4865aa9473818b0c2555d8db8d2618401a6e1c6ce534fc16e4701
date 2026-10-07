/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const SortableSet = require("./SortableSet");

/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Entrypoint").EntryOptions} EntryOptions */

/** @typedef {SortableSet<string>} RuntimeSpecSortableSet */
/** @typedef {string | RuntimeSpecSortableSet | undefined} RuntimeSpec */
/** @typedef {RuntimeSpec | boolean} RuntimeCondition */

/**
 * Gets entry runtime.
 * @param {Compilation} compilation the compilation
 * @param {string} name name of the entry
 * @param {EntryOptions=} options optionally already received entry options
 * @returns {RuntimeSpec} runtime
 */
const getEntryRuntime = (compilation, name, options) => {
	/** @type {EntryOptions["dependOn"]} */
	let dependOn;
	/** @type {EntryOptions["runtime"]} */
	let runtime;
	if (options) {
		({ dependOn, runtime } = options);
	} else {
		const entry = compilation.entries.get(name);
		if (!entry) return name;
		({ dependOn, runtime } = entry.options);
	}
	if (dependOn) {
		/** @type {RuntimeSpec} */
		let result;
		const queue = new Set(dependOn);
		for (const name of queue) {
			const dep = compilation.entries.get(name);
			if (!dep) continue;
			const { dependOn, runtime } = dep.options;
			if (dependOn) {
				for (const name of dependOn) {
					queue.add(name);
				}
			} else {
				result = mergeRuntimeOwned(result, runtime || name);
			}
		}
		return result || name;
	}
	return runtime || name;
};

/**
 * Processes the provided runtime.
 * @param {RuntimeSpec} runtime runtime
 * @param {(runtime: string | undefined) => void} fn functor
 * @param {boolean} deterministicOrder enforce a deterministic order
 * @returns {void}
 */
const forEachRuntime = (runtime, fn, deterministicOrder = false) => {
	if (runtime === undefined) {
		fn(undefined);
	} else if (typeof runtime === "string") {
		fn(runtime);
	} else {
		if (deterministicOrder) runtime.sort();
		for (const r of runtime) {
			fn(r);
		}
	}
};

/**
 * Returns runtime key.
 * @template T
 * @param {Exclude<RuntimeSpec, undefined | string>} set set
 * @returns {string} runtime key
 */
const getRuntimesKey = (set) => {
	set.sort();
	return [...set].join("\n");
};

/**
 * Returns key of runtimes.
 * @param {RuntimeSpec} runtime runtime(s)
 * @returns {string} key of runtimes
 */
const getRuntimeKey = (runtime) => {
	if (runtime === undefined) return "*";
	if (typeof runtime === "string") return runtime;
	return runtime.getFromUnorderedCache(getRuntimesKey);
};

/**
 * Returns runtime(s).
 * @param {string} key key of runtimes
 * @returns {RuntimeSpec} runtime(s)
 */
const keyToRuntime = (key) => {
	if (key === "*") return;
	const items = key.split("\n");
	if (items.length === 1) return items[0];
	return new SortableSet(items);
};

/**
 * Gets runtimes string.
 * @template T
 * @param {Exclude<RuntimeSpec, undefined | string>} set set
 * @returns {string} runtime string
 */
const getRuntimesString = (set) => {
	set.sort();
	return [...set].join("+");
};

/**
 * Returns readable version.
 * @param {RuntimeSpec} runtime runtime(s)
 * @returns {string} readable version
 */
const runtimeToString = (runtime) => {
	if (runtime === undefined) return "*";
	if (typeof runtime === "string") return runtime;
	return runtime.getFromUnorderedCache(getRuntimesString);
};

/**
 * Runtime condition to string.
 * @param {RuntimeCondition} runtimeCondition runtime condition
 * @returns {string} readable version
 */
const runtimeConditionToString = (runtimeCondition) => {
	if (runtimeCondition === true) return "true";
	if (runtimeCondition === false) return "false";
	return runtimeToString(runtimeCondition);
};

/**
 * Returns true, when they are equal.
 * @param {RuntimeSpec} a first
 * @param {RuntimeSpec} b second
 * @returns {boolean} true, when they are equal
 */
const runtimeEqual = (a, b) => {
	if (a === b) {
		return true;
	} else if (
		a === undefined ||
		b === undefined ||
		typeof a === "string" ||
		typeof b === "string"
	) {
		return false;
	} else if (a.size !== b.size) {
		return false;
	}
	a.sort();
	b.sort();
	const aIt = a[Symbol.iterator]();
	const bIt = b[Symbol.iterator]();
	for (;;) {
		const aV = aIt.next();
		if (aV.done) return true;
		const bV = bIt.next();
		if (aV.value !== bV.value) return false;
	}
};

/**
 * Compares the provided values and returns their ordering.
 * @param {RuntimeSpec} a first
 * @param {RuntimeSpec} b second
 * @returns {-1 | 0 | 1} compare
 */
const compareRuntime = (a, b) => {
	if (a === b) {
		return 0;
	} else if (a === undefined) {
		return -1;
	} else if (b === undefined) {
		return 1;
	}
	const aKey = getRuntimeKey(a);
	const bKey = getRuntimeKey(b);
	if (aKey < bKey) return -1;
	if (aKey > bKey) return 1;
	return 0;
};

/**
 * Merges the provided values into a single result.
 * @param {RuntimeSpec} a first
 * @param {RuntimeSpec} b second
 * @returns {RuntimeSpec} merged
 */
const mergeRuntime = (a, b) => {
	if (a === undefined) {
		return b;
	} else if (b === undefined) {
		return a;
	} else if (a === b) {
		return a;
	} else if (typeof a === "string") {
		if (typeof b === "string") {
			/** @type {RuntimeSpecSortableSet} */
			const set = new SortableSet();
			set.add(a);
			set.add(b);
			return set;
		} else if (b.has(a)) {
			return b;
		}
		/** @type {RuntimeSpecSortableSet} */
		const set = new SortableSet(b);
		set.add(a);
		return set;
	}
	if (typeof b === "string") {
		if (a.has(b)) return a;
		/** @type {RuntimeSpecSortableSet} */
		const set = new SortableSet(a);
		set.add(b);
		return set;
	}
	/** @type {RuntimeSpecSortableSet} */
	const set = new SortableSet(a);
	for (const item of b) set.add(item);
	if (set.size === a.size) return a;
	return set;
};

/**
 * Merges runtime condition.
 * @param {RuntimeCondition} a first
 * @param {RuntimeCondition} b second
 * @param {RuntimeSpec} runtime full runtime
 * @returns {RuntimeCondition} result
 */
const mergeRuntimeCondition = (a, b, runtime) => {
	if (a === false) return b;
	if (b === false) return a;
	if (a === true || b === true) return true;
	const merged = mergeRuntime(a, b);
	if (merged === undefined) return;
	if (typeof merged === "string") {
		if (typeof runtime === "string" && merged === runtime) return true;
		return merged;
	}
	if (typeof runtime === "string" || runtime === undefined) return merged;
	if (merged.size === runtime.size) return true;
	return merged;
};

/**
 * Merges runtime condition non false.
 * @param {RuntimeSpec | true} a first
 * @param {RuntimeSpec | true} b second
 * @param {RuntimeSpec} runtime full runtime
 * @returns {RuntimeSpec | true} result
 */
const mergeRuntimeConditionNonFalse = (a, b, runtime) => {
	if (a === true || b === true) return true;
	const merged = mergeRuntime(a, b);
	if (merged === undefined) return;
	if (typeof merged === "string") {
		if (typeof runtime === "string" && merged === runtime) return true;
		return merged;
	}
	if (typeof runtime === "string" || runtime === undefined) return merged;
	if (merged.size === runtime.size) return true;
	return merged;
};

/**
 * Merges runtime owned.
 * @param {RuntimeSpec} a first (may be modified)
 * @param {RuntimeSpec} b second
 * @returns {RuntimeSpec} merged
 */
const mergeRuntimeOwned = (a, b) => {
	if (b === undefined) {
		return a;
	} else if (a === b) {
		return a;
	} else if (a === undefined) {
		if (typeof b === "string") {
			return b;
		}
		/** @type {RuntimeSpecSortableSet} */
		return new SortableSet(b);
	} else if (typeof a === "string") {
		if (typeof b === "string") {
			/** @type {RuntimeSpecSortableSet} */
			const set = new SortableSet();
			set.add(a);
			set.add(b);
			return set;
		}
		/** @type {RuntimeSpecSortableSet} */
		const set = new SortableSet(b);
		set.add(a);
		return set;
	}
	if (typeof b === "string") {
		a.add(b);
		return a;
	}
	for (const item of b) a.add(item);
	return a;
};

/**
 * Returns merged.
 * @param {RuntimeSpec} a first
 * @param {RuntimeSpec} b second
 * @returns {RuntimeSpec} merged
 */
const intersectRuntime = (a, b) => {
	if (a === undefined) {
		return b;
	} else if (b === undefined) {
		return a;
	} else if (a === b) {
		return a;
	} else if (typeof a === "string") {
		if (typeof b === "string") {
			return;
		} else if (b.has(a)) {
			return a;
		}
		return;
	}
	if (typeof b === "string") {
		if (a.has(b)) return b;
		return;
	}
	/** @type {RuntimeSpecSortableSet} */
	const set = new SortableSet();
	for (const item of b) {
		if (a.has(item)) set.add(item);
	}
	if (set.size === 0) return;
	if (set.size === 1) {
		const [item] = set;
		return item;
	}
	return set;
};

/**
 * Returns result.
 * @param {RuntimeSpec} a first
 * @param {RuntimeSpec} b second
 * @returns {RuntimeSpec} result
 */
const subtractRuntime = (a, b) => {
	if (a === undefined) {
		return;
	} else if (b === undefined) {
		return a;
	} else if (a === b) {
		return;
	} else if (typeof a === "string") {
		if (typeof b === "string") {
			return a;
		} else if (b.has(a)) {
			return;
		}
		return a;
	}
	if (typeof b === "string") {
		if (!a.has(b)) return a;
		if (a.size === 2) {
			for (const item of a) {
				if (item !== b) return item;
			}
		}
		/** @type {RuntimeSpecSortableSet} */
		const set = new SortableSet(a);
		set.delete(b);
		return set;
	}
	/** @type {RuntimeSpecSortableSet} */
	const set = new SortableSet();
	for (const item of a) {
		if (!b.has(item)) set.add(item);
	}
	if (set.size === 0) return;
	if (set.size === 1) {
		const [item] = set;
		return item;
	}
	return set;
};

/**
 * Subtract runtime condition.
 * @param {RuntimeCondition} a first
 * @param {RuntimeCondition} b second
 * @param {RuntimeSpec} runtime runtime
 * @returns {RuntimeCondition} result
 */
const subtractRuntimeCondition = (a, b, runtime) => {
	if (b === true) return false;
	if (b === false) return a;
	if (a === false) return false;
	const result = subtractRuntime(a === true ? runtime : a, b);
	return result === undefined ? false : result;
};

/**
 * Returns true/false if filter is constant for all runtimes, otherwise runtimes that are active.
 * @param {RuntimeSpec} runtime runtime
 * @param {(runtime?: RuntimeSpec) => boolean} filter filter function
 * @returns {boolean | RuntimeSpec} true/false if filter is constant for all runtimes, otherwise runtimes that are active
 */
const filterRuntime = (runtime, filter) => {
	if (runtime === undefined) return filter();
	if (typeof runtime === "string") return filter(runtime);
	let some = false;
	let every = true;
	/** @type {RuntimeSpec} */
	let result;
	for (const r of runtime) {
		const v = filter(r);
		if (v) {
			some = true;
			result = mergeRuntimeOwned(result, r);
		} else {
			every = false;
		}
	}
	if (!some) return false;
	if (every) return true;
	return result;
};

/**
 * Defines the runtime spec map inner map type used by this module.
 * @template T
 * @typedef {Map<string, T>} RuntimeSpecMapInnerMap
 */

/**
 * Represents RuntimeSpecMap.
 * @template T
 * @template [R=T]
 */
class RuntimeSpecMap {
	/**
	 * Creates an instance of RuntimeSpecMap.
	 * @param {RuntimeSpecMap<T, R>=} clone copy form this
	 */
	constructor(clone) {
		/** @type {0 | 1 | 2} */
		this._mode = clone ? clone._mode : 0; // 0 = empty, 1 = single entry, 2 = map
		/** @type {RuntimeSpec} */
		this._singleRuntime = clone ? clone._singleRuntime : undefined;
		/** @type {R | undefined} */
		this._singleValue = clone ? clone._singleValue : undefined;
		/** @type {RuntimeSpecMapInnerMap<R> | undefined} */
		this._map = clone && clone._map ? new Map(clone._map) : undefined;
	}

	/**
	 * Returns value.
	 * @param {RuntimeSpec} runtime the runtimes
	 * @returns {R | undefined} value
	 */
	get(runtime) {
		switch (this._mode) {
			case 0:
				return;
			case 1:
				return runtimeEqual(this._singleRuntime, runtime)
					? this._singleValue
					: undefined;
			default:
				return /** @type {RuntimeSpecMapInnerMap<R>} */ (this._map).get(
					getRuntimeKey(runtime)
				);
		}
	}

	/**
	 * Returns true, when the runtime is stored.
	 * @param {RuntimeSpec} runtime the runtimes
	 * @returns {boolean} true, when the runtime is stored
	 */
	has(runtime) {
		switch (this._mode) {
			case 0:
				return false;
			case 1:
				return runtimeEqual(this._singleRuntime, runtime);
			default:
				return /** @type {RuntimeSpecMapInnerMap<R>} */ (this._map).has(
					getRuntimeKey(runtime)
				);
		}
	}

	/**
	 * Updates default using the provided runtime.
	 * @param {RuntimeSpec} runtime the runtimes
	 * @param {R} value the value
	 */
	set(runtime, value) {
		switch (this._mode) {
			case 0:
				this._mode = 1;
				this._singleRuntime = runtime;
				this._singleValue = value;
				break;
			case 1:
				if (runtimeEqual(this._singleRuntime, runtime)) {
					this._singleValue = value;
					break;
				}
				this._mode = 2;
				this._map = new Map();
				this._map.set(
					getRuntimeKey(this._singleRuntime),
					/** @type {R} */ (this._singleValue)
				);
				this._singleRuntime = undefined;
				this._singleValue = undefined;
			/* falls through */
			default:
				/** @type {RuntimeSpecMapInnerMap<R>} */
				(this._map).set(getRuntimeKey(runtime), value);
		}
	}

	/**
	 * Returns the new value.
	 * @param {RuntimeSpec} runtime the runtimes
	 * @param {() => R} computer function to compute the value
	 * @returns {R} the new value
	 */
	provide(runtime, computer) {
		switch (this._mode) {
			case 0:
				this._mode = 1;
				this._singleRuntime = runtime;
				return (this._singleValue = computer());
			case 1: {
				if (runtimeEqual(this._singleRuntime, runtime)) {
					return /** @type {R} */ (this._singleValue);
				}
				this._mode = 2;
				this._map = new Map();
				this._map.set(
					getRuntimeKey(this._singleRuntime),
					/** @type {R} */
					(this._singleValue)
				);
				this._singleRuntime = undefined;
				this._singleValue = undefined;
				const newValue = computer();
				this._map.set(getRuntimeKey(runtime), newValue);
				return newValue;
			}
			default: {
				const key = getRuntimeKey(runtime);
				const value =
					/** @type {RuntimeSpecMapInnerMap<R>} */
					(this._map).get(key);
				if (value !== undefined) return value;
				const newValue = computer();
				/** @type {RuntimeSpecMapInnerMap<R>} */
				(this._map).set(key, newValue);
				return newValue;
			}
		}
	}

	/**
	 * Processes the provided runtime.
	 * @param {RuntimeSpec} runtime the runtimes
	 */
	delete(runtime) {
		switch (this._mode) {
			case 0:
				return;
			case 1:
				if (runtimeEqual(this._singleRuntime, runtime)) {
					this._mode = 0;
					this._singleRuntime = undefined;
					this._singleValue = undefined;
				}
				return;
			default:
				/** @type {RuntimeSpecMapInnerMap<R>} */
				(this._map).delete(getRuntimeKey(runtime));
		}
	}

	/**
	 * Processes the provided runtime.
	 * @param {RuntimeSpec} runtime the runtimes
	 * @param {(value: R | undefined) => R} fn function to update the value
	 */
	update(runtime, fn) {
		switch (this._mode) {
			case 0:
				throw new Error("runtime passed to update must exist");
			case 1: {
				if (runtimeEqual(this._singleRuntime, runtime)) {
					this._singleValue = fn(this._singleValue);
					break;
				}
				const newValue = fn(undefined);
				if (newValue !== undefined) {
					this._mode = 2;
					this._map = new Map();
					this._map.set(
						getRuntimeKey(this._singleRuntime),
						/** @type {R} */
						(this._singleValue)
					);
					this._singleRuntime = undefined;
					this._singleValue = undefined;
					this._map.set(getRuntimeKey(runtime), newValue);
				}
				break;
			}
			default: {
				const key = getRuntimeKey(runtime);
				const oldValue =
					/** @type {RuntimeSpecMapInnerMap<R>} */
					(this._map).get(key);
				const newValue = fn(oldValue);
				if (newValue !== oldValue) {
					/** @type {RuntimeSpecMapInnerMap<R>} */
					(this._map).set(key, newValue);
				}
			}
		}
	}

	keys() {
		switch (this._mode) {
			case 0:
				return [];
			case 1:
				return [this._singleRuntime];
			default:
				return Array.from(
					/** @type {RuntimeSpecMapInnerMap<R>} */
					(this._map).keys(),
					keyToRuntime
				);
		}
	}

	/**
	 * Returns values.
	 * @returns {IterableIterator<R>} values
	 */
	values() {
		switch (this._mode) {
			case 0:
				return [][Symbol.iterator]();
			case 1:
				return [/** @type {R} */ (this._singleValue)][Symbol.iterator]();
			default:
				return /** @type {RuntimeSpecMapInnerMap<R>} */ (this._map).values();
		}
	}

	get size() {
		if (/** @type {number} */ (this._mode) <= 1) {
			return /** @type {number} */ (this._mode);
		}

		return /** @type {RuntimeSpecMapInnerMap<R>} */ (this._map).size;
	}
}

class RuntimeSpecSet {
	/**
	 * Creates an instance of RuntimeSpecSet.
	 * @param {Iterable<RuntimeSpec>=} iterable iterable
	 */
	constructor(iterable) {
		/** @type {Map<string, RuntimeSpec>} */
		this._map = new Map();
		if (iterable) {
			for (const item of iterable) {
				this.add(item);
			}
		}
	}

	/**
	 * Processes the provided runtime.
	 * @param {RuntimeSpec} runtime runtime
	 */
	add(runtime) {
		this._map.set(getRuntimeKey(runtime), runtime);
	}

	/**
	 * Returns true, when the runtime exists.
	 * @param {RuntimeSpec} runtime runtime
	 * @returns {boolean} true, when the runtime exists
	 */
	has(runtime) {
		return this._map.has(getRuntimeKey(runtime));
	}

	/**
	 * Returns iterable iterator.
	 * @returns {IterableIterator<RuntimeSpec>} iterable iterator
	 */
	[Symbol.iterator]() {
		return this._map.values();
	}

	get size() {
		return this._map.size;
	}
}

module.exports.RuntimeSpecMap = RuntimeSpecMap;
module.exports.RuntimeSpecSet = RuntimeSpecSet;
module.exports.compareRuntime = compareRuntime;
module.exports.filterRuntime = filterRuntime;
module.exports.forEachRuntime = forEachRuntime;
module.exports.getEntryRuntime = getEntryRuntime;
module.exports.getRuntimeKey = getRuntimeKey;
module.exports.intersectRuntime = intersectRuntime;
module.exports.keyToRuntime = keyToRuntime;
module.exports.mergeRuntime = mergeRuntime;
module.exports.mergeRuntimeCondition = mergeRuntimeCondition;
module.exports.mergeRuntimeConditionNonFalse = mergeRuntimeConditionNonFalse;
module.exports.mergeRuntimeOwned = mergeRuntimeOwned;
module.exports.runtimeConditionToString = runtimeConditionToString;
module.exports.runtimeEqual = runtimeEqual;
module.exports.runtimeToString = runtimeToString;
module.exports.subtractRuntime = subtractRuntime;
module.exports.subtractRuntimeCondition = subtractRuntimeCondition;

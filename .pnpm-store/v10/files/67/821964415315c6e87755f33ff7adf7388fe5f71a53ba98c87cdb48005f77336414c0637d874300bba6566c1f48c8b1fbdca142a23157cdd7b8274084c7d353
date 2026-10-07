/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const SortableSet = require("./SortableSet");

/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Entrypoint").EntryOptions} EntryOptions */

/** @typedef {string | SortableSet<string> | undefined} RuntimeSpec */
/** @typedef {RuntimeSpec | boolean} RuntimeCondition */

/**
 * @param {Compilation} compilation the compilation
 * @param {string} name name of the entry
 * @param {EntryOptions=} options optionally already received entry options
 * @returns {RuntimeSpec} runtime
 */
module.exports.getEntryRuntime = (compilation, name, options) => {
	let dependOn;
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
 * @param {RuntimeSpec} runtime runtime
 * @param {function(string | undefined): void} fn functor
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
module.exports.forEachRuntime = forEachRuntime;

/**
 * @template T
 * @param {SortableSet<T>} set set
 * @returns {string} runtime key
 */
const getRuntimesKey = set => {
	set.sort();
	return Array.from(set).join("\n");
};

/**
 * @param {RuntimeSpec} runtime runtime(s)
 * @returns {string} key of runtimes
 */
const getRuntimeKey = runtime => {
	if (runtime === undefined) return "*";
	if (typeof runtime === "string") return runtime;
	return runtime.getFromUnorderedCache(getRuntimesKey);
};
module.exports.getRuntimeKey = getRuntimeKey;

/**
 * @param {string} key key of runtimes
 * @returns {RuntimeSpec} runtime(s)
 */
const keyToRuntime = key => {
	if (key === "*") return;
	const items = key.split("\n");
	if (items.length === 1) return items[0];
	return new SortableSet(items);
};
module.exports.keyToRuntime = keyToRuntime;

/**
 * @template T
 * @param {SortableSet<T>} set set
 * @returns {string} runtime string
 */
const getRuntimesString = set => {
	set.sort();
	return Array.from(set).join("+");
};

/**
 * @param {RuntimeSpec} runtime runtime(s)
 * @returns {string} readable version
 */
const runtimeToString = runtime => {
	if (runtime === undefined) return "*";
	if (typeof runtime === "string") return runtime;
	return runtime.getFromUnorderedCache(getRuntimesString);
};
module.exports.runtimeToString = runtimeToString;

/**
 * @param {RuntimeCondition} runtimeCondition runtime condition
 * @returns {string} readable version
 */
module.exports.runtimeConditionToString = runtimeCondition => {
	if (runtimeCondition === true) return "true";
	if (runtimeCondition === false) return "false";
	return runtimeToString(runtimeCondition);
};

/**
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
module.exports.runtimeEqual = runtimeEqual;

/**
 * @param {RuntimeSpec} a first
 * @param {RuntimeSpec} b second
 * @returns {-1|0|1} compare
 */
module.exports.compareRuntime = (a, b) => {
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
			const set = new SortableSet();
			set.add(a);
			set.add(b);
			return set;
		} else if (b.has(a)) {
			return b;
		}
		const set = new SortableSet(b);
		set.add(a);
		return set;
	}
	if (typeof b === "string") {
		if (a.has(b)) return a;
		const set = new SortableSet(a);
		set.add(b);
		return set;
	}
	const set = new SortableSet(a);
	for (const item of b) set.add(item);
	if (set.size === a.size) return a;
	return set;
};
module.exports.mergeRuntime = mergeRuntime;

/**
 * @param {RuntimeCondition} a first
 * @param {RuntimeCondition} b second
 * @param {RuntimeSpec} runtime full runtime
 * @returns {RuntimeCondition} result
 */
module.exports.mergeRuntimeCondition = (a, b, runtime) => {
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
 * @param {RuntimeSpec | true} a first
 * @param {RuntimeSpec | true} b second
 * @param {RuntimeSpec} runtime full runtime
 * @returns {RuntimeSpec | true} result
 */
module.exports.mergeRuntimeConditionNonFalse = (a, b, runtime) => {
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
		return new SortableSet(b);
	} else if (typeof a === "string") {
		if (typeof b === "string") {
			const set = new SortableSet();
			set.add(a);
			set.add(b);
			return set;
		}
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
module.exports.mergeRuntimeOwned = mergeRuntimeOwned;

/**
 * @param {RuntimeSpec} a first
 * @param {RuntimeSpec} b second
 * @returns {RuntimeSpec} merged
 */
module.exports.intersectRuntime = (a, b) => {
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
		const set = new SortableSet(a);
		set.delete(b);
		return set;
	}
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
module.exports.subtractRuntime = subtractRuntime;

/**
 * @param {RuntimeCondition} a first
 * @param {RuntimeCondition} b second
 * @param {RuntimeSpec} runtime runtime
 * @returns {RuntimeCondition} result
 */
module.exports.subtractRuntimeCondition = (a, b, runtime) => {
	if (b === true) return false;
	if (b === false) return a;
	if (a === false) return false;
	const result = subtractRuntime(a === true ? runtime : a, b);
	return result === undefined ? false : result;
};

/**
 * @param {RuntimeSpec} runtime runtime
 * @param {function(RuntimeSpec=): boolean} filter filter function
 * @returns {boolean | RuntimeSpec} true/false if filter is constant for all runtimes, otherwise runtimes that are active
 */
module.exports.filterRuntime = (runtime, filter) => {
	if (runtime === undefined) return filter();
	if (typeof runtime === "string") return filter(runtime);
	let some = false;
	let every = true;
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
 * @template T
 * @typedef {Map<string, T>} RuntimeSpecMapInnerMap
 */

/**
 * @template T
 */
class RuntimeSpecMap {
	/**
	 * @param {RuntimeSpecMap<T>=} clone copy form this
	 */
	constructor(clone) {
		this._mode = clone ? clone._mode : 0; // 0 = empty, 1 = single entry, 2 = map
		/** @type {RuntimeSpec} */
		this._singleRuntime = clone ? clone._singleRuntime : undefined;
		/** @type {T | undefined} */
		this._singleValue = clone ? clone._singleValue : undefined;
		/** @type {RuntimeSpecMapInnerMap<T> | undefined} */
		this._map = clone && clone._map ? new Map(clone._map) : undefined;
	}

	/**
	 * @param {RuntimeSpec} runtime the runtimes
	 * @returns {T | undefined} value
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
				return /** @type {RuntimeSpecMapInnerMap<T>} */ (this._map).get(
					getRuntimeKey(runtime)
				);
		}
	}

	/**
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
				return /** @type {RuntimeSpecMapInnerMap<T>} */ (this._map).has(
					getRuntimeKey(runtime)
				);
		}
	}

	/**
	 * @param {RuntimeSpec} runtime the runtimes
	 * @param {T} value the value
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
					/** @type {T} */ (this._singleValue)
				);
				this._singleRuntime = undefined;
				this._singleValue = undefined;
			/* falls through */
			default:
				/** @type {RuntimeSpecMapInnerMap<T>} */
				(this._map).set(getRuntimeKey(runtime), value);
		}
	}

	/**
	 * @param {RuntimeSpec} runtime the runtimes
	 * @param {() => TODO} computer function to compute the value
	 * @returns {TODO} true, when the runtime was deleted
	 */
	provide(runtime, computer) {
		switch (this._mode) {
			case 0:
				this._mode = 1;
				this._singleRuntime = runtime;
				return (this._singleValue = computer());
			case 1: {
				if (runtimeEqual(this._singleRuntime, runtime)) {
					return /** @type {T} */ (this._singleValue);
				}
				this._mode = 2;
				this._map = new Map();
				this._map.set(
					getRuntimeKey(this._singleRuntime),
					/** @type {T} */ (this._singleValue)
				);
				this._singleRuntime = undefined;
				this._singleValue = undefined;
				const newValue = computer();
				this._map.set(getRuntimeKey(runtime), newValue);
				return newValue;
			}
			default: {
				const key = getRuntimeKey(runtime);
				const value = /** @type {Map<string, T>} */ (this._map).get(key);
				if (value !== undefined) return value;
				const newValue = computer();
				/** @type {Map<string, T>} */
				(this._map).set(key, newValue);
				return newValue;
			}
		}
	}

	/**
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
				/** @type {RuntimeSpecMapInnerMap<T>} */
				(this._map).delete(getRuntimeKey(runtime));
		}
	}

	/**
	 * @param {RuntimeSpec} runtime the runtimes
	 * @param {function(T | undefined): T} fn function to update the value
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
						/** @type {T} */ (this._singleValue)
					);
					this._singleRuntime = undefined;
					this._singleValue = undefined;
					this._map.set(getRuntimeKey(runtime), newValue);
				}
				break;
			}
			default: {
				const key = getRuntimeKey(runtime);
				const oldValue = /** @type {Map<string, T>} */ (this._map).get(key);
				const newValue = fn(oldValue);
				if (newValue !== oldValue)
					/** @type {RuntimeSpecMapInnerMap<T>} */
					(this._map).set(key, newValue);
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
					/** @type {RuntimeSpecMapInnerMap<T>} */
					(this._map).keys(),
					keyToRuntime
				);
		}
	}

	/**
	 * @returns {IterableIterator<T>} values
	 */
	values() {
		switch (this._mode) {
			case 0:
				return [][Symbol.iterator]();
			case 1:
				return [/** @type {T} */ (this._singleValue)][Symbol.iterator]();
			default:
				return /** @type {Map<string, T>} */ (this._map).values();
		}
	}

	get size() {
		if (/** @type {number} */ (this._mode) <= 1) {
			return /** @type {number} */ (this._mode);
		}

		return /** @type {Map<string, T>} */ (this._map).size;
	}
}

module.exports.RuntimeSpecMap = RuntimeSpecMap;

class RuntimeSpecSet {
	/**
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
	 * @param {RuntimeSpec} runtime runtime
	 */
	add(runtime) {
		this._map.set(getRuntimeKey(runtime), runtime);
	}

	/**
	 * @param {RuntimeSpec} runtime runtime
	 * @returns {boolean} true, when the runtime exists
	 */
	has(runtime) {
		return this._map.has(getRuntimeKey(runtime));
	}

	/**
	 * @returns {IterableIterator<RuntimeSpec>} iterable iterator
	 */
	[Symbol.iterator]() {
		return this._map.values();
	}

	get size() {
		return this._map.size;
	}
}

module.exports.RuntimeSpecSet = RuntimeSpecSet;

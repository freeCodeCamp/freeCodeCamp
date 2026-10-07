/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * The StackedCacheMap is a data structure designed as an alternative to a Map
 * in situations where you need to handle multiple item additions and
 * frequently access the largest map.
 *
 * It is particularly optimized for efficiently adding multiple items
 * at once, which can be achieved using the `addAll` method.
 *
 * It has a fallback Map that is used when the map to be added is mutable.
 *
 * Note: `delete` and `has` are not supported for performance reasons.
 * @example
 * ```js
 * const map = new StackedCacheMap();
 * map.addAll(new Map([["a", 1], ["b", 2]]), true);
 * map.addAll(new Map([["c", 3], ["d", 4]]), true);
 * map.get("a"); // 1
 * map.get("d"); // 4
 * for (const [key, value] of map) {
 * 		console.log(key, value);
 * }
 * ```
 * @template K
 * @template V
 */
class StackedCacheMap {
	constructor() {
		/** @type {Map<K, V>} */
		this.map = new Map();
		/** @type {ReadonlyMap<K, V>[]} */
		this.stack = [];
	}

	/**
	 * If `immutable` is true, the map can be referenced by the StackedCacheMap
	 * and should not be changed afterwards. If the map is mutable, all items
	 * are copied into a fallback Map.
	 * @param {ReadonlyMap<K, V>} map map to add
	 * @param {boolean=} immutable if 'map' is immutable and StackedCacheMap can keep referencing it
	 */
	addAll(map, immutable) {
		if (immutable) {
			this.stack.push(map);

			// largest map should go first
			for (let i = this.stack.length - 1; i > 0; i--) {
				const beforeLast = this.stack[i - 1];
				if (beforeLast.size >= map.size) break;
				this.stack[i] = beforeLast;
				this.stack[i - 1] = map;
			}
		} else {
			for (const [key, value] of map) {
				this.map.set(key, value);
			}
		}
	}

	/**
	 * @param {K} item the key of the element to add
	 * @param {V} value the value of the element to add
	 * @returns {void}
	 */
	set(item, value) {
		this.map.set(item, value);
	}

	/**
	 * @param {K} item the item to delete
	 * @returns {void}
	 */
	delete(item) {
		throw new Error("Items can't be deleted from a StackedCacheMap");
	}

	/**
	 * @param {K} item the item to test
	 * @returns {boolean} true if the item exists in this set
	 */
	has(item) {
		throw new Error(
			"Checking StackedCacheMap.has before reading is inefficient, use StackedCacheMap.get and check for undefined"
		);
	}

	/**
	 * @param {K} item the key of the element to return
	 * @returns {V | undefined} the value of the element
	 */
	get(item) {
		for (const map of this.stack) {
			const value = map.get(item);
			if (value !== undefined) return value;
		}
		return this.map.get(item);
	}

	clear() {
		this.stack.length = 0;
		this.map.clear();
	}

	/**
	 * @returns {number} size of the map
	 */
	get size() {
		let size = this.map.size;
		for (const map of this.stack) {
			size += map.size;
		}
		return size;
	}

	/**
	 * @returns {Iterator<[K, V]>} iterator
	 */
	[Symbol.iterator]() {
		const iterators = this.stack.map(map => map[Symbol.iterator]());
		let current = this.map[Symbol.iterator]();
		return {
			next() {
				let result = current.next();
				while (result.done && iterators.length > 0) {
					current = /** @type {IterableIterator<[K, V]>} */ (iterators.pop());
					result = current.next();
				}
				return result;
			}
		};
	}
}

module.exports = StackedCacheMap;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { first } = require("./SetHelpers");
const SortableSet = require("./SortableSet");

/**
 * Callback that extracts the grouping key for an item at one bucket layer.
 * @template T
 * @template K
 * @typedef {(item: T) => K} GetKey
 */

/**
 * Comparison function used to order keys or leaf items.
 * @template T
 * @typedef {(a: T, n: T) => number} Comparator
 */

/**
 * Internal bucket entry, either another nested bucket set or a sorted leaf set.
 * @template T
 * @template K
 * @typedef {LazyBucketSortedSet<T, K> | SortableSet<T>} Entry
 */

/**
 * Constructor argument accepted for nested bucket layers or the final leaf
 * comparator.
 * @template T
 * @template K
 * @typedef {GetKey<T, K> | Comparator<K> | Comparator<T>} Arg
 */

/**
 * Multi layer bucket sorted set:
 * Supports adding non-existing items (DO NOT ADD ITEM TWICE),
 * Supports removing exiting items (DO NOT REMOVE ITEM NOT IN SET),
 * Supports popping the first items according to defined order,
 * Supports iterating all items without order,
 * Supports updating an item in an efficient way,
 * Supports size property, which is the number of items,
 * Items are lazy partially sorted when needed
 * @template T
 * @template K
 */
class LazyBucketSortedSet {
	/**
	 * Creates a lazily sorted, potentially multi-level bucket structure whose
	 * order is only fully resolved when items are popped.
	 * @param {GetKey<T, K>} getKey function to get key from item
	 * @param {Comparator<K>=} comparator comparator to sort keys
	 * @param {...Arg<T, K>} args more pairs of getKey and comparator plus optional final comparator for the last layer
	 */
	constructor(getKey, comparator, ...args) {
		this._getKey = getKey;
		this._innerArgs = args;
		this._leaf = args.length <= 1;
		this._keys = new SortableSet(undefined, comparator);
		/** @type {Map<K, Entry<T, K>>} */
		this._map = new Map();
		/** @type {Set<T>} */
		this._unsortedItems = new Set();
		this.size = 0;
	}

	/**
	 * Adds an item to the unsorted staging area so sorting can be deferred until
	 * an ordered pop is requested.
	 * @param {T} item an item
	 * @returns {void}
	 */
	add(item) {
		this.size++;
		this._unsortedItems.add(item);
	}

	/**
	 * Inserts an item into the correct nested bucket, creating intermediate
	 * bucket structures on demand.
	 * @param {K} key key of item
	 * @param {T} item the item
	 * @returns {void}
	 */
	_addInternal(key, item) {
		let entry = this._map.get(key);
		if (entry === undefined) {
			entry = this._leaf
				? new SortableSet(
						undefined,
						/** @type {Comparator<T>} */
						(this._innerArgs[0])
					)
				: new LazyBucketSortedSet(
						.../** @type {[GetKey<T, K>, Comparator<K>]} */
						(this._innerArgs)
					);
			this._keys.add(key);
			this._map.set(key, entry);
		}
		entry.add(item);
	}

	/**
	 * Removes an item from either the unsorted staging area or its resolved
	 * bucket and prunes empty buckets as needed.
	 * @param {T} item an item
	 * @returns {void}
	 */
	delete(item) {
		this.size--;
		if (this._unsortedItems.has(item)) {
			this._unsortedItems.delete(item);
			return;
		}
		const key = this._getKey(item);
		const entry = /** @type {Entry<T, K>} */ (this._map.get(key));
		entry.delete(item);
		if (entry.size === 0) {
			this._deleteKey(key);
		}
	}

	/**
	 * Removes an empty bucket key and its corresponding nested entry.
	 * @param {K} key key to be removed
	 * @returns {void}
	 */
	_deleteKey(key) {
		this._keys.delete(key);
		this._map.delete(key);
	}

	/**
	 * Removes and returns the smallest item according to the configured bucket
	 * order, sorting only the portions of the structure that are needed.
	 * @returns {T | undefined} an item
	 */
	popFirst() {
		if (this.size === 0) return;
		this.size--;
		if (this._unsortedItems.size > 0) {
			for (const item of this._unsortedItems) {
				const key = this._getKey(item);
				this._addInternal(key, item);
			}
			this._unsortedItems.clear();
		}
		this._keys.sort();
		const key = /** @type {K} */ (first(this._keys));
		const entry = this._map.get(key);
		if (this._leaf) {
			const leafEntry = /** @type {SortableSet<T>} */ (entry);
			leafEntry.sort();
			const item = /** @type {T} */ (first(leafEntry));
			leafEntry.delete(item);
			if (leafEntry.size === 0) {
				this._deleteKey(key);
			}
			return item;
		}
		const nodeEntry =
			/** @type {LazyBucketSortedSet<T, K>} */
			(entry);
		const item = nodeEntry.popFirst();
		if (nodeEntry.size === 0) {
			this._deleteKey(key);
		}
		return item;
	}

	/**
	 * Begins an in-place update for an item and returns a completion callback
	 * that can either reinsert it under a new key or remove it entirely.
	 * @param {T} item to be updated item
	 * @returns {(remove?: true) => void} finish update
	 */
	startUpdate(item) {
		if (this._unsortedItems.has(item)) {
			return (remove) => {
				if (remove) {
					this._unsortedItems.delete(item);
					this.size--;
				}
			};
		}
		const key = this._getKey(item);
		if (this._leaf) {
			const oldEntry = /** @type {SortableSet<T>} */ (this._map.get(key));
			return (remove) => {
				if (remove) {
					this.size--;
					oldEntry.delete(item);
					if (oldEntry.size === 0) {
						this._deleteKey(key);
					}
					return;
				}
				const newKey = this._getKey(item);
				if (key === newKey) {
					// This flags the sortable set as unordered
					oldEntry.add(item);
				} else {
					oldEntry.delete(item);
					if (oldEntry.size === 0) {
						this._deleteKey(key);
					}
					this._addInternal(newKey, item);
				}
			};
		}
		const oldEntry =
			/** @type {LazyBucketSortedSet<T, K>} */
			(this._map.get(key));
		const finishUpdate = oldEntry.startUpdate(item);
		return (remove) => {
			if (remove) {
				this.size--;
				finishUpdate(true);
				if (oldEntry.size === 0) {
					this._deleteKey(key);
				}
				return;
			}
			const newKey = this._getKey(item);
			if (key === newKey) {
				finishUpdate();
			} else {
				finishUpdate(true);
				if (oldEntry.size === 0) {
					this._deleteKey(key);
				}
				this._addInternal(newKey, item);
			}
		};
	}

	/**
	 * Appends iterators for every stored bucket and leaf to support unordered
	 * traversal across the entire structure.
	 * @param {Iterator<T>[]} iterators list of iterators to append to
	 * @returns {void}
	 */
	_appendIterators(iterators) {
		if (this._unsortedItems.size > 0) {
			iterators.push(this._unsortedItems[Symbol.iterator]());
		}
		for (const key of this._keys) {
			const entry = this._map.get(key);
			if (this._leaf) {
				const leafEntry = /** @type {SortableSet<T>} */ (entry);
				const iterator = leafEntry[Symbol.iterator]();
				iterators.push(iterator);
			} else {
				const nodeEntry =
					/** @type {LazyBucketSortedSet<T, K>} */
					(entry);
				nodeEntry._appendIterators(iterators);
			}
		}
	}

	/**
	 * Iterates over all stored items without imposing bucket sort order.
	 * @returns {Iterator<T>} the iterator
	 */
	[Symbol.iterator]() {
		/** @type {Iterator<T>[]} */
		const iterators = [];
		this._appendIterators(iterators);
		iterators.reverse();
		let currentIterator =
			/** @type {Iterator<T>} */
			(iterators.pop());
		return {
			next: () => {
				const res = currentIterator.next();
				if (res.done) {
					if (iterators.length === 0) return res;
					currentIterator = /** @type {Iterator<T>} */ (iterators.pop());
					return currentIterator.next();
				}
				return res;
			}
		};
	}
}

module.exports = LazyBucketSortedSet;

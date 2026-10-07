/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { first } = require("./SetHelpers");
const SortableSet = require("./SortableSet");

/**
 * @template T
 * @typedef {LazyBucketSortedSet<T, any> | SortableSet<T>} Entry
 */

/**
 * @template T
 * @typedef {(function(T): any) | (function(any, any): number)} Arg
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
	 * @param {function(T): K} getKey function to get key from item
	 * @param {function(K, K): number} comparator comparator to sort keys
	 * @param  {...Arg<T>} args more pairs of getKey and comparator plus optional final comparator for the last layer
	 */
	constructor(getKey, comparator, ...args) {
		this._getKey = getKey;
		/** @type {Arg<T>[]} */
		this._innerArgs = args;
		this._leaf = args.length <= 1;
		this._keys = new SortableSet(undefined, comparator);
		/** @type {Map<K, Entry<T>>} */
		this._map = new Map();
		this._unsortedItems = new Set();
		this.size = 0;
	}

	/**
	 * @param {T} item an item
	 * @returns {void}
	 */
	add(item) {
		this.size++;
		this._unsortedItems.add(item);
	}

	/**
	 * @param {K} key key of item
	 * @param {T} item the item
	 * @returns {void}
	 */
	_addInternal(key, item) {
		let entry = this._map.get(key);
		if (entry === undefined) {
			entry =
				/** @type {Entry<T>} */
				(
					this._leaf
						? new SortableSet(undefined, this._innerArgs[0])
						: new /** @type {TODO} */ (LazyBucketSortedSet)(...this._innerArgs)
				);
			this._keys.add(key);
			this._map.set(key, entry);
		}
		/** @type {Entry<T>} */
		(entry).add(item);
	}

	/**
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
		const entry = /** @type {Entry<T>} */ (this._map.get(key));
		entry.delete(item);
		if (entry.size === 0) {
			this._deleteKey(key);
		}
	}

	/**
	 * @param {K} key key to be removed
	 * @returns {void}
	 */
	_deleteKey(key) {
		this._keys.delete(key);
		this._map.delete(key);
	}

	/**
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
		const nodeEntry = /** @type {LazyBucketSortedSet<T, any>} */ (entry);
		const item = nodeEntry.popFirst();
		if (nodeEntry.size === 0) {
			this._deleteKey(key);
		}
		return item;
	}

	/**
	 * @param {T} item to be updated item
	 * @returns {function(true=): void} finish update
	 */
	startUpdate(item) {
		if (this._unsortedItems.has(item)) {
			return remove => {
				if (remove) {
					this._unsortedItems.delete(item);
					this.size--;
				}
			};
		}
		const key = this._getKey(item);
		if (this._leaf) {
			const oldEntry = /** @type {SortableSet<T>} */ (this._map.get(key));
			return remove => {
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
		const oldEntry = /** @type {LazyBucketSortedSet<T, any>} */ (
			this._map.get(key)
		);
		const finishUpdate = oldEntry.startUpdate(item);
		return remove => {
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
	 * @param {Iterator<T>[]} iterators list of iterators to append to
	 * @returns {void}
	 */
	_appendIterators(iterators) {
		if (this._unsortedItems.size > 0)
			iterators.push(this._unsortedItems[Symbol.iterator]());
		for (const key of this._keys) {
			const entry = this._map.get(key);
			if (this._leaf) {
				const leafEntry = /** @type {SortableSet<T>} */ (entry);
				const iterator = leafEntry[Symbol.iterator]();
				iterators.push(iterator);
			} else {
				const nodeEntry = /** @type {LazyBucketSortedSet<T, any>} */ (entry);
				nodeEntry._appendIterators(iterators);
			}
		}
	}

	/**
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

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const NONE = Symbol("not sorted");

/**
 * A subset of Set that offers sorting functionality
 * @template T item type in set
 * @extends {Set<T>}
 */
class SortableSet extends Set {
	/**
	 * Create a new sortable set
	 * @template T
	 * @typedef {(a: T, b: T) => number} SortFunction
	 * @param {Iterable<T>=} initialIterable The initial iterable value
	 * @param {SortFunction<T>=} defaultSort Default sorting function
	 */
	constructor(initialIterable, defaultSort) {
		super(initialIterable);
		/**
		 * @private
		 * @type {undefined | SortFunction<T>}
		 */
		this._sortFn = defaultSort;
		/**
		 * @private
		 * @type {typeof NONE | undefined | ((a: T, b: T) => number)}}
		 */
		this._lastActiveSortFn = NONE;
		/**
		 * @private
		 * @template R
		 * @type {Map<(set: SortableSet<T>) => EXPECTED_ANY, EXPECTED_ANY> | undefined}
		 */
		this._cache = undefined;
		/**
		 * @private
		 * @template R
		 * @type {Map<(set: SortableSet<T>) => EXPECTED_ANY, EXPECTED_ANY> | undefined}
		 */
		this._cacheOrderIndependent = undefined;
	}

	/**
	 * Returns itself.
	 * @param {T} value value to add to set
	 * @returns {this} returns itself
	 */
	add(value) {
		this._lastActiveSortFn = NONE;
		this._invalidateCache();
		this._invalidateOrderedCache();
		super.add(value);
		return this;
	}

	/**
	 * Returns true if value existed in set, false otherwise.
	 * @param {T} value value to delete
	 * @returns {boolean} true if value existed in set, false otherwise
	 */
	delete(value) {
		this._invalidateCache();
		this._invalidateOrderedCache();
		return super.delete(value);
	}

	/**
	 * Describes how this clear operation behaves.
	 * @returns {void}
	 */
	clear() {
		this._invalidateCache();
		this._invalidateOrderedCache();
		return super.clear();
	}

	/**
	 * Sort with a comparer function
	 * @param {SortFunction<T> | undefined} sortFn Sorting comparer function
	 * @returns {void}
	 */
	sortWith(sortFn) {
		if (this.size <= 1 || sortFn === this._lastActiveSortFn) {
			// already sorted - nothing to do
			return;
		}

		/** @type {T[]} */
		const sortedArray = [...this].sort(sortFn);
		super.clear();
		for (let i = 0; i < sortedArray.length; i += 1) {
			super.add(sortedArray[i]);
		}
		this._lastActiveSortFn = sortFn;
		this._invalidateCache();
	}

	sort() {
		this.sortWith(this._sortFn);
		return this;
	}

	/**
	 * Get data from cache
	 * @template {EXPECTED_ANY} R
	 * @param {(set: SortableSet<T>) => R} fn function to calculate value
	 * @returns {R} returns result of fn(this), cached until set changes
	 */
	getFromCache(fn) {
		if (this._cache === undefined) {
			this._cache = new Map();
		} else {
			const result = this._cache.get(fn);
			const data = /** @type {R} */ (result);
			if (data !== undefined) {
				return data;
			}
		}
		const newData = fn(this);
		this._cache.set(fn, newData);
		return newData;
	}

	/**
	 * Get data from cache (ignoring sorting)
	 * @template R
	 * @param {(set: SortableSet<T>) => R} fn function to calculate value
	 * @returns {R} returns result of fn(this), cached until set changes
	 */
	getFromUnorderedCache(fn) {
		if (this._cacheOrderIndependent === undefined) {
			this._cacheOrderIndependent = new Map();
		} else {
			const result = this._cacheOrderIndependent.get(fn);
			const data = /** @type {R} */ (result);
			if (data !== undefined) {
				return data;
			}
		}
		const newData = fn(this);
		this._cacheOrderIndependent.set(fn, newData);
		return newData;
	}

	/**
	 * Invalidates the cached state associated with this value.
	 * @private
	 * @returns {void}
	 */
	_invalidateCache() {
		if (this._cache !== undefined) {
			this._cache.clear();
		}
	}

	/**
	 * Invalidate ordered cache.
	 * @private
	 * @returns {void}
	 */
	_invalidateOrderedCache() {
		if (this._cacheOrderIndependent !== undefined) {
			this._cacheOrderIndependent.clear();
		}
	}

	/**
	 * Returns the raw array.
	 * @returns {T[]} the raw array
	 */
	toJSON() {
		return [...this];
	}
}

module.exports = SortableSet;

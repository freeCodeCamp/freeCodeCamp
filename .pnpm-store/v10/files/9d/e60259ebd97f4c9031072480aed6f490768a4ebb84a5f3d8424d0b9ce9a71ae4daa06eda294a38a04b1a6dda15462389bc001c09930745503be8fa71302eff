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
	 * @param {Iterable<T>=} initialIterable The initial iterable value
	 * @typedef {function(T, T): number} SortFunction
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
		 * @type {typeof NONE | undefined | function(T, T): number}}
		 */
		this._lastActiveSortFn = NONE;
		/**
		 * @private
		 * @type {Map<Function, any> | undefined}
		 */
		this._cache = undefined;
		/**
		 * @private
		 * @type {Map<Function, any> | undefined}
		 */
		this._cacheOrderIndependent = undefined;
	}

	/**
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
	 * @param {T} value value to delete
	 * @returns {boolean} true if value existed in set, false otherwise
	 */
	delete(value) {
		this._invalidateCache();
		this._invalidateOrderedCache();
		return super.delete(value);
	}

	/**
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

		const sortedArray = Array.from(this).sort(sortFn);
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
	 * @template R
	 * @param {function(SortableSet<T>): R} fn function to calculate value
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
	 * @param {function(SortableSet<T>): R} fn function to calculate value
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
	 * @private
	 * @returns {void}
	 */
	_invalidateCache() {
		if (this._cache !== undefined) {
			this._cache.clear();
		}
	}

	/**
	 * @private
	 * @returns {void}
	 */
	_invalidateOrderedCache() {
		if (this._cacheOrderIndependent !== undefined) {
			this._cacheOrderIndependent.clear();
		}
	}

	/**
	 * @returns {T[]} the raw array
	 */
	toJSON() {
		return Array.from(this);
	}
}

module.exports = SortableSet;

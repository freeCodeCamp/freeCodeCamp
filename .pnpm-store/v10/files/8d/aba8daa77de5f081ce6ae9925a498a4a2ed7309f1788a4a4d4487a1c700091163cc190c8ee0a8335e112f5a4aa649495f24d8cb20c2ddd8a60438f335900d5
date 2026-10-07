/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

/**
 * Tracks values across a stack of nested sets where child scopes can add new
 * values without mutating the sets created by their parents.
 * @template T
 */
class AppendOnlyStackedSet {
	/**
	 * Seeds the stacked set with an optional chain of previously created scope
	 * layers.
	 * @param {Set<T>[]} sets an optional array of sets
	 */
	constructor(sets = []) {
		/** @type {Set<T>[]} */
		this._sets = sets;
		/** @type {Set<T> | undefined} */
		this._current = undefined;
	}

	/**
	 * Adds a value to the current scope layer, creating that layer lazily when
	 * the first write occurs.
	 * @param {T} el element
	 */
	add(el) {
		if (!this._current) {
			this._current = new Set();
			this._sets.push(this._current);
		}
		this._current.add(el);
	}

	/**
	 * Checks whether a value is present in any scope layer currently visible to
	 * this stacked set.
	 * @param {T} el element
	 * @returns {boolean} result
	 */
	has(el) {
		for (const set of this._sets) {
			if (set.has(el)) return true;
		}
		return false;
	}

	/**
	 * Removes every scope layer and any values accumulated in them.
	 */
	clear() {
		this._sets = [];
		if (this._current) {
			this._current = undefined;
		}
	}

	/**
	 * Creates a child stacked set that shares the existing scope history while
	 * allowing subsequent additions to be recorded in its own new layer.
	 * @returns {AppendOnlyStackedSet<T>} child
	 */
	createChild() {
		return new AppendOnlyStackedSet(this._sets.length ? [...this._sets] : []);
	}

	/**
	 * Iterates over the stacked sets from newest to oldest so consumers can
	 * inspect recently added values first.
	 * @returns {Iterator<T>} iterable iterator
	 */
	[Symbol.iterator]() {
		const iterators = this._sets.map((map) => map[Symbol.iterator]());
		let current = iterators.pop();
		return {
			next() {
				if (!current) return { done: true, value: undefined };
				let result = current.next();
				while (result.done && iterators.length > 0) {
					current = /** @type {SetIterator<T>} */ (iterators.pop());
					result = current.next();
				}
				return result;
			}
		};
	}
}

module.exports = AppendOnlyStackedSet;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("./makeSerializable.js");

/**
 * @template T
 * @param {Set<T>} targetSet set where items should be added
 * @param {Set<Iterable<T>>} toMerge iterables to be merged
 * @returns {void}
 */
const merge = (targetSet, toMerge) => {
	for (const set of toMerge) {
		for (const item of set) {
			targetSet.add(item);
		}
	}
};

/**
 * @template T
 * @param {Set<Iterable<T>>} targetSet set where iterables should be added
 * @param {Array<LazySet<T>>} toDeepMerge lazy sets to be flattened
 * @returns {void}
 */
const flatten = (targetSet, toDeepMerge) => {
	for (const set of toDeepMerge) {
		if (set._set.size > 0) targetSet.add(set._set);
		if (set._needMerge) {
			for (const mergedSet of set._toMerge) {
				targetSet.add(mergedSet);
			}
			flatten(targetSet, set._toDeepMerge);
		}
	}
};

/**
 * Like Set but with an addAll method to eventually add items from another iterable.
 * Access methods make sure that all delayed operations are executed.
 * Iteration methods deopts to normal Set performance until clear is called again (because of the chance of modifications during iteration).
 * @template T
 */
class LazySet {
	/**
	 * @param {Iterable<T>=} iterable init iterable
	 */
	constructor(iterable) {
		/** @type {Set<T>} */
		this._set = new Set(iterable);
		/** @type {Set<Iterable<T>>} */
		this._toMerge = new Set();
		/** @type {Array<LazySet<T>>} */
		this._toDeepMerge = [];
		this._needMerge = false;
		this._deopt = false;
	}

	_flatten() {
		flatten(this._toMerge, this._toDeepMerge);
		this._toDeepMerge.length = 0;
	}

	_merge() {
		this._flatten();
		merge(this._set, this._toMerge);
		this._toMerge.clear();
		this._needMerge = false;
	}

	_isEmpty() {
		return (
			this._set.size === 0 &&
			this._toMerge.size === 0 &&
			this._toDeepMerge.length === 0
		);
	}

	get size() {
		if (this._needMerge) this._merge();
		return this._set.size;
	}

	/**
	 * @param {T} item an item
	 * @returns {LazySet<T>} itself
	 */
	add(item) {
		this._set.add(item);
		return this;
	}

	/**
	 * @param {Iterable<T> | LazySet<T>} iterable a immutable iterable or another immutable LazySet which will eventually be merged into the Set
	 * @returns {LazySet<T>} itself
	 */
	addAll(iterable) {
		if (this._deopt) {
			const _set = this._set;
			for (const item of iterable) {
				_set.add(item);
			}
		} else {
			if (iterable instanceof LazySet) {
				if (iterable._isEmpty()) return this;
				this._toDeepMerge.push(iterable);
				this._needMerge = true;
				if (this._toDeepMerge.length > 100000) {
					this._flatten();
				}
			} else {
				this._toMerge.add(iterable);
				this._needMerge = true;
			}
			if (this._toMerge.size > 100000) this._merge();
		}
		return this;
	}

	clear() {
		this._set.clear();
		this._toMerge.clear();
		this._toDeepMerge.length = 0;
		this._needMerge = false;
		this._deopt = false;
	}

	/**
	 * @param {T} value an item
	 * @returns {boolean} true, if the value was in the Set before
	 */
	delete(value) {
		if (this._needMerge) this._merge();
		return this._set.delete(value);
	}

	/**
	 * @returns {IterableIterator<[T, T]>} entries
	 */
	entries() {
		this._deopt = true;
		if (this._needMerge) this._merge();
		return this._set.entries();
	}

	/**
	 * @param {function(T, T, Set<T>): void} callbackFn function called for each entry
	 * @param {any} thisArg this argument for the callbackFn
	 * @returns {void}
	 */
	forEach(callbackFn, thisArg) {
		this._deopt = true;
		if (this._needMerge) this._merge();
		// eslint-disable-next-line unicorn/no-array-for-each
		this._set.forEach(callbackFn, thisArg);
	}

	/**
	 * @param {T} item an item
	 * @returns {boolean} true, when the item is in the Set
	 */
	has(item) {
		if (this._needMerge) this._merge();
		return this._set.has(item);
	}

	/**
	 * @returns {IterableIterator<T>} keys
	 */
	keys() {
		this._deopt = true;
		if (this._needMerge) this._merge();
		return this._set.keys();
	}

	/**
	 * @returns {IterableIterator<T>} values
	 */
	values() {
		this._deopt = true;
		if (this._needMerge) this._merge();
		return this._set.values();
	}

	/**
	 * @returns {IterableIterator<T>} iterable iterator
	 */
	[Symbol.iterator]() {
		this._deopt = true;
		if (this._needMerge) this._merge();
		return this._set[Symbol.iterator]();
	}

	/* istanbul ignore next */
	get [Symbol.toStringTag]() {
		return "LazySet";
	}

	/**
	 * @param {import("../serialization/ObjectMiddleware").ObjectSerializerContext} context context
	 */
	serialize({ write }) {
		if (this._needMerge) this._merge();
		write(this._set.size);
		for (const item of this._set) write(item);
	}

	/**
	 * @template T
	 * @param {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} context context
	 * @returns {LazySet<T>} lazy set
	 */
	static deserialize({ read }) {
		const count = read();
		const items = [];
		for (let i = 0; i < count; i++) {
			items.push(read());
		}
		return new LazySet(items);
	}
}

makeSerializable(LazySet, "webpack/lib/util/LazySet");

module.exports = LazySet;

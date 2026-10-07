/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const TOMBSTONE = Symbol("tombstone");
const UNDEFINED_MARKER = Symbol("undefined");

/**
 * @template T
 * @typedef {T | undefined} Cell<T>
 */

/**
 * @template T
 * @typedef {T | typeof TOMBSTONE | typeof UNDEFINED_MARKER} InternalCell<T>
 */

/**
 * @template K
 * @template V
 * @param {[K, InternalCell<V>]} pair the internal cell
 * @returns {[K, Cell<V>]} its “safe” representation
 */
const extractPair = pair => {
	const key = pair[0];
	const val = pair[1];
	if (val === UNDEFINED_MARKER || val === TOMBSTONE) {
		return [key, undefined];
	}
	return /** @type {[K, Cell<V>]} */ (pair);
};

/**
 * @template K
 * @template V
 */
class StackedMap {
	/**
	 * @param {Map<K, InternalCell<V>>[]=} parentStack an optional parent
	 */
	constructor(parentStack) {
		/** @type {Map<K, InternalCell<V>>} */
		this.map = new Map();
		/** @type {Map<K, InternalCell<V>>[]} */
		this.stack = parentStack === undefined ? [] : parentStack.slice();
		this.stack.push(this.map);
	}

	/**
	 * @param {K} item the key of the element to add
	 * @param {V} value the value of the element to add
	 * @returns {void}
	 */
	set(item, value) {
		this.map.set(item, value === undefined ? UNDEFINED_MARKER : value);
	}

	/**
	 * @param {K} item the item to delete
	 * @returns {void}
	 */
	delete(item) {
		if (this.stack.length > 1) {
			this.map.set(item, TOMBSTONE);
		} else {
			this.map.delete(item);
		}
	}

	/**
	 * @param {K} item the item to test
	 * @returns {boolean} true if the item exists in this set
	 */
	has(item) {
		const topValue = this.map.get(item);
		if (topValue !== undefined) {
			return topValue !== TOMBSTONE;
		}
		if (this.stack.length > 1) {
			for (let i = this.stack.length - 2; i >= 0; i--) {
				const value = this.stack[i].get(item);
				if (value !== undefined) {
					this.map.set(item, value);
					return value !== TOMBSTONE;
				}
			}
			this.map.set(item, TOMBSTONE);
		}
		return false;
	}

	/**
	 * @param {K} item the key of the element to return
	 * @returns {Cell<V>} the value of the element
	 */
	get(item) {
		const topValue = this.map.get(item);
		if (topValue !== undefined) {
			return topValue === TOMBSTONE || topValue === UNDEFINED_MARKER
				? undefined
				: topValue;
		}
		if (this.stack.length > 1) {
			for (let i = this.stack.length - 2; i >= 0; i--) {
				const value = this.stack[i].get(item);
				if (value !== undefined) {
					this.map.set(item, value);
					return value === TOMBSTONE || value === UNDEFINED_MARKER
						? undefined
						: value;
				}
			}
			this.map.set(item, TOMBSTONE);
		}
	}

	_compress() {
		if (this.stack.length === 1) return;
		this.map = new Map();
		for (const data of this.stack) {
			for (const pair of data) {
				if (pair[1] === TOMBSTONE) {
					this.map.delete(pair[0]);
				} else {
					this.map.set(pair[0], pair[1]);
				}
			}
		}
		this.stack = [this.map];
	}

	asArray() {
		this._compress();
		return Array.from(this.map.keys());
	}

	asSet() {
		this._compress();
		return new Set(this.map.keys());
	}

	asPairArray() {
		this._compress();
		return Array.from(this.map.entries(), extractPair);
	}

	asMap() {
		return new Map(this.asPairArray());
	}

	get size() {
		this._compress();
		return this.map.size;
	}

	createChild() {
		return new StackedMap(this.stack);
	}
}

module.exports = StackedMap;

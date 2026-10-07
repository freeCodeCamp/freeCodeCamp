/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const TOMBSTONE = Symbol("tombstone");
const UNDEFINED_MARKER = Symbol("undefined");

/**
 * Public cell value exposed by `StackedMap`, where `undefined` is preserved as
 * a valid stored result.
 * @template T
 * @typedef {T | undefined} Cell<T>
 */

/**
 * Internal cell value used to distinguish deleted entries and explicit
 * `undefined` assignments while traversing stacked scopes.
 * @template T
 * @typedef {T | typeof TOMBSTONE | typeof UNDEFINED_MARKER} InternalCell<T>
 */

/**
 * Converts an internal key/value pair into the external representation returned
 * by iteration helpers.
 * @template K
 * @template V
 * @param {[K, InternalCell<V>]} pair the internal cell
 * @returns {[K, Cell<V>]} its “safe” representation
 */
const extractPair = (pair) => {
	const key = pair[0];
	const val = pair[1];
	if (val === UNDEFINED_MARKER || val === TOMBSTONE) {
		return [key, undefined];
	}
	return /** @type {[K, Cell<V>]} */ (pair);
};

/**
 * Layered map that supports child scopes while memoizing lookups from parent
 * scopes into the current layer.
 * @template K
 * @template V
 */
class StackedMap {
	/**
	 * Creates a new map layer on top of an optional parent stack.
	 * @param {Map<K, InternalCell<V>>[]=} parentStack an optional parent
	 */
	constructor(parentStack) {
		/** @type {Map<K, InternalCell<V>>} */
		this.map = new Map();
		/** @type {Map<K, InternalCell<V>>[]} */
		this.stack = parentStack === undefined ? [] : [...parentStack];
		this.stack.push(this.map);
	}

	/**
	 * Stores a value in the current layer, preserving explicit `undefined`
	 * values with an internal marker.
	 * @param {K} item the key of the element to add
	 * @param {V} value the value of the element to add
	 * @returns {void}
	 */
	set(item, value) {
		this.map.set(item, value === undefined ? UNDEFINED_MARKER : value);
	}

	/**
	 * Deletes a key from the current view, either by removing it outright in the
	 * root layer or by recording a tombstone in child layers.
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
	 * Checks whether a key exists in the current scope chain, caching any parent
	 * lookup result in the current layer.
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
	 * Returns the visible value for a key, caching parent hits and misses in the
	 * current layer.
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

	/**
	 * Collapses the stacked layers into a single concrete map.
	 */
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

	/**
	 * Returns the visible keys as an array after collapsing the stack.
	 * @returns {K[]} array of keys
	 */
	asArray() {
		this._compress();
		return [...this.map.keys()];
	}

	/**
	 * Returns the visible keys as a `Set` after collapsing the stack.
	 * @returns {Set<K>} set of keys
	 */
	asSet() {
		this._compress();
		return new Set(this.map.keys());
	}

	/**
	 * Returns visible key/value pairs using the external representation.
	 * @returns {[K, Cell<V>][]} array of key/value pairs
	 */
	asPairArray() {
		this._compress();
		return Array.from(this.map.entries(), extractPair);
	}

	/**
	 * Returns the visible contents as a plain `Map`.
	 * @returns {Map<K, Cell<V>>} materialized map
	 */
	asMap() {
		return new Map(this.asPairArray());
	}

	/**
	 * Returns the number of visible keys after collapsing the stack.
	 * @returns {number} number of keys
	 */
	get size() {
		this._compress();
		return this.map.size;
	}

	/**
	 * Creates a child `StackedMap` that sees the current layers as its parent
	 * scope.
	 * @returns {StackedMap<K, V>} child map
	 */
	createChild() {
		return new StackedMap(this.stack);
	}
}

module.exports = StackedMap;

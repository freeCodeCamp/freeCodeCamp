/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * Strong-key child map used for tuple elements that cannot be stored in a
 * `WeakMap`.
 * @template {EXPECTED_ANY[]} T
 * @template V
 * @typedef {Map<EXPECTED_ANY, WeakTupleMap<T, V>>} M
 */

/**
 * Weak-key child map used for tuple elements that are objects and can be held
 * without preventing garbage collection.
 * @template {EXPECTED_ANY[]} T
 * @template V
 * @typedef {WeakMap<EXPECTED_OBJECT, WeakTupleMap<T, V>>} W
 */

/**
 * Reports whether a tuple element can be stored in a `WeakMap`.
 * @param {EXPECTED_ANY} thing thing
 * @returns {boolean} true if is weak
 */
const isWeakKey = (thing) => typeof thing === "object" && thing !== null;

/**
 * Extracts the element type from a tuple-like array.
 * @template {unknown[]} T
 * @typedef {T extends ReadonlyArray<infer ElementType> ? ElementType : never} ArrayElement
 */

/**
 * Stores values by tuple keys while using `WeakMap` for object elements so the
 * cache can release entries when those objects are collected.
 * @template {EXPECTED_ANY[]} K
 * @template V
 */
class WeakTupleMap {
	/**
	 * Initializes an empty tuple trie node with optional value and child maps.
	 */
	constructor() {
		/** @private */
		this.f = 0;
		/**
		 * @private
		 * @type {V | undefined}
		 */
		this.v = undefined;
		/**
		 * @private
		 * @type {M<K, V> | undefined}
		 */
		this.m = undefined;
		/**
		 * @private
		 * @type {W<K, V> | undefined}
		 */
		this.w = undefined;
	}

	/**
	 * Stores a value at the node identified by the provided tuple key.
	 * @param {[...K, V]} args tuple
	 * @returns {void}
	 */
	set(...args) {
		/** @type {WeakTupleMap<K, V>} */
		let node = this;
		for (let i = 0; i < args.length - 1; i++) {
			node = node._get(/** @type {ArrayElement<K>} */ (args[i]));
		}
		node._setValue(/** @type {V} */ (args[args.length - 1]));
	}

	/**
	 * Checks whether the exact tuple key has a stored value.
	 * @param {K} args tuple
	 * @returns {boolean} true, if the tuple is in the Set
	 */
	has(...args) {
		/** @type {WeakTupleMap<K, V> | undefined} */
		let node = this;
		for (let i = 0; i < args.length; i++) {
			node = node._peek(/** @type {ArrayElement<K>} */ (args[i]));
			if (node === undefined) return false;
		}
		return node._hasValue();
	}

	/**
	 * Returns the value stored for the exact tuple key, if any.
	 * @param {K} args tuple
	 * @returns {V | undefined} the value
	 */
	get(...args) {
		/** @type {WeakTupleMap<K, V> | undefined} */
		let node = this;
		for (let i = 0; i < args.length; i++) {
			node = node._peek(/** @type {ArrayElement<K>} */ (args[i]));
			if (node === undefined) return;
		}
		return node._getValue();
	}

	/**
	 * Returns an existing value for the tuple or computes, stores, and returns a
	 * new one when the tuple is missing.
	 * @param {[...K, (...args: K) => V]} args tuple
	 * @returns {V} the value
	 */
	provide(...args) {
		/** @type {WeakTupleMap<K, V>} */
		let node = this;
		for (let i = 0; i < args.length - 1; i++) {
			node = node._get(/** @type {ArrayElement<K>} */ (args[i]));
		}
		if (node._hasValue()) return /** @type {V} */ (node._getValue());
		const fn = /** @type {(...args: K) => V} */ (args[args.length - 1]);
		const newValue = fn(.../** @type {K} */ (args.slice(0, -1)));
		node._setValue(newValue);
		return newValue;
	}

	/**
	 * Removes the value stored for the tuple key without pruning the trie.
	 * @param {K} args tuple
	 * @returns {void}
	 */
	delete(...args) {
		/** @type {WeakTupleMap<K, V> | undefined} */
		let node = this;
		for (let i = 0; i < args.length; i++) {
			node = node._peek(/** @type {ArrayElement<K>} */ (args[i]));
			if (node === undefined) return;
		}
		node._deleteValue();
	}

	/**
	 * Clears the stored value and all strong and weak child maps from this node.
	 * @returns {void}
	 */
	clear() {
		this.f = 0;
		this.v = undefined;
		this.w = undefined;
		this.m = undefined;
	}

	/**
	 * Returns the value stored directly on this trie node.
	 * @returns {V | undefined} stored value
	 */
	_getValue() {
		return this.v;
	}

	/**
	 * Reports whether this trie node currently stores a value.
	 * @returns {boolean} true when a value is present
	 */
	_hasValue() {
		return (this.f & 1) === 1;
	}

	/**
	 * Stores a value directly on this trie node.
	 * @param {V} v value
	 * @private
	 */
	_setValue(v) {
		this.f |= 1;
		this.v = v;
	}

	/**
	 * Removes the value stored directly on this trie node.
	 */
	_deleteValue() {
		this.f &= 6;
		this.v = undefined;
	}

	/**
	 * Returns the child node for a tuple element without creating one.
	 * @param {ArrayElement<K>} thing thing
	 * @returns {WeakTupleMap<K, V> | undefined} thing
	 * @private
	 */
	_peek(thing) {
		if (isWeakKey(thing)) {
			if ((this.f & 4) !== 4) return;
			return /** @type {WeakMap<ArrayElement<K>, WeakTupleMap<K, V>>} */ (
				this.w
			).get(thing);
		}
		if ((this.f & 2) !== 2) return;
		return /** @type {Map<ArrayElement<K>, WeakTupleMap<K, V>>} */ (this.m).get(
			thing
		);
	}

	/**
	 * Returns the child node for a tuple element, creating and storing it when
	 * necessary.
	 * @private
	 * @param {ArrayElement<K>} thing thing
	 * @returns {WeakTupleMap<K, V>} value
	 */
	_get(thing) {
		if (isWeakKey(thing)) {
			if ((this.f & 4) !== 4) {
				/** @type {W<K, V>} */
				const newMap = new WeakMap();
				this.f |= 4;
				/** @type {WeakTupleMap<K, V>} */
				const newNode = new WeakTupleMap();
				(this.w = newMap).set(thing, newNode);
				return newNode;
			}
			const entry = /** @type {W<K, V>} */ (this.w).get(thing);
			if (entry !== undefined) {
				return entry;
			}
			/** @type {WeakTupleMap<K, V>} */
			const newNode = new WeakTupleMap();
			/** @type {W<K, V>} */
			(this.w).set(thing, newNode);
			return newNode;
		}
		if ((this.f & 2) !== 2) {
			/** @type {M<K, V>} */
			const newMap = new Map();
			this.f |= 2;
			/** @type {WeakTupleMap<K, V>} */
			const newNode = new WeakTupleMap();
			(this.m = newMap).set(thing, newNode);
			return newNode;
		}
		const entry =
			/** @type {M<K, V>} */
			(this.m).get(thing);
		if (entry !== undefined) {
			return entry;
		}
		/** @type {WeakTupleMap<K, V>} */
		const newNode = new WeakTupleMap();
		/** @type {M<K, V>} */
		(this.m).set(thing, newNode);
		return newNode;
	}
}

module.exports = WeakTupleMap;

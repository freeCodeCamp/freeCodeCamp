/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const TupleSet = require("./TupleSet");

/**
 * @template {any[]} T
 */
class TupleQueue {
	/**
	 * @param {Iterable<T>=} items The initial elements.
	 */
	constructor(items) {
		/**
		 * @private
		 * @type {TupleSet<T>}
		 */
		this._set = new TupleSet(items);
		/**
		 * @private
		 * @type {Iterator<T>}
		 */
		this._iterator = this._set[Symbol.iterator]();
	}

	/**
	 * Returns the number of elements in this queue.
	 * @returns {number} The number of elements in this queue.
	 */
	get length() {
		return this._set.size;
	}

	/**
	 * Appends the specified element to this queue.
	 * @param {T} item The element to add.
	 * @returns {void}
	 */
	enqueue(...item) {
		this._set.add(...item);
	}

	/**
	 * Retrieves and removes the head of this queue.
	 * @returns {T | undefined} The head of the queue of `undefined` if this queue is empty.
	 */
	dequeue() {
		const result = this._iterator.next();
		if (result.done) {
			if (this._set.size > 0) {
				this._iterator = this._set[Symbol.iterator]();
				const value = this._iterator.next().value;
				this._set.delete(...value);
				return value;
			}
			return;
		}
		this._set.delete(...result.value);
		return result.value;
	}
}

module.exports = TupleQueue;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * @template T
 */
class Queue {
	/**
	 * @param {Iterable<T>=} items The initial elements.
	 */
	constructor(items) {
		/**
		 * @private
		 * @type {Set<T>}
		 */
		this._set = new Set(items);
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
	enqueue(item) {
		this._set.add(item);
	}

	/**
	 * Retrieves and removes the head of this queue.
	 * @returns {T | undefined} The head of the queue of `undefined` if this queue is empty.
	 */
	dequeue() {
		const result = this._set[Symbol.iterator]().next();
		if (result.done) return;
		this._set.delete(result.value);
		return result.value;
	}
}

module.exports = Queue;

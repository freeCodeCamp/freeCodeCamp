/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * FIFO queue that keeps items unique by storing them in insertion order inside
 * a `Set`.
 * @template T
 */
class Queue {
	/**
	 * Seeds the queue with an optional iterable of initial unique items.
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
	 * Returns the number of unique items currently waiting in the queue.
	 * @returns {number} The number of elements in this queue.
	 */
	get length() {
		return this._set.size;
	}

	/**
	 * Enqueues an item, moving nothing if that value is already present.
	 * @param {T} item The element to add.
	 * @returns {void}
	 */
	enqueue(item) {
		this._set.add(item);
	}

	/**
	 * Removes and returns the oldest enqueued item.
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

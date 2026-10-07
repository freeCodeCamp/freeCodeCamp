/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const TupleSet = require("./TupleSet");

/**
 * FIFO queue for tuples that preserves uniqueness by delegating membership
 * tracking to `TupleSet`.
 * @template T
 * @template V
 */
class TupleQueue {
	/**
	 * Seeds the queue with an optional iterable of tuples to visit.
	 * @param {Iterable<[T, V, ...EXPECTED_ANY]>=} items The initial elements.
	 */
	constructor(items) {
		/**
		 * @private
		 * @type {TupleSet<T, V>}
		 */
		this._set = new TupleSet(items);
		/**
		 * @private
		 * @type {Iterator<[T, V, ...EXPECTED_ANY]>}
		 */
		this._iterator = this._set[Symbol.iterator]();
	}

	/**
	 * Returns the number of distinct tuples currently queued.
	 * @returns {number} The number of elements in this queue.
	 */
	get length() {
		return this._set.size;
	}

	/**
	 * Enqueues a tuple if it is not already present in the underlying set.
	 * @param {[T, V, ...EXPECTED_ANY]} item The element to add.
	 * @returns {void}
	 */
	enqueue(...item) {
		this._set.add(...item);
	}

	/**
	 * Removes and returns the next queued tuple, rebuilding the iterator when
	 * the underlying tuple set has changed since the last full pass.
	 * @returns {[T, V, ...EXPECTED_ANY] | undefined} The head of the queue of `undefined` if this queue is empty.
	 */
	dequeue() {
		const result = this._iterator.next();
		if (result.done) {
			if (this._set.size > 0) {
				this._iterator = this._set[Symbol.iterator]();
				const value =
					/** @type {[T, V, ...EXPECTED_ANY]} */
					(this._iterator.next().value);
				this._set.delete(...value);
				return value;
			}
			return;
		}
		this._set.delete(.../** @type {[T, V, ...EXPECTED_ANY]} */ (result.value));
		return result.value;
	}
}

module.exports = TupleQueue;

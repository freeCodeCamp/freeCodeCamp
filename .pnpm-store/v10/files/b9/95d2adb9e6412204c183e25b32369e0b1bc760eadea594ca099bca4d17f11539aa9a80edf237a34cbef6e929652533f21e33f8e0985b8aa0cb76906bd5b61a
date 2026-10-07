/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * @template T
 */
class ArrayQueue {
	/**
	 * @param {Iterable<T>=} items The initial elements.
	 */
	constructor(items) {
		/**
		 * @private
		 * @type {T[]}
		 */
		this._list = items ? Array.from(items) : [];
		/**
		 * @private
		 * @type {T[]}
		 */
		this._listReversed = [];
	}

	/**
	 * Returns the number of elements in this queue.
	 * @returns {number} The number of elements in this queue.
	 */
	get length() {
		return this._list.length + this._listReversed.length;
	}

	/**
	 * Empties the queue.
	 */
	clear() {
		this._list.length = 0;
		this._listReversed.length = 0;
	}

	/**
	 * Appends the specified element to this queue.
	 * @param {T} item The element to add.
	 * @returns {void}
	 */
	enqueue(item) {
		this._list.push(item);
	}

	/**
	 * Retrieves and removes the head of this queue.
	 * @returns {T | undefined} The head of the queue of `undefined` if this queue is empty.
	 */
	dequeue() {
		if (this._listReversed.length === 0) {
			if (this._list.length === 0) return;
			if (this._list.length === 1) return this._list.pop();
			if (this._list.length < 16) return this._list.shift();
			const temp = this._listReversed;
			this._listReversed = this._list;
			this._listReversed.reverse();
			this._list = temp;
		}
		return this._listReversed.pop();
	}

	/**
	 * Finds and removes an item
	 * @param {T} item the item
	 * @returns {void}
	 */
	delete(item) {
		const i = this._list.indexOf(item);
		if (i >= 0) {
			this._list.splice(i, 1);
		} else {
			const i = this._listReversed.indexOf(item);
			if (i >= 0) this._listReversed.splice(i, 1);
		}
	}

	[Symbol.iterator]() {
		return {
			next: () => {
				const item = this.dequeue();
				if (item) {
					return {
						done: false,
						value: item
					};
				}
				return {
					done: true,
					value: undefined
				};
			}
		};
	}
}

module.exports = ArrayQueue;

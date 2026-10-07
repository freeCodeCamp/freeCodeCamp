/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * @template T
 * @template {Error} E
 * @param {Iterable<T>} items initial items
 * @param {number} concurrency number of items running in parallel
 * @param {function(T, function(T): void, function(E=): void): void} processor worker which pushes more items
 * @param {function(E=): void} callback all items processed
 * @returns {void}
 */
const processAsyncTree = (items, concurrency, processor, callback) => {
	const queue = Array.from(items);
	if (queue.length === 0) return callback();
	let processing = 0;
	let finished = false;
	let processScheduled = true;

	/**
	 * @param {T} item item
	 */
	const push = item => {
		queue.push(item);
		if (!processScheduled && processing < concurrency) {
			processScheduled = true;
			process.nextTick(processQueue);
		}
	};

	/**
	 * @param {E | null | undefined} err error
	 */
	const processorCallback = err => {
		processing--;
		if (err && !finished) {
			finished = true;
			callback(err);
			return;
		}
		if (!processScheduled) {
			processScheduled = true;
			process.nextTick(processQueue);
		}
	};

	const processQueue = () => {
		if (finished) return;
		while (processing < concurrency && queue.length > 0) {
			processing++;
			const item = /** @type {T} */ (queue.pop());
			processor(item, push, processorCallback);
		}
		processScheduled = false;
		if (queue.length === 0 && processing === 0 && !finished) {
			finished = true;
			callback();
		}
	};

	processQueue();
};

module.exports = processAsyncTree;

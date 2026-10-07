/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * Walks a dynamically expanding async work tree with bounded concurrency.
 * Each processed item may enqueue more items through `push`, allowing callers
 * to model breadth-first or depth-first discovery without managing the queue
 * themselves.
 * @template T
 * @template {Error} E
 * @param {Iterable<T>} items initial items
 * @param {number} concurrency number of items running in parallel
 * @param {(item: T, push: (item: T) => void, callback: (err?: E) => void) => void} processor worker which pushes more items
 * @param {(err?: E) => void} callback all items processed
 * @returns {void}
 */
const processAsyncTree = (items, concurrency, processor, callback) => {
	const queue = [...items];
	if (queue.length === 0) return callback();
	let processing = 0;
	let finished = false;
	let processScheduled = true;

	/**
	 * Enqueues a newly discovered item and schedules queue processing when the
	 * current concurrency budget allows more work to start.
	 * @param {T} item item
	 */
	const push = (item) => {
		queue.push(item);
		if (!processScheduled && processing < concurrency) {
			processScheduled = true;
			process.nextTick(processQueue);
		}
	};

	/**
	 * Handles completion of a single processor call, propagating the first
	 * error and scheduling more queued work when possible.
	 * @param {E | null | undefined} err error
	 */
	const processorCallback = (err) => {
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

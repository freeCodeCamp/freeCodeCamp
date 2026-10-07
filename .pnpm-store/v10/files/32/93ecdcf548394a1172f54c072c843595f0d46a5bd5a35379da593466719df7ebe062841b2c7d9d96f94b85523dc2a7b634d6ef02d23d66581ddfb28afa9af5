/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { AsyncSeriesHook, SyncHook } = require("tapable");
const { makeWebpackError } = require("../HookWebpackError");
const WebpackError = require("../WebpackError");
const ArrayQueue = require("./ArrayQueue");

const QUEUED_STATE = 0;
const PROCESSING_STATE = 1;
const DONE_STATE = 2;

let inHandleResult = 0;

/**
 * Defines the callback callback.
 * @template T
 * @callback Callback
 * @param {(WebpackError | null)=} err
 * @param {(T | null)=} result
 * @returns {void}
 */

/**
 * Represents AsyncQueueEntry.
 * @template T
 * @template K
 * @template R
 */
class AsyncQueueEntry {
	/**
	 * Creates an instance of AsyncQueueEntry.
	 * @param {T} item the item
	 * @param {Callback<R>} callback the callback
	 */
	constructor(item, callback) {
		this.item = item;
		/** @type {typeof QUEUED_STATE | typeof PROCESSING_STATE | typeof DONE_STATE} */
		this.state = QUEUED_STATE;
		/** @type {Callback<R> | undefined} */
		this.callback = callback;
		/** @type {Callback<R>[] | undefined} */
		this.callbacks = undefined;
		/** @type {R | null | undefined} */
		this.result = undefined;
		/** @type {WebpackError | null | undefined} */
		this.error = undefined;
	}
}

/**
 * Defines the get key type used by this module.
 * @template T, K
 * @typedef {(item: T) => K} getKey
 */

/**
 * Defines the processor type used by this module.
 * @template T, R
 * @typedef {(item: T, callback: Callback<R>) => void} Processor
 */

/**
 * Represents AsyncQueue.
 * @template T
 * @template K
 * @template R
 */
class AsyncQueue {
	/**
	 * Creates an instance of AsyncQueue.
	 * @param {object} options options object
	 * @param {string=} options.name name of the queue
	 * @param {number=} options.parallelism how many items should be processed at once
	 * @param {string=} options.context context of execution
	 * @param {AsyncQueue<EXPECTED_ANY, EXPECTED_ANY, EXPECTED_ANY>=} options.parent parent queue, which will have priority over this queue and with shared parallelism
	 * @param {getKey<T, K>=} options.getKey extract key from item
	 * @param {Processor<T, R>} options.processor async function to process items
	 */
	constructor({ name, context, parallelism, parent, processor, getKey }) {
		this._name = name;
		this._context = context || "normal";
		this._parallelism = parallelism || 1;
		this._processor = processor;
		this._getKey =
			getKey ||
			/** @type {getKey<T, K>} */ ((item) => /** @type {T & K} */ (item));
		/** @type {Map<K, AsyncQueueEntry<T, K, R>>} */
		this._entries = new Map();
		/** @type {ArrayQueue<AsyncQueueEntry<T, K, R>>} */
		this._queued = new ArrayQueue();
		/** @type {AsyncQueue<T, K, R>[] | undefined} */
		this._children = undefined;
		this._activeTasks = 0;
		this._willEnsureProcessing = false;
		this._needProcessing = false;
		this._stopped = false;
		/** @type {AsyncQueue<T, K, R>} */
		this._root = parent ? parent._root : this;
		if (parent) {
			if (this._root._children === undefined) {
				this._root._children = [this];
			} else {
				this._root._children.push(this);
			}
		}

		this.hooks = {
			/** @type {AsyncSeriesHook<[T]>} */
			beforeAdd: new AsyncSeriesHook(["item"]),
			/** @type {SyncHook<[T]>} */
			added: new SyncHook(["item"]),
			/** @type {AsyncSeriesHook<[T]>} */
			beforeStart: new AsyncSeriesHook(["item"]),
			/** @type {SyncHook<[T]>} */
			started: new SyncHook(["item"]),
			/** @type {SyncHook<[T, WebpackError | null | undefined, R | null | undefined]>} */
			result: new SyncHook(["item", "error", "result"])
		};

		this._ensureProcessing = this._ensureProcessing.bind(this);
	}

	/**
	 * Returns context of execution.
	 * @returns {string} context of execution
	 */
	getContext() {
		return this._context;
	}

	/**
	 * Updates context using the provided value.
	 * @param {string} value context of execution
	 */
	setContext(value) {
		this._context = value;
	}

	/**
	 * Processes the provided item.
	 * @param {T} item an item
	 * @param {Callback<R>} callback callback function
	 * @returns {void}
	 */
	add(item, callback) {
		if (this._stopped) return callback(new WebpackError("Queue was stopped"));
		this.hooks.beforeAdd.callAsync(item, (err) => {
			if (err) {
				callback(
					makeWebpackError(err, `AsyncQueue(${this._name}).hooks.beforeAdd`)
				);
				return;
			}
			const key = this._getKey(item);
			const entry = this._entries.get(key);
			if (entry !== undefined) {
				if (entry.state === DONE_STATE) {
					if (inHandleResult++ > 3) {
						process.nextTick(() => callback(entry.error, entry.result));
					} else {
						callback(entry.error, entry.result);
					}
					inHandleResult--;
				} else if (entry.callbacks === undefined) {
					entry.callbacks = [callback];
				} else {
					entry.callbacks.push(callback);
				}
				return;
			}
			const newEntry = new AsyncQueueEntry(item, callback);
			if (this._stopped) {
				this.hooks.added.call(item);
				this._root._activeTasks++;
				process.nextTick(() =>
					this._handleResult(newEntry, new WebpackError("Queue was stopped"))
				);
			} else {
				this._entries.set(key, newEntry);
				this._queued.enqueue(newEntry);
				const root = this._root;
				root._needProcessing = true;
				if (root._willEnsureProcessing === false) {
					root._willEnsureProcessing = true;
					setImmediate(root._ensureProcessing);
				}
				this.hooks.added.call(item);
			}
		});
	}

	/**
	 * Processes the provided item.
	 * @param {T} item an item
	 * @returns {void}
	 */
	invalidate(item) {
		const key = this._getKey(item);
		const entry =
			/** @type {AsyncQueueEntry<T, K, R>} */
			(this._entries.get(key));
		this._entries.delete(key);
		if (entry.state === QUEUED_STATE) {
			this._queued.delete(entry);
		}
	}

	/**
	 * Waits for an already started item
	 * @param {T} item an item
	 * @param {Callback<R>} callback callback function
	 * @returns {void}
	 */
	waitFor(item, callback) {
		const key = this._getKey(item);
		const entry = this._entries.get(key);
		if (entry === undefined) {
			return callback(
				new WebpackError(
					"waitFor can only be called for an already started item"
				)
			);
		}
		if (entry.state === DONE_STATE) {
			process.nextTick(() => callback(entry.error, entry.result));
		} else if (entry.callbacks === undefined) {
			entry.callbacks = [callback];
		} else {
			entry.callbacks.push(callback);
		}
	}

	/**
	 * Describes how this stop operation behaves.
	 * @returns {void}
	 */
	stop() {
		this._stopped = true;
		const queue = this._queued;
		this._queued = new ArrayQueue();
		const root = this._root;
		for (const entry of queue) {
			this._entries.delete(
				this._getKey(/** @type {AsyncQueueEntry<T, K, R>} */ (entry).item)
			);
			root._activeTasks++;
			this._handleResult(
				/** @type {AsyncQueueEntry<T, K, R>} */ (entry),
				new WebpackError("Queue was stopped")
			);
		}
	}

	/**
	 * Increase parallelism.
	 * @returns {void}
	 */
	increaseParallelism() {
		const root = this._root;
		root._parallelism++;
		/* istanbul ignore next */
		if (root._willEnsureProcessing === false && root._needProcessing) {
			root._willEnsureProcessing = true;
			setImmediate(root._ensureProcessing);
		}
	}

	/**
	 * Decrease parallelism.
	 * @returns {void}
	 */
	decreaseParallelism() {
		const root = this._root;
		root._parallelism--;
	}

	/**
	 * Checks whether this async queue is processing.
	 * @param {T} item an item
	 * @returns {boolean} true, if the item is currently being processed
	 */
	isProcessing(item) {
		const key = this._getKey(item);
		const entry = this._entries.get(key);
		return entry !== undefined && entry.state === PROCESSING_STATE;
	}

	/**
	 * Checks whether this async queue is queued.
	 * @param {T} item an item
	 * @returns {boolean} true, if the item is currently queued
	 */
	isQueued(item) {
		const key = this._getKey(item);
		const entry = this._entries.get(key);
		return entry !== undefined && entry.state === QUEUED_STATE;
	}

	/**
	 * Checks whether this async queue is done.
	 * @param {T} item an item
	 * @returns {boolean} true, if the item is currently queued
	 */
	isDone(item) {
		const key = this._getKey(item);
		const entry = this._entries.get(key);
		return entry !== undefined && entry.state === DONE_STATE;
	}

	/**
	 * Describes how this ensure processing operation behaves.
	 * @returns {void}
	 */
	_ensureProcessing() {
		while (this._activeTasks < this._parallelism) {
			const entry = this._queued.dequeue();
			if (entry === undefined) break;
			this._activeTasks++;
			entry.state = PROCESSING_STATE;
			this._startProcessing(entry);
		}
		this._willEnsureProcessing = false;
		if (this._queued.length > 0) return;
		if (this._children !== undefined) {
			for (const child of this._children) {
				while (this._activeTasks < this._parallelism) {
					const entry = child._queued.dequeue();
					if (entry === undefined) break;
					this._activeTasks++;
					entry.state = PROCESSING_STATE;
					child._startProcessing(entry);
				}
				if (child._queued.length > 0) return;
			}
		}
		if (!this._willEnsureProcessing) this._needProcessing = false;
	}

	/**
	 * Processes the provided entry.
	 * @param {AsyncQueueEntry<T, K, R>} entry the entry
	 * @returns {void}
	 */
	_startProcessing(entry) {
		this.hooks.beforeStart.callAsync(entry.item, (err) => {
			if (err) {
				this._handleResult(
					entry,
					makeWebpackError(err, `AsyncQueue(${this._name}).hooks.beforeStart`)
				);
				return;
			}
			let inCallback = false;
			try {
				this._processor(entry.item, (e, r) => {
					inCallback = true;
					this._handleResult(entry, e, r);
				});
			} catch (err) {
				if (inCallback) throw err;
				this._handleResult(entry, /** @type {WebpackError} */ (err), null);
			}
			this.hooks.started.call(entry.item);
		});
	}

	/**
	 * Processes the provided entry.
	 * @param {AsyncQueueEntry<T, K, R>} entry the entry
	 * @param {(WebpackError | null)=} err error, if any
	 * @param {(R | null)=} result result, if any
	 * @returns {void}
	 */
	_handleResult(entry, err, result) {
		this.hooks.result.callAsync(entry.item, err, result, (hookError) => {
			const error = hookError
				? makeWebpackError(hookError, `AsyncQueue(${this._name}).hooks.result`)
				: err;

			const callback = /** @type {Callback<R>} */ (entry.callback);
			const callbacks = entry.callbacks;
			entry.state = DONE_STATE;
			entry.callback = undefined;
			entry.callbacks = undefined;
			entry.result = result;
			entry.error = error;

			const root = this._root;
			root._activeTasks--;
			if (root._willEnsureProcessing === false && root._needProcessing) {
				root._willEnsureProcessing = true;
				setImmediate(root._ensureProcessing);
			}

			if (inHandleResult++ > 3) {
				process.nextTick(() => {
					callback(error, result);
					if (callbacks !== undefined) {
						for (const callback of callbacks) {
							callback(error, result);
						}
					}
				});
			} else {
				callback(error, result);
				if (callbacks !== undefined) {
					for (const callback of callbacks) {
						callback(error, result);
					}
				}
			}
			inHandleResult--;
		});
	}

	clear() {
		this._entries.clear();
		this._queued.clear();
		this._activeTasks = 0;
		this._willEnsureProcessing = false;
		this._needProcessing = false;
		this._stopped = false;
	}
}

module.exports = AsyncQueue;

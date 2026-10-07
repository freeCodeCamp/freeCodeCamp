/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { AsyncParallelHook, AsyncSeriesBailHook, SyncHook } = require("tapable");
const {
	makeWebpackError,
	makeWebpackErrorCallback
} = require("./HookWebpackError");

/** @typedef {import("./WebpackError")} WebpackError */

/**
 * Cache validation token whose string representation identifies the build
 * inputs associated with a cached value.
 * @typedef {object} Etag
 * @property {() => string} toString
 */

/**
 * Completion callback used by cache operations that either fail with a
 * `WebpackError` or resolve with a typed result.
 * @template T
 * @callback CallbackCache
 * @param {WebpackError | null} err
 * @param {T=} result
 * @returns {void}
 */

/** @typedef {EXPECTED_ANY} Data */

/**
 * Handler invoked after a cache read succeeds so additional cache layers can
 * react to the retrieved value.
 * @template T
 * @callback GotHandler
 * @param {T} result
 * @param {() => void} callback
 * @returns {void}
 */

/**
 * Creates a callback wrapper that waits for a fixed number of completions and
 * forwards the first error immediately.
 * @param {number} times times
 * @param {(err?: Error | null) => void} callback callback
 * @returns {(err?: Error | null) => void} callback
 */
const needCalls = (times, callback) => (err) => {
	if (--times === 0) {
		return callback(err);
	}
	if (err && times > 0) {
		times = 0;
		return callback(err);
	}
};

/**
 * Abstract cache interface backed by tapable hooks for reading, writing, idle
 * transitions, and shutdown across webpack cache implementations.
 */
class Cache {
	/**
	 * Initializes the cache lifecycle hooks implemented by cache backends.
	 */
	constructor() {
		this.hooks = {
			/** @type {AsyncSeriesBailHook<[string, Etag | null, GotHandler<EXPECTED_ANY>[]], Data>} */
			get: new AsyncSeriesBailHook(["identifier", "etag", "gotHandlers"]),
			/** @type {AsyncParallelHook<[string, Etag | null, Data]>} */
			store: new AsyncParallelHook(["identifier", "etag", "data"]),
			/** @type {AsyncParallelHook<[Iterable<string>]>} */
			storeBuildDependencies: new AsyncParallelHook(["dependencies"]),
			/** @type {SyncHook<[]>} */
			beginIdle: new SyncHook([]),
			/** @type {AsyncParallelHook<[]>} */
			endIdle: new AsyncParallelHook([]),
			/** @type {AsyncParallelHook<[]>} */
			shutdown: new AsyncParallelHook([])
		};
	}

	/**
	 * Retrieves a cached value and lets registered `gotHandlers` observe the
	 * result before the caller receives it.
	 * @template T
	 * @param {string} identifier the cache identifier
	 * @param {Etag | null} etag the etag
	 * @param {CallbackCache<T>} callback signals when the value is retrieved
	 * @returns {void}
	 */
	get(identifier, etag, callback) {
		/** @type {GotHandler<T>[]} */
		const gotHandlers = [];
		this.hooks.get.callAsync(identifier, etag, gotHandlers, (err, result) => {
			if (err) {
				callback(makeWebpackError(err, "Cache.hooks.get"));
				return;
			}
			if (result === null) {
				result = undefined;
			}
			if (gotHandlers.length > 1) {
				const innerCallback = needCalls(gotHandlers.length, () =>
					callback(null, result)
				);
				for (const gotHandler of gotHandlers) {
					gotHandler(result, innerCallback);
				}
			} else if (gotHandlers.length === 1) {
				gotHandlers[0](result, () => callback(null, result));
			} else {
				callback(null, result);
			}
		});
	}

	/**
	 * Stores a cache entry for the identifier and etag through the registered
	 * cache backend hooks.
	 * @template T
	 * @param {string} identifier the cache identifier
	 * @param {Etag | null} etag the etag
	 * @param {T} data the value to store
	 * @param {CallbackCache<void>} callback signals when the value is stored
	 * @returns {void}
	 */
	store(identifier, etag, data, callback) {
		this.hooks.store.callAsync(
			identifier,
			etag,
			data,
			makeWebpackErrorCallback(callback, "Cache.hooks.store")
		);
	}

	/**
	 * Persists the set of build dependencies required to determine whether the
	 * cache can be restored in a future compilation.
	 * @param {Iterable<string>} dependencies list of all build dependencies
	 * @param {CallbackCache<void>} callback signals when the dependencies are stored
	 * @returns {void}
	 */
	storeBuildDependencies(dependencies, callback) {
		this.hooks.storeBuildDependencies.callAsync(
			dependencies,
			makeWebpackErrorCallback(callback, "Cache.hooks.storeBuildDependencies")
		);
	}

	/**
	 * Signals that webpack is entering an idle phase and cache backends may flush
	 * or compact pending work.
	 * @returns {void}
	 */
	beginIdle() {
		this.hooks.beginIdle.call();
	}

	/**
	 * Signals that webpack is leaving the idle phase and waits for cache
	 * backends to finish any asynchronous resume work.
	 * @param {CallbackCache<void>} callback signals when the call finishes
	 * @returns {void}
	 */
	endIdle(callback) {
		this.hooks.endIdle.callAsync(
			makeWebpackErrorCallback(callback, "Cache.hooks.endIdle")
		);
	}

	/**
	 * Shuts down every registered cache backend and waits for cleanup to finish.
	 * @param {CallbackCache<void>} callback signals when the call finishes
	 * @returns {void}
	 */
	shutdown(callback) {
		this.hooks.shutdown.callAsync(
			makeWebpackErrorCallback(callback, "Cache.hooks.shutdown")
		);
	}
}

Cache.STAGE_MEMORY = -10;
Cache.STAGE_DEFAULT = 0;
Cache.STAGE_DISK = 10;
Cache.STAGE_NETWORK = 20;

module.exports = Cache;

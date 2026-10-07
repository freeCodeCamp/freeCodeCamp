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
 * @typedef {object} Etag
 * @property {function(): string} toString
 */

/**
 * @template T
 * @callback CallbackCache
 * @param {WebpackError | null} err
 * @param {T=} result
 * @returns {void}
 */

/**
 * @callback GotHandler
 * @param {any} result
 * @param {function(Error=): void} callback
 * @returns {void}
 */

/**
 * @param {number} times times
 * @param {function(Error=): void} callback callback
 * @returns {function(Error=): void} callback
 */
const needCalls = (times, callback) => err => {
	if (--times === 0) {
		return callback(err);
	}
	if (err && times > 0) {
		times = 0;
		return callback(err);
	}
};

class Cache {
	constructor() {
		this.hooks = {
			/** @type {AsyncSeriesBailHook<[string, Etag | null, GotHandler[]], any>} */
			get: new AsyncSeriesBailHook(["identifier", "etag", "gotHandlers"]),
			/** @type {AsyncParallelHook<[string, Etag | null, any]>} */
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
	 * @template T
	 * @param {string} identifier the cache identifier
	 * @param {Etag | null} etag the etag
	 * @param {CallbackCache<T>} callback signals when the value is retrieved
	 * @returns {void}
	 */
	get(identifier, etag, callback) {
		/** @type {GotHandler[]} */
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
	 * After this method has succeeded the cache can only be restored when build dependencies are
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
	 * @returns {void}
	 */
	beginIdle() {
		this.hooks.beginIdle.call();
	}

	/**
	 * @param {CallbackCache<void>} callback signals when the call finishes
	 * @returns {void}
	 */
	endIdle(callback) {
		this.hooks.endIdle.callAsync(
			makeWebpackErrorCallback(callback, "Cache.hooks.endIdle")
		);
	}

	/**
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

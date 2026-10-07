/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { forEachBail } = require("enhanced-resolve");
const asyncLib = require("neo-async");
const getLazyHashedEtag = require("./cache/getLazyHashedEtag");
const mergeEtags = require("./cache/mergeEtags");

/** @typedef {import("./Cache")} Cache */
/** @typedef {import("./Cache").Etag} Etag */
/** @typedef {import("./WebpackError")} WebpackError */
/** @typedef {import("./cache/getLazyHashedEtag").HashableObject} HashableObject */
/** @typedef {typeof import("./util/Hash")} HashConstructor */

/**
 * @template T
 * @callback CallbackCache
 * @param {(Error | null)=} err
 * @param {(T | null)=} result
 * @returns {void}
 */

/**
 * @template T
 * @callback CallbackNormalErrorCache
 * @param {(Error | null)=} err
 * @param {T=} result
 * @returns {void}
 */

class MultiItemCache {
	/**
	 * @param {ItemCacheFacade[]} items item caches
	 */
	constructor(items) {
		this._items = items;
		// eslint-disable-next-line no-constructor-return
		if (items.length === 1) return /** @type {any} */ (items[0]);
	}

	/**
	 * @template T
	 * @param {CallbackCache<T>} callback signals when the value is retrieved
	 * @returns {void}
	 */
	get(callback) {
		forEachBail(this._items, (item, callback) => item.get(callback), callback);
	}

	/**
	 * @template T
	 * @returns {Promise<T>} promise with the data
	 */
	getPromise() {
		/**
		 * @param {number} i index
		 * @returns {Promise<T>} promise with the data
		 */
		const next = i =>
			this._items[i].getPromise().then(result => {
				if (result !== undefined) return result;
				if (++i < this._items.length) return next(i);
			});
		return next(0);
	}

	/**
	 * @template T
	 * @param {T} data the value to store
	 * @param {CallbackCache<void>} callback signals when the value is stored
	 * @returns {void}
	 */
	store(data, callback) {
		asyncLib.each(
			this._items,
			(item, callback) => item.store(data, callback),
			callback
		);
	}

	/**
	 * @template T
	 * @param {T} data the value to store
	 * @returns {Promise<void>} promise signals when the value is stored
	 */
	storePromise(data) {
		return Promise.all(this._items.map(item => item.storePromise(data))).then(
			() => {}
		);
	}
}

class ItemCacheFacade {
	/**
	 * @param {Cache} cache the root cache
	 * @param {string} name the child cache item name
	 * @param {Etag | null} etag the etag
	 */
	constructor(cache, name, etag) {
		this._cache = cache;
		this._name = name;
		this._etag = etag;
	}

	/**
	 * @template T
	 * @param {CallbackCache<T>} callback signals when the value is retrieved
	 * @returns {void}
	 */
	get(callback) {
		this._cache.get(this._name, this._etag, callback);
	}

	/**
	 * @template T
	 * @returns {Promise<T>} promise with the data
	 */
	getPromise() {
		return new Promise((resolve, reject) => {
			this._cache.get(this._name, this._etag, (err, data) => {
				if (err) {
					reject(err);
				} else {
					resolve(data);
				}
			});
		});
	}

	/**
	 * @template T
	 * @param {T} data the value to store
	 * @param {CallbackCache<void>} callback signals when the value is stored
	 * @returns {void}
	 */
	store(data, callback) {
		this._cache.store(this._name, this._etag, data, callback);
	}

	/**
	 * @template T
	 * @param {T} data the value to store
	 * @returns {Promise<void>} promise signals when the value is stored
	 */
	storePromise(data) {
		return new Promise((resolve, reject) => {
			this._cache.store(this._name, this._etag, data, err => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
		});
	}

	/**
	 * @template T
	 * @param {function(CallbackNormalErrorCache<T>): void} computer function to compute the value if not cached
	 * @param {CallbackNormalErrorCache<T>} callback signals when the value is retrieved
	 * @returns {void}
	 */
	provide(computer, callback) {
		this.get((err, cacheEntry) => {
			if (err) return callback(err);
			if (cacheEntry !== undefined) return cacheEntry;
			computer((err, result) => {
				if (err) return callback(err);
				this.store(result, err => {
					if (err) return callback(err);
					callback(null, result);
				});
			});
		});
	}

	/**
	 * @template T
	 * @param {function(): Promise<T> | T} computer function to compute the value if not cached
	 * @returns {Promise<T>} promise with the data
	 */
	async providePromise(computer) {
		const cacheEntry = await this.getPromise();
		if (cacheEntry !== undefined) return cacheEntry;
		const result = await computer();
		await this.storePromise(result);
		return result;
	}
}

class CacheFacade {
	/**
	 * @param {Cache} cache the root cache
	 * @param {string} name the child cache name
	 * @param {(string | HashConstructor)=} hashFunction the hash function to use
	 */
	constructor(cache, name, hashFunction) {
		this._cache = cache;
		this._name = name;
		this._hashFunction = hashFunction;
	}

	/**
	 * @param {string} name the child cache name#
	 * @returns {CacheFacade} child cache
	 */
	getChildCache(name) {
		return new CacheFacade(
			this._cache,
			`${this._name}|${name}`,
			this._hashFunction
		);
	}

	/**
	 * @param {string} identifier the cache identifier
	 * @param {Etag | null} etag the etag
	 * @returns {ItemCacheFacade} item cache
	 */
	getItemCache(identifier, etag) {
		return new ItemCacheFacade(
			this._cache,
			`${this._name}|${identifier}`,
			etag
		);
	}

	/**
	 * @param {HashableObject} obj an hashable object
	 * @returns {Etag} an etag that is lazy hashed
	 */
	getLazyHashedEtag(obj) {
		return getLazyHashedEtag(obj, this._hashFunction);
	}

	/**
	 * @param {Etag} a an etag
	 * @param {Etag} b another etag
	 * @returns {Etag} an etag that represents both
	 */
	mergeEtags(a, b) {
		return mergeEtags(a, b);
	}

	/**
	 * @template T
	 * @param {string} identifier the cache identifier
	 * @param {Etag | null} etag the etag
	 * @param {CallbackCache<T>} callback signals when the value is retrieved
	 * @returns {void}
	 */
	get(identifier, etag, callback) {
		this._cache.get(`${this._name}|${identifier}`, etag, callback);
	}

	/**
	 * @template T
	 * @param {string} identifier the cache identifier
	 * @param {Etag | null} etag the etag
	 * @returns {Promise<T>} promise with the data
	 */
	getPromise(identifier, etag) {
		return new Promise((resolve, reject) => {
			this._cache.get(`${this._name}|${identifier}`, etag, (err, data) => {
				if (err) {
					reject(err);
				} else {
					resolve(data);
				}
			});
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
		this._cache.store(`${this._name}|${identifier}`, etag, data, callback);
	}

	/**
	 * @template T
	 * @param {string} identifier the cache identifier
	 * @param {Etag | null} etag the etag
	 * @param {T} data the value to store
	 * @returns {Promise<void>} promise signals when the value is stored
	 */
	storePromise(identifier, etag, data) {
		return new Promise((resolve, reject) => {
			this._cache.store(`${this._name}|${identifier}`, etag, data, err => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
		});
	}

	/**
	 * @template T
	 * @param {string} identifier the cache identifier
	 * @param {Etag | null} etag the etag
	 * @param {function(CallbackNormalErrorCache<T>): void} computer function to compute the value if not cached
	 * @param {CallbackNormalErrorCache<T>} callback signals when the value is retrieved
	 * @returns {void}
	 */
	provide(identifier, etag, computer, callback) {
		this.get(identifier, etag, (err, cacheEntry) => {
			if (err) return callback(err);
			if (cacheEntry !== undefined) return cacheEntry;
			computer((err, result) => {
				if (err) return callback(err);
				this.store(identifier, etag, result, err => {
					if (err) return callback(err);
					callback(null, result);
				});
			});
		});
	}

	/**
	 * @template T
	 * @param {string} identifier the cache identifier
	 * @param {Etag | null} etag the etag
	 * @param {function(): Promise<T> | T} computer function to compute the value if not cached
	 * @returns {Promise<T>} promise with the data
	 */
	async providePromise(identifier, etag, computer) {
		const cacheEntry = await this.getPromise(identifier, etag);
		if (cacheEntry !== undefined) return cacheEntry;
		const result = await computer();
		await this.storePromise(identifier, etag, result);
		return result;
	}
}

module.exports = CacheFacade;
module.exports.ItemCacheFacade = ItemCacheFacade;
module.exports.MultiItemCache = MultiItemCache;

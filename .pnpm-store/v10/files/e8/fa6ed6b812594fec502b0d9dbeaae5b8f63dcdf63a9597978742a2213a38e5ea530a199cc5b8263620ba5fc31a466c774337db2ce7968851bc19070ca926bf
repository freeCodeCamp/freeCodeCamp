/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Alexander Akait @alexander-akait
*/

"use strict";

const Hash = require("../Hash");
const { digest, update } = require("./hash-digest");

/** @typedef {import("../../../declarations/WebpackOptions").HashDigest} Encoding */
/** @typedef {() => Hash} HashFactory */

const BULK_SIZE = 3;

// We are using an object instead of a Map as this will stay static during the runtime
// so access to it can be optimized by v8
/** @type {{ [key: string]: Map<string, string> }} */
const digestCaches = {};

class BulkUpdateHash extends Hash {
	/**
	 * Creates an instance of BulkUpdateHash.
	 * @param {Hash | HashFactory} hashOrFactory function to create a hash
	 * @param {string=} hashKey key for caching
	 */
	constructor(hashOrFactory, hashKey) {
		super();
		/** @type {undefined | string} */
		this.hashKey = hashKey;
		if (typeof hashOrFactory === "function") {
			/** @type {undefined | HashFactory} */
			this.hashFactory = hashOrFactory;
			/** @type {undefined | Hash} */
			this.hash = undefined;
		} else {
			/** @type {undefined | HashFactory} */
			this.hashFactory = undefined;
			/** @type {undefined | Hash} */
			this.hash = hashOrFactory;
		}
		/** @type {string} */
		this.buffer = "";
	}

	/**
	 * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
	 * @overload
	 * @param {string | Buffer} data data
	 * @returns {Hash} updated hash
	 */
	/**
	 * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
	 * @overload
	 * @param {string} data data
	 * @param {Encoding} inputEncoding data encoding
	 * @returns {Hash} updated hash
	 */
	/**
	 * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
	 * @param {string | Buffer} data data
	 * @param {Encoding=} inputEncoding data encoding
	 * @returns {Hash} updated hash
	 */
	update(data, inputEncoding) {
		if (
			inputEncoding !== undefined ||
			typeof data !== "string" ||
			data.length > BULK_SIZE
		) {
			if (this.hash === undefined) {
				this.hash = /** @type {HashFactory} */ (this.hashFactory)();
			}
			if (this.buffer.length > 0) {
				update(this.hash, this.buffer);
				this.buffer = "";
			}
			if (typeof data === "string" && inputEncoding) {
				update(this.hash, data, inputEncoding);
			} else {
				update(this.hash, data);
			}
		} else {
			this.buffer += data;
			if (this.buffer.length > BULK_SIZE) {
				if (this.hash === undefined) {
					this.hash = /** @type {HashFactory} */ (this.hashFactory)();
				}
				update(this.hash, this.buffer);
				this.buffer = "";
			}
		}
		return this;
	}

	/**
	 * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
	 * @overload
	 * @returns {Buffer} digest
	 */
	/**
	 * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
	 * @overload
	 * @param {Encoding} encoding encoding of the return value
	 * @returns {string} digest
	 */
	/**
	 * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
	 * @param {Encoding=} encoding encoding of the return value
	 * @returns {string | Buffer} digest
	 */
	digest(encoding) {
		/** @type {undefined | Map<string, string | Buffer>} */
		let digestCache;
		const buffer = this.buffer;
		if (this.hash === undefined) {
			// short data for hash, we can use caching
			const cacheKey = `${this.hashKey}-${encoding}`;
			digestCache = digestCaches[cacheKey];
			if (digestCache === undefined) {
				digestCache = digestCaches[cacheKey] = new Map();
			}
			const cacheEntry = digestCache.get(buffer);
			if (cacheEntry !== undefined) return cacheEntry;
			this.hash = /** @type {HashFactory} */ (this.hashFactory)();
		}

		if (buffer.length > 0) {
			update(this.hash, buffer);
		}
		if (!encoding) {
			const result = digest(this.hash, undefined, Boolean(this.hashKey));
			if (digestCache !== undefined) {
				digestCache.set(buffer, result);
			}
			return result;
		}
		const result = digest(this.hash, encoding, Boolean(this.hashKey));
		if (digestCache !== undefined) {
			digestCache.set(buffer, result);
		}
		return result;
	}
}

module.exports = BulkUpdateHash;

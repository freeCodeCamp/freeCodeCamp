/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Hash = require("../Hash");
const { digest, update } = require("./hash-digest");
/** @type {number} */
const MAX_SHORT_STRING = require("./wasm-hash").MAX_SHORT_STRING;

/** @typedef {import("../../../declarations/WebpackOptions").HashDigest} Encoding */

class BatchedHash extends Hash {
	/**
	 * Creates an instance of BatchedHash.
	 * @param {Hash} hash hash
	 */
	constructor(hash) {
		super();
		/** @type {undefined | string} */
		this.string = undefined;
		/** @type {undefined | Encoding} */
		this.encoding = undefined;
		/** @type {Hash} */
		this.hash = hash;
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
		if (this.string !== undefined) {
			if (
				typeof data === "string" &&
				inputEncoding === this.encoding &&
				this.string.length + data.length < MAX_SHORT_STRING
			) {
				this.string += data;
				return this;
			}
			if (this.encoding) {
				update(this.hash, this.string, this.encoding);
			} else {
				update(this.hash, this.string);
			}
			this.string = undefined;
		}
		if (typeof data === "string") {
			if (
				data.length < MAX_SHORT_STRING &&
				// base64 encoding is not valid since it may contain padding chars
				(!inputEncoding || !inputEncoding.startsWith("ba"))
			) {
				this.string = data;
				this.encoding = inputEncoding;
			} else if (inputEncoding) {
				update(this.hash, data, inputEncoding);
			} else {
				update(this.hash, data);
			}
		} else {
			update(this.hash, data);
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
		if (this.string !== undefined) {
			if (this.encoding) {
				update(this.hash, this.string, this.encoding);
			} else {
				update(this.hash, this.string);
			}
		}
		if (!encoding) {
			return digest(this.hash);
		}
		return digest(this.hash, encoding);
	}
}

module.exports = BatchedHash;

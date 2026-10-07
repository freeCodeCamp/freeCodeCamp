/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Hash = require("../Hash");
const MAX_SHORT_STRING = require("./wasm-hash").MAX_SHORT_STRING;

class BatchedHash extends Hash {
	/**
	 * @param {Hash} hash hash
	 */
	constructor(hash) {
		super();
		this.string = undefined;
		this.encoding = undefined;
		this.hash = hash;
	}

	/**
	 * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
	 * @param {string|Buffer} data data
	 * @param {string=} inputEncoding data encoding
	 * @returns {this} updated hash
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
			this.hash.update(this.string, this.encoding);
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
			} else {
				this.hash.update(data, inputEncoding);
			}
		} else {
			this.hash.update(data);
		}
		return this;
	}

	/**
	 * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
	 * @param {string=} encoding encoding of the return value
	 * @returns {string|Buffer} digest
	 */
	digest(encoding) {
		if (this.string !== undefined) {
			this.hash.update(this.string, this.encoding);
		}
		return this.hash.digest(encoding);
	}
}

module.exports = BatchedHash;

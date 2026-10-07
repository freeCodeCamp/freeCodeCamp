/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Alexander Akait @alexander-akait
*/

"use strict";

const Hash = require("../Hash");

/** @typedef {import("../../../declarations/WebpackOptions").HashDigest} Encoding */

/* istanbul ignore next */
class DebugHash extends Hash {
	constructor() {
		super();
		this.string = "";
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
		if (typeof data !== "string") data = data.toString("utf8");
		const prefix = Buffer.from("@webpack-debug-digest@").toString("hex");
		if (data.startsWith(prefix)) {
			data = Buffer.from(data.slice(prefix.length), "hex").toString();
		}
		this.string += `[${data}](${
			/** @type {string} */
			(
				// eslint-disable-next-line unicorn/error-message
				new Error().stack
			).split("\n", 3)[2]
		})\n`;
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
		return Buffer.from(`@webpack-debug-digest@${this.string}`).toString("hex");
	}
}

module.exports = DebugHash;

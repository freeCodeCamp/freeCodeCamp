/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../../declarations/WebpackOptions").HashDigest} Encoding */
/** @typedef {string | typeof Hash} HashFunction */

class Hash {
	/* istanbul ignore next */
	/**
	 * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
	 * @abstract
	 * @overload
	 * @param {string | Buffer} data data
	 * @returns {Hash} updated hash
	 */
	/**
	 * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
	 * @abstract
	 * @overload
	 * @param {string} data data
	 * @param {Encoding} inputEncoding data encoding
	 * @returns {Hash} updated hash
	 */
	/**
	 * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
	 * @abstract
	 * @param {string | Buffer} data data
	 * @param {Encoding=} inputEncoding data encoding
	 * @returns {Hash} updated hash
	 */
	update(data, inputEncoding) {
		const AbstractMethodError = require("../AbstractMethodError");

		throw new AbstractMethodError();
	}

	/* istanbul ignore next */
	/**
	 * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
	 * @abstract
	 * @overload
	 * @returns {Buffer} digest
	 */
	/**
	 * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
	 * @abstract
	 * @overload
	 * @param {Encoding} encoding encoding of the return value
	 * @returns {string} digest
	 */
	/**
	 * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
	 * @abstract
	 * @param {Encoding=} encoding encoding of the return value
	 * @returns {string | Buffer} digest
	 */
	digest(encoding) {
		const AbstractMethodError = require("../AbstractMethodError");

		throw new AbstractMethodError();
	}
}

module.exports = Hash;

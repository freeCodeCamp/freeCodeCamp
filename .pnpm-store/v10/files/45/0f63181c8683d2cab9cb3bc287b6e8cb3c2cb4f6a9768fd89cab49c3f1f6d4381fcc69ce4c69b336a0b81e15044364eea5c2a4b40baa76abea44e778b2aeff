/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

class Hash {
	/* istanbul ignore next */
	/**
	 * Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
	 * @abstract
	 * @param {string|Buffer} data data
	 * @param {string=} inputEncoding data encoding
	 * @returns {this} updated hash
	 */
	update(data, inputEncoding) {
		const AbstractMethodError = require("../AbstractMethodError");
		throw new AbstractMethodError();
	}

	/* istanbul ignore next */
	/**
	 * Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
	 * @abstract
	 * @param {string=} encoding encoding of the return value
	 * @returns {string|Buffer} digest
	 */
	digest(encoding) {
		const AbstractMethodError = require("../AbstractMethodError");
		throw new AbstractMethodError();
	}
}

module.exports = Hash;

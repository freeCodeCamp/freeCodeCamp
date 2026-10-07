/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../util/Hash")} Hash */

/**
 * StringXor class provides methods for performing
 * [XOR operations](https://en.wikipedia.org/wiki/Exclusive_or) on strings. In this context
 * we operating on the character codes of two strings, which are represented as
 * [Buffer](https://nodejs.org/api/buffer.html) objects.
 *
 * We use [StringXor in webpack](https://github.com/webpack/webpack/commit/41a8e2ea483a544c4ccd3e6217bdfb80daffca39)
 * to create a hash of the current state of the compilation. By XOR'ing the Module hashes, it
 * doesn't matter if the Module hashes are sorted or not. This is useful because it allows us to avoid sorting the
 * Module hashes.
 * @example
 * ```js
 * const xor = new StringXor();
 * xor.add('hello');
 * xor.add('world');
 * console.log(xor.toString());
 * ```
 * @example
 * ```js
 * const xor = new StringXor();
 * xor.add('foo');
 * xor.add('bar');
 * const hash = createHash('sha256');
 * hash.update(xor.toString());
 * console.log(hash.digest('hex'));
 * ```
 */
class StringXor {
	constructor() {
		/** @type {Buffer|undefined} */
		this._value = undefined;
	}

	/**
	 * Adds a string to the current StringXor object.
	 * @param {string} str string
	 * @returns {void}
	 */
	add(str) {
		const len = str.length;
		const value = this._value;
		if (value === undefined) {
			/**
			 * We are choosing to use Buffer.allocUnsafe() because it is often faster than Buffer.alloc() because
			 * it allocates a new buffer of the specified size without initializing the memory.
			 */
			const newValue = (this._value = Buffer.allocUnsafe(len));
			for (let i = 0; i < len; i++) {
				newValue[i] = str.charCodeAt(i);
			}
			return;
		}
		const valueLen = value.length;
		if (valueLen < len) {
			const newValue = (this._value = Buffer.allocUnsafe(len));
			let i;
			for (i = 0; i < valueLen; i++) {
				newValue[i] = value[i] ^ str.charCodeAt(i);
			}
			for (; i < len; i++) {
				newValue[i] = str.charCodeAt(i);
			}
		} else {
			for (let i = 0; i < len; i++) {
				value[i] = value[i] ^ str.charCodeAt(i);
			}
		}
	}

	/**
	 * Returns a string that represents the current state of the StringXor object. We chose to use "latin1" encoding
	 * here because "latin1" encoding is a single-byte encoding that can represent all characters in the
	 * [ISO-8859-1 character set](https://en.wikipedia.org/wiki/ISO/IEC_8859-1). This is useful when working
	 * with binary data that needs to be represented as a string.
	 * @returns {string} Returns a string that represents the current state of the StringXor object.
	 */
	toString() {
		const value = this._value;
		return value === undefined ? "" : value.toString("latin1");
	}

	/**
	 * Updates the hash with the current state of the StringXor object.
	 * @param {Hash} hash Hash instance
	 */
	updateHash(hash) {
		const value = this._value;
		if (value !== undefined) hash.update(value);
	}
}

module.exports = StringXor;

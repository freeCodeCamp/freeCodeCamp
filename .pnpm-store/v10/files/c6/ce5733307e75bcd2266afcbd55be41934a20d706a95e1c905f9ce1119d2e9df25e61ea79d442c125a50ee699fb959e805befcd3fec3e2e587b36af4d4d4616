/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * Threshold for switching from 32-bit to 64-bit hashing. This is selected to ensure that the bias towards lower modulo results when using 32-bit hashing is <0.5%.
 * @type {number}
 */
const FNV_64_THRESHOLD = 1 << 24;

/**
 * The FNV-1a offset basis for 32-bit hash values.
 * @type {number}
 */
const FNV_OFFSET_32 = 2166136261;
/**
 * The FNV-1a prime for 32-bit hash values.
 * @type {number}
 */
const FNV_PRIME_32 = 16777619;
/**
 * The mask for a positive 32-bit signed integer.
 * @type {number}
 */
const MASK_31 = 0x7fffffff;

/**
 * The FNV-1a offset basis for 64-bit hash values.
 * @type {bigint}
 */
const FNV_OFFSET_64 = BigInt("0xCBF29CE484222325");
/**
 * The FNV-1a prime for 64-bit hash values.
 * @type {bigint}
 */
const FNV_PRIME_64 = BigInt("0x100000001B3");

/**
 * Computes a 32-bit FNV-1a hash value for the given string.
 * See https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function
 * @param {string} str The input string to hash
 * @returns {number} - The computed hash value.
 */
function fnv1a32(str) {
	let hash = FNV_OFFSET_32;
	for (let i = 0, len = str.length; i < len; i++) {
		hash ^= str.charCodeAt(i);
		// Use Math.imul to do c-style 32-bit multiplication and keep only the 32 least significant bits
		hash = Math.imul(hash, FNV_PRIME_32);
	}
	// Force the result to be positive
	return hash & MASK_31;
}

/**
 * Computes a 64-bit FNV-1a hash value for the given string.
 * See https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function
 * @param {string} str The input string to hash
 * @returns {bigint} - The computed hash value.
 */
function fnv1a64(str) {
	let hash = FNV_OFFSET_64;
	for (let i = 0, len = str.length; i < len; i++) {
		hash ^= BigInt(str.charCodeAt(i));
		hash = BigInt.asUintN(64, hash * FNV_PRIME_64);
	}
	return hash;
}

/**
 * Computes a hash value for the given string and range. This hashing algorithm is a modified
 * version of the [FNV-1a algorithm](https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function).
 * It is optimized for speed and does **not** generate a cryptographic hash value.
 *
 * We use `numberHash` in `lib/ids/IdHelpers.js` to generate hash values for the module identifier. The generated
 * hash is used as a prefix for the module id's to avoid collisions with other modules.
 * @param {string} str The input string to hash.
 * @param {number} range The range of the hash value (0 to range-1).
 * @returns {number} - The computed hash value.
 * @example
 * ```js
 * const numberHash = require("webpack/lib/util/numberHash");
 * numberHash("hello", 1000); // 73
 * numberHash("hello world"); // 72
 * ```
 */
module.exports = (str, range) => {
	if (range < FNV_64_THRESHOLD) {
		return fnv1a32(str) % range;
	}
	return Number(fnv1a64(str) % BigInt(range));
};

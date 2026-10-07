/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Alexander Akait @alexander-akait
*/

"use strict";

/** @typedef {import("../Hash")} Hash */
/** @typedef {import("../../../declarations/WebpackOptions").HashDigest} Encoding */

/** @typedef {"26" | "32" | "36" | "49" | "52" | "58" | "62"} Base */

/* cSpell:disable */

/** @type {Record<Base, string>} */
const ENCODE_TABLE = Object.freeze({
	26: "abcdefghijklmnopqrstuvwxyz",
	32: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
	36: "0123456789abcdefghijklmnopqrstuvwxyz",
	49: "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
	52: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
	58: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
	62: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
});

/* cSpell:enable */

const ZERO = BigInt("0");
const EIGHT = BigInt("8");
const FF = BigInt("0xff");

/**
 * It encodes octet arrays by doing long divisions on all significant digits in the array, creating a representation of that number in the new base.
 * Then for every leading zero in the input (not significant as a number) it will encode as a single leader character.
 * This is the first in the alphabet and will decode as 8 bits. The other characters depend upon the base.
 * For example, a base58 alphabet packs roughly 5.858 bits per character.
 * This means the encoded string 000f (using a base16, 0-f alphabet) will actually decode to 4 bytes unlike a canonical hex encoding which uniformly packs 4 bits into each character.
 * While unusual, this does mean that no padding is required, and it works for bases like 43.
 * @param {Buffer} buffer buffer
 * @param {Base} base base
 * @returns {string} encoded buffer
 */
const encode = (buffer, base) => {
	if (buffer.length === 0) return "";
	const bigIntBase = BigInt(ENCODE_TABLE[base].length);
	// Convert buffer to BigInt efficiently using bitwise operations
	let value = ZERO;
	for (let i = 0; i < buffer.length; i++) {
		value = (value << EIGHT) | BigInt(buffer[i]);
	}
	// Convert to baseX string efficiently using array
	/** @type {string[]} */
	const digits = [];
	if (value === ZERO) return ENCODE_TABLE[base][0];
	while (value > ZERO) {
		const remainder = Number(value % bigIntBase);
		digits.push(ENCODE_TABLE[base][remainder]);
		value /= bigIntBase;
	}
	return digits.reverse().join("");
};

/**
 * Returns buffer.
 * @param {string} data string
 * @param {Base} base base
 * @returns {Buffer} buffer
 */
const decode = (data, base) => {
	if (data.length === 0) return Buffer.from("");
	const bigIntBase = BigInt(ENCODE_TABLE[base].length);
	// Convert the baseX string to a BigInt value
	let value = ZERO;
	for (let i = 0; i < data.length; i++) {
		const digit = ENCODE_TABLE[base].indexOf(data[i]);
		if (digit === -1) {
			throw new Error(`Invalid character at position ${i}: ${data[i]}`);
		}
		value = value * bigIntBase + BigInt(digit);
	}
	// If value is 0, return a single-byte buffer with value 0
	if (value === ZERO) {
		return Buffer.alloc(1);
	}
	// Determine buffer size efficiently by counting bytes
	let temp = value;
	let byteLength = 0;
	while (temp > ZERO) {
		temp >>= EIGHT;
		byteLength++;
	}
	// Create buffer and fill it from right to left
	const buffer = Buffer.alloc(byteLength);
	for (let i = byteLength - 1; i >= 0; i--) {
		buffer[i] = Number(value & FF);
		value >>= EIGHT;
	}
	return buffer;
};

// Compatibility with the old hash libraries, they can return different structures, so let's stringify them firstly

/**
 * Returns a string representation.
 * @param {string | { toString: (radix: number) => string }} value value
 * @param {string} encoding encoding
 * @returns {string} string
 */
const toString = (value, encoding) =>
	typeof value === "string"
		? value
		: Buffer.from(value.toString(16), "hex").toString(
				/** @type {NodeJS.BufferEncoding} */
				(encoding)
			);

/**
 * Returns buffer.
 * @param {Buffer | { toString: (radix: number) => string }} value value
 * @returns {Buffer} buffer
 */
const toBuffer = (value) =>
	Buffer.isBuffer(value) ? value : Buffer.from(value.toString(16), "hex");

let isBase64URLSupported = false;

try {
	isBase64URLSupported = Boolean(Buffer.from("", "base64url"));
} catch (_err) {
	// Nothing
}

/**
 * Processes the provided hash.
 * @param {Hash} hash hash
 * @param {string | Buffer} data data
 * @param {Encoding=} encoding encoding of the return value
 * @returns {void}
 */
const update = (hash, data, encoding) => {
	if (encoding === "base64url" && !isBase64URLSupported) {
		const base64String = /** @type {string} */ (data)
			.replace(/-/g, "+")
			.replace(/_/g, "/");
		const buf = Buffer.from(base64String, "base64");
		hash.update(buf);
		return;
	} else if (
		typeof data === "string" &&
		encoding &&
		typeof ENCODE_TABLE[/** @type {Base} */ (encoding.slice(4))] !== "undefined"
	) {
		const buf = decode(data, /** @type {Base} */ (encoding.slice(4)));
		hash.update(buf);
		return;
	}

	if (encoding) {
		hash.update(/** @type {string} */ (data), encoding);
	} else {
		hash.update(data);
	}
};

/**
 * Returns digest.
 * @overload
 * @param {Hash} hash hash
 * @returns {Buffer} digest
 */
/**
 * Returns digest.
 * @overload
 * @param {Hash} hash hash
 * @param {undefined} encoding encoding of the return value
 * @param {boolean=} isSafe true when we await right types from digest(), otherwise false
 * @returns {Buffer} digest
 */
/**
 * Returns digest.
 * @overload
 * @param {Hash} hash hash
 * @param {Encoding} encoding encoding of the return value
 * @param {boolean=} isSafe true when we await right types from digest(), otherwise false
 * @returns {string} digest
 */
/**
 * Returns digest.
 * @param {Hash} hash hash
 * @param {Encoding=} encoding encoding of the return value
 * @param {boolean=} isSafe true when we await right types from digest(), otherwise false
 * @returns {string | Buffer} digest
 */
const digest = (hash, encoding, isSafe) => {
	if (typeof encoding === "undefined") {
		return isSafe ? hash.digest() : toBuffer(hash.digest());
	}

	if (encoding === "base64url" && !isBase64URLSupported) {
		const digest = isSafe
			? hash.digest("base64")
			: toString(hash.digest("base64"), "base64");

		return digest.replace(/\+/g, "-").replace(/\//g, "_").replace(/[=]+$/, "");
	} else if (
		typeof ENCODE_TABLE[/** @type {Base} */ (encoding.slice(4))] !== "undefined"
	) {
		const buf = isSafe ? hash.digest() : toBuffer(hash.digest());

		return encode(
			buf,
			/** @type {Base} */
			(encoding.slice(4))
		);
	}

	return isSafe
		? hash.digest(encoding)
		: toString(hash.digest(encoding), encoding);
};

module.exports.decode = decode;
module.exports.digest = digest;
module.exports.encode = encode;
module.exports.update = update;

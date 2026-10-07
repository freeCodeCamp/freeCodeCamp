/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("./Hash")} Hash */
/** @typedef {import("../../declarations/WebpackOptions").HashFunction} HashFunction */

/** @type {typeof import("crypto") | undefined} */
let crypto;
/** @type {typeof import("./hash/xxhash64") | undefined} */
let createXXHash64;
/** @type {typeof import("./hash/md4") | undefined} */
let createMd4;
/** @type {typeof import("./hash/DebugHash") | undefined} */
let DebugHash;
/** @type {typeof import("./hash/BatchedHash") | undefined} */
let BatchedHash;
/** @type {typeof import("./hash/BulkUpdateHash") | undefined} */
let BulkUpdateHash;

/**
 * Creates a hash by name or function
 * @param {HashFunction} algorithm the algorithm name or a constructor creating a hash
 * @returns {Hash} the hash
 */
module.exports = (algorithm) => {
	if (typeof algorithm === "function") {
		if (BulkUpdateHash === undefined) {
			BulkUpdateHash = require("./hash/BulkUpdateHash");
		}
		// eslint-disable-next-line new-cap
		return new BulkUpdateHash(() => new algorithm());
	}
	switch (algorithm) {
		// TODO add non-cryptographic algorithm here
		case "debug":
			if (DebugHash === undefined) {
				DebugHash = require("./hash/DebugHash");
			}
			return new DebugHash();
		case "xxhash64":
			if (createXXHash64 === undefined) {
				createXXHash64 = require("./hash/xxhash64");
				if (BatchedHash === undefined) {
					BatchedHash = require("./hash/BatchedHash");
				}
			}
			return new /** @type {typeof import("./hash/BatchedHash")} */ (
				BatchedHash
			)(createXXHash64());
		case "md4":
			if (createMd4 === undefined) {
				createMd4 = require("./hash/md4");
				if (BatchedHash === undefined) {
					BatchedHash = require("./hash/BatchedHash");
				}
			}
			return new /** @type {typeof import("./hash/BatchedHash")} */ (
				BatchedHash
			)(createMd4());
		case "native-md4":
			if (crypto === undefined) crypto = require("crypto");
			if (BulkUpdateHash === undefined) {
				BulkUpdateHash = require("./hash/BulkUpdateHash");
			}
			return new BulkUpdateHash(
				() =>
					/** @type {Hash} */ (
						/** @type {typeof import("crypto")} */
						(crypto).createHash("md4")
					),
				"md4"
			);
		default:
			if (crypto === undefined) crypto = require("crypto");
			if (BulkUpdateHash === undefined) {
				BulkUpdateHash = require("./hash/BulkUpdateHash");
			}
			return new BulkUpdateHash(
				() =>
					/** @type {Hash} */ (
						/** @type {typeof import("crypto")} */
						(crypto).createHash(algorithm)
					),
				algorithm
			);
	}
};

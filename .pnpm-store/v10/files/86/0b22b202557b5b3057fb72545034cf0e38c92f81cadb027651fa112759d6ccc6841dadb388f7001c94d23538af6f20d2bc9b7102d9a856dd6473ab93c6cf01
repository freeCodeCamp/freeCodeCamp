/**
 * @fileoverview Virtual file
 * @author Nicholas C. Zakas
 */

"use strict";

//-----------------------------------------------------------------------------
// Type Definitions
//-----------------------------------------------------------------------------

/** @typedef {import("@eslint/core").File} File */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Determines if a given value has a byte order mark (BOM).
 * @param {string|Uint8Array} value The value to check.
 * @returns {boolean} `true` if the value has a BOM, `false` otherwise.
 */
function hasUnicodeBOM(value) {
	return typeof value === "string"
		? value.charCodeAt(0) === 0xfeff
		: value[0] === 0xef && value[1] === 0xbb && value[2] === 0xbf;
}

/**
 * Strips Unicode BOM from the given value.
 * @param {string|Uint8Array} value The value to remove the BOM from.
 * @returns {string|Uint8Array} The stripped value.
 */
function stripUnicodeBOM(value) {
	if (!hasUnicodeBOM(value)) {
		return value;
	}

	if (typeof value === "string") {
		/*
		 * Check Unicode BOM.
		 * In JavaScript, string data is stored as UTF-16, so BOM is 0xFEFF.
		 * http://www.ecma-international.org/ecma-262/6.0/#sec-unicode-format-control-characters
		 */
		return value.slice(1);
	}

	/*
	 * In a Uint8Array, the BOM is represented by three bytes: 0xEF, 0xBB, and 0xBF,
	 * so we can just remove the first three bytes.
	 */
	return value.slice(3);
}

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

/**
 * Represents a virtual file inside of ESLint.
 * @implements {File}
 */
class VFile {
	/**
	 * The file path including any processor-created virtual path.
	 * @type {string}
	 * @readonly
	 */
	path;

	/**
	 * The file path on disk.
	 * @type {string}
	 * @readonly
	 */
	physicalPath;

	/**
	 * The file contents.
	 * @type {string|Uint8Array}
	 * @readonly
	 */
	body;

	/**
	 * The raw body of the file, including a BOM if present.
	 * @type {string|Uint8Array}
	 * @readonly
	 */
	rawBody;

	/**
	 * Indicates whether the file has a byte order mark (BOM).
	 * @type {boolean}
	 * @readonly
	 */
	bom;

	/**
	 * Creates a new instance.
	 * @param {string} path The file path.
	 * @param {string|Uint8Array} body The file contents.
	 * @param {Object} [options] Additional options.
	 * @param {string} [options.physicalPath] The file path on disk.
	 */
	constructor(path, body, { physicalPath } = {}) {
		this.path = path;
		this.physicalPath = physicalPath ?? path;
		this.bom = hasUnicodeBOM(body);
		this.body = stripUnicodeBOM(body);
		this.rawBody = body;
	}
}

module.exports = { VFile };

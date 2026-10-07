/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Source = require("./Source");

/** @typedef {import("./Source").HashLike} HashLike */
/** @typedef {import("./Source").MapOptions} MapOptions */
/** @typedef {import("./Source").RawSourceMap} RawSourceMap */
/** @typedef {import("./Source").SourceValue} SourceValue */

class SizeOnlySource extends Source {
	/**
	 * @param {number} size size
	 */
	constructor(size) {
		super();
		/**
		 * @private
		 * @type {number}
		 */
		this._size = size;
	}

	_error() {
		return new Error(
			"Content and Map of this Source is not available (only size() is supported)",
		);
	}

	size() {
		return this._size;
	}

	/**
	 * @returns {SourceValue} source
	 */
	source() {
		throw this._error();
	}

	/**
	 * @returns {Buffer} buffer
	 */
	buffer() {
		throw this._error();
	}

	/**
	 * @param {MapOptions=} options map options
	 * @returns {RawSourceMap | null} map
	 */
	// eslint-disable-next-line no-unused-vars
	map(options) {
		throw this._error();
	}

	/**
	 * @param {HashLike} hash hash
	 * @returns {void}
	 */
	// eslint-disable-next-line no-unused-vars
	updateHash(hash) {
		throw this._error();
	}
}

module.exports = SizeOnlySource;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Source = require("./Source");

/** @typedef {import("./Source").HashLike} HashLike */
/** @typedef {import("./Source").MapOptions} MapOptions */
/** @typedef {import("./Source").RawSourceMap} RawSourceMap */
/** @typedef {import("./Source").SourceAndMap} SourceAndMap */
/** @typedef {import("./Source").SourceValue} SourceValue */

/**
 * @typedef {object} SourceLike
 * @property {() => SourceValue} source source
 * @property {(() => Buffer)=} buffer buffer
 * @property {(() => number)=} size size
 * @property {((options?: MapOptions) => RawSourceMap | null)=} map map
 * @property {((options?: MapOptions) => SourceAndMap)=} sourceAndMap source and map
 * @property {((hash: HashLike) => void)=} updateHash hash updater
 */

class CompatSource extends Source {
	/**
	 * @param {SourceLike} sourceLike source like
	 * @returns {Source} source
	 */
	static from(sourceLike) {
		return sourceLike instanceof Source
			? sourceLike
			: new CompatSource(sourceLike);
	}

	/**
	 * @param {SourceLike} sourceLike source like
	 */
	constructor(sourceLike) {
		super();
		/**
		 * @private
		 * @type {SourceLike}
		 */
		this._sourceLike = sourceLike;
	}

	/**
	 * @returns {SourceValue} source
	 */
	source() {
		return this._sourceLike.source();
	}

	buffer() {
		if (typeof this._sourceLike.buffer === "function") {
			return this._sourceLike.buffer();
		}
		return super.buffer();
	}

	size() {
		if (typeof this._sourceLike.size === "function") {
			return this._sourceLike.size();
		}
		return super.size();
	}

	/**
	 * @param {MapOptions=} options map options
	 * @returns {RawSourceMap | null} map
	 */
	map(options) {
		if (typeof this._sourceLike.map === "function") {
			return this._sourceLike.map(options);
		}
		return super.map(options);
	}

	/**
	 * @param {MapOptions=} options map options
	 * @returns {SourceAndMap} source and map
	 */
	sourceAndMap(options) {
		if (typeof this._sourceLike.sourceAndMap === "function") {
			return this._sourceLike.sourceAndMap(options);
		}
		return super.sourceAndMap(options);
	}

	/**
	 * @param {HashLike} hash hash
	 * @returns {void}
	 */
	updateHash(hash) {
		if (typeof this._sourceLike.updateHash === "function") {
			return this._sourceLike.updateHash(hash);
		}
		if (typeof this._sourceLike.map === "function") {
			throw new Error(
				"A Source-like object with a 'map' method must also provide an 'updateHash' method",
			);
		}
		hash.update(this.buffer());
	}
}

module.exports = CompatSource;

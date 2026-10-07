/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Source = require("./Source");
const { getMap, getSourceAndMap } = require("./helpers/getFromStreamChunks");
const getGeneratedSourceInfo = require("./helpers/getGeneratedSourceInfo");
const splitIntoLines = require("./helpers/splitIntoLines");
const splitIntoPotentialTokens = require("./helpers/splitIntoPotentialTokens");
const {
	isDualStringBufferCachingEnabled,
} = require("./helpers/stringBufferUtils");

/** @typedef {import("./Source").HashLike} HashLike */
/** @typedef {import("./Source").MapOptions} MapOptions */
/** @typedef {import("./Source").RawSourceMap} RawSourceMap */
/** @typedef {import("./Source").SourceAndMap} SourceAndMap */
/** @typedef {import("./Source").SourceValue} SourceValue */
/** @typedef {import("./helpers/getGeneratedSourceInfo").GeneratedSourceInfo} GeneratedSourceInfo */
/** @typedef {import("./helpers/streamChunks").OnChunk} OnChunk */
/** @typedef {import("./helpers/streamChunks").OnName} OnName */
/** @typedef {import("./helpers/streamChunks").OnSource} OnSource */
/** @typedef {import("./helpers/streamChunks").Options} Options */

class OriginalSource extends Source {
	/**
	 * @param {string | Buffer} value value
	 * @param {string} name name
	 */
	constructor(value, name) {
		super();

		const isBuffer = Buffer.isBuffer(value);

		/**
		 * @private
		 * @type {undefined | string}
		 */
		this._value = isBuffer ? undefined : value;
		/**
		 * @private
		 * @type {undefined | Buffer}
		 */
		this._valueAsBuffer = isBuffer ? value : undefined;
		/**
		 * @private
		 * @type {string}
		 */
		this._name = name;
	}

	getName() {
		return this._name;
	}

	/**
	 * @returns {SourceValue} source
	 */
	source() {
		if (this._value === undefined) {
			const value =
				/** @type {Buffer} */
				(this._valueAsBuffer).toString("utf8");
			if (isDualStringBufferCachingEnabled()) {
				this._value = value;
			}
			return value;
		}
		return this._value;
	}

	buffer() {
		if (this._valueAsBuffer === undefined) {
			const value = Buffer.from(/** @type {string} */ (this._value), "utf8");
			if (isDualStringBufferCachingEnabled()) {
				this._valueAsBuffer = value;
			}
			return value;
		}
		return this._valueAsBuffer;
	}

	/**
	 * @param {MapOptions=} options map options
	 * @returns {RawSourceMap | null} map
	 */
	map(options) {
		return getMap(this, options);
	}

	/**
	 * @param {MapOptions=} options map options
	 * @returns {SourceAndMap} source and map
	 */
	sourceAndMap(options) {
		return getSourceAndMap(this, options);
	}

	/**
	 * @param {Options} options options
	 * @param {OnChunk} onChunk called for each chunk of code
	 * @param {OnSource} onSource called for each source
	 * @param {OnName} _onName called for each name
	 * @returns {GeneratedSourceInfo} generated source info
	 */
	streamChunks(options, onChunk, onSource, _onName) {
		if (this._value === undefined) {
			this._value =
				/** @type {Buffer} */
				(this._valueAsBuffer).toString("utf8");
		}
		onSource(0, this._name, this._value);
		const finalSource = Boolean(options && options.finalSource);
		if (!options || options.columns !== false) {
			// With column info we need to read all lines and split them
			const matches = splitIntoPotentialTokens(this._value);
			let line = 1;
			let column = 0;
			if (matches !== null) {
				for (const match of matches) {
					const isEndOfLine = match.endsWith("\n");
					if (isEndOfLine && match.length === 1) {
						if (!finalSource) onChunk(match, line, column, -1, -1, -1, -1);
					} else {
						const chunk = finalSource ? undefined : match;
						onChunk(chunk, line, column, 0, line, column, -1);
					}
					if (isEndOfLine) {
						line++;
						column = 0;
					} else {
						column += match.length;
					}
				}
			}
			return {
				generatedLine: line,
				generatedColumn: column,
				source: finalSource ? this._value : undefined,
			};
		} else if (finalSource) {
			// Without column info and with final source we only
			// need meta info to generate mapping
			const result = getGeneratedSourceInfo(this._value);
			const { generatedLine, generatedColumn } = result;
			if (generatedColumn === 0) {
				for (
					let line = 1;
					line < /** @type {number} */ (generatedLine);
					line++
				) {
					onChunk(undefined, line, 0, 0, line, 0, -1);
				}
			} else {
				for (
					let line = 1;
					line <= /** @type {number} */ (generatedLine);
					line++
				) {
					onChunk(undefined, line, 0, 0, line, 0, -1);
				}
			}
			return result;
		}
		// Without column info, but also without final source
		// we need to split source by lines
		let line = 1;
		const matches = splitIntoLines(this._value);
		/** @type {string | undefined} */
		let match;
		for (match of matches) {
			onChunk(finalSource ? undefined : match, line, 0, 0, line, 0, -1);
			line++;
		}
		return matches.length === 0 || /** @type {string} */ (match).endsWith("\n")
			? {
					generatedLine: matches.length + 1,
					generatedColumn: 0,
					source: finalSource ? this._value : undefined,
				}
			: {
					generatedLine: matches.length,
					generatedColumn: /** @type {string} */ (match).length,
					source: finalSource ? this._value : undefined,
				};
	}

	/**
	 * @param {HashLike} hash hash
	 * @returns {void}
	 */
	updateHash(hash) {
		hash.update("OriginalSource");
		hash.update(this.buffer());
		hash.update(this._name || "");
	}
}

module.exports = OriginalSource;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Source = require("./Source");
const { getMap, getSourceAndMap } = require("./helpers/getFromStreamChunks");
const streamChunksOfCombinedSourceMap = require("./helpers/streamChunksOfCombinedSourceMap");
const streamChunksOfSourceMap = require("./helpers/streamChunksOfSourceMap");
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

class SourceMapSource extends Source {
	/**
	 * @param {string | Buffer} value value
	 * @param {string} name name
	 * @param {string | Buffer | RawSourceMap=} sourceMap source map
	 * @param {SourceValue=} originalSource original source
	 * @param {(null | string | Buffer | RawSourceMap)=} innerSourceMap inner source map
	 * @param {boolean=} removeOriginalSource do remove original source
	 */
	constructor(
		value,
		name,
		sourceMap,
		originalSource,
		innerSourceMap,
		removeOriginalSource,
	) {
		super();
		const valueIsBuffer = Buffer.isBuffer(value);
		/**
		 * @private
		 * @type {undefined | string}
		 */
		this._valueAsString = valueIsBuffer ? undefined : value;
		/**
		 * @private
		 * @type {undefined | Buffer}
		 */
		this._valueAsBuffer = valueIsBuffer ? value : undefined;

		this._name = name;

		this._hasSourceMap = Boolean(sourceMap);
		const sourceMapIsBuffer = Buffer.isBuffer(sourceMap);
		const sourceMapIsString = typeof sourceMap === "string";
		/**
		 * @private
		 * @type {undefined | RawSourceMap}
		 */
		this._sourceMapAsObject =
			sourceMapIsBuffer || sourceMapIsString ? undefined : sourceMap;
		/**
		 * @private
		 * @type {undefined | string}
		 */
		this._sourceMapAsString = sourceMapIsString ? sourceMap : undefined;
		/**
		 * @private
		 * @type {undefined | Buffer}
		 */
		this._sourceMapAsBuffer = sourceMapIsBuffer ? sourceMap : undefined;

		this._hasOriginalSource = Boolean(originalSource);
		const originalSourceIsBuffer = Buffer.isBuffer(originalSource);
		this._originalSourceAsString = originalSourceIsBuffer
			? undefined
			: originalSource;
		this._originalSourceAsBuffer = originalSourceIsBuffer
			? originalSource
			: undefined;

		this._hasInnerSourceMap = Boolean(innerSourceMap);
		const innerSourceMapIsBuffer = Buffer.isBuffer(innerSourceMap);
		const innerSourceMapIsString = typeof innerSourceMap === "string";
		/**
		 * @private
		 * @type {undefined | RawSourceMap}
		 */

		this._innerSourceMapAsObject =
			innerSourceMapIsBuffer || innerSourceMapIsString
				? undefined
				: innerSourceMap || undefined;
		/**
		 * @private
		 * @type {undefined | string}
		 */
		this._innerSourceMapAsString = innerSourceMapIsString
			? innerSourceMap
			: undefined;
		/**
		 * @private
		 * @type {undefined | Buffer}
		 */
		this._innerSourceMapAsBuffer = innerSourceMapIsBuffer
			? innerSourceMap
			: undefined;

		this._removeOriginalSource = removeOriginalSource;
	}

	/**
	 * @returns {[Buffer, string, Buffer, Buffer | undefined, Buffer | undefined, boolean | undefined]} args
	 */
	getArgsAsBuffers() {
		return [
			this.buffer(),
			this._name,
			this._sourceMapBuffer(),
			this._originalSourceBuffer(),
			this._innerSourceMapBuffer(),
			this._removeOriginalSource,
		];
	}

	buffer() {
		if (this._valueAsBuffer === undefined) {
			const value = Buffer.from(
				/** @type {string} */ (this._valueAsString),
				"utf8",
			);
			if (isDualStringBufferCachingEnabled()) {
				this._valueAsBuffer = value;
			}
			return value;
		}
		return this._valueAsBuffer;
	}

	/**
	 * @returns {SourceValue} source
	 */
	source() {
		if (this._valueAsString === undefined) {
			const value =
				/** @type {Buffer} */
				(this._valueAsBuffer).toString("utf8");
			if (isDualStringBufferCachingEnabled()) {
				this._valueAsString = value;
			}
			return value;
		}
		return this._valueAsString;
	}

	/**
	 * @private
	 * @returns {undefined | Buffer} buffer
	 */
	_originalSourceBuffer() {
		if (this._originalSourceAsBuffer === undefined && this._hasOriginalSource) {
			const value = Buffer.from(
				/** @type {string} */
				(this._originalSourceAsString),
				"utf8",
			);
			if (isDualStringBufferCachingEnabled()) {
				this._originalSourceAsBuffer = value;
			}
			return value;
		}
		return this._originalSourceAsBuffer;
	}

	_originalSourceString() {
		if (this._originalSourceAsString === undefined && this._hasOriginalSource) {
			const value =
				/** @type {Buffer} */
				(this._originalSourceAsBuffer).toString("utf8");
			if (isDualStringBufferCachingEnabled()) {
				this._originalSourceAsString = value;
			}
			return value;
		}
		return this._originalSourceAsString;
	}

	_innerSourceMapObject() {
		if (this._innerSourceMapAsObject === undefined && this._hasInnerSourceMap) {
			const value = JSON.parse(this._innerSourceMapString());
			if (isDualStringBufferCachingEnabled()) {
				this._innerSourceMapAsObject = value;
			}
			return value;
		}
		return this._innerSourceMapAsObject;
	}

	_innerSourceMapBuffer() {
		if (this._innerSourceMapAsBuffer === undefined && this._hasInnerSourceMap) {
			const value = Buffer.from(this._innerSourceMapString(), "utf8");
			if (isDualStringBufferCachingEnabled()) {
				this._innerSourceMapAsBuffer = value;
			}
			return value;
		}
		return this._innerSourceMapAsBuffer;
	}

	/**
	 * @private
	 * @returns {string} result
	 */
	_innerSourceMapString() {
		if (this._innerSourceMapAsString === undefined && this._hasInnerSourceMap) {
			if (this._innerSourceMapAsBuffer !== undefined) {
				const value = this._innerSourceMapAsBuffer.toString("utf8");
				if (isDualStringBufferCachingEnabled()) {
					this._innerSourceMapAsString = value;
				}
				return value;
			}
			const value = JSON.stringify(this._innerSourceMapAsObject);
			if (isDualStringBufferCachingEnabled()) {
				this._innerSourceMapAsString = value;
			}
			return value;
		}
		return /** @type {string} */ (this._innerSourceMapAsString);
	}

	_sourceMapObject() {
		if (this._sourceMapAsObject === undefined) {
			const value = JSON.parse(this._sourceMapString());
			if (isDualStringBufferCachingEnabled()) {
				this._sourceMapAsObject = value;
			}
			return value;
		}
		return this._sourceMapAsObject;
	}

	_sourceMapBuffer() {
		if (this._sourceMapAsBuffer === undefined) {
			const value = Buffer.from(this._sourceMapString(), "utf8");
			if (isDualStringBufferCachingEnabled()) {
				this._sourceMapAsBuffer = value;
			}
			return value;
		}
		return this._sourceMapAsBuffer;
	}

	_sourceMapString() {
		if (this._sourceMapAsString === undefined) {
			if (this._sourceMapAsBuffer !== undefined) {
				const value = this._sourceMapAsBuffer.toString("utf8");
				if (isDualStringBufferCachingEnabled()) {
					this._sourceMapAsString = value;
				}
				return value;
			}
			const value = JSON.stringify(this._sourceMapAsObject);
			if (isDualStringBufferCachingEnabled()) {
				this._sourceMapAsString = value;
			}
			return value;
		}
		return this._sourceMapAsString;
	}

	/**
	 * @param {MapOptions=} options map options
	 * @returns {RawSourceMap | null} map
	 */
	map(options) {
		if (!this._hasInnerSourceMap) {
			return this._sourceMapObject();
		}
		return getMap(this, options);
	}

	/**
	 * @param {MapOptions=} options map options
	 * @returns {SourceAndMap} source and map
	 */
	sourceAndMap(options) {
		if (!this._hasInnerSourceMap) {
			return {
				source: this.source(),
				map: this._sourceMapObject(),
			};
		}
		return getSourceAndMap(this, options);
	}

	/**
	 * @param {Options} options options
	 * @param {OnChunk} onChunk called for each chunk of code
	 * @param {OnSource} onSource called for each source
	 * @param {OnName} onName called for each name
	 * @returns {GeneratedSourceInfo} generated source info
	 */
	streamChunks(options, onChunk, onSource, onName) {
		if (this._hasInnerSourceMap) {
			return streamChunksOfCombinedSourceMap(
				/** @type {string} */
				(this.source()),
				this._sourceMapObject(),
				this._name,
				/** @type {string} */
				(this._originalSourceString()),
				this._innerSourceMapObject(),
				this._removeOriginalSource,
				onChunk,
				onSource,
				onName,
				Boolean(options && options.finalSource),
				Boolean(options && options.columns !== false),
			);
		}
		return streamChunksOfSourceMap(
			/** @type {string} */
			(this.source()),
			this._sourceMapObject(),
			onChunk,
			onSource,
			onName,
			Boolean(options && options.finalSource),
			Boolean(options && options.columns !== false),
		);
	}

	/**
	 * @param {HashLike} hash hash
	 * @returns {void}
	 */
	updateHash(hash) {
		hash.update("SourceMapSource");
		hash.update(this.buffer());
		hash.update(this._sourceMapBuffer());

		if (this._hasOriginalSource) {
			hash.update(
				/** @type {Buffer} */
				(this._originalSourceBuffer()),
			);
		}

		if (this._hasInnerSourceMap) {
			hash.update(
				/** @type {Buffer} */
				(this._innerSourceMapBuffer()),
			);
		}

		hash.update(this._removeOriginalSource ? "true" : "false");
	}
}

module.exports = SourceMapSource;

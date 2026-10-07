/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Source = require("./Source");
const streamAndGetSourceAndMap = require("./helpers/streamAndGetSourceAndMap");
const streamChunksOfRawSource = require("./helpers/streamChunksOfRawSource");
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

/**
 * @typedef {object} BufferedMap
 * @property {number} version version
 * @property {string[]} sources sources
 * @property {string[]} names name
 * @property {string=} sourceRoot source root
 * @property {(Buffer | "")[]=} sourcesContent sources content
 * @property {Buffer=} mappings mappings
 * @property {string} file file
 */

/**
 * @param {null | RawSourceMap} map map
 * @returns {null | BufferedMap} buffered map
 */
const mapToBufferedMap = (map) => {
	if (typeof map !== "object" || !map) return map;
	const bufferedMap =
		/** @type {BufferedMap} */
		(/** @type {unknown} */ ({ ...map }));
	if (map.mappings) {
		bufferedMap.mappings = Buffer.from(map.mappings, "utf8");
	}
	if (map.sourcesContent) {
		bufferedMap.sourcesContent = map.sourcesContent.map(
			(str) => str && Buffer.from(str, "utf8"),
		);
	}
	return bufferedMap;
};

/**
 * @param {null | BufferedMap} bufferedMap buffered map
 * @returns {null | RawSourceMap} map
 */
const bufferedMapToMap = (bufferedMap) => {
	if (typeof bufferedMap !== "object" || !bufferedMap) return bufferedMap;
	const map =
		/** @type {RawSourceMap} */
		(/** @type {unknown} */ ({ ...bufferedMap }));
	if (bufferedMap.mappings) {
		map.mappings = bufferedMap.mappings.toString("utf8");
	}
	if (bufferedMap.sourcesContent) {
		map.sourcesContent = bufferedMap.sourcesContent.map(
			(buffer) => buffer && buffer.toString("utf8"),
		);
	}
	return map;
};

/** @typedef {{ map?: null | RawSourceMap, bufferedMap?: null | BufferedMap }} BufferEntry */
/** @typedef {Map<string, BufferEntry>} BufferedMaps */

/**
 * @typedef {object} CachedData
 * @property {boolean=} source source
 * @property {Buffer} buffer buffer
 * @property {number=} size size
 * @property {BufferedMaps} maps maps
 * @property {(string | Buffer)[]=} hash hash
 */

class CachedSource extends Source {
	/**
	 * @param {Source | (() => Source)} source source
	 * @param {CachedData=} cachedData cached data
	 */
	constructor(source, cachedData) {
		super();
		/**
		 * @private
		 * @type {Source | (() => Source)}
		 */
		this._source = source;
		/**
		 * @private
		 * @type {boolean | undefined}
		 */
		this._cachedSourceType = cachedData ? cachedData.source : undefined;
		/**
		 * @private
		 * @type {undefined | string}
		 */
		this._cachedSource = undefined;
		/**
		 * @private
		 * @type {Buffer | undefined}
		 */
		this._cachedBuffer = cachedData ? cachedData.buffer : undefined;
		/**
		 * @private
		 * @type {number | undefined}
		 */
		this._cachedSize = cachedData ? cachedData.size : undefined;
		/**
		 * @private
		 * @type {BufferedMaps}
		 */
		this._cachedMaps = cachedData ? cachedData.maps : new Map();
		/**
		 * @private
		 * @type {(string | Buffer)[] | undefined}
		 */
		this._cachedHashUpdate = cachedData ? cachedData.hash : undefined;
	}

	/**
	 * @returns {CachedData} cached data
	 */
	getCachedData() {
		/** @type {BufferedMaps} */
		const bufferedMaps = new Map();
		for (const pair of this._cachedMaps) {
			const [, cacheEntry] = pair;
			if (cacheEntry.bufferedMap === undefined) {
				cacheEntry.bufferedMap = mapToBufferedMap(
					this._getMapFromCacheEntry(cacheEntry),
				);
			}
			bufferedMaps.set(pair[0], {
				map: undefined,
				bufferedMap: cacheEntry.bufferedMap,
			});
		}
		return {
			// We don't want to cache strings
			// So if we have a caches sources
			// create a buffer from it and only store
			// if it was a Buffer or string
			buffer: this._cachedSource
				? this.buffer()
				: /** @type {Buffer} */ (this._cachedBuffer),
			source:
				this._cachedSourceType !== undefined
					? this._cachedSourceType
					: typeof this._cachedSource === "string"
						? true
						: Buffer.isBuffer(this._cachedSource)
							? false
							: undefined,
			size: this._cachedSize,
			maps: bufferedMaps,
			hash: this._cachedHashUpdate,
		};
	}

	originalLazy() {
		return this._source;
	}

	original() {
		if (typeof this._source === "function") this._source = this._source();
		return this._source;
	}

	/**
	 * @returns {SourceValue} source
	 */
	source() {
		const source = this._getCachedSource();
		if (source !== undefined) return source;
		return (this._cachedSource =
			/** @type {string} */
			(this.original().source()));
	}

	/**
	 * @private
	 * @param {BufferEntry} cacheEntry cache entry
	 * @returns {null | RawSourceMap} raw source map
	 */
	_getMapFromCacheEntry(cacheEntry) {
		if (cacheEntry.map !== undefined) {
			return cacheEntry.map;
		} else if (cacheEntry.bufferedMap !== undefined) {
			return (cacheEntry.map = bufferedMapToMap(cacheEntry.bufferedMap));
		}

		return null;
	}

	/**
	 * @private
	 * @returns {undefined | string} cached source
	 */
	_getCachedSource() {
		if (this._cachedSource !== undefined) return this._cachedSource;
		if (this._cachedBuffer && this._cachedSourceType !== undefined) {
			const value = this._cachedSourceType
				? this._cachedBuffer.toString("utf8")
				: this._cachedBuffer;
			if (isDualStringBufferCachingEnabled()) {
				this._cachedSource = /** @type {string} */ (value);
			}
			return /** @type {string} */ (value);
		}
	}

	/**
	 * @returns {Buffer} buffer
	 */
	buffer() {
		if (this._cachedBuffer !== undefined) return this._cachedBuffer;
		if (this._cachedSource !== undefined) {
			const value = Buffer.isBuffer(this._cachedSource)
				? this._cachedSource
				: Buffer.from(this._cachedSource, "utf8");
			if (isDualStringBufferCachingEnabled()) {
				this._cachedBuffer = value;
			}
			return value;
		}
		if (typeof this.original().buffer === "function") {
			return (this._cachedBuffer = this.original().buffer());
		}
		const bufferOrString = this.source();
		if (Buffer.isBuffer(bufferOrString)) {
			return (this._cachedBuffer = bufferOrString);
		}
		const value = Buffer.from(bufferOrString, "utf8");
		if (isDualStringBufferCachingEnabled()) {
			this._cachedBuffer = value;
		}
		return value;
	}

	/**
	 * @returns {number} size
	 */
	size() {
		if (this._cachedSize !== undefined) return this._cachedSize;
		if (this._cachedBuffer !== undefined) {
			return (this._cachedSize = this._cachedBuffer.length);
		}
		const source = this._getCachedSource();
		if (source !== undefined) {
			return (this._cachedSize = Buffer.byteLength(source));
		}
		return (this._cachedSize = this.original().size());
	}

	/**
	 * @param {MapOptions=} options map options
	 * @returns {SourceAndMap} source and map
	 */
	sourceAndMap(options) {
		const key = options ? JSON.stringify(options) : "{}";
		const cacheEntry = this._cachedMaps.get(key);
		// Look for a cached map
		if (cacheEntry !== undefined) {
			// We have a cached map in some representation
			const map = this._getMapFromCacheEntry(cacheEntry);

			// Either get the cached source or compute it
			return { source: this.source(), map };
		}
		// Look for a cached source
		let source = this._getCachedSource();
		// Compute the map
		let map;
		if (source !== undefined) {
			map = this.original().map(options);
		} else {
			// Compute the source and map together.
			const sourceAndMap = this.original().sourceAndMap(options);
			source = /** @type {string} */ (sourceAndMap.source);
			map = sourceAndMap.map;
			this._cachedSource = source;
		}
		this._cachedMaps.set(key, {
			map,
			bufferedMap: undefined,
		});
		return { source, map };
	}

	/**
	 * @param {Options} options options
	 * @param {OnChunk} onChunk called for each chunk of code
	 * @param {OnSource} onSource called for each source
	 * @param {OnName} onName called for each name
	 * @returns {GeneratedSourceInfo} generated source info
	 */
	streamChunks(options, onChunk, onSource, onName) {
		const key = options ? JSON.stringify(options) : "{}";
		if (
			this._cachedMaps.has(key) &&
			(this._cachedBuffer !== undefined || this._cachedSource !== undefined)
		) {
			const { source, map } = this.sourceAndMap(options);
			if (map) {
				return streamChunksOfSourceMap(
					/** @type {string} */
					(source),
					map,
					onChunk,
					onSource,
					onName,
					Boolean(options && options.finalSource),
					true,
				);
			}
			return streamChunksOfRawSource(
				/** @type {string} */
				(source),
				onChunk,
				onSource,
				onName,
				Boolean(options && options.finalSource),
			);
		}
		const sourceAndMap = streamAndGetSourceAndMap(
			this.original(),
			options,
			onChunk,
			onSource,
			onName,
		);
		this._cachedSource = sourceAndMap.source;
		this._cachedMaps.set(key, {
			map: /** @type {RawSourceMap} */ (sourceAndMap.map),
			bufferedMap: undefined,
		});
		return sourceAndMap.result;
	}

	/**
	 * @param {MapOptions=} options map options
	 * @returns {RawSourceMap | null} map
	 */
	map(options) {
		const key = options ? JSON.stringify(options) : "{}";
		const cacheEntry = this._cachedMaps.get(key);
		if (cacheEntry !== undefined) {
			return this._getMapFromCacheEntry(cacheEntry);
		}
		const map = this.original().map(options);
		this._cachedMaps.set(key, {
			map,
			bufferedMap: undefined,
		});
		return map;
	}

	/**
	 * @param {HashLike} hash hash
	 * @returns {void}
	 */
	updateHash(hash) {
		if (this._cachedHashUpdate !== undefined) {
			for (const item of this._cachedHashUpdate) hash.update(item);
			return;
		}
		/** @type {(string | Buffer)[]} */
		const update = [];
		/** @type {string | undefined} */
		let currentString;
		const tracker = {
			/**
			 * @param {string | Buffer} item item
			 * @returns {void}
			 */
			update: (item) => {
				if (typeof item === "string" && item.length < 10240) {
					if (currentString === undefined) {
						currentString = item;
					} else {
						currentString += item;
						if (currentString.length > 102400) {
							update.push(Buffer.from(currentString));
							currentString = undefined;
						}
					}
				} else {
					if (currentString !== undefined) {
						update.push(Buffer.from(currentString));
						currentString = undefined;
					}
					update.push(item);
				}
			},
		};
		this.original().updateHash(/** @type {HashLike} */ (tracker));
		if (currentString !== undefined) {
			update.push(Buffer.from(currentString));
		}
		for (const item of update) hash.update(item);
		this._cachedHashUpdate = update;
	}
}

module.exports = CachedSource;

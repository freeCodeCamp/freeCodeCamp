/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("./CachedSource").CachedData} CachedData */
/** @typedef {import("./CompatSource").SourceLike} SourceLike */
/** @typedef {import("./ConcatSource").Child} ConcatSourceChild */
/** @typedef {import("./ReplaceSource").Replacement} Replacement */
/** @typedef {import("./Source").HashLike} HashLike */
/** @typedef {import("./Source").MapOptions} MapOptions */
/** @typedef {import("./Source").RawSourceMap} RawSourceMap */
/** @typedef {import("./Source").SourceAndMap} SourceAndMap */
/** @typedef {import("./Source").SourceValue} SourceValue */
/** @typedef {import("./helpers/getGeneratedSourceInfo").GeneratedSourceInfo} GeneratedSourceInfo */
/** @typedef {import("./helpers/streamChunks").OnChunk} OnChunk */
/** @typedef {import("./helpers/streamChunks").OnName} OnName */
/** @typedef {import("./helpers/streamChunks").OnSource} OnSource */
/** @typedef {import("./helpers/streamChunks").Options} StreamChunksOptions */

/**
 * @template T
 * @param {() => T} fn memorized function
 * @returns {() => T} new function
 */
const memoize = (fn) => {
	let cache = false;
	/** @type {T | undefined} */
	let result;
	return () => {
		if (cache) {
			return /** @type {T} */ (result);
		}

		result = fn();
		cache = true;
		// Allow to clean up memory for fn
		// and all dependent resources
		/** @type {(() => T) | undefined} */
		(fn) = undefined;
		return /** @type {T} */ (result);
	};
};

/**
 * @template A
 * @template B
 * @param {A} obj input a
 * @param {B} exports input b
 * @returns {A & B} merged
 */
const mergeExports = (obj, exports) => {
	const descriptors = Object.getOwnPropertyDescriptors(exports);
	for (const name of Object.keys(descriptors)) {
		const descriptor = descriptors[name];
		if (descriptor.get) {
			const fn = descriptor.get;
			Object.defineProperty(obj, name, {
				configurable: false,
				enumerable: true,
				get: memoize(fn),
			});
		} else if (typeof descriptor.value === "object") {
			Object.defineProperty(obj, name, {
				configurable: false,
				enumerable: true,
				writable: false,
				value: mergeExports({}, descriptor.value),
			});
		} else {
			throw new Error(
				"Exposed values must be either a getter or an nested object",
			);
		}
	}
	return /** @type {A & B} */ (Object.freeze(obj));
};

module.exports = mergeExports(
	{},
	{
		get Source() {
			return require("./Source");
		},
		get RawSource() {
			return require("./RawSource");
		},
		get OriginalSource() {
			return require("./OriginalSource");
		},
		get SourceMapSource() {
			return require("./SourceMapSource");
		},
		get CachedSource() {
			return require("./CachedSource");
		},
		get ConcatSource() {
			return require("./ConcatSource");
		},
		get ReplaceSource() {
			return require("./ReplaceSource");
		},
		get PrefixSource() {
			return require("./PrefixSource");
		},
		get SizeOnlySource() {
			return require("./SizeOnlySource");
		},
		get CompatSource() {
			return require("./CompatSource");
		},
		util: {
			get stringBufferUtils() {
				return require("./helpers/stringBufferUtils");
			},
		},
	},
);

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Cache = require("../Cache");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../Cache").Etag} Etag */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */

class MemoryWithGcCachePlugin {
	/**
	 * @param {object} options Options
	 * @param {number} options.maxGenerations max generations
	 */
	constructor({ maxGenerations }) {
		this._maxGenerations = maxGenerations;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const maxGenerations = this._maxGenerations;
		/** @type {Map<string, { etag: Etag | null, data: any } | undefined | null>} */
		const cache = new Map();
		/** @type {Map<string, { entry: { etag: Etag | null, data: any } | null, until: number }>} */
		const oldCache = new Map();
		let generation = 0;
		let cachePosition = 0;
		const logger = compiler.getInfrastructureLogger("MemoryWithGcCachePlugin");
		compiler.hooks.afterDone.tap("MemoryWithGcCachePlugin", () => {
			generation++;
			let clearedEntries = 0;
			let lastClearedIdentifier;
			// Avoid coverage problems due indirect changes
			/* istanbul ignore next */
			for (const [identifier, entry] of oldCache) {
				if (entry.until > generation) break;

				oldCache.delete(identifier);
				if (cache.get(identifier) === undefined) {
					cache.delete(identifier);
					clearedEntries++;
					lastClearedIdentifier = identifier;
				}
			}
			if (clearedEntries > 0 || oldCache.size > 0) {
				logger.log(
					`${cache.size - oldCache.size} active entries, ${
						oldCache.size
					} recently unused cached entries${
						clearedEntries > 0
							? `, ${clearedEntries} old unused cache entries removed e. g. ${lastClearedIdentifier}`
							: ""
					}`
				);
			}
			let i = (cache.size / maxGenerations) | 0;
			let j = cachePosition >= cache.size ? 0 : cachePosition;
			cachePosition = j + i;
			for (const [identifier, entry] of cache) {
				if (j !== 0) {
					j--;
					continue;
				}
				if (entry !== undefined) {
					// We don't delete the cache entry, but set it to undefined instead
					// This reserves the location in the data table and avoids rehashing
					// when constantly adding and removing entries.
					// It will be deleted when removed from oldCache.
					cache.set(identifier, undefined);
					oldCache.delete(identifier);
					oldCache.set(identifier, {
						entry,
						until: generation + maxGenerations
					});
					if (i-- === 0) break;
				}
			}
		});
		compiler.cache.hooks.store.tap(
			{ name: "MemoryWithGcCachePlugin", stage: Cache.STAGE_MEMORY },
			(identifier, etag, data) => {
				cache.set(identifier, { etag, data });
			}
		);
		compiler.cache.hooks.get.tap(
			{ name: "MemoryWithGcCachePlugin", stage: Cache.STAGE_MEMORY },
			(identifier, etag, gotHandlers) => {
				const cacheEntry = cache.get(identifier);
				if (cacheEntry === null) {
					return null;
				} else if (cacheEntry !== undefined) {
					return cacheEntry.etag === etag ? cacheEntry.data : null;
				}
				const oldCacheEntry = oldCache.get(identifier);
				if (oldCacheEntry !== undefined) {
					const cacheEntry = oldCacheEntry.entry;
					if (cacheEntry === null) {
						oldCache.delete(identifier);
						cache.set(identifier, cacheEntry);
						return null;
					}
					if (cacheEntry.etag !== etag) return null;
					oldCache.delete(identifier);
					cache.set(identifier, cacheEntry);
					return cacheEntry.data;
				}
				gotHandlers.push((result, callback) => {
					if (result === undefined) {
						cache.set(identifier, null);
					} else {
						cache.set(identifier, { etag, data: result });
					}
					return callback();
				});
			}
		);
		compiler.cache.hooks.shutdown.tap(
			{ name: "MemoryWithGcCachePlugin", stage: Cache.STAGE_MEMORY },
			() => {
				cache.clear();
				oldCache.clear();
			}
		);
	}
}
module.exports = MemoryWithGcCachePlugin;

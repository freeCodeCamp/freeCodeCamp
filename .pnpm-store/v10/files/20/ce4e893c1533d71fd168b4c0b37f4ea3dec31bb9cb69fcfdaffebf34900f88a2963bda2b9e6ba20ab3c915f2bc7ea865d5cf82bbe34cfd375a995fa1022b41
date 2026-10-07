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

class MemoryCachePlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		/** @type {Map<string, { etag: Etag | null, data: any } | null>} */
		const cache = new Map();
		compiler.cache.hooks.store.tap(
			{ name: "MemoryCachePlugin", stage: Cache.STAGE_MEMORY },
			(identifier, etag, data) => {
				cache.set(identifier, { etag, data });
			}
		);
		compiler.cache.hooks.get.tap(
			{ name: "MemoryCachePlugin", stage: Cache.STAGE_MEMORY },
			(identifier, etag, gotHandlers) => {
				const cacheEntry = cache.get(identifier);
				if (cacheEntry === null) {
					return null;
				} else if (cacheEntry !== undefined) {
					return cacheEntry.etag === etag ? cacheEntry.data : null;
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
			{ name: "MemoryCachePlugin", stage: Cache.STAGE_MEMORY },
			() => {
				cache.clear();
			}
		);
	}
}
module.exports = MemoryCachePlugin;

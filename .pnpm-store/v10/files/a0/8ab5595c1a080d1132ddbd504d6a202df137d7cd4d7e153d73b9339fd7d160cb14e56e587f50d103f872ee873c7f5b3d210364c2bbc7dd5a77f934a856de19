/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sean Larkin @thelarkinn
*/

"use strict";

const { find } = require("../util/SetHelpers");
const AssetsOverSizeLimitWarning = require("./AssetsOverSizeLimitWarning");
const EntrypointsOverSizeLimitWarning = require("./EntrypointsOverSizeLimitWarning");
const NoAsyncChunksWarning = require("./NoAsyncChunksWarning");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").PerformanceOptions} PerformanceOptions */
/** @typedef {import("../ChunkGroup")} ChunkGroup */
/** @typedef {import("../Compilation").Asset} Asset */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Entrypoint")} Entrypoint */
/** @typedef {import("../WebpackError")} WebpackError */

/**
 * @typedef {object} AssetDetails
 * @property {string} name
 * @property {number} size
 */

/**
 * @typedef {object} EntrypointDetails
 * @property {string} name
 * @property {number} size
 * @property {string[]} files
 */

const isOverSizeLimitSet = new WeakSet();

/**
 * @param {Asset["name"]} name the name
 * @param {Asset["source"]} source the source
 * @param {Asset["info"]} info the info
 * @returns {boolean} result
 */
const excludeSourceMap = (name, source, info) => !info.development;

module.exports = class SizeLimitsPlugin {
	/**
	 * @param {PerformanceOptions} options the plugin options
	 */
	constructor(options) {
		this.hints = options.hints;
		this.maxAssetSize = options.maxAssetSize;
		this.maxEntrypointSize = options.maxEntrypointSize;
		this.assetFilter = options.assetFilter;
	}

	/**
	 * @param {ChunkGroup | Source} thing the resource to test
	 * @returns {boolean} true if over the limit
	 */
	static isOverSizeLimit(thing) {
		return isOverSizeLimitSet.has(thing);
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const entrypointSizeLimit = this.maxEntrypointSize;
		const assetSizeLimit = this.maxAssetSize;
		const hints = this.hints;
		const assetFilter = this.assetFilter || excludeSourceMap;

		compiler.hooks.afterEmit.tap("SizeLimitsPlugin", compilation => {
			/** @type {WebpackError[]} */
			const warnings = [];

			/**
			 * @param {Entrypoint} entrypoint an entrypoint
			 * @returns {number} the size of the entrypoint
			 */
			const getEntrypointSize = entrypoint => {
				let size = 0;
				for (const file of entrypoint.getFiles()) {
					const asset = compilation.getAsset(file);
					if (
						asset &&
						assetFilter(asset.name, asset.source, asset.info) &&
						asset.source
					) {
						size += asset.info.size || asset.source.size();
					}
				}
				return size;
			};

			/** @type {AssetDetails[]} */
			const assetsOverSizeLimit = [];
			for (const { name, source, info } of compilation.getAssets()) {
				if (!assetFilter(name, source, info) || !source) {
					continue;
				}

				const size = info.size || source.size();
				if (size > /** @type {number} */ (assetSizeLimit)) {
					assetsOverSizeLimit.push({
						name,
						size
					});
					isOverSizeLimitSet.add(source);
				}
			}

			/**
			 * @param {Asset["name"]} name the name
			 * @returns {boolean | undefined} result
			 */
			const fileFilter = name => {
				const asset = compilation.getAsset(name);
				return asset && assetFilter(asset.name, asset.source, asset.info);
			};

			/** @type {EntrypointDetails[]} */
			const entrypointsOverLimit = [];
			for (const [name, entry] of compilation.entrypoints) {
				const size = getEntrypointSize(entry);

				if (size > /** @type {number} */ (entrypointSizeLimit)) {
					entrypointsOverLimit.push({
						name,
						size,
						files: entry.getFiles().filter(fileFilter)
					});
					isOverSizeLimitSet.add(entry);
				}
			}

			if (hints) {
				// 1. Individual Chunk: Size < 250kb
				// 2. Collective Initial Chunks [entrypoint] (Each Set?): Size < 250kb
				// 3. No Async Chunks
				// if !1, then 2, if !2 return
				if (assetsOverSizeLimit.length > 0) {
					warnings.push(
						new AssetsOverSizeLimitWarning(
							assetsOverSizeLimit,
							/** @type {number} */ (assetSizeLimit)
						)
					);
				}
				if (entrypointsOverLimit.length > 0) {
					warnings.push(
						new EntrypointsOverSizeLimitWarning(
							entrypointsOverLimit,
							/** @type {number} */ (entrypointSizeLimit)
						)
					);
				}

				if (warnings.length > 0) {
					const someAsyncChunk = find(
						compilation.chunks,
						chunk => !chunk.canBeInitial()
					);

					if (!someAsyncChunk) {
						warnings.push(new NoAsyncChunksWarning());
					}

					if (hints === "error") {
						compilation.errors.push(...warnings);
					} else {
						compilation.warnings.push(...warnings);
					}
				}
			}
		});
	}
};

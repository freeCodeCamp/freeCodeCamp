/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { STAGE_ADVANCED } = require("../OptimizationStages");

/** @typedef {import("../../declarations/plugins/optimize/MinChunkSizePlugin").MinChunkSizePluginOptions} MinChunkSizePluginOptions */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

const PLUGIN_NAME = "MinChunkSizePlugin";

class MinChunkSizePlugin {
	/**
	 * Creates an instance of MinChunkSizePlugin.
	 * @param {MinChunkSizePluginOptions} options options object
	 */
	constructor(options) {
		/** @type {MinChunkSizePluginOptions} */
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.validate.tap(PLUGIN_NAME, () => {
			compiler.validate(
				() => require("../../schemas/plugins/optimize/MinChunkSizePlugin.json"),
				this.options,
				{
					name: "Min Chunk Size Plugin",
					baseDataPath: "options"
				},
				(options) =>
					require("../../schemas/plugins/optimize/MinChunkSizePlugin.check")(
						options
					)
			);
		});
		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			compilation.hooks.optimizeChunks.tap(
				{
					name: PLUGIN_NAME,
					stage: STAGE_ADVANCED
				},
				(chunks) => {
					const chunkGraph = compilation.chunkGraph;
					const equalOptions = {
						chunkOverhead: 1,
						entryChunkMultiplicator: 1
					};

					/** @type {Map<Chunk, number>} */
					const chunkSizesMap = new Map();
					/** @type {[Chunk, Chunk][]} */
					const combinations = [];
					/** @type {Chunk[]} */
					const smallChunks = [];
					/** @type {Chunk[]} */
					const visitedChunks = [];
					for (const a of chunks) {
						// check if one of the chunks sizes is smaller than the minChunkSize
						// and filter pairs that can NOT be integrated!
						if (
							chunkGraph.getChunkSize(a, equalOptions) <
							this.options.minChunkSize
						) {
							smallChunks.push(a);
							for (const b of visitedChunks) {
								if (chunkGraph.canChunksBeIntegrated(b, a)) {
									combinations.push([b, a]);
								}
							}
						} else {
							for (const b of smallChunks) {
								if (chunkGraph.canChunksBeIntegrated(b, a)) {
									combinations.push([b, a]);
								}
							}
						}
						chunkSizesMap.set(a, chunkGraph.getChunkSize(a, this.options));
						visitedChunks.push(a);
					}

					const sortedSizeFilteredExtendedPairCombinations = combinations
						.map((pair) => {
							// extend combination pairs with size and integrated size
							const a = /** @type {number} */ (chunkSizesMap.get(pair[0]));
							const b = /** @type {number} */ (chunkSizesMap.get(pair[1]));
							const ab = chunkGraph.getIntegratedChunksSize(
								pair[0],
								pair[1],
								this.options
							);
							/** @type {[number, number, Chunk, Chunk]} */
							const extendedPair = [a + b - ab, ab, pair[0], pair[1]];
							return extendedPair;
						})
						.sort((a, b) => {
							// sadly javascript does an in place sort here
							// sort by size
							const diff = b[0] - a[0];
							if (diff !== 0) return diff;
							return a[1] - b[1];
						});

					if (sortedSizeFilteredExtendedPairCombinations.length === 0) return;

					const pair = sortedSizeFilteredExtendedPairCombinations[0];

					chunkGraph.integrateChunks(pair[2], pair[3]);
					compilation.chunks.delete(pair[3]);
					return true;
				}
			);
		});
	}
}

module.exports = MinChunkSizePlugin;

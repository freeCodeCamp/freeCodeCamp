/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { STAGE_ADVANCED } = require("../OptimizationStages");
const createSchemaValidation = require("../util/create-schema-validation");

/** @typedef {import("../../declarations/plugins/optimize/MinChunkSizePlugin").MinChunkSizePluginOptions} MinChunkSizePluginOptions */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

const validate = createSchemaValidation(
	require("../../schemas/plugins/optimize/MinChunkSizePlugin.check.js"),
	() => require("../../schemas/plugins/optimize/MinChunkSizePlugin.json"),
	{
		name: "Min Chunk Size Plugin",
		baseDataPath: "options"
	}
);

class MinChunkSizePlugin {
	/**
	 * @param {MinChunkSizePluginOptions} options options object
	 */
	constructor(options) {
		validate(options);
		this.options = options;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const options = this.options;
		const minChunkSize = options.minChunkSize;
		compiler.hooks.compilation.tap("MinChunkSizePlugin", compilation => {
			compilation.hooks.optimizeChunks.tap(
				{
					name: "MinChunkSizePlugin",
					stage: STAGE_ADVANCED
				},
				chunks => {
					const chunkGraph = compilation.chunkGraph;
					const equalOptions = {
						chunkOverhead: 1,
						entryChunkMultiplicator: 1
					};

					const chunkSizesMap = new Map();
					/** @type {[Chunk, Chunk][]} */
					const combinations = [];
					/** @type {Chunk[]} */
					const smallChunks = [];
					const visitedChunks = [];
					for (const a of chunks) {
						// check if one of the chunks sizes is smaller than the minChunkSize
						// and filter pairs that can NOT be integrated!
						if (chunkGraph.getChunkSize(a, equalOptions) < minChunkSize) {
							smallChunks.push(a);
							for (const b of visitedChunks) {
								if (chunkGraph.canChunksBeIntegrated(b, a))
									combinations.push([b, a]);
							}
						} else {
							for (const b of smallChunks) {
								if (chunkGraph.canChunksBeIntegrated(b, a))
									combinations.push([b, a]);
							}
						}
						chunkSizesMap.set(a, chunkGraph.getChunkSize(a, options));
						visitedChunks.push(a);
					}

					const sortedSizeFilteredExtendedPairCombinations = combinations
						.map(pair => {
							// extend combination pairs with size and integrated size
							const a = chunkSizesMap.get(pair[0]);
							const b = chunkSizesMap.get(pair[1]);
							const ab = chunkGraph.getIntegratedChunksSize(
								pair[0],
								pair[1],
								options
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

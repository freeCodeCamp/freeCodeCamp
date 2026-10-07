/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { STAGE_ADVANCED, STAGE_BASIC } = require("../OptimizationStages");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

const PLUGIN_NAME = "RemoveEmptyChunksPlugin";

class RemoveEmptyChunksPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			/**
			 * Handles the hook callback for this code path.
			 * @param {Iterable<Chunk>} chunks the chunks array
			 * @returns {void}
			 */
			const handler = (chunks) => {
				const chunkGraph = compilation.chunkGraph;
				for (const chunk of chunks) {
					if (
						chunkGraph.getNumberOfChunkModules(chunk) === 0 &&
						!chunk.hasRuntime() &&
						chunkGraph.getNumberOfEntryModules(chunk) === 0
					) {
						compilation.chunkGraph.disconnectChunk(chunk);
						compilation.chunks.delete(chunk);
					}
				}
			};

			compilation.hooks.optimizeChunks.tap(
				{
					name: PLUGIN_NAME,
					stage: STAGE_BASIC
				},
				handler
			);
			compilation.hooks.optimizeChunks.tap(
				{
					name: PLUGIN_NAME,
					stage: STAGE_ADVANCED
				},
				handler
			);
		});
	}
}

module.exports = RemoveEmptyChunksPlugin;

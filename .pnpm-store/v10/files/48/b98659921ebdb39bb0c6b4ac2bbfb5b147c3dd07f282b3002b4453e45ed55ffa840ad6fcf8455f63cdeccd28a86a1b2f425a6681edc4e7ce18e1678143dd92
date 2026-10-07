/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { STAGE_BASIC } = require("../OptimizationStages");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../ChunkGroup")} ChunkGroup */
/** @typedef {import("../Compiler")} Compiler */

class EnsureChunkConditionsPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			"EnsureChunkConditionsPlugin",
			compilation => {
				/**
				 * @param {Iterable<Chunk>} chunks the chunks
				 */
				const handler = chunks => {
					const chunkGraph = compilation.chunkGraph;
					// These sets are hoisted here to save memory
					// They are cleared at the end of every loop
					/** @type {Set<Chunk>} */
					const sourceChunks = new Set();
					/** @type {Set<ChunkGroup>} */
					const chunkGroups = new Set();
					for (const module of compilation.modules) {
						if (!module.hasChunkCondition()) continue;
						for (const chunk of chunkGraph.getModuleChunksIterable(module)) {
							if (!module.chunkCondition(chunk, compilation)) {
								sourceChunks.add(chunk);
								for (const group of chunk.groupsIterable) {
									chunkGroups.add(group);
								}
							}
						}
						if (sourceChunks.size === 0) continue;
						/** @type {Set<Chunk>} */
						const targetChunks = new Set();
						chunkGroupLoop: for (const chunkGroup of chunkGroups) {
							// Can module be placed in a chunk of this group?
							for (const chunk of chunkGroup.chunks) {
								if (module.chunkCondition(chunk, compilation)) {
									targetChunks.add(chunk);
									continue chunkGroupLoop;
								}
							}
							// We reached the entrypoint: fail
							if (chunkGroup.isInitial()) {
								throw new Error(
									`Cannot fulfil chunk condition of ${module.identifier()}`
								);
							}
							// Try placing in all parents
							for (const group of chunkGroup.parentsIterable) {
								chunkGroups.add(group);
							}
						}
						for (const sourceChunk of sourceChunks) {
							chunkGraph.disconnectChunkAndModule(sourceChunk, module);
						}
						for (const targetChunk of targetChunks) {
							chunkGraph.connectChunkAndModule(targetChunk, module);
						}
						sourceChunks.clear();
						chunkGroups.clear();
					}
				};
				compilation.hooks.optimizeChunks.tap(
					{
						name: "EnsureChunkConditionsPlugin",
						stage: STAGE_BASIC
					},
					handler
				);
			}
		);
	}
}
module.exports = EnsureChunkConditionsPlugin;

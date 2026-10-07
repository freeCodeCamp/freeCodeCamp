/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { STAGE_BASIC } = require("../OptimizationStages");
const { runtimeEqual } = require("../util/runtime");

/** @typedef {import("../../declarations/plugins/optimize/MergeDuplicateChunksPlugin").MergeDuplicateChunksPluginOptions} MergeDuplicateChunksPluginOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Chunk")} Chunk */

const PLUGIN_NAME = "MergeDuplicateChunksPlugin";

class MergeDuplicateChunksPlugin {
	/**
	 * Creates an instance of MergeDuplicateChunksPlugin.
	 * @param {MergeDuplicateChunksPluginOptions=} options options object
	 */
	constructor(options = { stage: STAGE_BASIC }) {
		/** @type {MergeDuplicateChunksPluginOptions} */
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.validate.tap(PLUGIN_NAME, () => {
			compiler.validate(
				() =>
					require("../../schemas/plugins/optimize/MergeDuplicateChunksPlugin.json"),
				this.options,
				{
					name: "Merge Duplicate Chunks Plugin",
					baseDataPath: "options"
				},
				(options) =>
					require("../../schemas/plugins/optimize/MergeDuplicateChunksPlugin.check")(
						options
					)
			);
		});
		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			compilation.hooks.optimizeChunks.tap(
				{
					name: PLUGIN_NAME,
					stage: this.options.stage
				},
				(chunks) => {
					const { chunkGraph, moduleGraph } = compilation;

					// remember already tested chunks for performance
					/** @type {Set<Chunk>} */
					const notDuplicates = new Set();

					// for each chunk
					for (const chunk of chunks) {
						// track a Set of all chunk that could be duplicates
						/** @type {Set<Chunk> | undefined} */
						let possibleDuplicates;
						for (const module of chunkGraph.getChunkModulesIterable(chunk)) {
							if (possibleDuplicates === undefined) {
								// when possibleDuplicates is not yet set,
								// create a new Set from chunks of the current module
								// including only chunks with the same number of modules
								for (const dup of chunkGraph.getModuleChunksIterable(module)) {
									if (
										dup !== chunk &&
										chunkGraph.getNumberOfChunkModules(chunk) ===
											chunkGraph.getNumberOfChunkModules(dup) &&
										!notDuplicates.has(dup)
									) {
										// delay allocating the new Set until here, reduce memory pressure
										if (possibleDuplicates === undefined) {
											possibleDuplicates = new Set();
										}
										possibleDuplicates.add(dup);
									}
								}
								// when no chunk is possible we can break here
								if (possibleDuplicates === undefined) break;
							} else {
								// validate existing possible duplicates
								for (const dup of possibleDuplicates) {
									// remove possible duplicate when module is not contained
									if (!chunkGraph.isModuleInChunk(module, dup)) {
										possibleDuplicates.delete(dup);
									}
								}
								// when all chunks has been removed we can break here
								if (possibleDuplicates.size === 0) break;
							}
						}

						// when we found duplicates
						if (
							possibleDuplicates !== undefined &&
							possibleDuplicates.size > 0
						) {
							outer: for (const otherChunk of possibleDuplicates) {
								if (otherChunk.hasRuntime() !== chunk.hasRuntime()) continue;
								if (chunkGraph.getNumberOfEntryModules(chunk) > 0) continue;
								if (chunkGraph.getNumberOfEntryModules(otherChunk) > 0) {
									continue;
								}
								if (!runtimeEqual(chunk.runtime, otherChunk.runtime)) {
									for (const module of chunkGraph.getChunkModulesIterable(
										chunk
									)) {
										const exportsInfo = moduleGraph.getExportsInfo(module);
										if (
											!exportsInfo.isEquallyUsed(
												chunk.runtime,
												otherChunk.runtime
											)
										) {
											continue outer;
										}
									}
								}
								// merge them
								if (chunkGraph.canChunksBeIntegrated(chunk, otherChunk)) {
									chunkGraph.integrateChunks(chunk, otherChunk);
									compilation.chunks.delete(otherChunk);
								}
							}
						}

						// don't check already processed chunks twice
						notDuplicates.add(chunk);
					}
				}
			);
		});
	}
}

module.exports = MergeDuplicateChunksPlugin;

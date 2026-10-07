/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const StartupChunkDependenciesRuntimeModule = require("./StartupChunkDependenciesRuntimeModule");
const StartupEntrypointRuntimeModule = require("./StartupEntrypointRuntimeModule");

/** @typedef {import("../../declarations/WebpackOptions").ChunkLoadingType} ChunkLoadingType */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

/**
 * @typedef {object} Options
 * @property {ChunkLoadingType} chunkLoading
 * @property {boolean=} asyncChunkLoading
 */

class StartupChunkDependenciesPlugin {
	/**
	 * @param {Options} options options
	 */
	constructor(options) {
		this.chunkLoading = options.chunkLoading;
		this.asyncChunkLoading =
			typeof options.asyncChunkLoading === "boolean"
				? options.asyncChunkLoading
				: true;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(
			"StartupChunkDependenciesPlugin",
			compilation => {
				const globalChunkLoading = compilation.outputOptions.chunkLoading;
				/**
				 * @param {Chunk} chunk chunk to check
				 * @returns {boolean} true, when the plugin is enabled for the chunk
				 */
				const isEnabledForChunk = chunk => {
					const options = chunk.getEntryOptions();
					const chunkLoading =
						options && options.chunkLoading !== undefined
							? options.chunkLoading
							: globalChunkLoading;
					return chunkLoading === this.chunkLoading;
				};
				compilation.hooks.additionalTreeRuntimeRequirements.tap(
					"StartupChunkDependenciesPlugin",
					(chunk, set, { chunkGraph }) => {
						if (!isEnabledForChunk(chunk)) return;
						if (chunkGraph.hasChunkEntryDependentChunks(chunk)) {
							set.add(RuntimeGlobals.startup);
							set.add(RuntimeGlobals.ensureChunk);
							set.add(RuntimeGlobals.ensureChunkIncludeEntries);
							compilation.addRuntimeModule(
								chunk,
								new StartupChunkDependenciesRuntimeModule(
									this.asyncChunkLoading
								)
							);
						}
					}
				);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.startupEntrypoint)
					.tap("StartupChunkDependenciesPlugin", (chunk, set) => {
						if (!isEnabledForChunk(chunk)) return;
						set.add(RuntimeGlobals.require);
						set.add(RuntimeGlobals.ensureChunk);
						set.add(RuntimeGlobals.ensureChunkIncludeEntries);
						compilation.addRuntimeModule(
							chunk,
							new StartupEntrypointRuntimeModule(this.asyncChunkLoading)
						);
					});
			}
		);
	}
}

module.exports = StartupChunkDependenciesPlugin;

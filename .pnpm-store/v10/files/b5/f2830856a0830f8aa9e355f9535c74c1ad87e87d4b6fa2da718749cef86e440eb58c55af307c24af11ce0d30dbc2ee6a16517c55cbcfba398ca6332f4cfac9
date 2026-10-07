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
 * Options that describe which chunk loading backend should receive startup
 * dependency handling and whether the runtime should wait for those chunks
 * asynchronously.
 * @typedef {object} Options
 * @property {ChunkLoadingType} chunkLoading
 * @property {boolean=} asyncChunkLoading
 */

const PLUGIN_NAME = "StartupChunkDependenciesPlugin";

/**
 * Adds runtime modules that delay entry startup until entry-dependent chunks
 * required by the selected chunk loading strategy have been loaded.
 */
class StartupChunkDependenciesPlugin {
	/**
	 * Configures which chunk loading implementation this plugin should enhance
	 * and whether startup waits should use promises or synchronous ensures.
	 * @param {Options} options options
	 */
	constructor(options) {
		/** @type {ChunkLoadingType} */
		this.chunkLoading = options.chunkLoading;
		/** @type {boolean} */
		this.asyncChunkLoading =
			typeof options.asyncChunkLoading === "boolean"
				? options.asyncChunkLoading
				: true;
	}

	/**
	 * Registers compilation hooks that attach the startup dependency runtime
	 * modules to entry chunks using the configured chunk loading mechanism.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			const globalChunkLoading = compilation.outputOptions.chunkLoading;
			/**
			 * Determines whether a chunk uses the chunk loading backend that this
			 * plugin is responsible for augmenting.
			 * @param {Chunk} chunk chunk to check
			 * @returns {boolean} true, when the plugin is enabled for the chunk
			 */
			const isEnabledForChunk = (chunk) => {
				const options = chunk.getEntryOptions();
				const chunkLoading =
					options && options.chunkLoading !== undefined
						? options.chunkLoading
						: globalChunkLoading;
				return chunkLoading === this.chunkLoading;
			};
			compilation.hooks.additionalTreeRuntimeRequirements.tap(
				PLUGIN_NAME,
				(chunk, set, { chunkGraph }) => {
					if (!isEnabledForChunk(chunk)) return;
					if (chunkGraph.hasChunkEntryDependentChunks(chunk)) {
						set.add(RuntimeGlobals.startup);
						set.add(RuntimeGlobals.ensureChunk);
						set.add(RuntimeGlobals.ensureChunkIncludeEntries);
						compilation.addRuntimeModule(
							chunk,
							new StartupChunkDependenciesRuntimeModule(this.asyncChunkLoading)
						);
					}
				}
			);
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.startupEntrypoint)
				.tap(PLUGIN_NAME, (chunk, set) => {
					if (!isEnabledForChunk(chunk)) return;
					set.add(RuntimeGlobals.require);
					set.add(RuntimeGlobals.ensureChunk);
					set.add(RuntimeGlobals.ensureChunkIncludeEntries);
					compilation.addRuntimeModule(
						chunk,
						new StartupEntrypointRuntimeModule(this.asyncChunkLoading)
					);
				});
		});
	}
}

module.exports = StartupChunkDependenciesPlugin;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const ExportWebpackRequireRuntimeModule = require("./ExportWebpackRequireRuntimeModule");
const ModuleChunkLoadingRuntimeModule = require("./ModuleChunkLoadingRuntimeModule");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

class ModuleChunkLoadingPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(
			"ModuleChunkLoadingPlugin",
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
					return chunkLoading === "import";
				};
				const onceForChunkSet = new WeakSet();
				/**
				 * @param {Chunk} chunk chunk to check
				 * @param {Set<string>} set runtime requirements
				 */
				const handler = (chunk, set) => {
					if (onceForChunkSet.has(chunk)) return;
					onceForChunkSet.add(chunk);
					if (!isEnabledForChunk(chunk)) return;
					set.add(RuntimeGlobals.moduleFactoriesAddOnly);
					set.add(RuntimeGlobals.hasOwnProperty);
					compilation.addRuntimeModule(
						chunk,
						new ModuleChunkLoadingRuntimeModule(set)
					);
				};
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.ensureChunkHandlers)
					.tap("ModuleChunkLoadingPlugin", handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.baseURI)
					.tap("ModuleChunkLoadingPlugin", handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.externalInstallChunk)
					.tap("ModuleChunkLoadingPlugin", handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.onChunksLoaded)
					.tap("ModuleChunkLoadingPlugin", handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.externalInstallChunk)
					.tap("ModuleChunkLoadingPlugin", (chunk, set) => {
						if (!isEnabledForChunk(chunk)) return;
						compilation.addRuntimeModule(
							chunk,
							new ExportWebpackRequireRuntimeModule()
						);
					});

				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.ensureChunkHandlers)
					.tap("ModuleChunkLoadingPlugin", (chunk, set) => {
						if (!isEnabledForChunk(chunk)) return;
						set.add(RuntimeGlobals.getChunkScriptFilename);
					});
			}
		);
	}
}

module.exports = ModuleChunkLoadingPlugin;

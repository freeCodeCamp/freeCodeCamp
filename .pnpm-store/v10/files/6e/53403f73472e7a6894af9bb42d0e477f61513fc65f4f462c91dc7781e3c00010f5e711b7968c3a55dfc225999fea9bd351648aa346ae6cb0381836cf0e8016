/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const JsonpChunkLoadingRuntimeModule = require("./JsonpChunkLoadingRuntimeModule");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

class JsonpChunkLoadingPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(
			"JsonpChunkLoadingPlugin",
			compilation => {
				const globalChunkLoading = compilation.outputOptions.chunkLoading;
				/**
				 * @param {Chunk} chunk chunk
				 * @returns {boolean} true, if wasm loading is enabled for the chunk
				 */
				const isEnabledForChunk = chunk => {
					const options = chunk.getEntryOptions();
					const chunkLoading =
						options && options.chunkLoading !== undefined
							? options.chunkLoading
							: globalChunkLoading;
					return chunkLoading === "jsonp";
				};
				const onceForChunkSet = new WeakSet();
				/**
				 * @param {Chunk} chunk chunk
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
						new JsonpChunkLoadingRuntimeModule(set)
					);
				};
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.ensureChunkHandlers)
					.tap("JsonpChunkLoadingPlugin", handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.hmrDownloadUpdateHandlers)
					.tap("JsonpChunkLoadingPlugin", handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.hmrDownloadManifest)
					.tap("JsonpChunkLoadingPlugin", handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.baseURI)
					.tap("JsonpChunkLoadingPlugin", handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.onChunksLoaded)
					.tap("JsonpChunkLoadingPlugin", handler);

				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.ensureChunkHandlers)
					.tap("JsonpChunkLoadingPlugin", (chunk, set) => {
						if (!isEnabledForChunk(chunk)) return;
						set.add(RuntimeGlobals.publicPath);
						set.add(RuntimeGlobals.loadScript);
						set.add(RuntimeGlobals.getChunkScriptFilename);
					});
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.hmrDownloadUpdateHandlers)
					.tap("JsonpChunkLoadingPlugin", (chunk, set) => {
						if (!isEnabledForChunk(chunk)) return;
						set.add(RuntimeGlobals.publicPath);
						set.add(RuntimeGlobals.loadScript);
						set.add(RuntimeGlobals.getChunkUpdateScriptFilename);
						set.add(RuntimeGlobals.moduleCache);
						set.add(RuntimeGlobals.hmrModuleData);
						set.add(RuntimeGlobals.moduleFactoriesAddOnly);
					});
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.hmrDownloadManifest)
					.tap("JsonpChunkLoadingPlugin", (chunk, set) => {
						if (!isEnabledForChunk(chunk)) return;
						set.add(RuntimeGlobals.publicPath);
						set.add(RuntimeGlobals.getUpdateManifestFilename);
					});
			}
		);
	}
}

module.exports = JsonpChunkLoadingPlugin;

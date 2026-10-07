/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const StartupChunkDependenciesPlugin = require("../runtime/StartupChunkDependenciesPlugin");
const ImportScriptsChunkLoadingRuntimeModule = require("./ImportScriptsChunkLoadingRuntimeModule");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module").RuntimeRequirements} RuntimeRequirements */

const PLUGIN_NAME = "ImportScriptsChunkLoadingPlugin";

/**
 * Enables worker-side chunk loading via `importScripts` and wires in the
 * runtime helpers needed for startup, loading, and hot updates.
 */
class ImportScriptsChunkLoadingPlugin {
	/**
	 * Registers compilation hooks that attach the `importScripts` chunk-loading
	 * runtime and its supporting globals to chunks using that backend.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		new StartupChunkDependenciesPlugin({
			chunkLoading: "import-scripts",
			asyncChunkLoading: true
		}).apply(compiler);
		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			const globalChunkLoading = compilation.outputOptions.chunkLoading;
			/**
			 * Determines whether the chunk resolves additional chunks through the
			 * worker-side `importScripts` backend.
			 * @param {Chunk} chunk chunk
			 * @returns {boolean} true, if wasm loading is enabled for the chunk
			 */
			const isEnabledForChunk = (chunk) => {
				const options = chunk.getEntryOptions();
				const chunkLoading =
					options && options.chunkLoading !== undefined
						? options.chunkLoading
						: globalChunkLoading;
				return chunkLoading === "import-scripts";
			};
			/** @type {WeakSet<Chunk>} */
			const onceForChunkSet = new WeakSet();
			/**
			 * Adds the `importScripts` chunk-loading runtime module to a chunk once
			 * and records the globals it depends on.
			 * @param {Chunk} chunk chunk
			 * @param {RuntimeRequirements} set runtime requirements
			 */
			const handler = (chunk, set) => {
				if (onceForChunkSet.has(chunk)) return;
				onceForChunkSet.add(chunk);
				if (!isEnabledForChunk(chunk)) return;
				const withCreateScriptUrl = Boolean(
					compilation.outputOptions.trustedTypes
				);
				set.add(RuntimeGlobals.moduleFactoriesAddOnly);
				set.add(RuntimeGlobals.hasOwnProperty);
				if (withCreateScriptUrl) {
					set.add(RuntimeGlobals.createScriptUrl);
				}
				compilation.addRuntimeModule(
					chunk,
					new ImportScriptsChunkLoadingRuntimeModule(set, withCreateScriptUrl)
				);
			};
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.ensureChunkHandlers)
				.tap(PLUGIN_NAME, handler);
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.hmrDownloadUpdateHandlers)
				.tap(PLUGIN_NAME, handler);
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.hmrDownloadManifest)
				.tap(PLUGIN_NAME, handler);
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.baseURI)
				.tap(PLUGIN_NAME, handler);
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.onChunksLoaded)
				.tap(PLUGIN_NAME, handler);

			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.ensureChunkHandlers)
				.tap(PLUGIN_NAME, (chunk, set) => {
					if (!isEnabledForChunk(chunk)) return;
					set.add(RuntimeGlobals.publicPath);
					set.add(RuntimeGlobals.getChunkScriptFilename);
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.hmrDownloadUpdateHandlers)
				.tap(PLUGIN_NAME, (chunk, set) => {
					if (!isEnabledForChunk(chunk)) return;
					set.add(RuntimeGlobals.publicPath);
					set.add(RuntimeGlobals.getChunkUpdateScriptFilename);
					set.add(RuntimeGlobals.moduleCache);
					set.add(RuntimeGlobals.hmrModuleData);
					set.add(RuntimeGlobals.moduleFactoriesAddOnly);
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.hmrDownloadManifest)
				.tap(PLUGIN_NAME, (chunk, set) => {
					if (!isEnabledForChunk(chunk)) return;
					set.add(RuntimeGlobals.publicPath);
					set.add(RuntimeGlobals.getUpdateManifestFilename);
				});
		});
	}
}

module.exports = ImportScriptsChunkLoadingPlugin;

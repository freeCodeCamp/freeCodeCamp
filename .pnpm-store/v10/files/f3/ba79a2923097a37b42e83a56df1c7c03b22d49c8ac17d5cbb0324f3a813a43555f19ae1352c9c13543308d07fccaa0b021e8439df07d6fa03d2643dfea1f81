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

class ImportScriptsChunkLoadingPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		new StartupChunkDependenciesPlugin({
			chunkLoading: "import-scripts",
			asyncChunkLoading: true
		}).apply(compiler);
		compiler.hooks.thisCompilation.tap(
			"ImportScriptsChunkLoadingPlugin",
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
					return chunkLoading === "import-scripts";
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
					.tap("ImportScriptsChunkLoadingPlugin", handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.hmrDownloadUpdateHandlers)
					.tap("ImportScriptsChunkLoadingPlugin", handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.hmrDownloadManifest)
					.tap("ImportScriptsChunkLoadingPlugin", handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.baseURI)
					.tap("ImportScriptsChunkLoadingPlugin", handler);

				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.ensureChunkHandlers)
					.tap("ImportScriptsChunkLoadingPlugin", (chunk, set) => {
						if (!isEnabledForChunk(chunk)) return;
						set.add(RuntimeGlobals.publicPath);
						set.add(RuntimeGlobals.getChunkScriptFilename);
					});
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.hmrDownloadUpdateHandlers)
					.tap("ImportScriptsChunkLoadingPlugin", (chunk, set) => {
						if (!isEnabledForChunk(chunk)) return;
						set.add(RuntimeGlobals.publicPath);
						set.add(RuntimeGlobals.getChunkUpdateScriptFilename);
						set.add(RuntimeGlobals.moduleCache);
						set.add(RuntimeGlobals.hmrModuleData);
						set.add(RuntimeGlobals.moduleFactoriesAddOnly);
					});
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.hmrDownloadManifest)
					.tap("ImportScriptsChunkLoadingPlugin", (chunk, set) => {
						if (!isEnabledForChunk(chunk)) return;
						set.add(RuntimeGlobals.publicPath);
						set.add(RuntimeGlobals.getUpdateManifestFilename);
					});
			}
		);
	}
}
module.exports = ImportScriptsChunkLoadingPlugin;

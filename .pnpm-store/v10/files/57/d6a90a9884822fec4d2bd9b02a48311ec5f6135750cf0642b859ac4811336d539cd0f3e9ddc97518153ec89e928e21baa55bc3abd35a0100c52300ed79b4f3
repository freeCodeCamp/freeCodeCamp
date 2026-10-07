/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const StartupChunkDependenciesPlugin = require("../runtime/StartupChunkDependenciesPlugin");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

/**
 * @typedef {object} CommonJsChunkLoadingPluginOptions
 * @property {boolean} [asyncChunkLoading] enable async chunk loading
 */

class CommonJsChunkLoadingPlugin {
	/**
	 * @param {CommonJsChunkLoadingPluginOptions} [options] options
	 */
	constructor(options = {}) {
		this._asyncChunkLoading = options.asyncChunkLoading;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const ChunkLoadingRuntimeModule = this._asyncChunkLoading
			? require("./ReadFileChunkLoadingRuntimeModule")
			: require("./RequireChunkLoadingRuntimeModule");
		const chunkLoadingValue = this._asyncChunkLoading
			? "async-node"
			: "require";
		new StartupChunkDependenciesPlugin({
			chunkLoading: chunkLoadingValue,
			asyncChunkLoading: this._asyncChunkLoading
		}).apply(compiler);
		compiler.hooks.thisCompilation.tap(
			"CommonJsChunkLoadingPlugin",
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
					return chunkLoading === chunkLoadingValue;
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
						new ChunkLoadingRuntimeModule(set)
					);
				};

				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.ensureChunkHandlers)
					.tap("CommonJsChunkLoadingPlugin", handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.hmrDownloadUpdateHandlers)
					.tap("CommonJsChunkLoadingPlugin", handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.hmrDownloadManifest)
					.tap("CommonJsChunkLoadingPlugin", handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.baseURI)
					.tap("CommonJsChunkLoadingPlugin", handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.externalInstallChunk)
					.tap("CommonJsChunkLoadingPlugin", handler);
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.onChunksLoaded)
					.tap("CommonJsChunkLoadingPlugin", handler);

				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.ensureChunkHandlers)
					.tap("CommonJsChunkLoadingPlugin", (chunk, set) => {
						if (!isEnabledForChunk(chunk)) return;
						set.add(RuntimeGlobals.getChunkScriptFilename);
					});
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.hmrDownloadUpdateHandlers)
					.tap("CommonJsChunkLoadingPlugin", (chunk, set) => {
						if (!isEnabledForChunk(chunk)) return;
						set.add(RuntimeGlobals.getChunkUpdateScriptFilename);
						set.add(RuntimeGlobals.moduleCache);
						set.add(RuntimeGlobals.hmrModuleData);
						set.add(RuntimeGlobals.moduleFactoriesAddOnly);
					});
				compilation.hooks.runtimeRequirementInTree
					.for(RuntimeGlobals.hmrDownloadManifest)
					.tap("CommonJsChunkLoadingPlugin", (chunk, set) => {
						if (!isEnabledForChunk(chunk)) return;
						set.add(RuntimeGlobals.getUpdateManifestFilename);
					});
			}
		);
	}
}

module.exports = CommonJsChunkLoadingPlugin;

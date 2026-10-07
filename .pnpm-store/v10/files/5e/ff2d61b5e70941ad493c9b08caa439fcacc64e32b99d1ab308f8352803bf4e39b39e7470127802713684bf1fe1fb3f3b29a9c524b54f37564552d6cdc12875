/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const StartupChunkDependenciesPlugin = require("../runtime/StartupChunkDependenciesPlugin");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module").RuntimeRequirements} RuntimeRequirements */

/**
 * Defines the common js chunk loading plugin options type used by this module.
 * @typedef {object} CommonJsChunkLoadingPluginOptions
 * @property {boolean=} asyncChunkLoading enable async chunk loading
 */

const PLUGIN_NAME = "CommonJsChunkLoadingPlugin";

class CommonJsChunkLoadingPlugin {
	/**
	 * Creates an instance of CommonJsChunkLoadingPlugin.
	 * @param {CommonJsChunkLoadingPluginOptions=} options options
	 */
	constructor(options = {}) {
		/** @type {CommonJsChunkLoadingPluginOptions} */
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const ChunkLoadingRuntimeModule = this.options.asyncChunkLoading
			? require("./ReadFileChunkLoadingRuntimeModule")
			: require("./RequireChunkLoadingRuntimeModule");
		const chunkLoadingValue = this.options.asyncChunkLoading
			? "async-node"
			: "require";
		new StartupChunkDependenciesPlugin({
			chunkLoading: chunkLoadingValue,
			asyncChunkLoading: this.options.asyncChunkLoading
		}).apply(compiler);
		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			const globalChunkLoading = compilation.outputOptions.chunkLoading;
			/**
			 * Checks whether this common js chunk loading plugin is enabled for chunk.
			 * @param {Chunk} chunk chunk
			 * @returns {boolean} true, if wasm loading is enabled for the chunk
			 */
			const isEnabledForChunk = (chunk) => {
				const options = chunk.getEntryOptions();
				const chunkLoading =
					options && options.chunkLoading !== undefined
						? options.chunkLoading
						: globalChunkLoading;
				return chunkLoading === chunkLoadingValue;
			};
			/** @type {WeakSet<Chunk>} */
			const onceForChunkSet = new WeakSet();
			/**
			 * Handles the hook callback for this code path.
			 * @param {Chunk} chunk chunk
			 * @param {RuntimeRequirements} set runtime requirements
			 */
			const handler = (chunk, set) => {
				if (onceForChunkSet.has(chunk)) return;
				onceForChunkSet.add(chunk);
				if (!isEnabledForChunk(chunk)) return;
				set.add(RuntimeGlobals.moduleFactoriesAddOnly);
				set.add(RuntimeGlobals.hasOwnProperty);
				compilation.addRuntimeModule(chunk, new ChunkLoadingRuntimeModule(set));
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
				.for(RuntimeGlobals.externalInstallChunk)
				.tap(PLUGIN_NAME, handler);
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.onChunksLoaded)
				.tap(PLUGIN_NAME, handler);

			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.ensureChunkHandlers)
				.tap(PLUGIN_NAME, (chunk, set) => {
					if (!isEnabledForChunk(chunk)) return;
					set.add(RuntimeGlobals.getChunkScriptFilename);
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.hmrDownloadUpdateHandlers)
				.tap(PLUGIN_NAME, (chunk, set) => {
					if (!isEnabledForChunk(chunk)) return;
					set.add(RuntimeGlobals.getChunkUpdateScriptFilename);
					set.add(RuntimeGlobals.moduleCache);
					set.add(RuntimeGlobals.hmrModuleData);
					set.add(RuntimeGlobals.moduleFactoriesAddOnly);
				});
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.hmrDownloadManifest)
				.tap(PLUGIN_NAME, (chunk, set) => {
					if (!isEnabledForChunk(chunk)) return;
					set.add(RuntimeGlobals.getUpdateManifestFilename);
				});
		});
	}
}

module.exports = CommonJsChunkLoadingPlugin;

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
/** @typedef {import("../Module").RuntimeRequirements} RuntimeRequirements */

const PLUGIN_NAME = "ModuleChunkLoadingPlugin";

class ModuleChunkLoadingPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			const globalChunkLoading = compilation.outputOptions.chunkLoading;
			/**
			 * Checks whether this module chunk loading plugin is enabled for chunk.
			 * @param {Chunk} chunk chunk to check
			 * @returns {boolean} true, when the plugin is enabled for the chunk
			 */
			const isEnabledForChunk = (chunk) => {
				const options = chunk.getEntryOptions();
				const chunkLoading =
					options && options.chunkLoading !== undefined
						? options.chunkLoading
						: globalChunkLoading;
				return chunkLoading === "import";
			};
			/** @type {WeakSet<Chunk>} */
			const onceForChunkSet = new WeakSet();
			/**
			 * Handles the hook callback for this code path.
			 * @param {Chunk} chunk chunk to check
			 * @param {RuntimeRequirements} set runtime requirements
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
				.for(RuntimeGlobals.hmrDownloadUpdateHandlers)
				.tap(PLUGIN_NAME, handler);
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.hmrDownloadManifest)
				.tap(PLUGIN_NAME, handler);
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.externalInstallChunk)
				.tap(PLUGIN_NAME, (chunk) => {
					if (!isEnabledForChunk(chunk)) return;
					compilation.addRuntimeModule(
						chunk,
						new ExportWebpackRequireRuntimeModule()
					);
				});

			// We need public path only when we prefetch/preload chunk or public path is not `auto`
			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.prefetchChunkHandlers)
				.tap(PLUGIN_NAME, (chunk, set) => {
					if (!isEnabledForChunk(chunk)) return;
					set.add(RuntimeGlobals.publicPath);
				});

			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.preloadChunkHandlers)
				.tap(PLUGIN_NAME, (chunk, set) => {
					if (!isEnabledForChunk(chunk)) return;
					set.add(RuntimeGlobals.publicPath);
				});

			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.ensureChunkHandlers)
				.tap(PLUGIN_NAME, (chunk, set) => {
					if (!isEnabledForChunk(chunk)) return;

					if (compilation.outputOptions.publicPath !== "auto") {
						set.add(RuntimeGlobals.publicPath);
					}

					set.add(RuntimeGlobals.getChunkScriptFilename);
				});

			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.hmrDownloadUpdateHandlers)
				.tap(PLUGIN_NAME, (chunk, set) => {
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
				.tap(PLUGIN_NAME, (chunk, set) => {
					if (!isEnabledForChunk(chunk)) return;
					set.add(RuntimeGlobals.publicPath);
					set.add(RuntimeGlobals.getUpdateManifestFilename);
				});

			compilation.hooks.additionalTreeRuntimeRequirements.tap(
				PLUGIN_NAME,
				(chunk, set, { chunkGraph }) => {
					if (chunkGraph.hasChunkEntryDependentChunks(chunk)) {
						set.add(RuntimeGlobals.externalInstallChunk);
					}
				}
			);
		});
	}
}

module.exports = ModuleChunkLoadingPlugin;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { WEBASSEMBLY_MODULE_TYPE_SYNC } = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const WasmChunkLoadingRuntimeModule = require("../wasm-sync/WasmChunkLoadingRuntimeModule");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

/**
 * @typedef {object} FetchCompileWasmPluginOptions
 * @property {boolean} [mangleImports] mangle imports
 */

// TODO webpack 6 remove

const PLUGIN_NAME = "FetchCompileWasmPlugin";

class FetchCompileWasmPlugin {
	/**
	 * @param {FetchCompileWasmPluginOptions} [options] options
	 */
	constructor(options = {}) {
		this.options = options;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, compilation => {
			const globalWasmLoading = compilation.outputOptions.wasmLoading;
			/**
			 * @param {Chunk} chunk chunk
			 * @returns {boolean} true, if wasm loading is enabled for the chunk
			 */
			const isEnabledForChunk = chunk => {
				const options = chunk.getEntryOptions();
				const wasmLoading =
					options && options.wasmLoading !== undefined
						? options.wasmLoading
						: globalWasmLoading;
				return wasmLoading === "fetch";
			};
			/**
			 * @param {string} path path to the wasm file
			 * @returns {string} code to load the wasm file
			 */
			const generateLoadBinaryCode = path =>
				`fetch(${RuntimeGlobals.publicPath} + ${path})`;

			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.ensureChunkHandlers)
				.tap(PLUGIN_NAME, (chunk, set, { chunkGraph }) => {
					if (!isEnabledForChunk(chunk)) return;
					if (
						!chunkGraph.hasModuleInGraph(
							chunk,
							m => m.type === WEBASSEMBLY_MODULE_TYPE_SYNC
						)
					) {
						return;
					}
					set.add(RuntimeGlobals.moduleCache);
					set.add(RuntimeGlobals.publicPath);
					compilation.addRuntimeModule(
						chunk,
						new WasmChunkLoadingRuntimeModule({
							generateLoadBinaryCode,
							supportsStreaming: true,
							mangleImports: this.options.mangleImports,
							runtimeRequirements: set
						})
					);
				});
		});
	}
}

module.exports = FetchCompileWasmPlugin;

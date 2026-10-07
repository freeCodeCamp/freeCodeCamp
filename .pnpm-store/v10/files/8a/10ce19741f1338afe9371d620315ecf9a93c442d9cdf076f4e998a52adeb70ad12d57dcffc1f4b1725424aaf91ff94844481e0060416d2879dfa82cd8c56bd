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
 * Options that influence how synchronous WebAssembly modules are emitted for
 * the fetch-based wasm loading runtime.
 * @typedef {object} FetchCompileWasmPluginOptions
 * @property {boolean=} mangleImports mangle imports
 */

const PLUGIN_NAME = "FetchCompileWasmPlugin";

/**
 * Enables synchronous WebAssembly chunk loading that fetches `.wasm` files and
 * compiles them in browser-like environments.
 */
class FetchCompileWasmPlugin {
	/**
	 * Stores options that affect generated synchronous WebAssembly runtime code.
	 * @param {FetchCompileWasmPluginOptions=} options options
	 */
	constructor(options = {}) {
		/** @type {FetchCompileWasmPluginOptions} */
		this.options = options;
	}

	/**
	 * Registers compilation hooks that attach the fetch-based synchronous wasm
	 * runtime module to chunks containing sync WebAssembly modules.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			const globalWasmLoading = compilation.outputOptions.wasmLoading;
			/**
			 * Determines whether the chunk should load synchronous WebAssembly
			 * binaries through the `fetch` backend.
			 * @param {Chunk} chunk chunk
			 * @returns {boolean} true, if wasm loading is enabled for the chunk
			 */
			const isEnabledForChunk = (chunk) => {
				const options = chunk.getEntryOptions();
				const wasmLoading =
					options && options.wasmLoading !== undefined
						? options.wasmLoading
						: globalWasmLoading;
				return wasmLoading === "fetch";
			};
			/**
			 * Generates the runtime expression that downloads the emitted wasm
			 * binary for a module.
			 * @param {string} path path to the wasm file
			 * @returns {string} code to load the wasm file
			 */
			const generateLoadBinaryCode = (path) =>
				`fetch(${RuntimeGlobals.publicPath} + ${path})`;

			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.ensureChunkHandlers)
				.tap(PLUGIN_NAME, (chunk, set, { chunkGraph }) => {
					if (!isEnabledForChunk(chunk)) return;
					if (
						!chunkGraph.hasModuleInGraph(
							chunk,
							(m) => m.type === WEBASSEMBLY_MODULE_TYPE_SYNC
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

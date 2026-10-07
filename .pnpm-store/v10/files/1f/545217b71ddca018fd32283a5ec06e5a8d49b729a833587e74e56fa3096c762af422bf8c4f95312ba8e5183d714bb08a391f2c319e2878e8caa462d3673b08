/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { WEBASSEMBLY_MODULE_TYPE_ASYNC } = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const AsyncWasmCompileRuntimeModule = require("../wasm-async/AsyncWasmCompileRuntimeModule");
const AsyncWasmLoadingRuntimeModule = require("../wasm-async/AsyncWasmLoadingRuntimeModule");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

const PLUGIN_NAME = "FetchCompileAsyncWasmPlugin";

/**
 * Enables asynchronous WebAssembly loading through `fetch` for environments
 * that can instantiate fetched binaries at runtime.
 */
class FetchCompileAsyncWasmPlugin {
	/**
	 * Registers compilation hooks that attach the async fetch-based wasm runtime
	 * to chunks containing async WebAssembly modules.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			const globalWasmLoading = compilation.outputOptions.wasmLoading;
			/**
			 * Determines whether the chunk should load async WebAssembly binaries
			 * through the `fetch` backend.
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
			 * binary for an async WebAssembly module.
			 * @param {string} path path to the wasm file
			 * @returns {string} code to load the wasm file
			 */
			const generateLoadBinaryCode = (path) =>
				`fetch(${RuntimeGlobals.publicPath} + ${path})`;

			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.instantiateWasm)
				.tap(PLUGIN_NAME, (chunk, set, { chunkGraph }) => {
					if (!isEnabledForChunk(chunk)) return;
					if (
						!chunkGraph.hasModuleInGraph(
							chunk,
							(m) => m.type === WEBASSEMBLY_MODULE_TYPE_ASYNC
						)
					) {
						return;
					}
					set.add(RuntimeGlobals.publicPath);
					compilation.addRuntimeModule(
						chunk,
						new AsyncWasmLoadingRuntimeModule({
							generateLoadBinaryCode,
							supportsStreaming: true
						})
					);
				});

			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.compileWasm)
				.tap(PLUGIN_NAME, (chunk, set, { chunkGraph }) => {
					if (!isEnabledForChunk(chunk)) return;
					if (
						!chunkGraph.hasModuleInGraph(
							chunk,
							(m) => m.type === WEBASSEMBLY_MODULE_TYPE_ASYNC
						)
					) {
						return;
					}
					set.add(RuntimeGlobals.publicPath);
					compilation.addRuntimeModule(
						chunk,
						new AsyncWasmCompileRuntimeModule({
							generateLoadBinaryCode,
							supportsStreaming: true
						})
					);
				});
		});
	}
}

module.exports = FetchCompileAsyncWasmPlugin;

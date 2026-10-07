/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { WEBASSEMBLY_MODULE_TYPE_ASYNC } = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const AsyncWasmLoadingRuntimeModule = require("../wasm-async/AsyncWasmLoadingRuntimeModule");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

/**
 * @typedef {object} ReadFileCompileAsyncWasmPluginOptions
 * @property {boolean} [import] use import?
 */

const PLUGIN_NAME = "ReadFileCompileAsyncWasmPlugin";

class ReadFileCompileAsyncWasmPlugin {
	/**
	 * @param {ReadFileCompileAsyncWasmPluginOptions} [options] options object
	 */
	constructor({ import: useImport = false } = {}) {
		this._import = useImport;
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
				return wasmLoading === "async-node";
			};

			/**
			 * @param {string} path path to wasm file
			 * @returns {string} generated code to load the wasm file
			 */
			const generateLoadBinaryCode = this._import
				? path =>
						Template.asString([
							"Promise.all([import('fs'), import('url')]).then(([{ readFile }, { URL }]) => new Promise((resolve, reject) => {",
							Template.indent([
								`readFile(new URL(${path}, ${compilation.outputOptions.importMetaName}.url), (err, buffer) => {`,
								Template.indent([
									"if (err) return reject(err);",
									"",
									"// Fake fetch response",
									"resolve({",
									Template.indent(["arrayBuffer() { return buffer; }"]),
									"});"
								]),
								"});"
							]),
							"}))"
						])
				: path =>
						Template.asString([
							"new Promise(function (resolve, reject) {",
							Template.indent([
								"try {",
								Template.indent([
									"var { readFile } = require('fs');",
									"var { join } = require('path');",
									"",
									`readFile(join(__dirname, ${path}), function(err, buffer){`,
									Template.indent([
										"if (err) return reject(err);",
										"",
										"// Fake fetch response",
										"resolve({",
										Template.indent(["arrayBuffer() { return buffer; }"]),
										"});"
									]),
									"});"
								]),
								"} catch (err) { reject(err); }"
							]),
							"})"
						]);

			compilation.hooks.runtimeRequirementInTree
				.for(RuntimeGlobals.instantiateWasm)
				.tap(PLUGIN_NAME, (chunk, set, { chunkGraph }) => {
					if (!isEnabledForChunk(chunk)) return;
					if (
						!chunkGraph.hasModuleInGraph(
							chunk,
							m => m.type === WEBASSEMBLY_MODULE_TYPE_ASYNC
						)
					) {
						return;
					}
					compilation.addRuntimeModule(
						chunk,
						new AsyncWasmLoadingRuntimeModule({
							generateLoadBinaryCode,
							supportsStreaming: false
						})
					);
				});
		});
	}
}

module.exports = ReadFileCompileAsyncWasmPlugin;

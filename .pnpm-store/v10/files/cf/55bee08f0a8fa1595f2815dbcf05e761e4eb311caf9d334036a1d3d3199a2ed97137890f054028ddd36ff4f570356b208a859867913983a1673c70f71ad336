/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { WEBASSEMBLY_MODULE_TYPE_ASYNC } = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const AsyncWasmCompileRuntimeModule = require("../wasm-async/AsyncWasmCompileRuntimeModule");
const AsyncWasmLoadingRuntimeModule = require("../wasm-async/AsyncWasmLoadingRuntimeModule");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

/**
 * Defines the read file compile async wasm plugin options type used by this module.
 * @typedef {object} ReadFileCompileAsyncWasmPluginOptions
 * @property {boolean=} import use import?
 */

const PLUGIN_NAME = "ReadFileCompileAsyncWasmPlugin";

class ReadFileCompileAsyncWasmPlugin {
	/**
	 * Creates an instance of ReadFileCompileAsyncWasmPlugin.
	 * @param {ReadFileCompileAsyncWasmPluginOptions=} options options object
	 */
	constructor({ import: useImport = false } = {}) {
		/** @type {boolean} */
		this._import = useImport;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			const globalWasmLoading = compilation.outputOptions.wasmLoading;
			/**
			 * Checks whether this read file compile async wasm plugin is enabled for chunk.
			 * @param {Chunk} chunk chunk
			 * @returns {boolean} true, if wasm loading is enabled for the chunk
			 */
			const isEnabledForChunk = (chunk) => {
				const options = chunk.getEntryOptions();
				const wasmLoading =
					options && options.wasmLoading !== undefined
						? options.wasmLoading
						: globalWasmLoading;
				return wasmLoading === "async-node";
			};

			/**
			 * @type {(path: string) => string} callback to generate code to load the wasm file
			 */
			const generateLoadBinaryCode = this._import
				? (path) =>
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
				: (path) =>
						Template.asString([
							"new Promise(function (resolve, reject) {",
							Template.indent([
								"try {",
								Template.indent([
									`var { readFile } = require(${compilation.runtimeTemplate.renderNodePrefixForCoreModule("fs")});`,
									`var { join } = require(${compilation.runtimeTemplate.renderNodePrefixForCoreModule("path")});`,
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
							(m) => m.type === WEBASSEMBLY_MODULE_TYPE_ASYNC
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
					compilation.addRuntimeModule(
						chunk,
						new AsyncWasmCompileRuntimeModule({
							generateLoadBinaryCode,
							supportsStreaming: false
						})
					);
				});
		});
	}
}

module.exports = ReadFileCompileAsyncWasmPlugin;

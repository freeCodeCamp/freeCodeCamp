/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { WEBASSEMBLY_MODULE_TYPE_SYNC } = require("../ModuleTypeConstants");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const WasmChunkLoadingRuntimeModule = require("../wasm-sync/WasmChunkLoadingRuntimeModule");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

/**
 * @typedef {object} ReadFileCompileWasmPluginOptions
 * @property {boolean} [mangleImports] mangle imports
 * @property {boolean} [import] use import?
 */

// TODO webpack 6 remove

const PLUGIN_NAME = "ReadFileCompileWasmPlugin";

class ReadFileCompileWasmPlugin {
	/**
	 * @param {ReadFileCompileWasmPluginOptions} [options] options object
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
			 * @returns {boolean} true, when wasm loading is enabled for the chunk
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
			const generateLoadBinaryCode = this.options.import
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
								"var { readFile } = require('fs');",
								"var { join } = require('path');",
								"",
								"try {",
								Template.indent([
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
					compilation.addRuntimeModule(
						chunk,
						new WasmChunkLoadingRuntimeModule({
							generateLoadBinaryCode,
							supportsStreaming: false,
							mangleImports: this.options.mangleImports,
							runtimeRequirements: set
						})
					);
				});
		});
	}
}

module.exports = ReadFileCompileWasmPlugin;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Generator = require("../Generator");
const { WEBASSEMBLY_MODULE_TYPE_SYNC } = require("../ModuleTypeConstants");
const WebAssemblyExportImportedDependency = require("../dependencies/WebAssemblyExportImportedDependency");
const WebAssemblyImportDependency = require("../dependencies/WebAssemblyImportDependency");
const { compareModulesByIdOrIdentifier } = require("../util/comparators");
const memoize = require("../util/memoize");
const WebAssemblyInInitialChunkError = require("./WebAssemblyInInitialChunkError");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").OutputNormalized} OutputOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../ModuleTemplate")} ModuleTemplate */
/** @typedef {import("../javascript/JavascriptModulesPlugin").RenderContext} RenderContext */

const getWebAssemblyGenerator = memoize(() =>
	require("./WebAssemblyGenerator")
);
const getWebAssemblyJavascriptGenerator = memoize(() =>
	require("./WebAssemblyJavascriptGenerator")
);
const getWebAssemblyParser = memoize(() => require("./WebAssemblyParser"));

const PLUGIN_NAME = "WebAssemblyModulesPlugin";

/**
 * @typedef {object} WebAssemblyModulesPluginOptions
 * @property {boolean} [mangleImports] mangle imports
 */

class WebAssemblyModulesPlugin {
	/**
	 * @param {WebAssemblyModulesPluginOptions} options options
	 */
	constructor(options) {
		this.options = options;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				compilation.dependencyFactories.set(
					WebAssemblyImportDependency,
					normalModuleFactory
				);

				compilation.dependencyFactories.set(
					WebAssemblyExportImportedDependency,
					normalModuleFactory
				);

				normalModuleFactory.hooks.createParser
					.for(WEBASSEMBLY_MODULE_TYPE_SYNC)
					.tap(PLUGIN_NAME, () => {
						const WebAssemblyParser = getWebAssemblyParser();

						return new WebAssemblyParser();
					});

				normalModuleFactory.hooks.createGenerator
					.for(WEBASSEMBLY_MODULE_TYPE_SYNC)
					.tap(PLUGIN_NAME, () => {
						const WebAssemblyJavascriptGenerator =
							getWebAssemblyJavascriptGenerator();
						const WebAssemblyGenerator = getWebAssemblyGenerator();

						return Generator.byType({
							javascript: new WebAssemblyJavascriptGenerator(),
							webassembly: new WebAssemblyGenerator(this.options)
						});
					});

				compilation.hooks.renderManifest.tap(PLUGIN_NAME, (result, options) => {
					const { chunkGraph } = compilation;
					const { chunk, outputOptions, codeGenerationResults } = options;

					for (const module of chunkGraph.getOrderedChunkModulesIterable(
						chunk,
						compareModulesByIdOrIdentifier(chunkGraph)
					)) {
						if (module.type === WEBASSEMBLY_MODULE_TYPE_SYNC) {
							const filenameTemplate =
								/** @type {NonNullable<OutputOptions["webassemblyModuleFilename"]>} */
								(outputOptions.webassemblyModuleFilename);

							result.push({
								render: () =>
									codeGenerationResults.getSource(
										module,
										chunk.runtime,
										"webassembly"
									),
								filenameTemplate,
								pathOptions: {
									module,
									runtime: chunk.runtime,
									chunkGraph
								},
								auxiliary: true,
								identifier: `webassemblyModule${chunkGraph.getModuleId(
									module
								)}`,
								hash: chunkGraph.getModuleHash(module, chunk.runtime)
							});
						}
					}

					return result;
				});

				compilation.hooks.afterChunks.tap(PLUGIN_NAME, () => {
					const chunkGraph = compilation.chunkGraph;
					const initialWasmModules = new Set();
					for (const chunk of compilation.chunks) {
						if (chunk.canBeInitial()) {
							for (const module of chunkGraph.getChunkModulesIterable(chunk)) {
								if (module.type === WEBASSEMBLY_MODULE_TYPE_SYNC) {
									initialWasmModules.add(module);
								}
							}
						}
					}
					for (const module of initialWasmModules) {
						compilation.errors.push(
							new WebAssemblyInInitialChunkError(
								module,
								compilation.moduleGraph,
								compilation.chunkGraph,
								compilation.requestShortener
							)
						);
					}
				});
			}
		);
	}
}

module.exports = WebAssemblyModulesPlugin;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { SyncWaterfallHook } = require("tapable");
const Compilation = require("../Compilation");
const Generator = require("../Generator");
const { tryRunOrWebpackError } = require("../HookWebpackError");
const { WEBASSEMBLY_MODULE_TYPE_ASYNC } = require("../ModuleTypeConstants");
const WebAssemblyImportDependency = require("../dependencies/WebAssemblyImportDependency");
const { compareModulesByIdOrIdentifier } = require("../util/comparators");
const memoize = require("../util/memoize");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").OutputNormalized} OutputOptions */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../CodeGenerationResults")} CodeGenerationResults */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../DependencyTemplates")} DependencyTemplates */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("../Template").RenderManifestEntry} RenderManifestEntry */
/** @typedef {import("../Template").RenderManifestOptions} RenderManifestOptions */
/** @typedef {import("../WebpackError")} WebpackError */

const getAsyncWebAssemblyGenerator = memoize(() =>
	require("./AsyncWebAssemblyGenerator")
);
const getAsyncWebAssemblyJavascriptGenerator = memoize(() =>
	require("./AsyncWebAssemblyJavascriptGenerator")
);
const getAsyncWebAssemblyParser = memoize(() =>
	require("./AsyncWebAssemblyParser")
);

/**
 * @typedef {object} WebAssemblyRenderContext
 * @property {Chunk} chunk the chunk
 * @property {DependencyTemplates} dependencyTemplates the dependency templates
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {ModuleGraph} moduleGraph the module graph
 * @property {ChunkGraph} chunkGraph the chunk graph
 * @property {CodeGenerationResults} codeGenerationResults results of code generation
 */

/**
 * @typedef {object} CompilationHooks
 * @property {SyncWaterfallHook<[Source, Module, WebAssemblyRenderContext]>} renderModuleContent
 */

/**
 * @typedef {object} AsyncWebAssemblyModulesPluginOptions
 * @property {boolean} [mangleImports] mangle imports
 */

/** @type {WeakMap<Compilation, CompilationHooks>} */
const compilationHooksMap = new WeakMap();

const PLUGIN_NAME = "AsyncWebAssemblyModulesPlugin";

class AsyncWebAssemblyModulesPlugin {
	/**
	 * @param {Compilation} compilation the compilation
	 * @returns {CompilationHooks} the attached hooks
	 */
	static getCompilationHooks(compilation) {
		if (!(compilation instanceof Compilation)) {
			throw new TypeError(
				"The 'compilation' argument must be an instance of Compilation"
			);
		}
		let hooks = compilationHooksMap.get(compilation);
		if (hooks === undefined) {
			hooks = {
				renderModuleContent: new SyncWaterfallHook([
					"source",
					"module",
					"renderContext"
				])
			};
			compilationHooksMap.set(compilation, hooks);
		}
		return hooks;
	}

	/**
	 * @param {AsyncWebAssemblyModulesPluginOptions} options options
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
				const hooks =
					AsyncWebAssemblyModulesPlugin.getCompilationHooks(compilation);
				compilation.dependencyFactories.set(
					WebAssemblyImportDependency,
					normalModuleFactory
				);

				normalModuleFactory.hooks.createParser
					.for(WEBASSEMBLY_MODULE_TYPE_ASYNC)
					.tap(PLUGIN_NAME, () => {
						const AsyncWebAssemblyParser = getAsyncWebAssemblyParser();

						return new AsyncWebAssemblyParser();
					});
				normalModuleFactory.hooks.createGenerator
					.for(WEBASSEMBLY_MODULE_TYPE_ASYNC)
					.tap(PLUGIN_NAME, () => {
						const AsyncWebAssemblyJavascriptGenerator =
							getAsyncWebAssemblyJavascriptGenerator();
						const AsyncWebAssemblyGenerator = getAsyncWebAssemblyGenerator();

						return Generator.byType({
							javascript: new AsyncWebAssemblyJavascriptGenerator(
								compilation.outputOptions.webassemblyModuleFilename
							),
							webassembly: new AsyncWebAssemblyGenerator(this.options)
						});
					});

				compilation.hooks.renderManifest.tap(
					"WebAssemblyModulesPlugin",
					(result, options) => {
						const { moduleGraph, chunkGraph, runtimeTemplate } = compilation;
						const {
							chunk,
							outputOptions,
							dependencyTemplates,
							codeGenerationResults
						} = options;

						for (const module of chunkGraph.getOrderedChunkModulesIterable(
							chunk,
							compareModulesByIdOrIdentifier(chunkGraph)
						)) {
							if (module.type === WEBASSEMBLY_MODULE_TYPE_ASYNC) {
								const filenameTemplate =
									/** @type {NonNullable<OutputOptions["webassemblyModuleFilename"]>} */
									(outputOptions.webassemblyModuleFilename);

								result.push({
									render: () =>
										this.renderModule(
											module,
											{
												chunk,
												dependencyTemplates,
												runtimeTemplate,
												moduleGraph,
												chunkGraph,
												codeGenerationResults
											},
											hooks
										),
									filenameTemplate,
									pathOptions: {
										module,
										runtime: chunk.runtime,
										chunkGraph
									},
									auxiliary: true,
									identifier: `webassemblyAsyncModule${chunkGraph.getModuleId(
										module
									)}`,
									hash: chunkGraph.getModuleHash(module, chunk.runtime)
								});
							}
						}

						return result;
					}
				);
			}
		);
	}

	/**
	 * @param {Module} module the rendered module
	 * @param {WebAssemblyRenderContext} renderContext options object
	 * @param {CompilationHooks} hooks hooks
	 * @returns {Source} the newly generated source from rendering
	 */
	renderModule(module, renderContext, hooks) {
		const { codeGenerationResults, chunk } = renderContext;
		try {
			const moduleSource = codeGenerationResults.getSource(
				module,
				chunk.runtime,
				"webassembly"
			);
			return tryRunOrWebpackError(
				() =>
					hooks.renderModuleContent.call(moduleSource, module, renderContext),
				"AsyncWebAssemblyModulesPlugin.getCompilationHooks().renderModuleContent"
			);
		} catch (err) {
			/** @type {WebpackError} */ (err).module = module;
			throw err;
		}
	}
}

module.exports = AsyncWebAssemblyModulesPlugin;

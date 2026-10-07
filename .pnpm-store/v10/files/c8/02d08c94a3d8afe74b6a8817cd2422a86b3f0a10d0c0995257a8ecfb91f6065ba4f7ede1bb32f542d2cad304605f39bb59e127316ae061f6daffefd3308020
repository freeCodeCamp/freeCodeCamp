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
const NormalModule = require("../NormalModule");
const WebAssemblyImportDependency = require("../dependencies/WebAssemblyImportDependency");
const { compareModulesByFullName } = require("../util/comparators");
const makeSerializable = require("../util/makeSerializable");
const memoize = require("../util/memoize");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../CodeGenerationResults")} CodeGenerationResults */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../DependencyTemplates")} DependencyTemplates */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../dependencies/ImportPhase").ImportPhaseName} ImportPhaseName */
/** @typedef {import("../NormalModule").NormalModuleCreateData} NormalModuleCreateData */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("../WebpackError")} WebpackError */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

const getAsyncWebAssemblyGenerator = memoize(() =>
	require("./AsyncWebAssemblyGenerator")
);
const getAsyncWebAssemblyJavascriptGenerator = memoize(() =>
	require("./AsyncWebAssemblyJavascriptGenerator")
);
const getAsyncWebAssemblyParser = memoize(() =>
	require("./AsyncWebAssemblyParser")
);

/** @typedef {NormalModule & { phase: ImportPhaseName | undefined }} AsyncWasmModuleClass */

class AsyncWasmModule extends NormalModule {
	/**
	 * @param {NormalModuleCreateData & { phase: ImportPhaseName | undefined }} options options object
	 */
	constructor(options) {
		super(options);
		this.phase = options.phase;
	}

	/**
	 * Returns the unique identifier used to reference this module.
	 * @returns {string} a unique identifier of the module
	 */
	identifier() {
		let str = super.identifier();

		if (this.phase) {
			str = `${str}|${this.phase}`;
		}

		return str;
	}

	/**
	 * Assuming this module is in the cache. Update the (cached) module with
	 * the fresh module from the factory. Usually updates internal references
	 * and properties.
	 * @param {Module} module fresh module
	 * @returns {void}
	 */
	updateCacheModule(module) {
		super.updateCacheModule(module);
		const m = /** @type {AsyncWasmModule} */ (module);
		this.phase = m.phase;
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.phase);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 * @returns {AsyncWasmModule} the deserialized object
	 */
	static deserialize(context) {
		const obj = new AsyncWasmModule({
			// will be deserialized by Module
			layer: /** @type {EXPECTED_ANY} */ (null),
			type: "",
			// will be filled by updateCacheModule
			resource: "",
			context: "",
			request: /** @type {EXPECTED_ANY} */ (null),
			userRequest: /** @type {EXPECTED_ANY} */ (null),
			rawRequest: /** @type {EXPECTED_ANY} */ (null),
			loaders: /** @type {EXPECTED_ANY} */ (null),
			matchResource: /** @type {EXPECTED_ANY} */ (null),
			parser: /** @type {EXPECTED_ANY} */ (null),
			parserOptions: /** @type {EXPECTED_ANY} */ (null),
			generator: /** @type {EXPECTED_ANY} */ (null),
			generatorOptions: /** @type {EXPECTED_ANY} */ (null),
			resolveOptions: /** @type {EXPECTED_ANY} */ (null),
			extractSourceMap: /** @type {EXPECTED_ANY} */ (null),
			phase: /** @type {EXPECTED_ANY} */ (null)
		});
		obj.deserialize(context);
		return obj;
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.phase = read();
		super.deserialize(context);
	}
}

makeSerializable(AsyncWasmModule, "webpack/lib/wasm-async/AsyncWasmModule");

/**
 * Defines the web assembly render context type used by this module.
 * @typedef {object} WebAssemblyRenderContext
 * @property {Chunk} chunk the chunk
 * @property {DependencyTemplates} dependencyTemplates the dependency templates
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {ModuleGraph} moduleGraph the module graph
 * @property {ChunkGraph} chunkGraph the chunk graph
 * @property {CodeGenerationResults} codeGenerationResults results of code generation
 */

/**
 * Defines the compilation hooks type used by this module.
 * @typedef {object} CompilationHooks
 * @property {SyncWaterfallHook<[Source, Module, WebAssemblyRenderContext]>} renderModuleContent
 */

/**
 * Defines the async web assembly modules plugin options type used by this module.
 * @typedef {object} AsyncWebAssemblyModulesPluginOptions
 * @property {boolean=} mangleImports mangle imports
 */

/** @type {WeakMap<Compilation, CompilationHooks>} */
const compilationHooksMap = new WeakMap();

const PLUGIN_NAME = "AsyncWebAssemblyModulesPlugin";

class AsyncWebAssemblyModulesPlugin {
	/**
	 * Returns the attached hooks.
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
	 * Creates an instance of AsyncWebAssemblyModulesPlugin.
	 * @param {AsyncWebAssemblyModulesPluginOptions} options options
	 */
	constructor(options) {
		/** @type {AsyncWebAssemblyModulesPluginOptions} */
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
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

				normalModuleFactory.hooks.createModuleClass
					.for(WEBASSEMBLY_MODULE_TYPE_ASYNC)
					.tap(
						PLUGIN_NAME,
						(createData, resolveData) =>
							new AsyncWasmModule({
								.../** @type {NormalModuleCreateData & { type: string }} */
								(createData),
								phase: resolveData.phase
							})
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
							javascript: new AsyncWebAssemblyJavascriptGenerator(),
							webassembly: new AsyncWebAssemblyGenerator(this.options)
						});
					});

				compilation.hooks.renderManifest.tap(PLUGIN_NAME, (result, options) => {
					const { moduleGraph, chunkGraph, runtimeTemplate } = compilation;
					const {
						chunk,
						outputOptions,
						dependencyTemplates,
						codeGenerationResults
					} = options;

					for (const module of chunkGraph.getOrderedChunkModulesIterable(
						chunk,
						compareModulesByFullName(compiler)
					)) {
						if (module.type === WEBASSEMBLY_MODULE_TYPE_ASYNC) {
							const filenameTemplate = outputOptions.webassemblyModuleFilename;

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
				});
			}
		);
	}

	/**
	 * Renders the newly generated source from rendering.
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

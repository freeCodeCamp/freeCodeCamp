/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const util = require("util");
const memoize = require("./util/memoize");

/** @typedef {import("tapable").Tap} Tap */
/** @typedef {import("../declarations/WebpackOptions").Output} OutputOptions */
/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./Compilation").ChunkHashContext} ChunkHashContext */
/** @typedef {import("./Compilation").Hash} Hash */
/** @typedef {import("./Compilation").RenderManifestEntry} RenderManifestEntry */
/** @typedef {import("./Compilation").RenderManifestOptions} RenderManifestOptions */
/** @typedef {import("./Compilation").Source} Source */
/** @typedef {import("./ModuleTemplate")} ModuleTemplate */
/** @typedef {import("./javascript/JavascriptModulesPlugin").RenderContext} RenderContext */
/**
 * @template T
 * @typedef {import("tapable").IfSet<T>} IfSet
 */

const getJavascriptModulesPlugin = memoize(() =>
	require("./javascript/JavascriptModulesPlugin")
);

// TODO webpack 6 remove this class
class ChunkTemplate {
	/**
	 * @param {OutputOptions} outputOptions output options
	 * @param {Compilation} compilation the compilation
	 */
	constructor(outputOptions, compilation) {
		this._outputOptions = outputOptions || {};
		this.hooks = Object.freeze({
			renderManifest: {
				tap: util.deprecate(
					/**
					 * @template AdditionalOptions
					 * @param {string | Tap & IfSet<AdditionalOptions>} options options
					 * @param {function(RenderManifestEntry[], RenderManifestOptions): RenderManifestEntry[]} fn function
					 */
					(options, fn) => {
						compilation.hooks.renderManifest.tap(
							options,
							(entries, options) => {
								if (options.chunk.hasRuntime()) return entries;
								return fn(entries, options);
							}
						);
					},
					"ChunkTemplate.hooks.renderManifest is deprecated (use Compilation.hooks.renderManifest instead)",
					"DEP_WEBPACK_CHUNK_TEMPLATE_RENDER_MANIFEST"
				)
			},
			modules: {
				tap: util.deprecate(
					/**
					 * @template AdditionalOptions
					 * @param {string | Tap & IfSet<AdditionalOptions>} options options
					 * @param {function(Source, ModuleTemplate, RenderContext): Source} fn function
					 */
					(options, fn) => {
						getJavascriptModulesPlugin()
							.getCompilationHooks(compilation)
							.renderChunk.tap(options, (source, renderContext) =>
								fn(
									source,
									compilation.moduleTemplates.javascript,
									renderContext
								)
							);
					},
					"ChunkTemplate.hooks.modules is deprecated (use JavascriptModulesPlugin.getCompilationHooks().renderChunk instead)",
					"DEP_WEBPACK_CHUNK_TEMPLATE_MODULES"
				)
			},
			render: {
				tap: util.deprecate(
					/**
					 * @template AdditionalOptions
					 * @param {string | Tap & IfSet<AdditionalOptions>} options options
					 * @param {function(Source, ModuleTemplate, RenderContext): Source} fn function
					 */
					(options, fn) => {
						getJavascriptModulesPlugin()
							.getCompilationHooks(compilation)
							.renderChunk.tap(options, (source, renderContext) =>
								fn(
									source,
									compilation.moduleTemplates.javascript,
									renderContext
								)
							);
					},
					"ChunkTemplate.hooks.render is deprecated (use JavascriptModulesPlugin.getCompilationHooks().renderChunk instead)",
					"DEP_WEBPACK_CHUNK_TEMPLATE_RENDER"
				)
			},
			renderWithEntry: {
				tap: util.deprecate(
					/**
					 * @template AdditionalOptions
					 * @param {string | Tap & IfSet<AdditionalOptions>} options options
					 * @param {function(Source, Chunk): Source} fn function
					 */
					(options, fn) => {
						getJavascriptModulesPlugin()
							.getCompilationHooks(compilation)
							.render.tap(options, (source, renderContext) => {
								if (
									renderContext.chunkGraph.getNumberOfEntryModules(
										renderContext.chunk
									) === 0 ||
									renderContext.chunk.hasRuntime()
								) {
									return source;
								}
								return fn(source, renderContext.chunk);
							});
					},
					"ChunkTemplate.hooks.renderWithEntry is deprecated (use JavascriptModulesPlugin.getCompilationHooks().render instead)",
					"DEP_WEBPACK_CHUNK_TEMPLATE_RENDER_WITH_ENTRY"
				)
			},
			hash: {
				tap: util.deprecate(
					/**
					 * @template AdditionalOptions
					 * @param {string | Tap & IfSet<AdditionalOptions>} options options
					 * @param {function(Hash): void} fn function
					 */
					(options, fn) => {
						compilation.hooks.fullHash.tap(options, fn);
					},
					"ChunkTemplate.hooks.hash is deprecated (use Compilation.hooks.fullHash instead)",
					"DEP_WEBPACK_CHUNK_TEMPLATE_HASH"
				)
			},
			hashForChunk: {
				tap: util.deprecate(
					/**
					 * @template AdditionalOptions
					 * @param {string | Tap & IfSet<AdditionalOptions>} options options
					 * @param {function(Hash, Chunk, ChunkHashContext): void} fn function
					 */
					(options, fn) => {
						getJavascriptModulesPlugin()
							.getCompilationHooks(compilation)
							.chunkHash.tap(options, (chunk, hash, context) => {
								if (chunk.hasRuntime()) return;
								fn(hash, chunk, context);
							});
					},
					"ChunkTemplate.hooks.hashForChunk is deprecated (use JavascriptModulesPlugin.getCompilationHooks().chunkHash instead)",
					"DEP_WEBPACK_CHUNK_TEMPLATE_HASH_FOR_CHUNK"
				)
			}
		});
	}
}

Object.defineProperty(ChunkTemplate.prototype, "outputOptions", {
	get: util.deprecate(
		/**
		 * @this {ChunkTemplate}
		 * @returns {OutputOptions} output options
		 */
		function () {
			return this._outputOptions;
		},
		"ChunkTemplate.outputOptions is deprecated (use Compilation.outputOptions instead)",
		"DEP_WEBPACK_CHUNK_TEMPLATE_OUTPUT_OPTIONS"
	)
});

module.exports = ChunkTemplate;

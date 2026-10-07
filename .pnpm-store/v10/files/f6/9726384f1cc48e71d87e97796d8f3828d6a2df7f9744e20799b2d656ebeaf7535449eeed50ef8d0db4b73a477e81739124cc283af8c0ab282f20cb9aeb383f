/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const JavascriptModulesPlugin = require("../javascript/JavascriptModulesPlugin");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").LibraryOptions} LibraryOptions */
/** @typedef {import("../../declarations/WebpackOptions").LibraryType} LibraryType */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compilation").ChunkHashContext} ChunkHashContext */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../javascript/JavascriptModulesPlugin").RenderContext} RenderContext */
/** @typedef {import("../javascript/JavascriptModulesPlugin").StartupRenderContext} StartupRenderContext */
/** @typedef {import("../util/Hash")} Hash */

const COMMON_LIBRARY_NAME_MESSAGE =
	"Common configuration options that specific library names are 'output.library[.name]', 'entry.xyz.library[.name]', 'ModuleFederationPlugin.name' and 'ModuleFederationPlugin.library[.name]'.";

/**
 * @template T
 * @typedef {object} LibraryContext
 * @property {Compilation} compilation
 * @property {ChunkGraph} chunkGraph
 * @property {T} options
 */

/**
 * @template T
 */
class AbstractLibraryPlugin {
	/**
	 * @param {object} options options
	 * @param {string} options.pluginName name of the plugin
	 * @param {LibraryType} options.type used library type
	 */
	constructor({ pluginName, type }) {
		this._pluginName = pluginName;
		this._type = type;
		this._parseCache = new WeakMap();
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const { _pluginName } = this;
		compiler.hooks.thisCompilation.tap(_pluginName, compilation => {
			compilation.hooks.finishModules.tap(
				{ name: _pluginName, stage: 10 },
				() => {
					for (const [
						name,
						{
							dependencies: deps,
							options: { library }
						}
					] of compilation.entries) {
						const options = this._parseOptionsCached(
							library !== undefined
								? library
								: compilation.outputOptions.library
						);
						if (options !== false) {
							const dep = deps[deps.length - 1];
							if (dep) {
								const module = compilation.moduleGraph.getModule(dep);
								if (module) {
									this.finishEntryModule(module, name, {
										options,
										compilation,
										chunkGraph: compilation.chunkGraph
									});
								}
							}
						}
					}
				}
			);

			/**
			 * @param {Chunk} chunk chunk
			 * @returns {TODO} options for the chunk
			 */
			const getOptionsForChunk = chunk => {
				if (compilation.chunkGraph.getNumberOfEntryModules(chunk) === 0)
					return false;
				const options = chunk.getEntryOptions();
				const library = options && options.library;
				return this._parseOptionsCached(
					library !== undefined ? library : compilation.outputOptions.library
				);
			};

			if (
				this.render !== AbstractLibraryPlugin.prototype.render ||
				this.runtimeRequirements !==
					AbstractLibraryPlugin.prototype.runtimeRequirements
			) {
				compilation.hooks.additionalChunkRuntimeRequirements.tap(
					_pluginName,
					(chunk, set, { chunkGraph }) => {
						const options = getOptionsForChunk(chunk);
						if (options !== false) {
							this.runtimeRequirements(chunk, set, {
								options,
								compilation,
								chunkGraph
							});
						}
					}
				);
			}

			const hooks = JavascriptModulesPlugin.getCompilationHooks(compilation);

			if (this.render !== AbstractLibraryPlugin.prototype.render) {
				hooks.render.tap(_pluginName, (source, renderContext) => {
					const options = getOptionsForChunk(renderContext.chunk);
					if (options === false) return source;
					return this.render(source, renderContext, {
						options,
						compilation,
						chunkGraph: compilation.chunkGraph
					});
				});
			}

			if (
				this.embedInRuntimeBailout !==
				AbstractLibraryPlugin.prototype.embedInRuntimeBailout
			) {
				hooks.embedInRuntimeBailout.tap(
					_pluginName,
					(module, renderContext) => {
						const options = getOptionsForChunk(renderContext.chunk);
						if (options === false) return;
						return this.embedInRuntimeBailout(module, renderContext, {
							options,
							compilation,
							chunkGraph: compilation.chunkGraph
						});
					}
				);
			}

			if (
				this.strictRuntimeBailout !==
				AbstractLibraryPlugin.prototype.strictRuntimeBailout
			) {
				hooks.strictRuntimeBailout.tap(_pluginName, renderContext => {
					const options = getOptionsForChunk(renderContext.chunk);
					if (options === false) return;
					return this.strictRuntimeBailout(renderContext, {
						options,
						compilation,
						chunkGraph: compilation.chunkGraph
					});
				});
			}

			if (
				this.renderStartup !== AbstractLibraryPlugin.prototype.renderStartup
			) {
				hooks.renderStartup.tap(
					_pluginName,
					(source, module, renderContext) => {
						const options = getOptionsForChunk(renderContext.chunk);
						if (options === false) return source;
						return this.renderStartup(source, module, renderContext, {
							options,
							compilation,
							chunkGraph: compilation.chunkGraph
						});
					}
				);
			}

			hooks.chunkHash.tap(_pluginName, (chunk, hash, context) => {
				const options = getOptionsForChunk(chunk);
				if (options === false) return;
				this.chunkHash(chunk, hash, context, {
					options,
					compilation,
					chunkGraph: compilation.chunkGraph
				});
			});
		});
	}

	/**
	 * @param {LibraryOptions=} library normalized library option
	 * @returns {T | false} preprocess as needed by overriding
	 */
	_parseOptionsCached(library) {
		if (!library) return false;
		if (library.type !== this._type) return false;
		const cacheEntry = this._parseCache.get(library);
		if (cacheEntry !== undefined) return cacheEntry;
		const result = this.parseOptions(library);
		this._parseCache.set(library, result);
		return result;
	}

	/* istanbul ignore next */
	/**
	 * @abstract
	 * @param {LibraryOptions} library normalized library option
	 * @returns {T | false} preprocess as needed by overriding
	 */
	parseOptions(library) {
		const AbstractMethodError = require("../AbstractMethodError");
		throw new AbstractMethodError();
	}

	/**
	 * @param {Module} module the exporting entry module
	 * @param {string} entryName the name of the entrypoint
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {void}
	 */
	finishEntryModule(module, entryName, libraryContext) {}

	/**
	 * @param {Module} module the exporting entry module
	 * @param {RenderContext} renderContext render context
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {string | undefined} bailout reason
	 */
	embedInRuntimeBailout(module, renderContext, libraryContext) {
		return undefined;
	}

	/**
	 * @param {RenderContext} renderContext render context
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {string | undefined} bailout reason
	 */
	strictRuntimeBailout(renderContext, libraryContext) {
		return undefined;
	}

	/**
	 * @param {Chunk} chunk the chunk
	 * @param {Set<string>} set runtime requirements
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {void}
	 */
	runtimeRequirements(chunk, set, libraryContext) {
		if (this.render !== AbstractLibraryPlugin.prototype.render)
			set.add(RuntimeGlobals.returnExportsFromRuntime);
	}

	/**
	 * @param {Source} source source
	 * @param {RenderContext} renderContext render context
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {Source} source with library export
	 */
	render(source, renderContext, libraryContext) {
		return source;
	}

	/**
	 * @param {Source} source source
	 * @param {Module} module module
	 * @param {StartupRenderContext} renderContext render context
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {Source} source with library export
	 */
	renderStartup(source, module, renderContext, libraryContext) {
		return source;
	}

	/**
	 * @param {Chunk} chunk the chunk
	 * @param {Hash} hash hash
	 * @param {ChunkHashContext} chunkHashContext chunk hash context
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {void}
	 */
	chunkHash(chunk, hash, chunkHashContext, libraryContext) {
		const options = this._parseOptionsCached(
			libraryContext.compilation.outputOptions.library
		);
		hash.update(this._pluginName);
		hash.update(JSON.stringify(options));
	}
}

AbstractLibraryPlugin.COMMON_LIBRARY_NAME_MESSAGE = COMMON_LIBRARY_NAME_MESSAGE;
module.exports = AbstractLibraryPlugin;

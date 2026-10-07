/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { ConcatSource } = require("webpack-sources");
const ExternalModule = require("../ExternalModule");
const Template = require("../Template");
const AbstractLibraryPlugin = require("./AbstractLibraryPlugin");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").LibraryOptions} LibraryOptions */
/** @typedef {import("../../declarations/WebpackOptions").LibraryType} LibraryType */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compilation").ChunkHashContext} ChunkHashContext */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../javascript/JavascriptModulesPlugin").RenderContext} RenderContext */
/** @typedef {import("../util/Hash")} Hash */
/** @template T @typedef {import("./AbstractLibraryPlugin").LibraryContext<T>} LibraryContext<T> */

/**
 * @typedef {object} AmdLibraryPluginOptions
 * @property {LibraryType} type
 * @property {boolean=} requireAsWrapper
 */

/**
 * @typedef {object} AmdLibraryPluginParsed
 * @property {string} name
 * @property {string} amdContainer
 */

/**
 * @typedef {AmdLibraryPluginParsed} T
 * @extends {AbstractLibraryPlugin<AmdLibraryPluginParsed>}
 */
class AmdLibraryPlugin extends AbstractLibraryPlugin {
	/**
	 * @param {AmdLibraryPluginOptions} options the plugin options
	 */
	constructor(options) {
		super({
			pluginName: "AmdLibraryPlugin",
			type: options.type
		});
		this.requireAsWrapper = options.requireAsWrapper;
	}

	/**
	 * @param {LibraryOptions} library normalized library option
	 * @returns {T | false} preprocess as needed by overriding
	 */
	parseOptions(library) {
		const { name, amdContainer } = library;
		if (this.requireAsWrapper) {
			if (name) {
				throw new Error(
					`AMD library name must be unset. ${AbstractLibraryPlugin.COMMON_LIBRARY_NAME_MESSAGE}`
				);
			}
		} else if (name && typeof name !== "string") {
			throw new Error(
				`AMD library name must be a simple string or unset. ${AbstractLibraryPlugin.COMMON_LIBRARY_NAME_MESSAGE}`
			);
		}
		const _name = /** @type {string} */ (name);
		const _amdContainer = /** @type {string} */ (amdContainer);
		return { name: _name, amdContainer: _amdContainer };
	}

	/**
	 * @param {Source} source source
	 * @param {RenderContext} renderContext render context
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {Source} source with library export
	 */
	render(
		source,
		{ chunkGraph, chunk, runtimeTemplate },
		{ options, compilation }
	) {
		const modern = runtimeTemplate.supportsArrowFunction();
		const modules = chunkGraph
			.getChunkModules(chunk)
			.filter(
				m =>
					m instanceof ExternalModule &&
					(m.externalType === "amd" || m.externalType === "amd-require")
			);
		const externals = /** @type {ExternalModule[]} */ (modules);
		const externalsDepsArray = JSON.stringify(
			externals.map(m =>
				typeof m.request === "object" && !Array.isArray(m.request)
					? m.request.amd
					: m.request
			)
		);
		const externalsArguments = externals
			.map(
				m =>
					`__WEBPACK_EXTERNAL_MODULE_${Template.toIdentifier(
						`${chunkGraph.getModuleId(m)}`
					)}__`
			)
			.join(", ");

		const iife = runtimeTemplate.isIIFE();
		const fnStart =
			(modern
				? `(${externalsArguments}) => {`
				: `function(${externalsArguments}) {`) +
			(iife || !chunk.hasRuntime() ? " return " : "\n");
		const fnEnd = iife ? ";\n}" : "\n}";

		let amdContainerPrefix = "";
		if (options.amdContainer) {
			amdContainerPrefix = `${options.amdContainer}.`;
		}

		if (this.requireAsWrapper) {
			return new ConcatSource(
				`${amdContainerPrefix}require(${externalsDepsArray}, ${fnStart}`,
				source,
				`${fnEnd});`
			);
		} else if (options.name) {
			const name = compilation.getPath(options.name, {
				chunk
			});

			return new ConcatSource(
				`${amdContainerPrefix}define(${JSON.stringify(
					name
				)}, ${externalsDepsArray}, ${fnStart}`,
				source,
				`${fnEnd});`
			);
		} else if (externalsArguments) {
			return new ConcatSource(
				`${amdContainerPrefix}define(${externalsDepsArray}, ${fnStart}`,
				source,
				`${fnEnd});`
			);
		}
		return new ConcatSource(
			`${amdContainerPrefix}define(${fnStart}`,
			source,
			`${fnEnd});`
		);
	}

	/**
	 * @param {Chunk} chunk the chunk
	 * @param {Hash} hash hash
	 * @param {ChunkHashContext} chunkHashContext chunk hash context
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {void}
	 */
	chunkHash(chunk, hash, chunkHashContext, { options, compilation }) {
		hash.update("AmdLibraryPlugin");
		if (this.requireAsWrapper) {
			hash.update("requireAsWrapper");
		} else if (options.name) {
			hash.update("named");
			const name = compilation.getPath(options.name, {
				chunk
			});
			hash.update(name);
		} else if (options.amdContainer) {
			hash.update("amdContainer");
			hash.update(options.amdContainer);
		}
	}
}

module.exports = AmdLibraryPlugin;

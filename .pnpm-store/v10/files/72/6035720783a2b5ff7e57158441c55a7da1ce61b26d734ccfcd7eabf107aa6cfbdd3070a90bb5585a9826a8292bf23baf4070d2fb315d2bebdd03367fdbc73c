/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { ConcatSource } = require("webpack-sources");
const AbstractLibraryPlugin = require("./AbstractLibraryPlugin");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../../declarations/WebpackOptions").LibraryOptions} LibraryOptions */
/** @typedef {import("../../declarations/WebpackOptions").LibraryType} LibraryType */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compilation").ChunkHashContext} ChunkHashContext */
/** @typedef {import("../javascript/JavascriptModulesPlugin").RenderContext} RenderContext */
/** @typedef {import("../util/Hash")} Hash */

/**
 * Defines the shared type used by this module.
 * @template T
 * @typedef {import("./AbstractLibraryPlugin").LibraryContext<T>} LibraryContext<T>
 */

/**
 * Defines the jsonp library plugin options type used by this module.
 * @typedef {object} JsonpLibraryPluginOptions
 * @property {LibraryType} type
 */

/**
 * Defines the jsonp library plugin parsed type used by this module.
 * @typedef {object} JsonpLibraryPluginParsed
 * @property {string} name
 */

/**
 * Represents the jsonp library plugin runtime component.
 * @typedef {JsonpLibraryPluginParsed} T
 * @extends {AbstractLibraryPlugin<JsonpLibraryPluginParsed>}
 */
class JsonpLibraryPlugin extends AbstractLibraryPlugin {
	/**
	 * Creates an instance of JsonpLibraryPlugin.
	 * @param {JsonpLibraryPluginOptions} options the plugin options
	 */
	constructor(options) {
		super({
			pluginName: "JsonpLibraryPlugin",
			type: options.type
		});
	}

	/**
	 * Returns preprocess as needed by overriding.
	 * @param {LibraryOptions} library normalized library option
	 * @returns {T} preprocess as needed by overriding
	 */
	parseOptions(library) {
		const { name } = library;
		if (typeof name !== "string") {
			throw new Error(
				`Jsonp library name must be a simple string. ${AbstractLibraryPlugin.COMMON_LIBRARY_NAME_MESSAGE}`
			);
		}
		const _name = /** @type {string} */ (name);
		return {
			name: _name
		};
	}

	/**
	 * Returns source with library export.
	 * @param {Source} source source
	 * @param {RenderContext} renderContext render context
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {Source} source with library export
	 */
	render(source, { chunk }, { options, compilation }) {
		const name = compilation.getPath(options.name, {
			chunk
		});
		return new ConcatSource(`${name}(`, source, ")");
	}

	/**
	 * Processes the provided chunk.
	 * @param {Chunk} chunk the chunk
	 * @param {Hash} hash hash
	 * @param {ChunkHashContext} chunkHashContext chunk hash context
	 * @param {LibraryContext<T>} libraryContext context
	 * @returns {void}
	 */
	chunkHash(chunk, hash, chunkHashContext, { options, compilation }) {
		hash.update("JsonpLibraryPlugin");
		hash.update(compilation.getPath(options.name, { chunk }));
	}
}

module.exports = JsonpLibraryPlugin;

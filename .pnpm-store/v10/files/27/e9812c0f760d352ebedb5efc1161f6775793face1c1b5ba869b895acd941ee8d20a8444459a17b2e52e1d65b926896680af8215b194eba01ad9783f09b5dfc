/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { compareChunksNatural } = require("../util/comparators");
const {
	assignAscendingChunkIds,
	assignNames,
	getLongChunkName,
	getShortChunkName,
	getUsedChunkIds
} = require("./IdHelpers");

/** @typedef {import("../Compiler")} Compiler */

/**
 * Defines the named chunk ids plugin options type used by this module.
 * @typedef {object} NamedChunkIdsPluginOptions
 * @property {string=} context context
 * @property {string=} delimiter delimiter
 */

const PLUGIN_NAME = "NamedChunkIdsPlugin";

class NamedChunkIdsPlugin {
	/**
	 * Creates an instance of NamedChunkIdsPlugin.
	 * @param {NamedChunkIdsPluginOptions=} options options
	 */
	constructor(options = {}) {
		/** @type {NamedChunkIdsPluginOptions} */
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			const hashFunction = compilation.outputOptions.hashFunction;
			compilation.hooks.chunkIds.tap(PLUGIN_NAME, (chunks) => {
				const chunkGraph = compilation.chunkGraph;
				const context = this.options.context
					? this.options.context
					: compiler.context;
				const delimiter = this.options.delimiter || "-";

				const unnamedChunks = assignNames(
					[...chunks].filter((chunk) => {
						if (chunk.name) {
							chunk.id = chunk.name;
							chunk.ids = [chunk.name];
						}
						return chunk.id === null;
					}),
					(chunk) =>
						getShortChunkName(
							chunk,
							chunkGraph,
							context,
							delimiter,
							hashFunction,
							compiler.root
						),
					(chunk) =>
						getLongChunkName(
							chunk,
							chunkGraph,
							context,
							delimiter,
							hashFunction,
							compiler.root
						),
					compareChunksNatural(chunkGraph),
					getUsedChunkIds(compilation),
					(chunk, name) => {
						chunk.id = name;
						chunk.ids = [name];
					}
				);
				if (unnamedChunks.length > 0) {
					assignAscendingChunkIds(unnamedChunks, compilation);
				}
			});
		});
	}
}

module.exports = NamedChunkIdsPlugin;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { compareChunksNatural } = require("../util/comparators");
const { assignAscendingChunkIds } = require("./IdHelpers");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

const PLUGIN_NAME = "NaturalChunkIdsPlugin";

class NaturalChunkIdsPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			compilation.hooks.chunkIds.tap(PLUGIN_NAME, (chunks) => {
				const chunkGraph = compilation.chunkGraph;
				const compareNatural = compareChunksNatural(chunkGraph);
				/** @type {Chunk[]} */
				const chunksInNaturalOrder = [...chunks].sort(compareNatural);
				assignAscendingChunkIds(chunksInNaturalOrder, compilation);
			});
		});
	}
}

module.exports = NaturalChunkIdsPlugin;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { compareChunksNatural } = require("../util/comparators");
const { assignAscendingChunkIds } = require("./IdHelpers");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */

class NaturalChunkIdsPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap("NaturalChunkIdsPlugin", compilation => {
			compilation.hooks.chunkIds.tap("NaturalChunkIdsPlugin", chunks => {
				const chunkGraph = compilation.chunkGraph;
				const compareNatural = compareChunksNatural(chunkGraph);
				const chunksInNaturalOrder = Array.from(chunks).sort(compareNatural);
				assignAscendingChunkIds(chunksInNaturalOrder, compilation);
			});
		});
	}
}

module.exports = NaturalChunkIdsPlugin;

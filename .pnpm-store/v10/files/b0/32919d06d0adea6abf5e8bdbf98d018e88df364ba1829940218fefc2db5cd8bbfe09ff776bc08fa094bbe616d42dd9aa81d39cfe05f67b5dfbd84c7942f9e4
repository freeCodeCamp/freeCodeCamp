/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");

/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Chunk").ChunkChildIdsByOrdersMap} ChunkChildIdsByOrdersMap */

class ChunkPrefetchTriggerRuntimeModule extends RuntimeModule {
	/**
	 * @param {ChunkChildIdsByOrdersMap} chunkMap map from chunk to
	 */
	constructor(chunkMap) {
		super("chunk prefetch trigger", RuntimeModule.STAGE_TRIGGER);
		/** @type {ChunkChildIdsByOrdersMap} */
		this.chunkMap = chunkMap;
	}

	/**
	 * Generates runtime code for this runtime module.
	 * @returns {string | null} runtime code
	 */
	generate() {
		const { chunkMap } = this;
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate } = compilation;
		const body = [
			"var chunks = chunkToChildrenMap[chunkId];",
			`Array.isArray(chunks) && chunks.map(${RuntimeGlobals.prefetchChunk});`
		];
		return Template.asString([
			Template.asString([
				`var chunkToChildrenMap = ${JSON.stringify(chunkMap, null, "\t")};`,
				`${
					RuntimeGlobals.ensureChunkHandlers
				}.prefetch = ${runtimeTemplate.expressionFunction(
					`Promise.all(promises).then(${runtimeTemplate.basicFunction(
						"",
						body
					)})`,
					"chunkId, promises"
				)};`
			])
		]);
	}
}

module.exports = ChunkPrefetchTriggerRuntimeModule;

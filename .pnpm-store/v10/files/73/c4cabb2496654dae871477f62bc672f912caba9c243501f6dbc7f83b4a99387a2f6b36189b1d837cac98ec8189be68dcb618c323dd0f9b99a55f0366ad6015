/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");

/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */

class ChunkPreloadTriggerRuntimeModule extends RuntimeModule {
	/**
	 * @param {Record<string|number, (string|number)[]>} chunkMap map from chunk to chunks
	 */
	constructor(chunkMap) {
		super("chunk preload trigger", RuntimeModule.STAGE_TRIGGER);
		this.chunkMap = chunkMap;
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const { chunkMap } = this;
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate } = compilation;
		const body = [
			"var chunks = chunkToChildrenMap[chunkId];",
			`Array.isArray(chunks) && chunks.map(${RuntimeGlobals.preloadChunk});`
		];
		return Template.asString([
			Template.asString([
				`var chunkToChildrenMap = ${JSON.stringify(chunkMap, null, "\t")};`,
				`${
					RuntimeGlobals.ensureChunkHandlers
				}.preload = ${runtimeTemplate.basicFunction("chunkId", body)};`
			])
		]);
	}
}

module.exports = ChunkPreloadTriggerRuntimeModule;

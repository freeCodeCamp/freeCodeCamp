/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */

class ChunkPrefetchStartupRuntimeModule extends RuntimeModule {
	/**
	 * @param {{ onChunks: Chunk[], chunks: Set<Chunk> }[]} startupChunks chunk ids to trigger when chunks are loaded
	 */
	constructor(startupChunks) {
		super("startup prefetch", RuntimeModule.STAGE_TRIGGER);
		this.startupChunks = startupChunks;
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const { startupChunks } = this;
		const compilation = /** @type {Compilation} */ (this.compilation);
		const chunk = /** @type {Chunk} */ (this.chunk);
		const { runtimeTemplate } = compilation;
		return Template.asString(
			startupChunks.map(
				({ onChunks, chunks }) =>
					`${RuntimeGlobals.onChunksLoaded}(0, ${JSON.stringify(
						// This need to include itself to delay execution after this chunk has been fully loaded
						onChunks.filter(c => c === chunk).map(c => c.id)
					)}, ${runtimeTemplate.basicFunction(
						"",
						chunks.size < 3
							? Array.from(
									chunks,
									c =>
										`${RuntimeGlobals.prefetchChunk}(${JSON.stringify(c.id)});`
								)
							: `${JSON.stringify(Array.from(chunks, c => c.id))}.map(${
									RuntimeGlobals.prefetchChunk
								});`
					)}, 5);`
			)
		);
	}
}

module.exports = ChunkPrefetchStartupRuntimeModule;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Compilation")} Compilation */

class StartupChunkDependenciesRuntimeModule extends RuntimeModule {
	/**
	 * @param {boolean} asyncChunkLoading use async chunk loading
	 */
	constructor(asyncChunkLoading) {
		super("startup chunk dependencies", RuntimeModule.STAGE_TRIGGER);
		this.asyncChunkLoading = asyncChunkLoading;
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const chunkGraph = /** @type {ChunkGraph} */ (this.chunkGraph);
		const chunk = /** @type {Chunk} */ (this.chunk);
		const chunkIds = Array.from(
			chunkGraph.getChunkEntryDependentChunksIterable(chunk)
		).map(chunk => chunk.id);
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate } = compilation;
		return Template.asString([
			`var next = ${RuntimeGlobals.startup};`,
			`${RuntimeGlobals.startup} = ${runtimeTemplate.basicFunction(
				"",
				!this.asyncChunkLoading
					? chunkIds
							.map(
								id => `${RuntimeGlobals.ensureChunk}(${JSON.stringify(id)});`
							)
							.concat("return next();")
					: chunkIds.length === 1
						? `return ${RuntimeGlobals.ensureChunk}(${JSON.stringify(
								chunkIds[0]
							)}).then(next);`
						: chunkIds.length > 2
							? [
									// using map is shorter for 3 or more chunks
									`return Promise.all(${JSON.stringify(chunkIds)}.map(${
										RuntimeGlobals.ensureChunk
									}, ${RuntimeGlobals.require})).then(next);`
								]
							: [
									// calling ensureChunk directly is shorter for 0 - 2 chunks
									"return Promise.all([",
									Template.indent(
										chunkIds
											.map(
												id =>
													`${RuntimeGlobals.ensureChunk}(${JSON.stringify(id)})`
											)
											.join(",\n")
									),
									"]).then(next);"
								]
			)};`
		]);
	}
}

module.exports = StartupChunkDependenciesRuntimeModule;

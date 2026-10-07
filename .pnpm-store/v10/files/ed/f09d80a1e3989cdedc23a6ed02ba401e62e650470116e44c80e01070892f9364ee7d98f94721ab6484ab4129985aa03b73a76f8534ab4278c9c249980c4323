/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Natsu @xiaoxiaojx
*/

"use strict";

const { updateHashForEntryStartup } = require("./StartupHelpers");

/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Entrypoint")} Entrypoint */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../Compilation").ChunkHashContext} ChunkHashContext */

/**
 * Returns } Object containing chunk entries and runtime chunk.
 * @param {Chunk} chunk The chunk to get information for
 * @param {ChunkGraph} chunkGraph The chunk graph containing the chunk
 * @returns {{ entries: [Module, Entrypoint | undefined][], runtimeChunk: Chunk | null }} Object containing chunk entries and runtime chunk
 */
function getChunkInfo(chunk, chunkGraph) {
	const entries = [
		...chunkGraph.getChunkEntryModulesWithChunkGroupIterable(chunk)
	];
	const runtimeChunk =
		entries.length > 0
			? /** @type {Entrypoint[][]} */
				(entries)[0][1].getRuntimeChunk()
			: null;

	return {
		entries,
		runtimeChunk
	};
}

/**
 * Creates a chunk hash handler
 * @param {string} name The name of the chunk
 * @returns {(chunk: Chunk, hash: Hash, { chunkGraph }: ChunkHashContext) => void} The chunk hash handler
 */
function createChunkHashHandler(name) {
	/**
	 * Processes the provided chunk.
	 * @param {Chunk} chunk The chunk to get information for
	 * @param {Hash} hash The hash to update
	 * @param {ChunkHashContext} chunkHashContext The chunk hash context
	 * @returns {void}
	 */
	return (chunk, hash, { chunkGraph }) => {
		if (chunk.hasRuntime()) return;
		const { entries, runtimeChunk } = getChunkInfo(chunk, chunkGraph);
		hash.update(name);
		hash.update("1");
		if (runtimeChunk && runtimeChunk.hash) {
			// https://github.com/webpack/webpack/issues/19439
			// Any change to runtimeChunk should trigger a hash update,
			// we shouldn't depend on or inspect its internal implementation.
			// import __webpack_require__ from "./runtime-main.e9400aee33633a3973bd.js";
			hash.update(runtimeChunk.hash);
		}
		updateHashForEntryStartup(hash, chunkGraph, entries, chunk);
	};
}

module.exports = {
	createChunkHashHandler,
	getChunkInfo
};

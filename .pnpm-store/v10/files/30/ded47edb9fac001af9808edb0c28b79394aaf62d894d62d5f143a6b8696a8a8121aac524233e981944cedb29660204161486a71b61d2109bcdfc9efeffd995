/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Entrypoint = require("../Entrypoint");

/** @typedef {import("../Chunk")} Chunk */

/**
 * @param {Entrypoint} entrypoint a chunk group
 * @param {(Chunk | null)=} excludedChunk1 current chunk which is excluded
 * @param {(Chunk | null)=} excludedChunk2 runtime chunk which is excluded
 * @returns {Set<Chunk>} chunks
 */
const getAllChunks = (entrypoint, excludedChunk1, excludedChunk2) => {
	const queue = new Set([entrypoint]);
	const chunks = new Set();
	for (const entrypoint of queue) {
		for (const chunk of entrypoint.chunks) {
			if (chunk === excludedChunk1) continue;
			if (chunk === excludedChunk2) continue;
			chunks.add(chunk);
		}
		for (const parent of entrypoint.parentsIterable) {
			if (parent instanceof Entrypoint) queue.add(parent);
		}
	}
	return chunks;
};
module.exports.getAllChunks = getAllChunks;

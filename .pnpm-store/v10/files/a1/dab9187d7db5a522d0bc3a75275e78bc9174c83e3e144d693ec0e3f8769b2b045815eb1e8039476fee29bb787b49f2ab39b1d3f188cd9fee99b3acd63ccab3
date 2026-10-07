/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Entrypoint = require("../Entrypoint");

/** @typedef {import("../Chunk")} Chunk */

/**
 * Returns chunks.
 * @param {Entrypoint} entrypoint a chunk group
 * @param {(Chunk | null)=} excludedChunk1 current chunk which is excluded
 * @param {(Chunk | null)=} excludedChunk2 runtime chunk which is excluded
 * @returns {Set<Chunk>} chunks
 */
const getAllChunks = (entrypoint, excludedChunk1, excludedChunk2) => {
	/** @type {Set<Entrypoint>} */
	const queue = new Set([entrypoint]);
	/** @type {Set<Entrypoint>} */
	const groups = new Set();
	for (const group of queue) {
		if (group !== entrypoint) {
			groups.add(group);
		}
		for (const parent of group.parentsIterable) {
			if (parent instanceof Entrypoint) queue.add(parent);
		}
	}
	groups.add(entrypoint);

	/** @type {Set<Chunk>} */
	const chunks = new Set();
	for (const group of groups) {
		for (const chunk of group.chunks) {
			if (chunk === excludedChunk1) continue;
			if (chunk === excludedChunk2) continue;
			chunks.add(chunk);
		}
	}
	return chunks;
};

module.exports.getAllChunks = getAllChunks;

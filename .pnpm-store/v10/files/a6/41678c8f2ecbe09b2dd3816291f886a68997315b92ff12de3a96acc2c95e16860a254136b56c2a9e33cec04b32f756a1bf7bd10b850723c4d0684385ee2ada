/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { compareIds } = require("../util/comparators");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Chunk").ChunkId} ChunkId */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */

class FlagIncludedChunksPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap("FlagIncludedChunksPlugin", compilation => {
			compilation.hooks.optimizeChunkIds.tap(
				"FlagIncludedChunksPlugin",
				chunks => {
					const chunkGraph = compilation.chunkGraph;

					// prepare two bit integers for each module
					// 2^31 is the max number represented as SMI in v8
					// we want the bits distributed this way:
					// the bit 2^31 is pretty rar and only one module should get it
					// so it has a probability of 1 / modulesCount
					// the first bit (2^0) is the easiest and every module could get it
					// if it doesn't get a better bit
					// from bit 2^n to 2^(n+1) there is a probability of p
					// so 1 / modulesCount == p^31
					// <=> p = sqrt31(1 / modulesCount)
					// so we use a modulo of 1 / sqrt31(1 / modulesCount)
					/** @type {WeakMap<Module, number>} */
					const moduleBits = new WeakMap();
					const modulesCount = compilation.modules.size;

					// precalculate the modulo values for each bit
					const modulo = 1 / (1 / modulesCount) ** (1 / 31);
					const modulos = Array.from(
						{ length: 31 },
						(x, i) => (modulo ** i) | 0
					);

					// iterate all modules to generate bit values
					let i = 0;
					for (const module of compilation.modules) {
						let bit = 30;
						while (i % modulos[bit] !== 0) {
							bit--;
						}
						moduleBits.set(module, 1 << bit);
						i++;
					}

					// iterate all chunks to generate bitmaps
					/** @type {WeakMap<Chunk, number>} */
					const chunkModulesHash = new WeakMap();
					for (const chunk of chunks) {
						let hash = 0;
						for (const module of chunkGraph.getChunkModulesIterable(chunk)) {
							hash |= /** @type {number} */ (moduleBits.get(module));
						}
						chunkModulesHash.set(chunk, hash);
					}

					for (const chunkA of chunks) {
						const chunkAHash =
							/** @type {number} */
							(chunkModulesHash.get(chunkA));
						const chunkAModulesCount =
							chunkGraph.getNumberOfChunkModules(chunkA);
						if (chunkAModulesCount === 0) continue;
						let bestModule;
						for (const module of chunkGraph.getChunkModulesIterable(chunkA)) {
							if (
								bestModule === undefined ||
								chunkGraph.getNumberOfModuleChunks(bestModule) >
									chunkGraph.getNumberOfModuleChunks(module)
							)
								bestModule = module;
						}
						loopB: for (const chunkB of chunkGraph.getModuleChunksIterable(
							/** @type {Module} */ (bestModule)
						)) {
							// as we iterate the same iterables twice
							// skip if we find ourselves
							if (chunkA === chunkB) continue;

							const chunkBModulesCount =
								chunkGraph.getNumberOfChunkModules(chunkB);

							// ids for empty chunks are not included
							if (chunkBModulesCount === 0) continue;

							// instead of swapping A and B just bail
							// as we loop twice the current A will be B and B then A
							if (chunkAModulesCount > chunkBModulesCount) continue;

							// is chunkA in chunkB?

							// we do a cheap check for the hash value
							const chunkBHash =
								/** @type {number} */
								(chunkModulesHash.get(chunkB));
							if ((chunkBHash & chunkAHash) !== chunkAHash) continue;

							// compare all modules
							for (const m of chunkGraph.getChunkModulesIterable(chunkA)) {
								if (!chunkGraph.isModuleInChunk(m, chunkB)) continue loopB;
							}

							/** @type {ChunkId[]} */
							(chunkB.ids).push(/** @type {ChunkId} */ (chunkA.id));
							// https://github.com/webpack/webpack/issues/18837
							/** @type {ChunkId[]} */
							(chunkB.ids).sort(compareIds);
						}
					}
				}
			);
		});
	}
}
module.exports = FlagIncludedChunksPlugin;

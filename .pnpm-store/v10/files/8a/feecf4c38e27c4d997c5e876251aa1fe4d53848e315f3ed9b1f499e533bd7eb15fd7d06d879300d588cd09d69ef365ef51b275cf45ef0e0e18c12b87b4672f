/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { STAGE_ADVANCED } = require("../OptimizationStages");
const LazyBucketSortedSet = require("../util/LazyBucketSortedSet");
const { compareChunks } = require("../util/comparators");

/** @typedef {import("../../declarations/plugins/optimize/LimitChunkCountPlugin").LimitChunkCountPluginOptions} LimitChunkCountPluginOptions */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

/**
 * Defines the chunk combination type used by this module.
 * @typedef {object} ChunkCombination
 * @property {boolean} deleted this is set to true when combination was removed
 * @property {number} sizeDiff
 * @property {number} integratedSize
 * @property {Chunk} a
 * @property {Chunk} b
 * @property {number} aIdx
 * @property {number} bIdx
 * @property {number} aSize
 * @property {number} bSize
 */

/**
 * Adds the provided map to this object.
 * @template K, V
 * @param {Map<K, Set<V>>} map map
 * @param {K} key key
 * @param {V} value value
 */
const addToSetMap = (map, key, value) => {
	const set = map.get(key);
	if (set === undefined) {
		map.set(key, new Set([value]));
	} else {
		set.add(value);
	}
};

const PLUGIN_NAME = "LimitChunkCountPlugin";

class LimitChunkCountPlugin {
	/**
	 * Creates an instance of LimitChunkCountPlugin.
	 * @param {LimitChunkCountPluginOptions=} options options object
	 */
	constructor(options = { maxChunks: 1 }) {
		/** @type {LimitChunkCountPluginOptions} */
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the webpack compiler
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.validate.tap(PLUGIN_NAME, () => {
			compiler.validate(
				() =>
					require("../../schemas/plugins/optimize/LimitChunkCountPlugin.json"),
				this.options,
				{
					name: "Limit Chunk Count Plugin",
					baseDataPath: "options"
				},
				(options) =>
					require("../../schemas/plugins/optimize/LimitChunkCountPlugin.check")(
						options
					)
			);
		});

		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			compilation.hooks.optimizeChunks.tap(
				{
					name: PLUGIN_NAME,
					stage: STAGE_ADVANCED
				},
				(chunks) => {
					const chunkGraph = compilation.chunkGraph;
					const maxChunks = this.options.maxChunks;
					if (!maxChunks) return;
					if (maxChunks < 1) return;
					if (compilation.chunks.size <= maxChunks) return;

					let remainingChunksToMerge = compilation.chunks.size - maxChunks;

					// order chunks in a deterministic way
					const compareChunksWithGraph = compareChunks(chunkGraph);
					/** @type {Chunk[]} */
					const orderedChunks = [...chunks].sort(compareChunksWithGraph);

					// create a lazy sorted data structure to keep all combinations
					// this is large. Size = chunks * (chunks - 1) / 2
					// It uses a multi layer bucket sort plus normal sort in the last layer
					// It's also lazy so only accessed buckets are sorted
					/** @type {LazyBucketSortedSet<ChunkCombination, number>} */
					const combinations = new LazyBucketSortedSet(
						// Layer 1: ordered by largest size benefit
						(c) => c.sizeDiff,
						(a, b) => b - a,

						// Layer 2: ordered by smallest combined size
						/**
						 * Handles the stage callback for this hook.
						 * @param {ChunkCombination} c combination
						 * @returns {number} integrated size
						 */
						(c) => c.integratedSize,
						/**
						 * Handles the callback logic for this hook.
						 * @param {number} a a
						 * @param {number} b b
						 * @returns {number} result
						 */
						(a, b) => a - b,

						// Layer 3: ordered by position difference in orderedChunk (-> to be deterministic)
						/**
						 * Handles the callback logic for this hook.
						 * @param {ChunkCombination} c combination
						 * @returns {number} position difference
						 */
						(c) => c.bIdx - c.aIdx,
						/**
						 * Handles the callback logic for this hook.
						 * @param {number} a a
						 * @param {number} b b
						 * @returns {number} result
						 */
						(a, b) => a - b,

						// Layer 4: ordered by position in orderedChunk (-> to be deterministic)
						/**
						 * Handles the callback logic for this hook.
						 * @param {ChunkCombination} a a
						 * @param {ChunkCombination} b b
						 * @returns {number} result
						 */
						(a, b) => a.bIdx - b.bIdx
					);

					// we keep a mapping from chunk to all combinations
					// but this mapping is not kept up-to-date with deletions
					// so `deleted` flag need to be considered when iterating this
					/** @type {Map<Chunk, Set<ChunkCombination>>} */
					const combinationsByChunk = new Map();

					for (const [bIdx, b] of orderedChunks.entries()) {
						// create combination pairs with size and integrated size
						for (let aIdx = 0; aIdx < bIdx; aIdx++) {
							const a = orderedChunks[aIdx];
							// filter pairs that can not be integrated!
							if (!chunkGraph.canChunksBeIntegrated(a, b)) continue;

							const integratedSize = chunkGraph.getIntegratedChunksSize(
								a,
								b,
								this.options
							);

							const aSize = chunkGraph.getChunkSize(a, this.options);
							const bSize = chunkGraph.getChunkSize(b, this.options);
							/** @type {ChunkCombination} */
							const c = {
								deleted: false,
								sizeDiff: aSize + bSize - integratedSize,
								integratedSize,
								a,
								b,
								aIdx,
								bIdx,
								aSize,
								bSize
							};
							combinations.add(c);
							addToSetMap(combinationsByChunk, a, c);
							addToSetMap(combinationsByChunk, b, c);
						}
					}

					// list of modified chunks during this run
					// combinations affected by this change are skipped to allow
					// further optimizations
					/** @type {Set<Chunk>} */
					const modifiedChunks = new Set();

					let changed = false;
					loop: while (true) {
						const combination = combinations.popFirst();
						if (combination === undefined) break;

						combination.deleted = true;
						const { a, b, integratedSize } = combination;

						// skip over pair when
						// one of the already merged chunks is a parent of one of the chunks
						if (modifiedChunks.size > 0) {
							const queue = new Set(a.groupsIterable);
							for (const group of b.groupsIterable) {
								queue.add(group);
							}
							for (const group of queue) {
								for (const mChunk of modifiedChunks) {
									if (mChunk !== a && mChunk !== b && mChunk.isInGroup(group)) {
										// This is a potential pair which needs recalculation
										// We can't do that now, but it merge before following pairs
										// so we leave space for it, and consider chunks as modified
										// just for the worse case
										remainingChunksToMerge--;
										if (remainingChunksToMerge <= 0) break loop;
										modifiedChunks.add(a);
										modifiedChunks.add(b);
										continue loop;
									}
								}
								for (const parent of group.parentsIterable) {
									queue.add(parent);
								}
							}
						}

						// merge the chunks
						if (chunkGraph.canChunksBeIntegrated(a, b)) {
							chunkGraph.integrateChunks(a, b);
							compilation.chunks.delete(b);

							// flag chunk a as modified as further optimization are possible for all children here
							modifiedChunks.add(a);

							changed = true;
							remainingChunksToMerge--;
							if (remainingChunksToMerge <= 0) break;

							// Update all affected combinations
							// delete all combination with the removed chunk
							// we will use combinations with the kept chunk instead
							for (const combination of /** @type {Set<ChunkCombination>} */ (
								combinationsByChunk.get(a)
							)) {
								if (combination.deleted) continue;
								combination.deleted = true;
								combinations.delete(combination);
							}

							// Update combinations with the kept chunk with new sizes
							for (const combination of /** @type {Set<ChunkCombination>} */ (
								combinationsByChunk.get(b)
							)) {
								if (combination.deleted) continue;
								if (combination.a === b) {
									if (!chunkGraph.canChunksBeIntegrated(a, combination.b)) {
										combination.deleted = true;
										combinations.delete(combination);
										continue;
									}
									// Update size
									const newIntegratedSize = chunkGraph.getIntegratedChunksSize(
										a,
										combination.b,
										this.options
									);
									const finishUpdate = combinations.startUpdate(combination);
									combination.a = a;
									combination.integratedSize = newIntegratedSize;
									combination.aSize = integratedSize;
									combination.sizeDiff =
										combination.bSize + integratedSize - newIntegratedSize;
									finishUpdate();
								} else if (combination.b === b) {
									if (!chunkGraph.canChunksBeIntegrated(combination.a, a)) {
										combination.deleted = true;
										combinations.delete(combination);
										continue;
									}
									// Update size
									const newIntegratedSize = chunkGraph.getIntegratedChunksSize(
										combination.a,
										a,
										this.options
									);

									const finishUpdate = combinations.startUpdate(combination);
									combination.b = a;
									combination.integratedSize = newIntegratedSize;
									combination.bSize = integratedSize;
									combination.sizeDiff =
										integratedSize + combination.aSize - newIntegratedSize;
									finishUpdate();
								}
							}
							combinationsByChunk.set(
								a,
								/** @type {Set<ChunkCombination>} */ (
									combinationsByChunk.get(b)
								)
							);
							combinationsByChunk.delete(b);
						}
					}
					if (changed) return true;
				}
			);
		});
	}
}

module.exports = LimitChunkCountPlugin;

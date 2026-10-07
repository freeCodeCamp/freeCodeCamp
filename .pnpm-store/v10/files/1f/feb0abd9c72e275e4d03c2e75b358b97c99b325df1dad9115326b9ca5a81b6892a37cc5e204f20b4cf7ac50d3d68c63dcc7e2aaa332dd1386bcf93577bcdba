/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { STAGE_ADVANCED } = require("../OptimizationStages");
const { intersect } = require("../util/SetHelpers");
const {
	compareChunks,
	compareModulesByIdentifier
} = require("../util/comparators");
const identifierUtils = require("../util/identifier");

/** @typedef {import("../../declarations/plugins/optimize/AggressiveSplittingPlugin").AggressiveSplittingPluginOptions} AggressiveSplittingPluginOptions */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Chunk").ChunkId} ChunkId */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */

/**
 * Move module between.
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @param {Chunk} oldChunk the old chunk
 * @param {Chunk} newChunk the new chunk
 * @returns {(module: Module) => void} function to move module between chunks
 */
const moveModuleBetween = (chunkGraph, oldChunk, newChunk) => (module) => {
	chunkGraph.disconnectChunkAndModule(oldChunk, module);
	chunkGraph.connectChunkAndModule(newChunk, module);
};

/**
 * Checks whether this object is not a entry module.
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @param {Chunk} chunk the chunk
 * @returns {(module: Module) => boolean} filter for entry module
 */
const isNotAEntryModule = (chunkGraph, chunk) => (module) =>
	!chunkGraph.isEntryModuleInChunk(module, chunk);

/** @typedef {{ id?: NonNullable<Chunk["id"]>, hash?: NonNullable<Chunk["hash"]>, modules: string[], size: number }} SplitData */

/** @type {WeakSet<Chunk>} */
const recordedChunks = new WeakSet();

const PLUGIN_NAME = "AggressiveSplittingPlugin";

class AggressiveSplittingPlugin {
	/**
	 * Creates an instance of AggressiveSplittingPlugin.
	 * @param {AggressiveSplittingPluginOptions=} options options object
	 */
	constructor(options = {}) {
		/** @type {AggressiveSplittingPluginOptions} */
		this.options = options;
	}

	/**
	 * Was chunk recorded.
	 * @param {Chunk} chunk the chunk to test
	 * @returns {boolean} true if the chunk was recorded
	 */
	static wasChunkRecorded(chunk) {
		return recordedChunks.has(chunk);
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.validate.tap(PLUGIN_NAME, () => {
			compiler.validate(
				() =>
					require("../../schemas/plugins/optimize/AggressiveSplittingPlugin.json"),
				this.options,
				{
					name: "Aggressive Splitting Plugin",
					baseDataPath: "options"
				},
				(options) =>
					require("../../schemas/plugins/optimize/AggressiveSplittingPlugin.check")(
						options
					)
			);
		});

		compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
			let needAdditionalSeal = false;
			/** @type {SplitData[]} */
			let newSplits;
			/** @type {Set<Chunk>} */
			let fromAggressiveSplittingSet;
			/** @type {Map<Chunk, SplitData>} */
			let chunkSplitDataMap;
			compilation.hooks.optimize.tap(PLUGIN_NAME, () => {
				newSplits = [];
				fromAggressiveSplittingSet = new Set();
				chunkSplitDataMap = new Map();
			});
			compilation.hooks.optimizeChunks.tap(
				{
					name: PLUGIN_NAME,
					stage: STAGE_ADVANCED
				},
				(chunks) => {
					const chunkGraph = compilation.chunkGraph;
					// Precompute stuff
					/** @type {Map<string, Module>} */
					const nameToModuleMap = new Map();
					/** @type {Map<Module, string>} */
					const moduleToNameMap = new Map();
					const makePathsRelative =
						identifierUtils.makePathsRelative.bindContextCache(
							compiler.context,
							compiler.root
						);
					for (const m of compilation.modules) {
						const name = makePathsRelative(m.identifier());
						nameToModuleMap.set(name, m);
						moduleToNameMap.set(m, name);
					}

					// Check used chunk ids
					/** @type {Set<ChunkId>} */
					const usedIds = new Set();
					for (const chunk of chunks) {
						usedIds.add(/** @type {ChunkId} */ (chunk.id));
					}

					const recordedSplits =
						(compilation.records && compilation.records.aggressiveSplits) || [];
					const usedSplits = newSplits
						? [...recordedSplits, ...newSplits]
						: recordedSplits;

					const minSize = this.options.minSize || 30 * 1024;
					const maxSize = this.options.maxSize || 50 * 1024;

					/**
					 * Returns true when applied, otherwise false.
					 * @param {SplitData} splitData split data
					 * @returns {boolean} true when applied, otherwise false
					 */
					const applySplit = (splitData) => {
						// Cannot split if id is already taken
						if (splitData.id !== undefined && usedIds.has(splitData.id)) {
							return false;
						}

						// Get module objects from names
						const selectedModules = splitData.modules.map(
							(name) => /** @type {Module} */ (nameToModuleMap.get(name))
						);

						// Does the modules exist at all?
						if (!selectedModules.every(Boolean)) return false;

						// Check if size matches (faster than waiting for hash)
						let size = 0;
						for (const m of selectedModules) size += m.size();
						if (size !== splitData.size) return false;

						// get chunks with all modules
						const selectedChunks = intersect(
							selectedModules.map(
								(m) => new Set(chunkGraph.getModuleChunksIterable(m))
							)
						);

						// No relevant chunks found
						if (selectedChunks.size === 0) return false;

						// The found chunk is already the split or similar
						if (
							selectedChunks.size === 1 &&
							chunkGraph.getNumberOfChunkModules([...selectedChunks][0]) ===
								selectedModules.length
						) {
							const chunk = [...selectedChunks][0];
							if (fromAggressiveSplittingSet.has(chunk)) return false;
							fromAggressiveSplittingSet.add(chunk);
							chunkSplitDataMap.set(chunk, splitData);
							return true;
						}

						// split the chunk into two parts
						const newChunk = compilation.addChunk();
						newChunk.chunkReason = "aggressive splitted";
						for (const chunk of selectedChunks) {
							for (const module of selectedModules) {
								moveModuleBetween(chunkGraph, chunk, newChunk)(module);
							}
							chunk.split(newChunk);
							chunk.name = null;
						}
						fromAggressiveSplittingSet.add(newChunk);
						chunkSplitDataMap.set(newChunk, splitData);

						if (splitData.id !== null && splitData.id !== undefined) {
							newChunk.id = splitData.id;
							newChunk.ids = [splitData.id];
						}
						return true;
					};

					// try to restore to recorded splitting
					let changed = false;
					for (let j = 0; j < usedSplits.length; j++) {
						const splitData = usedSplits[j];
						if (applySplit(splitData)) changed = true;
					}

					// for any chunk which isn't splitted yet, split it and create a new entry
					// start with the biggest chunk
					const cmpFn = compareChunks(chunkGraph);
					const sortedChunks = [...chunks].sort((a, b) => {
						const diff1 =
							chunkGraph.getChunkModulesSize(b) -
							chunkGraph.getChunkModulesSize(a);
						if (diff1) return diff1;
						const diff2 =
							chunkGraph.getNumberOfChunkModules(a) -
							chunkGraph.getNumberOfChunkModules(b);
						if (diff2) return diff2;
						return cmpFn(a, b);
					});
					for (const chunk of sortedChunks) {
						if (fromAggressiveSplittingSet.has(chunk)) continue;
						const size = chunkGraph.getChunkModulesSize(chunk);
						if (
							size > maxSize &&
							chunkGraph.getNumberOfChunkModules(chunk) > 1
						) {
							const modules = chunkGraph
								.getOrderedChunkModules(chunk, compareModulesByIdentifier)
								.filter(isNotAEntryModule(chunkGraph, chunk));
							/** @type {Module[]} */
							const selectedModules = [];
							let selectedModulesSize = 0;
							for (let k = 0; k < modules.length; k++) {
								const module = modules[k];
								const newSize = selectedModulesSize + module.size();
								if (newSize > maxSize && selectedModulesSize >= minSize) {
									break;
								}
								selectedModulesSize = newSize;
								selectedModules.push(module);
							}
							if (selectedModules.length === 0) continue;
							/** @type {SplitData} */
							const splitData = {
								modules: selectedModules
									.map((m) => /** @type {string} */ (moduleToNameMap.get(m)))
									.sort(),
								size: selectedModulesSize
							};

							if (applySplit(splitData)) {
								newSplits = [...(newSplits || []), splitData];
								changed = true;
							}
						}
					}
					if (changed) return true;
				}
			);
			compilation.hooks.recordHash.tap(PLUGIN_NAME, (records) => {
				// 4. save made splittings to records
				/** @type {Set<SplitData>} */
				const allSplits = new Set();
				/** @type {Set<SplitData>} */
				const invalidSplits = new Set();

				// Check if some splittings are invalid
				// We remove invalid splittings and try again
				for (const chunk of compilation.chunks) {
					const splitData = chunkSplitDataMap.get(chunk);
					if (
						splitData !== undefined &&
						splitData.hash &&
						chunk.hash !== splitData.hash
					) {
						// Split was successful, but hash doesn't equal
						// We can throw away the split since it's useless now
						invalidSplits.add(splitData);
					}
				}

				if (invalidSplits.size > 0) {
					records.aggressiveSplits =
						/** @type {SplitData[]} */
						(records.aggressiveSplits).filter(
							(splitData) => !invalidSplits.has(splitData)
						);
					needAdditionalSeal = true;
				} else {
					// set hash and id values on all (new) splittings
					for (const chunk of compilation.chunks) {
						const splitData = chunkSplitDataMap.get(chunk);
						if (splitData !== undefined) {
							splitData.hash =
								/** @type {NonNullable<Chunk["hash"]>} */
								(chunk.hash);
							splitData.id =
								/** @type {NonNullable<Chunk["id"]>} */
								(chunk.id);
							allSplits.add(splitData);
							// set flag for stats
							recordedChunks.add(chunk);
						}
					}

					// Also add all unused historical splits (after the used ones)
					// They can still be used in some future compilation
					const recordedSplits =
						compilation.records && compilation.records.aggressiveSplits;
					if (recordedSplits) {
						for (const splitData of recordedSplits) {
							if (!invalidSplits.has(splitData)) allSplits.add(splitData);
						}
					}

					// record all splits
					records.aggressiveSplits = [...allSplits];

					needAdditionalSeal = false;
				}
			});
			compilation.hooks.needAdditionalSeal.tap(PLUGIN_NAME, () => {
				if (needAdditionalSeal) {
					needAdditionalSeal = false;
					return true;
				}
			});
		});
	}
}

module.exports = AggressiveSplittingPlugin;

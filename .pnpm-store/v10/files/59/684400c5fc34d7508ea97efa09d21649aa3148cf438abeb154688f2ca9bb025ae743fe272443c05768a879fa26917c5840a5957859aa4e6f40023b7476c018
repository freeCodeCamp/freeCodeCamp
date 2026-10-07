/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const {
	compareModulesByPreOrderIndexOrIdentifier
} = require("../util/comparators");
const {
	assignAscendingModuleIds,
	getUsedModuleIdsAndModules
} = require("./IdHelpers");

/** @typedef {import("../../declarations/plugins/ids/OccurrenceModuleIdsPlugin").OccurrenceModuleIdsPluginOptions} OccurrenceModuleIdsPluginOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */

const PLUGIN_NAME = "OccurrenceModuleIdsPlugin";

class OccurrenceModuleIdsPlugin {
	/**
	 * Creates an instance of OccurrenceModuleIdsPlugin.
	 * @param {OccurrenceModuleIdsPluginOptions=} options options object
	 */
	constructor(options = {}) {
		/** @type {OccurrenceModuleIdsPluginOptions} */
		this.options = options;
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
					require("../../schemas/plugins/ids/OccurrenceModuleIdsPlugin.json"),
				this.options,
				{
					name: "Occurrence Order Module Ids Plugin",
					baseDataPath: "options"
				},
				(options) =>
					require("../../schemas/plugins/ids/OccurrenceModuleIdsPlugin.check")(
						options
					)
			);
		});
		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			const moduleGraph = compilation.moduleGraph;

			compilation.hooks.moduleIds.tap(PLUGIN_NAME, () => {
				const chunkGraph = compilation.chunkGraph;

				const [usedIds, modulesInOccurrenceOrder] =
					getUsedModuleIdsAndModules(compilation);

				/** @type {Map<Module, number>} */
				const occursInInitialChunksMap = new Map();
				/** @type {Map<Module, number>} */
				const occursInAllChunksMap = new Map();

				/** @type {Map<Module, number>} */
				const initialChunkChunkMap = new Map();
				/** @type {Map<Module, number>} */
				const entryCountMap = new Map();
				for (const m of modulesInOccurrenceOrder) {
					let initial = 0;
					let entry = 0;
					for (const c of chunkGraph.getModuleChunksIterable(m)) {
						if (c.canBeInitial()) initial++;
						if (chunkGraph.isEntryModuleInChunk(m, c)) entry++;
					}
					initialChunkChunkMap.set(m, initial);
					entryCountMap.set(m, entry);
				}

				/**
				 * Count occurs in entry.
				 * @param {Module} module module
				 * @returns {number} count of occurs
				 */
				const countOccursInEntry = (module) => {
					let sum = 0;
					for (const [
						originModule,
						connections
					] of moduleGraph.getIncomingConnectionsByOriginModule(module)) {
						if (!originModule) continue;
						if (!connections.some((c) => c.isTargetActive(undefined))) continue;
						sum += initialChunkChunkMap.get(originModule) || 0;
					}
					return sum;
				};

				/**
				 * Returns count of occurs.
				 * @param {Module} module module
				 * @returns {number} count of occurs
				 */
				const countOccurs = (module) => {
					let sum = 0;
					for (const [
						originModule,
						connections
					] of moduleGraph.getIncomingConnectionsByOriginModule(module)) {
						if (!originModule) continue;
						const chunkModules =
							chunkGraph.getNumberOfModuleChunks(originModule);
						for (const c of connections) {
							if (!c.isTargetActive(undefined)) continue;
							if (!c.dependency) continue;
							const factor = c.dependency.getNumberOfIdOccurrences();
							if (factor === 0) continue;
							sum += factor * chunkModules;
						}
					}
					return sum;
				};

				if (this.options.prioritiseInitial) {
					for (const m of modulesInOccurrenceOrder) {
						const result =
							countOccursInEntry(m) +
							/** @type {number} */ (initialChunkChunkMap.get(m)) +
							/** @type {number} */ (entryCountMap.get(m));
						occursInInitialChunksMap.set(m, result);
					}
				}

				for (const m of modulesInOccurrenceOrder) {
					const result =
						countOccurs(m) +
						chunkGraph.getNumberOfModuleChunks(m) +
						/** @type {number} */ (entryCountMap.get(m));
					occursInAllChunksMap.set(m, result);
				}

				const naturalCompare = compareModulesByPreOrderIndexOrIdentifier(
					compilation.moduleGraph
				);

				modulesInOccurrenceOrder.sort((a, b) => {
					if (this.options.prioritiseInitial) {
						const aEntryOccurs =
							/** @type {number} */
							(occursInInitialChunksMap.get(a));
						const bEntryOccurs =
							/** @type {number} */
							(occursInInitialChunksMap.get(b));
						if (aEntryOccurs > bEntryOccurs) return -1;
						if (aEntryOccurs < bEntryOccurs) return 1;
					}
					const aOccurs = /** @type {number} */ (occursInAllChunksMap.get(a));
					const bOccurs = /** @type {number} */ (occursInAllChunksMap.get(b));
					if (aOccurs > bOccurs) return -1;
					if (aOccurs < bOccurs) return 1;
					return naturalCompare(a, b);
				});

				assignAscendingModuleIds(
					usedIds,
					modulesInOccurrenceOrder,
					compilation
				);
			});
		});
	}
}

module.exports = OccurrenceModuleIdsPlugin;

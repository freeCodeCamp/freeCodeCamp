/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const {
	compareModulesByPreOrderIndexOrIdentifier
} = require("../util/comparators");
const createSchemaValidation = require("../util/create-schema-validation");
const {
	assignAscendingModuleIds,
	getUsedModuleIdsAndModules
} = require("./IdHelpers");

/** @typedef {import("../../declarations/plugins/ids/OccurrenceModuleIdsPlugin").OccurrenceModuleIdsPluginOptions} OccurrenceModuleIdsPluginOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../ModuleGraphConnection")} ModuleGraphConnection */

const validate = createSchemaValidation(
	require("../../schemas/plugins/ids/OccurrenceModuleIdsPlugin.check.js"),
	() => require("../../schemas/plugins/ids/OccurrenceModuleIdsPlugin.json"),
	{
		name: "Occurrence Order Module Ids Plugin",
		baseDataPath: "options"
	}
);

class OccurrenceModuleIdsPlugin {
	/**
	 * @param {OccurrenceModuleIdsPluginOptions=} options options object
	 */
	constructor(options = {}) {
		validate(options);
		this.options = options;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const prioritiseInitial = this.options.prioritiseInitial;
		compiler.hooks.compilation.tap("OccurrenceModuleIdsPlugin", compilation => {
			const moduleGraph = compilation.moduleGraph;

			compilation.hooks.moduleIds.tap("OccurrenceModuleIdsPlugin", () => {
				const chunkGraph = compilation.chunkGraph;

				const [usedIds, modulesInOccurrenceOrder] =
					getUsedModuleIdsAndModules(compilation);

				const occursInInitialChunksMap = new Map();
				const occursInAllChunksMap = new Map();

				const initialChunkChunkMap = new Map();
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
				 * @param {Module} module module
				 * @returns {number} count of occurs
				 */
				const countOccursInEntry = module => {
					let sum = 0;
					for (const [
						originModule,
						connections
					] of moduleGraph.getIncomingConnectionsByOriginModule(module)) {
						if (!originModule) continue;
						if (!connections.some(c => c.isTargetActive(undefined))) continue;
						sum += initialChunkChunkMap.get(originModule) || 0;
					}
					return sum;
				};

				/**
				 * @param {Module} module module
				 * @returns {number} count of occurs
				 */
				const countOccurs = module => {
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

				if (prioritiseInitial) {
					for (const m of modulesInOccurrenceOrder) {
						const result =
							countOccursInEntry(m) +
							initialChunkChunkMap.get(m) +
							entryCountMap.get(m);
						occursInInitialChunksMap.set(m, result);
					}
				}

				for (const m of modulesInOccurrenceOrder) {
					const result =
						countOccurs(m) +
						chunkGraph.getNumberOfModuleChunks(m) +
						entryCountMap.get(m);
					occursInAllChunksMap.set(m, result);
				}

				const naturalCompare = compareModulesByPreOrderIndexOrIdentifier(
					compilation.moduleGraph
				);

				modulesInOccurrenceOrder.sort((a, b) => {
					if (prioritiseInitial) {
						const aEntryOccurs = occursInInitialChunksMap.get(a);
						const bEntryOccurs = occursInInitialChunksMap.get(b);
						if (aEntryOccurs > bEntryOccurs) return -1;
						if (aEntryOccurs < bEntryOccurs) return 1;
					}
					const aOccurs = occursInAllChunksMap.get(a);
					const bOccurs = occursInAllChunksMap.get(b);
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

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { compareNumbers } = require("./util/comparators");
const identifierUtils = require("./util/identifier");

/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Module")} Module */

/**
 * Defines the records chunks type used by this module.
 * @typedef {object} RecordsChunks
 * @property {Record<string, number>=} byName
 * @property {Record<string, number>=} bySource
 * @property {number[]=} usedIds
 */

/**
 * Defines the records modules type used by this module.
 * @typedef {object} RecordsModules
 * @property {Record<string, number>=} byIdentifier
 * @property {number[]=} usedIds
 */

/**
 * Defines the records type used by this module.
 * @typedef {object} Records
 * @property {RecordsChunks=} chunks
 * @property {RecordsModules=} modules
 */

/**
 * Defines the record ids plugin options type used by this module.
 * @typedef {object} RecordIdsPluginOptions
 * @property {boolean=} portableIds true, when ids need to be portable
 */

/** @typedef {Set<number>} UsedIds */

const PLUGIN_NAME = "RecordIdsPlugin";

class RecordIdsPlugin {
	/**
	 * Creates an instance of RecordIdsPlugin.
	 * @param {RecordIdsPluginOptions=} options object
	 */
	constructor(options) {
		this.options = options || {};
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the Compiler
	 * @returns {void}
	 */
	apply(compiler) {
		const portableIds = this.options.portableIds;

		const makePathsRelative =
			identifierUtils.makePathsRelative.bindContextCache(
				compiler.context,
				compiler.root
			);

		/**
		 * Gets module identifier.
		 * @param {Module} module the module
		 * @returns {string} the (portable) identifier
		 */
		const getModuleIdentifier = (module) => {
			if (portableIds) {
				return makePathsRelative(module.identifier());
			}
			return module.identifier();
		};

		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			compilation.hooks.recordModules.tap(PLUGIN_NAME, (modules, records) => {
				const chunkGraph = compilation.chunkGraph;
				if (!records.modules) records.modules = {};
				if (!records.modules.byIdentifier) records.modules.byIdentifier = {};
				/** @type {UsedIds} */
				const usedIds = new Set();
				for (const module of modules) {
					const moduleId = chunkGraph.getModuleId(module);
					if (typeof moduleId !== "number") continue;
					const identifier = getModuleIdentifier(module);
					records.modules.byIdentifier[identifier] = moduleId;
					usedIds.add(moduleId);
				}
				records.modules.usedIds = [...usedIds].sort(compareNumbers);
			});
			compilation.hooks.reviveModules.tap(PLUGIN_NAME, (modules, records) => {
				if (!records.modules) return;
				if (records.modules.byIdentifier) {
					const chunkGraph = compilation.chunkGraph;
					/** @type {UsedIds} */
					const usedIds = new Set();
					for (const module of modules) {
						const moduleId = chunkGraph.getModuleId(module);
						if (moduleId !== null) continue;
						const identifier = getModuleIdentifier(module);
						const id = records.modules.byIdentifier[identifier];
						if (id === undefined) continue;
						if (usedIds.has(id)) continue;
						usedIds.add(id);
						chunkGraph.setModuleId(module, id);
					}
				}
				if (Array.isArray(records.modules.usedIds)) {
					compilation.usedModuleIds = new Set(records.modules.usedIds);
				}
			});

			/** @typedef {string[]} ChunkSources */

			/**
			 * Gets chunk sources.
			 * @param {Chunk} chunk the chunk
			 * @returns {ChunkSources} sources of the chunk
			 */
			const getChunkSources = (chunk) => {
				/** @type {ChunkSources} */
				const sources = [];
				for (const chunkGroup of chunk.groupsIterable) {
					const index = chunkGroup.chunks.indexOf(chunk);
					if (chunkGroup.name) {
						sources.push(`${index} ${chunkGroup.name}`);
					} else {
						for (const origin of chunkGroup.origins) {
							if (origin.module) {
								if (origin.request) {
									sources.push(
										`${index} ${getModuleIdentifier(origin.module)} ${
											origin.request
										}`
									);
								} else if (typeof origin.loc === "string") {
									sources.push(
										`${index} ${getModuleIdentifier(origin.module)} ${
											origin.loc
										}`
									);
								} else if (
									origin.loc &&
									typeof origin.loc === "object" &&
									"start" in origin.loc
								) {
									sources.push(
										`${index} ${getModuleIdentifier(
											origin.module
										)} ${JSON.stringify(origin.loc.start)}`
									);
								}
							}
						}
					}
				}
				return sources;
			};

			compilation.hooks.recordChunks.tap(PLUGIN_NAME, (chunks, records) => {
				if (!records.chunks) records.chunks = {};
				if (!records.chunks.byName) records.chunks.byName = {};
				if (!records.chunks.bySource) records.chunks.bySource = {};
				/** @type {UsedIds} */
				const usedIds = new Set();
				for (const chunk of chunks) {
					if (typeof chunk.id !== "number") continue;
					const name = chunk.name;
					if (name) records.chunks.byName[name] = chunk.id;
					const sources = getChunkSources(chunk);
					for (const source of sources) {
						records.chunks.bySource[source] = chunk.id;
					}
					usedIds.add(chunk.id);
				}
				records.chunks.usedIds = [...usedIds].sort(compareNumbers);
			});
			compilation.hooks.reviveChunks.tap(PLUGIN_NAME, (chunks, records) => {
				if (!records.chunks) return;
				/** @type {UsedIds} */
				const usedIds = new Set();
				if (records.chunks.byName) {
					for (const chunk of chunks) {
						if (chunk.id !== null) continue;
						if (!chunk.name) continue;
						const id = records.chunks.byName[chunk.name];
						if (id === undefined) continue;
						if (usedIds.has(id)) continue;
						usedIds.add(id);
						chunk.id = id;
						chunk.ids = [id];
					}
				}
				if (records.chunks.bySource) {
					for (const chunk of chunks) {
						if (chunk.id !== null) continue;
						const sources = getChunkSources(chunk);
						for (const source of sources) {
							const id = records.chunks.bySource[source];
							if (id === undefined) continue;
							if (usedIds.has(id)) continue;
							usedIds.add(id);
							chunk.id = id;
							chunk.ids = [id];
							break;
						}
					}
				}
				if (Array.isArray(records.chunks.usedIds)) {
					compilation.usedChunkIds = new Set(records.chunks.usedIds);
				}
			});
		});
	}
}

module.exports = RecordIdsPlugin;

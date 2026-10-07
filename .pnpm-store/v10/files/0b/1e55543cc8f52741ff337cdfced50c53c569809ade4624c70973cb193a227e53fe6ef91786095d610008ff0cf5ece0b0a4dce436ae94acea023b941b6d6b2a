/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { compareChunksNatural } = require("../util/comparators");
const { assignAscendingChunkIds } = require("./IdHelpers");

/** @typedef {import("../../declarations/plugins/ids/OccurrenceChunkIdsPlugin").OccurrenceChunkIdsPluginOptions} OccurrenceChunkIdsPluginOptions */
/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compiler")} Compiler */

const PLUGIN_NAME = "OccurrenceChunkIdsPlugin";

class OccurrenceChunkIdsPlugin {
	/**
	 * Creates an instance of OccurrenceChunkIdsPlugin.
	 * @param {OccurrenceChunkIdsPluginOptions=} options options object
	 */
	constructor(options = {}) {
		/** @type {OccurrenceChunkIdsPluginOptions} */
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
					require("../../schemas/plugins/ids/OccurrenceChunkIdsPlugin.json"),
				this.options,
				{
					name: "Occurrence Order Chunk Ids Plugin",
					baseDataPath: "options"
				},
				(options) =>
					require("../../schemas/plugins/ids/OccurrenceChunkIdsPlugin.check")(
						options
					)
			);
		});
		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			compilation.hooks.chunkIds.tap(PLUGIN_NAME, (chunks) => {
				const chunkGraph = compilation.chunkGraph;

				/** @type {Map<Chunk, number>} */
				const occursInInitialChunksMap = new Map();

				const compareNatural = compareChunksNatural(chunkGraph);

				for (const c of chunks) {
					let occurs = 0;
					for (const chunkGroup of c.groupsIterable) {
						for (const parent of chunkGroup.parentsIterable) {
							if (parent.isInitial()) occurs++;
						}
					}
					occursInInitialChunksMap.set(c, occurs);
				}

				/** @type {Chunk[]} */
				const chunksInOccurrenceOrder = [...chunks].sort((a, b) => {
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
					const aOccurs = a.getNumberOfGroups();
					const bOccurs = b.getNumberOfGroups();
					if (aOccurs > bOccurs) return -1;
					if (aOccurs < bOccurs) return 1;
					return compareNatural(a, b);
				});
				assignAscendingChunkIds(chunksInOccurrenceOrder, compilation);
			});
		});
	}
}

module.exports = OccurrenceChunkIdsPlugin;

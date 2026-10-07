/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { find } = require("../util/SetHelpers");
const {
	compareModulesByPostOrderIndexOrIdentifier,
	compareModulesByPreOrderIndexOrIdentifier
} = require("../util/comparators");

/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../ChunkGraph").ModuleComparator} ModuleComparator */

/**
 * Defines the chunk module id range plugin options type used by this module.
 * @typedef {object} ChunkModuleIdRangePluginOptions
 * @property {string} name the chunk name
 * @property {("index" | "index2" | "preOrderIndex" | "postOrderIndex")=} order order
 * @property {number=} start start id
 * @property {number=} end end id
 */

const PLUGIN_NAME = "ChunkModuleIdRangePlugin";

class ChunkModuleIdRangePlugin {
	/**
	 * Creates an instance of ChunkModuleIdRangePlugin.
	 * @param {ChunkModuleIdRangePluginOptions} options options object
	 */
	constructor(options) {
		/** @type {ChunkModuleIdRangePluginOptions} */
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
			const moduleGraph = compilation.moduleGraph;
			compilation.hooks.moduleIds.tap(PLUGIN_NAME, (modules) => {
				const chunkGraph = compilation.chunkGraph;
				const chunk = find(
					compilation.chunks,
					(chunk) => chunk.name === this.options.name
				);
				if (!chunk) {
					throw new Error(
						`${PLUGIN_NAME}: Chunk with name '${this.options.name}"' was not found`
					);
				}

				/** @type {Module[]} */
				let chunkModules;
				if (this.options.order) {
					/** @type {ModuleComparator} */
					let cmpFn;
					switch (this.options.order) {
						case "index":
						case "preOrderIndex":
							cmpFn = compareModulesByPreOrderIndexOrIdentifier(moduleGraph);
							break;
						case "index2":
						case "postOrderIndex":
							cmpFn = compareModulesByPostOrderIndexOrIdentifier(moduleGraph);
							break;
						default:
							throw new Error(`${PLUGIN_NAME}: unexpected value of order`);
					}
					chunkModules = chunkGraph.getOrderedChunkModules(chunk, cmpFn);
				} else {
					chunkModules = [...modules]
						.filter((m) => chunkGraph.isModuleInChunk(m, chunk))
						.sort(compareModulesByPreOrderIndexOrIdentifier(moduleGraph));
				}

				let currentId = this.options.start || 0;
				for (let i = 0; i < chunkModules.length; i++) {
					const m = chunkModules[i];
					if (m.needId && chunkGraph.getModuleId(m) === null) {
						chunkGraph.setModuleId(m, currentId++);
					}
					if (this.options.end && currentId > this.options.end) break;
				}
			});
		});
	}
}

module.exports = ChunkModuleIdRangePlugin;

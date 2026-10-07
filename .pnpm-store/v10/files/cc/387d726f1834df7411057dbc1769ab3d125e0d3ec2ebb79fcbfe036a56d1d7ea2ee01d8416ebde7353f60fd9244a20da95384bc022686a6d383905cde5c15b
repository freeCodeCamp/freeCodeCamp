/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../MainTemplate")} MainTemplate */

class CompatRuntimeModule extends RuntimeModule {
	constructor() {
		super("compat", RuntimeModule.STAGE_ATTACH);
		this.fullHash = true;
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const chunkGraph = /** @type {ChunkGraph} */ (this.chunkGraph);
		const chunk = /** @type {Chunk} */ (this.chunk);
		const {
			runtimeTemplate,
			mainTemplate,
			moduleTemplates,
			dependencyTemplates
		} = compilation;
		const bootstrap = mainTemplate.hooks.bootstrap.call(
			"",
			chunk,
			compilation.hash || "XXXX",
			moduleTemplates.javascript,
			dependencyTemplates
		);
		const localVars = mainTemplate.hooks.localVars.call(
			"",
			chunk,
			compilation.hash || "XXXX"
		);
		const requireExtensions = mainTemplate.hooks.requireExtensions.call(
			"",
			chunk,
			compilation.hash || "XXXX"
		);
		const runtimeRequirements = chunkGraph.getTreeRuntimeRequirements(chunk);
		let requireEnsure = "";
		if (runtimeRequirements.has(RuntimeGlobals.ensureChunk)) {
			const requireEnsureHandler = mainTemplate.hooks.requireEnsure.call(
				"",
				chunk,
				compilation.hash || "XXXX",
				"chunkId"
			);
			if (requireEnsureHandler) {
				requireEnsure = `${
					RuntimeGlobals.ensureChunkHandlers
				}.compat = ${runtimeTemplate.basicFunction(
					"chunkId, promises",
					requireEnsureHandler
				)};`;
			}
		}
		return [bootstrap, localVars, requireEnsure, requireExtensions]
			.filter(Boolean)
			.join("\n");
	}

	/**
	 * @returns {boolean} true, if the runtime module should get it's own scope
	 */
	shouldIsolate() {
		// We avoid isolating this to have better backward-compat
		return false;
	}
}

module.exports = CompatRuntimeModule;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");

/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../MainTemplate")} MainTemplate */

class StartupEntrypointRuntimeModule extends RuntimeModule {
	/**
	 * @param {boolean} asyncChunkLoading use async chunk loading
	 */
	constructor(asyncChunkLoading) {
		super("startup entrypoint");
		this.asyncChunkLoading = asyncChunkLoading;
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate } = compilation;
		return `${
			RuntimeGlobals.startupEntrypoint
		} = ${runtimeTemplate.basicFunction("result, chunkIds, fn", [
			"// arguments: chunkIds, moduleId are deprecated",
			"var moduleId = chunkIds;",
			`if(!fn) chunkIds = result, fn = ${runtimeTemplate.returningFunction(
				`${RuntimeGlobals.require}(${RuntimeGlobals.entryModuleId} = moduleId)`
			)};`,
			...(this.asyncChunkLoading
				? [
						`return Promise.all(chunkIds.map(${RuntimeGlobals.ensureChunk}, ${
							RuntimeGlobals.require
						})).then(${runtimeTemplate.basicFunction("", [
							"var r = fn();",
							"return r === undefined ? result : r;"
						])})`
					]
				: [
						`chunkIds.map(${RuntimeGlobals.ensureChunk}, ${RuntimeGlobals.require})`,
						"var r = fn();",
						"return r === undefined ? result : r;"
					])
		])}`;
	}
}

module.exports = StartupEntrypointRuntimeModule;

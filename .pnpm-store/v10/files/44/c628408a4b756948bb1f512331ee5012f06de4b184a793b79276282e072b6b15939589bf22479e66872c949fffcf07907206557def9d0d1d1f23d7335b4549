/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");

/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */

class ChunkPrefetchFunctionRuntimeModule extends RuntimeModule {
	/**
	 * @param {string} childType TODO
	 * @param {string} runtimeFunction TODO
	 * @param {string} runtimeHandlers TODO
	 */
	constructor(childType, runtimeFunction, runtimeHandlers) {
		super(`chunk ${childType} function`);
		this.childType = childType;
		this.runtimeFunction = runtimeFunction;
		this.runtimeHandlers = runtimeHandlers;
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const { runtimeFunction, runtimeHandlers } = this;
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate } = compilation;
		return Template.asString([
			`${runtimeHandlers} = {};`,
			`${runtimeFunction} = ${runtimeTemplate.basicFunction("chunkId", [
				// map is shorter than forEach
				`Object.keys(${runtimeHandlers}).map(${runtimeTemplate.basicFunction(
					"key",
					`${runtimeHandlers}[key](chunkId);`
				)});`
			])}`
		]);
	}
}

module.exports = ChunkPrefetchFunctionRuntimeModule;

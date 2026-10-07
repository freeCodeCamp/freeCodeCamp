/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");

/** @typedef {import("../Compilation")} Compilation */

class GetFullHashRuntimeModule extends RuntimeModule {
	constructor() {
		super("getFullHash");
		/** @type {boolean} */
		this.fullHash = true;
	}

	/**
	 * Generates runtime code for this runtime module.
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate } = compilation;
		return `${RuntimeGlobals.getFullHash} = ${runtimeTemplate.returningFunction(
			JSON.stringify(compilation.hash || "XXXX")
		)}`;
	}
}

module.exports = GetFullHashRuntimeModule;

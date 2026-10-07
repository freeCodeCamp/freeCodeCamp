/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const HelperRuntimeModule = require("./HelperRuntimeModule");

/** @typedef {import("../Compilation")} Compilation */

class DefinePropertyGettersRuntimeModule extends HelperRuntimeModule {
	constructor() {
		super("define property getters");
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate } = compilation;
		const fn = RuntimeGlobals.definePropertyGetters;
		return Template.asString([
			"// define getter functions for harmony exports",
			`${fn} = ${runtimeTemplate.basicFunction("exports, definition", [
				"for(var key in definition) {",
				Template.indent([
					`if(${RuntimeGlobals.hasOwnProperty}(definition, key) && !${RuntimeGlobals.hasOwnProperty}(exports, key)) {`,
					Template.indent([
						"Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });"
					]),
					"}"
				]),
				"}"
			])};`
		]);
	}
}

module.exports = DefinePropertyGettersRuntimeModule;

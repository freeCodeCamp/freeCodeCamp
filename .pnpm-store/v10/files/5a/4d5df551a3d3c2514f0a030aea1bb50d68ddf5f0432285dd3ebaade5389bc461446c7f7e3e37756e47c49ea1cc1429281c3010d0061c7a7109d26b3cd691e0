/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const HelperRuntimeModule = require("./HelperRuntimeModule");

/** @typedef {import("../Compilation")} Compilation */

class CompatGetDefaultExportRuntimeModule extends HelperRuntimeModule {
	constructor() {
		super("compat get default export");
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate } = compilation;
		const fn = RuntimeGlobals.compatGetDefaultExport;
		return Template.asString([
			"// getDefaultExport function for compatibility with non-harmony modules",
			`${fn} = ${runtimeTemplate.basicFunction("module", [
				"var getter = module && module.__esModule ?",
				Template.indent([
					`${runtimeTemplate.returningFunction("module['default']")} :`,
					`${runtimeTemplate.returningFunction("module")};`
				]),
				`${RuntimeGlobals.definePropertyGetters}(getter, { a: getter });`,
				"return getter;"
			])};`
		]);
	}
}

module.exports = CompatGetDefaultExportRuntimeModule;

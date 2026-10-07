/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const HelperRuntimeModule = require("./HelperRuntimeModule");

/** @typedef {import("../Compilation")} Compilation */

class CreateScriptRuntimeModule extends HelperRuntimeModule {
	constructor() {
		super("trusted types script");
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate, outputOptions } = compilation;
		const { trustedTypes } = outputOptions;
		const fn = RuntimeGlobals.createScript;

		return Template.asString(
			`${fn} = ${runtimeTemplate.returningFunction(
				trustedTypes
					? `${RuntimeGlobals.getTrustedTypesPolicy}().createScript(script)`
					: "script",
				"script"
			)};`
		);
	}
}

module.exports = CreateScriptRuntimeModule;

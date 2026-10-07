/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const HelperRuntimeModule = require("./HelperRuntimeModule");

/** @typedef {import("../Compilation")} Compilation */

class CreateScriptUrlRuntimeModule extends HelperRuntimeModule {
	constructor() {
		super("trusted types script url");
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate, outputOptions } = compilation;
		const { trustedTypes } = outputOptions;
		const fn = RuntimeGlobals.createScriptUrl;

		return Template.asString(
			`${fn} = ${runtimeTemplate.returningFunction(
				trustedTypes
					? `${RuntimeGlobals.getTrustedTypesPolicy}().createScriptURL(url)`
					: "url",
				"url"
			)};`
		);
	}
}

module.exports = CreateScriptUrlRuntimeModule;

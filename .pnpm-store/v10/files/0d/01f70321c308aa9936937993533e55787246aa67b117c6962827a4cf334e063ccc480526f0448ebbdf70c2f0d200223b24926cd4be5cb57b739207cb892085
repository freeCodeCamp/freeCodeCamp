/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sergey Melyukov @smelukov
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");

/** @typedef {import("../Compilation")} Compilation */

class HasOwnPropertyRuntimeModule extends RuntimeModule {
	constructor() {
		super("hasOwnProperty shorthand");
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate } = compilation;

		return Template.asString([
			`${RuntimeGlobals.hasOwnProperty} = ${runtimeTemplate.returningFunction(
				"Object.prototype.hasOwnProperty.call(obj, prop)",
				"obj, prop"
			)}`
		]);
	}
}

module.exports = HasOwnPropertyRuntimeModule;

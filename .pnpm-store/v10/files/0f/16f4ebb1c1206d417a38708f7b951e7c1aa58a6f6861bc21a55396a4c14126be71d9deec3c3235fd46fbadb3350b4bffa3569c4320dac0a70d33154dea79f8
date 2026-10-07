/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Florent Cailhol @ooflorent
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");

class SystemRuntimeModule extends RuntimeModule {
	constructor() {
		super("system");
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		return Template.asString([
			`${RuntimeGlobals.system} = {`,
			Template.indent([
				"import: function () {",
				Template.indent(
					"throw new Error('System.import cannot be used indirectly');"
				),
				"}"
			]),
			"};"
		]);
	}
}

module.exports = SystemRuntimeModule;

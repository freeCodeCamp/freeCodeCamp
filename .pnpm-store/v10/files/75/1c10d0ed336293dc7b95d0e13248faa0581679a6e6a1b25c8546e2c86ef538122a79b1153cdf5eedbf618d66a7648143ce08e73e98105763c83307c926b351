/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");

class AMDDefineRuntimeModule extends RuntimeModule {
	constructor() {
		super("amd define");
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		return Template.asString([
			`${RuntimeGlobals.amdDefine} = function () {`,
			Template.indent("throw new Error('define cannot be used indirect');"),
			"};"
		]);
	}
}

class AMDOptionsRuntimeModule extends RuntimeModule {
	/**
	 * @param {Record<string, boolean | number | string>} options the AMD options
	 */
	constructor(options) {
		super("amd options");
		this.options = options;
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		return Template.asString([
			`${RuntimeGlobals.amdOptions} = ${JSON.stringify(this.options)};`
		]);
	}
}

module.exports.AMDDefineRuntimeModule = AMDDefineRuntimeModule;
module.exports.AMDOptionsRuntimeModule = AMDOptionsRuntimeModule;

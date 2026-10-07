/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");

class ExportWebpackRequireRuntimeModule extends RuntimeModule {
	constructor() {
		super("export webpack runtime", RuntimeModule.STAGE_ATTACH);
	}

	/**
	 * Returns true, if the runtime module should get it's own scope.
	 * @returns {boolean} true, if the runtime module should get it's own scope
	 */
	shouldIsolate() {
		return false;
	}

	/**
	 * Generates runtime code for this runtime module.
	 * @returns {string | null} runtime code
	 */
	generate() {
		return `export { ${RuntimeGlobals.require} };`;
	}
}

module.exports = ExportWebpackRequireRuntimeModule;

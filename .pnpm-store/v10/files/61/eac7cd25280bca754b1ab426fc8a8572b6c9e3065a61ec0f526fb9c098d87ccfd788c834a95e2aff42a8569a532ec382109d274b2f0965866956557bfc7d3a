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
	 * @returns {boolean} true, if the runtime module should get it's own scope
	 */
	shouldIsolate() {
		return false;
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		return `export default ${RuntimeGlobals.require};`;
	}
}

module.exports = ExportWebpackRequireRuntimeModule;

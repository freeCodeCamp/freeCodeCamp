/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");

class HotModuleReplacementRuntimeModule extends RuntimeModule {
	constructor() {
		super("hot module replacement", RuntimeModule.STAGE_BASIC);
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		return Template.getFunctionContent(
			require("./HotModuleReplacement.runtime.js")
		)
			.replace(
				/\$interceptModuleExecution\$/g,
				RuntimeGlobals.interceptModuleExecution
			)
			.replace(/\$moduleCache\$/g, RuntimeGlobals.moduleCache)
			.replace(/\$hmrModuleData\$/g, RuntimeGlobals.hmrModuleData)
			.replace(/\$hmrDownloadManifest\$/g, RuntimeGlobals.hmrDownloadManifest)
			.replace(
				/\$hmrInvalidateModuleHandlers\$/g,
				RuntimeGlobals.hmrInvalidateModuleHandlers
			)
			.replace(
				/\$hmrDownloadUpdateHandlers\$/g,
				RuntimeGlobals.hmrDownloadUpdateHandlers
			);
	}
}

module.exports = HotModuleReplacementRuntimeModule;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");

class SystemContextRuntimeModule extends RuntimeModule {
	constructor() {
		super("__system_context__");
	}

	/**
	 * Generates runtime code for this runtime module.
	 * @returns {string | null} runtime code
	 */
	generate() {
		return `${RuntimeGlobals.systemContext} = __system_context__;`;
	}
}

module.exports = SystemContextRuntimeModule;

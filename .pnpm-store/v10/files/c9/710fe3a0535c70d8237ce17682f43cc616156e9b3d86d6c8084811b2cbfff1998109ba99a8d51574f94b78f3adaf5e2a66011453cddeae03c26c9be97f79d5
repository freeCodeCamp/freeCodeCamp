/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");

class NonceRuntimeModule extends RuntimeModule {
	constructor() {
		super("nonce", RuntimeModule.STAGE_ATTACH);
	}

	/**
	 * Generates runtime code for this runtime module.
	 * @returns {string | null} runtime code
	 */
	generate() {
		return `${RuntimeGlobals.scriptNonce} = undefined;`;
	}
}

module.exports = NonceRuntimeModule;

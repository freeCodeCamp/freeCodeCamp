/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");

class ChunkNameRuntimeModule extends RuntimeModule {
	/**
	 * @param {string} chunkName the chunk's name
	 */
	constructor(chunkName) {
		super("chunkName");
		this.chunkName = chunkName;
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		return `${RuntimeGlobals.chunkName} = ${JSON.stringify(this.chunkName)};`;
	}
}

module.exports = ChunkNameRuntimeModule;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");

/** @typedef {import("../../declarations/WebpackOptions").OutputNormalized} OutputOptions */
/** @typedef {import("../Compilation")} Compilation */

class PublicPathRuntimeModule extends RuntimeModule {
	/**
	 * @param {OutputOptions["publicPath"]} publicPath public path
	 */
	constructor(publicPath) {
		super("publicPath", RuntimeModule.STAGE_BASIC);
		this.publicPath = publicPath;
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const { publicPath } = this;
		const compilation = /** @type {Compilation} */ (this.compilation);

		return `${RuntimeGlobals.publicPath} = ${JSON.stringify(
			compilation.getPath(publicPath || "", {
				hash: compilation.hash || "XXXX"
			})
		)};`;
	}
}

module.exports = PublicPathRuntimeModule;

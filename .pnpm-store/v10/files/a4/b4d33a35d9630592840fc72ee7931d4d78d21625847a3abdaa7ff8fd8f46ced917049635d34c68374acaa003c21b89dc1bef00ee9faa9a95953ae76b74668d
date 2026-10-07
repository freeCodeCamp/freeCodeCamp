/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compilation")} Compilation */

class GetMainFilenameRuntimeModule extends RuntimeModule {
	/**
	 * @param {string} name readable name
	 * @param {string} global global object binding
	 * @param {string} filename main file name
	 */
	constructor(name, global, filename) {
		super(`get ${name} filename`);
		this.global = global;
		this.filename = filename;
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const { global, filename } = this;
		const compilation = /** @type {Compilation} */ (this.compilation);
		const chunk = /** @type {Chunk} */ (this.chunk);
		const { runtimeTemplate } = compilation;
		const url = compilation.getPath(JSON.stringify(filename), {
			hash: `" + ${RuntimeGlobals.getFullHash}() + "`,
			hashWithLength: length =>
				`" + ${RuntimeGlobals.getFullHash}().slice(0, ${length}) + "`,
			chunk,
			runtime: chunk.runtime
		});
		return Template.asString([
			`${global} = ${runtimeTemplate.returningFunction(url)};`
		]);
	}
}

module.exports = GetMainFilenameRuntimeModule;

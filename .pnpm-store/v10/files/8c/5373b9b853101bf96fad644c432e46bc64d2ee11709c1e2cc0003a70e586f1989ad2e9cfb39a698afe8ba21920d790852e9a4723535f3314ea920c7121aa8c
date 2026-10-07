/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const RuntimeModule = require("../RuntimeModule");
const Template = require("../Template");

/** @typedef {import("../Compilation")} Compilation */

class OnChunksLoadedRuntimeModule extends RuntimeModule {
	constructor() {
		super("chunk loaded");
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate } = compilation;
		return Template.asString([
			"var deferred = [];",
			`${RuntimeGlobals.onChunksLoaded} = ${runtimeTemplate.basicFunction(
				"result, chunkIds, fn, priority",
				[
					"if(chunkIds) {",
					Template.indent([
						"priority = priority || 0;",
						"for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];",
						"deferred[i] = [chunkIds, fn, priority];",
						"return;"
					]),
					"}",
					"var notFulfilled = Infinity;",
					"for (var i = 0; i < deferred.length; i++) {",
					Template.indent([
						runtimeTemplate.destructureArray(
							["chunkIds", "fn", "priority"],
							"deferred[i]"
						),
						"var fulfilled = true;",
						"for (var j = 0; j < chunkIds.length; j++) {",
						Template.indent([
							`if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(${
								RuntimeGlobals.onChunksLoaded
							}).every(${runtimeTemplate.returningFunction(
								`${RuntimeGlobals.onChunksLoaded}[key](chunkIds[j])`,
								"key"
							)})) {`,
							Template.indent(["chunkIds.splice(j--, 1);"]),
							"} else {",
							Template.indent([
								"fulfilled = false;",
								"if(priority < notFulfilled) notFulfilled = priority;"
							]),
							"}"
						]),
						"}",
						"if(fulfilled) {",
						Template.indent([
							"deferred.splice(i--, 1)",
							"var r = fn();",
							"if (r !== undefined) result = r;"
						]),
						"}"
					]),
					"}",
					"return result;"
				]
			)};`
		]);
	}
}

module.exports = OnChunksLoadedRuntimeModule;

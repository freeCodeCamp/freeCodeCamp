/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ArrayPushCallbackChunkFormatPlugin = require("../javascript/ArrayPushCallbackChunkFormatPlugin");
const EnableChunkLoadingPlugin = require("../javascript/EnableChunkLoadingPlugin");
const JsonpChunkLoadingRuntimeModule = require("./JsonpChunkLoadingRuntimeModule");

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compiler")} Compiler */

class JsonpTemplatePlugin {
	/**
	 * @deprecated use JsonpChunkLoadingRuntimeModule.getCompilationHooks instead
	 * @param {Compilation} compilation the compilation
	 * @returns {JsonpChunkLoadingRuntimeModule.JsonpCompilationPluginHooks} hooks
	 */
	static getCompilationHooks(compilation) {
		return JsonpChunkLoadingRuntimeModule.getCompilationHooks(compilation);
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.options.output.chunkLoading = "jsonp";
		new ArrayPushCallbackChunkFormatPlugin().apply(compiler);
		new EnableChunkLoadingPlugin("jsonp").apply(compiler);
	}
}

module.exports = JsonpTemplatePlugin;

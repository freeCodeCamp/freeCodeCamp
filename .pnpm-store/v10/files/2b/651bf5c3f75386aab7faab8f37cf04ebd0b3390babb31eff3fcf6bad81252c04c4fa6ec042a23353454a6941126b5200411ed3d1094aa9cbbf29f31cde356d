/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ArrayPushCallbackChunkFormatPlugin = require("../javascript/ArrayPushCallbackChunkFormatPlugin");
const EnableChunkLoadingPlugin = require("../javascript/EnableChunkLoadingPlugin");
const JsonpChunkLoadingRuntimeModule = require("./JsonpChunkLoadingRuntimeModule");

/** @typedef {import("../Compilation")} Compilation */
/** @typedef {import("../Compiler")} Compiler */

// TODO webpack 6 remove this class
class JsonpTemplatePlugin {
	/**
	 * Returns hooks.
	 * @deprecated use JsonpChunkLoadingRuntimeModule.getCompilationHooks instead
	 * @param {Compilation} compilation the compilation
	 * @returns {JsonpChunkLoadingRuntimeModule.JsonpCompilationPluginHooks} hooks
	 */
	static getCompilationHooks(compilation) {
		return JsonpChunkLoadingRuntimeModule.getCompilationHooks(compilation);
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
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

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const CommonJsChunkFormatPlugin = require("../javascript/CommonJsChunkFormatPlugin");
const EnableChunkLoadingPlugin = require("../javascript/EnableChunkLoadingPlugin");

/** @typedef {import("../Compiler")} Compiler */

/**
 * Represents the node template plugin runtime component.
 * @typedef {object} NodeTemplatePluginOptions
 * @property {boolean=} asyncChunkLoading enable async chunk loading
 */

class NodeTemplatePlugin {
	/**
	 * Creates an instance of NodeTemplatePlugin.
	 * @param {NodeTemplatePluginOptions=} options options object
	 */
	constructor(options = {}) {
		/** @type {NodeTemplatePluginOptions} */
		this._options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const chunkLoading = this._options.asyncChunkLoading
			? "async-node"
			: "require";
		compiler.options.output.chunkLoading = chunkLoading;
		new CommonJsChunkFormatPlugin().apply(compiler);
		new EnableChunkLoadingPlugin(chunkLoading).apply(compiler);
	}
}

module.exports = NodeTemplatePlugin;

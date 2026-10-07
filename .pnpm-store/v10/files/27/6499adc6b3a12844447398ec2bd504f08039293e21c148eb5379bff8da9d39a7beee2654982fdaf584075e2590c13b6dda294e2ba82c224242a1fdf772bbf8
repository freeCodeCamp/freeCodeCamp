/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const EnableLibraryPlugin = require("./library/EnableLibraryPlugin");

/** @typedef {import("../declarations/WebpackOptions").AuxiliaryComment} AuxiliaryComment */
/** @typedef {import("../declarations/WebpackOptions").LibraryExport} LibraryExport */
/** @typedef {import("../declarations/WebpackOptions").LibraryName} LibraryName */
/** @typedef {import("../declarations/WebpackOptions").LibraryType} LibraryType */
/** @typedef {import("../declarations/WebpackOptions").UmdNamedDefine} UmdNamedDefine */
/** @typedef {import("./Compiler")} Compiler */

// TODO webpack 6 remove
class LibraryTemplatePlugin {
	/**
	 * @param {LibraryName} name name of library
	 * @param {LibraryType} target type of library
	 * @param {UmdNamedDefine} umdNamedDefine setting this to true will name the UMD module
	 * @param {AuxiliaryComment} auxiliaryComment comment in the UMD wrapper
	 * @param {LibraryExport} exportProperty which export should be exposed as library
	 */
	constructor(name, target, umdNamedDefine, auxiliaryComment, exportProperty) {
		this.library = {
			type: target || "var",
			name,
			umdNamedDefine,
			auxiliaryComment,
			export: exportProperty
		};
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const { output } = compiler.options;
		output.library = this.library;
		new EnableLibraryPlugin(this.library.type).apply(compiler);
	}
}

module.exports = LibraryTemplatePlugin;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Generator = require("../Generator");
const { WEBASSEMBLY_TYPES } = require("../ModuleSourceTypesConstants");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../NormalModule")} NormalModule */

/**
 * @typedef {object} AsyncWebAssemblyGeneratorOptions
 * @property {boolean} [mangleImports] mangle imports
 */

class AsyncWebAssemblyGenerator extends Generator {
	/**
	 * @param {AsyncWebAssemblyGeneratorOptions} options options
	 */
	constructor(options) {
		super();
		this.options = options;
	}

	/**
	 * @param {NormalModule} module fresh module
	 * @returns {SourceTypes} available types (do not mutate)
	 */
	getTypes(module) {
		return WEBASSEMBLY_TYPES;
	}

	/**
	 * @param {NormalModule} module the module
	 * @param {string=} type source type
	 * @returns {number} estimate size of the module
	 */
	getSize(module, type) {
		const originalSource = module.originalSource();
		if (!originalSource) {
			return 0;
		}
		return originalSource.size();
	}

	/**
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source | null} generated code
	 */
	generate(module, generateContext) {
		return /** @type {Source} */ (module.originalSource());
	}
}

module.exports = AsyncWebAssemblyGenerator;

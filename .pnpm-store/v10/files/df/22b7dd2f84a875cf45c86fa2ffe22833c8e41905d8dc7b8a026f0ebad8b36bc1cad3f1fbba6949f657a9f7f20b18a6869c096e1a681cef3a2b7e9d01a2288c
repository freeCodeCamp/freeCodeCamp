/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { RawSource } = require("webpack-sources");
const Generator = require("../Generator");
const { WEBASSEMBLY_TYPES } = require("../ModuleSourceTypeConstants");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */
/** @typedef {import("../Module").SourceType} SourceType */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../NormalModule")} NormalModule */

/**
 * Represents the async web assembly generator runtime component.
 * @typedef {object} AsyncWebAssemblyGeneratorOptions
 * @property {boolean=} mangleImports mangle imports
 */

class AsyncWebAssemblyGenerator extends Generator {
	/**
	 * Creates an instance of AsyncWebAssemblyGenerator.
	 * @param {AsyncWebAssemblyGeneratorOptions} options options
	 */
	constructor(options) {
		super();
		/** @type {AsyncWebAssemblyGeneratorOptions} */
		this.options = options;
	}

	/**
	 * Returns the source types available for this module.
	 * @param {NormalModule} module fresh module
	 * @returns {SourceTypes} available types (do not mutate)
	 */
	getTypes(module) {
		return WEBASSEMBLY_TYPES;
	}

	/**
	 * Returns the estimated size for the requested source type.
	 * @param {NormalModule} module the module
	 * @param {SourceType=} type source type
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
	 * Generates generated code for this runtime module.
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source | null} generated code
	 */
	generate(module, generateContext) {
		return /** @type {Source} */ (module.originalSource());
	}

	/**
	 * Generates fallback output for the provided error condition.
	 * @param {Error} error the error
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source | null} generated code
	 */
	generateError(error, module, generateContext) {
		return new RawSource(error.message);
	}
}

module.exports = AsyncWebAssemblyGenerator;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./CodeGenerationResults")} CodeGenerationResults */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./ConcatenationScope")} ConcatenationScope */
/** @typedef {import("./DependencyTemplate")} DependencyTemplate */
/** @typedef {import("./DependencyTemplates")} DependencyTemplates */
/** @typedef {import("./Module").ConcatenationBailoutReasonContext} ConcatenationBailoutReasonContext */
/** @typedef {import("./Module").RuntimeRequirements} RuntimeRequirements */
/** @typedef {import("./Module").SourceTypes} SourceTypes */
/** @typedef {import("./ModuleGraph")} ModuleGraph */
/** @typedef {import("./NormalModule")} NormalModule */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./util/Hash")} Hash */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */

/**
 * @typedef {object} GenerateContext
 * @property {DependencyTemplates} dependencyTemplates mapping from dependencies to templates
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {ModuleGraph} moduleGraph the module graph
 * @property {ChunkGraph} chunkGraph the chunk graph
 * @property {RuntimeRequirements} runtimeRequirements the requirements for runtime
 * @property {RuntimeSpec} runtime the runtime
 * @property {ConcatenationScope=} concatenationScope when in concatenated module, information about other concatenated modules
 * @property {CodeGenerationResults=} codeGenerationResults code generation results of other modules (need to have a codeGenerationDependency to use that)
 * @property {string} type which kind of code should be generated
 * @property {function(): Map<string, any>=} getData get access to the code generation data
 */

/**
 * @typedef {object} UpdateHashContext
 * @property {NormalModule} module the module
 * @property {ChunkGraph} chunkGraph
 * @property {RuntimeSpec} runtime
 * @property {RuntimeTemplate=} runtimeTemplate
 */

class Generator {
	/**
	 * @param {Record<string, Generator>} map map of types
	 * @returns {ByTypeGenerator} generator by type
	 */
	static byType(map) {
		return new ByTypeGenerator(map);
	}

	/* istanbul ignore next */
	/**
	 * @abstract
	 * @param {NormalModule} module fresh module
	 * @returns {SourceTypes} available types (do not mutate)
	 */
	getTypes(module) {
		const AbstractMethodError = require("./AbstractMethodError");
		throw new AbstractMethodError();
	}

	/* istanbul ignore next */
	/**
	 * @abstract
	 * @param {NormalModule} module the module
	 * @param {string=} type source type
	 * @returns {number} estimate size of the module
	 */
	getSize(module, type) {
		const AbstractMethodError = require("./AbstractMethodError");
		throw new AbstractMethodError();
	}

	/* istanbul ignore next */
	/**
	 * @abstract
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source | null} generated code
	 */
	generate(
		module,
		{ dependencyTemplates, runtimeTemplate, moduleGraph, type }
	) {
		const AbstractMethodError = require("./AbstractMethodError");
		throw new AbstractMethodError();
	}

	/**
	 * @param {NormalModule} module module for which the bailout reason should be determined
	 * @param {ConcatenationBailoutReasonContext} context context
	 * @returns {string | undefined} reason why this module can't be concatenated, undefined when it can be concatenated
	 */
	getConcatenationBailoutReason(module, context) {
		return `Module Concatenation is not implemented for ${this.constructor.name}`;
	}

	/**
	 * @param {Hash} hash hash that will be modified
	 * @param {UpdateHashContext} updateHashContext context for updating hash
	 */
	updateHash(hash, { module, runtime }) {
		// no nothing
	}
}

class ByTypeGenerator extends Generator {
	/**
	 * @param {Record<string, Generator>} map map of types
	 */
	constructor(map) {
		super();
		this.map = map;
		this._types = new Set(Object.keys(map));
	}

	/**
	 * @param {NormalModule} module fresh module
	 * @returns {SourceTypes} available types (do not mutate)
	 */
	getTypes(module) {
		return this._types;
	}

	/**
	 * @param {NormalModule} module the module
	 * @param {string=} type source type
	 * @returns {number} estimate size of the module
	 */
	getSize(module, type = "javascript") {
		const t = type;
		const generator = this.map[t];
		return generator ? generator.getSize(module, t) : 0;
	}

	/**
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source | null} generated code
	 */
	generate(module, generateContext) {
		const type = generateContext.type;
		const generator = this.map[type];
		if (!generator) {
			throw new Error(`Generator.byType: no generator specified for ${type}`);
		}
		return generator.generate(module, generateContext);
	}
}

module.exports = Generator;

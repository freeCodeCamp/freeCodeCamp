/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { JAVASCRIPT_TYPE } = require("./ModuleSourceTypeConstants");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./CodeGenerationResults")} CodeGenerationResults */
/** @typedef {import("./ConcatenationScope")} ConcatenationScope */
/** @typedef {import("./DependencyTemplates")} DependencyTemplates */
/** @typedef {import("./Module").CodeGenerationResultData} CodeGenerationResultData */
/** @typedef {import("./Module").ConcatenationBailoutReasonContext} ConcatenationBailoutReasonContext */
/** @typedef {import("./Module").RuntimeRequirements} RuntimeRequirements */
/** @typedef {import("./Module").SourceType} SourceType */
/** @typedef {import("./Module").SourceTypes} SourceTypes */
/** @typedef {import("./ModuleGraph")} ModuleGraph */
/** @typedef {import("./NormalModule")} NormalModule */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("./util/Hash")} Hash */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */

/**
 * Defines the generate context type used by this module.
 * @typedef {object} GenerateContext
 * @property {DependencyTemplates} dependencyTemplates mapping from dependencies to templates
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {ModuleGraph} moduleGraph the module graph
 * @property {ChunkGraph} chunkGraph the chunk graph
 * @property {RuntimeRequirements} runtimeRequirements the requirements for runtime
 * @property {RuntimeSpec} runtime the runtime
 * @property {ConcatenationScope=} concatenationScope when in concatenated module, information about other concatenated modules
 * @property {CodeGenerationResults=} codeGenerationResults code generation results of other modules (need to have a codeGenerationDependency to use that)
 * @property {SourceType} type which kind of code should be generated
 * @property {() => CodeGenerationResultData=} getData get access to the code generation data
 */

/**
 * Defines the generate error fn callback.
 * @callback GenerateErrorFn
 * @param {Error} error the error
 * @param {NormalModule} module module for which the code should be generated
 * @param {GenerateContext} generateContext context for generate
 * @returns {Source | null} generated code
 */

/**
 * Represents the generator runtime component.
 * @typedef {object} UpdateHashContext
 * @property {NormalModule} module the module
 * @property {ChunkGraph} chunkGraph
 * @property {RuntimeSpec} runtime
 * @property {RuntimeTemplate=} runtimeTemplate
 */

class Generator {
	/**
	 * Returns generator by type.
	 * @param {{ [key in SourceType]?: Generator }} map map of types
	 * @returns {ByTypeGenerator} generator by type
	 */
	static byType(map) {
		return new ByTypeGenerator(map);
	}

	/* istanbul ignore next */
	/**
	 * Returns the source types available for this module.
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
	 * Returns the estimated size for the requested source type.
	 * @abstract
	 * @param {NormalModule} module the module
	 * @param {SourceType=} type source type
	 * @returns {number} estimate size of the module
	 */
	getSize(module, type) {
		const AbstractMethodError = require("./AbstractMethodError");

		throw new AbstractMethodError();
	}

	/* istanbul ignore next */
	/**
	 * Generates generated code for this runtime module.
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
	 * Returns the reason this module cannot be concatenated, when one exists.
	 * @param {NormalModule} module module for which the bailout reason should be determined
	 * @param {ConcatenationBailoutReasonContext} context context
	 * @returns {string | undefined} reason why this module can't be concatenated, undefined when it can be concatenated
	 */
	getConcatenationBailoutReason(module, context) {
		return `Module Concatenation is not implemented for ${this.constructor.name}`;
	}

	/**
	 * Updates the hash with the data contributed by this instance.
	 * @param {Hash} hash hash that will be modified
	 * @param {UpdateHashContext} updateHashContext context for updating hash
	 */
	updateHash(hash, { module, runtime }) {
		// no nothing
	}
}

/**
 * @this {ByTypeGenerator}
 * @type {GenerateErrorFn}
 */
function generateError(error, module, generateContext) {
	const type = generateContext.type;
	const generator =
		/** @type {Generator & { generateError?: GenerateErrorFn }} */
		(this.map[type]);
	if (!generator) {
		throw new Error(`Generator.byType: no generator specified for ${type}`);
	}
	if (typeof generator.generateError === "undefined") {
		return null;
	}
	return generator.generateError(error, module, generateContext);
}

class ByTypeGenerator extends Generator {
	/**
	 * Creates an instance of ByTypeGenerator.
	 * @param {{ [key in SourceType]?: Generator }} map map of types
	 */
	constructor(map) {
		super();
		this.map = map;
		this._types = /** @type {SourceTypes} */ (new Set(Object.keys(map)));
		/** @type {GenerateErrorFn | undefined} */
		this.generateError = generateError.bind(this);
	}

	/**
	 * Returns the source types available for this module.
	 * @param {NormalModule} module fresh module
	 * @returns {SourceTypes} available types (do not mutate)
	 */
	getTypes(module) {
		return this._types;
	}

	/**
	 * Returns the estimated size for the requested source type.
	 * @param {NormalModule} module the module
	 * @param {SourceType=} type source type
	 * @returns {number} estimate size of the module
	 */
	getSize(module, type = JAVASCRIPT_TYPE) {
		const t = type;
		const generator = this.map[t];
		return generator ? generator.getSize(module, t) : 0;
	}

	/**
	 * Generates generated code for this runtime module.
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

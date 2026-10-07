/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./CodeGenerationResults")} CodeGenerationResults */
/** @typedef {import("./ConcatenationScope")} ConcatenationScope */
/** @typedef {import("./Dependency")} Dependency */
/** @typedef {import("./Dependency").RuntimeSpec} RuntimeSpec */
/** @typedef {import("./DependencyTemplates")} DependencyTemplates */
/** @typedef {import("./Generator").GenerateContext} GenerateContext */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./Module").RuntimeRequirements} RuntimeRequirements */
/** @typedef {import("./ModuleGraph")} ModuleGraph */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */

/**
 * @template T
 * @typedef {import("./InitFragment")<T>} InitFragment
 */

/**
 * @typedef {object} DependencyTemplateContext
 * @property {RuntimeTemplate} runtimeTemplate the runtime template
 * @property {DependencyTemplates} dependencyTemplates the dependency templates
 * @property {ModuleGraph} moduleGraph the module graph
 * @property {ChunkGraph} chunkGraph the chunk graph
 * @property {RuntimeRequirements} runtimeRequirements the requirements for runtime
 * @property {Module} module current module
 * @property {RuntimeSpec} runtime current runtimes, for which code is generated
 * @property {InitFragment<GenerateContext>[]} initFragments mutable array of init fragments for the current module
 * @property {ConcatenationScope=} concatenationScope when in a concatenated module, information about other concatenated modules
 * @property {CodeGenerationResults} codeGenerationResults the code generation results
 * @property {InitFragment<GenerateContext>[]} chunkInitFragments chunkInitFragments
 */

/**
 * @typedef {object} CssDependencyTemplateContextExtras
 * @property {CssData} cssData the css exports data
 */

/**
 * @typedef {object} CssData
 * @property {boolean} esModule whether export __esModule
 * @property {Map<string, string>} exports the css exports
 */

/** @typedef {DependencyTemplateContext & CssDependencyTemplateContextExtras} CssDependencyTemplateContext */

class DependencyTemplate {
	/* istanbul ignore next */
	/**
	 * @abstract
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		const AbstractMethodError = require("./AbstractMethodError");
		throw new AbstractMethodError();
	}
}

module.exports = DependencyTemplate;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Dependency = require("../Dependency");
const DependencyTemplate = require("../DependencyTemplate");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency").TRANSITIVE} TRANSITIVE */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */

class NullDependency extends Dependency {
	get type() {
		return "null";
	}

	/**
	 * @returns {boolean | TRANSITIVE} true, when changes to the referenced module could affect the referencing module; TRANSITIVE, when changes to the referenced module could affect referencing modules of the referencing module
	 */
	couldAffectReferencingModule() {
		return false;
	}
}

NullDependency.Template = class NullDependencyTemplate extends (
	DependencyTemplate
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {}
};

module.exports = NullDependency;

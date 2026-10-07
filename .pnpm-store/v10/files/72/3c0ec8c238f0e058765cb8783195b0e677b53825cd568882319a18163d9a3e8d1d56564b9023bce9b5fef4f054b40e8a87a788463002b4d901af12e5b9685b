/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const Dependency = require("../Dependency");
const makeSerializable = require("../util/makeSerializable");
const CssLocalIdentifierDependency = require("./CssLocalIdentifierDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency").ExportsSpec} ExportsSpec */
/** @typedef {import("../Dependency").ReferencedExport} ReferencedExport */
/** @typedef {import("../DependencyTemplate").CssDependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../css/CssParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class CssSelfLocalIdentifierDependency extends CssLocalIdentifierDependency {
	/**
	 * @param {string} name name
	 * @param {Range} range range
	 * @param {string=} prefix prefix
	 * @param {Set<string>=} declaredSet set of declared names (will only be active when in declared set)
	 */
	constructor(name, range, prefix = "", declaredSet = undefined) {
		super(name, range, prefix);
		this.declaredSet = declaredSet;
	}

	get type() {
		return "css self local identifier";
	}

	get category() {
		return "self";
	}

	/**
	 * @returns {string | null} an identifier to merge equal requests
	 */
	getResourceIdentifier() {
		return "self";
	}

	/**
	 * Returns the exported names
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {ExportsSpec | undefined} export names
	 */
	getExports(moduleGraph) {
		if (this.declaredSet && !this.declaredSet.has(this.name)) return;
		return super.getExports(moduleGraph);
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {(string[] | ReferencedExport)[]} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		if (this.declaredSet && !this.declaredSet.has(this.name))
			return Dependency.NO_EXPORTS_REFERENCED;
		return [[this.name]];
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.declaredSet);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.declaredSet = read();
		super.deserialize(context);
	}
}

CssSelfLocalIdentifierDependency.Template = class CssSelfLocalIdentifierDependencyTemplate extends (
	CssLocalIdentifierDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		const dep = /** @type {CssSelfLocalIdentifierDependency} */ (dependency);
		if (dep.declaredSet && !dep.declaredSet.has(dep.name)) return;
		super.apply(dependency, source, templateContext);
	}
};

makeSerializable(
	CssSelfLocalIdentifierDependency,
	"webpack/lib/dependencies/CssSelfLocalIdentifierDependency"
);

module.exports = CssSelfLocalIdentifierDependency;

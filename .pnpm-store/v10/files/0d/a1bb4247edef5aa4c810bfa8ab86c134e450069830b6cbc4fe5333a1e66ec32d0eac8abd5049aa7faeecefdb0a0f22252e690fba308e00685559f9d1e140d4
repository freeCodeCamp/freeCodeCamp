/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Dependency = require("../Dependency");
const makeSerializable = require("../util/makeSerializable");
const ModuleDependency = require("./ModuleDependency");
const ModuleDependencyAsId = require("./ModuleDependencyTemplateAsId");

/** @typedef {import("../Dependency").ReferencedExport} ReferencedExport */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class RequireResolveDependency extends ModuleDependency {
	/**
	 * @param {string} request the request string
	 * @param {Range} range location in source code
	 * @param {string} [context] context
	 */
	constructor(request, range, context) {
		super(request);

		this.range = range;
		this._context = context;
	}

	get type() {
		return "require.resolve";
	}

	get category() {
		return "commonjs";
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {(string[] | ReferencedExport)[]} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		// This doesn't use any export
		return Dependency.NO_EXPORTS_REFERENCED;
	}
}

makeSerializable(
	RequireResolveDependency,
	"webpack/lib/dependencies/RequireResolveDependency"
);

RequireResolveDependency.Template = ModuleDependencyAsId;

module.exports = RequireResolveDependency;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const ContextDependency = require("./ContextDependency");
const ModuleDependencyTemplateAsRequireId = require("./ModuleDependencyTemplateAsRequireId");

/** @typedef {import("../javascript/JavascriptParser").Range} Range */

class RequireContextDependency extends ContextDependency {
	/**
	 * @param {TODO} options options
	 * @param {Range} range range
	 */
	constructor(options, range) {
		super(options);

		this.range = range;
	}

	get type() {
		return "require.context";
	}
}

makeSerializable(
	RequireContextDependency,
	"webpack/lib/dependencies/RequireContextDependency"
);

RequireContextDependency.Template = ModuleDependencyTemplateAsRequireId;

module.exports = RequireContextDependency;

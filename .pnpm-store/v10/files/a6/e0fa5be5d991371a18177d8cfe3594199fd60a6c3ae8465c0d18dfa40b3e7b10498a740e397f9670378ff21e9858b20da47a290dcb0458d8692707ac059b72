/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const ContextDependency = require("./ContextDependency");
const ModuleDependencyTemplateAsRequireId = require("./ModuleDependencyTemplateAsRequireId");

/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("./ContextDependency").ContextDependencyOptions} ContextDependencyOptions */

class ImportMetaContextDependency extends ContextDependency {
	/**
	 * @param {ContextDependencyOptions} options options
	 * @param {Range} range range
	 */
	constructor(options, range) {
		super(options);

		this.range = range;
	}

	get category() {
		return "esm";
	}

	get type() {
		return `import.meta.webpackContext ${this.options.mode}`;
	}
}

makeSerializable(
	ImportMetaContextDependency,
	"webpack/lib/dependencies/ImportMetaContextDependency"
);

ImportMetaContextDependency.Template = ModuleDependencyTemplateAsRequireId;

module.exports = ImportMetaContextDependency;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const ModuleDependency = require("./ModuleDependency");
const ModuleDependencyTemplateAsId = require("./ModuleDependencyTemplateAsId");

/** @typedef {import("../javascript/JavascriptParser").Range} Range */

class ImportMetaHotAcceptDependency extends ModuleDependency {
	/**
	 * @param {string} request the request string
	 * @param {Range} range location in source code
	 */
	constructor(request, range) {
		super(request);
		this.range = range;
		this.weak = true;
	}

	get type() {
		return "import.meta.webpackHot.accept";
	}

	get category() {
		return "esm";
	}
}

makeSerializable(
	ImportMetaHotAcceptDependency,
	"webpack/lib/dependencies/ImportMetaHotAcceptDependency"
);

ImportMetaHotAcceptDependency.Template = ModuleDependencyTemplateAsId;

module.exports = ImportMetaHotAcceptDependency;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const ModuleDependency = require("./ModuleDependency");
const ModuleDependencyTemplateAsId = require("./ModuleDependencyTemplateAsId");

/** @typedef {import("../javascript/JavascriptParser").Range} Range */

class CommonJsRequireDependency extends ModuleDependency {
	/**
	 * @param {string} request request
	 * @param {Range=} range location in source code
	 * @param {string=} context request context
	 */
	constructor(request, range, context) {
		super(request);
		this.range = range;
		this._context = context;
	}

	get type() {
		return "cjs require";
	}

	get category() {
		return "commonjs";
	}
}

CommonJsRequireDependency.Template = ModuleDependencyTemplateAsId;

makeSerializable(
	CommonJsRequireDependency,
	"webpack/lib/dependencies/CommonJsRequireDependency"
);

module.exports = CommonJsRequireDependency;

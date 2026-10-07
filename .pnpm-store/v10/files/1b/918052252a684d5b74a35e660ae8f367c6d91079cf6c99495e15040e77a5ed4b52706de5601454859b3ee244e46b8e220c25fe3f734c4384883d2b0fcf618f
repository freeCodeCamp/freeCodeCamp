/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const HarmonyImportDependency = require("./HarmonyImportDependency");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */

class HarmonyAcceptImportDependency extends HarmonyImportDependency {
	/**
	 * @param {string} request the request string
	 */
	constructor(request) {
		super(request, Number.NaN);
		this.weak = true;
	}

	get type() {
		return "harmony accept";
	}
}

makeSerializable(
	HarmonyAcceptImportDependency,
	"webpack/lib/dependencies/HarmonyAcceptImportDependency"
);

HarmonyAcceptImportDependency.Template =
	/** @type {typeof HarmonyImportDependency.Template} */ (
		NullDependency.Template
	);

module.exports = HarmonyAcceptImportDependency;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ModuleDependency = require("../dependencies/ModuleDependency");
const makeSerializable = require("../util/makeSerializable");

class ProvideForSharedDependency extends ModuleDependency {
	/**
	 * @param {string} request request string
	 */
	constructor(request) {
		super(request);
	}

	get type() {
		return "provide module for shared";
	}

	get category() {
		return "esm";
	}
}

makeSerializable(
	ProvideForSharedDependency,
	"webpack/lib/sharing/ProvideForSharedDependency"
);

module.exports = ProvideForSharedDependency;

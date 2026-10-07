/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const ModuleDependency = require("./ModuleDependency");

class DelegatedSourceDependency extends ModuleDependency {
	/**
	 * @param {string} request the request string
	 */
	constructor(request) {
		super(request);
	}

	get type() {
		return "delegated source";
	}

	get category() {
		return "esm";
	}
}

makeSerializable(
	DelegatedSourceDependency,
	"webpack/lib/dependencies/DelegatedSourceDependency"
);

module.exports = DelegatedSourceDependency;

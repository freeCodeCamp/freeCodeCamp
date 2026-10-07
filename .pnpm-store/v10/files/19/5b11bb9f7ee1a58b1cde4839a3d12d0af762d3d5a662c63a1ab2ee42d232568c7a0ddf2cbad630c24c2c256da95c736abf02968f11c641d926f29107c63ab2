/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ModuleDependency = require("../dependencies/ModuleDependency");
const makeSerializable = require("../util/makeSerializable");

class FallbackItemDependency extends ModuleDependency {
	/**
	 * @param {string} request request
	 */
	constructor(request) {
		super(request);
	}

	get type() {
		return "fallback item";
	}

	get category() {
		return "esm";
	}
}

makeSerializable(
	FallbackItemDependency,
	"webpack/lib/container/FallbackItemDependency"
);

module.exports = FallbackItemDependency;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ModuleDependency = require("../dependencies/ModuleDependency");
const makeSerializable = require("../util/makeSerializable");

class ConsumeSharedFallbackDependency extends ModuleDependency {
	/**
	 * @param {string} request the request
	 */
	constructor(request) {
		super(request);
	}

	get type() {
		return "consume shared fallback";
	}

	get category() {
		return "esm";
	}
}

makeSerializable(
	ConsumeSharedFallbackDependency,
	"webpack/lib/sharing/ConsumeSharedFallbackDependency"
);

module.exports = ConsumeSharedFallbackDependency;

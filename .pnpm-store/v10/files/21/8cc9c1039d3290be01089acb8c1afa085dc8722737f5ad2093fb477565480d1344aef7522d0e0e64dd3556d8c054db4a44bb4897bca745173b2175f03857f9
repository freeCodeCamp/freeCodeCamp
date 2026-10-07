/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ModuleDependency = require("../dependencies/ModuleDependency");
const makeSerializable = require("../util/makeSerializable");

class RemoteToExternalDependency extends ModuleDependency {
	/**
	 * @param {string} request request
	 */
	constructor(request) {
		super(request);
	}

	get type() {
		return "remote to external";
	}

	get category() {
		return "esm";
	}
}

makeSerializable(
	RemoteToExternalDependency,
	"webpack/lib/container/RemoteToExternalDependency"
);

module.exports = RemoteToExternalDependency;

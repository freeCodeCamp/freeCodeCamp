/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ModuleDependency = require("./ModuleDependency");

class PrefetchDependency extends ModuleDependency {
	/**
	 * Creates an instance of PrefetchDependency.
	 * @param {string} request the request string
	 */
	constructor(request) {
		super(request);
	}

	get type() {
		return "prefetch";
	}

	get category() {
		return "esm";
	}
}

module.exports = PrefetchDependency;

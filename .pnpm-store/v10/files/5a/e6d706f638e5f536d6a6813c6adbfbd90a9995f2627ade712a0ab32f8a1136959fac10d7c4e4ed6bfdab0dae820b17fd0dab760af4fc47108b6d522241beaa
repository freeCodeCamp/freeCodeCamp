/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ModuleDependency = require("./ModuleDependency");

/** @typedef {import("../Dependency").GetConditionFn} GetConditionFn */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../ModuleGraphConnection")} ModuleGraphConnection */
/** @typedef {import("../ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class LoaderDependency extends ModuleDependency {
	/**
	 * @param {string} request request string
	 */
	constructor(request) {
		super(request);
	}

	get type() {
		return "loader";
	}

	get category() {
		return "loader";
	}

	/**
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {null | false | GetConditionFn} function to determine if the connection is active
	 */
	getCondition(moduleGraph) {
		return false;
	}
}

module.exports = LoaderDependency;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ModuleDependency = require("./ModuleDependency");

/** @typedef {import("../Dependency").GetConditionFn} GetConditionFn */
/** @typedef {import("../ModuleGraph")} ModuleGraph */

class LoaderImportDependency extends ModuleDependency {
	/**
	 * Creates an instance of LoaderImportDependency.
	 * @param {string} request request string
	 */
	constructor(request) {
		super(request);
		this.weak = true;
	}

	get type() {
		return "loader import";
	}

	get category() {
		return "loaderImport";
	}

	/**
	 * Returns function to determine if the connection is active.
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {null | false | GetConditionFn} function to determine if the connection is active
	 */
	getCondition(moduleGraph) {
		return false;
	}
}

module.exports = LoaderImportDependency;

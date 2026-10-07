/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("./ModuleFactory").ModuleFactoryCreateData} ModuleFactoryCreateData */
/** @typedef {import("./ModuleFactory").ModuleFactoryResult} ModuleFactoryResult */
/** @typedef {import("./ModuleGraph")} ModuleGraph */

class SelfModuleFactory {
	/**
	 * @param {ModuleGraph} moduleGraph module graph
	 */
	constructor(moduleGraph) {
		this.moduleGraph = moduleGraph;
	}

	/**
	 * @param {ModuleFactoryCreateData} data data object
	 * @param {function((Error | null)=, ModuleFactoryResult=): void} callback callback
	 * @returns {void}
	 */
	create(data, callback) {
		const module = this.moduleGraph.getParentModule(data.dependencies[0]);
		callback(null, {
			module
		});
	}
}

module.exports = SelfModuleFactory;

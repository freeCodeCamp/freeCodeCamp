/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const DllModule = require("./DllModule");
const ModuleFactory = require("./ModuleFactory");

/** @typedef {import("./ModuleFactory").ModuleFactoryCallback} ModuleFactoryCallback */
/** @typedef {import("./ModuleFactory").ModuleFactoryCreateData} ModuleFactoryCreateData */
/** @typedef {import("./dependencies/DllEntryDependency")} DllEntryDependency */

class DllModuleFactory extends ModuleFactory {
	constructor() {
		super();
		this.hooks = Object.freeze({});
	}

	/**
	 * Processes the provided data.
	 * @param {ModuleFactoryCreateData} data data object
	 * @param {ModuleFactoryCallback} callback callback
	 * @returns {void}
	 */
	create(data, callback) {
		const dependency = /** @type {DllEntryDependency} */ (data.dependencies[0]);
		callback(null, {
			module: new DllModule(
				data.context,
				dependency.dependencies,
				dependency.name
			)
		});
	}
}

module.exports = DllModuleFactory;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const DllModule = require("./DllModule");
const ModuleFactory = require("./ModuleFactory");

/** @typedef {import("./ModuleFactory").ModuleFactoryCreateData} ModuleFactoryCreateData */
/** @typedef {import("./ModuleFactory").ModuleFactoryResult} ModuleFactoryResult */
/** @typedef {import("./dependencies/DllEntryDependency")} DllEntryDependency */

class DllModuleFactory extends ModuleFactory {
	constructor() {
		super();
		this.hooks = Object.freeze({});
	}

	/**
	 * @param {ModuleFactoryCreateData} data data object
	 * @param {function((Error | null)=, ModuleFactoryResult=): void} callback callback
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

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra and Zackary Jackson @ScriptedAlchemy
*/

"use strict";

const ModuleFactory = require("../ModuleFactory");
const ProvideSharedModule = require("./ProvideSharedModule");

/** @typedef {import("../ModuleFactory").ModuleFactoryCreateData} ModuleFactoryCreateData */
/** @typedef {import("../ModuleFactory").ModuleFactoryResult} ModuleFactoryResult */
/** @typedef {import("./ProvideSharedDependency")} ProvideSharedDependency */

class ProvideSharedModuleFactory extends ModuleFactory {
	/**
	 * @param {ModuleFactoryCreateData} data data object
	 * @param {function((Error | null)=, ModuleFactoryResult=): void} callback callback
	 * @returns {void}
	 */
	create(data, callback) {
		const dep = /** @type {ProvideSharedDependency} */ (data.dependencies[0]);
		callback(null, {
			module: new ProvideSharedModule(
				dep.shareScope,
				dep.name,
				dep.version,
				dep.request,
				dep.eager
			)
		});
	}
}

module.exports = ProvideSharedModuleFactory;

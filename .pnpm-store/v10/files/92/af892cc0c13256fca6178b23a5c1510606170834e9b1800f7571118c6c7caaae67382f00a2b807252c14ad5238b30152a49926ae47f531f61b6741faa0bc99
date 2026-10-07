/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra, Zackary Jackson @ScriptedAlchemy, Marais Rossouw @maraisr
*/

"use strict";

const ModuleFactory = require("../ModuleFactory");
const ContainerEntryModule = require("./ContainerEntryModule");

/** @typedef {import("../ModuleFactory").ModuleFactoryCreateData} ModuleFactoryCreateData */
/** @typedef {import("../ModuleFactory").ModuleFactoryResult} ModuleFactoryResult */
/** @typedef {import("./ContainerEntryDependency")} ContainerEntryDependency */

module.exports = class ContainerEntryModuleFactory extends ModuleFactory {
	/**
	 * @param {ModuleFactoryCreateData} data data object
	 * @param {function((Error | null)=, ModuleFactoryResult=): void} callback callback
	 * @returns {void}
	 */
	create({ dependencies: [dependency] }, callback) {
		const dep = /** @type {ContainerEntryDependency} */ (dependency);
		callback(null, {
			module: new ContainerEntryModule(dep.name, dep.exposes, dep.shareScope)
		});
	}
};

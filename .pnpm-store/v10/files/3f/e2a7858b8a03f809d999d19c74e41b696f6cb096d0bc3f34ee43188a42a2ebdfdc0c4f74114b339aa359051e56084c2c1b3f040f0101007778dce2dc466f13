/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra, Zackary Jackson @ScriptedAlchemy, Marais Rossouw @maraisr
*/

"use strict";

const ModuleFactory = require("../ModuleFactory");
const FallbackModule = require("./FallbackModule");

/** @typedef {import("../ModuleFactory").ModuleFactoryCallback} ModuleFactoryCallback */
/** @typedef {import("../ModuleFactory").ModuleFactoryCreateData} ModuleFactoryCreateData */
/** @typedef {import("./FallbackDependency")} FallbackDependency */

module.exports = class FallbackModuleFactory extends ModuleFactory {
	/**
	 * Processes the provided data.
	 * @param {ModuleFactoryCreateData} data data object
	 * @param {ModuleFactoryCallback} callback callback
	 * @returns {void}
	 */
	create({ dependencies: [dependency] }, callback) {
		const dep = /** @type {FallbackDependency} */ (dependency);
		callback(null, {
			module: new FallbackModule(dep.requests)
		});
	}
};

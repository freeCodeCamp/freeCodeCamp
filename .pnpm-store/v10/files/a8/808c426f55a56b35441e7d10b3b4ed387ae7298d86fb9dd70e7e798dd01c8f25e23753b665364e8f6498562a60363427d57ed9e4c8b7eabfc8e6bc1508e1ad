/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const ModuleFactory = require("./ModuleFactory");

/** @typedef {import("./ModuleFactory").ModuleFactoryCallback} ModuleFactoryCallback */
/** @typedef {import("./ModuleFactory").ModuleFactoryCreateData} ModuleFactoryCreateData */
/** @typedef {import("./NormalModuleFactory")} NormalModuleFactory */

/**
 * Ignores error when module is unresolved
 */
class IgnoreErrorModuleFactory extends ModuleFactory {
	/**
	 * Creates an instance of IgnoreErrorModuleFactory.
	 * @param {NormalModuleFactory} normalModuleFactory normalModuleFactory instance
	 */
	constructor(normalModuleFactory) {
		super();

		this.normalModuleFactory = normalModuleFactory;
	}

	/**
	 * Processes the provided data.
	 * @param {ModuleFactoryCreateData} data data object
	 * @param {ModuleFactoryCallback} callback callback
	 * @returns {void}
	 */
	create(data, callback) {
		this.normalModuleFactory.create(data, (err, result) =>
			callback(null, result)
		);
	}
}

module.exports = IgnoreErrorModuleFactory;

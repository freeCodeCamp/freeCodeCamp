/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ModuleFactory = require("./ModuleFactory");

/** @typedef {import("./ModuleFactory").ModuleFactoryCallback} ModuleFactoryCallback */
/** @typedef {import("./ModuleFactory").ModuleFactoryCreateData} ModuleFactoryCreateData */

class NullFactory extends ModuleFactory {
	/**
	 * Processes the provided data.
	 * @param {ModuleFactoryCreateData} data data object
	 * @param {ModuleFactoryCallback} callback callback
	 * @returns {void}
	 */
	create(data, callback) {
		return callback();
	}
}

module.exports = NullFactory;

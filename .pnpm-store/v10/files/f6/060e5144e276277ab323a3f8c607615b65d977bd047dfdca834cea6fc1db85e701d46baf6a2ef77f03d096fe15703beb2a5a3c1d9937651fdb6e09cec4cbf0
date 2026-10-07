/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../declarations/WebpackOptions").ResolveOptions} ResolveOptions */
/** @typedef {import("./Dependency")} Dependency */
/** @typedef {import("./Module")} Module */

/**
 * Defines the module factory result type used by this module.
 * @typedef {object} ModuleFactoryResult
 * @property {Module=} module the created module or unset if no module was created
 * @property {Set<string>=} fileDependencies
 * @property {Set<string>=} contextDependencies
 * @property {Set<string>=} missingDependencies
 * @property {boolean=} cacheable allow to use the unsafe cache
 */

/** @typedef {string | null} IssuerLayer */

/**
 * Defines the module factory create data context info type used by this module.
 * @typedef {object} ModuleFactoryCreateDataContextInfo
 * @property {string} issuer
 * @property {IssuerLayer} issuerLayer
 * @property {string=} compiler
 */

/**
 * Defines the module factory create data type used by this module.
 * @typedef {object} ModuleFactoryCreateData
 * @property {ModuleFactoryCreateDataContextInfo} contextInfo
 * @property {ResolveOptions=} resolveOptions
 * @property {string} context
 * @property {Dependency[]} dependencies
 */

/**
 * Represents the module factory runtime component.
 * @typedef {(err?: Error | null, result?: ModuleFactoryResult) => void} ModuleFactoryCallback
 */

class ModuleFactory {
	/* istanbul ignore next */
	/**
	 * Processes the provided data.
	 * @abstract
	 * @param {ModuleFactoryCreateData} data data object
	 * @param {ModuleFactoryCallback} callback callback
	 * @returns {void}
	 */
	create(data, callback) {
		const AbstractMethodError = require("./AbstractMethodError");

		throw new AbstractMethodError();
	}
}

module.exports = ModuleFactory;

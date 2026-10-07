/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const WebpackError = require("./WebpackError");

/** @typedef {import("./Module")} Module */
/** @typedef {import("./ModuleGraph")} ModuleGraph */

/**
 * @param {Module[]} modules the modules to be sorted
 * @returns {Module[]} sorted version of original modules
 */
const sortModules = modules =>
	modules.sort((a, b) => {
		const aIdent = a.identifier();
		const bIdent = b.identifier();
		/* istanbul ignore next */
		if (aIdent < bIdent) return -1;
		/* istanbul ignore next */
		if (aIdent > bIdent) return 1;
		/* istanbul ignore next */
		return 0;
	});

/**
 * @param {Module[]} modules each module from throw
 * @param {ModuleGraph} moduleGraph the module graph
 * @returns {string} each message from provided modules
 */
const createModulesListMessage = (modules, moduleGraph) =>
	modules
		.map(m => {
			let message = `* ${m.identifier()}`;
			const validReasons = Array.from(
				moduleGraph.getIncomingConnectionsByOriginModule(m).keys()
			).filter(Boolean);

			if (validReasons.length > 0) {
				message += `\n    Used by ${validReasons.length} module(s), i. e.`;
				message += `\n    ${
					/** @type {Module[]} */ (validReasons)[0].identifier()
				}`;
			}
			return message;
		})
		.join("\n");

class CaseSensitiveModulesWarning extends WebpackError {
	/**
	 * Creates an instance of CaseSensitiveModulesWarning.
	 * @param {Iterable<Module>} modules modules that were detected
	 * @param {ModuleGraph} moduleGraph the module graph
	 */
	constructor(modules, moduleGraph) {
		const sortedModules = sortModules(Array.from(modules));
		const modulesList = createModulesListMessage(sortedModules, moduleGraph);
		super(`There are multiple modules with names that only differ in casing.
This can lead to unexpected behavior when compiling on a filesystem with other case-semantic.
Use equal casing. Compare these module identifiers:
${modulesList}`);

		this.name = "CaseSensitiveModulesWarning";
		this.module = sortedModules[0];
	}
}

module.exports = CaseSensitiveModulesWarning;

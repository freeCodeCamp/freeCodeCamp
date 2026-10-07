/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const WebpackError = require("./WebpackError");

/** @typedef {import("./Module")} Module */
/** @typedef {import("./ModuleGraph")} ModuleGraph */

/**
 * Sorts the conflicting modules by identifier to keep warning output stable.
 * @param {Module[]} modules the modules to be sorted
 * @returns {Module[]} sorted version of original modules
 */
const sortModules = (modules) =>
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
 * Formats the conflicting modules and one representative incoming reason for
 * each module into the warning body.
 * @param {Module[]} modules each module from throw
 * @param {ModuleGraph} moduleGraph the module graph
 * @returns {string} each message from provided modules
 */
const createModulesListMessage = (modules, moduleGraph) =>
	modules
		.map((m) => {
			let message = `* ${m.identifier()}`;
			const validReasons = [
				...moduleGraph.getIncomingConnectionsByOriginModule(m).keys()
			].filter(Boolean);

			if (validReasons.length > 0) {
				message += `\n    Used by ${validReasons.length} module(s), i. e.`;
				message += `\n    ${
					/** @type {Module[]} */ (validReasons)[0].identifier()
				}`;
			}
			return message;
		})
		.join("\n");

/**
 * Warning emitted when webpack finds modules whose identifiers differ only by
 * letter casing, which can behave inconsistently across filesystems.
 */
class CaseSensitiveModulesWarning extends WebpackError {
	/**
	 * Builds a warning message that lists the case-conflicting modules and
	 * representative importers that caused them to be included.
	 * @param {Iterable<Module>} modules modules that were detected
	 * @param {ModuleGraph} moduleGraph the module graph
	 */
	constructor(modules, moduleGraph) {
		const sortedModules = sortModules([...modules]);
		const modulesList = createModulesListMessage(sortedModules, moduleGraph);
		super(`There are multiple modules with names that only differ in casing.
This can lead to unexpected behavior when compiling on a filesystem with other case-semantic.
Use equal casing. Compare these module identifiers:
${modulesList}`);

		/** @type {string} */
		this.name = "CaseSensitiveModulesWarning";
		this.module = sortedModules[0];
	}
}

module.exports = CaseSensitiveModulesWarning;

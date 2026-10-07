/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Haijie Xie @hai-x
*/

"use strict";

const HarmonyImportDependency = require("../dependencies/HarmonyImportDependency");

/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../Module")} Module */

/** @typedef {Set<Module>} Modules */

/**
 * Gets outgoing async modules.
 * @param {ModuleGraph} moduleGraph module graph
 * @param {Module} module module
 * @returns {Modules} set of modules
 */
const getOutgoingAsyncModules = (moduleGraph, module) => {
	/** @type {Modules} */
	const set = new Set();
	/** @type {Modules} */
	const seen = new Set();
	(function g(module) {
		if (!moduleGraph.isAsync(module) || seen.has(module)) return;
		seen.add(module);
		if (module.buildMeta && module.buildMeta.async) {
			set.add(module);
		} else {
			const outgoingConnectionMap =
				moduleGraph.getOutgoingConnectionsByModule(module);
			if (outgoingConnectionMap) {
				for (const [module, connections] of outgoingConnectionMap) {
					if (
						connections.some(
							(c) =>
								c.dependency instanceof HarmonyImportDependency &&
								c.isTargetActive(undefined)
						) &&
						module
					) {
						g(module);
					}
				}
			}
		}
	})(module);
	return set;
};

module.exports.getOutgoingAsyncModules = getOutgoingAsyncModules;

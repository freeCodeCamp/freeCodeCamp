/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Template = require("../Template");
const WebAssemblyImportDependency = require("../dependencies/WebAssemblyImportDependency");

/** @typedef {import("../Module")} Module */
/** @typedef {import("../ModuleGraph")} ModuleGraph */

/**
 * @typedef {object} UsedWasmDependency
 * @property {WebAssemblyImportDependency} dependency the dependency
 * @property {string} name the export name
 * @property {string} module the module name
 */

const MANGLED_MODULE = "a";

/**
 * @param {ModuleGraph} moduleGraph the module graph
 * @param {Module} module the module
 * @param {boolean | undefined} mangle mangle module and export names
 * @returns {UsedWasmDependency[]} used dependencies and (mangled) name
 */
const getUsedDependencies = (moduleGraph, module, mangle) => {
	/** @type {UsedWasmDependency[]} */
	const array = [];
	let importIndex = 0;
	for (const dep of module.dependencies) {
		if (dep instanceof WebAssemblyImportDependency) {
			if (
				dep.description.type === "GlobalType" ||
				moduleGraph.getModule(dep) === null
			) {
				continue;
			}

			const exportName = dep.name;
			// TODO add the following 3 lines when removing of ModuleExport is possible
			// const importedModule = moduleGraph.getModule(dep);
			// const usedName = importedModule && moduleGraph.getExportsInfo(importedModule).getUsedName(exportName, runtime);
			// if (usedName !== false) {
			if (mangle) {
				array.push({
					dependency: dep,
					name: Template.numberToIdentifier(importIndex++),
					module: MANGLED_MODULE
				});
			} else {
				array.push({
					dependency: dep,
					name: exportName,
					module: dep.request
				});
			}
		}
	}
	return array;
};

module.exports.getUsedDependencies = getUsedDependencies;
module.exports.MANGLED_MODULE = MANGLED_MODULE;

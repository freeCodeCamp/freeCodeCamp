/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");

/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").RuntimeRequirements} RuntimeRequirements */
/** @typedef {"exports" | "module.exports" | "this" | "Object.defineProperty(exports)" | "Object.defineProperty(module.exports)" | "Object.defineProperty(this)"} CommonJSDependencyBaseKeywords */

/**
 * @param {CommonJSDependencyBaseKeywords} depBase commonjs dependency base
 * @param {Module} module module
 * @param {RuntimeRequirements} runtimeRequirements runtime requirements
 * @returns {[string, string]} type and base
 */
module.exports.handleDependencyBase = (
	depBase,
	module,
	runtimeRequirements
) => {
	let base;
	let type;
	switch (depBase) {
		case "exports":
			runtimeRequirements.add(RuntimeGlobals.exports);
			base = module.exportsArgument;
			type = "expression";
			break;
		case "module.exports":
			runtimeRequirements.add(RuntimeGlobals.module);
			base = `${module.moduleArgument}.exports`;
			type = "expression";
			break;
		case "this":
			runtimeRequirements.add(RuntimeGlobals.thisAsExports);
			base = "this";
			type = "expression";
			break;
		case "Object.defineProperty(exports)":
			runtimeRequirements.add(RuntimeGlobals.exports);
			base = module.exportsArgument;
			type = "Object.defineProperty";
			break;
		case "Object.defineProperty(module.exports)":
			runtimeRequirements.add(RuntimeGlobals.module);
			base = `${module.moduleArgument}.exports`;
			type = "Object.defineProperty";
			break;
		case "Object.defineProperty(this)":
			runtimeRequirements.add(RuntimeGlobals.thisAsExports);
			base = "this";
			type = "Object.defineProperty";
			break;
		default:
			throw new Error(`Unsupported base ${depBase}`);
	}

	return [type, base];
};

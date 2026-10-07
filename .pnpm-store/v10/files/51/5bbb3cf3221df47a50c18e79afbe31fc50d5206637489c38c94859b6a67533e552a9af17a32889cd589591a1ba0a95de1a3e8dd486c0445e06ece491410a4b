/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const HarmonyImportDependency = require("./HarmonyImportDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").GetConditionFn} GetConditionFn */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../ModuleGraphConnection")} ModuleGraphConnection */
/** @typedef {import("../ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("../javascript/JavascriptParser").ImportAttributes} ImportAttributes */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */

class HarmonyImportSideEffectDependency extends HarmonyImportDependency {
	/**
	 * @param {string} request the request string
	 * @param {number} sourceOrder source order
	 * @param {ImportAttributes=} attributes import attributes
	 */
	constructor(request, sourceOrder, attributes) {
		super(request, sourceOrder, attributes);
	}

	get type() {
		return "harmony side effect evaluation";
	}

	/**
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {null | false | GetConditionFn} function to determine if the connection is active
	 */
	getCondition(moduleGraph) {
		return connection => {
			const refModule = connection.resolvedModule;
			if (!refModule) return true;
			return refModule.getSideEffectsConnectionState(moduleGraph);
		};
	}

	/**
	 * @param {ModuleGraph} moduleGraph the module graph
	 * @returns {ConnectionState} how this dependency connects the module to referencing modules
	 */
	getModuleEvaluationSideEffectsState(moduleGraph) {
		const refModule = moduleGraph.getModule(this);
		if (!refModule) return true;
		return refModule.getSideEffectsConnectionState(moduleGraph);
	}
}

makeSerializable(
	HarmonyImportSideEffectDependency,
	"webpack/lib/dependencies/HarmonyImportSideEffectDependency"
);

HarmonyImportSideEffectDependency.Template = class HarmonyImportSideEffectDependencyTemplate extends (
	HarmonyImportDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		const { moduleGraph, concatenationScope } = templateContext;
		if (concatenationScope) {
			const module = /** @type {Module} */ (moduleGraph.getModule(dependency));
			if (concatenationScope.isModuleInScope(module)) {
				return;
			}
		}
		super.apply(dependency, source, templateContext);
	}
};

module.exports = HarmonyImportSideEffectDependency;

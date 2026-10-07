/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const Module = require("../Module");
const { JAVASCRIPT_TYPE } = require("../ModuleSourceTypeConstants");
const makeSerializable = require("../util/makeSerializable");
const HarmonyImportDependency = require("./HarmonyImportDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").GetConditionFn} GetConditionFn */
/** @typedef {import("../DependencyTemplate").DependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../ModuleGraphConnection").ConnectionState} ConnectionState */
/** @typedef {import("../javascript/JavascriptParser").ImportAttributes} ImportAttributes */
/** @typedef {import("./ImportPhase").ImportPhaseType} ImportPhaseType */

class HarmonyImportSideEffectDependency extends HarmonyImportDependency {
	/**
	 * Creates an instance of HarmonyImportSideEffectDependency.
	 * @param {string} request the request string
	 * @param {number} sourceOrder source order
	 * @param {ImportPhaseType} phase import phase
	 * @param {ImportAttributes=} attributes import attributes
	 */
	constructor(request, sourceOrder, phase, attributes) {
		super(request, sourceOrder, phase, attributes);
	}

	get type() {
		return "harmony side effect evaluation";
	}

	/**
	 * Returns function to determine if the connection is active.
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {null | false | GetConditionFn} function to determine if the connection is active
	 */
	getCondition(moduleGraph) {
		return (connection) => {
			const refModule = connection.resolvedModule;
			if (!refModule) return true;
			return refModule.getSideEffectsConnectionState(moduleGraph);
		};
	}

	/**
	 * Gets module evaluation side effects state.
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
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		const { moduleGraph, concatenationScope } = templateContext;

		const module = /** @type {Module} */ (moduleGraph.getModule(dependency));

		if (module && !Module.getSourceBasicTypes(module).has(JAVASCRIPT_TYPE)) {
			// no need to render import
			return;
		}

		if (concatenationScope && concatenationScope.isModuleInScope(module)) {
			return;
		}
		super.apply(dependency, source, templateContext);
	}
};

module.exports = HarmonyImportSideEffectDependency;

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const EnvironmentNotSupportAsyncWarning = require("../EnvironmentNotSupportAsyncWarning");
const { JAVASCRIPT_MODULE_TYPE_ESM } = require("../ModuleTypeConstants");
const DynamicExports = require("./DynamicExports");
const HarmonyCompatibilityDependency = require("./HarmonyCompatibilityDependency");
const HarmonyExports = require("./HarmonyExports");

/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */

const PLUGIN_NAME = "HarmonyDetectionParserPlugin";

module.exports = class HarmonyDetectionParserPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {JavascriptParser} parser the parser
	 * @returns {void}
	 */
	apply(parser) {
		parser.hooks.program.tap(PLUGIN_NAME, (ast) => {
			const isStrictHarmony =
				parser.state.module.type === JAVASCRIPT_MODULE_TYPE_ESM;
			const isHarmony =
				isStrictHarmony ||
				ast.body.some(
					(statement) =>
						statement.type === "ImportDeclaration" ||
						statement.type === "ExportDefaultDeclaration" ||
						statement.type === "ExportNamedDeclaration" ||
						statement.type === "ExportAllDeclaration"
				);
			if (isHarmony) {
				const module = parser.state.module;
				const compatDep = new HarmonyCompatibilityDependency();
				compatDep.loc = {
					start: {
						line: -1,
						column: 0
					},
					end: {
						line: -1,
						column: 0
					},
					index: -3
				};
				module.addPresentationalDependency(compatDep);
				DynamicExports.bailout(parser.state);
				HarmonyExports.enable(parser.state, isStrictHarmony);
				parser.scope.isStrict = true;
			}
		});

		parser.hooks.topLevelAwait.tap(PLUGIN_NAME, () => {
			const module = parser.state.module;
			if (!HarmonyExports.isEnabled(parser.state)) {
				throw new Error(
					"Top-level-await is only supported in EcmaScript Modules"
				);
			}
			/** @type {BuildMeta} */
			(module.buildMeta).async = true;
			EnvironmentNotSupportAsyncWarning.check(
				module,
				parser.state.compilation.runtimeTemplate,
				"topLevelAwait"
			);
		});

		/**
		 * Returns true if in harmony.
		 * @returns {boolean | undefined} true if in harmony
		 */
		const skipInHarmony = () => {
			if (HarmonyExports.isEnabled(parser.state)) {
				return true;
			}
		};

		/**
		 * Returns null if in harmony.
		 * @returns {null | undefined} null if in harmony
		 */
		const nullInHarmony = () => {
			if (HarmonyExports.isEnabled(parser.state)) {
				return null;
			}
		};

		const nonHarmonyIdentifiers = ["define", "exports"];
		for (const identifier of nonHarmonyIdentifiers) {
			parser.hooks.evaluateTypeof
				.for(identifier)
				.tap(PLUGIN_NAME, nullInHarmony);
			parser.hooks.typeof.for(identifier).tap(PLUGIN_NAME, skipInHarmony);
			parser.hooks.evaluate.for(identifier).tap(PLUGIN_NAME, nullInHarmony);
			parser.hooks.expression.for(identifier).tap(PLUGIN_NAME, skipInHarmony);
			parser.hooks.call.for(identifier).tap(PLUGIN_NAME, skipInHarmony);
		}
	}
};

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
/** @typedef {import("./HarmonyModulesPlugin").HarmonyModulesPluginOptions} HarmonyModulesPluginOptions */

module.exports = class HarmonyDetectionParserPlugin {
	/**
	 * @param {HarmonyModulesPluginOptions} options options
	 */
	constructor(options) {
		const { topLevelAwait = false } = options || {};
		this.topLevelAwait = topLevelAwait;
	}

	/**
	 * @param {JavascriptParser} parser the parser
	 * @returns {void}
	 */
	apply(parser) {
		parser.hooks.program.tap("HarmonyDetectionParserPlugin", ast => {
			const isStrictHarmony =
				parser.state.module.type === JAVASCRIPT_MODULE_TYPE_ESM;
			const isHarmony =
				isStrictHarmony ||
				ast.body.some(
					statement =>
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

		parser.hooks.topLevelAwait.tap("HarmonyDetectionParserPlugin", () => {
			const module = parser.state.module;
			if (!this.topLevelAwait) {
				throw new Error(
					"The top-level-await experiment is not enabled (set experiments.topLevelAwait: true to enable it)"
				);
			}
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
		 * @returns {boolean | undefined} true if in harmony
		 */
		const skipInHarmony = () => {
			if (HarmonyExports.isEnabled(parser.state)) {
				return true;
			}
		};

		/**
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
				.tap("HarmonyDetectionParserPlugin", nullInHarmony);
			parser.hooks.typeof
				.for(identifier)
				.tap("HarmonyDetectionParserPlugin", skipInHarmony);
			parser.hooks.evaluate
				.for(identifier)
				.tap("HarmonyDetectionParserPlugin", nullInHarmony);
			parser.hooks.expression
				.for(identifier)
				.tap("HarmonyDetectionParserPlugin", skipInHarmony);
			parser.hooks.call
				.for(identifier)
				.tap("HarmonyDetectionParserPlugin", skipInHarmony);
		}
	}
};

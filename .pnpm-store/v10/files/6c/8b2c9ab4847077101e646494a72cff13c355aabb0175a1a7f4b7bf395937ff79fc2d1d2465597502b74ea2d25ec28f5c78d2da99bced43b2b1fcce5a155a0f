/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_ESM
} = require("../ModuleTypeConstants");
const CreateRequireParserPlugin = require("./CreateRequireParserPlugin");
const HarmonyAcceptDependency = require("./HarmonyAcceptDependency");
const HarmonyAcceptImportDependency = require("./HarmonyAcceptImportDependency");
const HarmonyCompatibilityDependency = require("./HarmonyCompatibilityDependency");
const HarmonyDetectionParserPlugin = require("./HarmonyDetectionParserPlugin");
const HarmonyEvaluatedImportSpecifierDependency = require("./HarmonyEvaluatedImportSpecifierDependency");
const HarmonyExportDependencyParserPlugin = require("./HarmonyExportDependencyParserPlugin");
const HarmonyExportExpressionDependency = require("./HarmonyExportExpressionDependency");
const HarmonyExportHeaderDependency = require("./HarmonyExportHeaderDependency");
const HarmonyExportImportedSpecifierDependency = require("./HarmonyExportImportedSpecifierDependency");
const HarmonyExportSpecifierDependency = require("./HarmonyExportSpecifierDependency");
const HarmonyImportDependencyParserPlugin = require("./HarmonyImportDependencyParserPlugin");
const HarmonyImportSideEffectDependency = require("./HarmonyImportSideEffectDependency");
const HarmonyImportSpecifierDependency = require("./HarmonyImportSpecifierDependency");

const HarmonyTopLevelThisParserPlugin = require("./HarmonyTopLevelThisParserPlugin");

/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../javascript/JavascriptParser")} Parser */

/**
 * Defines the harmony modules plugin options type used by this module.
 * @typedef {object} HarmonyModulesPluginOptions
 * @property {boolean=} deferImport
 */

const PLUGIN_NAME = "HarmonyModulesPlugin";

class HarmonyModulesPlugin {
	/**
	 * Creates an instance of HarmonyModulesPlugin.
	 * @param {HarmonyModulesPluginOptions} options options
	 */
	constructor(options) {
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				compilation.dependencyTemplates.set(
					HarmonyCompatibilityDependency,
					new HarmonyCompatibilityDependency.Template()
				);

				compilation.dependencyFactories.set(
					HarmonyImportSideEffectDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					HarmonyImportSideEffectDependency,
					new HarmonyImportSideEffectDependency.Template()
				);

				compilation.dependencyFactories.set(
					HarmonyImportSpecifierDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					HarmonyImportSpecifierDependency,
					new HarmonyImportSpecifierDependency.Template()
				);

				compilation.dependencyFactories.set(
					HarmonyEvaluatedImportSpecifierDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					HarmonyEvaluatedImportSpecifierDependency,
					new HarmonyEvaluatedImportSpecifierDependency.Template()
				);

				compilation.dependencyTemplates.set(
					HarmonyExportHeaderDependency,
					new HarmonyExportHeaderDependency.Template()
				);

				compilation.dependencyTemplates.set(
					HarmonyExportExpressionDependency,
					new HarmonyExportExpressionDependency.Template()
				);

				compilation.dependencyTemplates.set(
					HarmonyExportSpecifierDependency,
					new HarmonyExportSpecifierDependency.Template()
				);

				compilation.dependencyFactories.set(
					HarmonyExportImportedSpecifierDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					HarmonyExportImportedSpecifierDependency,
					new HarmonyExportImportedSpecifierDependency.Template()
				);

				compilation.dependencyTemplates.set(
					HarmonyAcceptDependency,
					new HarmonyAcceptDependency.Template()
				);

				compilation.dependencyFactories.set(
					HarmonyAcceptImportDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					HarmonyAcceptImportDependency,
					new HarmonyAcceptImportDependency.Template()
				);

				/**
				 * Handles the hook callback for this code path.
				 * @param {Parser} parser parser parser
				 * @param {JavascriptParserOptions} parserOptions parserOptions
				 * @returns {void}
				 */
				const handler = (parser, parserOptions) => {
					// TODO webpack 6: rename harmony to esm or module
					if (parserOptions.harmony !== undefined && !parserOptions.harmony) {
						return;
					}

					new HarmonyDetectionParserPlugin().apply(parser);
					new HarmonyImportDependencyParserPlugin(parserOptions).apply(parser);
					new HarmonyExportDependencyParserPlugin(parserOptions).apply(parser);
					new HarmonyTopLevelThisParserPlugin().apply(parser);
					if (parserOptions.createRequire) {
						new CreateRequireParserPlugin(parserOptions).apply(parser);
					}
				};

				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_AUTO)
					.tap(PLUGIN_NAME, handler);
				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_ESM)
					.tap(PLUGIN_NAME, handler);
			}
		);
	}
}

module.exports = HarmonyModulesPlugin;

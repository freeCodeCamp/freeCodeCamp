/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RequireEnsureDependency = require("./RequireEnsureDependency");
const RequireEnsureItemDependency = require("./RequireEnsureItemDependency");

const RequireEnsureDependenciesBlockParserPlugin = require("./RequireEnsureDependenciesBlockParserPlugin");

const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC
} = require("../ModuleTypeConstants");
const {
	evaluateToString,
	toConstantDependency
} = require("../javascript/JavascriptParserHelpers");

/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../javascript/JavascriptParser")} Parser */

const PLUGIN_NAME = "RequireEnsurePlugin";

class RequireEnsurePlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				compilation.dependencyFactories.set(
					RequireEnsureItemDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					RequireEnsureItemDependency,
					new RequireEnsureItemDependency.Template()
				);

				compilation.dependencyTemplates.set(
					RequireEnsureDependency,
					new RequireEnsureDependency.Template()
				);

				/**
				 * @param {Parser} parser parser parser
				 * @param {JavascriptParserOptions} parserOptions parserOptions
				 * @returns {void}
				 */
				const handler = (parser, parserOptions) => {
					if (
						parserOptions.requireEnsure !== undefined &&
						!parserOptions.requireEnsure
					)
						return;

					new RequireEnsureDependenciesBlockParserPlugin().apply(parser);
					parser.hooks.evaluateTypeof
						.for("require.ensure")
						.tap(PLUGIN_NAME, evaluateToString("function"));
					parser.hooks.typeof
						.for("require.ensure")
						.tap(
							PLUGIN_NAME,
							toConstantDependency(parser, JSON.stringify("function"))
						);
				};

				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_AUTO)
					.tap(PLUGIN_NAME, handler);
				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_DYNAMIC)
					.tap(PLUGIN_NAME, handler);
			}
		);
	}
}
module.exports = RequireEnsurePlugin;

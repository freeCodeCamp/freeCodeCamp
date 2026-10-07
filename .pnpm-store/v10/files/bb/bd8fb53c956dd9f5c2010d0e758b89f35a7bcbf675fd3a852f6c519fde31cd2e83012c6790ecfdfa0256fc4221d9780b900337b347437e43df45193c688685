/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC
} = require("../ModuleTypeConstants");
const RequireIncludeDependency = require("./RequireIncludeDependency");
const RequireIncludeDependencyParserPlugin = require("./RequireIncludeDependencyParserPlugin");

/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../javascript/JavascriptParser")} Parser */

const PLUGIN_NAME = "RequireIncludePlugin";

class RequireIncludePlugin {
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
					RequireIncludeDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					RequireIncludeDependency,
					new RequireIncludeDependency.Template()
				);

				/**
				 * @param {Parser} parser parser parser
				 * @param {JavascriptParserOptions} parserOptions parserOptions
				 * @returns {void}
				 */
				const handler = (parser, parserOptions) => {
					if (parserOptions.requireInclude === false) return;
					const warn = parserOptions.requireInclude === undefined;

					new RequireIncludeDependencyParserPlugin(warn).apply(parser);
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
module.exports = RequireIncludePlugin;

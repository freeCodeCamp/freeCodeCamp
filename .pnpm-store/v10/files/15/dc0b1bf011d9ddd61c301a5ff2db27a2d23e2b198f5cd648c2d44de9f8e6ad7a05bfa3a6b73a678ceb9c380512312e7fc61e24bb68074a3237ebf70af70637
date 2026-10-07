/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_ESM
} = require("../ModuleTypeConstants");

const URLContextDependency = require("../dependencies/URLContextDependency");
const URLDependency = require("../dependencies/URLDependency");
const URLParserPlugin = require("../url/URLParserPlugin");

/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */

const PLUGIN_NAME = "URLPlugin";

class URLPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler compiler
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory, contextModuleFactory }) => {
				compilation.dependencyFactories.set(URLDependency, normalModuleFactory);
				compilation.dependencyTemplates.set(
					URLDependency,
					new URLDependency.Template()
				);
				compilation.dependencyFactories.set(
					URLContextDependency,
					contextModuleFactory
				);
				compilation.dependencyTemplates.set(
					URLContextDependency,
					new URLContextDependency.Template()
				);

				/**
				 * Handles the hook callback for this code path.
				 * @param {JavascriptParser} parser parser parser
				 * @param {JavascriptParserOptions} parserOptions parserOptions
				 * @returns {void}
				 */
				const handler = (parser, parserOptions) => {
					if (parserOptions.url === false) return;
					new URLParserPlugin(parserOptions).apply(parser);
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

module.exports = URLPlugin;

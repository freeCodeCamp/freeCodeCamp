/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC,
	JAVASCRIPT_MODULE_TYPE_ESM
} = require("../ModuleTypeConstants");
const ImportContextDependency = require("./ImportContextDependency");
const ImportDependency = require("./ImportDependency");
const ImportEagerDependency = require("./ImportEagerDependency");
const ImportParserPlugin = require("./ImportParserPlugin");
const ImportWeakDependency = require("./ImportWeakDependency");

/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../javascript/JavascriptParser")} Parser */

const PLUGIN_NAME = "ImportPlugin";

class ImportPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { contextModuleFactory, normalModuleFactory }) => {
				compilation.dependencyFactories.set(
					ImportDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					ImportDependency,
					new ImportDependency.Template()
				);

				compilation.dependencyFactories.set(
					ImportEagerDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					ImportEagerDependency,
					new ImportEagerDependency.Template()
				);

				compilation.dependencyFactories.set(
					ImportWeakDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					ImportWeakDependency,
					new ImportWeakDependency.Template()
				);

				compilation.dependencyFactories.set(
					ImportContextDependency,
					contextModuleFactory
				);
				compilation.dependencyTemplates.set(
					ImportContextDependency,
					new ImportContextDependency.Template()
				);

				/**
				 * @param {Parser} parser parser parser
				 * @param {JavascriptParserOptions} parserOptions parserOptions
				 * @returns {void}
				 */
				const handler = (parser, parserOptions) => {
					if (parserOptions.import !== undefined && !parserOptions.import)
						return;

					new ImportParserPlugin(parserOptions).apply(parser);
				};

				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_AUTO)
					.tap(PLUGIN_NAME, handler);
				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_DYNAMIC)
					.tap(PLUGIN_NAME, handler);
				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_ESM)
					.tap(PLUGIN_NAME, handler);
			}
		);
	}
}
module.exports = ImportPlugin;

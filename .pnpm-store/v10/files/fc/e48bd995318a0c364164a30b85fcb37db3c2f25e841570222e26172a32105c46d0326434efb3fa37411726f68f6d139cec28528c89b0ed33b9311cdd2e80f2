/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_ESM
} = require("../ModuleTypeConstants");
const ContextElementDependency = require("./ContextElementDependency");
const ImportMetaContextDependency = require("./ImportMetaContextDependency");
const ImportMetaContextDependencyParserPlugin = require("./ImportMetaContextDependencyParserPlugin");

/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../../declarations/WebpackOptions").ResolveOptions} ResolveOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../javascript/JavascriptParser")} Parser */

const PLUGIN_NAME = "ImportMetaContextPlugin";

class ImportMetaContextPlugin {
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
					ImportMetaContextDependency,
					contextModuleFactory
				);
				compilation.dependencyTemplates.set(
					ImportMetaContextDependency,
					new ImportMetaContextDependency.Template()
				);
				compilation.dependencyFactories.set(
					ContextElementDependency,
					normalModuleFactory
				);

				/**
				 * @param {Parser} parser parser parser
				 * @param {JavascriptParserOptions} parserOptions parserOptions
				 * @returns {void}
				 */
				const handler = (parser, parserOptions) => {
					if (
						parserOptions.importMetaContext !== undefined &&
						!parserOptions.importMetaContext
					)
						return;

					new ImportMetaContextDependencyParserPlugin().apply(parser);
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

module.exports = ImportMetaContextPlugin;

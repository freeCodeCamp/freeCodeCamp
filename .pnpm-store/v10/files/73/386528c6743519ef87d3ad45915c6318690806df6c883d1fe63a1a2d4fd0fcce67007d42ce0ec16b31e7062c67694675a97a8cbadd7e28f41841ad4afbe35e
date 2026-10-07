/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC,
	JAVASCRIPT_MODULE_TYPE_ESM
} = require("./ModuleTypeConstants");
const ConstDependency = require("./dependencies/ConstDependency");
const ProvidedDependency = require("./dependencies/ProvidedDependency");
const { approve } = require("./javascript/JavascriptParserHelpers");

/** @typedef {import("../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("./javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("./javascript/JavascriptParser").Range} Range */

const PLUGIN_NAME = "ProvidePlugin";

class ProvidePlugin {
	/**
	 * @param {Record<string, string | string[]>} definitions the provided identifiers
	 */
	constructor(definitions) {
		this.definitions = definitions;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const definitions = this.definitions;
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				compilation.dependencyTemplates.set(
					ConstDependency,
					new ConstDependency.Template()
				);
				compilation.dependencyFactories.set(
					ProvidedDependency,
					normalModuleFactory
				);
				compilation.dependencyTemplates.set(
					ProvidedDependency,
					new ProvidedDependency.Template()
				);
				/**
				 * @param {JavascriptParser} parser the parser
				 * @param {JavascriptParserOptions} parserOptions options
				 * @returns {void}
				 */
				const handler = (parser, parserOptions) => {
					for (const name of Object.keys(definitions)) {
						const request =
							/** @type {string[]} */
							([]).concat(definitions[name]);
						const splittedName = name.split(".");
						if (splittedName.length > 0) {
							for (const [i, _] of splittedName.slice(1).entries()) {
								const name = splittedName.slice(0, i + 1).join(".");
								parser.hooks.canRename.for(name).tap(PLUGIN_NAME, approve);
							}
						}

						parser.hooks.expression.for(name).tap(PLUGIN_NAME, expr => {
							const nameIdentifier = name.includes(".")
								? `__webpack_provided_${name.replace(/\./g, "_dot_")}`
								: name;
							const dep = new ProvidedDependency(
								request[0],
								nameIdentifier,
								request.slice(1),
								/** @type {Range} */ (expr.range)
							);
							dep.loc = /** @type {DependencyLocation} */ (expr.loc);
							parser.state.module.addDependency(dep);
							return true;
						});

						parser.hooks.call.for(name).tap(PLUGIN_NAME, expr => {
							const nameIdentifier = name.includes(".")
								? `__webpack_provided_${name.replace(/\./g, "_dot_")}`
								: name;
							const dep = new ProvidedDependency(
								request[0],
								nameIdentifier,
								request.slice(1),
								/** @type {Range} */ (expr.callee.range)
							);
							dep.loc = /** @type {DependencyLocation} */ (expr.callee.loc);
							parser.state.module.addDependency(dep);
							parser.walkExpressions(expr.arguments);
							return true;
						});
					}
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

module.exports = ProvidePlugin;

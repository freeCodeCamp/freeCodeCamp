/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const IgnoreErrorModuleFactory = require("./IgnoreErrorModuleFactory");
const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_DYNAMIC,
	JAVASCRIPT_MODULE_TYPE_ESM
} = require("./ModuleTypeConstants");
const WebpackIsIncludedDependency = require("./dependencies/WebpackIsIncludedDependency");
const {
	toConstantDependency
} = require("./javascript/JavascriptParserHelpers");

/** @typedef {import("enhanced-resolve").Resolver} Resolver */
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("./javascript/JavascriptParser").Range} Range */

const PLUGIN_NAME = "WebpackIsIncludedPlugin";

class WebpackIsIncludedPlugin {
	/**
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				compilation.dependencyFactories.set(
					WebpackIsIncludedDependency,
					new IgnoreErrorModuleFactory(normalModuleFactory)
				);
				compilation.dependencyTemplates.set(
					WebpackIsIncludedDependency,
					new WebpackIsIncludedDependency.Template()
				);

				/**
				 * @param {JavascriptParser} parser the parser
				 * @returns {void}
				 */
				const handler = parser => {
					parser.hooks.call
						.for("__webpack_is_included__")
						.tap(PLUGIN_NAME, expr => {
							if (
								expr.type !== "CallExpression" ||
								expr.arguments.length !== 1 ||
								expr.arguments[0].type === "SpreadElement"
							)
								return;

							const request = parser.evaluateExpression(expr.arguments[0]);

							if (!request.isString()) return;

							const dep = new WebpackIsIncludedDependency(
								/** @type {string} */ (request.string),
								/** @type {Range} */ (expr.range)
							);
							dep.loc = /** @type {DependencyLocation} */ (expr.loc);
							parser.state.module.addDependency(dep);
							return true;
						});
					parser.hooks.typeof
						.for("__webpack_is_included__")
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
				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_ESM)
					.tap(PLUGIN_NAME, handler);
			}
		);
	}
}

module.exports = WebpackIsIncludedPlugin;

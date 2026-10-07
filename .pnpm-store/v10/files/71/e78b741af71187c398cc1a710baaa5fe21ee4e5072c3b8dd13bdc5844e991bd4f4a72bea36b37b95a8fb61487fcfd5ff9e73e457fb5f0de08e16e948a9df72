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
const ExportsInfoDependency = require("./dependencies/ExportsInfoDependency");

/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("./javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("./javascript/JavascriptParser").Range} Range */

const PLUGIN_NAME = "ExportsInfoApiPlugin";

class ExportsInfoApiPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				compilation.dependencyTemplates.set(
					ExportsInfoDependency,
					new ExportsInfoDependency.Template()
				);
				/**
				 * @param {JavascriptParser} parser the parser
				 * @returns {void}
				 */
				const handler = parser => {
					parser.hooks.expressionMemberChain
						.for("__webpack_exports_info__")
						.tap(PLUGIN_NAME, (expr, members) => {
							const dep =
								members.length >= 2
									? new ExportsInfoDependency(
											/** @type {Range} */ (expr.range),
											members.slice(0, -1),
											members[members.length - 1]
										)
									: new ExportsInfoDependency(
											/** @type {Range} */ (expr.range),
											null,
											members[0]
										);
							dep.loc = /** @type {DependencyLocation} */ (expr.loc);
							parser.state.module.addDependency(dep);
							return true;
						});
					parser.hooks.expression
						.for("__webpack_exports_info__")
						.tap(PLUGIN_NAME, expr => {
							const dep = new ConstDependency(
								"true",
								/** @type {Range} */ (expr.range)
							);
							dep.loc = /** @type {DependencyLocation} */ (expr.loc);
							parser.state.module.addPresentationalDependency(dep);
							return true;
						});
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

module.exports = ExportsInfoApiPlugin;

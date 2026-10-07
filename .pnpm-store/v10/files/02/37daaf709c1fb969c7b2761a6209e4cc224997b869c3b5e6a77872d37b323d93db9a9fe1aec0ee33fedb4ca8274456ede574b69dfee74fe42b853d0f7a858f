/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const WebpackError = require("../WebpackError");
const {
	evaluateToString,
	toConstantDependency
} = require("../javascript/JavascriptParserHelpers");
const makeSerializable = require("../util/makeSerializable");
const RequireIncludeDependency = require("./RequireIncludeDependency");

/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */

const PLUGIN_NAME = "RequireIncludeDependencyParserPlugin";

module.exports = class RequireIncludeDependencyParserPlugin {
	/**
	 * Creates an instance of RequireIncludeDependencyParserPlugin.
	 * @param {boolean} warn true: warn about deprecation, false: don't warn
	 */
	constructor(warn) {
		this.warn = warn;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {JavascriptParser} parser the parser
	 * @returns {void}
	 */
	apply(parser) {
		const { warn } = this;
		parser.hooks.call.for("require.include").tap(PLUGIN_NAME, (expr) => {
			if (expr.arguments.length !== 1) return;
			const param = parser.evaluateExpression(expr.arguments[0]);
			if (!param.isString()) return;

			if (warn) {
				parser.state.module.addWarning(
					new RequireIncludeDeprecationWarning(
						/** @type {DependencyLocation} */
						(expr.loc)
					)
				);
			}

			const dep = new RequireIncludeDependency(
				/** @type {string} */ (param.string),
				/** @type {Range} */ (expr.range)
			);
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			parser.state.current.addDependency(dep);
			return true;
		});
		parser.hooks.evaluateTypeof
			.for("require.include")
			.tap(PLUGIN_NAME, (expr) => {
				if (warn) {
					parser.state.module.addWarning(
						new RequireIncludeDeprecationWarning(
							/** @type {DependencyLocation} */ (expr.loc)
						)
					);
				}
				return evaluateToString("function")(expr);
			});
		parser.hooks.typeof.for("require.include").tap(PLUGIN_NAME, (expr) => {
			if (warn) {
				parser.state.module.addWarning(
					new RequireIncludeDeprecationWarning(
						/** @type {DependencyLocation} */ (expr.loc)
					)
				);
			}
			return toConstantDependency(parser, JSON.stringify("function"))(expr);
		});
	}
};

class RequireIncludeDeprecationWarning extends WebpackError {
	/**
	 * Creates an instance of RequireIncludeDeprecationWarning.
	 * @param {DependencyLocation} loc location
	 */
	constructor(loc) {
		super("require.include() is deprecated and will be removed soon.");

		this.name = "RequireIncludeDeprecationWarning";

		this.loc = loc;
	}
}

makeSerializable(
	RequireIncludeDeprecationWarning,
	"webpack/lib/dependencies/RequireIncludeDependencyParserPlugin",
	"RequireIncludeDeprecationWarning"
);

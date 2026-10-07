/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RequireContextDependency = require("./RequireContextDependency");

/** @typedef {import("../ContextModule").ContextMode} ContextMode */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */

const PLUGIN_NAME = "RequireContextDependencyParserPlugin";

module.exports = class RequireContextDependencyParserPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {JavascriptParser} parser the parser
	 * @returns {void}
	 */
	apply(parser) {
		parser.hooks.call.for("require.context").tap(PLUGIN_NAME, (expr) => {
			let regExp = /^\.\/.*$/;
			let recursive = true;
			/** @type {ContextMode} */
			let mode = "sync";
			switch (expr.arguments.length) {
				case 4: {
					const modeExpr = parser.evaluateExpression(expr.arguments[3]);
					if (!modeExpr.isString()) return;
					mode = /** @type {ContextMode} */ (modeExpr.string);
				}
				// falls through
				case 3: {
					const regExpExpr = parser.evaluateExpression(expr.arguments[2]);
					if (!regExpExpr.isRegExp()) return;
					regExp = /** @type {RegExp} */ (regExpExpr.regExp);
				}
				// falls through
				case 2: {
					const recursiveExpr = parser.evaluateExpression(expr.arguments[1]);
					if (!recursiveExpr.isBoolean()) return;
					recursive = /** @type {boolean} */ (recursiveExpr.bool);
				}
				// falls through
				case 1: {
					const requestExpr = parser.evaluateExpression(expr.arguments[0]);
					if (!requestExpr.isString()) return;
					const dep = new RequireContextDependency(
						{
							request: /** @type {string} */ (requestExpr.string),
							recursive,
							regExp,
							mode,
							category: "commonjs"
						},
						/** @type {Range} */
						(expr.range)
					);
					dep.loc = /** @type {DependencyLocation} */ (expr.loc);
					dep.optional = Boolean(parser.scope.inTry);
					parser.state.current.addDependency(dep);
					return true;
				}
			}
		});
	}
};

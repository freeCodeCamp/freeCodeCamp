/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RequireEnsureDependenciesBlock = require("./RequireEnsureDependenciesBlock");
const RequireEnsureDependency = require("./RequireEnsureDependency");
const RequireEnsureItemDependency = require("./RequireEnsureItemDependency");
const getFunctionExpression = require("./getFunctionExpression");

/** @typedef {import("estree").Expression} Expression */
/** @typedef {import("estree").SpreadElement} SpreadElement */
/** @typedef {import("../AsyncDependenciesBlock").GroupOptions} GroupOptions */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../javascript/BasicEvaluatedExpression")} BasicEvaluatedExpression */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("./getFunctionExpression").FunctionExpressionResult} FunctionExpressionResult */

const PLUGIN_NAME = "RequireEnsureDependenciesBlockParserPlugin";

module.exports = class RequireEnsureDependenciesBlockParserPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {JavascriptParser} parser the parser
	 * @returns {void}
	 */
	apply(parser) {
		parser.hooks.call.for("require.ensure").tap(PLUGIN_NAME, (expr) => {
			/** @type {string | GroupOptions | null} */
			let chunkName = null;
			/** @type {undefined | Expression | SpreadElement} */
			let errorExpressionArg;
			/** @type {undefined | FunctionExpressionResult} */
			let errorExpression;
			switch (expr.arguments.length) {
				case 4: {
					const chunkNameExpr = parser.evaluateExpression(expr.arguments[3]);
					if (!chunkNameExpr.isString()) return;
					chunkName =
						/** @type {string} */
						(chunkNameExpr.string);
				}
				// falls through
				case 3: {
					errorExpressionArg = expr.arguments[2];
					errorExpression = getFunctionExpression(errorExpressionArg);

					if (!errorExpression && !chunkName) {
						const chunkNameExpr = parser.evaluateExpression(expr.arguments[2]);
						if (!chunkNameExpr.isString()) return;
						chunkName =
							/** @type {string} */
							(chunkNameExpr.string);
					}
				}
				// falls through
				case 2: {
					const dependenciesExpr = parser.evaluateExpression(expr.arguments[0]);
					const dependenciesItems = /** @type {BasicEvaluatedExpression[]} */ (
						dependenciesExpr.isArray()
							? dependenciesExpr.items
							: [dependenciesExpr]
					);
					const successExpressionArg = expr.arguments[1];
					const successExpression = getFunctionExpression(successExpressionArg);

					if (successExpression) {
						parser.walkExpressions(successExpression.expressions);
					}
					if (errorExpression) {
						parser.walkExpressions(errorExpression.expressions);
					}

					const depBlock = new RequireEnsureDependenciesBlock(
						chunkName,
						/** @type {DependencyLocation} */
						(expr.loc)
					);
					const errorCallbackExists =
						expr.arguments.length === 4 ||
						(!chunkName && expr.arguments.length === 3);
					const dep = new RequireEnsureDependency(
						/** @type {Range} */ (expr.range),
						/** @type {Range} */ (expr.arguments[1].range),
						errorCallbackExists &&
							/** @type {Range} */ (expr.arguments[2].range)
					);
					dep.loc = /** @type {DependencyLocation} */ (expr.loc);
					depBlock.addDependency(dep);
					const old = parser.state.current;
					parser.state.current = /** @type {EXPECTED_ANY} */ (depBlock);
					try {
						let failed = false;
						parser.inFunctionScope(true, [], () => {
							for (const ee of dependenciesItems) {
								if (ee.isString()) {
									const ensureDependency = new RequireEnsureItemDependency(
										/** @type {string} */ (ee.string)
									);
									ensureDependency.loc =
										/** @type {DependencyLocation} */
										(expr.loc);
									depBlock.addDependency(ensureDependency);
								} else {
									failed = true;
								}
							}
						});
						if (failed) {
							return;
						}
						if (successExpression) {
							if (successExpression.fn.body.type === "BlockStatement") {
								// Opt-out of Dead Control Flow detection for this block
								const oldTerminated = parser.scope.terminated;
								parser.walkStatement(successExpression.fn.body);
								parser.scope.terminated = oldTerminated;
							} else {
								parser.walkExpression(successExpression.fn.body);
							}
						}
						old.addBlock(depBlock);
					} finally {
						parser.state.current = old;
					}
					if (!successExpression) {
						parser.walkExpression(successExpressionArg);
					}
					if (errorExpression) {
						if (errorExpression.fn.body.type === "BlockStatement") {
							parser.walkStatement(errorExpression.fn.body);
						} else {
							parser.walkExpression(errorExpression.fn.body);
						}
					} else if (errorExpressionArg) {
						parser.walkExpression(errorExpressionArg);
					}
					return true;
				}
			}
		});
	}
};

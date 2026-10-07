/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const {
	JAVASCRIPT_MODULE_TYPE_AUTO,
	JAVASCRIPT_MODULE_TYPE_ESM
} = require("../ModuleTypeConstants");
const PureExpressionDependency = require("../dependencies/PureExpressionDependency");
const InnerGraph = require("./InnerGraph");

/** @typedef {import("estree").ClassDeclaration} ClassDeclaration */
/** @typedef {import("estree").ClassExpression} ClassExpression */
/** @typedef {import("estree").Expression} Expression */
/** @typedef {import("estree").Node} Node */
/** @typedef {import("estree").VariableDeclarator} VariableDeclaratorNode */
/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../dependencies/HarmonyImportSpecifierDependency")} HarmonyImportSpecifierDependency */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("./InnerGraph").InnerGraph} InnerGraph */
/** @typedef {import("./InnerGraph").TopLevelSymbol} TopLevelSymbol */

const { topLevelSymbolTag } = InnerGraph;

const PLUGIN_NAME = "InnerGraphPlugin";

class InnerGraphPlugin {
	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				const logger = compilation.getLogger("webpack.InnerGraphPlugin");

				compilation.dependencyTemplates.set(
					PureExpressionDependency,
					new PureExpressionDependency.Template()
				);

				/**
				 * @param {JavascriptParser} parser the parser
				 * @param {JavascriptParserOptions} parserOptions options
				 * @returns {void}
				 */
				const handler = (parser, parserOptions) => {
					/**
					 * @param {Expression} sup sup
					 */
					const onUsageSuper = sup => {
						InnerGraph.onUsage(parser.state, usedByExports => {
							switch (usedByExports) {
								case undefined:
								case true:
									return;
								default: {
									const dep = new PureExpressionDependency(
										/** @type {Range} */
										(sup.range)
									);
									dep.loc = /** @type {DependencyLocation} */ (sup.loc);
									dep.usedByExports = usedByExports;
									parser.state.module.addDependency(dep);
									break;
								}
							}
						});
					};

					parser.hooks.program.tap(PLUGIN_NAME, () => {
						InnerGraph.enable(parser.state);
					});

					parser.hooks.finish.tap(PLUGIN_NAME, () => {
						if (!InnerGraph.isEnabled(parser.state)) return;

						logger.time("infer dependency usage");
						InnerGraph.inferDependencyUsage(parser.state);
						logger.timeAggregate("infer dependency usage");
					});

					// During prewalking the following datastructures are filled with
					// nodes that have a TopLevelSymbol assigned and
					// variables are tagged with the assigned TopLevelSymbol

					// We differ 3 types of nodes:
					// 1. full statements (export default, function declaration)
					// 2. classes (class declaration, class expression)
					// 3. variable declarators (const x = ...)

					/** @type {WeakMap<Node, TopLevelSymbol>} */
					const statementWithTopLevelSymbol = new WeakMap();
					/** @type {WeakMap<Node, Node>} */
					const statementPurePart = new WeakMap();

					/** @type {WeakMap<ClassExpression | ClassDeclaration, TopLevelSymbol>} */
					const classWithTopLevelSymbol = new WeakMap();

					/** @type {WeakMap<VariableDeclaratorNode, TopLevelSymbol>} */
					const declWithTopLevelSymbol = new WeakMap();
					/** @type {WeakSet<VariableDeclaratorNode>} */
					const pureDeclarators = new WeakSet();

					// The following hooks are used during prewalking:

					parser.hooks.preStatement.tap(PLUGIN_NAME, statement => {
						if (!InnerGraph.isEnabled(parser.state)) return;

						if (
							parser.scope.topLevelScope === true &&
							statement.type === "FunctionDeclaration"
						) {
							const name = statement.id ? statement.id.name : "*default*";
							const fn =
								/** @type {TopLevelSymbol} */
								(InnerGraph.tagTopLevelSymbol(parser, name));
							statementWithTopLevelSymbol.set(statement, fn);
							return true;
						}
					});

					parser.hooks.blockPreStatement.tap(PLUGIN_NAME, statement => {
						if (!InnerGraph.isEnabled(parser.state)) return;

						if (parser.scope.topLevelScope === true) {
							if (
								statement.type === "ClassDeclaration" &&
								parser.isPure(
									statement,
									/** @type {Range} */ (statement.range)[0]
								)
							) {
								const name = statement.id ? statement.id.name : "*default*";
								const fn = /** @type {TopLevelSymbol} */ (
									InnerGraph.tagTopLevelSymbol(parser, name)
								);
								classWithTopLevelSymbol.set(statement, fn);
								return true;
							}
							if (statement.type === "ExportDefaultDeclaration") {
								const name = "*default*";
								const fn =
									/** @type {TopLevelSymbol} */
									(InnerGraph.tagTopLevelSymbol(parser, name));
								const decl = statement.declaration;
								if (
									(decl.type === "ClassExpression" ||
										decl.type === "ClassDeclaration") &&
									parser.isPure(
										/** @type {ClassExpression | ClassDeclaration} */
										(decl),
										/** @type {Range} */
										(decl.range)[0]
									)
								) {
									classWithTopLevelSymbol.set(
										/** @type {ClassExpression | ClassDeclaration} */
										(decl),
										fn
									);
								} else if (
									parser.isPure(
										/** @type {Expression} */
										(decl),
										/** @type {Range} */
										(statement.range)[0]
									)
								) {
									statementWithTopLevelSymbol.set(statement, fn);
									if (
										!decl.type.endsWith("FunctionExpression") &&
										!decl.type.endsWith("Declaration") &&
										decl.type !== "Literal"
									) {
										statementPurePart.set(
											statement,
											/** @type {Expression} */
											(decl)
										);
									}
								}
							}
						}
					});

					parser.hooks.preDeclarator.tap(PLUGIN_NAME, (decl, statement) => {
						if (!InnerGraph.isEnabled(parser.state)) return;
						if (
							parser.scope.topLevelScope === true &&
							decl.init &&
							decl.id.type === "Identifier"
						) {
							const name = decl.id.name;
							if (
								decl.init.type === "ClassExpression" &&
								parser.isPure(
									decl.init,
									/** @type {Range} */ (decl.id.range)[1]
								)
							) {
								const fn =
									/** @type {TopLevelSymbol} */
									(InnerGraph.tagTopLevelSymbol(parser, name));
								classWithTopLevelSymbol.set(decl.init, fn);
							} else if (
								parser.isPure(
									decl.init,
									/** @type {Range} */ (decl.id.range)[1]
								)
							) {
								const fn =
									/** @type {TopLevelSymbol} */
									(InnerGraph.tagTopLevelSymbol(parser, name));
								declWithTopLevelSymbol.set(decl, fn);
								if (
									!decl.init.type.endsWith("FunctionExpression") &&
									decl.init.type !== "Literal"
								) {
									pureDeclarators.add(decl);
								}
							}
						}
					});

					// During real walking we set the TopLevelSymbol state to the assigned
					// TopLevelSymbol by using the fill datastructures.

					// In addition to tracking TopLevelSymbols, we sometimes need to
					// add a PureExpressionDependency. This is needed to skip execution
					// of pure expressions, even when they are not dropped due to
					// minimizing. Otherwise symbols used there might not exist anymore
					// as they are removed as unused by this optimization

					// When we find a reference to a TopLevelSymbol, we register a
					// TopLevelSymbol dependency from TopLevelSymbol in state to the
					// referenced TopLevelSymbol. This way we get a graph of all
					// TopLevelSymbols.

					// The following hooks are called during walking:

					parser.hooks.statement.tap(PLUGIN_NAME, statement => {
						if (!InnerGraph.isEnabled(parser.state)) return;
						if (parser.scope.topLevelScope === true) {
							InnerGraph.setTopLevelSymbol(parser.state, undefined);

							const fn = statementWithTopLevelSymbol.get(statement);
							if (fn) {
								InnerGraph.setTopLevelSymbol(parser.state, fn);
								const purePart = statementPurePart.get(statement);
								if (purePart) {
									InnerGraph.onUsage(parser.state, usedByExports => {
										switch (usedByExports) {
											case undefined:
											case true:
												return;
											default: {
												const dep = new PureExpressionDependency(
													/** @type {Range} */ (purePart.range)
												);
												dep.loc =
													/** @type {DependencyLocation} */
													(statement.loc);
												dep.usedByExports = usedByExports;
												parser.state.module.addDependency(dep);
												break;
											}
										}
									});
								}
							}
						}
					});

					parser.hooks.classExtendsExpression.tap(
						PLUGIN_NAME,
						(expr, statement) => {
							if (!InnerGraph.isEnabled(parser.state)) return;
							if (parser.scope.topLevelScope === true) {
								const fn = classWithTopLevelSymbol.get(statement);
								if (
									fn &&
									parser.isPure(
										expr,
										statement.id
											? /** @type {Range} */ (statement.id.range)[1]
											: /** @type {Range} */ (statement.range)[0]
									)
								) {
									InnerGraph.setTopLevelSymbol(parser.state, fn);
									onUsageSuper(expr);
								}
							}
						}
					);

					parser.hooks.classBodyElement.tap(
						PLUGIN_NAME,
						(element, classDefinition) => {
							if (!InnerGraph.isEnabled(parser.state)) return;
							if (parser.scope.topLevelScope === true) {
								const fn = classWithTopLevelSymbol.get(classDefinition);
								if (fn) {
									InnerGraph.setTopLevelSymbol(parser.state, undefined);
								}
							}
						}
					);

					parser.hooks.classBodyValue.tap(
						PLUGIN_NAME,
						(expression, element, classDefinition) => {
							if (!InnerGraph.isEnabled(parser.state)) return;
							if (parser.scope.topLevelScope === true) {
								const fn = classWithTopLevelSymbol.get(classDefinition);
								if (fn) {
									if (
										!element.static ||
										parser.isPure(
											expression,
											element.key
												? /** @type {Range} */ (element.key.range)[1]
												: /** @type {Range} */ (element.range)[0]
										)
									) {
										InnerGraph.setTopLevelSymbol(parser.state, fn);
										if (element.type !== "MethodDefinition" && element.static) {
											InnerGraph.onUsage(parser.state, usedByExports => {
												switch (usedByExports) {
													case undefined:
													case true:
														return;
													default: {
														const dep = new PureExpressionDependency(
															/** @type {Range} */ (expression.range)
														);
														dep.loc =
															/** @type {DependencyLocation} */
															(expression.loc);
														dep.usedByExports = usedByExports;
														parser.state.module.addDependency(dep);
														break;
													}
												}
											});
										}
									} else {
										InnerGraph.setTopLevelSymbol(parser.state, undefined);
									}
								}
							}
						}
					);

					parser.hooks.declarator.tap(PLUGIN_NAME, (decl, statement) => {
						if (!InnerGraph.isEnabled(parser.state)) return;
						const fn = declWithTopLevelSymbol.get(decl);

						if (fn) {
							InnerGraph.setTopLevelSymbol(parser.state, fn);
							if (pureDeclarators.has(decl)) {
								if (
									/** @type {ClassExpression} */
									(decl.init).type === "ClassExpression"
								) {
									if (decl.init.superClass) {
										onUsageSuper(decl.init.superClass);
									}
								} else {
									InnerGraph.onUsage(parser.state, usedByExports => {
										switch (usedByExports) {
											case undefined:
											case true:
												return;
											default: {
												const dep = new PureExpressionDependency(
													/** @type {Range} */ (
														/** @type {ClassExpression} */
														(decl.init).range
													)
												);
												dep.loc = /** @type {DependencyLocation} */ (decl.loc);
												dep.usedByExports = usedByExports;
												parser.state.module.addDependency(dep);
												break;
											}
										}
									});
								}
							}
							parser.walkExpression(decl.init);
							InnerGraph.setTopLevelSymbol(parser.state, undefined);
							return true;
						} else if (
							decl.id.type === "Identifier" &&
							decl.init &&
							decl.init.type === "ClassExpression" &&
							classWithTopLevelSymbol.has(decl.init)
						) {
							parser.walkExpression(decl.init);
							InnerGraph.setTopLevelSymbol(parser.state, undefined);
							return true;
						}
					});

					parser.hooks.expression
						.for(topLevelSymbolTag)
						.tap(PLUGIN_NAME, () => {
							const topLevelSymbol = /** @type {TopLevelSymbol} */ (
								parser.currentTagData
							);
							const currentTopLevelSymbol = InnerGraph.getTopLevelSymbol(
								parser.state
							);
							InnerGraph.addUsage(
								parser.state,
								topLevelSymbol,
								currentTopLevelSymbol || true
							);
						});
					parser.hooks.assign.for(topLevelSymbolTag).tap(PLUGIN_NAME, expr => {
						if (!InnerGraph.isEnabled(parser.state)) return;
						if (expr.operator === "=") return true;
					});
				};
				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_AUTO)
					.tap(PLUGIN_NAME, handler);
				normalModuleFactory.hooks.parser
					.for(JAVASCRIPT_MODULE_TYPE_ESM)
					.tap(PLUGIN_NAME, handler);

				compilation.hooks.finishModules.tap(PLUGIN_NAME, () => {
					logger.timeAggregateEnd("infer dependency usage");
				});
			}
		);
	}
}

module.exports = InnerGraphPlugin;

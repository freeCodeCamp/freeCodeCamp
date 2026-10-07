/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const AsyncDependenciesBlock = require("../AsyncDependenciesBlock");
const CommentCompilationWarning = require("../CommentCompilationWarning");
const UnsupportedFeatureWarning = require("../UnsupportedFeatureWarning");
const {
	VariableInfo,
	getImportAttributes
} = require("../javascript/JavascriptParser");
const traverseDestructuringAssignmentProperties = require("../util/traverseDestructuringAssignmentProperties");
const ContextDependencyHelpers = require("./ContextDependencyHelpers");
const { getNonOptionalPart } = require("./HarmonyImportDependency");
const ImportContextDependency = require("./ImportContextDependency");
const ImportDependency = require("./ImportDependency");
const ImportEagerDependency = require("./ImportEagerDependency");
const { createGetImportPhase } = require("./ImportPhase");
const ImportWeakDependency = require("./ImportWeakDependency");

/** @typedef {import("../../declarations/WebpackOptions").JavascriptParserOptions} JavascriptParserOptions */
/** @typedef {import("../ChunkGroup").RawChunkGroupOptions} RawChunkGroupOptions */
/** @typedef {import("../ContextModule").ContextMode} ContextMode */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../Dependency").RawReferencedExports} RawReferencedExports */
/** @typedef {import("../Module").BuildMeta} BuildMeta */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").ImportExpression} ImportExpression */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../javascript/JavascriptParser").JavascriptParserState} JavascriptParserState */
/** @typedef {import("../javascript/JavascriptParser").Members} Members */
/** @typedef {import("../javascript/JavascriptParser").MembersOptionals} MembersOptionals */
/** @typedef {import("../javascript/JavascriptParser").ArrowFunctionExpression} ArrowFunctionExpression */
/** @typedef {import("../javascript/JavascriptParser").FunctionExpression} FunctionExpression */
/** @typedef {import("../javascript/JavascriptParser").Identifier} Identifier */
/** @typedef {import("../javascript/JavascriptParser").ObjectPattern} ObjectPattern */
/** @typedef {import("../javascript/JavascriptParser").CallExpression} CallExpression */

/** @typedef {{ references: RawReferencedExports, expression: ImportExpression }} ImportSettings */
/** @typedef {WeakMap<ImportExpression, RawReferencedExports>} State */

/** @type {WeakMap<JavascriptParserState, State>} */
const parserStateMap = new WeakMap();
const dynamicImportTag = Symbol("import()");

/**
 * Returns import parser plugin state.
 * @param {JavascriptParser} parser javascript parser
 * @returns {State} import parser plugin state
 */
function getState(parser) {
	if (!parserStateMap.has(parser.state)) {
		parserStateMap.set(parser.state, new WeakMap());
	}
	return /** @type {State} */ (parserStateMap.get(parser.state));
}

/**
 * Tag dynamic import referenced.
 * @param {JavascriptParser} parser javascript parser
 * @param {ImportExpression} importCall import expression
 * @param {string} variableName variable name
 */
function tagDynamicImportReferenced(parser, importCall, variableName) {
	const state = getState(parser);
	/** @type {RawReferencedExports} */
	const references = state.get(importCall) || [];
	state.set(importCall, references);
	parser.tagVariable(
		variableName,
		dynamicImportTag,
		/** @type {ImportSettings} */ ({
			references,
			expression: importCall
		})
	);
}

/**
 * Gets fulfilled callback namespace obj.
 * @param {CallExpression} importThen import().then() call
 * @returns {Identifier | ObjectPattern | undefined} the dynamic imported namespace obj
 */
function getFulfilledCallbackNamespaceObj(importThen) {
	const fulfilledCallback = importThen.arguments[0];
	if (
		fulfilledCallback &&
		(fulfilledCallback.type === "ArrowFunctionExpression" ||
			fulfilledCallback.type === "FunctionExpression") &&
		fulfilledCallback.params[0] &&
		(fulfilledCallback.params[0].type === "Identifier" ||
			fulfilledCallback.params[0].type === "ObjectPattern")
	) {
		return fulfilledCallback.params[0];
	}
}

/**
 * Walk import then fulfilled callback.
 * @param {JavascriptParser} parser javascript parser
 * @param {ImportExpression} importCall import expression
 * @param {ArrowFunctionExpression | FunctionExpression} fulfilledCallback the fulfilled callback
 * @param {Identifier | ObjectPattern} namespaceObjArg the argument of namespace object=
 */
function walkImportThenFulfilledCallback(
	parser,
	importCall,
	fulfilledCallback,
	namespaceObjArg
) {
	const arrow = fulfilledCallback.type === "ArrowFunctionExpression";
	const wasTopLevel = parser.scope.topLevelScope;
	parser.scope.topLevelScope = arrow ? (wasTopLevel ? "arrow" : false) : false;
	const scopeParams = [...fulfilledCallback.params];

	// Add function name in scope for recursive calls
	if (!arrow && fulfilledCallback.id) {
		scopeParams.push(fulfilledCallback.id);
	}

	parser.inFunctionScope(!arrow, scopeParams, () => {
		if (namespaceObjArg.type === "Identifier") {
			tagDynamicImportReferenced(parser, importCall, namespaceObjArg.name);
		} else {
			parser.enterDestructuringAssignment(namespaceObjArg, importCall);
			const referencedPropertiesInDestructuring =
				parser.destructuringAssignmentPropertiesFor(importCall);
			if (referencedPropertiesInDestructuring) {
				const state = getState(parser);
				const references = /** @type {RawReferencedExports} */ (
					state.get(importCall)
				);
				/** @type {RawReferencedExports} */
				const refsInDestructuring = [];
				traverseDestructuringAssignmentProperties(
					referencedPropertiesInDestructuring,
					(stack) => refsInDestructuring.push(stack.map((p) => p.id))
				);
				for (const ids of refsInDestructuring) {
					references.push(ids);
				}
			}
		}
		for (const param of fulfilledCallback.params) {
			parser.walkPattern(param);
		}
		if (fulfilledCallback.body.type === "BlockStatement") {
			parser.detectMode(fulfilledCallback.body.body);
			const prev = parser.prevStatement;
			parser.preWalkStatement(fulfilledCallback.body);
			parser.prevStatement = prev;
			parser.walkStatement(fulfilledCallback.body);
		} else {
			parser.walkExpression(fulfilledCallback.body);
		}
	});
	parser.scope.topLevelScope = wasTopLevel;
}

/**
 * Exports from enumerable.
 * @template T
 * @param {Iterable<T>} enumerable enumerable
 * @returns {T[][]} array of array
 */
const exportsFromEnumerable = (enumerable) =>
	Array.from(enumerable, (e) => [e]);

const PLUGIN_NAME = "ImportParserPlugin";

class ImportParserPlugin {
	/**
	 * Creates an instance of ImportParserPlugin.
	 * @param {JavascriptParserOptions} options options
	 */
	constructor(options) {
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {JavascriptParser} parser the parser
	 * @returns {void}
	 */
	apply(parser) {
		parser.hooks.collectDestructuringAssignmentProperties.tap(
			PLUGIN_NAME,
			(expr) => {
				if (expr.type === "ImportExpression") return true;
				const nameInfo = parser.getNameForExpression(expr);
				if (
					nameInfo &&
					nameInfo.rootInfo instanceof VariableInfo &&
					nameInfo.rootInfo.name &&
					parser.getTagData(nameInfo.rootInfo.name, dynamicImportTag)
				) {
					return true;
				}
			}
		);
		parser.hooks.preDeclarator.tap(PLUGIN_NAME, (decl) => {
			if (
				decl.init &&
				decl.init.type === "AwaitExpression" &&
				decl.init.argument.type === "ImportExpression" &&
				decl.id.type === "Identifier"
			) {
				parser.defineVariable(decl.id.name);
				tagDynamicImportReferenced(parser, decl.init.argument, decl.id.name);
			}
		});
		parser.hooks.expression.for(dynamicImportTag).tap(PLUGIN_NAME, (expr) => {
			const settings = /** @type {ImportSettings} */ (parser.currentTagData);
			const referencedPropertiesInDestructuring =
				parser.destructuringAssignmentPropertiesFor(expr);
			if (referencedPropertiesInDestructuring) {
				/** @type {RawReferencedExports} */
				const refsInDestructuring = [];
				traverseDestructuringAssignmentProperties(
					referencedPropertiesInDestructuring,
					(stack) => refsInDestructuring.push(stack.map((p) => p.id))
				);
				for (const ids of refsInDestructuring) {
					settings.references.push(ids);
				}
			} else {
				settings.references.push([]);
			}
			return true;
		});
		parser.hooks.expressionMemberChain
			.for(dynamicImportTag)
			.tap(PLUGIN_NAME, (_expression, members, membersOptionals) => {
				const settings = /** @type {ImportSettings} */ (parser.currentTagData);
				const ids = getNonOptionalPart(members, membersOptionals);
				settings.references.push(ids);
				return true;
			});
		parser.hooks.callMemberChain
			.for(dynamicImportTag)
			.tap(PLUGIN_NAME, (expression, members, membersOptionals) => {
				const { arguments: args } = expression;
				const settings = /** @type {ImportSettings} */ (parser.currentTagData);
				let ids = getNonOptionalPart(members, membersOptionals);
				const directImport = members.length === 0;
				if (
					!directImport &&
					(this.options.strictThisContextOnImports || ids.length > 1)
				) {
					ids = ids.slice(0, -1);
				}
				settings.references.push(ids);
				if (args) parser.walkExpressions(args);
				return true;
			});
		parser.hooks.importCall.tap(PLUGIN_NAME, (expr, importThen) => {
			const param = parser.evaluateExpression(expr.source);

			/** @type {null | string} */
			let chunkName = null;
			let mode = /** @type {ContextMode} */ (this.options.dynamicImportMode);
			/** @type {null | RegExp} */
			let include = null;
			/** @type {null | RegExp} */
			let exclude = null;
			/** @type {null | RawReferencedExports} */
			let exports = null;
			/** @type {RawChunkGroupOptions} */
			const groupOptions = {};

			const {
				dynamicImportPreload,
				dynamicImportPrefetch,
				dynamicImportFetchPriority
			} = this.options;
			if (
				dynamicImportPreload !== undefined &&
				dynamicImportPreload !== false
			) {
				groupOptions.preloadOrder =
					dynamicImportPreload === true ? 0 : dynamicImportPreload;
			}
			if (
				dynamicImportPrefetch !== undefined &&
				dynamicImportPrefetch !== false
			) {
				groupOptions.prefetchOrder =
					dynamicImportPrefetch === true ? 0 : dynamicImportPrefetch;
			}
			if (
				dynamicImportFetchPriority !== undefined &&
				dynamicImportFetchPriority !== false
			) {
				groupOptions.fetchPriority = dynamicImportFetchPriority;
			}

			const { options: importOptions, errors: commentErrors } =
				parser.parseCommentOptions(/** @type {Range} */ (expr.range));

			if (commentErrors) {
				for (const e of commentErrors) {
					const { comment } = e;
					parser.state.module.addWarning(
						new CommentCompilationWarning(
							`Compilation error while processing magic comment(-s): /*${comment.value}*/: ${e.message}`,
							/** @type {DependencyLocation} */ (comment.loc)
						)
					);
				}
			}

			const phase = createGetImportPhase(
				this.options.deferImport,
				this.options.sourceImport
			)(parser, expr, () => importOptions);

			if (importOptions) {
				if (importOptions.webpackIgnore !== undefined) {
					if (typeof importOptions.webpackIgnore !== "boolean") {
						parser.state.module.addWarning(
							new UnsupportedFeatureWarning(
								`\`webpackIgnore\` expected a boolean, but received: ${importOptions.webpackIgnore}.`,
								/** @type {DependencyLocation} */ (expr.loc)
							)
						);
					} else if (importOptions.webpackIgnore) {
						// Do not instrument `import()` if `webpackIgnore` is `true`
						return false;
					}
				}
				if (importOptions.webpackChunkName !== undefined) {
					if (typeof importOptions.webpackChunkName !== "string") {
						parser.state.module.addWarning(
							new UnsupportedFeatureWarning(
								`\`webpackChunkName\` expected a string, but received: ${importOptions.webpackChunkName}.`,
								/** @type {DependencyLocation} */ (expr.loc)
							)
						);
					} else {
						chunkName = importOptions.webpackChunkName;
					}
				}
				if (importOptions.webpackMode !== undefined) {
					if (typeof importOptions.webpackMode !== "string") {
						parser.state.module.addWarning(
							new UnsupportedFeatureWarning(
								`\`webpackMode\` expected a string, but received: ${importOptions.webpackMode}.`,
								/** @type {DependencyLocation} */ (expr.loc)
							)
						);
					} else {
						mode = /** @type {ContextMode} */ (importOptions.webpackMode);
					}
				}
				if (importOptions.webpackPrefetch !== undefined) {
					if (importOptions.webpackPrefetch === true) {
						groupOptions.prefetchOrder = 0;
					} else if (typeof importOptions.webpackPrefetch === "number") {
						groupOptions.prefetchOrder = importOptions.webpackPrefetch;
					} else {
						parser.state.module.addWarning(
							new UnsupportedFeatureWarning(
								`\`webpackPrefetch\` expected true or a number, but received: ${importOptions.webpackPrefetch}.`,
								/** @type {DependencyLocation} */ (expr.loc)
							)
						);
					}
				}
				if (importOptions.webpackPreload !== undefined) {
					if (importOptions.webpackPreload === true) {
						groupOptions.preloadOrder = 0;
					} else if (typeof importOptions.webpackPreload === "number") {
						groupOptions.preloadOrder = importOptions.webpackPreload;
					} else {
						parser.state.module.addWarning(
							new UnsupportedFeatureWarning(
								`\`webpackPreload\` expected true or a number, but received: ${importOptions.webpackPreload}.`,
								/** @type {DependencyLocation} */ (expr.loc)
							)
						);
					}
				}
				if (importOptions.webpackFetchPriority !== undefined) {
					if (
						typeof importOptions.webpackFetchPriority === "string" &&
						["high", "low", "auto"].includes(importOptions.webpackFetchPriority)
					) {
						groupOptions.fetchPriority =
							/** @type {"low" | "high" | "auto"} */
							(importOptions.webpackFetchPriority);
					} else {
						parser.state.module.addWarning(
							new UnsupportedFeatureWarning(
								`\`webpackFetchPriority\` expected true or "low", "high" or "auto", but received: ${importOptions.webpackFetchPriority}.`,
								/** @type {DependencyLocation} */ (expr.loc)
							)
						);
					}
				}
				if (importOptions.webpackInclude !== undefined) {
					if (
						!importOptions.webpackInclude ||
						!(importOptions.webpackInclude instanceof RegExp)
					) {
						parser.state.module.addWarning(
							new UnsupportedFeatureWarning(
								`\`webpackInclude\` expected a regular expression, but received: ${importOptions.webpackInclude}.`,
								/** @type {DependencyLocation} */ (expr.loc)
							)
						);
					} else {
						include = importOptions.webpackInclude;
					}
				}
				if (importOptions.webpackExclude !== undefined) {
					if (
						!importOptions.webpackExclude ||
						!(importOptions.webpackExclude instanceof RegExp)
					) {
						parser.state.module.addWarning(
							new UnsupportedFeatureWarning(
								`\`webpackExclude\` expected a regular expression, but received: ${importOptions.webpackExclude}.`,
								/** @type {DependencyLocation} */ (expr.loc)
							)
						);
					} else {
						exclude = importOptions.webpackExclude;
					}
				}
				if (importOptions.webpackExports !== undefined) {
					if (
						!(
							typeof importOptions.webpackExports === "string" ||
							(Array.isArray(importOptions.webpackExports) &&
								importOptions.webpackExports.every(
									(item) => typeof item === "string"
								))
						)
					) {
						parser.state.module.addWarning(
							new UnsupportedFeatureWarning(
								`\`webpackExports\` expected a string or an array of strings, but received: ${importOptions.webpackExports}.`,
								/** @type {DependencyLocation} */ (expr.loc)
							)
						);
					} else if (typeof importOptions.webpackExports === "string") {
						exports = [[importOptions.webpackExports]];
					} else {
						exports = exportsFromEnumerable(importOptions.webpackExports);
					}
				}
			}

			if (
				mode !== "lazy" &&
				mode !== "lazy-once" &&
				mode !== "eager" &&
				mode !== "weak"
			) {
				parser.state.module.addWarning(
					new UnsupportedFeatureWarning(
						`\`webpackMode\` expected 'lazy', 'lazy-once', 'eager' or 'weak', but received: ${mode}.`,
						/** @type {DependencyLocation} */ (expr.loc)
					)
				);
				mode = "lazy";
			}

			const referencedPropertiesInDestructuring =
				parser.destructuringAssignmentPropertiesFor(expr);
			const state = getState(parser);
			const referencedPropertiesInMember = state.get(expr);
			const fulfilledNamespaceObj =
				importThen && getFulfilledCallbackNamespaceObj(importThen);
			if (
				referencedPropertiesInDestructuring ||
				referencedPropertiesInMember ||
				fulfilledNamespaceObj
			) {
				if (exports) {
					parser.state.module.addWarning(
						new UnsupportedFeatureWarning(
							"You don't need `webpackExports` if the usage of dynamic import is statically analyse-able. You can safely remove the `webpackExports` magic comment.",
							/** @type {DependencyLocation} */ (expr.loc)
						)
					);
				}

				if (referencedPropertiesInDestructuring) {
					/** @type {RawReferencedExports} */
					const refsInDestructuring = [];
					traverseDestructuringAssignmentProperties(
						referencedPropertiesInDestructuring,
						(stack) => refsInDestructuring.push(stack.map((p) => p.id))
					);

					exports = refsInDestructuring;
				} else if (referencedPropertiesInMember) {
					exports = referencedPropertiesInMember;
				} else {
					/** @type {RawReferencedExports} */
					const references = [];
					state.set(expr, references);

					exports = references;
				}
			}

			if (param.isString()) {
				const attributes = getImportAttributes(expr);

				if (mode === "eager") {
					const dep = new ImportEagerDependency(
						/** @type {string} */ (param.string),
						/** @type {Range} */ (expr.range),
						exports,
						phase,
						attributes
					);
					parser.state.current.addDependency(dep);
				} else if (mode === "weak") {
					const dep = new ImportWeakDependency(
						/** @type {string} */ (param.string),
						/** @type {Range} */ (expr.range),
						exports,
						phase,
						attributes
					);
					parser.state.current.addDependency(dep);
				} else {
					const depBlock = new AsyncDependenciesBlock(
						{
							...groupOptions,
							name: chunkName
						},
						/** @type {DependencyLocation} */ (expr.loc),
						param.string
					);
					const dep = new ImportDependency(
						/** @type {string} */ (param.string),
						/** @type {Range} */ (expr.range),
						exports,
						phase,
						attributes
					);
					dep.loc = /** @type {DependencyLocation} */ (expr.loc);
					dep.optional = Boolean(parser.scope.inTry);
					depBlock.addDependency(dep);
					parser.state.current.addBlock(depBlock);
				}
			} else {
				if (mode === "weak") {
					mode = "async-weak";
				}

				const dep = ContextDependencyHelpers.create(
					ImportContextDependency,
					/** @type {Range} */ (expr.range),
					param,
					expr,
					this.options,
					{
						chunkName,
						groupOptions,
						include,
						exclude,
						mode,
						namespaceObject:
							/** @type {BuildMeta} */
							(parser.state.module.buildMeta).strictHarmonyModule
								? "strict"
								: true,
						typePrefix: "import()",
						category: "esm",
						referencedExports: exports,
						attributes: getImportAttributes(expr),
						phase
					},
					parser
				);
				if (!dep) return;
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				dep.optional = Boolean(parser.scope.inTry);
				parser.state.current.addDependency(dep);
			}

			if (fulfilledNamespaceObj) {
				walkImportThenFulfilledCallback(
					parser,
					expr,
					/** @type {ArrowFunctionExpression | FunctionExpression} */
					(importThen.arguments[0]),
					fulfilledNamespaceObj
				);
				parser.walkExpressions(importThen.arguments.slice(1));
			} else if (importThen) {
				parser.walkExpressions(importThen.arguments);
			}

			return true;
		});
	}
}

module.exports = ImportParserPlugin;

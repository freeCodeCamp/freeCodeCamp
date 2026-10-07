/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const WebpackError = require("../WebpackError");
const {
	evaluateToIdentifier
} = require("../javascript/JavascriptParserHelpers");
const ImportMetaContextDependency = require("./ImportMetaContextDependency");

/** @typedef {import("estree").Expression} Expression */
/** @typedef {import("estree").ObjectExpression} ObjectExpression */
/** @typedef {import("estree").Property} Property */
/** @typedef {import("estree").Identifier} Identifier */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../ContextModule").ContextModuleOptions} ContextModuleOptions */
/** @typedef {import("../ContextModule").ContextMode} ContextMode */
/** @typedef {import("../Chunk").ChunkName} ChunkName */
/** @typedef {import("../ChunkGroup").RawChunkGroupOptions} RawChunkGroupOptions */
/** @typedef {import("../Dependency").RawReferencedExports} RawReferencedExports */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../javascript/BasicEvaluatedExpression")} BasicEvaluatedExpression */

/** @typedef {Pick<ContextModuleOptions, "mode" | "recursive" | "regExp" | "include" | "exclude" | "chunkName"> & { groupOptions: RawChunkGroupOptions, exports?: RawReferencedExports }} ImportMetaContextOptions */

/**
 * Creates a property parse error.
 * @param {Property} prop property
 * @param {string} expect except message
 * @returns {WebpackError} error
 */
function createPropertyParseError(prop, expect) {
	return createError(
		`Parsing import.meta.webpackContext options failed. Unknown value for property ${JSON.stringify(
			/** @type {Identifier} */
			(prop.key).name
		)}, expected type ${expect}.`,
		/** @type {DependencyLocation} */
		(prop.value.loc)
	);
}

/**
 * Creates an error from the provided msg.
 * @param {string} msg message
 * @param {DependencyLocation} loc location
 * @returns {WebpackError} error
 */
function createError(msg, loc) {
	const error = new WebpackError(msg);
	error.name = "ImportMetaContextError";
	error.loc = loc;
	return error;
}

const PLUGIN_NAME = "ImportMetaContextDependencyParserPlugin";

module.exports = class ImportMetaContextDependencyParserPlugin {
	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {JavascriptParser} parser the parser
	 * @returns {void}
	 */
	apply(parser) {
		parser.hooks.evaluateIdentifier
			.for("import.meta.webpackContext")
			.tap(PLUGIN_NAME, (expr) =>
				evaluateToIdentifier(
					"import.meta.webpackContext",
					"import.meta",
					() => ["webpackContext"],
					true
				)(expr)
			);
		parser.hooks.call
			.for("import.meta.webpackContext")
			.tap(PLUGIN_NAME, (expr) => {
				if (expr.arguments.length < 1 || expr.arguments.length > 2) return;
				const [directoryNode, optionsNode] = expr.arguments;
				if (optionsNode && optionsNode.type !== "ObjectExpression") return;
				const requestExpr = parser.evaluateExpression(
					/** @type {Expression} */ (directoryNode)
				);
				if (!requestExpr.isString()) return;
				const request = /** @type {string} */ (requestExpr.string);
				/** @type {WebpackError[]} */
				const errors = [];
				let regExp = /^\.\/.*$/;
				let recursive = true;
				/** @type {ContextMode} */
				let mode = "sync";
				/** @type {ContextModuleOptions["include"]} */
				let include;
				/** @type {ContextModuleOptions["exclude"]} */
				let exclude;
				/** @type {RawChunkGroupOptions} */
				const groupOptions = {};
				/** @type {ChunkName | undefined} */
				let chunkName;
				/** @type {RawReferencedExports | undefined} */
				let exports;
				if (optionsNode) {
					for (const prop of /** @type {ObjectExpression} */ (optionsNode)
						.properties) {
						if (prop.type !== "Property" || prop.key.type !== "Identifier") {
							errors.push(
								createError(
									"Parsing import.meta.webpackContext options failed.",
									/** @type {DependencyLocation} */
									(optionsNode.loc)
								)
							);
							break;
						}
						switch (prop.key.name) {
							case "regExp": {
								const regExpExpr = parser.evaluateExpression(
									/** @type {Expression} */ (prop.value)
								);
								if (!regExpExpr.isRegExp()) {
									errors.push(createPropertyParseError(prop, "RegExp"));
								} else {
									regExp = /** @type {RegExp} */ (regExpExpr.regExp);
								}
								break;
							}
							case "include": {
								const regExpExpr = parser.evaluateExpression(
									/** @type {Expression} */ (prop.value)
								);
								if (!regExpExpr.isRegExp()) {
									errors.push(createPropertyParseError(prop, "RegExp"));
								} else {
									include = regExpExpr.regExp;
								}
								break;
							}
							case "exclude": {
								const regExpExpr = parser.evaluateExpression(
									/** @type {Expression} */ (prop.value)
								);
								if (!regExpExpr.isRegExp()) {
									errors.push(createPropertyParseError(prop, "RegExp"));
								} else {
									exclude = regExpExpr.regExp;
								}
								break;
							}
							case "mode": {
								const modeExpr = parser.evaluateExpression(
									/** @type {Expression} */ (prop.value)
								);
								if (!modeExpr.isString()) {
									errors.push(createPropertyParseError(prop, "string"));
								} else {
									mode = /** @type {ContextModuleOptions["mode"]} */ (
										modeExpr.string
									);
								}
								break;
							}
							case "chunkName": {
								const expr = parser.evaluateExpression(
									/** @type {Expression} */ (prop.value)
								);
								if (!expr.isString()) {
									errors.push(createPropertyParseError(prop, "string"));
								} else {
									chunkName = expr.string;
								}
								break;
							}
							case "exports": {
								const expr = parser.evaluateExpression(
									/** @type {Expression} */ (prop.value)
								);
								if (expr.isString()) {
									exports = [[/** @type {string} */ (expr.string)]];
								} else if (expr.isArray()) {
									const items =
										/** @type {BasicEvaluatedExpression[]} */
										(expr.items);
									if (
										items.every((i) => {
											if (!i.isArray()) return false;
											const innerItems =
												/** @type {BasicEvaluatedExpression[]} */ (i.items);
											return innerItems.every((i) => i.isString());
										})
									) {
										exports = [];

										for (const i1 of items) {
											/** @type {string[]} */
											const export_ = [];
											for (const i2 of /** @type {BasicEvaluatedExpression[]} */ (
												i1.items
											)) {
												export_.push(/** @type {string} */ (i2.string));
											}
											exports.push(export_);
										}
									} else {
										errors.push(
											createPropertyParseError(prop, "string|string[][]")
										);
									}
								} else {
									errors.push(
										createPropertyParseError(prop, "string|string[][]")
									);
								}
								break;
							}
							case "prefetch": {
								const expr = parser.evaluateExpression(
									/** @type {Expression} */ (prop.value)
								);
								if (expr.isBoolean()) {
									groupOptions.prefetchOrder = 0;
								} else if (expr.isNumber()) {
									groupOptions.prefetchOrder = expr.number;
								} else {
									errors.push(createPropertyParseError(prop, "boolean|number"));
								}
								break;
							}
							case "preload": {
								const expr = parser.evaluateExpression(
									/** @type {Expression} */ (prop.value)
								);
								if (expr.isBoolean()) {
									groupOptions.preloadOrder = 0;
								} else if (expr.isNumber()) {
									groupOptions.preloadOrder = expr.number;
								} else {
									errors.push(createPropertyParseError(prop, "boolean|number"));
								}
								break;
							}
							case "fetchPriority": {
								const expr = parser.evaluateExpression(
									/** @type {Expression} */ (prop.value)
								);
								if (
									expr.isString() &&
									["high", "low", "auto"].includes(
										/** @type {string} */ (expr.string)
									)
								) {
									groupOptions.fetchPriority =
										/** @type {RawChunkGroupOptions["fetchPriority"]} */ (
											expr.string
										);
								} else {
									errors.push(
										createPropertyParseError(prop, '"high"|"low"|"auto"')
									);
								}
								break;
							}
							case "recursive": {
								const recursiveExpr = parser.evaluateExpression(
									/** @type {Expression} */ (prop.value)
								);
								if (!recursiveExpr.isBoolean()) {
									errors.push(createPropertyParseError(prop, "boolean"));
								} else {
									recursive = /** @type {boolean} */ (recursiveExpr.bool);
								}
								break;
							}
							default:
								errors.push(
									createError(
										`Parsing import.meta.webpackContext options failed. Unknown property ${JSON.stringify(
											prop.key.name
										)}.`,
										/** @type {DependencyLocation} */ (optionsNode.loc)
									)
								);
						}
					}
				}
				if (errors.length) {
					for (const error of errors) parser.state.current.addError(error);
					return;
				}

				const dep = new ImportMetaContextDependency(
					{
						request,
						include,
						exclude,
						recursive,
						regExp,
						groupOptions,
						chunkName,
						referencedExports: exports,
						mode,
						category: "esm"
					},
					/** @type {Range} */ (expr.range)
				);
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				dep.optional = Boolean(parser.scope.inTry);
				parser.state.current.addDependency(dep);
				return true;
			});
	}
};

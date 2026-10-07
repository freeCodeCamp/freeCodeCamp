/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const formatLocation = require("../formatLocation");
const { evaluateToString } = require("../javascript/JavascriptParserHelpers");
const propertyAccess = require("../util/propertyAccess");
const CommonJsExportRequireDependency = require("./CommonJsExportRequireDependency");
const CommonJsExportsDependency = require("./CommonJsExportsDependency");
const CommonJsSelfReferenceDependency = require("./CommonJsSelfReferenceDependency");
const DynamicExports = require("./DynamicExports");
const HarmonyExports = require("./HarmonyExports");
const ModuleDecoratorDependency = require("./ModuleDecoratorDependency");

/** @typedef {import("estree").AssignmentExpression} AssignmentExpression */
/** @typedef {import("estree").CallExpression} CallExpression */
/** @typedef {import("estree").Expression} Expression */
/** @typedef {import("estree").Super} Super */
/** @typedef {import("../Dependency").DependencyLocation} DependencyLocation */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../NormalModule")} NormalModule */
/** @typedef {import("../javascript/BasicEvaluatedExpression")} BasicEvaluatedExpression */
/** @typedef {import("../javascript/JavascriptParser")} JavascriptParser */
/** @typedef {import("../javascript/JavascriptParser").Range} Range */
/** @typedef {import("../javascript/JavascriptParser").StatementPath} StatementPath */
/** @typedef {import("./CommonJsDependencyHelpers").CommonJSDependencyBaseKeywords} CommonJSDependencyBaseKeywords */

/**
 * This function takes a generic expression and detects whether it is an ObjectExpression.
 * This is used in the context of parsing CommonJS exports to get the value of the property descriptor
 * when the `exports` object is assigned to `Object.defineProperty`.
 *
 * In CommonJS modules, the `exports` object can be assigned to `Object.defineProperty` and therefore
 * webpack has to detect this case and get the value key of the property descriptor. See the following example
 * for more information: https://astexplorer.net/#/gist/83ce51a4e96e59d777df315a6d111da6/8058ead48a1bb53c097738225db0967ef7f70e57
 *
 * This would be an example of a CommonJS module that exports an object with a property descriptor:
 * ```js
 * Object.defineProperty(exports, "__esModule", { value: true });
 * exports.foo = void 0;
 * exports.foo = "bar";
 * ```
 * @param {TODO} expr expression
 * @returns {Expression | undefined} returns the value of property descriptor
 */
const getValueOfPropertyDescription = expr => {
	if (expr.type !== "ObjectExpression") return;
	for (const property of expr.properties) {
		if (property.computed) continue;
		const key = property.key;
		if (key.type !== "Identifier" || key.name !== "value") continue;
		return property.value;
	}
};

/**
 * The purpose of this function is to check whether an expression is a truthy literal or not. This is
 * useful when parsing CommonJS exports, because CommonJS modules can export any value, including falsy
 * values like `null` and `false`. However, exports should only be created if the exported value is truthy.
 * @param {Expression} expr expression being checked
 * @returns {boolean} true, when the expression is a truthy literal
 */
const isTruthyLiteral = expr => {
	switch (expr.type) {
		case "Literal":
			return Boolean(expr.value);
		case "UnaryExpression":
			if (expr.operator === "!") return isFalsyLiteral(expr.argument);
	}
	return false;
};

/**
 * The purpose of this function is to check whether an expression is a falsy literal or not. This is
 * useful when parsing CommonJS exports, because CommonJS modules can export any value, including falsy
 * values like `null` and `false`. However, exports should only be created if the exported value is truthy.
 * @param {Expression} expr expression being checked
 * @returns {boolean} true, when the expression is a falsy literal
 */
const isFalsyLiteral = expr => {
	switch (expr.type) {
		case "Literal":
			return !expr.value;
		case "UnaryExpression":
			if (expr.operator === "!") return isTruthyLiteral(expr.argument);
	}
	return false;
};

/**
 * @param {JavascriptParser} parser the parser
 * @param {Expression} expr expression
 * @returns {{ argument: BasicEvaluatedExpression, ids: string[] } | undefined} parsed call
 */
const parseRequireCall = (parser, expr) => {
	const ids = [];
	while (expr.type === "MemberExpression") {
		if (expr.object.type === "Super") return;
		if (!expr.property) return;
		const prop = expr.property;
		if (expr.computed) {
			if (prop.type !== "Literal") return;
			ids.push(`${prop.value}`);
		} else {
			if (prop.type !== "Identifier") return;
			ids.push(prop.name);
		}
		expr = expr.object;
	}
	if (expr.type !== "CallExpression" || expr.arguments.length !== 1) return;
	const callee = expr.callee;
	if (
		callee.type !== "Identifier" ||
		parser.getVariableInfo(callee.name) !== "require"
	) {
		return;
	}
	const arg = expr.arguments[0];
	if (arg.type === "SpreadElement") return;
	const argValue = parser.evaluateExpression(arg);
	return { argument: argValue, ids: ids.reverse() };
};

class CommonJsExportsParserPlugin {
	/**
	 * @param {ModuleGraph} moduleGraph module graph
	 */
	constructor(moduleGraph) {
		this.moduleGraph = moduleGraph;
	}

	/**
	 * @param {JavascriptParser} parser the parser
	 * @returns {void}
	 */
	apply(parser) {
		const enableStructuredExports = () => {
			DynamicExports.enable(parser.state);
		};

		/**
		 * @param {boolean} topLevel true, when the export is on top level
		 * @param {string[]} members members of the export
		 * @param {Expression | undefined} valueExpr expression for the value
		 * @returns {void}
		 */
		const checkNamespace = (topLevel, members, valueExpr) => {
			if (!DynamicExports.isEnabled(parser.state)) return;
			if (members.length > 0 && members[0] === "__esModule") {
				if (valueExpr && isTruthyLiteral(valueExpr) && topLevel) {
					DynamicExports.setFlagged(parser.state);
				} else {
					DynamicExports.setDynamic(parser.state);
				}
			}
		};
		/**
		 * @param {string=} reason reason
		 */
		const bailout = reason => {
			DynamicExports.bailout(parser.state);
			if (reason) bailoutHint(reason);
		};
		/**
		 * @param {string} reason reason
		 */
		const bailoutHint = reason => {
			this.moduleGraph
				.getOptimizationBailout(parser.state.module)
				.push(`CommonJS bailout: ${reason}`);
		};

		// metadata //
		parser.hooks.evaluateTypeof
			.for("module")
			.tap("CommonJsExportsParserPlugin", evaluateToString("object"));
		parser.hooks.evaluateTypeof
			.for("exports")
			.tap("CommonJsPlugin", evaluateToString("object"));

		// exporting //

		/**
		 * @param {AssignmentExpression} expr expression
		 * @param {CommonJSDependencyBaseKeywords} base commonjs base keywords
		 * @param {string[]} members members of the export
		 * @returns {boolean | undefined} true, when the expression was handled
		 */
		const handleAssignExport = (expr, base, members) => {
			if (HarmonyExports.isEnabled(parser.state)) return;
			// Handle reexporting
			const requireCall = parseRequireCall(parser, expr.right);
			if (
				requireCall &&
				requireCall.argument.isString() &&
				(members.length === 0 || members[0] !== "__esModule")
			) {
				enableStructuredExports();
				// It's possible to reexport __esModule, so we must convert to a dynamic module
				if (members.length === 0) DynamicExports.setDynamic(parser.state);
				const dep = new CommonJsExportRequireDependency(
					/** @type {Range} */ (expr.range),
					null,
					base,
					members,
					/** @type {string} */ (requireCall.argument.string),
					requireCall.ids,
					!parser.isStatementLevelExpression(expr)
				);
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				dep.optional = Boolean(parser.scope.inTry);
				parser.state.module.addDependency(dep);
				return true;
			}
			if (members.length === 0) return;
			enableStructuredExports();
			const remainingMembers = members;
			checkNamespace(
				/** @type {StatementPath} */
				(parser.statementPath).length === 1 &&
					parser.isStatementLevelExpression(expr),
				remainingMembers,
				expr.right
			);
			const dep = new CommonJsExportsDependency(
				/** @type {Range} */ (expr.left.range),
				null,
				base,
				remainingMembers
			);
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			parser.state.module.addDependency(dep);
			parser.walkExpression(expr.right);
			return true;
		};
		parser.hooks.assignMemberChain
			.for("exports")
			.tap("CommonJsExportsParserPlugin", (expr, members) =>
				handleAssignExport(expr, "exports", members)
			);
		parser.hooks.assignMemberChain
			.for("this")
			.tap("CommonJsExportsParserPlugin", (expr, members) => {
				if (!parser.scope.topLevelScope) return;
				return handleAssignExport(expr, "this", members);
			});
		parser.hooks.assignMemberChain
			.for("module")
			.tap("CommonJsExportsParserPlugin", (expr, members) => {
				if (members[0] !== "exports") return;
				return handleAssignExport(expr, "module.exports", members.slice(1));
			});
		parser.hooks.call
			.for("Object.defineProperty")
			.tap("CommonJsExportsParserPlugin", expression => {
				const expr = /** @type {CallExpression} */ (expression);
				if (!parser.isStatementLevelExpression(expr)) return;
				if (expr.arguments.length !== 3) return;
				if (expr.arguments[0].type === "SpreadElement") return;
				if (expr.arguments[1].type === "SpreadElement") return;
				if (expr.arguments[2].type === "SpreadElement") return;
				const exportsArg = parser.evaluateExpression(expr.arguments[0]);
				if (!exportsArg.isIdentifier()) return;
				if (
					exportsArg.identifier !== "exports" &&
					exportsArg.identifier !== "module.exports" &&
					(exportsArg.identifier !== "this" || !parser.scope.topLevelScope)
				) {
					return;
				}
				const propertyArg = parser.evaluateExpression(expr.arguments[1]);
				const property = propertyArg.asString();
				if (typeof property !== "string") return;
				enableStructuredExports();
				const descArg = expr.arguments[2];
				checkNamespace(
					/** @type {StatementPath} */
					(parser.statementPath).length === 1,
					[property],
					getValueOfPropertyDescription(descArg)
				);
				const dep = new CommonJsExportsDependency(
					/** @type {Range} */ (expr.range),
					/** @type {Range} */ (expr.arguments[2].range),
					`Object.defineProperty(${exportsArg.identifier})`,
					[property]
				);
				dep.loc = /** @type {DependencyLocation} */ (expr.loc);
				parser.state.module.addDependency(dep);

				parser.walkExpression(expr.arguments[2]);
				return true;
			});

		// Self reference //

		/**
		 * @param {Expression | Super} expr expression
		 * @param {CommonJSDependencyBaseKeywords} base commonjs base keywords
		 * @param {string[]} members members of the export
		 * @param {CallExpression=} call call expression
		 * @returns {boolean | void} true, when the expression was handled
		 */
		const handleAccessExport = (expr, base, members, call) => {
			if (HarmonyExports.isEnabled(parser.state)) return;
			if (members.length === 0) {
				bailout(
					`${base} is used directly at ${formatLocation(
						/** @type {DependencyLocation} */ (expr.loc)
					)}`
				);
			}
			if (call && members.length === 1) {
				bailoutHint(
					`${base}${propertyAccess(
						members
					)}(...) prevents optimization as ${base} is passed as call context at ${formatLocation(
						/** @type {DependencyLocation} */ (expr.loc)
					)}`
				);
			}
			const dep = new CommonJsSelfReferenceDependency(
				/** @type {Range} */ (expr.range),
				base,
				members,
				Boolean(call)
			);
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			parser.state.module.addDependency(dep);
			if (call) {
				parser.walkExpressions(call.arguments);
			}
			return true;
		};
		parser.hooks.callMemberChain
			.for("exports")
			.tap("CommonJsExportsParserPlugin", (expr, members) =>
				handleAccessExport(expr.callee, "exports", members, expr)
			);
		parser.hooks.expressionMemberChain
			.for("exports")
			.tap("CommonJsExportsParserPlugin", (expr, members) =>
				handleAccessExport(expr, "exports", members)
			);
		parser.hooks.expression
			.for("exports")
			.tap("CommonJsExportsParserPlugin", expr =>
				handleAccessExport(expr, "exports", [])
			);
		parser.hooks.callMemberChain
			.for("module")
			.tap("CommonJsExportsParserPlugin", (expr, members) => {
				if (members[0] !== "exports") return;
				return handleAccessExport(
					expr.callee,
					"module.exports",
					members.slice(1),
					expr
				);
			});
		parser.hooks.expressionMemberChain
			.for("module")
			.tap("CommonJsExportsParserPlugin", (expr, members) => {
				if (members[0] !== "exports") return;
				return handleAccessExport(expr, "module.exports", members.slice(1));
			});
		parser.hooks.expression
			.for("module.exports")
			.tap("CommonJsExportsParserPlugin", expr =>
				handleAccessExport(expr, "module.exports", [])
			);
		parser.hooks.callMemberChain
			.for("this")
			.tap("CommonJsExportsParserPlugin", (expr, members) => {
				if (!parser.scope.topLevelScope) return;
				return handleAccessExport(expr.callee, "this", members, expr);
			});
		parser.hooks.expressionMemberChain
			.for("this")
			.tap("CommonJsExportsParserPlugin", (expr, members) => {
				if (!parser.scope.topLevelScope) return;
				return handleAccessExport(expr, "this", members);
			});
		parser.hooks.expression
			.for("this")
			.tap("CommonJsExportsParserPlugin", expr => {
				if (!parser.scope.topLevelScope) return;
				return handleAccessExport(expr, "this", []);
			});

		// Bailouts //
		parser.hooks.expression.for("module").tap("CommonJsPlugin", expr => {
			bailout();
			const isHarmony = HarmonyExports.isEnabled(parser.state);
			const dep = new ModuleDecoratorDependency(
				isHarmony
					? RuntimeGlobals.harmonyModuleDecorator
					: RuntimeGlobals.nodeModuleDecorator,
				!isHarmony
			);
			dep.loc = /** @type {DependencyLocation} */ (expr.loc);
			parser.state.module.addDependency(dep);
			return true;
		});
	}
}
module.exports = CommonJsExportsParserPlugin;

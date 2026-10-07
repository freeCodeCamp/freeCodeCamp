/**
 * @fileoverview Rule to disallow use of Object.prototype builtins on objects
 * @author Andrew Levine
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Returns true if the node or any of the objects
 * to the left of it in the member/call chain is optional.
 *
 * e.g. `a?.b`, `a?.b.c`, `a?.()`, `a()?.()`
 * @param {ASTNode} node The expression to check
 * @returns {boolean} `true` if there is a short-circuiting optional `?.`
 * in the same option chain to the left of this call or member expression,
 * or the node itself is an optional call or member `?.`.
 */
function isAfterOptional(node) {
	let leftNode;

	if (node.type === "MemberExpression") {
		leftNode = node.object;
	} else if (node.type === "CallExpression") {
		leftNode = node.callee;
	} else {
		return false;
	}
	if (node.optional) {
		return true;
	}
	return isAfterOptional(leftNode);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		docs: {
			description:
				"Disallow calling some `Object.prototype` methods directly on objects",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-prototype-builtins",
		},

		hasSuggestions: true,

		schema: [],

		messages: {
			prototypeBuildIn:
				"Do not access Object.prototype method '{{prop}}' from target object.",
			callObjectPrototype: "Call Object.prototype.{{prop}} explicitly.",
		},
	},

	create(context) {
		const DISALLOWED_PROPS = new Set([
			"hasOwnProperty",
			"isPrototypeOf",
			"propertyIsEnumerable",
		]);

		/**
		 * Reports if a disallowed property is used in a CallExpression
		 * @param {ASTNode} node The CallExpression node.
		 * @returns {void}
		 */
		function disallowBuiltIns(node) {
			const callee = astUtils.skipChainExpression(node.callee);

			if (callee.type !== "MemberExpression") {
				return;
			}

			const propName = astUtils.getStaticPropertyName(callee);

			if (propName !== null && DISALLOWED_PROPS.has(propName)) {
				context.report({
					messageId: "prototypeBuildIn",
					loc: callee.property.loc,
					data: { prop: propName },
					node,
					suggest: [
						{
							messageId: "callObjectPrototype",
							data: { prop: propName },
							fix(fixer) {
								const sourceCode = context.sourceCode;

								/*
								 * A call after an optional chain (e.g. a?.b.hasOwnProperty(c))
								 * must be fixed manually because the call can be short-circuited
								 */
								if (isAfterOptional(node)) {
									return null;
								}

								/*
								 * A call on a ChainExpression (e.g. (a?.hasOwnProperty)(c)) will trigger
								 * no-unsafe-optional-chaining which should be fixed before this suggestion
								 */
								if (node.callee.type === "ChainExpression") {
									return null;
								}

								const objectVariable =
									astUtils.getVariableByName(
										sourceCode.getScope(node),
										"Object",
									);

								/*
								 * We can't use Object if the global Object was shadowed,
								 * or Object does not exist in the global scope for some reason
								 */
								if (
									!objectVariable ||
									objectVariable.scope.type !== "global" ||
									objectVariable.defs.length > 0
								) {
									return null;
								}

								let objectText = sourceCode.getText(
									callee.object,
								);

								if (
									astUtils.getPrecedence(callee.object) <=
									astUtils.getPrecedence({
										type: "SequenceExpression",
									})
								) {
									objectText = `(${objectText})`;
								}

								const openParenToken = sourceCode.getTokenAfter(
									node.callee,
									astUtils.isOpeningParenToken,
								);
								const isEmptyParameters =
									node.arguments.length === 0;
								const delim = isEmptyParameters ? "" : ", ";
								const fixes = [
									fixer.replaceText(
										callee,
										`Object.prototype.${propName}.call`,
									),
									fixer.insertTextAfter(
										openParenToken,
										objectText + delim,
									),
								];

								return fixes;
							},
						},
					],
				});
			}
		}

		return {
			CallExpression: disallowBuiltIns,
		};
	},
};

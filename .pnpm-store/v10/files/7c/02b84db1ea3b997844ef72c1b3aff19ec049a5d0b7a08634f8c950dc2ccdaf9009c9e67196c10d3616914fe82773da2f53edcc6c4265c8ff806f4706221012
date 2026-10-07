/**
 * @fileoverview Rule to flag when IIFE is not wrapped in parens
 * @author Ilya Volodin
 * @deprecated in ESLint v8.53.0
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");
const eslintUtils = require("@eslint-community/eslint-utils");

//----------------------------------------------------------------------
// Helpers
//----------------------------------------------------------------------

/**
 * Check if the given node is callee of a `NewExpression` node
 * @param {ASTNode} node node to check
 * @returns {boolean} True if the node is callee of a `NewExpression` node
 * @private
 */
function isCalleeOfNewExpression(node) {
	const maybeCallee =
		node.parent.type === "ChainExpression" ? node.parent : node;

	return (
		maybeCallee.parent.type === "NewExpression" &&
		maybeCallee.parent.callee === maybeCallee
	);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		deprecated: {
			message: "Formatting rules are being moved out of ESLint core.",
			url: "https://eslint.org/blog/2023/10/deprecating-formatting-rules/",
			deprecatedSince: "8.53.0",
			availableUntil: "11.0.0",
			replacedBy: [
				{
					message:
						"ESLint Stylistic now maintains deprecated stylistic core rules.",
					url: "https://eslint.style/guide/migration",
					plugin: {
						name: "@stylistic/eslint-plugin",
						url: "https://eslint.style",
					},
					rule: {
						name: "wrap-iife",
						url: "https://eslint.style/rules/wrap-iife",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description:
				"Require parentheses around immediate `function` invocations",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/wrap-iife",
		},

		schema: [
			{
				enum: ["outside", "inside", "any"],
			},
			{
				type: "object",
				properties: {
					functionPrototypeMethods: {
						type: "boolean",
						default: false,
					},
				},
				additionalProperties: false,
			},
		],

		fixable: "code",
		messages: {
			wrapInvocation:
				"Wrap an immediate function invocation in parentheses.",
			wrapExpression: "Wrap only the function expression in parens.",
			moveInvocation:
				"Move the invocation into the parens that contain the function.",
		},
	},

	create(context) {
		const style = context.options[0] || "outside";
		const includeFunctionPrototypeMethods =
			context.options[1] && context.options[1].functionPrototypeMethods;

		const sourceCode = context.sourceCode;

		/**
		 * Check if the node is wrapped in any (). All parens count: grouping parens and parens for constructs such as if()
		 * @param {ASTNode} node node to evaluate
		 * @returns {boolean} True if it is wrapped in any parens
		 * @private
		 */
		function isWrappedInAnyParens(node) {
			return astUtils.isParenthesised(sourceCode, node);
		}

		/**
		 * Check if the node is wrapped in grouping (). Parens for constructs such as if() don't count
		 * @param {ASTNode} node node to evaluate
		 * @returns {boolean} True if it is wrapped in grouping parens
		 * @private
		 */
		function isWrappedInGroupingParens(node) {
			return eslintUtils.isParenthesized(1, node, sourceCode);
		}

		/**
		 * Get the function node from an IIFE
		 * @param {ASTNode} node node to evaluate
		 * @returns {ASTNode} node that is the function expression of the given IIFE, or null if none exist
		 */
		function getFunctionNodeFromIIFE(node) {
			const callee = astUtils.skipChainExpression(node.callee);

			if (callee.type === "FunctionExpression") {
				return callee;
			}

			if (
				includeFunctionPrototypeMethods &&
				callee.type === "MemberExpression" &&
				callee.object.type === "FunctionExpression" &&
				(astUtils.getStaticPropertyName(callee) === "call" ||
					astUtils.getStaticPropertyName(callee) === "apply")
			) {
				return callee.object;
			}

			return null;
		}

		return {
			CallExpression(node) {
				const innerNode = getFunctionNodeFromIIFE(node);

				if (!innerNode) {
					return;
				}

				const isCallExpressionWrapped = isWrappedInAnyParens(node),
					isFunctionExpressionWrapped =
						isWrappedInAnyParens(innerNode);

				if (!isCallExpressionWrapped && !isFunctionExpressionWrapped) {
					context.report({
						node,
						messageId: "wrapInvocation",
						fix(fixer) {
							const nodeToSurround =
								style === "inside" ? innerNode : node;

							return fixer.replaceText(
								nodeToSurround,
								`(${sourceCode.getText(nodeToSurround)})`,
							);
						},
					});
				} else if (style === "inside" && !isFunctionExpressionWrapped) {
					context.report({
						node,
						messageId: "wrapExpression",
						fix(fixer) {
							// The outer call expression will always be wrapped at this point.

							if (
								isWrappedInGroupingParens(node) &&
								!isCalleeOfNewExpression(node)
							) {
								/*
								 * Parenthesize the function expression and remove unnecessary grouping parens around the call expression.
								 * Replace the range between the end of the function expression and the end of the call expression.
								 * for example, in `(function(foo) {}(bar))`, the range `(bar))` should get replaced with `)(bar)`.
								 */

								const parenAfter =
									sourceCode.getTokenAfter(node);

								return fixer.replaceTextRange(
									[innerNode.range[1], parenAfter.range[1]],
									`)${sourceCode.getText().slice(innerNode.range[1], parenAfter.range[0])}`,
								);
							}

							/*
							 * Call expression is wrapped in mandatory parens such as if(), or in necessary grouping parens.
							 * These parens cannot be removed, so just parenthesize the function expression.
							 */

							return fixer.replaceText(
								innerNode,
								`(${sourceCode.getText(innerNode)})`,
							);
						},
					});
				} else if (style === "outside" && !isCallExpressionWrapped) {
					context.report({
						node,
						messageId: "moveInvocation",
						fix(fixer) {
							/*
							 * The inner function expression will always be wrapped at this point.
							 * It's only necessary to replace the range between the end of the function expression
							 * and the call expression. For example, in `(function(foo) {})(bar)`, the range `)(bar)`
							 * should get replaced with `(bar))`.
							 */
							const parenAfter =
								sourceCode.getTokenAfter(innerNode);

							return fixer.replaceTextRange(
								[parenAfter.range[0], node.range[1]],
								`${sourceCode.getText().slice(parenAfter.range[1], node.range[1])})`,
							);
						},
					});
				}
			},
		};
	},
};

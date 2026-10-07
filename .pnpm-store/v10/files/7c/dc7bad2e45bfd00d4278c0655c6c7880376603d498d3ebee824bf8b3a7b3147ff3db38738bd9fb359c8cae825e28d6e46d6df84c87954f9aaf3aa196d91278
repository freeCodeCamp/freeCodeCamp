/**
 * @fileoverview Rule to spot scenarios where a newline looks like it is ending a statement, but is not.
 * @author Glen Mailer
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		docs: {
			description: "Disallow confusing multiline expressions",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-unexpected-multiline",
		},

		schema: [],
		messages: {
			function:
				"Unexpected newline between function and ( of function call.",
			property:
				"Unexpected newline between object and [ of property access.",
			taggedTemplate:
				"Unexpected newline between template tag and template literal.",
			division:
				"Unexpected newline between numerator and division operator.",
		},
	},

	create(context) {
		const REGEX_FLAG_MATCHER = /^[gimsuy]+$/u;

		const sourceCode = context.sourceCode;

		/**
		 * Check to see if there is a newline between the node and the following open bracket
		 * line's expression
		 * @param {ASTNode} node The node to check.
		 * @param {string} messageId The error messageId to use.
		 * @returns {void}
		 * @private
		 */
		function checkForBreakAfter(node, messageId) {
			const openParen = sourceCode.getTokenAfter(
				node,
				astUtils.isNotClosingParenToken,
			);
			const nodeExpressionEnd = sourceCode.getTokenBefore(openParen);

			if (openParen.loc.start.line !== nodeExpressionEnd.loc.end.line) {
				context.report({
					node,
					loc: openParen.loc,
					messageId,
				});
			}
		}

		//--------------------------------------------------------------------------
		// Public API
		//--------------------------------------------------------------------------

		return {
			MemberExpression(node) {
				if (!node.computed || node.optional) {
					return;
				}
				checkForBreakAfter(node.object, "property");
			},

			TaggedTemplateExpression(node) {
				const { quasi } = node;

				// handles common tags, parenthesized tags, and typescript's generic type arguments
				const tokenBefore = sourceCode.getTokenBefore(quasi);

				if (tokenBefore.loc.end.line !== quasi.loc.start.line) {
					context.report({
						node,
						loc: {
							start: quasi.loc.start,
							end: {
								line: quasi.loc.start.line,
								column: quasi.loc.start.column + 1,
							},
						},
						messageId: "taggedTemplate",
					});
				}
			},

			CallExpression(node) {
				if (node.arguments.length === 0 || node.optional) {
					return;
				}
				checkForBreakAfter(node.callee, "function");
			},

			"BinaryExpression[operator='/'] > BinaryExpression[operator='/'].left"(
				node,
			) {
				const secondSlash = sourceCode.getTokenAfter(
					node,
					token => token.value === "/",
				);
				const tokenAfterOperator =
					sourceCode.getTokenAfter(secondSlash);

				if (
					tokenAfterOperator.type === "Identifier" &&
					REGEX_FLAG_MATCHER.test(tokenAfterOperator.value) &&
					secondSlash.range[1] === tokenAfterOperator.range[0]
				) {
					checkForBreakAfter(node.left, "division");
				}
			},
		};
	},
};

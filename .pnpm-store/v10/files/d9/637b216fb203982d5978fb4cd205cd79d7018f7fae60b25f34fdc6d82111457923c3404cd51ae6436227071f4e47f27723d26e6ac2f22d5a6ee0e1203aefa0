/**
 * @fileoverview A rule to disallow negated left operands of the `in` operator
 * @author Michael Ficarra
 * @deprecated in ESLint v3.3.0
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		docs: {
			description:
				"Disallow negating the left operand in `in` expressions",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-negated-in-lhs",
		},

		deprecated: {
			message: "Renamed rule.",
			url: "https://eslint.org/blog/2016/08/eslint-v3.3.0-released/#deprecated-rules",
			deprecatedSince: "3.3.0",
			availableUntil: "11.0.0",
			replacedBy: [
				{
					rule: {
						name: "no-unsafe-negation",
						url: "https://eslint.org/docs/rules/no-unsafe-negation",
					},
				},
			],
		},
		schema: [],

		messages: {
			negatedLHS: "The 'in' expression's left operand is negated.",
		},
	},

	create(context) {
		return {
			BinaryExpression(node) {
				if (
					node.operator === "in" &&
					node.left.type === "UnaryExpression" &&
					node.left.operator === "!"
				) {
					context.report({ node, messageId: "negatedLHS" });
				}
			},
		};
	},
};

/**
 * @fileoverview Rule to flag nested ternary expressions
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description: "Disallow nested ternary expressions",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/no-nested-ternary",
		},

		schema: [],

		messages: {
			noNestedTernary: "Do not nest ternary expressions.",
		},
	},

	create(context) {
		return {
			ConditionalExpression(node) {
				if (
					node.alternate.type === "ConditionalExpression" ||
					node.consequent.type === "ConditionalExpression"
				) {
					context.report({
						node,
						messageId: "noNestedTernary",
					});
				}
			},
		};
	},
};

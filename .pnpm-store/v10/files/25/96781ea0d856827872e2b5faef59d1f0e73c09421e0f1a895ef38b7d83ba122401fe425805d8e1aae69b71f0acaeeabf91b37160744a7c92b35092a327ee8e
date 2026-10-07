/**
 * @fileoverview Rule to flag statements with function invocation preceded by
 * "new" and not part of assignment
 * @author Ilya Volodin
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
			description:
				"Disallow `new` operators outside of assignments or comparisons",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-new",
		},

		schema: [],

		messages: {
			noNewStatement: "Do not use 'new' for side effects.",
		},
	},

	create(context) {
		return {
			"ExpressionStatement > NewExpression"(node) {
				context.report({
					node: node.parent,
					messageId: "noNewStatement",
				});
			},
		};
	},
};

/**
 * @fileoverview disallow using an async function as a Promise executor
 * @author Teddy Katz
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
				"Disallow using an async function as a Promise executor",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-async-promise-executor",
		},

		fixable: null,
		schema: [],
		messages: {
			async: "Promise executor functions should not be async.",
		},
	},

	create(context) {
		return {
			"NewExpression[callee.name='Promise'][arguments.0.async=true]"(
				node,
			) {
				context.report({
					node: context.sourceCode.getFirstToken(
						node.arguments[0],
						token => token.value === "async",
					),
					messageId: "async",
				});
			},
		};
	},
};

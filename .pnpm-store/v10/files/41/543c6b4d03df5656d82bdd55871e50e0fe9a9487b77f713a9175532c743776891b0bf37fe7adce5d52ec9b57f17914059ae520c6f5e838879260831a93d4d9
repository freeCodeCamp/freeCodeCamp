/**
 * @fileoverview Warn when using template string syntax in regular strings
 * @author Jeroen Engels
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
				"Disallow template literal placeholder syntax in regular strings",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-template-curly-in-string",
		},

		schema: [],

		messages: {
			unexpectedTemplateExpression:
				"Unexpected template string expression.",
		},
	},

	create(context) {
		const regex = /\$\{[^}]+\}/u;

		return {
			Literal(node) {
				if (typeof node.value === "string" && regex.test(node.value)) {
					context.report({
						node,
						messageId: "unexpectedTemplateExpression",
					});
				}
			},
		};
	},
};

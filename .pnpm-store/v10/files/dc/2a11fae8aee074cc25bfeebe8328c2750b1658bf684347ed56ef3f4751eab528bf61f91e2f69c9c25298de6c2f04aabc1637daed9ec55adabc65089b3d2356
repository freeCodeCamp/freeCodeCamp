/**
 * @fileoverview Rule to flag when initializing octal literal
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
			description: "Disallow octal literals",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-octal",
		},

		schema: [],

		messages: {
			noOctal: "Octal literals should not be used.",
		},
	},

	create(context) {
		return {
			Literal(node) {
				if (typeof node.value === "number" && /^0\d/u.test(node.raw)) {
					context.report({
						node,
						messageId: "noOctal",
					});
				}
			},
		};
	},
};

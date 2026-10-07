/**
 * @fileoverview Rule to flag use of with statement
 * @author Nicholas C. Zakas
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
			description: "Disallow `with` statements",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-with",
		},

		schema: [],

		messages: {
			unexpectedWith: "Unexpected use of 'with' statement.",
		},
	},

	create(context) {
		return {
			WithStatement(node) {
				context.report({ node, messageId: "unexpectedWith" });
			},
		};
	},
};

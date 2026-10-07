/**
 * @fileoverview Rule to flag use of a debugger statement
 * @author Nicholas C. Zakas
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
			description: "Disallow the use of `debugger`",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-debugger",
		},

		fixable: null,
		schema: [],

		messages: {
			unexpected: "Unexpected 'debugger' statement.",
		},
	},

	create(context) {
		return {
			DebuggerStatement(node) {
				context.report({
					node,
					messageId: "unexpected",
				});
			},
		};
	},
};

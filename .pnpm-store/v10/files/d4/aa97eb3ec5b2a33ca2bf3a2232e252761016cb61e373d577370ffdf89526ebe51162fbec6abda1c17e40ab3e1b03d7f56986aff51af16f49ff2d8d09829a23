/**
 * @fileoverview Rule to check use of chained assignment expressions
 * @author Stewart Rand
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [
			{
				ignoreNonDeclaration: false,
			},
		],

		docs: {
			description: "Disallow use of chained assignment expressions",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-multi-assign",
		},

		schema: [
			{
				type: "object",
				properties: {
					ignoreNonDeclaration: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			unexpectedChain: "Unexpected chained assignment.",
		},
	},

	create(context) {
		const [{ ignoreNonDeclaration }] = context.options;
		const selectors = [
			"VariableDeclarator > AssignmentExpression.init",
			"PropertyDefinition > AssignmentExpression.value",
		];

		if (!ignoreNonDeclaration) {
			selectors.push("AssignmentExpression > AssignmentExpression.right");
		}

		return {
			[selectors](node) {
				context.report({
					node,
					messageId: "unexpectedChain",
				});
			},
		};
	},
};

/**
 * @fileoverview Rule to disallow use of void operator.
 * @author Mike Sidorov
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
				allowAsStatement: false,
			},
		],

		docs: {
			description: "Disallow `void` operators",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/no-void",
		},

		messages: {
			noVoid: "Expected 'undefined' and instead saw 'void'.",
		},

		schema: [
			{
				type: "object",
				properties: {
					allowAsStatement: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],
	},

	create(context) {
		const [{ allowAsStatement }] = context.options;

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			'UnaryExpression[operator="void"]'(node) {
				if (
					allowAsStatement &&
					node.parent &&
					node.parent.type === "ExpressionStatement"
				) {
					return;
				}
				context.report({
					node,
					messageId: "noVoid",
				});
			},
		};
	},
};

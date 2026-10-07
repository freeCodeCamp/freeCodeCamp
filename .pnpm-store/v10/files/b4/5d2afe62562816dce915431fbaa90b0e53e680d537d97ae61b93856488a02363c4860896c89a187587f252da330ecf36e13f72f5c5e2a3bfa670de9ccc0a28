/**
 * @fileoverview disallow use of the Buffer() constructor
 * @author Teddy Katz
 * @deprecated in ESLint v7.0.0
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		deprecated: {
			message: "Node.js rules were moved out of ESLint core.",
			url: "https://eslint.org/docs/latest/use/migrating-to-7.0.0#deprecate-node-rules",
			deprecatedSince: "7.0.0",
			availableUntil: "11.0.0",
			replacedBy: [
				{
					message:
						"eslint-plugin-n now maintains deprecated Node.js-related rules.",
					plugin: {
						name: "eslint-plugin-n",
						url: "https://github.com/eslint-community/eslint-plugin-n",
					},
					rule: {
						name: "no-deprecated-api",
						url: "https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-deprecated-api.md",
					},
				},
			],
		},

		type: "problem",

		docs: {
			description: "Disallow use of the `Buffer()` constructor",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-buffer-constructor",
		},

		schema: [],

		messages: {
			deprecated:
				"{{expr}} is deprecated. Use Buffer.from(), Buffer.alloc(), or Buffer.allocUnsafe() instead.",
		},
	},

	create(context) {
		//----------------------------------------------------------------------
		// Public
		//----------------------------------------------------------------------

		return {
			"CallExpression[callee.name='Buffer'], NewExpression[callee.name='Buffer']"(
				node,
			) {
				context.report({
					node,
					messageId: "deprecated",
					data: {
						expr:
							node.type === "CallExpression"
								? "Buffer()"
								: "new Buffer()",
					},
				});
			},
		};
	},
};

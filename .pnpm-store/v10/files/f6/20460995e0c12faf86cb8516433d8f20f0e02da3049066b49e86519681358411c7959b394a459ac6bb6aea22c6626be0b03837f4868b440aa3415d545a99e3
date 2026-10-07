/**
 * @fileoverview Disallow the use of process.exit()
 * @author Nicholas C. Zakas
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
						name: "no-process-exit",
						url: "https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-process-exit.md",
					},
				},
			],
		},

		type: "suggestion",

		docs: {
			description: "Disallow the use of `process.exit()`",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-process-exit",
		},

		schema: [],

		messages: {
			noProcessExit: "Don't use process.exit(); throw an error instead.",
		},
	},

	create(context) {
		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			"CallExpression > MemberExpression.callee[object.name = 'process'][property.name = 'exit']"(
				node,
			) {
				context.report({
					node: node.parent,
					messageId: "noProcessExit",
				});
			},
		};
	},
};

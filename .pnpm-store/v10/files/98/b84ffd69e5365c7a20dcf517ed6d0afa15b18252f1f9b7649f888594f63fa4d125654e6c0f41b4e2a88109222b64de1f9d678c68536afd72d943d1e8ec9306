/**
 * @fileoverview Disallow the use of process.env()
 * @author Vignesh Anand
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
						name: "no-process-env",
						url: "https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-process-env.md",
					},
				},
			],
		},

		type: "suggestion",

		docs: {
			description: "Disallow the use of `process.env`",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-process-env",
		},

		schema: [],

		messages: {
			unexpectedProcessEnv: "Unexpected use of process.env.",
		},
	},

	create(context) {
		return {
			MemberExpression(node) {
				const objectName = node.object.name,
					propertyName = node.property.name;

				if (
					objectName === "process" &&
					!node.computed &&
					propertyName &&
					propertyName === "env"
				) {
					context.report({ node, messageId: "unexpectedProcessEnv" });
				}
			},
		};
	},
};

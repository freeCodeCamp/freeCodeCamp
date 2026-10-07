/**
 * @fileoverview Rule to check for properties whose identifier ends with the string Sync
 * @author Matt DuVall<http://mattduvall.com/>
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
						name: "no-sync",
						url: "https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-sync.md",
					},
				},
			],
		},

		type: "suggestion",

		docs: {
			description: "Disallow synchronous methods",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-sync",
		},

		schema: [
			{
				type: "object",
				properties: {
					allowAtRootLevel: {
						type: "boolean",
						default: false,
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			noSync: "Unexpected sync method: '{{propertyName}}'.",
		},
	},

	create(context) {
		const selector =
			context.options[0] && context.options[0].allowAtRootLevel
				? ":function MemberExpression[property.name=/.*Sync$/]"
				: "MemberExpression[property.name=/.*Sync$/]";

		return {
			[selector](node) {
				context.report({
					node,
					messageId: "noSync",
					data: {
						propertyName: node.property.name,
					},
				});
			},
		};
	},
};

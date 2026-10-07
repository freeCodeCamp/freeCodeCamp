/**
 * @fileoverview Disallow string concatenation when using __dirname and __filename
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
						name: "no-path-concat",
						url: "https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-path-concat.md",
					},
				},
			],
		},

		type: "suggestion",

		docs: {
			description:
				"Disallow string concatenation with `__dirname` and `__filename`",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-path-concat",
		},

		schema: [],

		messages: {
			usePathFunctions:
				"Use path.join() or path.resolve() instead of + to create paths.",
		},
	},

	create(context) {
		const MATCHER = /^__(?:dir|file)name$/u;

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			BinaryExpression(node) {
				const left = node.left,
					right = node.right;

				if (
					node.operator === "+" &&
					((left.type === "Identifier" && MATCHER.test(left.name)) ||
						(right.type === "Identifier" &&
							MATCHER.test(right.name)))
				) {
					context.report({
						node,
						messageId: "usePathFunctions",
					});
				}
			},
		};
	},
};

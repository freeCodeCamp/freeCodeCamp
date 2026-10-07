/**
 * @fileoverview A rule to ensure consistent quotes used in jsx syntax.
 * @author Mathias Schreck <https://github.com/lo1tuma>
 * @deprecated in ESLint v8.53.0
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const QUOTE_SETTINGS = {
	"prefer-double": {
		quote: '"',
		description: "singlequote",
		convert(str) {
			return str.replace(/'/gu, '"');
		},
	},
	"prefer-single": {
		quote: "'",
		description: "doublequote",
		convert(str) {
			return str.replace(/"/gu, "'");
		},
	},
};

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		deprecated: {
			message: "Formatting rules are being moved out of ESLint core.",
			url: "https://eslint.org/blog/2023/10/deprecating-formatting-rules/",
			deprecatedSince: "8.53.0",
			availableUntil: "11.0.0",
			replacedBy: [
				{
					message:
						"ESLint Stylistic now maintains deprecated stylistic core rules.",
					url: "https://eslint.style/guide/migration",
					plugin: {
						name: "@stylistic/eslint-plugin",
						url: "https://eslint.style",
					},
					rule: {
						name: "jsx-quotes",
						url: "https://eslint.style/rules/jsx-quotes",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description:
				"Enforce the consistent use of either double or single quotes in JSX attributes",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/jsx-quotes",
		},

		fixable: "whitespace",

		schema: [
			{
				enum: ["prefer-single", "prefer-double"],
			},
		],
		messages: {
			unexpected: "Unexpected usage of {{description}}.",
		},
	},

	create(context) {
		const quoteOption = context.options[0] || "prefer-double",
			setting = QUOTE_SETTINGS[quoteOption];

		/**
		 * Checks if the given string literal node uses the expected quotes
		 * @param {ASTNode} node A string literal node.
		 * @returns {boolean} Whether or not the string literal used the expected quotes.
		 * @public
		 */
		function usesExpectedQuotes(node) {
			return (
				node.value.includes(setting.quote) ||
				astUtils.isSurroundedBy(node.raw, setting.quote)
			);
		}

		return {
			JSXAttribute(node) {
				const attributeValue = node.value;

				if (
					attributeValue &&
					astUtils.isStringLiteral(attributeValue) &&
					!usesExpectedQuotes(attributeValue)
				) {
					context.report({
						node: attributeValue,
						messageId: "unexpected",
						data: {
							description: setting.description,
						},
						fix(fixer) {
							return fixer.replaceText(
								attributeValue,
								setting.convert(attributeValue.raw),
							);
						},
					});
				}
			},
		};
	},
};

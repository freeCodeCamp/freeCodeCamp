/**
 * @fileoverview A rule to warn against using arrow functions when they could be
 * confused with comparisons
 * @author Jxck <https://github.com/Jxck>
 * @deprecated in ESLint v8.53.0
 */

"use strict";

const astUtils = require("./utils/ast-utils.js");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a node is a conditional expression.
 * @param {ASTNode} node node to test
 * @returns {boolean} `true` if the node is a conditional expression.
 */
function isConditional(node) {
	return node && node.type === "ConditionalExpression";
}

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
						name: "no-confusing-arrow",
						url: "https://eslint.style/rules/no-confusing-arrow",
					},
				},
			],
		},
		type: "suggestion",

		docs: {
			description:
				"Disallow arrow functions where they could be confused with comparisons",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-confusing-arrow",
		},

		fixable: "code",

		schema: [
			{
				type: "object",
				properties: {
					allowParens: { type: "boolean", default: true },
					onlyOneSimpleParam: { type: "boolean", default: false },
				},
				additionalProperties: false,
			},
		],

		messages: {
			confusing:
				"Arrow function used ambiguously with a conditional expression.",
		},
	},

	create(context) {
		const config = context.options[0] || {};
		const allowParens = config.allowParens || config.allowParens === void 0;
		const onlyOneSimpleParam = config.onlyOneSimpleParam;
		const sourceCode = context.sourceCode;

		/**
		 * Reports if an arrow function contains an ambiguous conditional.
		 * @param {ASTNode} node A node to check and report.
		 * @returns {void}
		 */
		function checkArrowFunc(node) {
			const body = node.body;

			if (
				isConditional(body) &&
				!(allowParens && astUtils.isParenthesised(sourceCode, body)) &&
				!(
					onlyOneSimpleParam &&
					!(
						node.params.length === 1 &&
						node.params[0].type === "Identifier"
					)
				)
			) {
				context.report({
					node,
					messageId: "confusing",
					fix(fixer) {
						// if `allowParens` is not set to true don't bother wrapping in parens
						return (
							allowParens &&
							fixer.replaceText(
								node.body,
								`(${sourceCode.getText(node.body)})`,
							)
						);
					},
				});
			}
		}

		return {
			ArrowFunctionExpression: checkArrowFunc,
		};
	},
};

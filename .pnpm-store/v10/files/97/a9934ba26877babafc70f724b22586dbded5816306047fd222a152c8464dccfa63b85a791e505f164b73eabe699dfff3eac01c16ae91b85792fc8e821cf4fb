/**
 * @fileoverview The rule should warn against code that tries to compare against -0.
 * @author Aladdin-ADD <hh_2013@foxmail.com>
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
			description: "Disallow comparing against `-0`",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-compare-neg-zero",
		},

		fixable: null,
		schema: [],

		messages: {
			unexpected:
				"Do not use the '{{operator}}' operator to compare against -0.",
		},
	},

	create(context) {
		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		/**
		 * Checks a given node is -0
		 * @param {ASTNode} node A node to check.
		 * @returns {boolean} `true` if the node is -0.
		 */
		function isNegZero(node) {
			return (
				node.type === "UnaryExpression" &&
				node.operator === "-" &&
				node.argument.type === "Literal" &&
				node.argument.value === 0
			);
		}
		const OPERATORS_TO_CHECK = new Set([
			">",
			">=",
			"<",
			"<=",
			"==",
			"===",
			"!=",
			"!==",
		]);

		return {
			BinaryExpression(node) {
				if (OPERATORS_TO_CHECK.has(node.operator)) {
					if (isNegZero(node.left) || isNegZero(node.right)) {
						context.report({
							node,
							messageId: "unexpected",
							data: { operator: node.operator },
						});
					}
				}
			},
		};
	},
};

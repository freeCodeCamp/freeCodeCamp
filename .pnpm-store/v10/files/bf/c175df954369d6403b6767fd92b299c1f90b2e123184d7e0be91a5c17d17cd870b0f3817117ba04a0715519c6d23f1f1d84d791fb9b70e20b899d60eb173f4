/**
 * @fileoverview Rule to disallow negating the left operand of relational operators
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether the given operator is `in` or `instanceof`
 * @param {string} op The operator type to check.
 * @returns {boolean} `true` if the operator is `in` or `instanceof`
 */
function isInOrInstanceOfOperator(op) {
	return op === "in" || op === "instanceof";
}

/**
 * Checks whether the given operator is an ordering relational operator or not.
 * @param {string} op The operator type to check.
 * @returns {boolean} `true` if the operator is an ordering relational operator.
 */
function isOrderingRelationalOperator(op) {
	return op === "<" || op === ">" || op === ">=" || op === "<=";
}

/**
 * Checks whether the given node is a logical negation expression or not.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} `true` if the node is a logical negation expression.
 */
function isNegation(node) {
	return node.type === "UnaryExpression" && node.operator === "!";
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		defaultOptions: [
			{
				enforceForOrderingRelations: false,
			},
		],

		docs: {
			description:
				"Disallow negating the left operand of relational operators",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-unsafe-negation",
		},

		hasSuggestions: true,

		schema: [
			{
				type: "object",
				properties: {
					enforceForOrderingRelations: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		fixable: null,

		messages: {
			unexpected:
				"Unexpected negating the left operand of '{{operator}}' operator.",
			suggestNegatedExpression:
				"Negate '{{operator}}' expression instead of its left operand. This changes the current behavior.",
			suggestParenthesisedNegation:
				"Wrap negation in '()' to make the intention explicit. This preserves the current behavior.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;
		const [{ enforceForOrderingRelations }] = context.options;

		return {
			BinaryExpression(node) {
				const operator = node.operator;
				const orderingRelationRuleApplies =
					enforceForOrderingRelations &&
					isOrderingRelationalOperator(operator);

				if (
					(isInOrInstanceOfOperator(operator) ||
						orderingRelationRuleApplies) &&
					isNegation(node.left) &&
					!astUtils.isParenthesised(sourceCode, node.left)
				) {
					context.report({
						node,
						loc: node.left.loc,
						messageId: "unexpected",
						data: { operator },
						suggest: [
							{
								messageId: "suggestNegatedExpression",
								data: { operator },
								fix(fixer) {
									const negationToken =
										sourceCode.getFirstToken(node.left);
									const fixRange = [
										negationToken.range[1],
										node.range[1],
									];
									const text = sourceCode.text.slice(
										fixRange[0],
										fixRange[1],
									);

									return fixer.replaceTextRange(
										fixRange,
										`(${text})`,
									);
								},
							},
							{
								messageId: "suggestParenthesisedNegation",
								fix(fixer) {
									return fixer.replaceText(
										node.left,
										`(${sourceCode.getText(node.left)})`,
									);
								},
							},
						],
					});
				}
			},
		};
	},
};

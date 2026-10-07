/**
 * @fileoverview Rule to flag statements that use != and == instead of !== and ===
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",
		hasSuggestions: true,

		docs: {
			description: "Require the use of `===` and `!==`",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/eqeqeq",
		},

		schema: {
			anyOf: [
				{
					type: "array",
					items: [
						{
							enum: ["always"],
						},
						{
							type: "object",
							properties: {
								null: {
									enum: ["always", "never", "ignore"],
								},
							},
							additionalProperties: false,
						},
					],
					additionalItems: false,
				},
				{
					type: "array",
					items: [
						{
							enum: ["smart", "allow-null"],
						},
					],
					additionalItems: false,
				},
			],
		},

		fixable: "code",

		messages: {
			unexpected:
				"Expected '{{expectedOperator}}' and instead saw '{{actualOperator}}'.",
			replaceOperator:
				"Use '{{expectedOperator}}' instead of '{{actualOperator}}'.",
		},
	},

	create(context) {
		const config = context.options[0] || "always";
		const options = context.options[1] || {};
		const sourceCode = context.sourceCode;

		const nullOption =
			config === "always" ? options.null || "always" : "ignore";
		const enforceRuleForNull = nullOption === "always";
		const enforceInverseRuleForNull = nullOption === "never";

		/**
		 * Checks if an expression is a typeof expression
		 * @param {ASTNode} node The node to check
		 * @returns {boolean} if the node is a typeof expression
		 */
		function isTypeOf(node) {
			return (
				node.type === "UnaryExpression" && node.operator === "typeof"
			);
		}

		/**
		 * Checks if either operand of a binary expression is a typeof operation
		 * @param {ASTNode} node The node to check
		 * @returns {boolean} if one of the operands is typeof
		 * @private
		 */
		function isTypeOfBinary(node) {
			return isTypeOf(node.left) || isTypeOf(node.right);
		}

		/**
		 * Checks if operands are literals of the same type (via typeof)
		 * @param {ASTNode} node The node to check
		 * @returns {boolean} if operands are of same type
		 * @private
		 */
		function areLiteralsAndSameType(node) {
			return (
				node.left.type === "Literal" &&
				node.right.type === "Literal" &&
				typeof node.left.value === typeof node.right.value
			);
		}

		/**
		 * Checks if one of the operands is a literal null
		 * @param {ASTNode} node The node to check
		 * @returns {boolean} if operands are null
		 * @private
		 */
		function isNullCheck(node) {
			return (
				astUtils.isNullLiteral(node.right) ||
				astUtils.isNullLiteral(node.left)
			);
		}

		/**
		 * Reports a message for this rule.
		 * @param {ASTNode} node The binary expression node that was checked
		 * @param {string} expectedOperator The operator that was expected (either '==', '!=', '===', or '!==')
		 * @returns {void}
		 * @private
		 */
		function report(node, expectedOperator) {
			const operatorToken = sourceCode.getFirstTokenBetween(
				node.left,
				node.right,
				token => token.value === node.operator,
			);

			const commonReportParams = {
				node,
				loc: operatorToken.loc,
				messageId: "unexpected",
				data: { expectedOperator, actualOperator: node.operator },
			};

			if (isTypeOfBinary(node) || areLiteralsAndSameType(node)) {
				context.report({
					...commonReportParams,
					fix(fixer) {
						return fixer.replaceText(
							operatorToken,
							expectedOperator,
						);
					},
				});
			} else {
				context.report({
					...commonReportParams,
					suggest: [
						{
							messageId: "replaceOperator",
							data: {
								expectedOperator,
								actualOperator: node.operator,
							},
							fix: fixer =>
								fixer.replaceText(
									operatorToken,
									expectedOperator,
								),
						},
					],
				});
			}
		}

		return {
			BinaryExpression(node) {
				const isNull = isNullCheck(node);

				if (node.operator !== "==" && node.operator !== "!=") {
					if (enforceInverseRuleForNull && isNull) {
						report(node, node.operator.slice(0, -1));
					}
					return;
				}

				if (
					config === "smart" &&
					(isTypeOfBinary(node) ||
						areLiteralsAndSameType(node) ||
						isNull)
				) {
					return;
				}

				if (!enforceRuleForNull && isNull) {
					return;
				}

				report(node, `${node.operator}=`);
			},
		};
	},
};

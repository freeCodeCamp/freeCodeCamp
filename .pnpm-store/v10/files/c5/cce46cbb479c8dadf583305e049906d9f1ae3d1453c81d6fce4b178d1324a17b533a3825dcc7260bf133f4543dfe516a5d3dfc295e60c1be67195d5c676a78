/**
 * @fileoverview Rule to flag bitwise identifiers
 * @author Nicholas C. Zakas
 */

"use strict";

/*
 *
 * Set of bitwise operators.
 *
 */
const BITWISE_OPERATORS = [
	"^",
	"|",
	"&",
	"<<",
	">>",
	">>>",
	"^=",
	"|=",
	"&=",
	"<<=",
	">>=",
	">>>=",
	"~",
];

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [
			{
				allow: [],
				int32Hint: false,
			},
		],

		docs: {
			description: "Disallow bitwise operators",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-bitwise",
		},

		schema: [
			{
				type: "object",
				properties: {
					allow: {
						type: "array",
						items: {
							enum: BITWISE_OPERATORS,
						},
						uniqueItems: true,
					},
					int32Hint: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			unexpected: "Unexpected use of '{{operator}}'.",
		},
	},

	create(context) {
		const [{ allow: allowed, int32Hint }] = context.options;

		/**
		 * Reports an unexpected use of a bitwise operator.
		 * @param {ASTNode} node Node which contains the bitwise operator.
		 * @returns {void}
		 */
		function report(node) {
			context.report({
				node,
				messageId: "unexpected",
				data: { operator: node.operator },
			});
		}

		/**
		 * Checks if the given node has a bitwise operator.
		 * @param {ASTNode} node The node to check.
		 * @returns {boolean} Whether or not the node has a bitwise operator.
		 */
		function hasBitwiseOperator(node) {
			return BITWISE_OPERATORS.includes(node.operator);
		}

		/**
		 * Checks if exceptions were provided, e.g. `{ allow: ['~', '|'] }`.
		 * @param {ASTNode} node The node to check.
		 * @returns {boolean} Whether or not the node has a bitwise operator.
		 */
		function allowedOperator(node) {
			return allowed.includes(node.operator);
		}

		/**
		 * Checks if the given bitwise operator is used for integer typecasting, i.e. "|0"
		 * @param {ASTNode} node The node to check.
		 * @returns {boolean} whether the node is used in integer typecasting.
		 */
		function isInt32Hint(node) {
			return (
				int32Hint &&
				node.operator === "|" &&
				node.right &&
				node.right.type === "Literal" &&
				node.right.value === 0
			);
		}

		/**
		 * Report if the given node contains a bitwise operator.
		 * @param {ASTNode} node The node to check.
		 * @returns {void}
		 */
		function checkNodeForBitwiseOperator(node) {
			if (
				hasBitwiseOperator(node) &&
				!allowedOperator(node) &&
				!isInt32Hint(node)
			) {
				report(node);
			}
		}

		return {
			AssignmentExpression: checkNodeForBitwiseOperator,
			BinaryExpression: checkNodeForBitwiseOperator,
			UnaryExpression: checkNodeForBitwiseOperator,
		};
	},
};

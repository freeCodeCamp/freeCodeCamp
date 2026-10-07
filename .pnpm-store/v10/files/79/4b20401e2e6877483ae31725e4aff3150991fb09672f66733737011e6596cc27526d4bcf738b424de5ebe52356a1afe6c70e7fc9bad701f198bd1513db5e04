/**
 * @fileoverview Rule to disallow mixed binary operators.
 * @author Toru Nagashima
 * @deprecated in ESLint v8.53.0
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils.js");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const ARITHMETIC_OPERATORS = ["+", "-", "*", "/", "%", "**"];
const BITWISE_OPERATORS = ["&", "|", "^", "~", "<<", ">>", ">>>"];
const COMPARISON_OPERATORS = ["==", "!=", "===", "!==", ">", ">=", "<", "<="];
const LOGICAL_OPERATORS = ["&&", "||"];
const RELATIONAL_OPERATORS = ["in", "instanceof"];
const TERNARY_OPERATOR = ["?:"];
const COALESCE_OPERATOR = ["??"];
const ALL_OPERATORS = [].concat(
	ARITHMETIC_OPERATORS,
	BITWISE_OPERATORS,
	COMPARISON_OPERATORS,
	LOGICAL_OPERATORS,
	RELATIONAL_OPERATORS,
	TERNARY_OPERATOR,
	COALESCE_OPERATOR,
);
const DEFAULT_GROUPS = [
	ARITHMETIC_OPERATORS,
	BITWISE_OPERATORS,
	COMPARISON_OPERATORS,
	LOGICAL_OPERATORS,
	RELATIONAL_OPERATORS,
];
const TARGET_NODE_TYPE = /^(?:Binary|Logical|Conditional)Expression$/u;

/**
 * Normalizes options.
 * @param {Object|undefined} options A options object to normalize.
 * @returns {Object} Normalized option object.
 */
function normalizeOptions(options = {}) {
	const hasGroups = options.groups && options.groups.length > 0;
	const groups = hasGroups ? options.groups : DEFAULT_GROUPS;
	const allowSamePrecedence = options.allowSamePrecedence !== false;

	return {
		groups,
		allowSamePrecedence,
	};
}

/**
 * Checks whether any group which includes both given operator exists or not.
 * @param {Array<string[]>} groups A list of groups to check.
 * @param {string} left An operator.
 * @param {string} right Another operator.
 * @returns {boolean} `true` if such group existed.
 */
function includesBothInAGroup(groups, left, right) {
	return groups.some(group => group.includes(left) && group.includes(right));
}

/**
 * Checks whether the given node is a conditional expression and returns the test node else the left node.
 * @param {ASTNode} node A node which can be a BinaryExpression or a LogicalExpression node.
 * This parent node can be BinaryExpression, LogicalExpression
 *      , or a ConditionalExpression node
 * @returns {ASTNode} node the appropriate node(left or test).
 */
function getChildNode(node) {
	return node.type === "ConditionalExpression" ? node.test : node.left;
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
						name: "no-mixed-operators",
						url: "https://eslint.style/rules/no-mixed-operators",
					},
				},
			],
		},
		type: "suggestion",

		docs: {
			description: "Disallow mixed binary operators",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-mixed-operators",
		},

		schema: [
			{
				type: "object",
				properties: {
					groups: {
						type: "array",
						items: {
							type: "array",
							items: { enum: ALL_OPERATORS },
							minItems: 2,
							uniqueItems: true,
						},
						uniqueItems: true,
					},
					allowSamePrecedence: {
						type: "boolean",
						default: true,
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			unexpectedMixedOperator:
				"Unexpected mix of '{{leftOperator}}' and '{{rightOperator}}'. Use parentheses to clarify the intended order of operations.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;
		const options = normalizeOptions(context.options[0]);

		/**
		 * Checks whether a given node should be ignored by options or not.
		 * @param {ASTNode} node A node to check. This is a BinaryExpression
		 *      node or a LogicalExpression node. This parent node is one of
		 *      them, too.
		 * @returns {boolean} `true` if the node should be ignored.
		 */
		function shouldIgnore(node) {
			const a = node;
			const b = node.parent;

			return (
				!includesBothInAGroup(
					options.groups,
					a.operator,
					b.type === "ConditionalExpression" ? "?:" : b.operator,
				) ||
				(options.allowSamePrecedence &&
					astUtils.getPrecedence(a) === astUtils.getPrecedence(b))
			);
		}

		/**
		 * Checks whether the operator of a given node is mixed with parent
		 * node's operator or not.
		 * @param {ASTNode} node A node to check. This is a BinaryExpression
		 *      node or a LogicalExpression node. This parent node is one of
		 *      them, too.
		 * @returns {boolean} `true` if the node was mixed.
		 */
		function isMixedWithParent(node) {
			return (
				node.operator !== node.parent.operator &&
				!astUtils.isParenthesised(sourceCode, node)
			);
		}

		/**
		 * Gets the operator token of a given node.
		 * @param {ASTNode} node A node to check. This is a BinaryExpression
		 *      node or a LogicalExpression node.
		 * @returns {Token} The operator token of the node.
		 */
		function getOperatorToken(node) {
			return sourceCode.getTokenAfter(
				getChildNode(node),
				astUtils.isNotClosingParenToken,
			);
		}

		/**
		 * Reports both the operator of a given node and the operator of the
		 * parent node.
		 * @param {ASTNode} node A node to check. This is a BinaryExpression
		 *      node or a LogicalExpression node. This parent node is one of
		 *      them, too.
		 * @returns {void}
		 */
		function reportBothOperators(node) {
			const parent = node.parent;
			const left = getChildNode(parent) === node ? node : parent;
			const right = getChildNode(parent) !== node ? node : parent;
			const data = {
				leftOperator: left.operator || "?:",
				rightOperator: right.operator || "?:",
			};

			context.report({
				node: left,
				loc: getOperatorToken(left).loc,
				messageId: "unexpectedMixedOperator",
				data,
			});
			context.report({
				node: right,
				loc: getOperatorToken(right).loc,
				messageId: "unexpectedMixedOperator",
				data,
			});
		}

		/**
		 * Checks between the operator of this node and the operator of the
		 * parent node.
		 * @param {ASTNode} node A node to check.
		 * @returns {void}
		 */
		function check(node) {
			if (
				TARGET_NODE_TYPE.test(node.parent.type) &&
				isMixedWithParent(node) &&
				!shouldIgnore(node)
			) {
				reportBothOperators(node);
			}
		}

		return {
			BinaryExpression: check,
			LogicalExpression: check,
		};
	},
};

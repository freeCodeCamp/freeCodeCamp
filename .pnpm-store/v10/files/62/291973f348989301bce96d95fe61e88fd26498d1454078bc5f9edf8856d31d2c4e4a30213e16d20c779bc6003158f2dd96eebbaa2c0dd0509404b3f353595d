/**
 * @fileoverview Rule to replace assignment expressions with operator assignment
 * @author Brandon Mills
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
 * Checks whether an operator is commutative and has an operator assignment
 * shorthand form.
 * @param {string} operator Operator to check.
 * @returns {boolean} True if the operator is commutative and has a
 *     shorthand form.
 */
function isCommutativeOperatorWithShorthand(operator) {
	return ["*", "&", "^", "|"].includes(operator);
}

/**
 * Checks whether an operator is not commutative and has an operator assignment
 * shorthand form.
 * @param {string} operator Operator to check.
 * @returns {boolean} True if the operator is not commutative and has
 *     a shorthand form.
 */
function isNonCommutativeOperatorWithShorthand(operator) {
	return ["+", "-", "/", "%", "<<", ">>", ">>>", "**"].includes(operator);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * Determines if the left side of a node can be safely fixed (i.e. if it activates the same getters/setters and)
 * toString calls regardless of whether assignment shorthand is used)
 * @param {ASTNode} node The node on the left side of the expression
 * @returns {boolean} `true` if the node can be fixed
 */
function canBeFixed(node) {
	return (
		node.type === "Identifier" ||
		(node.type === "MemberExpression" &&
			(node.object.type === "Identifier" ||
				node.object.type === "ThisExpression") &&
			(!node.computed || node.property.type === "Literal"))
	);
}

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: ["always"],

		docs: {
			description:
				"Require or disallow assignment operator shorthand where possible",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/operator-assignment",
		},

		schema: [
			{
				enum: ["always", "never"],
			},
		],

		fixable: "code",
		messages: {
			replaced:
				"Assignment (=) can be replaced with operator assignment ({{operator}}).",
			unexpected:
				"Unexpected operator assignment ({{operator}}) shorthand.",
		},
	},

	create(context) {
		const never = context.options[0] === "never";
		const sourceCode = context.sourceCode;

		/**
		 * Returns the operator token of an AssignmentExpression or BinaryExpression
		 * @param {ASTNode} node An AssignmentExpression or BinaryExpression node
		 * @returns {Token} The operator token in the node
		 */
		function getOperatorToken(node) {
			return sourceCode.getFirstTokenBetween(
				node.left,
				node.right,
				token => token.value === node.operator,
			);
		}

		/**
		 * Ensures that an assignment uses the shorthand form where possible.
		 * @param {ASTNode} node An AssignmentExpression node.
		 * @returns {void}
		 */
		function verify(node) {
			if (
				node.operator !== "=" ||
				node.right.type !== "BinaryExpression"
			) {
				return;
			}

			const left = node.left;
			const expr = node.right;
			const operator = expr.operator;

			if (
				isCommutativeOperatorWithShorthand(operator) ||
				isNonCommutativeOperatorWithShorthand(operator)
			) {
				const replacementOperator = `${operator}=`;

				if (astUtils.isSameReference(left, expr.left, true)) {
					context.report({
						node,
						messageId: "replaced",
						data: { operator: replacementOperator },
						fix(fixer) {
							if (canBeFixed(left) && canBeFixed(expr.left)) {
								const equalsToken = getOperatorToken(node);
								const operatorToken = getOperatorToken(expr);
								const leftText = sourceCode
									.getText()
									.slice(node.range[0], equalsToken.range[0]);
								const rightText = sourceCode
									.getText()
									.slice(
										operatorToken.range[1],
										node.right.range[1],
									);

								// Check for comments that would be removed.
								if (
									sourceCode.commentsExistBetween(
										equalsToken,
										operatorToken,
									)
								) {
									return null;
								}

								return fixer.replaceText(
									node,
									`${leftText}${replacementOperator}${rightText}`,
								);
							}
							return null;
						},
					});
				} else if (
					astUtils.isSameReference(left, expr.right, true) &&
					isCommutativeOperatorWithShorthand(operator)
				) {
					/*
					 * This case can't be fixed safely.
					 * If `a` and `b` both have custom valueOf() behavior, then fixing `a = b * a` to `a *= b` would
					 * change the execution order of the valueOf() functions.
					 */
					context.report({
						node,
						messageId: "replaced",
						data: { operator: replacementOperator },
					});
				}
			}
		}

		/**
		 * Warns if an assignment expression uses operator assignment shorthand.
		 * @param {ASTNode} node An AssignmentExpression node.
		 * @returns {void}
		 */
		function prohibit(node) {
			if (
				node.operator !== "=" &&
				!astUtils.isLogicalAssignmentOperator(node.operator)
			) {
				context.report({
					node,
					messageId: "unexpected",
					data: { operator: node.operator },
					fix(fixer) {
						if (canBeFixed(node.left)) {
							const firstToken = sourceCode.getFirstToken(node);
							const operatorToken = getOperatorToken(node);
							const leftText = sourceCode
								.getText()
								.slice(node.range[0], operatorToken.range[0]);
							const newOperator = node.operator.slice(0, -1);
							let rightText;

							// Check for comments that would be duplicated.
							if (
								sourceCode.commentsExistBetween(
									firstToken,
									operatorToken,
								)
							) {
								return null;
							}

							// If this change would modify precedence (e.g. `foo *= bar + 1` => `foo = foo * (bar + 1)`), parenthesize the right side.
							if (
								astUtils.getPrecedence(node.right) <=
									astUtils.getPrecedence({
										type: "BinaryExpression",
										operator: newOperator,
									}) &&
								!astUtils.isParenthesised(
									sourceCode,
									node.right,
								)
							) {
								rightText = `${sourceCode.text.slice(operatorToken.range[1], node.right.range[0])}(${sourceCode.getText(node.right)})`;
							} else {
								const tokenAfterOperator =
									sourceCode.getTokenAfter(operatorToken, {
										includeComments: true,
									});
								let rightTextPrefix = "";

								if (
									operatorToken.range[1] ===
										tokenAfterOperator.range[0] &&
									!astUtils.canTokensBeAdjacent(
										{
											type: "Punctuator",
											value: newOperator,
										},
										tokenAfterOperator,
									)
								) {
									rightTextPrefix = " "; // foo+=+bar -> foo= foo+ +bar
								}

								rightText = `${rightTextPrefix}${sourceCode.text.slice(operatorToken.range[1], node.range[1])}`;
							}

							return fixer.replaceText(
								node,
								`${leftText}= ${leftText}${newOperator}${rightText}`,
							);
						}
						return null;
					},
				});
			}
		}

		return {
			AssignmentExpression: !never ? verify : prohibit,
		};
	},
};

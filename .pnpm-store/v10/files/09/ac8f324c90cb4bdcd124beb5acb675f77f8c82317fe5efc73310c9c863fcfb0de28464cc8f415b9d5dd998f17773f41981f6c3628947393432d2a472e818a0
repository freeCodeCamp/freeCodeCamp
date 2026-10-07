/**
 * @fileoverview Rule to flag use of unary increment and decrement operators.
 * @author Ian Christian Myers
 * @author Brody McKee (github.com/mrmckeb)
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Determines whether the given node is the update node of a `ForStatement`.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} `true` if the node is `ForStatement` update.
 */
function isForStatementUpdate(node) {
	const parent = node.parent;

	return parent.type === "ForStatement" && parent.update === node;
}

/**
 * Determines whether the given node is considered to be a for loop "afterthought" by the logic of this rule.
 * In particular, it returns `true` if the given node is either:
 *   - The update node of a `ForStatement`: for (;; i++) {}
 *   - An operand of a sequence expression that is the update node: for (;; foo(), i++) {}
 *   - An operand of a sequence expression that is child of another sequence expression, etc.,
 *     up to the sequence expression that is the update node: for (;; foo(), (bar(), (baz(), i++))) {}
 * @param {ASTNode} node The node to check.
 * @returns {boolean} `true` if the node is a for loop afterthought.
 */
function isForLoopAfterthought(node) {
	const parent = node.parent;

	if (parent.type === "SequenceExpression") {
		return isForLoopAfterthought(parent);
	}

	return isForStatementUpdate(node);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [
			{
				allowForLoopAfterthoughts: false,
			},
		],

		docs: {
			description: "Disallow the unary operators `++` and `--`",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/no-plusplus",
		},

		schema: [
			{
				type: "object",
				properties: {
					allowForLoopAfterthoughts: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			unexpectedUnaryOp: "Unary operator '{{operator}}' used.",
		},
	},

	create(context) {
		const [{ allowForLoopAfterthoughts }] = context.options;

		return {
			UpdateExpression(node) {
				if (allowForLoopAfterthoughts && isForLoopAfterthought(node)) {
					return;
				}

				context.report({
					node,
					messageId: "unexpectedUnaryOp",
					data: {
						operator: node.operator,
					},
				});
			},
		};
	},
};

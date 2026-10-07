/**
 * @fileoverview Rule to flag use of comma operator
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

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description: "Disallow comma operators",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-sequences",
		},

		schema: [
			{
				type: "object",
				properties: {
					allowInParentheses: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		defaultOptions: [
			{
				allowInParentheses: true,
			},
		],

		messages: {
			unexpectedCommaExpression: "Unexpected use of comma operator.",
		},
	},

	create(context) {
		const [{ allowInParentheses }] = context.options;
		const sourceCode = context.sourceCode;

		/**
		 * Parts of the grammar that are required to have parens.
		 */
		const parenthesized = {
			DoWhileStatement: "test",
			IfStatement: "test",
			SwitchStatement: "discriminant",
			WhileStatement: "test",
			WithStatement: "object",
			ArrowFunctionExpression: "body",

			/*
			 * Omitting CallExpression - commas are parsed as argument separators
			 * Omitting NewExpression - commas are parsed as argument separators
			 * Omitting ForInStatement - parts aren't individually parenthesised
			 * Omitting ForStatement - parts aren't individually parenthesised
			 */
		};

		/**
		 * Determines whether a node is required by the grammar to be wrapped in
		 * parens, e.g. the test of an if statement.
		 * @param {ASTNode} node The AST node
		 * @returns {boolean} True if parens around node belong to parent node.
		 */
		function requiresExtraParens(node) {
			return (
				node.parent &&
				parenthesized[node.parent.type] &&
				node === node.parent[parenthesized[node.parent.type]]
			);
		}

		/**
		 * Check if a node is wrapped in parens.
		 * @param {ASTNode} node The AST node
		 * @returns {boolean} True if the node has a paren on each side.
		 */
		function isParenthesised(node) {
			return astUtils.isParenthesised(sourceCode, node);
		}

		/**
		 * Check if a node is wrapped in two levels of parens.
		 * @param {ASTNode} node The AST node
		 * @returns {boolean} True if two parens surround the node on each side.
		 */
		function isParenthesisedTwice(node) {
			const previousToken = sourceCode.getTokenBefore(node, 1),
				nextToken = sourceCode.getTokenAfter(node, 1);

			return (
				isParenthesised(node) &&
				previousToken &&
				nextToken &&
				astUtils.isOpeningParenToken(previousToken) &&
				previousToken.range[1] <= node.range[0] &&
				astUtils.isClosingParenToken(nextToken) &&
				nextToken.range[0] >= node.range[1]
			);
		}

		return {
			SequenceExpression(node) {
				// Always allow sequences in for statement update
				if (
					node.parent.type === "ForStatement" &&
					(node === node.parent.init || node === node.parent.update)
				) {
					return;
				}

				// Wrapping a sequence in extra parens indicates intent
				if (allowInParentheses) {
					if (requiresExtraParens(node)) {
						if (isParenthesisedTwice(node)) {
							return;
						}
					} else {
						if (isParenthesised(node)) {
							return;
						}
					}
				}

				const firstCommaToken = sourceCode.getTokenAfter(
					node.expressions[0],
					astUtils.isCommaToken,
				);

				context.report({
					node,
					loc: firstCommaToken.loc,
					messageId: "unexpectedCommaExpression",
				});
			},
		};
	},
};

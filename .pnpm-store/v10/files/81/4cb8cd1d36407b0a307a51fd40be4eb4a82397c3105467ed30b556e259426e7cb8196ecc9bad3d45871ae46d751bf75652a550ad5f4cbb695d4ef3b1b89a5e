/**
 * @fileoverview Rule to flag use of unnecessary semicolons
 * @author Nicholas C. Zakas
 * @deprecated in ESLint v8.53.0
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const FixTracker = require("./utils/fix-tracker");
const astUtils = require("./utils/ast-utils");

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
						name: "no-extra-semi",
						url: "https://eslint.style/rules/no-extra-semi",
					},
				},
			],
		},
		type: "suggestion",

		docs: {
			description: "Disallow unnecessary semicolons",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-extra-semi",
		},

		fixable: "code",
		schema: [],

		messages: {
			unexpected: "Unnecessary semicolon.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		/**
		 * Checks if a node or token is fixable.
		 * A node is fixable if it can be removed without turning a subsequent statement into a directive after fixing other nodes.
		 * @param {Token} nodeOrToken The node or token to check.
		 * @returns {boolean} Whether or not the node is fixable.
		 */
		function isFixable(nodeOrToken) {
			const nextToken = sourceCode.getTokenAfter(nodeOrToken);

			if (!nextToken || nextToken.type !== "String") {
				return true;
			}
			const stringNode = sourceCode.getNodeByRangeIndex(
				nextToken.range[0],
			);

			return !astUtils.isTopLevelExpressionStatement(stringNode.parent);
		}

		/**
		 * Reports an unnecessary semicolon error.
		 * @param {Node|Token} nodeOrToken A node or a token to be reported.
		 * @returns {void}
		 */
		function report(nodeOrToken) {
			context.report({
				node: nodeOrToken,
				messageId: "unexpected",
				fix: isFixable(nodeOrToken)
					? fixer =>
							/*
							 * Expand the replacement range to include the surrounding
							 * tokens to avoid conflicting with semi.
							 * https://github.com/eslint/eslint/issues/7928
							 */
							new FixTracker(fixer, context.sourceCode)
								.retainSurroundingTokens(nodeOrToken)
								.remove(nodeOrToken)
					: null,
			});
		}

		/**
		 * Checks for a part of a class body.
		 * This checks tokens from a specified token to a next MethodDefinition or the end of class body.
		 * @param {Token} firstToken The first token to check.
		 * @returns {void}
		 */
		function checkForPartOfClassBody(firstToken) {
			for (
				let token = firstToken;
				token.type === "Punctuator" &&
				!astUtils.isClosingBraceToken(token);
				token = sourceCode.getTokenAfter(token)
			) {
				if (astUtils.isSemicolonToken(token)) {
					report(token);
				}
			}
		}

		return {
			/**
			 * Reports this empty statement, except if the parent node is a loop.
			 * @param {Node} node A EmptyStatement node to be reported.
			 * @returns {void}
			 */
			EmptyStatement(node) {
				const parent = node.parent,
					allowedParentTypes = [
						"ForStatement",
						"ForInStatement",
						"ForOfStatement",
						"WhileStatement",
						"DoWhileStatement",
						"IfStatement",
						"LabeledStatement",
						"WithStatement",
					];

				if (!allowedParentTypes.includes(parent.type)) {
					report(node);
				}
			},

			/**
			 * Checks tokens from the head of this class body to the first MethodDefinition or the end of this class body.
			 * @param {Node} node A ClassBody node to check.
			 * @returns {void}
			 */
			ClassBody(node) {
				checkForPartOfClassBody(sourceCode.getFirstToken(node, 1)); // 0 is `{`.
			},

			/**
			 * Checks tokens from this MethodDefinition to the next MethodDefinition or the end of this class body.
			 * @param {Node} node A MethodDefinition node of the start point.
			 * @returns {void}
			 */
			"MethodDefinition, PropertyDefinition, StaticBlock"(node) {
				checkForPartOfClassBody(sourceCode.getTokenAfter(node));
			},
		};
	},
};

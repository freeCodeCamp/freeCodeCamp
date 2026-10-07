/**
 * @fileoverview Disallows unnecessary `return await`
 * @author Jordan Harband
 * @deprecated in ESLint v8.46.0
 */
"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		hasSuggestions: true,
		type: "suggestion",

		docs: {
			description: "Disallow unnecessary `return await`",

			recommended: false,

			url: "https://eslint.org/docs/latest/rules/no-return-await",
		},

		fixable: null,

		deprecated: {
			message:
				"The original assumption of the rule no longer holds true because of engine optimization.",
			deprecatedSince: "8.46.0",
			availableUntil: null,
			replacedBy: [],
		},

		schema: [],

		messages: {
			removeAwait: "Remove redundant `await`.",
			redundantUseOfAwait: "Redundant use of `await` on a return value.",
		},
	},

	create(context) {
		/**
		 * Reports a found unnecessary `await` expression.
		 * @param {ASTNode} node The node representing the `await` expression to report
		 * @returns {void}
		 */
		function reportUnnecessaryAwait(node) {
			context.report({
				node: context.sourceCode.getFirstToken(node),
				loc: node.loc,
				messageId: "redundantUseOfAwait",
				suggest: [
					{
						messageId: "removeAwait",
						fix(fixer) {
							const sourceCode = context.sourceCode;
							const [awaitToken, tokenAfterAwait] =
								sourceCode.getFirstTokens(node, 2);

							const areAwaitAndAwaitedExpressionOnTheSameLine =
								awaitToken.loc.start.line ===
								tokenAfterAwait.loc.start.line;

							if (!areAwaitAndAwaitedExpressionOnTheSameLine) {
								return null;
							}

							const [startOfAwait, endOfAwait] = awaitToken.range;

							const characterAfterAwait =
								sourceCode.text[endOfAwait];
							const trimLength =
								characterAfterAwait === " " ? 1 : 0;

							const range = [
								startOfAwait,
								endOfAwait + trimLength,
							];

							return fixer.removeRange(range);
						},
					},
				],
			});
		}

		/**
		 * Determines whether a thrown error from this node will be caught/handled within this function rather than immediately halting
		 * this function. For example, a statement in a `try` block will always have an error handler. A statement in
		 * a `catch` block will only have an error handler if there is also a `finally` block.
		 * @param {ASTNode} node A node representing a location where an could be thrown
		 * @returns {boolean} `true` if a thrown error will be caught/handled in this function
		 */
		function hasErrorHandler(node) {
			let ancestor = node;

			while (
				!astUtils.isFunction(ancestor) &&
				ancestor.type !== "Program"
			) {
				if (
					ancestor.parent.type === "TryStatement" &&
					(ancestor === ancestor.parent.block ||
						(ancestor === ancestor.parent.handler &&
							ancestor.parent.finalizer))
				) {
					return true;
				}
				ancestor = ancestor.parent;
			}
			return false;
		}

		/**
		 * Checks if a node is placed in tail call position. Once `return` arguments (or arrow function expressions) can be a complex expression,
		 * an `await` expression could or could not be unnecessary by the definition of this rule. So we're looking for `await` expressions that are in tail position.
		 * @param {ASTNode} node A node representing the `await` expression to check
		 * @returns {boolean} The checking result
		 */
		function isInTailCallPosition(node) {
			if (node.parent.type === "ArrowFunctionExpression") {
				return true;
			}
			if (node.parent.type === "ReturnStatement") {
				return !hasErrorHandler(node.parent);
			}
			if (
				node.parent.type === "ConditionalExpression" &&
				(node === node.parent.consequent ||
					node === node.parent.alternate)
			) {
				return isInTailCallPosition(node.parent);
			}
			if (
				node.parent.type === "LogicalExpression" &&
				node === node.parent.right
			) {
				return isInTailCallPosition(node.parent);
			}
			if (
				node.parent.type === "SequenceExpression" &&
				node === node.parent.expressions.at(-1)
			) {
				return isInTailCallPosition(node.parent);
			}
			return false;
		}

		return {
			AwaitExpression(node) {
				if (isInTailCallPosition(node) && !hasErrorHandler(node)) {
					reportUnnecessaryAwait(node);
				}
			},
		};
	},
};

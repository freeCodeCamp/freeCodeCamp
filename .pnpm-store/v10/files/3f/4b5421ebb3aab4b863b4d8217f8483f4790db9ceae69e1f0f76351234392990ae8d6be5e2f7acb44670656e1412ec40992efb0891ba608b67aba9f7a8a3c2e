/**
 * @fileoverview Rule to disallow async functions which have no `await` expression.
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
 * Capitalize the 1st letter of the given text.
 * @param {string} text The text to capitalize.
 * @returns {string} The text that the 1st letter was capitalized.
 */
function capitalizeFirstLetter(text) {
	return text[0].toUpperCase() + text.slice(1);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description:
				"Disallow async functions which have no `await` expression",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/require-await",
		},

		schema: [],

		messages: {
			missingAwait: "{{name}} has no 'await' expression.",
			removeAsync: "Remove 'async'.",
		},

		hasSuggestions: true,
	},

	create(context) {
		const sourceCode = context.sourceCode;
		let scopeInfo = null;

		/**
		 * Push the scope info object to the stack.
		 * @returns {void}
		 */
		function enterFunction() {
			scopeInfo = {
				upper: scopeInfo,
				hasAwait: false,
			};
		}

		/**
		 * Pop the top scope info object from the stack.
		 * Also, it reports the function if needed.
		 * @param {ASTNode} node The node to report.
		 * @returns {void}
		 */
		function exitFunction(node) {
			if (
				!node.generator &&
				node.async &&
				!scopeInfo.hasAwait &&
				!astUtils.isEmptyFunction(node)
			) {
				/*
				 * If the function belongs to a method definition or
				 * property, then the function's range may not include the
				 * `async` keyword and we should look at the parent instead.
				 */
				const nodeWithAsyncKeyword =
					(node.parent.type === "MethodDefinition" &&
						node.parent.value === node) ||
					(node.parent.type === "Property" &&
						node.parent.method &&
						node.parent.value === node)
						? node.parent
						: node;

				const asyncToken = sourceCode.getFirstToken(
					nodeWithAsyncKeyword,
					token => token.value === "async",
				);
				const asyncRange = [
					asyncToken.range[0],
					sourceCode.getTokenAfter(asyncToken, {
						includeComments: true,
					}).range[0],
				];

				/*
				 * Removing the `async` keyword can cause parsing errors if the current
				 * statement is relying on automatic semicolon insertion. If ASI is currently
				 * being used, then we should replace the `async` keyword with a semicolon.
				 */
				const nextToken = sourceCode.getTokenAfter(asyncToken);
				const addSemiColon =
					nextToken.type === "Punctuator" &&
					(nextToken.value === "[" || nextToken.value === "(") &&
					(nodeWithAsyncKeyword.type === "MethodDefinition" ||
						astUtils.isStartOfExpressionStatement(
							nodeWithAsyncKeyword,
						)) &&
					astUtils.needsPrecedingSemicolon(
						sourceCode,
						nodeWithAsyncKeyword,
					);

				context.report({
					node,
					loc: astUtils.getFunctionHeadLoc(node, sourceCode),
					messageId: "missingAwait",
					data: {
						name: capitalizeFirstLetter(
							astUtils.getFunctionNameWithKind(node),
						),
					},
					suggest: [
						{
							messageId: "removeAsync",
							fix: fixer =>
								fixer.replaceTextRange(
									asyncRange,
									addSemiColon ? ";" : "",
								),
						},
					],
				});
			}

			scopeInfo = scopeInfo.upper;
		}

		return {
			FunctionDeclaration: enterFunction,
			FunctionExpression: enterFunction,
			ArrowFunctionExpression: enterFunction,
			"FunctionDeclaration:exit": exitFunction,
			"FunctionExpression:exit": exitFunction,
			"ArrowFunctionExpression:exit": exitFunction,

			AwaitExpression() {
				if (!scopeInfo) {
					return;
				}

				scopeInfo.hasAwait = true;
			},
			ForOfStatement(node) {
				if (!scopeInfo) {
					return;
				}

				if (node.await) {
					scopeInfo.hasAwait = true;
				}
			},
			VariableDeclaration(node) {
				if (!scopeInfo) {
					return;
				}

				if (node.kind === "await using") {
					scopeInfo.hasAwait = true;
				}
			},
		};
	},
};

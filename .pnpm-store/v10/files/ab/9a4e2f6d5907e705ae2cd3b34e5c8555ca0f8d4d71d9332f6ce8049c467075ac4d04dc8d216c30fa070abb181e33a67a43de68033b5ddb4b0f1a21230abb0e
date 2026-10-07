/**
 * @fileoverview Rule to disallow whitespace before properties
 * @author Kai Cataldo
 * @deprecated in ESLint v8.53.0
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
						name: "no-whitespace-before-property",
						url: "https://eslint.style/rules/no-whitespace-before-property",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Disallow whitespace before properties",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-whitespace-before-property",
		},

		fixable: "whitespace",
		schema: [],

		messages: {
			unexpectedWhitespace:
				"Unexpected whitespace before property {{propName}}.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		/**
		 * Reports whitespace before property token
		 * @param {ASTNode} node the node to report in the event of an error
		 * @param {Token} leftToken the left token
		 * @param {Token} rightToken the right token
		 * @returns {void}
		 * @private
		 */
		function reportError(node, leftToken, rightToken) {
			context.report({
				node,
				messageId: "unexpectedWhitespace",
				data: {
					propName: sourceCode.getText(node.property),
				},
				fix(fixer) {
					let replacementText = "";

					if (
						!node.computed &&
						!node.optional &&
						astUtils.isDecimalInteger(node.object)
					) {
						/*
						 * If the object is a number literal, fixing it to something like 5.toString() would cause a SyntaxError.
						 * Don't fix this case.
						 */
						return null;
					}

					// Don't fix if comments exist.
					if (
						sourceCode.commentsExistBetween(leftToken, rightToken)
					) {
						return null;
					}

					if (node.optional) {
						replacementText = "?.";
					} else if (!node.computed) {
						replacementText = ".";
					}

					return fixer.replaceTextRange(
						[leftToken.range[1], rightToken.range[0]],
						replacementText,
					);
				},
			});
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			MemberExpression(node) {
				let rightToken;
				let leftToken;

				if (!astUtils.isTokenOnSameLine(node.object, node.property)) {
					return;
				}

				if (node.computed) {
					rightToken = sourceCode.getTokenBefore(
						node.property,
						astUtils.isOpeningBracketToken,
					);
					leftToken = sourceCode.getTokenBefore(
						rightToken,
						node.optional ? 1 : 0,
					);
				} else {
					rightToken = sourceCode.getFirstToken(node.property);
					leftToken = sourceCode.getTokenBefore(rightToken, 1);
				}

				if (sourceCode.isSpaceBetweenTokens(leftToken, rightToken)) {
					reportError(node, leftToken, rightToken);
				}
			},
		};
	},
};

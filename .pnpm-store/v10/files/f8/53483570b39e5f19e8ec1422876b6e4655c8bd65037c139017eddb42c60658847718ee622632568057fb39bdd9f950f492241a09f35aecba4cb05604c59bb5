/**
 * @fileoverview enforce the location of arrow function bodies
 * @author Sharmila Jesupaul
 * @deprecated in ESLint v8.53.0
 */
"use strict";

const { isCommentToken, isNotOpeningParenToken } = require("./utils/ast-utils");

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
						name: "implicit-arrow-linebreak",
						url: "https://eslint.style/rules/implicit-arrow-linebreak",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Enforce the location of arrow function bodies",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/implicit-arrow-linebreak",
		},

		fixable: "whitespace",

		schema: [
			{
				enum: ["beside", "below"],
			},
		],
		messages: {
			expected: "Expected a linebreak before this expression.",
			unexpected: "Expected no linebreak before this expression.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;
		const option = context.options[0] || "beside";

		/**
		 * Validates the location of an arrow function body
		 * @param {ASTNode} node The arrow function body
		 * @returns {void}
		 */
		function validateExpression(node) {
			if (node.body.type === "BlockStatement") {
				return;
			}

			const arrowToken = sourceCode.getTokenBefore(
				node.body,
				isNotOpeningParenToken,
			);
			const firstTokenOfBody = sourceCode.getTokenAfter(arrowToken);

			if (
				arrowToken.loc.end.line === firstTokenOfBody.loc.start.line &&
				option === "below"
			) {
				context.report({
					node: firstTokenOfBody,
					messageId: "expected",
					fix: fixer =>
						fixer.insertTextBefore(firstTokenOfBody, "\n"),
				});
			} else if (
				arrowToken.loc.end.line !== firstTokenOfBody.loc.start.line &&
				option === "beside"
			) {
				context.report({
					node: firstTokenOfBody,
					messageId: "unexpected",
					fix(fixer) {
						if (
							sourceCode.getFirstTokenBetween(
								arrowToken,
								firstTokenOfBody,
								{
									includeComments: true,
									filter: isCommentToken,
								},
							)
						) {
							return null;
						}

						return fixer.replaceTextRange(
							[arrowToken.range[1], firstTokenOfBody.range[0]],
							" ",
						);
					},
				});
			}
		}

		//----------------------------------------------------------------------
		// Public
		//----------------------------------------------------------------------
		return {
			ArrowFunctionExpression: node => validateExpression(node),
		};
	},
};

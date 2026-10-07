/**
 * @fileoverview Rule to require parens in arrow function arguments.
 * @author Jxck
 * @deprecated in ESLint v8.53.0
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
 * Determines if the given arrow function has block body.
 * @param {ASTNode} node `ArrowFunctionExpression` node.
 * @returns {boolean} `true` if the function has block body.
 */
function hasBlockBody(node) {
	return node.body.type === "BlockStatement";
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
						name: "arrow-parens",
						url: "https://eslint.style/rules/arrow-parens",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Require parentheses around arrow function arguments",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/arrow-parens",
		},

		fixable: "code",

		schema: [
			{
				enum: ["always", "as-needed"],
			},
			{
				type: "object",
				properties: {
					requireForBlockBody: {
						type: "boolean",
						default: false,
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			unexpectedParens:
				"Unexpected parentheses around single function argument.",
			expectedParens:
				"Expected parentheses around arrow function argument.",

			unexpectedParensInline:
				"Unexpected parentheses around single function argument having a body with no curly braces.",
			expectedParensBlock:
				"Expected parentheses around arrow function argument having a body with curly braces.",
		},
	},

	create(context) {
		const asNeeded = context.options[0] === "as-needed";
		const requireForBlockBody =
			asNeeded &&
			context.options[1] &&
			context.options[1].requireForBlockBody === true;

		const sourceCode = context.sourceCode;

		/**
		 * Finds opening paren of parameters for the given arrow function, if it exists.
		 * It is assumed that the given arrow function has exactly one parameter.
		 * @param {ASTNode} node `ArrowFunctionExpression` node.
		 * @returns {Token|null} the opening paren, or `null` if the given arrow function doesn't have parens of parameters.
		 */
		function findOpeningParenOfParams(node) {
			const tokenBeforeParams = sourceCode.getTokenBefore(node.params[0]);

			if (
				tokenBeforeParams &&
				astUtils.isOpeningParenToken(tokenBeforeParams) &&
				node.range[0] <= tokenBeforeParams.range[0]
			) {
				return tokenBeforeParams;
			}

			return null;
		}

		/**
		 * Finds closing paren of parameters for the given arrow function.
		 * It is assumed that the given arrow function has parens of parameters and that it has exactly one parameter.
		 * @param {ASTNode} node `ArrowFunctionExpression` node.
		 * @returns {Token} the closing paren of parameters.
		 */
		function getClosingParenOfParams(node) {
			return sourceCode.getTokenAfter(
				node.params[0],
				astUtils.isClosingParenToken,
			);
		}

		/**
		 * Determines whether the given arrow function has comments inside parens of parameters.
		 * It is assumed that the given arrow function has parens of parameters.
		 * @param {ASTNode} node `ArrowFunctionExpression` node.
		 * @param {Token} openingParen Opening paren of parameters.
		 * @returns {boolean} `true` if the function has at least one comment inside of parens of parameters.
		 */
		function hasCommentsInParensOfParams(node, openingParen) {
			return sourceCode.commentsExistBetween(
				openingParen,
				getClosingParenOfParams(node),
			);
		}

		/**
		 * Determines whether the given arrow function has unexpected tokens before opening paren of parameters,
		 * in which case it will be assumed that the existing parens of parameters are necessary.
		 * Only tokens within the range of the arrow function (tokens that are part of the arrow function) are taken into account.
		 * Example: <T>(a) => b
		 * @param {ASTNode} node `ArrowFunctionExpression` node.
		 * @param {Token} openingParen Opening paren of parameters.
		 * @returns {boolean} `true` if the function has at least one unexpected token.
		 */
		function hasUnexpectedTokensBeforeOpeningParen(node, openingParen) {
			const expectedCount = node.async ? 1 : 0;

			return (
				sourceCode.getFirstToken(node, { skip: expectedCount }) !==
				openingParen
			);
		}

		return {
			"ArrowFunctionExpression[params.length=1]"(node) {
				const shouldHaveParens =
					!asNeeded || (requireForBlockBody && hasBlockBody(node));
				const openingParen = findOpeningParenOfParams(node);
				const hasParens = openingParen !== null;
				const [param] = node.params;

				if (shouldHaveParens && !hasParens) {
					context.report({
						node,
						messageId: requireForBlockBody
							? "expectedParensBlock"
							: "expectedParens",
						loc: param.loc,
						*fix(fixer) {
							yield fixer.insertTextBefore(param, "(");
							yield fixer.insertTextAfter(param, ")");
						},
					});
				}

				if (
					!shouldHaveParens &&
					hasParens &&
					param.type === "Identifier" &&
					!param.typeAnnotation &&
					!node.returnType &&
					!hasCommentsInParensOfParams(node, openingParen) &&
					!hasUnexpectedTokensBeforeOpeningParen(node, openingParen)
				) {
					context.report({
						node,
						messageId: requireForBlockBody
							? "unexpectedParensInline"
							: "unexpectedParens",
						loc: param.loc,
						*fix(fixer) {
							const tokenBeforeOpeningParen =
								sourceCode.getTokenBefore(openingParen);
							const closingParen = getClosingParenOfParams(node);

							if (
								tokenBeforeOpeningParen &&
								tokenBeforeOpeningParen.range[1] ===
									openingParen.range[0] &&
								!astUtils.canTokensBeAdjacent(
									tokenBeforeOpeningParen,
									sourceCode.getFirstToken(param),
								)
							) {
								yield fixer.insertTextBefore(openingParen, " ");
							}

							// remove parens, whitespace inside parens, and possible trailing comma
							yield fixer.removeRange([
								openingParen.range[0],
								param.range[0],
							]);
							yield fixer.removeRange([
								param.range[1],
								closingParen.range[1],
							]);
						},
					});
				}
			},
		};
	},
};

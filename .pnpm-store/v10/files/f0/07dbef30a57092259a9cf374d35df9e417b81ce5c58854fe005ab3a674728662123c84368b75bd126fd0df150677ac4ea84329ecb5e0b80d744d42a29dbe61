/**
 * @fileoverview Comma style - enforces comma styles of two types: last and first
 * @author Vignesh Anand aka vegetableman
 * @deprecated in ESLint v8.53.0
 */

"use strict";

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
						name: "comma-style",
						url: "https://eslint.style/rules/comma-style",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Enforce consistent comma style",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/comma-style",
		},

		fixable: "code",

		schema: [
			{
				enum: ["first", "last"],
			},
			{
				type: "object",
				properties: {
					exceptions: {
						type: "object",
						additionalProperties: {
							type: "boolean",
						},
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			unexpectedLineBeforeAndAfterComma:
				"Bad line breaking before and after ','.",
			expectedCommaFirst: "',' should be placed first.",
			expectedCommaLast: "',' should be placed last.",
		},
	},

	create(context) {
		const style = context.options[0] || "last",
			sourceCode = context.sourceCode;
		const exceptions = {
			ArrayPattern: true,
			ArrowFunctionExpression: true,
			CallExpression: true,
			FunctionDeclaration: true,
			FunctionExpression: true,
			ImportDeclaration: true,
			ObjectPattern: true,
			NewExpression: true,
		};

		if (
			context.options.length === 2 &&
			Object.hasOwn(context.options[1], "exceptions")
		) {
			const keys = Object.keys(context.options[1].exceptions);

			for (let i = 0; i < keys.length; i++) {
				exceptions[keys[i]] = context.options[1].exceptions[keys[i]];
			}
		}

		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		/**
		 * Modified text based on the style
		 * @param {string} styleType Style type
		 * @param {string} text Source code text
		 * @returns {string} modified text
		 * @private
		 */
		function getReplacedText(styleType, text) {
			switch (styleType) {
				case "between":
					return `,${text.replace(astUtils.LINEBREAK_MATCHER, "")}`;

				case "first":
					return `${text},`;

				case "last":
					return `,${text}`;

				default:
					return "";
			}
		}

		/**
		 * Determines the fixer function for a given style.
		 * @param {string} styleType comma style
		 * @param {ASTNode} previousItemToken The token to check.
		 * @param {ASTNode} commaToken The token to check.
		 * @param {ASTNode} currentItemToken The token to check.
		 * @returns {Function} Fixer function
		 * @private
		 */
		function getFixerFunction(
			styleType,
			previousItemToken,
			commaToken,
			currentItemToken,
		) {
			const text =
				sourceCode.text.slice(
					previousItemToken.range[1],
					commaToken.range[0],
				) +
				sourceCode.text.slice(
					commaToken.range[1],
					currentItemToken.range[0],
				);
			const range = [
				previousItemToken.range[1],
				currentItemToken.range[0],
			];

			return function (fixer) {
				return fixer.replaceTextRange(
					range,
					getReplacedText(styleType, text),
				);
			};
		}

		/**
		 * Validates the spacing around single items in lists.
		 * @param {Token} previousItemToken The last token from the previous item.
		 * @param {Token} commaToken The token representing the comma.
		 * @param {Token} currentItemToken The first token of the current item.
		 * @param {Token} reportItem The item to use when reporting an error.
		 * @returns {void}
		 * @private
		 */
		function validateCommaItemSpacing(
			previousItemToken,
			commaToken,
			currentItemToken,
			reportItem,
		) {
			// if single line
			if (
				astUtils.isTokenOnSameLine(commaToken, currentItemToken) &&
				astUtils.isTokenOnSameLine(previousItemToken, commaToken)
			) {
				// do nothing.
			} else if (
				!astUtils.isTokenOnSameLine(commaToken, currentItemToken) &&
				!astUtils.isTokenOnSameLine(previousItemToken, commaToken)
			) {
				const comment = sourceCode.getCommentsAfter(commaToken)[0];
				const styleType =
					comment &&
					comment.type === "Block" &&
					astUtils.isTokenOnSameLine(commaToken, comment)
						? style
						: "between";

				// lone comma
				context.report({
					node: reportItem,
					loc: commaToken.loc,
					messageId: "unexpectedLineBeforeAndAfterComma",
					fix: getFixerFunction(
						styleType,
						previousItemToken,
						commaToken,
						currentItemToken,
					),
				});
			} else if (
				style === "first" &&
				!astUtils.isTokenOnSameLine(commaToken, currentItemToken)
			) {
				context.report({
					node: reportItem,
					loc: commaToken.loc,
					messageId: "expectedCommaFirst",
					fix: getFixerFunction(
						style,
						previousItemToken,
						commaToken,
						currentItemToken,
					),
				});
			} else if (
				style === "last" &&
				astUtils.isTokenOnSameLine(commaToken, currentItemToken)
			) {
				context.report({
					node: reportItem,
					loc: commaToken.loc,
					messageId: "expectedCommaLast",
					fix: getFixerFunction(
						style,
						previousItemToken,
						commaToken,
						currentItemToken,
					),
				});
			}
		}

		/**
		 * Checks the comma placement with regards to a declaration/property/element
		 * @param {ASTNode} node The binary expression node to check
		 * @param {string} property The property of the node containing child nodes.
		 * @private
		 * @returns {void}
		 */
		function validateComma(node, property) {
			const items = node[property],
				arrayLiteral =
					node.type === "ArrayExpression" ||
					node.type === "ArrayPattern";

			if (items.length > 1 || arrayLiteral) {
				// seed as opening [
				let previousItemToken = sourceCode.getFirstToken(node);

				items.forEach(item => {
					const commaToken = item
							? sourceCode.getTokenBefore(item)
							: previousItemToken,
						currentItemToken = item
							? sourceCode.getFirstToken(item)
							: sourceCode.getTokenAfter(commaToken),
						reportItem = item || currentItemToken;

					/*
					 * This works by comparing three token locations:
					 * - previousItemToken is the last token of the previous item
					 * - commaToken is the location of the comma before the current item
					 * - currentItemToken is the first token of the current item
					 *
					 * These values get switched around if item is undefined.
					 * previousItemToken will refer to the last token not belonging
					 * to the current item, which could be a comma or an opening
					 * square bracket. currentItemToken could be a comma.
					 *
					 * All comparisons are done based on these tokens directly, so
					 * they are always valid regardless of an undefined item.
					 */
					if (astUtils.isCommaToken(commaToken)) {
						validateCommaItemSpacing(
							previousItemToken,
							commaToken,
							currentItemToken,
							reportItem,
						);
					}

					if (item) {
						const tokenAfterItem = sourceCode.getTokenAfter(
							item,
							astUtils.isNotClosingParenToken,
						);

						previousItemToken = tokenAfterItem
							? sourceCode.getTokenBefore(tokenAfterItem)
							: sourceCode.ast.tokens.at(-1);
					} else {
						previousItemToken = currentItemToken;
					}
				});

				/*
				 * Special case for array literals that have empty last items, such
				 * as [ 1, 2, ]. These arrays only have two items show up in the
				 * AST, so we need to look at the token to verify that there's no
				 * dangling comma.
				 */
				if (arrayLiteral) {
					const lastToken = sourceCode.getLastToken(node),
						nextToLastToken = sourceCode.getTokenBefore(lastToken);

					if (astUtils.isCommaToken(nextToLastToken)) {
						validateCommaItemSpacing(
							sourceCode.getTokenBefore(nextToLastToken),
							nextToLastToken,
							lastToken,
							lastToken,
						);
					}
				}
			}
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		const nodes = {};

		if (!exceptions.VariableDeclaration) {
			nodes.VariableDeclaration = function (node) {
				validateComma(node, "declarations");
			};
		}
		if (!exceptions.ObjectExpression) {
			nodes.ObjectExpression = function (node) {
				validateComma(node, "properties");
			};
		}
		if (!exceptions.ObjectPattern) {
			nodes.ObjectPattern = function (node) {
				validateComma(node, "properties");
			};
		}
		if (!exceptions.ArrayExpression) {
			nodes.ArrayExpression = function (node) {
				validateComma(node, "elements");
			};
		}
		if (!exceptions.ArrayPattern) {
			nodes.ArrayPattern = function (node) {
				validateComma(node, "elements");
			};
		}
		if (!exceptions.FunctionDeclaration) {
			nodes.FunctionDeclaration = function (node) {
				validateComma(node, "params");
			};
		}
		if (!exceptions.FunctionExpression) {
			nodes.FunctionExpression = function (node) {
				validateComma(node, "params");
			};
		}
		if (!exceptions.ArrowFunctionExpression) {
			nodes.ArrowFunctionExpression = function (node) {
				validateComma(node, "params");
			};
		}
		if (!exceptions.CallExpression) {
			nodes.CallExpression = function (node) {
				validateComma(node, "arguments");
			};
		}
		if (!exceptions.ImportDeclaration) {
			nodes.ImportDeclaration = function (node) {
				validateComma(node, "specifiers");
			};
		}
		if (!exceptions.NewExpression) {
			nodes.NewExpression = function (node) {
				validateComma(node, "arguments");
			};
		}

		return nodes;
	},
};

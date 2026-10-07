/**
 * @fileoverview Disallows or enforces spaces inside of array brackets.
 * @author Jamund Ferguson
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
						name: "array-bracket-spacing",
						url: "https://eslint.style/rules/array-bracket-spacing",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Enforce consistent spacing inside array brackets",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/array-bracket-spacing",
		},

		fixable: "whitespace",

		schema: [
			{
				enum: ["always", "never"],
			},
			{
				type: "object",
				properties: {
					singleValue: {
						type: "boolean",
					},
					objectsInArrays: {
						type: "boolean",
					},
					arraysInArrays: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			unexpectedSpaceAfter:
				"There should be no space after '{{tokenValue}}'.",
			unexpectedSpaceBefore:
				"There should be no space before '{{tokenValue}}'.",
			missingSpaceAfter: "A space is required after '{{tokenValue}}'.",
			missingSpaceBefore: "A space is required before '{{tokenValue}}'.",
		},
	},
	create(context) {
		const spaced = context.options[0] === "always",
			sourceCode = context.sourceCode;

		/**
		 * Determines whether an option is set, relative to the spacing option.
		 * If spaced is "always", then check whether option is set to false.
		 * If spaced is "never", then check whether option is set to true.
		 * @param {Object} option The option to exclude.
		 * @returns {boolean} Whether or not the property is excluded.
		 */
		function isOptionSet(option) {
			return context.options[1]
				? context.options[1][option] === !spaced
				: false;
		}

		const options = {
			spaced,
			singleElementException: isOptionSet("singleValue"),
			objectsInArraysException: isOptionSet("objectsInArrays"),
			arraysInArraysException: isOptionSet("arraysInArrays"),
		};

		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		/**
		 * Reports that there shouldn't be a space after the first token
		 * @param {ASTNode} node The node to report in the event of an error.
		 * @param {Token} token The token to use for the report.
		 * @returns {void}
		 */
		function reportNoBeginningSpace(node, token) {
			const nextToken = sourceCode.getTokenAfter(token);

			context.report({
				node,
				loc: { start: token.loc.end, end: nextToken.loc.start },
				messageId: "unexpectedSpaceAfter",
				data: {
					tokenValue: token.value,
				},
				fix(fixer) {
					return fixer.removeRange([
						token.range[1],
						nextToken.range[0],
					]);
				},
			});
		}

		/**
		 * Reports that there shouldn't be a space before the last token
		 * @param {ASTNode} node The node to report in the event of an error.
		 * @param {Token} token The token to use for the report.
		 * @returns {void}
		 */
		function reportNoEndingSpace(node, token) {
			const previousToken = sourceCode.getTokenBefore(token);

			context.report({
				node,
				loc: { start: previousToken.loc.end, end: token.loc.start },
				messageId: "unexpectedSpaceBefore",
				data: {
					tokenValue: token.value,
				},
				fix(fixer) {
					return fixer.removeRange([
						previousToken.range[1],
						token.range[0],
					]);
				},
			});
		}

		/**
		 * Reports that there should be a space after the first token
		 * @param {ASTNode} node The node to report in the event of an error.
		 * @param {Token} token The token to use for the report.
		 * @returns {void}
		 */
		function reportRequiredBeginningSpace(node, token) {
			context.report({
				node,
				loc: token.loc,
				messageId: "missingSpaceAfter",
				data: {
					tokenValue: token.value,
				},
				fix(fixer) {
					return fixer.insertTextAfter(token, " ");
				},
			});
		}

		/**
		 * Reports that there should be a space before the last token
		 * @param {ASTNode} node The node to report in the event of an error.
		 * @param {Token} token The token to use for the report.
		 * @returns {void}
		 */
		function reportRequiredEndingSpace(node, token) {
			context.report({
				node,
				loc: token.loc,
				messageId: "missingSpaceBefore",
				data: {
					tokenValue: token.value,
				},
				fix(fixer) {
					return fixer.insertTextBefore(token, " ");
				},
			});
		}

		/**
		 * Determines if a node is an object type
		 * @param {ASTNode} node The node to check.
		 * @returns {boolean} Whether or not the node is an object type.
		 */
		function isObjectType(node) {
			return (
				node &&
				(node.type === "ObjectExpression" ||
					node.type === "ObjectPattern")
			);
		}

		/**
		 * Determines if a node is an array type
		 * @param {ASTNode} node The node to check.
		 * @returns {boolean} Whether or not the node is an array type.
		 */
		function isArrayType(node) {
			return (
				node &&
				(node.type === "ArrayExpression" ||
					node.type === "ArrayPattern")
			);
		}

		/**
		 * Validates the spacing around array brackets
		 * @param {ASTNode} node The node we're checking for spacing
		 * @returns {void}
		 */
		function validateArraySpacing(node) {
			if (options.spaced && node.elements.length === 0) {
				return;
			}

			const first = sourceCode.getFirstToken(node),
				second = sourceCode.getFirstToken(node, 1),
				last = node.typeAnnotation
					? sourceCode.getTokenBefore(node.typeAnnotation)
					: sourceCode.getLastToken(node),
				penultimate = sourceCode.getTokenBefore(last),
				firstElement = node.elements[0],
				lastElement = node.elements.at(-1);

			const openingBracketMustBeSpaced =
				(options.objectsInArraysException &&
					isObjectType(firstElement)) ||
				(options.arraysInArraysException &&
					isArrayType(firstElement)) ||
				(options.singleElementException && node.elements.length === 1)
					? !options.spaced
					: options.spaced;

			const closingBracketMustBeSpaced =
				(options.objectsInArraysException &&
					isObjectType(lastElement)) ||
				(options.arraysInArraysException && isArrayType(lastElement)) ||
				(options.singleElementException && node.elements.length === 1)
					? !options.spaced
					: options.spaced;

			if (astUtils.isTokenOnSameLine(first, second)) {
				if (
					openingBracketMustBeSpaced &&
					!sourceCode.isSpaceBetweenTokens(first, second)
				) {
					reportRequiredBeginningSpace(node, first);
				}
				if (
					!openingBracketMustBeSpaced &&
					sourceCode.isSpaceBetweenTokens(first, second)
				) {
					reportNoBeginningSpace(node, first);
				}
			}

			if (
				first !== penultimate &&
				astUtils.isTokenOnSameLine(penultimate, last)
			) {
				if (
					closingBracketMustBeSpaced &&
					!sourceCode.isSpaceBetweenTokens(penultimate, last)
				) {
					reportRequiredEndingSpace(node, last);
				}
				if (
					!closingBracketMustBeSpaced &&
					sourceCode.isSpaceBetweenTokens(penultimate, last)
				) {
					reportNoEndingSpace(node, last);
				}
			}
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			ArrayPattern: validateArraySpacing,
			ArrayExpression: validateArraySpacing,
		};
	},
};

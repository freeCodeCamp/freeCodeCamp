/**
 * @fileoverview Validates newlines before and after dots
 * @author Greg Cochard
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
						name: "dot-location",
						url: "https://eslint.style/rules/dot-location",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Enforce consistent newlines before and after dots",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/dot-location",
		},

		schema: [
			{
				enum: ["object", "property"],
			},
		],

		fixable: "code",

		messages: {
			expectedDotAfterObject:
				"Expected dot to be on same line as object.",
			expectedDotBeforeProperty:
				"Expected dot to be on same line as property.",
		},
	},

	create(context) {
		const config = context.options[0];

		// default to onObject if no preference is passed
		const onObject = config === "object" || !config;

		const sourceCode = context.sourceCode;

		/**
		 * Reports if the dot between object and property is on the correct location.
		 * @param {ASTNode} node The `MemberExpression` node.
		 * @returns {void}
		 */
		function checkDotLocation(node) {
			const property = node.property;
			const dotToken = sourceCode.getTokenBefore(property);

			if (onObject) {
				// `obj` expression can be parenthesized, but those paren tokens are not a part of the `obj` node.
				const tokenBeforeDot = sourceCode.getTokenBefore(dotToken);

				if (!astUtils.isTokenOnSameLine(tokenBeforeDot, dotToken)) {
					context.report({
						node,
						loc: dotToken.loc,
						messageId: "expectedDotAfterObject",
						*fix(fixer) {
							if (
								dotToken.value.startsWith(".") &&
								astUtils.isDecimalIntegerNumericToken(
									tokenBeforeDot,
								)
							) {
								yield fixer.insertTextAfter(
									tokenBeforeDot,
									` ${dotToken.value}`,
								);
							} else {
								yield fixer.insertTextAfter(
									tokenBeforeDot,
									dotToken.value,
								);
							}
							yield fixer.remove(dotToken);
						},
					});
				}
			} else if (!astUtils.isTokenOnSameLine(dotToken, property)) {
				context.report({
					node,
					loc: dotToken.loc,
					messageId: "expectedDotBeforeProperty",
					*fix(fixer) {
						yield fixer.remove(dotToken);
						yield fixer.insertTextBefore(property, dotToken.value);
					},
				});
			}
		}

		/**
		 * Checks the spacing of the dot within a member expression.
		 * @param {ASTNode} node The node to check.
		 * @returns {void}
		 */
		function checkNode(node) {
			if (!node.computed) {
				checkDotLocation(node);
			}
		}

		return {
			MemberExpression: checkNode,
		};
	},
};

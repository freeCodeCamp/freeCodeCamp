/**
 * @fileoverview Rule to flag use of a leading/trailing decimal point in a numeric literal
 * @author James Allardice
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
						name: "no-floating-decimal",
						url: "https://eslint.style/rules/no-floating-decimal",
					},
				},
			],
		},
		type: "suggestion",

		docs: {
			description:
				"Disallow leading or trailing decimal points in numeric literals",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-floating-decimal",
		},

		schema: [],
		fixable: "code",
		messages: {
			leading: "A leading decimal point can be confused with a dot.",
			trailing: "A trailing decimal point can be confused with a dot.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		return {
			Literal(node) {
				if (typeof node.value === "number") {
					if (node.raw.startsWith(".")) {
						context.report({
							node,
							messageId: "leading",
							fix(fixer) {
								const tokenBefore =
									sourceCode.getTokenBefore(node);
								const needsSpaceBefore =
									tokenBefore &&
									tokenBefore.range[1] === node.range[0] &&
									!astUtils.canTokensBeAdjacent(
										tokenBefore,
										`0${node.raw}`,
									);

								return fixer.insertTextBefore(
									node,
									needsSpaceBefore ? " 0" : "0",
								);
							},
						});
					}
					if (node.raw.indexOf(".") === node.raw.length - 1) {
						context.report({
							node,
							messageId: "trailing",
							fix: fixer => fixer.insertTextAfter(node, "0"),
						});
					}
				}
			},
		};
	},
};

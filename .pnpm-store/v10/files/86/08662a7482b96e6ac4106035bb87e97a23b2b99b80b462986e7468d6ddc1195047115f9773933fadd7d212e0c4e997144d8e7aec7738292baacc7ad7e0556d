/**
 * @fileoverview Rule to check for tabs inside a file
 * @author Gyandeep Singh
 * @deprecated in ESLint v8.53.0
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const tabRegex = /\t+/gu;
const anyNonWhitespaceRegex = /\S/u;

//------------------------------------------------------------------------------
// Public Interface
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
						name: "no-tabs",
						url: "https://eslint.style/rules/no-tabs",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Disallow all tabs",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-tabs",
		},
		schema: [
			{
				type: "object",
				properties: {
					allowIndentationTabs: {
						type: "boolean",
						default: false,
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			unexpectedTab: "Unexpected tab character.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;
		const allowIndentationTabs =
			context.options &&
			context.options[0] &&
			context.options[0].allowIndentationTabs;

		return {
			Program(node) {
				sourceCode.getLines().forEach((line, index) => {
					let match;

					while ((match = tabRegex.exec(line)) !== null) {
						if (
							allowIndentationTabs &&
							!anyNonWhitespaceRegex.test(
								line.slice(0, match.index),
							)
						) {
							continue;
						}

						context.report({
							node,
							loc: {
								start: {
									line: index + 1,
									column: match.index,
								},
								end: {
									line: index + 1,
									column: match.index + match[0].length,
								},
							},
							messageId: "unexpectedTab",
						});
					}
				});
			},
		};
	},
};

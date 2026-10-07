/**
 * @fileoverview Rule to enforce a single linebreak style.
 * @author Erik Mueller
 * @deprecated in ESLint v8.53.0
 */

"use strict";

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/**
 * @import { SourceRange } from "@eslint/core";
 */

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
						name: "linebreak-style",
						url: "https://eslint.style/rules/linebreak-style",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Enforce consistent linebreak style",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/linebreak-style",
		},

		fixable: "whitespace",

		schema: [
			{
				enum: ["unix", "windows"],
			},
		],
		messages: {
			expectedLF: "Expected linebreaks to be 'LF' but found 'CRLF'.",
			expectedCRLF: "Expected linebreaks to be 'CRLF' but found 'LF'.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		/**
		 * Builds a fix function that replaces text at the specified range in the source text.
		 * @param {SourceRange} range The range to replace
		 * @param {string} text The text to insert.
		 * @returns {Function} Fixer function
		 * @private
		 */
		function createFix(range, text) {
			return function (fixer) {
				return fixer.replaceTextRange(range, text);
			};
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			Program: function checkForLinebreakStyle(node) {
				const linebreakStyle = context.options[0] || "unix",
					expectedLF = linebreakStyle === "unix",
					expectedLFChars = expectedLF ? "\n" : "\r\n",
					source = sourceCode.getText(),
					pattern = astUtils.createGlobalLinebreakMatcher();
				let match;

				let i = 0;

				while ((match = pattern.exec(source)) !== null) {
					i++;
					if (match[0] === expectedLFChars) {
						continue;
					}

					const index = match.index;
					const range = [index, index + match[0].length];

					context.report({
						node,
						loc: {
							start: {
								line: i,
								column: sourceCode.lines[i - 1].length,
							},
							end: {
								line: i + 1,
								column: 0,
							},
						},
						messageId: expectedLF ? "expectedLF" : "expectedCRLF",
						fix: createFix(range, expectedLFChars),
					});
				}
			},
		};
	},
};

/**
 * @fileoverview Require or disallow Unicode BOM
 * @author Andrew Johnston <https://github.com/ehjay>
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "layout",

		defaultOptions: ["never"],

		docs: {
			description: "Require or disallow Unicode byte order mark (BOM)",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/unicode-bom",
		},

		fixable: "whitespace",

		schema: [
			{
				enum: ["always", "never"],
			},
		],
		messages: {
			expected: "Expected Unicode BOM (Byte Order Mark).",
			unexpected: "Unexpected Unicode BOM (Byte Order Mark).",
		},
	},

	create(context) {
		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			Program: function checkUnicodeBOM(node) {
				const sourceCode = context.sourceCode,
					location = { column: 0, line: 1 };
				const [requireBOM] = context.options;

				if (!sourceCode.hasBOM && requireBOM === "always") {
					context.report({
						node,
						loc: location,
						messageId: "expected",
						fix(fixer) {
							return fixer.insertTextBeforeRange(
								[0, 1],
								"\uFEFF",
							);
						},
					});
				} else if (sourceCode.hasBOM && requireBOM === "never") {
					context.report({
						node,
						loc: location,
						messageId: "unexpected",
						fix(fixer) {
							return fixer.removeRange([-1, 0]);
						},
					});
				}
			},
		};
	},
};

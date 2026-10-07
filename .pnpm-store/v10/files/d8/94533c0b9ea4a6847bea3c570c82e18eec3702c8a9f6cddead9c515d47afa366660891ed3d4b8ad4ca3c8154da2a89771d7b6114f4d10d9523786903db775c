/**
 * @fileoverview Require or disallow newline at the end of files
 * @author Nodeca Team <https://github.com/nodeca>
 * @deprecated in ESLint v8.53.0
 */
"use strict";

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
						name: "eol-last",
						url: "https://eslint.style/rules/eol-last",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Require or disallow newline at the end of files",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/eol-last",
		},

		fixable: "whitespace",

		schema: [
			{
				enum: ["always", "never", "unix", "windows"],
			},
		],

		messages: {
			missing: "Newline required at end of file but not found.",
			unexpected: "Newline not allowed at end of file.",
		},
	},
	create(context) {
		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			Program: function checkBadEOF(node) {
				const sourceCode = context.sourceCode,
					src = sourceCode.getText(),
					lastLine = sourceCode.lines.at(-1),
					location = {
						column: lastLine.length,
						line: sourceCode.lines.length,
					},
					LF = "\n",
					CRLF = `\r${LF}`,
					endsWithNewline = src.endsWith(LF);

				/*
				 * Empty source is always valid: No content in file so we don't
				 * need to lint for a newline on the last line of content.
				 */
				if (!src.length) {
					return;
				}

				let mode = context.options[0] || "always",
					appendCRLF = false;

				if (mode === "unix") {
					// `"unix"` should behave exactly as `"always"`
					mode = "always";
				}
				if (mode === "windows") {
					// `"windows"` should behave exactly as `"always"`, but append CRLF in the fixer for backwards compatibility
					mode = "always";
					appendCRLF = true;
				}
				if (mode === "always" && !endsWithNewline) {
					// File is not newline-terminated, but should be
					context.report({
						node,
						loc: location,
						messageId: "missing",
						fix(fixer) {
							return fixer.insertTextAfterRange(
								[0, src.length],
								appendCRLF ? CRLF : LF,
							);
						},
					});
				} else if (mode === "never" && endsWithNewline) {
					const secondLastLine = sourceCode.lines.at(-2);

					// File is newline-terminated, but shouldn't be
					context.report({
						node,
						loc: {
							start: {
								line: sourceCode.lines.length - 1,
								column: secondLastLine.length,
							},
							end: { line: sourceCode.lines.length, column: 0 },
						},
						messageId: "unexpected",
						fix(fixer) {
							const finalEOLs = /(?:\r?\n)+$/u,
								match = finalEOLs.exec(sourceCode.text),
								start = match.index,
								end = sourceCode.text.length;

							return fixer.replaceTextRange([start, end], "");
						},
					});
				}
			},
		};
	},
};

/**
 * @fileoverview Disallows multiple blank lines.
 * implementation adapted from the no-trailing-spaces rule.
 * @author Greg Cochard
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
						name: "no-multiple-empty-lines",
						url: "https://eslint.style/rules/no-multiple-empty-lines",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Disallow multiple empty lines",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-multiple-empty-lines",
		},

		fixable: "whitespace",

		schema: [
			{
				type: "object",
				properties: {
					max: {
						type: "integer",
						minimum: 0,
					},
					maxEOF: {
						type: "integer",
						minimum: 0,
					},
					maxBOF: {
						type: "integer",
						minimum: 0,
					},
				},
				required: ["max"],
				additionalProperties: false,
			},
		],

		messages: {
			blankBeginningOfFile:
				"Too many blank lines at the beginning of file. Max of {{max}} allowed.",
			blankEndOfFile:
				"Too many blank lines at the end of file. Max of {{max}} allowed.",
			consecutiveBlank:
				"More than {{max}} blank {{pluralizedLines}} not allowed.",
		},
	},

	create(context) {
		// Use options.max or 2 as default
		let max = 2,
			maxEOF = max,
			maxBOF = max;

		if (context.options.length) {
			max = context.options[0].max;
			maxEOF =
				typeof context.options[0].maxEOF !== "undefined"
					? context.options[0].maxEOF
					: max;
			maxBOF =
				typeof context.options[0].maxBOF !== "undefined"
					? context.options[0].maxBOF
					: max;
		}

		const sourceCode = context.sourceCode;

		// Swallow the final newline, as some editors add it automatically and we don't want it to cause an issue
		const allLines =
			sourceCode.lines.at(-1) === ""
				? sourceCode.lines.slice(0, -1)
				: sourceCode.lines;
		const templateLiteralLines = new Set();

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			TemplateLiteral(node) {
				node.quasis.forEach(literalPart => {
					// Empty lines have a semantic meaning if they're inside template literals. Don't count these as empty lines.
					for (
						let ignoredLine = literalPart.loc.start.line;
						ignoredLine < literalPart.loc.end.line;
						ignoredLine++
					) {
						templateLiteralLines.add(ignoredLine);
					}
				});
			},
			"Program:exit"(node) {
				return (
					allLines

						// Given a list of lines, first get a list of line numbers that are non-empty.
						.reduce((nonEmptyLineNumbers, line, index) => {
							if (
								line.trim() ||
								templateLiteralLines.has(index + 1)
							) {
								nonEmptyLineNumbers.push(index + 1);
							}
							return nonEmptyLineNumbers;
						}, [])

						// Add a value at the end to allow trailing empty lines to be checked.
						.concat(allLines.length + 1)

						// Given two line numbers of non-empty lines, report the lines between if the difference is too large.
						.reduce((lastLineNumber, lineNumber) => {
							let messageId, maxAllowed;

							if (lastLineNumber === 0) {
								messageId = "blankBeginningOfFile";
								maxAllowed = maxBOF;
							} else if (lineNumber === allLines.length + 1) {
								messageId = "blankEndOfFile";
								maxAllowed = maxEOF;
							} else {
								messageId = "consecutiveBlank";
								maxAllowed = max;
							}

							if (lineNumber - lastLineNumber - 1 > maxAllowed) {
								context.report({
									node,
									loc: {
										start: {
											line:
												lastLineNumber + maxAllowed + 1,
											column: 0,
										},
										end: { line: lineNumber, column: 0 },
									},
									messageId,
									data: {
										max: maxAllowed,
										pluralizedLines:
											maxAllowed === 1 ? "line" : "lines",
									},
									fix(fixer) {
										const rangeStart =
											sourceCode.getIndexFromLoc({
												line: lastLineNumber + 1,
												column: 0,
											});

										/*
										 * The end of the removal range is usually the start index of the next line.
										 * However, at the end of the file there is no next line, so the end of the
										 * range is just the length of the text.
										 */
										const lineNumberAfterRemovedLines =
											lineNumber - maxAllowed;
										const rangeEnd =
											lineNumberAfterRemovedLines <=
											allLines.length
												? sourceCode.getIndexFromLoc({
														line: lineNumberAfterRemovedLines,
														column: 0,
													})
												: sourceCode.text.length;

										return fixer.removeRange([
											rangeStart,
											rangeEnd,
										]);
									},
								});
							}

							return lineNumber;
						}, 0)
				);
			},
		};
	},
};

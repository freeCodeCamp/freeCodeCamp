/**
 * @fileoverview Disallow trailing spaces at the end of lines.
 * @author Nodeca Team <https://github.com/nodeca>
 * @deprecated in ESLint v8.53.0
 */
"use strict";

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/**
 * @import { SourceLocation, SourceRange } from "@eslint/core";
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
						name: "no-trailing-spaces",
						url: "https://eslint.style/rules/no-trailing-spaces",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Disallow trailing whitespace at the end of lines",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-trailing-spaces",
		},

		fixable: "whitespace",

		schema: [
			{
				type: "object",
				properties: {
					skipBlankLines: {
						type: "boolean",
						default: false,
					},
					ignoreComments: {
						type: "boolean",
						default: false,
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			trailingSpace: "Trailing spaces not allowed.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		const BLANK_CLASS =
				"[ \t\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u3000]",
			SKIP_BLANK = `^${BLANK_CLASS}*$`,
			NONBLANK = `${BLANK_CLASS}+$`;

		const options = context.options[0] || {},
			skipBlankLines = options.skipBlankLines || false,
			ignoreComments = options.ignoreComments || false;

		/**
		 * Report the error message
		 * @param {ASTNode} node node to report
		 * @param {SourceLocation} location range information
		 * @param {SourceRange} fixRange Range based on the whole program
		 * @returns {void}
		 */
		function report(node, location, fixRange) {
			/*
			 * Passing node is a bit dirty, because message data will contain big
			 * text in `source`. But... who cares :) ?
			 * One more kludge will not make worse the bloody wizardry of this
			 * plugin.
			 */
			context.report({
				node,
				loc: location,
				messageId: "trailingSpace",
				fix(fixer) {
					return fixer.removeRange(fixRange);
				},
			});
		}

		/**
		 * Given a list of comment nodes, return the line numbers for those comments.
		 * @param {Array} comments An array of comment nodes.
		 * @returns {number[]} An array of line numbers containing comments.
		 */
		function getCommentLineNumbers(comments) {
			const lines = new Set();

			comments.forEach(comment => {
				const endLine =
					comment.type === "Block"
						? comment.loc.end.line - 1
						: comment.loc.end.line;

				for (let i = comment.loc.start.line; i <= endLine; i++) {
					lines.add(i);
				}
			});

			return lines;
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			Program: function checkTrailingSpaces(node) {
				/*
				 * Let's hack. Since Espree does not return whitespace nodes,
				 * fetch the source code and do matching via regexps.
				 */

				const re = new RegExp(NONBLANK, "u"),
					skipMatch = new RegExp(SKIP_BLANK, "u"),
					lines = sourceCode.lines,
					linebreaks = sourceCode
						.getText()
						.match(astUtils.createGlobalLinebreakMatcher()),
					comments = sourceCode.getAllComments(),
					commentLineNumbers = getCommentLineNumbers(comments);

				let totalLength = 0;

				for (let i = 0, ii = lines.length; i < ii; i++) {
					const lineNumber = i + 1;

					/*
					 * Always add linebreak length to line length to accommodate for line break (\n or \r\n)
					 * Because during the fix time they also reserve one spot in the array.
					 * Usually linebreak length is 2 for \r\n (CRLF) and 1 for \n (LF)
					 */
					const linebreakLength =
						linebreaks && linebreaks[i] ? linebreaks[i].length : 1;
					const lineLength = lines[i].length + linebreakLength;

					const matches = re.exec(lines[i]);

					if (matches) {
						const location = {
							start: {
								line: lineNumber,
								column: matches.index,
							},
							end: {
								line: lineNumber,
								column: lineLength - linebreakLength,
							},
						};

						const rangeStart = totalLength + location.start.column;
						const rangeEnd = totalLength + location.end.column;
						const containingNode =
							sourceCode.getNodeByRangeIndex(rangeStart);

						if (
							containingNode &&
							containingNode.type === "TemplateElement" &&
							rangeStart > containingNode.parent.range[0] &&
							rangeEnd < containingNode.parent.range[1]
						) {
							totalLength += lineLength;
							continue;
						}

						/*
						 * If the line has only whitespace, and skipBlankLines
						 * is true, don't report it
						 */
						if (skipBlankLines && skipMatch.test(lines[i])) {
							totalLength += lineLength;
							continue;
						}

						const fixRange = [rangeStart, rangeEnd];

						if (
							!ignoreComments ||
							!commentLineNumbers.has(lineNumber)
						) {
							report(node, location, fixRange);
						}
					}

					totalLength += lineLength;
				}
			},
		};
	},
};

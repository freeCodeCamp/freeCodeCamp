/**
 * @fileoverview Rule to disallow whitespace that is not a tab or space, whitespace inside strings and comments are allowed
 * @author Jonathan Kingston
 * @author Christophe Porteneuve
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const ALL_IRREGULARS =
	/[\f\v\u0085\ufeff\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u202f\u205f\u3000\u2028\u2029]/u;
const IRREGULAR_WHITESPACE =
	/[\f\v\u0085\ufeff\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u202f\u205f\u3000]+/gu;
const IRREGULAR_LINE_TERMINATORS = /[\u2028\u2029]/gu;
const LINE_BREAK = astUtils.createGlobalLinebreakMatcher();

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		defaultOptions: [
			{
				skipComments: false,
				skipJSXText: false,
				skipRegExps: false,
				skipStrings: true,
				skipTemplates: false,
			},
		],

		docs: {
			description: "Disallow irregular whitespace",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-irregular-whitespace",
		},

		schema: [
			{
				type: "object",
				properties: {
					skipComments: {
						type: "boolean",
					},
					skipStrings: {
						type: "boolean",
					},
					skipTemplates: {
						type: "boolean",
					},
					skipRegExps: {
						type: "boolean",
					},
					skipJSXText: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			noIrregularWhitespace: "Irregular whitespace not allowed.",
		},
	},

	create(context) {
		const [
			{
				skipComments,
				skipStrings,
				skipRegExps,
				skipTemplates,
				skipJSXText,
			},
		] = context.options;

		const sourceCode = context.sourceCode;
		const commentNodes = sourceCode.getAllComments();

		// Module store of errors that we have found
		let errors = [];

		/**
		 * Removes errors that occur inside the given node
		 * @param {ASTNode} node to check for matching errors.
		 * @returns {void}
		 * @private
		 */
		function removeWhitespaceError(node) {
			const locStart = node.loc.start;
			const locEnd = node.loc.end;

			errors = errors.filter(
				({ loc: { start: errorLocStart } }) =>
					errorLocStart.line < locStart.line ||
					(errorLocStart.line === locStart.line &&
						errorLocStart.column < locStart.column) ||
					(errorLocStart.line === locEnd.line &&
						errorLocStart.column >= locEnd.column) ||
					errorLocStart.line > locEnd.line,
			);
		}

		/**
		 * Checks literal nodes for errors that we are choosing to ignore and calls the relevant methods to remove the errors
		 * @param {ASTNode} node to check for matching errors.
		 * @returns {void}
		 * @private
		 */
		function removeInvalidNodeErrorsInLiteral(node) {
			const shouldCheckStrings =
				skipStrings && typeof node.value === "string";
			const shouldCheckRegExps = skipRegExps && Boolean(node.regex);

			if (shouldCheckStrings || shouldCheckRegExps) {
				// If we have irregular characters remove them from the errors list
				if (ALL_IRREGULARS.test(node.raw)) {
					removeWhitespaceError(node);
				}
			}
		}

		/**
		 * Checks template string literal nodes for errors that we are choosing to ignore and calls the relevant methods to remove the errors
		 * @param {ASTNode} node to check for matching errors.
		 * @returns {void}
		 * @private
		 */
		function removeInvalidNodeErrorsInTemplateLiteral(node) {
			if (typeof node.value.raw === "string") {
				if (ALL_IRREGULARS.test(node.value.raw)) {
					removeWhitespaceError(node);
				}
			}
		}

		/**
		 * Checks comment nodes for errors that we are choosing to ignore and calls the relevant methods to remove the errors
		 * @param {ASTNode} node to check for matching errors.
		 * @returns {void}
		 * @private
		 */
		function removeInvalidNodeErrorsInComment(node) {
			if (ALL_IRREGULARS.test(node.value)) {
				removeWhitespaceError(node);
			}
		}

		/**
		 * Checks JSX nodes for errors that we are choosing to ignore and calls the relevant methods to remove the errors
		 * @param {ASTNode} node to check for matching errors.
		 * @returns {void}
		 * @private
		 */
		function removeInvalidNodeErrorsInJSXText(node) {
			if (ALL_IRREGULARS.test(node.raw)) {
				removeWhitespaceError(node);
			}
		}

		/**
		 * Checks the program source for irregular whitespace
		 * @param {ASTNode} node The program node
		 * @returns {void}
		 * @private
		 */
		function checkForIrregularWhitespace(node) {
			const sourceLines = sourceCode.lines;

			sourceLines.forEach((sourceLine, lineIndex) => {
				const lineNumber = lineIndex + 1;
				let match;

				while (
					(match = IRREGULAR_WHITESPACE.exec(sourceLine)) !== null
				) {
					errors.push({
						node,
						messageId: "noIrregularWhitespace",
						loc: {
							start: {
								line: lineNumber,
								column: match.index,
							},
							end: {
								line: lineNumber,
								column: match.index + match[0].length,
							},
						},
					});
				}
			});
		}

		/**
		 * Checks the program source for irregular line terminators
		 * @param {ASTNode} node The program node
		 * @returns {void}
		 * @private
		 */
		function checkForIrregularLineTerminators(node) {
			const source = sourceCode.getText(),
				sourceLines = sourceCode.lines,
				linebreaks = source.match(LINE_BREAK);
			let lastLineIndex = -1,
				match;

			while ((match = IRREGULAR_LINE_TERMINATORS.exec(source)) !== null) {
				const lineIndex =
					linebreaks.indexOf(match[0], lastLineIndex + 1) || 0;

				errors.push({
					node,
					messageId: "noIrregularWhitespace",
					loc: {
						start: {
							line: lineIndex + 1,
							column: sourceLines[lineIndex].length,
						},
						end: {
							line: lineIndex + 2,
							column: 0,
						},
					},
				});

				lastLineIndex = lineIndex;
			}
		}

		/**
		 * A no-op function to act as placeholder for comment accumulation when the `skipComments` option is `false`.
		 * @returns {void}
		 * @private
		 */
		function noop() {}

		const nodes = {};

		if (ALL_IRREGULARS.test(sourceCode.getText())) {
			nodes.Program = function (node) {
				/*
				 * As we can easily fire warnings for all white space issues with
				 * all the source its simpler to fire them here.
				 * This means we can check all the application code without having
				 * to worry about issues caused in the parser tokens.
				 * When writing this code also evaluating per node was missing out
				 * connecting tokens in some cases.
				 * We can later filter the errors when they are found to be not an
				 * issue in nodes we don't care about.
				 */
				checkForIrregularWhitespace(node);
				checkForIrregularLineTerminators(node);
			};

			nodes.Literal = removeInvalidNodeErrorsInLiteral;
			nodes.TemplateElement = skipTemplates
				? removeInvalidNodeErrorsInTemplateLiteral
				: noop;
			nodes.JSXText = skipJSXText
				? removeInvalidNodeErrorsInJSXText
				: noop;
			nodes["Program:exit"] = function () {
				if (skipComments) {
					// First strip errors occurring in comment nodes.
					commentNodes.forEach(removeInvalidNodeErrorsInComment);
				}

				// If we have any errors remaining report on them
				errors.forEach(error => context.report(error));
			};
		} else {
			nodes.Program = noop;
		}

		return nodes;
	},
};

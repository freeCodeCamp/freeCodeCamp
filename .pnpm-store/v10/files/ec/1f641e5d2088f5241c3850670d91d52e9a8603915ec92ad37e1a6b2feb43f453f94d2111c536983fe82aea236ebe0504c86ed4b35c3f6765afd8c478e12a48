/**
 * @fileoverview Rule to disallow `\8` and `\9` escape sequences in string literals.
 * @author Milos Djermanovic
 */

"use strict";

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/**
 * @import { SourceRange } from "@eslint/core";
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const QUICK_TEST_REGEX = /\\[89]/u;

/**
 * Returns unicode escape sequence that represents the given character.
 * @param {string} character A single code unit.
 * @returns {string} "\uXXXX" sequence.
 */
function getUnicodeEscape(character) {
	return `\\u${character.charCodeAt(0).toString(16).padStart(4, "0")}`;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description:
				"Disallow `\\8` and `\\9` escape sequences in string literals",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape",
		},

		hasSuggestions: true,

		schema: [],

		messages: {
			decimalEscape: "Don't use '{{decimalEscape}}' escape sequence.",

			// suggestions
			refactor:
				"Replace '{{original}}' with '{{replacement}}'. This maintains the current functionality.",
			escapeBackslash:
				"Replace '{{original}}' with '{{replacement}}' to include the actual backslash character.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		/**
		 * Creates a new Suggestion object.
		 * @param {string} messageId "refactor" or "escapeBackslash".
		 * @param {SourceRange} range The range to replace.
		 * @param {string} replacement New text for the range.
		 * @returns {Object} Suggestion
		 */
		function createSuggestion(messageId, range, replacement) {
			return {
				messageId,
				data: {
					original: sourceCode.getText().slice(...range),
					replacement,
				},
				fix(fixer) {
					return fixer.replaceTextRange(range, replacement);
				},
			};
		}

		return {
			Literal(node) {
				if (typeof node.value !== "string") {
					return;
				}

				if (!QUICK_TEST_REGEX.test(node.raw)) {
					return;
				}

				const regex =
					/(?:[^\\]|(?<previousEscape>\\.))*?(?<decimalEscape>\\[89])/suy;
				let match;

				while ((match = regex.exec(node.raw))) {
					const { previousEscape, decimalEscape } = match.groups;
					const decimalEscapeRangeEnd =
						node.range[0] + match.index + match[0].length;
					const decimalEscapeRangeStart =
						decimalEscapeRangeEnd - decimalEscape.length;
					const decimalEscapeRange = [
						decimalEscapeRangeStart,
						decimalEscapeRangeEnd,
					];
					const suggest = [];

					// When `regex` is matched, `previousEscape` can only capture characters adjacent to `decimalEscape`
					if (previousEscape === "\\0") {
						/*
						 * Now we have a NULL escape "\0" immediately followed by a decimal escape, e.g.: "\0\8".
						 * Fixing this to "\08" would turn "\0" into a legacy octal escape. To avoid producing
						 * an octal escape while fixing a decimal escape, we provide different suggestions.
						 */
						suggest.push(
							createSuggestion(
								// "\0\8" -> "\u00008"
								"refactor",
								[
									decimalEscapeRangeStart -
										previousEscape.length,
									decimalEscapeRangeEnd,
								],
								`${getUnicodeEscape("\0")}${decimalEscape[1]}`,
							),
							createSuggestion(
								// "\8" -> "\u0038"
								"refactor",
								decimalEscapeRange,
								getUnicodeEscape(decimalEscape[1]),
							),
						);
					} else {
						suggest.push(
							createSuggestion(
								// "\8" -> "8"
								"refactor",
								decimalEscapeRange,
								decimalEscape[1],
							),
						);
					}

					suggest.push(
						createSuggestion(
							// "\8" -> "\\8"
							"escapeBackslash",
							decimalEscapeRange,
							`\\${decimalEscape}`,
						),
					);

					context.report({
						node,
						loc: {
							start: sourceCode.getLocFromIndex(
								decimalEscapeRangeStart,
							),
							end: sourceCode.getLocFromIndex(
								decimalEscapeRangeEnd,
							),
						},
						messageId: "decimalEscape",
						data: {
							decimalEscape,
						},
						suggest,
					});
				}
			},
		};
	},
};

/**
 * @fileoverview Rule to flag the use of empty character classes in regular expressions
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { RegExpParser, visitRegExpAST } = require("@eslint-community/regexpp");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const parser = new RegExpParser();
const QUICK_TEST_REGEX = /\[\]/u;

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		docs: {
			description:
				"Disallow empty character classes in regular expressions",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-empty-character-class",
		},

		schema: [],

		messages: {
			unexpected: "Empty class.",
		},
	},

	create(context) {
		return {
			"Literal[regex]"(node) {
				const { pattern, flags } = node.regex;

				if (!QUICK_TEST_REGEX.test(pattern)) {
					return;
				}

				let regExpAST;

				try {
					regExpAST = parser.parsePattern(
						pattern,
						0,
						pattern.length,
						{
							unicode: flags.includes("u"),
							unicodeSets: flags.includes("v"),
						},
					);
				} catch {
					// Ignore regular expressions that regexpp cannot parse
					return;
				}

				visitRegExpAST(regExpAST, {
					onCharacterClassEnter(characterClass) {
						if (
							!characterClass.negate &&
							characterClass.elements.length === 0
						) {
							context.report({ node, messageId: "unexpected" });
						}
					},
				});
			},
		};
	},
};

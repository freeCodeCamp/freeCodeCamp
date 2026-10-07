/**
 * @fileoverview Rule to check for ambiguous div operator in regexes
 * @author Matt DuVall <http://www.mattduvall.com>
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description:
				"Disallow equal signs explicitly at the beginning of regular expressions",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/no-div-regex",
		},

		fixable: "code",

		schema: [],

		messages: {
			unexpected:
				"A regular expression literal can be confused with '/='.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		return {
			Literal(node) {
				const token = sourceCode.getFirstToken(node);

				if (
					token.type === "RegularExpression" &&
					token.value[1] === "="
				) {
					context.report({
						node,
						messageId: "unexpected",
						fix(fixer) {
							return fixer.replaceTextRange(
								[token.range[0] + 1, token.range[0] + 2],
								"[=]",
							);
						},
					});
				}
			},
		};
	},
};

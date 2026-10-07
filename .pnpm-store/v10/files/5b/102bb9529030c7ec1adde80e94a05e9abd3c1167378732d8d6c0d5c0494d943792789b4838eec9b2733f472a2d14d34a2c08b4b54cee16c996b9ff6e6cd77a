/**
 * @fileoverview Rule to flag when regex literals are not wrapped in parens
 * @author Matt DuVall <http://www.mattduvall.com>
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
						name: "wrap-regex",
						url: "https://eslint.style/rules/wrap-regex",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Require parenthesis around regex literals",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/wrap-regex",
		},

		schema: [],
		fixable: "code",

		messages: {
			requireParens:
				"Wrap the regexp literal in parens to disambiguate the slash.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		return {
			Literal(node) {
				const token = sourceCode.getFirstToken(node),
					nodeType = token.type;

				if (nodeType === "RegularExpression") {
					const beforeToken = sourceCode.getTokenBefore(node);
					const afterToken = sourceCode.getTokenAfter(node);
					const { parent } = node;

					if (
						parent.type === "MemberExpression" &&
						parent.object === node &&
						!(
							beforeToken &&
							beforeToken.value === "(" &&
							afterToken &&
							afterToken.value === ")"
						)
					) {
						context.report({
							node,
							messageId: "requireParens",
							fix: fixer =>
								fixer.replaceText(
									node,
									`(${sourceCode.getText(node)})`,
								),
						});
					}
				}
			},
		};
	},
};

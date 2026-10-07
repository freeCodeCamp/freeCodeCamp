/**
 * @fileoverview Rule to check spacing between template tags and their literals
 * @author Jonathan Wilsson
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
						name: "template-tag-spacing",
						url: "https://eslint.style/rules/template-tag-spacing",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description:
				"Require or disallow spacing between template tags and their literals",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/template-tag-spacing",
		},

		fixable: "whitespace",

		schema: [{ enum: ["always", "never"] }],
		messages: {
			unexpected:
				"Unexpected space between template tag and template literal.",
			missing: "Missing space between template tag and template literal.",
		},
	},

	create(context) {
		const never = context.options[0] !== "always";
		const sourceCode = context.sourceCode;

		/**
		 * Check if a space is present between a template tag and its literal
		 * @param {ASTNode} node node to evaluate
		 * @returns {void}
		 * @private
		 */
		function checkSpacing(node) {
			const tagToken = sourceCode.getTokenBefore(node.quasi);
			const literalToken = sourceCode.getFirstToken(node.quasi);
			const hasWhitespace = sourceCode.isSpaceBetweenTokens(
				tagToken,
				literalToken,
			);

			if (never && hasWhitespace) {
				context.report({
					node,
					loc: {
						start: tagToken.loc.end,
						end: literalToken.loc.start,
					},
					messageId: "unexpected",
					fix(fixer) {
						const comments = sourceCode.getCommentsBefore(
							node.quasi,
						);

						// Don't fix anything if there's a single line comment after the template tag
						if (comments.some(comment => comment.type === "Line")) {
							return null;
						}

						return fixer.replaceTextRange(
							[tagToken.range[1], literalToken.range[0]],
							comments.reduce(
								(text, comment) =>
									text + sourceCode.getText(comment),
								"",
							),
						);
					},
				});
			} else if (!never && !hasWhitespace) {
				context.report({
					node,
					loc: {
						start: node.loc.start,
						end: literalToken.loc.start,
					},
					messageId: "missing",
					fix(fixer) {
						return fixer.insertTextAfter(tagToken, " ");
					},
				});
			}
		}

		return {
			TaggedTemplateExpression: checkSpacing,
		};
	},
};

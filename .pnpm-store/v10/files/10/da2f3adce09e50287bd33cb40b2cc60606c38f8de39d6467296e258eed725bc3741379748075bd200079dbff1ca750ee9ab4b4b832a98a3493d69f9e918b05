/**
 * @fileoverview Rule to disallow empty static blocks.
 * @author Sosuke Suzuki
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		hasSuggestions: true,
		type: "suggestion",

		docs: {
			description: "Disallow empty static blocks",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-empty-static-block",
		},

		schema: [],

		messages: {
			unexpected: "Unexpected empty static block.",
			suggestComment: "Add comment inside empty static block.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		return {
			StaticBlock(node) {
				if (node.body.length === 0) {
					const openingBrace = sourceCode.getFirstToken(node, {
						skip: 1,
					});
					const closingBrace = sourceCode.getLastToken(node);

					if (
						sourceCode.getCommentsBefore(closingBrace).length === 0
					) {
						context.report({
							loc: {
								start: openingBrace.loc.start,
								end: closingBrace.loc.end,
							},
							messageId: "unexpected",
							suggest: [
								{
									messageId: "suggestComment",
									fix(fixer) {
										const range = [
											openingBrace.range[1],
											closingBrace.range[0],
										];

										return fixer.replaceTextRange(
											range,
											" /* empty */ ",
										);
									},
								},
							],
						});
					}
				}
			},
		};
	},
};

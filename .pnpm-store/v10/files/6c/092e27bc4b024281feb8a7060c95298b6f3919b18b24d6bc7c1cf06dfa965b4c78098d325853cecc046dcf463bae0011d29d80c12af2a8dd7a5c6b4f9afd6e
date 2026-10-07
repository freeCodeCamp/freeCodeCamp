/**
 * @fileoverview Rule to flag use of an empty block statement
 * @author Nicholas C. Zakas
 */
"use strict";

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
		hasSuggestions: true,
		type: "suggestion",

		defaultOptions: [
			{
				allowEmptyCatch: false,
			},
		],

		docs: {
			description: "Disallow empty block statements",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-empty",
		},

		schema: [
			{
				type: "object",
				properties: {
					allowEmptyCatch: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			unexpected: "Empty {{type}} statement.",
			suggestComment: "Add comment inside empty {{type}} statement.",
		},
	},

	create(context) {
		const [{ allowEmptyCatch }] = context.options;
		const sourceCode = context.sourceCode;

		return {
			BlockStatement(node) {
				// if the body is not empty, we can just return immediately
				if (node.body.length !== 0) {
					return;
				}

				// a function is generally allowed to be empty
				if (astUtils.isFunction(node.parent)) {
					return;
				}

				if (allowEmptyCatch && node.parent.type === "CatchClause") {
					return;
				}

				// any other block is only allowed to be empty, if it contains a comment
				if (sourceCode.getCommentsInside(node).length > 0) {
					return;
				}

				context.report({
					node,
					messageId: "unexpected",
					data: { type: "block" },
					suggest: [
						{
							messageId: "suggestComment",
							data: { type: "block" },
							fix(fixer) {
								const range = [
									node.range[0] + 1,
									node.range[1] - 1,
								];

								return fixer.replaceTextRange(
									range,
									" /* empty */ ",
								);
							},
						},
					],
				});
			},

			SwitchStatement(node) {
				if (
					typeof node.cases === "undefined" ||
					node.cases.length === 0
				) {
					const openingBrace = sourceCode.getTokenAfter(
						node.discriminant,
						astUtils.isOpeningBraceToken,
					);

					const closingBrace = sourceCode.getLastToken(node);

					if (
						sourceCode.commentsExistBetween(
							openingBrace,
							closingBrace,
						)
					) {
						return;
					}

					context.report({
						node,
						loc: {
							start: openingBrace.loc.start,
							end: closingBrace.loc.end,
						},
						messageId: "unexpected",
						data: { type: "switch" },
						suggest: [
							{
								messageId: "suggestComment",
								data: { type: "switch" },
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
			},
		};
	},
};

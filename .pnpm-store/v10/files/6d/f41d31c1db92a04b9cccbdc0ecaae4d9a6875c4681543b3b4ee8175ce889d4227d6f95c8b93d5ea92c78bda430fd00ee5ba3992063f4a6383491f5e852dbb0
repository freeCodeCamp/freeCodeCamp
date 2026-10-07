/**
 * @fileoverview Rule to disallow if as the only statement in an else block
 * @author Brandon Mills
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
		type: "suggestion",

		docs: {
			description:
				"Disallow `if` statements as the only statement in `else` blocks",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/no-lonely-if",
		},

		schema: [],
		fixable: "code",

		messages: {
			unexpectedLonelyIf:
				"Unexpected if as the only statement in an else block.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		return {
			IfStatement(node) {
				const parent = node.parent,
					grandparent = parent.parent;

				if (
					parent &&
					parent.type === "BlockStatement" &&
					parent.body.length === 1 &&
					!astUtils.areBracesNecessary(parent, sourceCode) &&
					grandparent &&
					grandparent.type === "IfStatement" &&
					parent === grandparent.alternate
				) {
					context.report({
						node,
						messageId: "unexpectedLonelyIf",
						fix(fixer) {
							const openingElseCurly =
								sourceCode.getFirstToken(parent);
							const closingElseCurly =
								sourceCode.getLastToken(parent);
							const elseKeyword =
								sourceCode.getTokenBefore(openingElseCurly);
							const tokenAfterElseBlock =
								sourceCode.getTokenAfter(closingElseCurly);
							const lastIfToken = sourceCode.getLastToken(
								node.consequent,
							);
							const sourceText = sourceCode.getText();

							if (
								sourceText
									.slice(
										openingElseCurly.range[1],
										node.range[0],
									)
									.trim() ||
								sourceText
									.slice(
										node.range[1],
										closingElseCurly.range[0],
									)
									.trim()
							) {
								// Don't fix if there are any non-whitespace characters interfering (e.g. comments)
								return null;
							}

							if (
								node.consequent.type !== "BlockStatement" &&
								lastIfToken.value !== ";" &&
								tokenAfterElseBlock &&
								(node.consequent.loc.end.line ===
									tokenAfterElseBlock.loc.start.line ||
									/^[([/+`-]/u.test(
										tokenAfterElseBlock.value,
									) ||
									lastIfToken.value === "++" ||
									lastIfToken.value === "--")
							) {
								/*
								 * If the `if` statement has no block, and is not followed by a semicolon, make sure that fixing
								 * the issue would not change semantics due to ASI. If this would happen, don't do a fix.
								 */
								return null;
							}

							return fixer.replaceTextRange(
								[
									openingElseCurly.range[0],
									closingElseCurly.range[1],
								],
								(elseKeyword.range[1] ===
								openingElseCurly.range[0]
									? " "
									: "") + sourceCode.getText(node),
							);
						},
					});
				}
			},
		};
	},
};

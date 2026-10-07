/**
 * @fileoverview Require or disallow newlines around directives.
 * @author Kai Cataldo
 * @deprecated in ESLint v4.0.0
 */

"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "layout",

		docs: {
			description: "Require or disallow newlines around directives",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/lines-around-directive",
		},

		schema: [
			{
				oneOf: [
					{
						enum: ["always", "never"],
					},
					{
						type: "object",
						properties: {
							before: {
								enum: ["always", "never"],
							},
							after: {
								enum: ["always", "never"],
							},
						},
						additionalProperties: false,
						minProperties: 2,
					},
				],
			},
		],

		fixable: "whitespace",
		messages: {
			expected: 'Expected newline {{location}} "{{value}}" directive.',
			unexpected:
				'Unexpected newline {{location}} "{{value}}" directive.',
		},
		deprecated: {
			message: "The rule was replaced with a more general rule.",
			url: "https://eslint.org/blog/2017/06/eslint-v4.0.0-released/",
			deprecatedSince: "4.0.0",
			availableUntil: "11.0.0",
			replacedBy: [
				{
					message: "The new rule moved to a plugin.",
					url: "https://eslint.org/docs/latest/rules/padding-line-between-statements#examples",
					plugin: {
						name: "@stylistic/eslint-plugin",
						url: "https://eslint.style",
					},
					rule: {
						name: "padding-line-between-statements",
						url: "https://eslint.style/rules/padding-line-between-statements",
					},
				},
			],
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;
		const config = context.options[0] || "always";
		const expectLineBefore =
			typeof config === "string" ? config : config.before;
		const expectLineAfter =
			typeof config === "string" ? config : config.after;

		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		/**
		 * Check if node is preceded by a blank newline.
		 * @param {ASTNode} node Node to check.
		 * @returns {boolean} Whether or not the passed in node is preceded by a blank newline.
		 */
		function hasNewlineBefore(node) {
			const tokenBefore = sourceCode.getTokenBefore(node, {
				includeComments: true,
			});
			const tokenLineBefore = tokenBefore ? tokenBefore.loc.end.line : 0;

			return node.loc.start.line - tokenLineBefore >= 2;
		}

		/**
		 * Gets the last token of a node that is on the same line as the rest of the node.
		 * This will usually be the last token of the node, but it will be the second-to-last token if the node has a trailing
		 * semicolon on a different line.
		 * @param {ASTNode} node A directive node
		 * @returns {Token} The last token of the node on the line
		 */
		function getLastTokenOnLine(node) {
			const lastToken = sourceCode.getLastToken(node);
			const secondToLastToken = sourceCode.getTokenBefore(lastToken);

			return astUtils.isSemicolonToken(lastToken) &&
				lastToken.loc.start.line > secondToLastToken.loc.end.line
				? secondToLastToken
				: lastToken;
		}

		/**
		 * Check if node is followed by a blank newline.
		 * @param {ASTNode} node Node to check.
		 * @returns {boolean} Whether or not the passed in node is followed by a blank newline.
		 */
		function hasNewlineAfter(node) {
			const lastToken = getLastTokenOnLine(node);
			const tokenAfter = sourceCode.getTokenAfter(lastToken, {
				includeComments: true,
			});

			return tokenAfter.loc.start.line - lastToken.loc.end.line >= 2;
		}

		/**
		 * Report errors for newlines around directives.
		 * @param {ASTNode} node Node to check.
		 * @param {string} location Whether the error was found before or after the directive.
		 * @param {boolean} expected Whether or not a newline was expected or unexpected.
		 * @returns {void}
		 */
		function reportError(node, location, expected) {
			context.report({
				node,
				messageId: expected ? "expected" : "unexpected",
				data: {
					value: node.expression.value,
					location,
				},
				fix(fixer) {
					const lastToken = getLastTokenOnLine(node);

					if (expected) {
						return location === "before"
							? fixer.insertTextBefore(node, "\n")
							: fixer.insertTextAfter(lastToken, "\n");
					}
					return fixer.removeRange(
						location === "before"
							? [node.range[0] - 1, node.range[0]]
							: [lastToken.range[1], lastToken.range[1] + 1],
					);
				},
			});
		}

		/**
		 * Check lines around directives in node
		 * @param {ASTNode} node node to check
		 * @returns {void}
		 */
		function checkDirectives(node) {
			const directives = astUtils.getDirectivePrologue(node);

			if (!directives.length) {
				return;
			}

			const firstDirective = directives[0];
			const leadingComments =
				sourceCode.getCommentsBefore(firstDirective);

			/*
			 * Only check before the first directive if it is preceded by a comment or if it is at the top of
			 * the file and expectLineBefore is set to "never". This is to not force a newline at the top of
			 * the file if there are no comments as well as for compatibility with padded-blocks.
			 */
			if (leadingComments.length) {
				if (
					expectLineBefore === "always" &&
					!hasNewlineBefore(firstDirective)
				) {
					reportError(firstDirective, "before", true);
				}

				if (
					expectLineBefore === "never" &&
					hasNewlineBefore(firstDirective)
				) {
					reportError(firstDirective, "before", false);
				}
			} else if (
				node.type === "Program" &&
				expectLineBefore === "never" &&
				!leadingComments.length &&
				hasNewlineBefore(firstDirective)
			) {
				reportError(firstDirective, "before", false);
			}

			const lastDirective = directives.at(-1);
			const statements =
				node.type === "Program" ? node.body : node.body.body;

			/*
			 * Do not check after the last directive if the body only
			 * contains a directive prologue and isn't followed by a comment to ensure
			 * this rule behaves well with padded-blocks.
			 */
			if (
				lastDirective === statements.at(-1) &&
				!lastDirective.trailingComments
			) {
				return;
			}

			if (
				expectLineAfter === "always" &&
				!hasNewlineAfter(lastDirective)
			) {
				reportError(lastDirective, "after", true);
			}

			if (expectLineAfter === "never" && hasNewlineAfter(lastDirective)) {
				reportError(lastDirective, "after", false);
			}
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			Program: checkDirectives,
			FunctionDeclaration: checkDirectives,
			FunctionExpression: checkDirectives,
			ArrowFunctionExpression: checkDirectives,
		};
	},
};

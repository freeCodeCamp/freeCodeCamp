/**
 * @fileoverview Rule to check empty newline after "var" statement
 * @author Gopal Venkatesan
 * @deprecated in ESLint v4.0.0
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
		type: "layout",

		docs: {
			description:
				"Require or disallow an empty line after variable declarations",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/newline-after-var",
		},
		schema: [
			{
				enum: ["never", "always"],
			},
		],
		fixable: "whitespace",
		messages: {
			expected: "Expected blank line after variable declarations.",
			unexpected: "Unexpected blank line after variable declarations.",
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

		// Default `mode` to "always".
		const mode = context.options[0] === "never" ? "never" : "always";

		// Cache starting and ending line numbers of comments for faster lookup
		const commentEndLine = sourceCode
			.getAllComments()
			.reduce((result, token) => {
				result[token.loc.start.line] = token.loc.end.line;
				return result;
			}, {});

		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		/**
		 * Gets a token from the given node to compare line to the next statement.
		 *
		 * In general, the token is the last token of the node. However, the token is the second last token if the following conditions satisfy.
		 *
		 * - The last token is semicolon.
		 * - The semicolon is on a different line from the previous token of the semicolon.
		 *
		 * This behavior would address semicolon-less style code. e.g.:
		 *
		 *     var foo = 1
		 *
		 *     ;(a || b).doSomething()
		 * @param {ASTNode} node The node to get.
		 * @returns {Token} The token to compare line to the next statement.
		 */
		function getLastToken(node) {
			const lastToken = sourceCode.getLastToken(node);

			if (lastToken.type === "Punctuator" && lastToken.value === ";") {
				const prevToken = sourceCode.getTokenBefore(lastToken);

				if (prevToken.loc.end.line !== lastToken.loc.start.line) {
					return prevToken;
				}
			}

			return lastToken;
		}

		/**
		 * Determine if provided keyword is a variable declaration
		 * @private
		 * @param {string} keyword keyword to test
		 * @returns {boolean} True if `keyword` is a type of var
		 */
		function isVar(keyword) {
			return (
				keyword === "var" || keyword === "let" || keyword === "const"
			);
		}

		/**
		 * Determine if provided keyword is a variant of for specifiers
		 * @private
		 * @param {string} keyword keyword to test
		 * @returns {boolean} True if `keyword` is a variant of for specifier
		 */
		function isForTypeSpecifier(keyword) {
			return (
				keyword === "ForStatement" ||
				keyword === "ForInStatement" ||
				keyword === "ForOfStatement"
			);
		}

		/**
		 * Determine if provided keyword is an export specifiers
		 * @private
		 * @param {string} nodeType nodeType to test
		 * @returns {boolean} True if `nodeType` is an export specifier
		 */
		function isExportSpecifier(nodeType) {
			return (
				nodeType === "ExportNamedDeclaration" ||
				nodeType === "ExportSpecifier" ||
				nodeType === "ExportDefaultDeclaration" ||
				nodeType === "ExportAllDeclaration"
			);
		}

		/**
		 * Determine if provided node is the last of their parent block.
		 * @private
		 * @param {ASTNode} node node to test
		 * @returns {boolean} True if `node` is last of their parent block.
		 */
		function isLastNode(node) {
			const token = sourceCode.getTokenAfter(node);

			return (
				!token || (token.type === "Punctuator" && token.value === "}")
			);
		}

		/**
		 * Gets the last line of a group of consecutive comments
		 * @param {number} commentStartLine The starting line of the group
		 * @returns {number} The number of the last comment line of the group
		 */
		function getLastCommentLineOfBlock(commentStartLine) {
			const currentCommentEnd = commentEndLine[commentStartLine];

			return commentEndLine[currentCommentEnd + 1]
				? getLastCommentLineOfBlock(currentCommentEnd + 1)
				: currentCommentEnd;
		}

		/**
		 * Determine if a token starts more than one line after a comment ends
		 * @param {token} token The token being checked
		 * @param {integer} commentStartLine The line number on which the comment starts
		 * @returns {boolean} True if `token` does not start immediately after a comment
		 */
		function hasBlankLineAfterComment(token, commentStartLine) {
			return (
				token.loc.start.line >
				getLastCommentLineOfBlock(commentStartLine) + 1
			);
		}

		/**
		 * Checks that a blank line exists after a variable declaration when mode is
		 * set to "always", or checks that there is no blank line when mode is set
		 * to "never"
		 * @private
		 * @param {ASTNode} node `VariableDeclaration` node to test
		 * @returns {void}
		 */
		function checkForBlankLine(node) {
			/*
			 * lastToken is the last token on the node's line. It will usually also be the last token of the node, but it will
			 * sometimes be second-last if there is a semicolon on a different line.
			 */
			const lastToken = getLastToken(node),
				/*
				 * If lastToken is the last token of the node, nextToken should be the token after the node. Otherwise, nextToken
				 * is the last token of the node.
				 */
				nextToken =
					lastToken === sourceCode.getLastToken(node)
						? sourceCode.getTokenAfter(node)
						: sourceCode.getLastToken(node),
				nextLineNum = lastToken.loc.end.line + 1;

			// Ignore if there is no following statement
			if (!nextToken) {
				return;
			}

			// Ignore if parent of node is a for variant
			if (isForTypeSpecifier(node.parent.type)) {
				return;
			}

			// Ignore if parent of node is an export specifier
			if (isExportSpecifier(node.parent.type)) {
				return;
			}

			/*
			 * Some coding styles use multiple `var` statements, so do nothing if
			 * the next token is a `var` statement.
			 */
			if (nextToken.type === "Keyword" && isVar(nextToken.value)) {
				return;
			}

			// Ignore if it is last statement in a block
			if (isLastNode(node)) {
				return;
			}

			// Next statement is not a `var`...
			const noNextLineToken = nextToken.loc.start.line > nextLineNum;
			const hasNextLineComment =
				typeof commentEndLine[nextLineNum] !== "undefined";

			if (mode === "never" && noNextLineToken && !hasNextLineComment) {
				context.report({
					node,
					messageId: "unexpected",
					fix(fixer) {
						const linesBetween = sourceCode
							.getText()
							.slice(lastToken.range[1], nextToken.range[0])
							.split(astUtils.LINEBREAK_MATCHER);

						return fixer.replaceTextRange(
							[lastToken.range[1], nextToken.range[0]],
							`${linesBetween.slice(0, -1).join("")}\n${linesBetween.at(-1)}`,
						);
					},
				});
			}

			// Token on the next line, or comment without blank line
			if (
				mode === "always" &&
				(!noNextLineToken ||
					(hasNextLineComment &&
						!hasBlankLineAfterComment(nextToken, nextLineNum)))
			) {
				context.report({
					node,
					messageId: "expected",
					fix(fixer) {
						if (
							(noNextLineToken
								? getLastCommentLineOfBlock(nextLineNum)
								: lastToken.loc.end.line) ===
							nextToken.loc.start.line
						) {
							return fixer.insertTextBefore(nextToken, "\n\n");
						}

						return fixer.insertTextBeforeRange(
							[
								nextToken.range[0] - nextToken.loc.start.column,
								nextToken.range[1],
							],
							"\n",
						);
					},
				});
			}
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			VariableDeclaration: checkForBlankLine,
		};
	},
};

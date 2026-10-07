/**
 * @fileoverview Enforces empty lines around comments.
 * @author Jamund Ferguson
 * @deprecated in ESLint v8.53.0
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Return an array with any line numbers that are empty.
 * @param {Array} lines An array of each line of the file.
 * @returns {Array} An array of line numbers.
 */
function getEmptyLineNums(lines) {
	const emptyLines = lines
		.map((line, i) => ({
			code: line.trim(),
			num: i + 1,
		}))
		.filter(line => !line.code)
		.map(line => line.num);

	return emptyLines;
}

/**
 * Return an array with any line numbers that contain comments.
 * @param {Array} comments An array of comment tokens.
 * @returns {Array} An array of line numbers.
 */
function getCommentLineNums(comments) {
	const lines = [];

	comments.forEach(token => {
		const start = token.loc.start.line;
		const end = token.loc.end.line;

		lines.push(start, end);
	});
	return lines;
}

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
						name: "lines-around-comment",
						url: "https://eslint.style/rules/lines-around-comment",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Require empty lines around comments",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/lines-around-comment",
		},

		fixable: "whitespace",

		schema: [
			{
				type: "object",
				properties: {
					beforeBlockComment: {
						type: "boolean",
						default: true,
					},
					afterBlockComment: {
						type: "boolean",
						default: false,
					},
					beforeLineComment: {
						type: "boolean",
						default: false,
					},
					afterLineComment: {
						type: "boolean",
						default: false,
					},
					allowBlockStart: {
						type: "boolean",
						default: false,
					},
					allowBlockEnd: {
						type: "boolean",
						default: false,
					},
					allowClassStart: {
						type: "boolean",
					},
					allowClassEnd: {
						type: "boolean",
					},
					allowObjectStart: {
						type: "boolean",
					},
					allowObjectEnd: {
						type: "boolean",
					},
					allowArrayStart: {
						type: "boolean",
					},
					allowArrayEnd: {
						type: "boolean",
					},
					ignorePattern: {
						type: "string",
					},
					applyDefaultIgnorePatterns: {
						type: "boolean",
					},
					afterHashbangComment: {
						type: "boolean",
						default: false,
					},
				},
				additionalProperties: false,
			},
		],
		messages: {
			after: "Expected line after comment.",
			before: "Expected line before comment.",
		},
	},

	create(context) {
		const options = Object.assign({}, context.options[0]);
		const ignorePattern = options.ignorePattern;
		const defaultIgnoreRegExp = astUtils.COMMENTS_IGNORE_PATTERN;
		const customIgnoreRegExp = new RegExp(ignorePattern, "u");
		const applyDefaultIgnorePatterns =
			options.applyDefaultIgnorePatterns !== false;

		options.beforeBlockComment =
			typeof options.beforeBlockComment !== "undefined"
				? options.beforeBlockComment
				: true;

		const sourceCode = context.sourceCode;

		const lines = sourceCode.lines,
			numLines = lines.length + 1,
			comments = sourceCode.getAllComments(),
			commentLines = getCommentLineNums(comments),
			emptyLines = getEmptyLineNums(lines),
			commentAndEmptyLines = new Set(commentLines.concat(emptyLines));

		/**
		 * Returns whether or not comments are on lines starting with or ending with code
		 * @param {token} token The comment token to check.
		 * @returns {boolean} True if the comment is not alone.
		 */
		function codeAroundComment(token) {
			let currentToken = token;

			do {
				currentToken = sourceCode.getTokenBefore(currentToken, {
					includeComments: true,
				});
			} while (currentToken && astUtils.isCommentToken(currentToken));

			if (
				currentToken &&
				astUtils.isTokenOnSameLine(currentToken, token)
			) {
				return true;
			}

			currentToken = token;
			do {
				currentToken = sourceCode.getTokenAfter(currentToken, {
					includeComments: true,
				});
			} while (currentToken && astUtils.isCommentToken(currentToken));

			if (
				currentToken &&
				astUtils.isTokenOnSameLine(token, currentToken)
			) {
				return true;
			}

			return false;
		}

		/**
		 * Returns whether or not comments are inside a node type or not.
		 * @param {ASTNode} parent The Comment parent node.
		 * @param {string} nodeType The parent type to check against.
		 * @returns {boolean} True if the comment is inside nodeType.
		 */
		function isParentNodeType(parent, nodeType) {
			return (
				parent.type === nodeType ||
				(parent.body && parent.body.type === nodeType) ||
				(parent.consequent && parent.consequent.type === nodeType)
			);
		}

		/**
		 * Returns the parent node that contains the given token.
		 * @param {token} token The token to check.
		 * @returns {ASTNode|null} The parent node that contains the given token.
		 */
		function getParentNodeOfToken(token) {
			const node = sourceCode.getNodeByRangeIndex(token.range[0]);

			/*
			 * For the purpose of this rule, the comment token is in a `StaticBlock` node only
			 * if it's inside the braces of that `StaticBlock` node.
			 *
			 * Example where this function returns `null`:
			 *
			 *   static
			 *   // comment
			 *   {
			 *   }
			 *
			 * Example where this function returns `StaticBlock` node:
			 *
			 *   static
			 *   {
			 *   // comment
			 *   }
			 *
			 */
			if (node && node.type === "StaticBlock") {
				const openingBrace = sourceCode.getFirstToken(node, {
					skip: 1,
				}); // skip the `static` token

				return token.range[0] >= openingBrace.range[0] ? node : null;
			}

			return node;
		}

		/**
		 * Returns whether or not comments are at the parent start or not.
		 * @param {token} token The Comment token.
		 * @param {string} nodeType The parent type to check against.
		 * @returns {boolean} True if the comment is at parent start.
		 */
		function isCommentAtParentStart(token, nodeType) {
			const parent = getParentNodeOfToken(token);

			if (parent && isParentNodeType(parent, nodeType)) {
				let parentStartNodeOrToken = parent;

				if (parent.type === "StaticBlock") {
					parentStartNodeOrToken = sourceCode.getFirstToken(parent, {
						skip: 1,
					}); // opening brace of the static block
				} else if (parent.type === "SwitchStatement") {
					parentStartNodeOrToken = sourceCode.getTokenAfter(
						parent.discriminant,
						{
							filter: astUtils.isOpeningBraceToken,
						},
					); // opening brace of the switch statement
				}

				return (
					token.loc.start.line -
						parentStartNodeOrToken.loc.start.line ===
					1
				);
			}

			return false;
		}

		/**
		 * Returns whether or not comments are at the parent end or not.
		 * @param {token} token The Comment token.
		 * @param {string} nodeType The parent type to check against.
		 * @returns {boolean} True if the comment is at parent end.
		 */
		function isCommentAtParentEnd(token, nodeType) {
			const parent = getParentNodeOfToken(token);

			return (
				!!parent &&
				isParentNodeType(parent, nodeType) &&
				parent.loc.end.line - token.loc.end.line === 1
			);
		}

		/**
		 * Returns whether or not comments are at the block start or not.
		 * @param {token} token The Comment token.
		 * @returns {boolean} True if the comment is at block start.
		 */
		function isCommentAtBlockStart(token) {
			return (
				isCommentAtParentStart(token, "ClassBody") ||
				isCommentAtParentStart(token, "BlockStatement") ||
				isCommentAtParentStart(token, "StaticBlock") ||
				isCommentAtParentStart(token, "SwitchCase") ||
				isCommentAtParentStart(token, "SwitchStatement")
			);
		}

		/**
		 * Returns whether or not comments are at the block end or not.
		 * @param {token} token The Comment token.
		 * @returns {boolean} True if the comment is at block end.
		 */
		function isCommentAtBlockEnd(token) {
			return (
				isCommentAtParentEnd(token, "ClassBody") ||
				isCommentAtParentEnd(token, "BlockStatement") ||
				isCommentAtParentEnd(token, "StaticBlock") ||
				isCommentAtParentEnd(token, "SwitchCase") ||
				isCommentAtParentEnd(token, "SwitchStatement")
			);
		}

		/**
		 * Returns whether or not comments are at the class start or not.
		 * @param {token} token The Comment token.
		 * @returns {boolean} True if the comment is at class start.
		 */
		function isCommentAtClassStart(token) {
			return isCommentAtParentStart(token, "ClassBody");
		}

		/**
		 * Returns whether or not comments are at the class end or not.
		 * @param {token} token The Comment token.
		 * @returns {boolean} True if the comment is at class end.
		 */
		function isCommentAtClassEnd(token) {
			return isCommentAtParentEnd(token, "ClassBody");
		}

		/**
		 * Returns whether or not comments are at the object start or not.
		 * @param {token} token The Comment token.
		 * @returns {boolean} True if the comment is at object start.
		 */
		function isCommentAtObjectStart(token) {
			return (
				isCommentAtParentStart(token, "ObjectExpression") ||
				isCommentAtParentStart(token, "ObjectPattern")
			);
		}

		/**
		 * Returns whether or not comments are at the object end or not.
		 * @param {token} token The Comment token.
		 * @returns {boolean} True if the comment is at object end.
		 */
		function isCommentAtObjectEnd(token) {
			return (
				isCommentAtParentEnd(token, "ObjectExpression") ||
				isCommentAtParentEnd(token, "ObjectPattern")
			);
		}

		/**
		 * Returns whether or not comments are at the array start or not.
		 * @param {token} token The Comment token.
		 * @returns {boolean} True if the comment is at array start.
		 */
		function isCommentAtArrayStart(token) {
			return (
				isCommentAtParentStart(token, "ArrayExpression") ||
				isCommentAtParentStart(token, "ArrayPattern")
			);
		}

		/**
		 * Returns whether or not comments are at the array end or not.
		 * @param {token} token The Comment token.
		 * @returns {boolean} True if the comment is at array end.
		 */
		function isCommentAtArrayEnd(token) {
			return (
				isCommentAtParentEnd(token, "ArrayExpression") ||
				isCommentAtParentEnd(token, "ArrayPattern")
			);
		}

		/**
		 * Checks if a comment token has lines around it (ignores inline comments)
		 * @param {token} token The Comment token.
		 * @param {Object} opts Options to determine the newline.
		 * @param {boolean} opts.after Should have a newline after this line.
		 * @param {boolean} opts.before Should have a newline before this line.
		 * @returns {void}
		 */
		function checkForEmptyLine(token, opts) {
			if (
				applyDefaultIgnorePatterns &&
				defaultIgnoreRegExp.test(token.value)
			) {
				return;
			}

			if (ignorePattern && customIgnoreRegExp.test(token.value)) {
				return;
			}

			let after = opts.after,
				before = opts.before;

			const prevLineNum = token.loc.start.line - 1,
				nextLineNum = token.loc.end.line + 1,
				commentIsNotAlone = codeAroundComment(token);

			const blockStartAllowed =
					options.allowBlockStart &&
					isCommentAtBlockStart(token) &&
					!(
						options.allowClassStart === false &&
						isCommentAtClassStart(token)
					),
				blockEndAllowed =
					options.allowBlockEnd &&
					isCommentAtBlockEnd(token) &&
					!(
						options.allowClassEnd === false &&
						isCommentAtClassEnd(token)
					),
				classStartAllowed =
					options.allowClassStart && isCommentAtClassStart(token),
				classEndAllowed =
					options.allowClassEnd && isCommentAtClassEnd(token),
				objectStartAllowed =
					options.allowObjectStart && isCommentAtObjectStart(token),
				objectEndAllowed =
					options.allowObjectEnd && isCommentAtObjectEnd(token),
				arrayStartAllowed =
					options.allowArrayStart && isCommentAtArrayStart(token),
				arrayEndAllowed =
					options.allowArrayEnd && isCommentAtArrayEnd(token);

			const exceptionStartAllowed =
				blockStartAllowed ||
				classStartAllowed ||
				objectStartAllowed ||
				arrayStartAllowed;
			const exceptionEndAllowed =
				blockEndAllowed ||
				classEndAllowed ||
				objectEndAllowed ||
				arrayEndAllowed;

			// ignore top of the file and bottom of the file
			if (prevLineNum < 1) {
				before = false;
			}
			if (nextLineNum >= numLines) {
				after = false;
			}

			// we ignore all inline comments
			if (commentIsNotAlone) {
				return;
			}

			const previousTokenOrComment = sourceCode.getTokenBefore(token, {
				includeComments: true,
			});
			const nextTokenOrComment = sourceCode.getTokenAfter(token, {
				includeComments: true,
			});

			// check for newline before
			if (
				!exceptionStartAllowed &&
				before &&
				!commentAndEmptyLines.has(prevLineNum) &&
				!(
					astUtils.isCommentToken(previousTokenOrComment) &&
					astUtils.isTokenOnSameLine(previousTokenOrComment, token)
				)
			) {
				const lineStart = token.range[0] - token.loc.start.column;
				const range = [lineStart, lineStart];

				context.report({
					node: token,
					messageId: "before",
					fix(fixer) {
						return fixer.insertTextBeforeRange(range, "\n");
					},
				});
			}

			// check for newline after
			if (
				!exceptionEndAllowed &&
				after &&
				!commentAndEmptyLines.has(nextLineNum) &&
				!(
					astUtils.isCommentToken(nextTokenOrComment) &&
					astUtils.isTokenOnSameLine(token, nextTokenOrComment)
				)
			) {
				context.report({
					node: token,
					messageId: "after",
					fix(fixer) {
						return fixer.insertTextAfter(token, "\n");
					},
				});
			}
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			Program() {
				comments.forEach(token => {
					if (token.type === "Line") {
						if (
							options.beforeLineComment ||
							options.afterLineComment
						) {
							checkForEmptyLine(token, {
								after: options.afterLineComment,
								before: options.beforeLineComment,
							});
						}
					} else if (token.type === "Block") {
						if (
							options.beforeBlockComment ||
							options.afterBlockComment
						) {
							checkForEmptyLine(token, {
								after: options.afterBlockComment,
								before: options.beforeBlockComment,
							});
						}
					} else if (token.type === "Shebang") {
						if (options.afterHashbangComment) {
							checkForEmptyLine(token, {
								after: options.afterHashbangComment,
								before: false,
							});
						}
					}
				});
			},
		};
	},
};

/**
 * @fileoverview Enforces or disallows inline comments.
 * @author Greg Cochard
 */
"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [{}],

		docs: {
			description: "Disallow inline comments after code",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/no-inline-comments",
		},

		schema: [
			{
				type: "object",
				properties: {
					ignorePattern: {
						type: "string",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			unexpectedInlineComment: "Unexpected comment inline with code.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;
		const [{ ignorePattern }] = context.options;
		const customIgnoreRegExp =
			ignorePattern && new RegExp(ignorePattern, "u");

		/**
		 * Will check that comments are not on lines starting with or ending with code
		 * @param {ASTNode} node The comment node to check
		 * @private
		 * @returns {void}
		 */
		function testCodeAroundComment(node) {
			const startLine = String(sourceCode.lines[node.loc.start.line - 1]),
				endLine = String(sourceCode.lines[node.loc.end.line - 1]),
				preamble = startLine.slice(0, node.loc.start.column).trim(),
				postamble = endLine.slice(node.loc.end.column).trim(),
				isPreambleEmpty = !preamble,
				isPostambleEmpty = !postamble;

			// Nothing on both sides
			if (isPreambleEmpty && isPostambleEmpty) {
				return;
			}

			// Matches the ignore pattern
			if (customIgnoreRegExp && customIgnoreRegExp.test(node.value)) {
				return;
			}

			// JSX Exception
			if (
				(isPreambleEmpty || preamble === "{") &&
				(isPostambleEmpty || postamble === "}")
			) {
				const enclosingNode = sourceCode.getNodeByRangeIndex(
					node.range[0],
				);

				if (
					enclosingNode &&
					enclosingNode.type === "JSXEmptyExpression"
				) {
					return;
				}
			}

			// Don't report ESLint directive comments
			if (astUtils.isDirectiveComment(node)) {
				return;
			}

			context.report({
				node,
				messageId: "unexpectedInlineComment",
			});
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			Program() {
				sourceCode
					.getAllComments()
					.filter(token => token.type !== "Shebang")
					.forEach(testCodeAroundComment);
			},
		};
	},
};

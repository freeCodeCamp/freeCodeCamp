/**
 * @fileoverview Rule to check that spaced function application
 * @author Matt DuVall <http://www.mattduvall.com>
 * @deprecated in ESLint v3.3.0
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "layout",

		docs: {
			description:
				"Disallow spacing between function identifiers and their applications (deprecated)",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-spaced-func",
		},

		deprecated: {
			message: "Formatting rules are being moved out of ESLint core.",
			url: "https://eslint.org/blog/2016/08/eslint-v3.3.0-released/#deprecated-rules",
			deprecatedSince: "3.3.0",
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
						name: "function-call-spacing",
						url: "https://eslint.style/rules/function-call-spacing",
					},
				},
			],
		},

		fixable: "whitespace",
		schema: [],

		messages: {
			noSpacedFunction:
				"Unexpected space between function name and paren.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		/**
		 * Check if open space is present in a function name
		 * @param {ASTNode} node node to evaluate
		 * @returns {void}
		 * @private
		 */
		function detectOpenSpaces(node) {
			const lastCalleeToken = sourceCode.getLastToken(node.callee);
			let prevToken = lastCalleeToken,
				parenToken = sourceCode.getTokenAfter(lastCalleeToken);

			// advances to an open parenthesis.
			while (
				parenToken &&
				parenToken.range[1] < node.range[1] &&
				parenToken.value !== "("
			) {
				prevToken = parenToken;
				parenToken = sourceCode.getTokenAfter(parenToken);
			}

			// look for a space between the callee and the open paren
			if (
				parenToken &&
				parenToken.range[1] < node.range[1] &&
				sourceCode.isSpaceBetweenTokens(prevToken, parenToken)
			) {
				context.report({
					node,
					loc: lastCalleeToken.loc.start,
					messageId: "noSpacedFunction",
					fix(fixer) {
						return fixer.removeRange([
							prevToken.range[1],
							parenToken.range[0],
						]);
					},
				});
			}
		}

		return {
			CallExpression: detectOpenSpaces,
			NewExpression: detectOpenSpaces,
		};
	},
};

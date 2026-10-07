/**
 * @fileoverview Rule to ensure newline per method call when chaining calls
 * @author Rajendra Patil
 * @author Burak Yigit Kaya
 * @deprecated in ESLint v8.53.0
 */

"use strict";

const astUtils = require("./utils/ast-utils");

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
						name: "newline-per-chained-call",
						url: "https://eslint.style/rules/newline-per-chained-call",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Require a newline after each call in a method chain",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/newline-per-chained-call",
		},

		fixable: "whitespace",

		schema: [
			{
				type: "object",
				properties: {
					ignoreChainWithDepth: {
						type: "integer",
						minimum: 1,
						maximum: 10,
						default: 2,
					},
				},
				additionalProperties: false,
			},
		],
		messages: {
			expected: "Expected line break before `{{callee}}`.",
		},
	},

	create(context) {
		const options = context.options[0] || {},
			ignoreChainWithDepth = options.ignoreChainWithDepth || 2;

		const sourceCode = context.sourceCode;

		/**
		 * Get the prefix of a given MemberExpression node.
		 * If the MemberExpression node is a computed value it returns a
		 * left bracket. If not it returns a period.
		 * @param {ASTNode} node A MemberExpression node to get
		 * @returns {string} The prefix of the node.
		 */
		function getPrefix(node) {
			if (node.computed) {
				if (node.optional) {
					return "?.[";
				}
				return "[";
			}
			if (node.optional) {
				return "?.";
			}
			return ".";
		}

		/**
		 * Gets the property text of a given MemberExpression node.
		 * If the text is multiline, this returns only the first line.
		 * @param {ASTNode} node A MemberExpression node to get.
		 * @returns {string} The property text of the node.
		 */
		function getPropertyText(node) {
			const prefix = getPrefix(node);
			const lines = sourceCode
				.getText(node.property)
				.split(astUtils.LINEBREAK_MATCHER);
			const suffix = node.computed && lines.length === 1 ? "]" : "";

			return prefix + lines[0] + suffix;
		}

		return {
			"CallExpression:exit"(node) {
				const callee = astUtils.skipChainExpression(node.callee);

				if (callee.type !== "MemberExpression") {
					return;
				}

				let parent = astUtils.skipChainExpression(callee.object);
				let depth = 1;

				while (parent && parent.callee) {
					depth += 1;
					parent = astUtils.skipChainExpression(
						astUtils.skipChainExpression(parent.callee).object,
					);
				}

				if (
					depth > ignoreChainWithDepth &&
					astUtils.isTokenOnSameLine(callee.object, callee.property)
				) {
					const firstTokenAfterObject = sourceCode.getTokenAfter(
						callee.object,
						astUtils.isNotClosingParenToken,
					);

					context.report({
						node: callee.property,
						loc: {
							start: firstTokenAfterObject.loc.start,
							end: callee.loc.end,
						},
						messageId: "expected",
						data: {
							callee: getPropertyText(callee),
						},
						fix(fixer) {
							return fixer.insertTextBefore(
								firstTokenAfterObject,
								"\n",
							);
						},
					});
				}
			},
		};
	},
};

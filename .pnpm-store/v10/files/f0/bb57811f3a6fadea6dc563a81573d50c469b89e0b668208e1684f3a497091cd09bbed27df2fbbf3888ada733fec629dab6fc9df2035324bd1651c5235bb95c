/**
 * @fileoverview Rule to check empty newline between class members
 * @author 薛定谔的猫<hh_2013@foxmail.com>
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
 * Types of class members.
 * Those have `test` method to check it matches to the given class member.
 * @private
 */
const ClassMemberTypes = {
	"*": { test: () => true },
	field: { test: node => node.type === "PropertyDefinition" },
	method: { test: node => node.type === "MethodDefinition" },
};

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
						name: "lines-between-class-members",
						url: "https://eslint.style/rules/lines-between-class-members",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description:
				"Require or disallow an empty line between class members",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/lines-between-class-members",
		},

		fixable: "whitespace",

		schema: [
			{
				anyOf: [
					{
						type: "object",
						properties: {
							enforce: {
								type: "array",
								items: {
									type: "object",
									properties: {
										blankLine: {
											enum: ["always", "never"],
										},
										prev: {
											enum: ["method", "field", "*"],
										},
										next: {
											enum: ["method", "field", "*"],
										},
									},
									additionalProperties: false,
									required: ["blankLine", "prev", "next"],
								},
								minItems: 1,
							},
						},
						additionalProperties: false,
						required: ["enforce"],
					},
					{
						enum: ["always", "never"],
					},
				],
			},
			{
				type: "object",
				properties: {
					exceptAfterSingleLine: {
						type: "boolean",
						default: false,
					},
				},
				additionalProperties: false,
			},
		],
		messages: {
			never: "Unexpected blank line between class members.",
			always: "Expected blank line between class members.",
		},
	},

	create(context) {
		const options = [];

		options[0] = context.options[0] || "always";
		options[1] = context.options[1] || { exceptAfterSingleLine: false };

		const configureList =
			typeof options[0] === "object"
				? options[0].enforce
				: [{ blankLine: options[0], prev: "*", next: "*" }];
		const sourceCode = context.sourceCode;

		/**
		 * Gets a pair of tokens that should be used to check lines between two class member nodes.
		 *
		 * In most cases, this returns the very last token of the current node and
		 * the very first token of the next node.
		 * For example:
		 *
		 *     class C {
		 *         x = 1;   // curLast: `;` nextFirst: `in`
		 *         in = 2
		 *     }
		 *
		 * There is only one exception. If the given node ends with a semicolon, and it looks like
		 * a semicolon-less style's semicolon - one that is not on the same line as the preceding
		 * token, but is on the line where the next class member starts - this returns the preceding
		 * token and the semicolon as boundary tokens.
		 * For example:
		 *
		 *     class C {
		 *         x = 1    // curLast: `1` nextFirst: `;`
		 *         ;in = 2
		 *     }
		 * When determining the desired layout of the code, we should treat this semicolon as
		 * a part of the next class member node instead of the one it technically belongs to.
		 * @param {ASTNode} curNode Current class member node.
		 * @param {ASTNode} nextNode Next class member node.
		 * @returns {Token} The actual last token of `node`.
		 * @private
		 */
		function getBoundaryTokens(curNode, nextNode) {
			const lastToken = sourceCode.getLastToken(curNode);
			const prevToken = sourceCode.getTokenBefore(lastToken);
			const nextToken = sourceCode.getFirstToken(nextNode); // skip possible lone `;` between nodes

			const isSemicolonLessStyle =
				astUtils.isSemicolonToken(lastToken) &&
				!astUtils.isTokenOnSameLine(prevToken, lastToken) &&
				astUtils.isTokenOnSameLine(lastToken, nextToken);

			return isSemicolonLessStyle
				? { curLast: prevToken, nextFirst: lastToken }
				: { curLast: lastToken, nextFirst: nextToken };
		}

		/**
		 * Return the last token among the consecutive tokens that have no exceed max line difference in between, before the first token in the next member.
		 * @param {Token} prevLastToken The last token in the previous member node.
		 * @param {Token} nextFirstToken The first token in the next member node.
		 * @param {number} maxLine The maximum number of allowed line difference between consecutive tokens.
		 * @returns {Token} The last token among the consecutive tokens.
		 */
		function findLastConsecutiveTokenAfter(
			prevLastToken,
			nextFirstToken,
			maxLine,
		) {
			const after = sourceCode.getTokenAfter(prevLastToken, {
				includeComments: true,
			});

			if (
				after !== nextFirstToken &&
				after.loc.start.line - prevLastToken.loc.end.line <= maxLine
			) {
				return findLastConsecutiveTokenAfter(
					after,
					nextFirstToken,
					maxLine,
				);
			}
			return prevLastToken;
		}

		/**
		 * Return the first token among the consecutive tokens that have no exceed max line difference in between, after the last token in the previous member.
		 * @param {Token} nextFirstToken The first token in the next member node.
		 * @param {Token} prevLastToken The last token in the previous member node.
		 * @param {number} maxLine The maximum number of allowed line difference between consecutive tokens.
		 * @returns {Token} The first token among the consecutive tokens.
		 */
		function findFirstConsecutiveTokenBefore(
			nextFirstToken,
			prevLastToken,
			maxLine,
		) {
			const before = sourceCode.getTokenBefore(nextFirstToken, {
				includeComments: true,
			});

			if (
				before !== prevLastToken &&
				nextFirstToken.loc.start.line - before.loc.end.line <= maxLine
			) {
				return findFirstConsecutiveTokenBefore(
					before,
					prevLastToken,
					maxLine,
				);
			}
			return nextFirstToken;
		}

		/**
		 * Checks if there is a token or comment between two tokens.
		 * @param {Token} before The token before.
		 * @param {Token} after The token after.
		 * @returns {boolean} True if there is a token or comment between two tokens.
		 */
		function hasTokenOrCommentBetween(before, after) {
			return (
				sourceCode.getTokensBetween(before, after, {
					includeComments: true,
				}).length !== 0
			);
		}

		/**
		 * Checks whether the given node matches the given type.
		 * @param {ASTNode} node The class member node to check.
		 * @param {string} type The class member type to check.
		 * @returns {boolean} `true` if the class member node matched the type.
		 * @private
		 */
		function match(node, type) {
			return ClassMemberTypes[type].test(node);
		}

		/**
		 * Finds the last matched configuration from the configureList.
		 * @param {ASTNode} prevNode The previous node to match.
		 * @param {ASTNode} nextNode The current node to match.
		 * @returns {string|null} Padding type or `null` if no matches were found.
		 * @private
		 */
		function getPaddingType(prevNode, nextNode) {
			for (let i = configureList.length - 1; i >= 0; --i) {
				const configure = configureList[i];
				const matched =
					match(prevNode, configure.prev) &&
					match(nextNode, configure.next);

				if (matched) {
					return configure.blankLine;
				}
			}
			return null;
		}

		return {
			ClassBody(node) {
				const body = node.body;

				for (let i = 0; i < body.length - 1; i++) {
					const curFirst = sourceCode.getFirstToken(body[i]);
					const { curLast, nextFirst } = getBoundaryTokens(
						body[i],
						body[i + 1],
					);
					const isMulti = !astUtils.isTokenOnSameLine(
						curFirst,
						curLast,
					);
					const skip = !isMulti && options[1].exceptAfterSingleLine;
					const beforePadding = findLastConsecutiveTokenAfter(
						curLast,
						nextFirst,
						1,
					);
					const afterPadding = findFirstConsecutiveTokenBefore(
						nextFirst,
						curLast,
						1,
					);
					const isPadded =
						afterPadding.loc.start.line -
							beforePadding.loc.end.line >
						1;
					const hasTokenInPadding = hasTokenOrCommentBetween(
						beforePadding,
						afterPadding,
					);
					const curLineLastToken = findLastConsecutiveTokenAfter(
						curLast,
						nextFirst,
						0,
					);
					const paddingType = getPaddingType(body[i], body[i + 1]);

					if (paddingType === "never" && isPadded) {
						context.report({
							node: body[i + 1],
							messageId: "never",

							fix(fixer) {
								if (hasTokenInPadding) {
									return null;
								}
								return fixer.replaceTextRange(
									[
										beforePadding.range[1],
										afterPadding.range[0],
									],
									"\n",
								);
							},
						});
					} else if (paddingType === "always" && !skip && !isPadded) {
						context.report({
							node: body[i + 1],
							messageId: "always",

							fix(fixer) {
								if (hasTokenInPadding) {
									return null;
								}
								return fixer.insertTextAfter(
									curLineLastToken,
									"\n",
								);
							},
						});
					}
				}
			},
		};
	},
};

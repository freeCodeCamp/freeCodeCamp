/**
 * @fileoverview A rule to ensure blank lines within blocks.
 * @author Mathias Schreck <https://github.com/lo1tuma>
 * @deprecated in ESLint v8.53.0
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
						name: "padded-blocks",
						url: "https://eslint.style/rules/padded-blocks",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description: "Require or disallow padding within blocks",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/padded-blocks",
		},

		fixable: "whitespace",

		schema: [
			{
				oneOf: [
					{
						enum: ["always", "never"],
					},
					{
						type: "object",
						properties: {
							blocks: {
								enum: ["always", "never"],
							},
							switches: {
								enum: ["always", "never"],
							},
							classes: {
								enum: ["always", "never"],
							},
						},
						additionalProperties: false,
						minProperties: 1,
					},
				],
			},
			{
				type: "object",
				properties: {
					allowSingleLineBlocks: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			alwaysPadBlock: "Block must be padded by blank lines.",
			neverPadBlock: "Block must not be padded by blank lines.",
		},
	},

	create(context) {
		const options = {};
		const typeOptions = context.options[0] || "always";
		const exceptOptions = context.options[1] || {};

		if (typeof typeOptions === "string") {
			const shouldHavePadding = typeOptions === "always";

			options.blocks = shouldHavePadding;
			options.switches = shouldHavePadding;
			options.classes = shouldHavePadding;
		} else {
			if (Object.hasOwn(typeOptions, "blocks")) {
				options.blocks = typeOptions.blocks === "always";
			}
			if (Object.hasOwn(typeOptions, "switches")) {
				options.switches = typeOptions.switches === "always";
			}
			if (Object.hasOwn(typeOptions, "classes")) {
				options.classes = typeOptions.classes === "always";
			}
		}

		if (Object.hasOwn(exceptOptions, "allowSingleLineBlocks")) {
			options.allowSingleLineBlocks =
				exceptOptions.allowSingleLineBlocks === true;
		}

		const sourceCode = context.sourceCode;

		/**
		 * Gets the open brace token from a given node.
		 * @param {ASTNode} node A BlockStatement or SwitchStatement node from which to get the open brace.
		 * @returns {Token} The token of the open brace.
		 */
		function getOpenBrace(node) {
			if (node.type === "SwitchStatement") {
				return sourceCode.getTokenBefore(node.cases[0]);
			}

			if (node.type === "StaticBlock") {
				return sourceCode.getFirstToken(node, { skip: 1 }); // skip the `static` token
			}

			// `BlockStatement` or `ClassBody`
			return sourceCode.getFirstToken(node);
		}

		/**
		 * Checks if the given parameter is a comment node
		 * @param {ASTNode|Token} node An AST node or token
		 * @returns {boolean} True if node is a comment
		 */
		function isComment(node) {
			return node.type === "Line" || node.type === "Block";
		}

		/**
		 * Checks if there is padding between two tokens
		 * @param {Token} first The first token
		 * @param {Token} second The second token
		 * @returns {boolean} True if there is at least a line between the tokens
		 */
		function isPaddingBetweenTokens(first, second) {
			return second.loc.start.line - first.loc.end.line >= 2;
		}

		/**
		 * Checks if the given token has a blank line after it.
		 * @param {Token} token The token to check.
		 * @returns {boolean} Whether or not the token is followed by a blank line.
		 */
		function getFirstBlockToken(token) {
			let prev,
				first = token;

			do {
				prev = first;
				first = sourceCode.getTokenAfter(first, {
					includeComments: true,
				});
			} while (
				isComment(first) &&
				first.loc.start.line === prev.loc.end.line
			);

			return first;
		}

		/**
		 * Checks if the given token is preceded by a blank line.
		 * @param {Token} token The token to check
		 * @returns {boolean} Whether or not the token is preceded by a blank line
		 */
		function getLastBlockToken(token) {
			let last = token,
				next;

			do {
				next = last;
				last = sourceCode.getTokenBefore(last, {
					includeComments: true,
				});
			} while (
				isComment(last) &&
				last.loc.end.line === next.loc.start.line
			);

			return last;
		}

		/**
		 * Checks if a node should be padded, according to the rule config.
		 * @param {ASTNode} node The AST node to check.
		 * @throws {Error} (Unreachable)
		 * @returns {boolean} True if the node should be padded, false otherwise.
		 */
		function requirePaddingFor(node) {
			switch (node.type) {
				case "BlockStatement":
				case "StaticBlock":
					return options.blocks;
				case "SwitchStatement":
					return options.switches;
				case "ClassBody":
					return options.classes;

				/* c8 ignore next */
				default:
					throw new Error("unreachable");
			}
		}

		/**
		 * Checks the given BlockStatement node to be padded if the block is not empty.
		 * @param {ASTNode} node The AST node of a BlockStatement.
		 * @returns {void} undefined.
		 */
		function checkPadding(node) {
			const openBrace = getOpenBrace(node),
				firstBlockToken = getFirstBlockToken(openBrace),
				tokenBeforeFirst = sourceCode.getTokenBefore(firstBlockToken, {
					includeComments: true,
				}),
				closeBrace = sourceCode.getLastToken(node),
				lastBlockToken = getLastBlockToken(closeBrace),
				tokenAfterLast = sourceCode.getTokenAfter(lastBlockToken, {
					includeComments: true,
				}),
				blockHasTopPadding = isPaddingBetweenTokens(
					tokenBeforeFirst,
					firstBlockToken,
				),
				blockHasBottomPadding = isPaddingBetweenTokens(
					lastBlockToken,
					tokenAfterLast,
				);

			if (
				options.allowSingleLineBlocks &&
				astUtils.isTokenOnSameLine(tokenBeforeFirst, tokenAfterLast)
			) {
				return;
			}

			if (requirePaddingFor(node)) {
				if (!blockHasTopPadding) {
					context.report({
						node,
						loc: {
							start: tokenBeforeFirst.loc.start,
							end: firstBlockToken.loc.start,
						},
						fix(fixer) {
							return fixer.insertTextAfter(
								tokenBeforeFirst,
								"\n",
							);
						},
						messageId: "alwaysPadBlock",
					});
				}
				if (!blockHasBottomPadding) {
					context.report({
						node,
						loc: {
							end: tokenAfterLast.loc.start,
							start: lastBlockToken.loc.end,
						},
						fix(fixer) {
							return fixer.insertTextBefore(tokenAfterLast, "\n");
						},
						messageId: "alwaysPadBlock",
					});
				}
			} else {
				if (blockHasTopPadding) {
					context.report({
						node,
						loc: {
							start: tokenBeforeFirst.loc.start,
							end: firstBlockToken.loc.start,
						},
						fix(fixer) {
							return fixer.replaceTextRange(
								[
									tokenBeforeFirst.range[1],
									firstBlockToken.range[0] -
										firstBlockToken.loc.start.column,
								],
								"\n",
							);
						},
						messageId: "neverPadBlock",
					});
				}

				if (blockHasBottomPadding) {
					context.report({
						node,
						loc: {
							end: tokenAfterLast.loc.start,
							start: lastBlockToken.loc.end,
						},
						messageId: "neverPadBlock",
						fix(fixer) {
							return fixer.replaceTextRange(
								[
									lastBlockToken.range[1],
									tokenAfterLast.range[0] -
										tokenAfterLast.loc.start.column,
								],
								"\n",
							);
						},
					});
				}
			}
		}

		const rule = {};

		if (Object.hasOwn(options, "switches")) {
			rule.SwitchStatement = function (node) {
				if (node.cases.length === 0) {
					return;
				}
				checkPadding(node);
			};
		}

		if (Object.hasOwn(options, "blocks")) {
			rule.BlockStatement = function (node) {
				if (node.body.length === 0) {
					return;
				}
				checkPadding(node);
			};
			rule.StaticBlock = rule.BlockStatement;
		}

		if (Object.hasOwn(options, "classes")) {
			rule.ClassBody = function (node) {
				if (node.body.length === 0) {
					return;
				}
				checkPadding(node);
			};
		}

		return rule;
	},
};

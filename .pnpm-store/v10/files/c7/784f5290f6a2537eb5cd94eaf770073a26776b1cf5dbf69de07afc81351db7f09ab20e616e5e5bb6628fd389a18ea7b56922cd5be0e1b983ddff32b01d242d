/**
 * @fileoverview Rule to enforce requiring named capture groups in regular expression.
 * @author Pig Fang <https://github.com/g-plane>
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const {
	CALL,
	CONSTRUCT,
	ReferenceTracker,
	getStringIfConstant,
} = require("@eslint-community/eslint-utils");
const regexpp = require("@eslint-community/regexpp");

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/** @import { SuggestedEdit } from "@eslint/core"; */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const parser = new regexpp.RegExpParser();

/**
 * Creates fixer suggestions for the regex, if statically determinable.
 * @param {number} groupStart Starting index of the regex group.
 * @param {string} pattern The regular expression pattern to be checked.
 * @param {string} rawText Source text of the regexNode.
 * @param {ASTNode} regexNode AST node which contains the regular expression.
 * @returns {Array<SuggestedEdit>} Fixer suggestions for the regex, if statically determinable.
 */
function suggestIfPossible(groupStart, pattern, rawText, regexNode) {
	switch (regexNode.type) {
		case "Literal":
			if (typeof regexNode.value === "string" && rawText.includes("\\")) {
				return null;
			}
			break;
		case "TemplateLiteral":
			if (
				regexNode.expressions.length ||
				rawText.slice(1, -1) !== pattern
			) {
				return null;
			}
			break;
		default:
			return null;
	}

	const start = regexNode.range[0] + groupStart + 2;

	return [
		{
			fix(fixer) {
				const existingTemps = pattern.match(/temp\d+/gu) || [];
				const highestTempCount = existingTemps.reduce(
					(previous, next) =>
						Math.max(previous, Number(next.slice("temp".length))),
					0,
				);

				return fixer.insertTextBeforeRange(
					[start, start],
					`?<temp${highestTempCount + 1}>`,
				);
			},
			messageId: "addGroupName",
		},
		{
			fix(fixer) {
				return fixer.insertTextBeforeRange([start, start], "?:");
			},
			messageId: "addNonCapture",
		},
	];
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description:
				"Enforce using named capture group in regular expression",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/prefer-named-capture-group",
		},

		hasSuggestions: true,

		schema: [],

		messages: {
			addGroupName: "Add name to capture group.",
			addNonCapture: "Convert group to non-capturing.",
			required:
				"Capture group '{{group}}' should be converted to a named or non-capturing group.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		/**
		 * Function to check regular expression.
		 * @param {string} pattern The regular expression pattern to be checked.
		 * @param {ASTNode} node AST node which contains the regular expression or a call/new expression.
		 * @param {ASTNode} regexNode AST node which contains the regular expression.
		 * @param {string|null} flags The regular expression flags to be checked.
		 * @returns {void}
		 */
		function checkRegex(pattern, node, regexNode, flags) {
			let ast;

			try {
				ast = parser.parsePattern(pattern, 0, pattern.length, {
					unicode: Boolean(flags && flags.includes("u")),
					unicodeSets: Boolean(flags && flags.includes("v")),
				});
			} catch {
				// ignore regex syntax errors
				return;
			}

			regexpp.visitRegExpAST(ast, {
				onCapturingGroupEnter(group) {
					if (!group.name) {
						const rawText = sourceCode.getText(regexNode);
						const suggest = suggestIfPossible(
							group.start,
							pattern,
							rawText,
							regexNode,
						);

						context.report({
							node,
							messageId: "required",
							data: {
								group: group.raw,
							},
							suggest,
						});
					}
				},
			});
		}

		return {
			Literal(node) {
				if (node.regex) {
					checkRegex(
						node.regex.pattern,
						node,
						node,
						node.regex.flags,
					);
				}
			},
			Program(node) {
				const scope = sourceCode.getScope(node);
				const tracker = new ReferenceTracker(scope);
				const traceMap = {
					RegExp: {
						[CALL]: true,
						[CONSTRUCT]: true,
					},
				};

				for (const { node: refNode } of tracker.iterateGlobalReferences(
					traceMap,
				)) {
					const regex = getStringIfConstant(refNode.arguments[0]);
					const flags = getStringIfConstant(refNode.arguments[1]);

					if (regex) {
						checkRegex(regex, refNode, refNode.arguments[0], flags);
					}
				}
			},
		};
	},
};

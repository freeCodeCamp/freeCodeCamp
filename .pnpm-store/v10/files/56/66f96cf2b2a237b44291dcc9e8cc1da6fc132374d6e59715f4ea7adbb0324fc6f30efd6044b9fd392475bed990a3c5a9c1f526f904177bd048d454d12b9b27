/**
 * @fileoverview Enforce spacing between rest and spread operators and their expressions.
 * @author Kai Cataldo
 * @deprecated in ESLint v8.53.0
 */

"use strict";

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
						name: "rest-spread-spacing",
						url: "https://eslint.style/rules/rest-spread-spacing",
					},
				},
			],
		},
		type: "layout",

		docs: {
			description:
				"Enforce spacing between rest and spread operators and their expressions",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/rest-spread-spacing",
		},

		fixable: "whitespace",

		schema: [
			{
				enum: ["always", "never"],
			},
		],

		messages: {
			unexpectedWhitespace:
				"Unexpected whitespace after {{type}} operator.",
			expectedWhitespace: "Expected whitespace after {{type}} operator.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode,
			alwaysSpace = context.options[0] === "always";

		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		/**
		 * Checks whitespace between rest/spread operators and their expressions
		 * @param {ASTNode} node The node to check
		 * @returns {void}
		 */
		function checkWhiteSpace(node) {
			const operator = sourceCode.getFirstToken(node),
				nextToken = sourceCode.getTokenAfter(operator),
				hasWhitespace = sourceCode.isSpaceBetweenTokens(
					operator,
					nextToken,
				);
			let type;

			switch (node.type) {
				case "SpreadElement":
					type = "spread";
					if (node.parent.type === "ObjectExpression") {
						type += " property";
					}
					break;
				case "RestElement":
					type = "rest";
					if (node.parent.type === "ObjectPattern") {
						type += " property";
					}
					break;
				case "ExperimentalSpreadProperty":
					type = "spread property";
					break;
				case "ExperimentalRestProperty":
					type = "rest property";
					break;
				default:
					return;
			}

			if (alwaysSpace && !hasWhitespace) {
				context.report({
					node,
					loc: operator.loc,
					messageId: "expectedWhitespace",
					data: {
						type,
					},
					fix(fixer) {
						return fixer.replaceTextRange(
							[operator.range[1], nextToken.range[0]],
							" ",
						);
					},
				});
			} else if (!alwaysSpace && hasWhitespace) {
				context.report({
					node,
					loc: {
						start: operator.loc.end,
						end: nextToken.loc.start,
					},
					messageId: "unexpectedWhitespace",
					data: {
						type,
					},
					fix(fixer) {
						return fixer.removeRange([
							operator.range[1],
							nextToken.range[0],
						]);
					},
				});
			}
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			SpreadElement: checkWhiteSpace,
			RestElement: checkWhiteSpace,
			ExperimentalSpreadProperty: checkWhiteSpace,
			ExperimentalRestProperty: checkWhiteSpace,
		};
	},
};

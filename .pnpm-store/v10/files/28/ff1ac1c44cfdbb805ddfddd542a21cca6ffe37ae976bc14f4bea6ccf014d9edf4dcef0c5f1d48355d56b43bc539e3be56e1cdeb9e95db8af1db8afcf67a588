/**
 * @fileoverview Rule to disallow a duplicate case label.
 * @author Dieter Oberkofler
 * @author Burak Yigit Kaya
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
		type: "problem",

		docs: {
			description: "Disallow duplicate case labels",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-duplicate-case",
		},

		schema: [],

		messages: {
			unexpected: "Duplicate case label.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		/**
		 * Determines whether the two given nodes are considered to be equal.
		 * @param {ASTNode} a First node.
		 * @param {ASTNode} b Second node.
		 * @returns {boolean} `true` if the nodes are considered to be equal.
		 */
		function equal(a, b) {
			if (a.type !== b.type) {
				return false;
			}

			return astUtils.equalTokens(a, b, sourceCode);
		}
		return {
			SwitchStatement(node) {
				const previousTests = [];

				for (const switchCase of node.cases) {
					if (switchCase.test) {
						const test = switchCase.test;

						if (
							previousTests.some(previousTest =>
								equal(previousTest, test),
							)
						) {
							context.report({
								node: switchCase,
								messageId: "unexpected",
							});
						} else {
							previousTests.push(test);
						}
					}
				}
			},
		};
	},
};

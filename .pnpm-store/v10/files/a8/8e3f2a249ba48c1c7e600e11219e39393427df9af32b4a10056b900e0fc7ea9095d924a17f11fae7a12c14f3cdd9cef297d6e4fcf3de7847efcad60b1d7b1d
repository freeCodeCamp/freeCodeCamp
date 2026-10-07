/**
 * @fileoverview Disallow sparse arrays
 * @author Nicholas C. Zakas
 */
"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		docs: {
			description: "Disallow sparse arrays",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-sparse-arrays",
		},

		schema: [],

		messages: {
			unexpectedSparseArray: "Unexpected comma in middle of array.",
		},
	},

	create(context) {
		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			ArrayExpression(node) {
				if (!node.elements.includes(null)) {
					return;
				}

				const { sourceCode } = context;
				let commaToken;

				for (const [index, element] of node.elements.entries()) {
					if (index === node.elements.length - 1 && element) {
						return;
					}

					commaToken = sourceCode.getTokenAfter(
						element ?? commaToken ?? sourceCode.getFirstToken(node),
						astUtils.isCommaToken,
					);

					if (element) {
						continue;
					}

					context.report({
						node,
						loc: commaToken.loc,
						messageId: "unexpectedSparseArray",
					});
				}
			},
		};
	},
};

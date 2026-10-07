/**
 * @fileoverview Reports useless `catch` clauses that just rethrow their error.
 * @author Teddy Katz
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description: "Disallow unnecessary `catch` clauses",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-useless-catch",
		},

		schema: [],

		messages: {
			unnecessaryCatchClause: "Unnecessary catch clause.",
			unnecessaryCatch: "Unnecessary try/catch wrapper.",
		},
	},

	create(context) {
		return {
			CatchClause(node) {
				if (
					node.param &&
					node.param.type === "Identifier" &&
					node.body.body.length &&
					node.body.body[0].type === "ThrowStatement" &&
					node.body.body[0].argument.type === "Identifier" &&
					node.body.body[0].argument.name === node.param.name
				) {
					if (node.parent.finalizer) {
						context.report({
							node,
							messageId: "unnecessaryCatchClause",
						});
					} else {
						context.report({
							node: node.parent,
							messageId: "unnecessaryCatch",
						});
					}
				}
			},
		};
	},
};

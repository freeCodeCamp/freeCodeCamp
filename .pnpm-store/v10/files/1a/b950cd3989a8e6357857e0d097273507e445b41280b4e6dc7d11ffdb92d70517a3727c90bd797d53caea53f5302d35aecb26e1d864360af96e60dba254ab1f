/**
 * @fileoverview Rule to flag for-in loops without if statements inside
 * @author Nicholas C. Zakas
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
			description: "Require `for-in` loops to include an `if` statement",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/guard-for-in",
		},

		schema: [],
		messages: {
			wrap: "The body of a for-in should be wrapped in an if statement to filter unwanted properties from the prototype.",
		},
	},

	create(context) {
		return {
			ForInStatement(node) {
				const body = node.body;

				// empty statement
				if (body.type === "EmptyStatement") {
					return;
				}

				// if statement
				if (body.type === "IfStatement") {
					return;
				}

				// empty block
				if (body.type === "BlockStatement" && body.body.length === 0) {
					return;
				}

				// block with just if statement
				if (
					body.type === "BlockStatement" &&
					body.body.length === 1 &&
					body.body[0].type === "IfStatement"
				) {
					return;
				}

				// block that starts with if statement
				if (
					body.type === "BlockStatement" &&
					body.body.length >= 1 &&
					body.body[0].type === "IfStatement"
				) {
					const i = body.body[0];

					// ... whose consequent is a continue
					if (i.consequent.type === "ContinueStatement") {
						return;
					}

					// ... whose consequent is a block that contains only a continue
					if (
						i.consequent.type === "BlockStatement" &&
						i.consequent.body.length === 1 &&
						i.consequent.body[0].type === "ContinueStatement"
					) {
						return;
					}
				}

				context.report({ node, messageId: "wrap" });
			},
		};
	},
};

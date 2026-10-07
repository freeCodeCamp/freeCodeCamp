/**
 * @fileoverview Rule to flag when using new Function
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const callMethods = new Set(["apply", "bind", "call"]);

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description: "Disallow `new` operators with the `Function` object",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-new-func",
		},

		schema: [],

		messages: {
			noFunctionConstructor: "The Function constructor is eval.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		return {
			"Program:exit"(node) {
				const globalScope = sourceCode.getScope(node);
				const variable = globalScope.set.get("Function");

				if (variable && variable.defs.length === 0) {
					variable.references.forEach(ref => {
						const idNode = ref.identifier;
						const { parent } = idNode;
						let evalNode;

						if (parent) {
							if (
								idNode === parent.callee &&
								(parent.type === "NewExpression" ||
									parent.type === "CallExpression")
							) {
								evalNode = parent;
							} else if (
								parent.type === "MemberExpression" &&
								idNode === parent.object &&
								callMethods.has(
									astUtils.getStaticPropertyName(parent),
								)
							) {
								const maybeCallee =
									parent.parent.type === "ChainExpression"
										? parent.parent
										: parent;

								if (
									maybeCallee.parent.type ===
										"CallExpression" &&
									maybeCallee.parent.callee === maybeCallee
								) {
									evalNode = maybeCallee.parent;
								}
							}
						}

						if (evalNode) {
							context.report({
								node: evalNode,
								messageId: "noFunctionConstructor",
							});
						}
					});
				}
			},
		};
	},
};

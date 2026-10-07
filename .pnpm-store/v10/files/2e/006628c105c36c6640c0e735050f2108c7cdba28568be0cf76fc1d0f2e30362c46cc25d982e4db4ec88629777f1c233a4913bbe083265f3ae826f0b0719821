/**
 * @fileoverview Rule to disallow use of the new operator with global non-constructor functions
 * @author Sosuke Suzuki
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const nonConstructorGlobalFunctionNames = ["Symbol", "BigInt"];

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		docs: {
			description:
				"Disallow `new` operators with global non-constructor functions",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-new-native-nonconstructor",
		},

		schema: [],

		messages: {
			noNewNonconstructor:
				"`{{name}}` cannot be called as a constructor.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		return {
			"Program:exit"(node) {
				const globalScope = sourceCode.getScope(node);

				for (const nonConstructorName of nonConstructorGlobalFunctionNames) {
					const variable = globalScope.set.get(nonConstructorName);

					if (variable && variable.defs.length === 0) {
						variable.references.forEach(ref => {
							const idNode = ref.identifier;
							const parent = idNode.parent;

							if (
								parent &&
								parent.type === "NewExpression" &&
								parent.callee === idNode
							) {
								context.report({
									node: idNode,
									messageId: "noNewNonconstructor",
									data: { name: nonConstructorName },
								});
							}
						});
					}
				}
			},
		};
	},
};

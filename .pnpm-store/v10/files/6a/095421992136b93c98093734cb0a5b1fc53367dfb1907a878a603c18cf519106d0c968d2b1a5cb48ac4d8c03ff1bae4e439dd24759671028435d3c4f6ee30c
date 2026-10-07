/**
 * @fileoverview Rule to flag when using constructor for wrapper objects
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { getVariableByName } = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description:
				"Disallow `new` operators with the `String`, `Number`, and `Boolean` objects",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-new-wrappers",
		},

		schema: [],

		messages: {
			noConstructor: "Do not use {{fn}} as a constructor.",
		},
	},

	create(context) {
		const { sourceCode } = context;

		return {
			NewExpression(node) {
				const wrapperObjects = ["String", "Number", "Boolean"];
				const { name } = node.callee;

				if (wrapperObjects.includes(name)) {
					const variable = getVariableByName(
						sourceCode.getScope(node),
						name,
					);

					if (variable && variable.identifiers.length === 0) {
						context.report({
							node,
							messageId: "noConstructor",
							data: { fn: name },
						});
					}
				}
			},
		};
	},
};

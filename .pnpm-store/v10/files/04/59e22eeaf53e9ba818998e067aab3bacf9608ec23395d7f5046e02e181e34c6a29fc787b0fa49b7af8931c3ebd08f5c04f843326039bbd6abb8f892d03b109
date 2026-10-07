/**
 * @fileoverview A rule to disallow calls to the Object constructor
 * @author Matt DuVall <http://www.mattduvall.com/>
 * @deprecated in ESLint v8.50.0
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
		type: "suggestion",

		docs: {
			description: "Disallow `Object` constructors",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-new-object",
		},

		deprecated: {
			message:
				"The new rule flags more situations where object literal syntax can be used, and it does not report a problem when the `Object` constructor is invoked with an argument.",
			url: "https://eslint.org/blog/2023/09/eslint-v8.50.0-released/",
			deprecatedSince: "8.50.0",
			availableUntil: "11.0.0",
			replacedBy: [
				{
					rule: {
						name: "no-object-constructor",
						url: "https://eslint.org/docs/rules/no-object-constructor",
					},
				},
			],
		},

		schema: [],

		messages: {
			preferLiteral: "The object literal notation {} is preferable.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		return {
			NewExpression(node) {
				const variable = astUtils.getVariableByName(
					sourceCode.getScope(node),
					node.callee.name,
				);

				if (variable && variable.identifiers.length > 0) {
					return;
				}

				if (node.callee.name === "Object") {
					context.report({
						node,
						messageId: "preferLiteral",
					});
				}
			},
		};
	},
};

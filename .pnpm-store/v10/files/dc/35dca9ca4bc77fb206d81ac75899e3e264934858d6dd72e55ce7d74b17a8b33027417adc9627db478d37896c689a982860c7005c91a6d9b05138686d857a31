/**
 * @fileoverview Rule to flag usage of __proto__ property
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { getStaticPropertyName } = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description: "Disallow the use of the `__proto__` property",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-proto",
		},

		schema: [],

		messages: {
			unexpectedProto: "The '__proto__' property is deprecated.",
		},
	},

	create(context) {
		return {
			MemberExpression(node) {
				if (getStaticPropertyName(node) === "__proto__") {
					context.report({ node, messageId: "unexpectedProto" });
				}
			},
		};
	},
};

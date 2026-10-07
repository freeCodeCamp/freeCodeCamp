/**
 * @fileoverview Rule to flag use of arguments.callee and arguments.caller.
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
			description:
				"Disallow the use of `arguments.caller` or `arguments.callee`",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-caller",
		},

		schema: [],

		messages: {
			unexpected: "Avoid arguments.{{prop}}.",
		},
	},

	create(context) {
		return {
			MemberExpression(node) {
				const objectName = node.object.name,
					propertyName = node.property.name;

				if (
					objectName === "arguments" &&
					!node.computed &&
					propertyName &&
					propertyName.match(/^calle[er]$/u)
				) {
					context.report({
						node,
						messageId: "unexpected",
						data: { prop: propertyName },
					});
				}
			},
		};
	},
};

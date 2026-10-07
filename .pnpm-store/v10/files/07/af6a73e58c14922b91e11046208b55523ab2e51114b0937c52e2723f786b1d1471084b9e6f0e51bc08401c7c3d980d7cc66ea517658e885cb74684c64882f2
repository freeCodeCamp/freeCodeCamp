/**
 * @fileoverview Rule to disallow `javascript:` URLs
 * @author Ilya Volodin
 */
/* eslint no-script-url: 0 -- Code is checking to report such URLs */

"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description: "Disallow `javascript:` URLs",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-script-url",
		},

		schema: [],

		messages: {
			unexpectedScriptURL: "Script URL is a form of eval.",
		},
	},

	create(context) {
		/**
		 * Check whether a node's static value starts with `javascript:` or not.
		 * And report an error for unexpected script URL.
		 * @param {ASTNode} node node to check
		 * @returns {void}
		 */
		function check(node) {
			const value = astUtils.getStaticStringValue(node);

			if (
				typeof value === "string" &&
				value.toLowerCase().indexOf("javascript:") === 0
			) {
				context.report({ node, messageId: "unexpectedScriptURL" });
			}
		}
		return {
			Literal(node) {
				if (node.value && typeof node.value === "string") {
					check(node);
				}
			},
			TemplateLiteral(node) {
				if (
					!(
						node.parent &&
						node.parent.type === "TaggedTemplateExpression"
					)
				) {
					check(node);
				}
			},
		};
	},
};

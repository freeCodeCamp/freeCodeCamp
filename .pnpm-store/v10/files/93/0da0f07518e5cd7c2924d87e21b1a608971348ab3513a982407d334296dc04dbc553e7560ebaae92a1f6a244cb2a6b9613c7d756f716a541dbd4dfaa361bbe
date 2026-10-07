/**
 * @fileoverview Rule to flag when using multiline strings
 * @author Ilya Volodin
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
			description: "Disallow multiline strings",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/no-multi-str",
		},

		schema: [],

		messages: {
			multilineString:
				"Multiline support is limited to browsers supporting ES5 only.",
		},
	},

	create(context) {
		/**
		 * Determines if a given node is part of JSX syntax.
		 * @param {ASTNode} node The node to check.
		 * @returns {boolean} True if the node is a JSX node, false if not.
		 * @private
		 */
		function isJSXElement(node) {
			return node.type.indexOf("JSX") === 0;
		}

		//--------------------------------------------------------------------------
		// Public API
		//--------------------------------------------------------------------------

		return {
			Literal(node) {
				if (
					astUtils.LINEBREAK_MATCHER.test(node.raw) &&
					!isJSXElement(node.parent)
				) {
					context.report({
						node,
						messageId: "multilineString",
					});
				}
			},
		};
	},
};

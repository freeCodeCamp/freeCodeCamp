/**
 * @fileoverview Rule to flag duplicate arguments
 * @author Jamund Ferguson
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
		type: "problem",

		docs: {
			description:
				"Disallow duplicate arguments in `function` definitions",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-dupe-args",
		},

		schema: [],

		messages: {
			unexpected: "Duplicate param '{{name}}'.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		/**
		 * Checks whether or not a given definition is a parameter's.
		 * @param {eslint-scope.DefEntry} def A definition to check.
		 * @returns {boolean} `true` if the definition is a parameter's.
		 */
		function isParameter(def) {
			return def.type === "Parameter";
		}

		/**
		 * Determines if a given node has duplicate parameters.
		 * @param {ASTNode} node The node to check.
		 * @returns {void}
		 * @private
		 */
		function checkParams(node) {
			const variables = sourceCode.getDeclaredVariables(node);

			for (let i = 0; i < variables.length; ++i) {
				const variable = variables[i];

				// Checks and reports duplications.
				const defs = variable.defs.filter(isParameter);
				const loc = {
					start: astUtils.getOpeningParenOfParams(node, sourceCode)
						.loc.start,
					end: sourceCode.getTokenBefore(node.body).loc.end,
				};

				if (defs.length >= 2) {
					context.report({
						loc,
						messageId: "unexpected",
						data: { name: variable.name },
					});
				}
			}
		}

		//--------------------------------------------------------------------------
		// Public API
		//--------------------------------------------------------------------------

		return {
			FunctionDeclaration: checkParams,
			FunctionExpression: checkParams,
		};
	},
};

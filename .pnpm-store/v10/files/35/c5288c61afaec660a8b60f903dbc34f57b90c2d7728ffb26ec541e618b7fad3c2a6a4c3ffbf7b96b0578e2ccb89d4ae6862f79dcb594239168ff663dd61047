/**
 * @fileoverview Rule to flag when initializing to undefined
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

const CONSTANT_BINDINGS = new Set(["const", "using", "await using"]);

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description: "Disallow initializing variables to `undefined`",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/no-undef-init",
		},

		schema: [],
		fixable: "code",

		messages: {
			unnecessaryUndefinedInit:
				"It's not necessary to initialize '{{name}}' to undefined.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		return {
			VariableDeclarator(node) {
				const name = sourceCode.getText(node.id),
					init = node.init && node.init.name,
					scope = sourceCode.getScope(node),
					undefinedVar = astUtils.getVariableByName(
						scope,
						"undefined",
					),
					shadowed = undefinedVar && undefinedVar.defs.length > 0,
					lastToken = sourceCode.getLastToken(node);

				if (
					init === "undefined" &&
					!CONSTANT_BINDINGS.has(node.parent.kind) &&
					!shadowed
				) {
					context.report({
						node,
						messageId: "unnecessaryUndefinedInit",
						data: { name },
						fix(fixer) {
							if (node.parent.kind === "var") {
								return null;
							}

							if (
								node.id.type === "ArrayPattern" ||
								node.id.type === "ObjectPattern"
							) {
								// Don't fix destructuring assignment to `undefined`.
								return null;
							}

							if (
								sourceCode.commentsExistBetween(
									node.id,
									lastToken,
								)
							) {
								return null;
							}

							return fixer.removeRange([
								node.id.range[1],
								node.range[1],
							]);
						},
					});
				}
			},
		};
	},
};

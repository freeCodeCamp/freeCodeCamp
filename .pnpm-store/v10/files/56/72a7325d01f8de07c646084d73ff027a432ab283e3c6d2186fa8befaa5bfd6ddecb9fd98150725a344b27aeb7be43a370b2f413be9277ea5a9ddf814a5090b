/**
 * @fileoverview A rule to disallow unnecessary `.call()` and `.apply()`.
 * @author Toru Nagashima
 */

"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a node is a `.call()`/`.apply()`.
 * @param {ASTNode} node A CallExpression node to check.
 * @returns {boolean} Whether or not the node is a `.call()`/`.apply()`.
 */
function isCallOrNonVariadicApply(node) {
	const callee = astUtils.skipChainExpression(node.callee);

	return (
		callee.type === "MemberExpression" &&
		callee.property.type === "Identifier" &&
		callee.computed === false &&
		((callee.property.name === "call" && node.arguments.length >= 1) ||
			(callee.property.name === "apply" &&
				node.arguments.length === 2 &&
				node.arguments[1].type === "ArrayExpression"))
	);
}

/**
 * Checks whether or not `thisArg` is not changed by `.call()`/`.apply()`.
 * @param {ASTNode|null} expectedThis The node that is the owner of the applied function.
 * @param {ASTNode} thisArg The node that is given to the first argument of the `.call()`/`.apply()`.
 * @param {SourceCode} sourceCode The ESLint source code object.
 * @returns {boolean} Whether or not `thisArg` is not changed by `.call()`/`.apply()`.
 */
function isValidThisArg(expectedThis, thisArg, sourceCode) {
	if (!expectedThis) {
		return astUtils.isNullOrUndefined(thisArg);
	}
	return astUtils.equalTokens(expectedThis, thisArg, sourceCode);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description:
				"Disallow unnecessary calls to `.call()` and `.apply()`",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-useless-call",
		},

		schema: [],

		messages: {
			unnecessaryCall: "Unnecessary '.{{name}}()'.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		return {
			CallExpression(node) {
				if (!isCallOrNonVariadicApply(node)) {
					return;
				}

				const callee = astUtils.skipChainExpression(node.callee);
				const applied = astUtils.skipChainExpression(callee.object);
				const expectedThis =
					applied.type === "MemberExpression" ? applied.object : null;
				const thisArg = node.arguments[0];

				if (isValidThisArg(expectedThis, thisArg, sourceCode)) {
					context.report({
						node,
						messageId: "unnecessaryCall",
						data: { name: callee.property.name },
					});
				}
			},
		};
	},
};

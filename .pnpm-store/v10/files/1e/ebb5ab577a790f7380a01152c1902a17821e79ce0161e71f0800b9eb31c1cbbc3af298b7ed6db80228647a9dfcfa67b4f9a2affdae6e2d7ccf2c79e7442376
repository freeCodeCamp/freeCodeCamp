/**
 * @fileoverview Rule to
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Gets the variable object of `arguments` which is defined implicitly.
 * @param {eslint-scope.Scope} scope A scope to get.
 * @returns {eslint-scope.Variable} The found variable object.
 */
function getVariableOfArguments(scope) {
	const variables = scope.variables;

	for (let i = 0; i < variables.length; ++i) {
		const variable = variables[i];

		if (variable.name === "arguments") {
			/*
			 * If there was a parameter which is named "arguments", the implicit "arguments" is not defined.
			 * So does fast return with null.
			 */
			return variable.identifiers.length === 0 ? variable : null;
		}
	}

	/* c8 ignore next */
	return null;
}

/**
 * Checks if the given reference is not normal member access.
 *
 * - arguments         .... true    // not member access
 * - arguments[i]      .... true    // computed member access
 * - arguments[0]      .... true    // computed member access
 * - arguments.length  .... false   // normal member access
 * @param {eslint-scope.Reference} reference The reference to check.
 * @returns {boolean} `true` if the reference is not normal member access.
 */
function isNotNormalMemberAccess(reference) {
	const id = reference.identifier;
	const parent = id.parent;

	return !(
		parent.type === "MemberExpression" &&
		parent.object === id &&
		!parent.computed
	);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description: "Require rest parameters instead of `arguments`",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/prefer-rest-params",
		},

		schema: [],

		messages: {
			preferRestParams: "Use the rest parameters instead of 'arguments'.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		/**
		 * Reports a given reference.
		 * @param {eslint-scope.Reference} reference A reference to report.
		 * @returns {void}
		 */
		function report(reference) {
			context.report({
				node: reference.identifier,
				loc: reference.identifier.loc,
				messageId: "preferRestParams",
			});
		}

		/**
		 * Reports references of the implicit `arguments` variable if exist.
		 * @param {ASTNode} node The node representing the function.
		 * @returns {void}
		 */
		function checkForArguments(node) {
			const argumentsVar = getVariableOfArguments(
				sourceCode.getScope(node),
			);

			if (argumentsVar) {
				argumentsVar.references
					.filter(isNotNormalMemberAccess)
					.forEach(report);
			}
		}

		return {
			"FunctionDeclaration:exit": checkForArguments,
			"FunctionExpression:exit": checkForArguments,
		};
	},
};

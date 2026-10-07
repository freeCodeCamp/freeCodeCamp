/**
 * @fileoverview Ensures that the results of typeof are compared against a valid string
 * @author Ian Christian Myers
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

		defaultOptions: [
			{
				requireStringLiterals: false,
			},
		],

		docs: {
			description:
				"Enforce comparing `typeof` expressions against valid strings",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/valid-typeof",
		},

		hasSuggestions: true,

		schema: [
			{
				type: "object",
				properties: {
					requireStringLiterals: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],
		messages: {
			invalidValue: "Invalid typeof comparison value.",
			notString: "Typeof comparisons should be to string literals.",
			suggestString: 'Use `"{{type}}"` instead of `{{type}}`.',
		},
	},

	create(context) {
		const VALID_TYPES = new Set([
				"symbol",
				"undefined",
				"object",
				"boolean",
				"number",
				"string",
				"function",
				"bigint",
			]),
			OPERATORS = new Set(["==", "===", "!=", "!=="]);
		const sourceCode = context.sourceCode;
		const [{ requireStringLiterals }] = context.options;

		let globalScope;

		/**
		 * Checks whether the given node represents a reference to a global variable that is not declared in the source code.
		 * These identifiers will be allowed, as it is assumed that user has no control over the names of external global variables.
		 * @param {ASTNode} node `Identifier` node to check.
		 * @returns {boolean} `true` if the node is a reference to a global variable.
		 */
		function isReferenceToGlobalVariable(node) {
			const variable = globalScope.set.get(node.name);

			return (
				variable &&
				variable.defs.length === 0 &&
				variable.references.some(ref => ref.identifier === node)
			);
		}

		/**
		 * Determines whether a node is a typeof expression.
		 * @param {ASTNode} node The node
		 * @returns {boolean} `true` if the node is a typeof expression
		 */
		function isTypeofExpression(node) {
			return (
				node.type === "UnaryExpression" && node.operator === "typeof"
			);
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			Program(node) {
				globalScope = sourceCode.getScope(node);
			},

			UnaryExpression(node) {
				if (isTypeofExpression(node)) {
					const { parent } = node;

					if (
						parent.type === "BinaryExpression" &&
						OPERATORS.has(parent.operator)
					) {
						const sibling =
							parent.left === node ? parent.right : parent.left;

						if (
							sibling.type === "Literal" ||
							astUtils.isStaticTemplateLiteral(sibling)
						) {
							const value =
								sibling.type === "Literal"
									? sibling.value
									: sibling.quasis[0].value.cooked;

							if (!VALID_TYPES.has(value)) {
								context.report({
									node: sibling,
									messageId: "invalidValue",
								});
							}
						} else if (
							sibling.type === "Identifier" &&
							sibling.name === "undefined" &&
							isReferenceToGlobalVariable(sibling)
						) {
							context.report({
								node: sibling,
								messageId: requireStringLiterals
									? "notString"
									: "invalidValue",
								suggest: [
									{
										messageId: "suggestString",
										data: { type: "undefined" },
										fix(fixer) {
											return fixer.replaceText(
												sibling,
												'"undefined"',
											);
										},
									},
								],
							});
						} else if (
							requireStringLiterals &&
							!isTypeofExpression(sibling)
						) {
							context.report({
								node: sibling,
								messageId: "notString",
							});
						}
					}
				}
			},
		};
	},
};

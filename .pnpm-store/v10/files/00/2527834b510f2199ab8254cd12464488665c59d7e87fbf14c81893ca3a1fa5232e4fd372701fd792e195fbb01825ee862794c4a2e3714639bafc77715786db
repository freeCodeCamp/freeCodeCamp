/**
 * @fileoverview Rule to warn when a function expression does not have a name.
 * @author Kyle T. Nunery
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

/**
 * Checks whether or not a given variable is a function name.
 * @param {eslint-scope.Variable} variable A variable to check.
 * @returns {boolean} `true` if the variable is a function name.
 */
function isFunctionName(variable) {
	return variable && variable.defs[0].type === "FunctionName";
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: ["always", {}],

		docs: {
			description: "Require or disallow named `function` expressions",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/func-names",
		},

		schema: {
			definitions: {
				value: {
					enum: ["always", "as-needed", "never"],
				},
			},
			items: [
				{
					$ref: "#/definitions/value",
				},
				{
					type: "object",
					properties: {
						generators: {
							$ref: "#/definitions/value",
						},
					},
					additionalProperties: false,
				},
			],
		},

		messages: {
			unnamed: "Unexpected unnamed {{name}}.",
			named: "Unexpected named {{name}}.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		/**
		 * Returns the config option for the given node.
		 * @param {ASTNode} node A node to get the config for.
		 * @returns {string} The config option.
		 */
		function getConfigForNode(node) {
			if (node.generator && context.options[1].generators) {
				return context.options[1].generators;
			}

			return context.options[0];
		}

		/**
		 * Determines whether the current FunctionExpression node is a get, set, or
		 * shorthand method in an object literal or a class.
		 * @param {ASTNode} node A node to check.
		 * @returns {boolean} True if the node is a get, set, or shorthand method.
		 */
		function isObjectOrClassMethod(node) {
			const parent = node.parent;

			return (
				parent.type === "MethodDefinition" ||
				(parent.type === "Property" &&
					(parent.method ||
						parent.kind === "get" ||
						parent.kind === "set"))
			);
		}

		/**
		 * Determines whether the current FunctionExpression node has a name that would be
		 * inferred from context in a conforming ES6 environment.
		 * @param {ASTNode} node A node to check.
		 * @returns {boolean} True if the node would have a name assigned automatically.
		 */
		function hasInferredName(node) {
			const parent = node.parent;

			return (
				isObjectOrClassMethod(node) ||
				(parent.type === "VariableDeclarator" &&
					parent.id.type === "Identifier" &&
					parent.init === node) ||
				(parent.type === "Property" && parent.value === node) ||
				(parent.type === "PropertyDefinition" &&
					parent.value === node) ||
				(parent.type === "AssignmentExpression" &&
					parent.left.type === "Identifier" &&
					parent.right === node) ||
				(parent.type === "AssignmentPattern" &&
					parent.left.type === "Identifier" &&
					parent.right === node)
			);
		}

		/**
		 * Reports that an unnamed function should be named
		 * @param {ASTNode} node The node to report in the event of an error.
		 * @returns {void}
		 */
		function reportUnexpectedUnnamedFunction(node) {
			context.report({
				node,
				messageId: "unnamed",
				loc: astUtils.getFunctionHeadLoc(node, sourceCode),
				data: { name: astUtils.getFunctionNameWithKind(node) },
			});
		}

		/**
		 * Reports that a named function should be unnamed
		 * @param {ASTNode} node The node to report in the event of an error.
		 * @returns {void}
		 */
		function reportUnexpectedNamedFunction(node) {
			context.report({
				node,
				messageId: "named",
				loc: astUtils.getFunctionHeadLoc(node, sourceCode),
				data: { name: astUtils.getFunctionNameWithKind(node) },
			});
		}

		/**
		 * The listener for function nodes.
		 * @param {ASTNode} node function node
		 * @returns {void}
		 */
		function handleFunction(node) {
			// Skip recursive functions.
			const nameVar = sourceCode.getDeclaredVariables(node)[0];

			if (isFunctionName(nameVar) && nameVar.references.length > 0) {
				return;
			}

			const hasName = Boolean(node.id && node.id.name);
			const config = getConfigForNode(node);

			if (config === "never") {
				if (hasName && node.type !== "FunctionDeclaration") {
					reportUnexpectedNamedFunction(node);
				}
			} else if (config === "as-needed") {
				if (!hasName && !hasInferredName(node)) {
					reportUnexpectedUnnamedFunction(node);
				}
			} else {
				if (!hasName && !isObjectOrClassMethod(node)) {
					reportUnexpectedUnnamedFunction(node);
				}
			}
		}

		return {
			"FunctionExpression:exit": handleFunction,
			"ExportDefaultDeclaration > FunctionDeclaration": handleFunction,
		};
	},
};

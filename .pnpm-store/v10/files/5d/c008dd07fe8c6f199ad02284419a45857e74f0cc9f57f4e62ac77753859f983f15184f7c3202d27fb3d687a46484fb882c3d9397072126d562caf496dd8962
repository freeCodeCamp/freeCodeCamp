/**
 * @fileoverview Rule to enforce a particular function style
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		dialects: ["javascript", "typescript"],
		language: "javascript",
		type: "suggestion",

		defaultOptions: [
			"expression",
			{
				allowArrowFunctions: false,
				allowTypeAnnotation: false,
				overrides: {},
			},
		],

		docs: {
			description:
				"Enforce the consistent use of either `function` declarations or expressions assigned to variables",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/func-style",
		},

		schema: [
			{
				enum: ["declaration", "expression"],
			},
			{
				type: "object",
				properties: {
					allowArrowFunctions: {
						type: "boolean",
					},
					allowTypeAnnotation: {
						type: "boolean",
					},
					overrides: {
						type: "object",
						properties: {
							namedExports: {
								enum: ["declaration", "expression", "ignore"],
							},
						},
						additionalProperties: false,
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			expression: "Expected a function expression.",
			declaration: "Expected a function declaration.",
		},
	},

	create(context) {
		const [style, { allowArrowFunctions, allowTypeAnnotation, overrides }] =
			context.options;
		const enforceDeclarations = style === "declaration";
		const { namedExports: exportFunctionStyle } = overrides;
		const stack = [];

		/**
		 * Checks if a function declaration is part of an overloaded function
		 * @param {ASTNode} node The function declaration node to check
		 * @returns {boolean} True if the function is overloaded
		 */
		function isOverloadedFunction(node) {
			const functionName = node.id.name;

			if (node.parent.type === "ExportNamedDeclaration") {
				return node.parent.parent.body.some(
					member =>
						member.type === "ExportNamedDeclaration" &&
						member.declaration?.type === "TSDeclareFunction" &&
						member.declaration.id.name === functionName,
				);
			}

			if (node.parent.type === "SwitchCase") {
				return node.parent.parent.cases.some(switchCase =>
					switchCase.consequent.some(
						member =>
							member.type === "TSDeclareFunction" &&
							member.id.name === functionName,
					),
				);
			}

			return (
				Array.isArray(node.parent.body) &&
				node.parent.body.some(
					member =>
						member.type === "TSDeclareFunction" &&
						member.id.name === functionName,
				)
			);
		}

		const nodesToCheck = {
			FunctionDeclaration(node) {
				stack.push(false);

				if (
					!enforceDeclarations &&
					node.parent.type !== "ExportDefaultDeclaration" &&
					(typeof exportFunctionStyle === "undefined" ||
						node.parent.type !== "ExportNamedDeclaration") &&
					!isOverloadedFunction(node)
				) {
					context.report({ node, messageId: "expression" });
				}

				if (
					node.parent.type === "ExportNamedDeclaration" &&
					exportFunctionStyle === "expression" &&
					!isOverloadedFunction(node)
				) {
					context.report({ node, messageId: "expression" });
				}
			},
			"FunctionDeclaration:exit"() {
				stack.pop();
			},

			FunctionExpression(node) {
				stack.push(false);

				if (
					enforceDeclarations &&
					node.parent.type === "VariableDeclarator" &&
					(typeof exportFunctionStyle === "undefined" ||
						node.parent.parent.parent.type !==
							"ExportNamedDeclaration") &&
					!(allowTypeAnnotation && node.parent.id.typeAnnotation)
				) {
					context.report({
						node: node.parent,
						messageId: "declaration",
					});
				}

				if (
					node.parent.type === "VariableDeclarator" &&
					node.parent.parent.parent.type ===
						"ExportNamedDeclaration" &&
					exportFunctionStyle === "declaration" &&
					!(allowTypeAnnotation && node.parent.id.typeAnnotation)
				) {
					context.report({
						node: node.parent,
						messageId: "declaration",
					});
				}
			},
			"FunctionExpression:exit"() {
				stack.pop();
			},

			"ThisExpression, Super"() {
				if (stack.length > 0) {
					stack[stack.length - 1] = true;
				}
			},
		};

		if (!allowArrowFunctions) {
			nodesToCheck.ArrowFunctionExpression = function () {
				stack.push(false);
			};

			nodesToCheck["ArrowFunctionExpression:exit"] = function (node) {
				const hasThisOrSuperExpr = stack.pop();

				if (
					!hasThisOrSuperExpr &&
					node.parent.type === "VariableDeclarator"
				) {
					if (
						enforceDeclarations &&
						(typeof exportFunctionStyle === "undefined" ||
							node.parent.parent.parent.type !==
								"ExportNamedDeclaration") &&
						!(allowTypeAnnotation && node.parent.id.typeAnnotation)
					) {
						context.report({
							node: node.parent,
							messageId: "declaration",
						});
					}

					if (
						node.parent.parent.parent.type ===
							"ExportNamedDeclaration" &&
						exportFunctionStyle === "declaration" &&
						!(allowTypeAnnotation && node.parent.id.typeAnnotation)
					) {
						context.report({
							node: node.parent,
							messageId: "declaration",
						});
					}
				}
			};
		}

		return nodesToCheck;
	},
};

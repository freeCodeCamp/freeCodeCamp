/**
 * @fileoverview Rule to disallow empty functions.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const ALLOW_OPTIONS = Object.freeze([
	"functions",
	"arrowFunctions",
	"generatorFunctions",
	"methods",
	"generatorMethods",
	"getters",
	"setters",
	"constructors",
	"asyncFunctions",
	"asyncMethods",
	"privateConstructors",
	"protectedConstructors",
	"decoratedFunctions",
	"overrideMethods",
]);

/**
 * Gets the kind of a given function node.
 * @param {ASTNode} node A function node to get. This is one of
 *      an ArrowFunctionExpression, a FunctionDeclaration, or a
 *      FunctionExpression.
 * @returns {string} The kind of the function. This is one of "functions",
 *      "arrowFunctions", "generatorFunctions", "asyncFunctions", "methods",
 *      "generatorMethods", "asyncMethods", "getters", "setters", and
 *      "constructors".
 */
function getKind(node) {
	const parent = node.parent;
	let kind;

	if (node.type === "ArrowFunctionExpression") {
		return "arrowFunctions";
	}

	// Detects main kind.
	if (parent.type === "Property") {
		if (parent.kind === "get") {
			return "getters";
		}
		if (parent.kind === "set") {
			return "setters";
		}
		kind = parent.method ? "methods" : "functions";
	} else if (parent.type === "MethodDefinition") {
		if (parent.kind === "get") {
			return "getters";
		}
		if (parent.kind === "set") {
			return "setters";
		}
		if (parent.kind === "constructor") {
			return "constructors";
		}
		kind = "methods";
	} else {
		kind = "functions";
	}

	// Detects prefix.
	let prefix;

	if (node.generator) {
		prefix = "generator";
	} else if (node.async) {
		prefix = "async";
	} else {
		return kind;
	}
	return prefix + kind[0].toUpperCase() + kind.slice(1);
}

/**
 * Checks if a constructor function has parameter properties.
 * @param {ASTNode} node The function node to examine.
 * @returns {boolean} True if the constructor has parameter properties, false otherwise.
 */
function isParameterPropertiesConstructor(node) {
	return node.params.some(param => param.type === "TSParameterProperty");
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		dialects: ["javascript", "typescript"],
		language: "javascript",
		hasSuggestions: true,
		type: "suggestion",

		defaultOptions: [{ allow: [] }],

		docs: {
			description: "Disallow empty functions",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-empty-function",
		},

		schema: [
			{
				type: "object",
				properties: {
					allow: {
						type: "array",
						items: { enum: ALLOW_OPTIONS },
						uniqueItems: true,
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			unexpected: "Unexpected empty {{name}}.",
			suggestComment: "Add comment inside empty {{name}}.",
		},
	},

	create(context) {
		const [{ allow }] = context.options;
		const sourceCode = context.sourceCode;

		/**
		 * Checks if the given function node is allowed to be empty.
		 * @param {ASTNode} node The function node to check.
		 * @returns {boolean} True if the function is allowed to be empty, false otherwise.
		 */
		function isAllowedEmptyFunction(node) {
			const kind = getKind(node);

			if (allow.includes(kind)) {
				return true;
			}

			if (kind === "constructors") {
				if (
					(node.parent.accessibility === "private" &&
						allow.includes("privateConstructors")) ||
					(node.parent.accessibility === "protected" &&
						allow.includes("protectedConstructors")) ||
					isParameterPropertiesConstructor(node)
				) {
					return true;
				}
			}

			if (/(?:g|s)etters|methods$/iu.test(kind)) {
				if (
					(node.parent.decorators?.length &&
						allow.includes("decoratedFunctions")) ||
					(node.parent.override && allow.includes("overrideMethods"))
				) {
					return true;
				}
			}

			return false;
		}

		/**
		 * Reports a given function node if the node matches the following patterns.
		 *
		 * - Not allowed by options.
		 * - The body is empty.
		 * - The body doesn't have any comments.
		 * @param {ASTNode} node A function node to report. This is one of
		 *      an ArrowFunctionExpression, a FunctionDeclaration, or a
		 *      FunctionExpression.
		 * @returns {void}
		 */
		function reportIfEmpty(node) {
			const name = astUtils.getFunctionNameWithKind(node);
			const innerComments = sourceCode.getTokens(node.body, {
				includeComments: true,
				filter: astUtils.isCommentToken,
			});

			if (
				!isAllowedEmptyFunction(node) &&
				node.body.type === "BlockStatement" &&
				node.body.body.length === 0 &&
				innerComments.length === 0
			) {
				context.report({
					node,
					loc: node.body.loc,
					messageId: "unexpected",
					data: { name },
					suggest: [
						{
							messageId: "suggestComment",
							data: { name },
							fix(fixer) {
								const range = [
									node.body.range[0] + 1,
									node.body.range[1] - 1,
								];

								return fixer.replaceTextRange(
									range,
									" /* empty */ ",
								);
							},
						},
					],
				});
			}
		}

		return {
			ArrowFunctionExpression: reportIfEmpty,
			FunctionDeclaration: reportIfEmpty,
			FunctionExpression: reportIfEmpty,
		};
	},
};

/**
 * @fileoverview Rule to flag when a function has too many parameters
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");
const { upperCaseFirst } = require("../shared/string-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",
		dialects: ["typescript", "javascript"],
		language: "javascript",

		docs: {
			description:
				"Enforce a maximum number of parameters in function definitions",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/max-params",
		},

		schema: [
			{
				oneOf: [
					{
						type: "integer",
						minimum: 0,
					},
					{
						type: "object",
						properties: {
							maximum: {
								type: "integer",
								minimum: 0,
							},
							max: {
								type: "integer",
								minimum: 0,
							},
							countVoidThis: {
								type: "boolean",
								description:
									"Whether to count a `this` declaration when the type is `void`.",
							},
						},
						additionalProperties: false,
					},
				],
			},
		],
		messages: {
			exceed: "{{name}} has too many parameters ({{count}}). Maximum allowed is {{max}}.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;
		const option = context.options[0];
		let numParams = 3;
		let countVoidThis = false;

		if (typeof option === "object") {
			if (
				Object.hasOwn(option, "maximum") ||
				Object.hasOwn(option, "max")
			) {
				numParams = option.maximum || option.max;
			}
			countVoidThis = option.countVoidThis;
		}
		if (typeof option === "number") {
			numParams = option;
		}

		/**
		 * Checks a function to see if it has too many parameters.
		 * @param {ASTNode} node The node to check.
		 * @returns {void}
		 * @private
		 */
		function checkFunction(node) {
			const hasVoidThisParam =
				node.params.length > 0 &&
				node.params[0].type === "Identifier" &&
				node.params[0].name === "this" &&
				node.params[0].typeAnnotation?.typeAnnotation.type ===
					"TSVoidKeyword";

			const effectiveParamCount =
				hasVoidThisParam && !countVoidThis
					? node.params.length - 1
					: node.params.length;

			if (effectiveParamCount > numParams) {
				context.report({
					loc: astUtils.getFunctionHeadLoc(node, sourceCode),
					node,
					messageId: "exceed",
					data: {
						name: upperCaseFirst(
							astUtils.getFunctionNameWithKind(node),
						),
						count: effectiveParamCount,
						max: numParams,
					},
				});
			}
		}

		return {
			FunctionDeclaration: checkFunction,
			ArrowFunctionExpression: checkFunction,
			FunctionExpression: checkFunction,
			TSDeclareFunction: checkFunction,
			TSFunctionType: checkFunction,
		};
	},
};

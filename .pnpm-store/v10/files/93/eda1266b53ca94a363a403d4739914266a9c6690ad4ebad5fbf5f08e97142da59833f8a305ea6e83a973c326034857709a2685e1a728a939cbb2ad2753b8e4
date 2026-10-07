/**
 * @fileoverview A rule to set the maximum number of statements in a function.
 * @author Ian Christian Myers
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

		docs: {
			description:
				"Enforce a maximum number of statements allowed in function blocks",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/max-statements",
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
						},
						additionalProperties: false,
					},
				],
			},
			{
				type: "object",
				properties: {
					ignoreTopLevelFunctions: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],
		messages: {
			exceed: "{{name}} has too many statements ({{count}}). Maximum allowed is {{max}}.",
		},
	},

	create(context) {
		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		const functionStack = [],
			option = context.options[0],
			ignoreTopLevelFunctions =
				(context.options[1] &&
					context.options[1].ignoreTopLevelFunctions) ||
				false,
			topLevelFunctions = [];
		let maxStatements = 10;

		if (
			typeof option === "object" &&
			(Object.hasOwn(option, "maximum") || Object.hasOwn(option, "max"))
		) {
			maxStatements = option.maximum || option.max;
		} else if (typeof option === "number") {
			maxStatements = option;
		}

		/**
		 * Reports a node if it has too many statements
		 * @param {ASTNode} node node to evaluate
		 * @param {number} count Number of statements in node
		 * @param {number} max Maximum number of statements allowed
		 * @returns {void}
		 * @private
		 */
		function reportIfTooManyStatements(node, count, max) {
			if (count > max) {
				const name = upperCaseFirst(
					astUtils.getFunctionNameWithKind(node),
				);

				context.report({
					node,
					messageId: "exceed",
					data: { name, count, max },
				});
			}
		}

		/**
		 * When parsing a new function, store it in our function stack
		 * @returns {void}
		 * @private
		 */
		function startFunction() {
			functionStack.push(0);
		}

		/**
		 * Evaluate the node at the end of function
		 * @param {ASTNode} node node to evaluate
		 * @returns {void}
		 * @private
		 */
		function endFunction(node) {
			const count = functionStack.pop();

			/*
			 * This rule does not apply to class static blocks, but we have to track them so
			 * that statements in them do not count as statements in the enclosing function.
			 */
			if (node.type === "StaticBlock") {
				return;
			}

			if (ignoreTopLevelFunctions && functionStack.length === 0) {
				topLevelFunctions.push({ node, count });
			} else {
				reportIfTooManyStatements(node, count, maxStatements);
			}
		}

		/**
		 * Increment the count of the functions
		 * @param {ASTNode} node node to evaluate
		 * @returns {void}
		 * @private
		 */
		function countStatements(node) {
			functionStack[functionStack.length - 1] += node.body.length;
		}

		//--------------------------------------------------------------------------
		// Public API
		//--------------------------------------------------------------------------

		return {
			FunctionDeclaration: startFunction,
			FunctionExpression: startFunction,
			ArrowFunctionExpression: startFunction,
			StaticBlock: startFunction,

			BlockStatement: countStatements,

			"FunctionDeclaration:exit": endFunction,
			"FunctionExpression:exit": endFunction,
			"ArrowFunctionExpression:exit": endFunction,
			"StaticBlock:exit": endFunction,

			"Program:exit"() {
				if (topLevelFunctions.length === 1) {
					return;
				}

				topLevelFunctions.forEach(element => {
					const count = element.count;
					const node = element.node;

					reportIfTooManyStatements(node, count, maxStatements);
				});
			},
		};
	},
};

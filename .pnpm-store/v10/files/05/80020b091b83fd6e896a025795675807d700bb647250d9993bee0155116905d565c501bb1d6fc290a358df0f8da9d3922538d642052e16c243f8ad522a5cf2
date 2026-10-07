/**
 * @fileoverview Rule to disallow unsafe optional chaining
 * @author Yeon JuAn
 */

"use strict";

const UNSAFE_ARITHMETIC_OPERATORS = new Set(["+", "-", "/", "*", "%", "**"]);
const UNSAFE_ASSIGNMENT_OPERATORS = new Set([
	"+=",
	"-=",
	"/=",
	"*=",
	"%=",
	"**=",
]);
const UNSAFE_RELATIONAL_OPERATORS = new Set(["in", "instanceof"]);

/**
 * Checks whether a node is a destructuring pattern or not
 * @param {ASTNode} node node to check
 * @returns {boolean} `true` if a node is a destructuring pattern, otherwise `false`
 */
function isDestructuringPattern(node) {
	return node.type === "ObjectPattern" || node.type === "ArrayPattern";
}

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		defaultOptions: [
			{
				disallowArithmeticOperators: false,
			},
		],

		docs: {
			description:
				"Disallow use of optional chaining in contexts where the `undefined` value is not allowed",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining",
		},
		schema: [
			{
				type: "object",
				properties: {
					disallowArithmeticOperators: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],
		fixable: null,
		messages: {
			unsafeOptionalChain:
				"Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.",
			unsafeArithmetic:
				"Unsafe arithmetic operation on optional chaining. It can result in NaN.",
		},
	},

	create(context) {
		const [{ disallowArithmeticOperators }] = context.options;

		/**
		 * Reports unsafe usage of optional chaining
		 * @param {ASTNode} node node to report
		 * @returns {void}
		 */
		function reportUnsafeUsage(node) {
			context.report({
				messageId: "unsafeOptionalChain",
				node,
			});
		}

		/**
		 * Reports unsafe arithmetic operation on optional chaining
		 * @param {ASTNode} node node to report
		 * @returns {void}
		 */
		function reportUnsafeArithmetic(node) {
			context.report({
				messageId: "unsafeArithmetic",
				node,
			});
		}

		/**
		 * Checks and reports if a node can short-circuit with `undefined` by optional chaining.
		 * @param {ASTNode} [node] node to check
		 * @param {Function} reportFunc report function
		 * @returns {void}
		 */
		function checkUndefinedShortCircuit(node, reportFunc) {
			if (!node) {
				return;
			}
			switch (node.type) {
				case "LogicalExpression":
					if (node.operator === "||" || node.operator === "??") {
						checkUndefinedShortCircuit(node.right, reportFunc);
					} else if (node.operator === "&&") {
						checkUndefinedShortCircuit(node.left, reportFunc);
						checkUndefinedShortCircuit(node.right, reportFunc);
					}
					break;
				case "SequenceExpression":
					checkUndefinedShortCircuit(
						node.expressions.at(-1),
						reportFunc,
					);
					break;
				case "ConditionalExpression":
					checkUndefinedShortCircuit(node.consequent, reportFunc);
					checkUndefinedShortCircuit(node.alternate, reportFunc);
					break;
				case "AwaitExpression":
					checkUndefinedShortCircuit(node.argument, reportFunc);
					break;
				case "ChainExpression":
					reportFunc(node);
					break;
				default:
					break;
			}
		}

		/**
		 * Checks unsafe usage of optional chaining
		 * @param {ASTNode} node node to check
		 * @returns {void}
		 */
		function checkUnsafeUsage(node) {
			checkUndefinedShortCircuit(node, reportUnsafeUsage);
		}

		/**
		 * Checks unsafe arithmetic operations on optional chaining
		 * @param {ASTNode} node node to check
		 * @returns {void}
		 */
		function checkUnsafeArithmetic(node) {
			checkUndefinedShortCircuit(node, reportUnsafeArithmetic);
		}

		return {
			"AssignmentExpression, AssignmentPattern"(node) {
				if (isDestructuringPattern(node.left)) {
					checkUnsafeUsage(node.right);
				}
			},
			"ClassDeclaration, ClassExpression"(node) {
				checkUnsafeUsage(node.superClass);
			},
			CallExpression(node) {
				if (!node.optional) {
					checkUnsafeUsage(node.callee);
				}
			},
			NewExpression(node) {
				checkUnsafeUsage(node.callee);
			},
			VariableDeclarator(node) {
				if (isDestructuringPattern(node.id)) {
					checkUnsafeUsage(node.init);
				}
			},
			MemberExpression(node) {
				if (!node.optional) {
					checkUnsafeUsage(node.object);
				}
			},
			TaggedTemplateExpression(node) {
				checkUnsafeUsage(node.tag);
			},
			ForOfStatement(node) {
				checkUnsafeUsage(node.right);
			},
			SpreadElement(node) {
				if (node.parent && node.parent.type !== "ObjectExpression") {
					checkUnsafeUsage(node.argument);
				}
			},
			BinaryExpression(node) {
				if (UNSAFE_RELATIONAL_OPERATORS.has(node.operator)) {
					checkUnsafeUsage(node.right);
				}
				if (
					disallowArithmeticOperators &&
					UNSAFE_ARITHMETIC_OPERATORS.has(node.operator)
				) {
					checkUnsafeArithmetic(node.right);
					checkUnsafeArithmetic(node.left);
				}
			},
			WithStatement(node) {
				checkUnsafeUsage(node.object);
			},
			UnaryExpression(node) {
				if (
					disallowArithmeticOperators &&
					UNSAFE_ARITHMETIC_OPERATORS.has(node.operator)
				) {
					checkUnsafeArithmetic(node.argument);
				}
			},
			AssignmentExpression(node) {
				if (
					disallowArithmeticOperators &&
					UNSAFE_ASSIGNMENT_OPERATORS.has(node.operator)
				) {
					checkUnsafeArithmetic(node.right);
				}
			},
		};
	},
};

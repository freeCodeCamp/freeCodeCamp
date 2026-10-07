/**
 * @fileoverview Enforces that a return statement is present in property getters.
 * @author Aladdin-ADD(hh_2013@foxmail.com)
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const TARGET_NODE_TYPE = /^(?:Arrow)?FunctionExpression$/u;

/**
 * Checks all segments in a set and returns true if any are reachable.
 * @param {Set<CodePathSegment>} segments The segments to check.
 * @returns {boolean} True if any segment is reachable; false otherwise.
 */
function isAnySegmentReachable(segments) {
	for (const segment of segments) {
		if (segment.reachable) {
			return true;
		}
	}

	return false;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		defaultOptions: [
			{
				allowImplicit: false,
			},
		],

		docs: {
			description: "Enforce `return` statements in getters",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/getter-return",
		},

		fixable: null,

		schema: [
			{
				type: "object",
				properties: {
					allowImplicit: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			expected: "Expected to return a value in {{name}}.",
			expectedAlways: "Expected {{name}} to always return a value.",
		},
	},

	create(context) {
		const [{ allowImplicit }] = context.options;
		const sourceCode = context.sourceCode;

		let funcInfo = {
			upper: null,
			codePath: null,
			hasReturn: false,
			shouldCheck: false,
			node: null,
			currentSegments: [],
		};

		/**
		 * Checks whether or not the last code path segment is reachable.
		 * Then reports this function if the segment is reachable.
		 *
		 * If the last code path segment is reachable, there are paths which are not
		 * returned or thrown.
		 * @param {ASTNode} node A node to check.
		 * @returns {void}
		 */
		function checkLastSegment(node) {
			if (
				funcInfo.shouldCheck &&
				isAnySegmentReachable(funcInfo.currentSegments)
			) {
				context.report({
					node,
					loc: astUtils.getFunctionHeadLoc(node, sourceCode),
					messageId: funcInfo.hasReturn
						? "expectedAlways"
						: "expected",
					data: {
						name: astUtils.getFunctionNameWithKind(funcInfo.node),
					},
				});
			}
		}

		/**
		 * Checks whether a node means a getter function.
		 * @param {ASTNode} node a node to check.
		 * @returns {boolean} if node means a getter, return true; else return false.
		 */
		function isGetter(node) {
			const parent = node.parent;

			if (
				TARGET_NODE_TYPE.test(node.type) &&
				node.body.type === "BlockStatement"
			) {
				if (parent.kind === "get") {
					return true;
				}
				if (
					parent.type === "Property" &&
					astUtils.getStaticPropertyName(parent) === "get" &&
					parent.parent.type === "ObjectExpression"
				) {
					// Object.defineProperty() or Reflect.defineProperty()
					if (parent.parent.parent.type === "CallExpression") {
						const callNode = parent.parent.parent.callee;

						if (
							astUtils.isSpecificMemberAccess(
								callNode,
								"Object",
								"defineProperty",
							) ||
							astUtils.isSpecificMemberAccess(
								callNode,
								"Reflect",
								"defineProperty",
							)
						) {
							return true;
						}
					}

					// Object.defineProperties() or Object.create()
					if (
						parent.parent.parent.type === "Property" &&
						parent.parent.parent.parent.type ===
							"ObjectExpression" &&
						parent.parent.parent.parent.parent.type ===
							"CallExpression"
					) {
						const callNode =
							parent.parent.parent.parent.parent.callee;

						return (
							astUtils.isSpecificMemberAccess(
								callNode,
								"Object",
								"defineProperties",
							) ||
							astUtils.isSpecificMemberAccess(
								callNode,
								"Object",
								"create",
							)
						);
					}
				}
			}
			return false;
		}
		return {
			// Stacks this function's information.
			onCodePathStart(codePath, node) {
				funcInfo = {
					upper: funcInfo,
					codePath,
					hasReturn: false,
					shouldCheck: isGetter(node),
					node,
					currentSegments: new Set(),
				};
			},

			// Pops this function's information.
			onCodePathEnd() {
				funcInfo = funcInfo.upper;
			},
			onUnreachableCodePathSegmentStart(segment) {
				funcInfo.currentSegments.add(segment);
			},

			onUnreachableCodePathSegmentEnd(segment) {
				funcInfo.currentSegments.delete(segment);
			},

			onCodePathSegmentStart(segment) {
				funcInfo.currentSegments.add(segment);
			},

			onCodePathSegmentEnd(segment) {
				funcInfo.currentSegments.delete(segment);
			},

			// Checks the return statement is valid.
			ReturnStatement(node) {
				if (funcInfo.shouldCheck) {
					funcInfo.hasReturn = true;

					// if allowImplicit: false, should also check node.argument
					if (!allowImplicit && !node.argument) {
						context.report({
							node,
							messageId: "expected",
							data: {
								name: astUtils.getFunctionNameWithKind(
									funcInfo.node,
								),
							},
						});
					}
				}
			},

			// Reports a given function if the last path is reachable.
			"FunctionExpression:exit": checkLastSegment,
			"ArrowFunctionExpression:exit": checkLastSegment,
		};
	},
};

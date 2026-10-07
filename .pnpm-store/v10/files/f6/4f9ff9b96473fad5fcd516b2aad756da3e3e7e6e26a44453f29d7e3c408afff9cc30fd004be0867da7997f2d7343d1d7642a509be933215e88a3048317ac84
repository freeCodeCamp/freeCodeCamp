/**
 * @fileoverview Rule to enforce return statements in callbacks of array's methods
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

const TARGET_NODE_TYPE = /^(?:Arrow)?FunctionExpression$/u;
const TARGET_METHODS =
	/^(?:every|filter|find(?:Last)?(?:Index)?|flatMap|forEach|map|reduce(?:Right)?|some|sort|toSorted)$/u;

/**
 * Checks a given node is a member access which has the specified name's
 * property.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} `true` if the node is a member access which has
 *      the specified name's property. The node may be a `(Chain|Member)Expression` node.
 */
function isTargetMethod(node) {
	return astUtils.isSpecificMemberAccess(node, null, TARGET_METHODS);
}

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

/**
 * Returns a human-legible description of an array method
 * @param {string} arrayMethodName A method name to fully qualify
 * @returns {string} the method name prefixed with `Array.` if it is a class method,
 *      or else `Array.prototype.` if it is an instance method.
 */
function fullMethodName(arrayMethodName) {
	if (["from", "of", "isArray"].includes(arrayMethodName)) {
		return "Array.".concat(arrayMethodName);
	}
	return "Array.prototype.".concat(arrayMethodName);
}

/**
 * Checks whether or not a given node is a function expression which is the
 * callback of an array method, returning the method name.
 * @param {ASTNode} node A node to check. This is one of
 *      FunctionExpression or ArrowFunctionExpression.
 * @returns {string} The method name if the node is a callback method,
 *      null otherwise.
 */
function getArrayMethodName(node) {
	let currentNode = node;

	while (currentNode) {
		const parent = currentNode.parent;

		switch (parent.type) {
			/*
			 * Looks up the destination. e.g.,
			 * foo.every(nativeFoo || function foo() { ... });
			 */
			case "LogicalExpression":
			case "ConditionalExpression":
			case "ChainExpression":
				currentNode = parent;
				break;

			/*
			 * If the upper function is IIFE, checks the destination of the return value.
			 * e.g.
			 *   foo.every((function() {
			 *     // setup...
			 *     return function callback() { ... };
			 *   })());
			 */
			case "ReturnStatement": {
				const func = astUtils.getUpperFunction(parent);

				if (func === null || !astUtils.isCallee(func)) {
					return null;
				}
				currentNode = func.parent;
				break;
			}

			/*
			 * e.g.
			 *   Array.from([], function() {});
			 *   list.every(function() {});
			 */
			case "CallExpression":
				if (astUtils.isArrayFromMethod(parent.callee)) {
					if (
						parent.arguments.length >= 2 &&
						parent.arguments[1] === currentNode
					) {
						return "from";
					}
				}
				if (isTargetMethod(parent.callee)) {
					if (
						parent.arguments.length >= 1 &&
						parent.arguments[0] === currentNode
					) {
						return astUtils.getStaticPropertyName(parent.callee);
					}
				}
				return null;

			// Otherwise this node is not target.
			default:
				return null;
		}
	}

	/* c8 ignore next */
	return null;
}

/**
 * Checks if the given node is a void expression.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} - `true` if the node is a void expression
 */
function isExpressionVoid(node) {
	return node.type === "UnaryExpression" && node.operator === "void";
}

/**
 * Fixes the linting error by prepending "void " to the given node
 * @param {Object} sourceCode context given by context.sourceCode
 * @param {ASTNode} node The node to fix.
 * @param {Object} fixer The fixer object provided by ESLint.
 * @returns {Array<Object>} - An array of fix objects to apply to the node.
 */
function voidPrependFixer(sourceCode, node, fixer) {
	const requiresParens =
		// prepending `void ` will fail if the node has a lower precedence than void
		astUtils.getPrecedence(node) <
			astUtils.getPrecedence({
				type: "UnaryExpression",
				operator: "void",
			}) &&
		// check if there are parentheses around the node to avoid redundant parentheses
		!astUtils.isParenthesised(sourceCode, node);

	// avoid parentheses issues
	const returnOrArrowToken = sourceCode.getTokenBefore(
		node,
		node.parent.type === "ArrowFunctionExpression"
			? astUtils.isArrowToken
			: // isReturnToken
				token => token.type === "Keyword" && token.value === "return",
	);

	const firstToken = sourceCode.getTokenAfter(returnOrArrowToken);

	const prependSpace =
		// is return token, as => allows void to be adjacent
		returnOrArrowToken.value === "return" &&
		// If two tokens (return and "(") are adjacent
		returnOrArrowToken.range[1] === firstToken.range[0];

	return [
		fixer.insertTextBefore(
			firstToken,
			`${prependSpace ? " " : ""}void ${requiresParens ? "(" : ""}`,
		),
		fixer.insertTextAfter(node, requiresParens ? ")" : ""),
	];
}

/**
 * Fixes the linting error by `wrapping {}` around the given node's body.
 * @param {Object} sourceCode context given by context.sourceCode
 * @param {ASTNode} node The node to fix.
 * @param {Object} fixer The fixer object provided by ESLint.
 * @returns {Array<Object>} - An array of fix objects to apply to the node.
 */
function curlyWrapFixer(sourceCode, node, fixer) {
	const arrowToken = sourceCode.getTokenBefore(
		node.body,
		astUtils.isArrowToken,
	);
	const firstToken = sourceCode.getTokenAfter(arrowToken);
	const lastToken = sourceCode.getLastToken(node);

	return [
		fixer.insertTextBefore(firstToken, "{"),
		fixer.insertTextAfter(lastToken, "}"),
	];
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
				checkForEach: false,
				allowVoid: false,
			},
		],

		docs: {
			description:
				"Enforce `return` statements in callbacks of array methods",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/array-callback-return",
		},

		hasSuggestions: true,

		schema: [
			{
				type: "object",
				properties: {
					allowImplicit: {
						type: "boolean",
					},
					checkForEach: {
						type: "boolean",
					},
					allowVoid: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			expectedAtEnd:
				"{{arrayMethodName}}() expects a value to be returned at the end of {{name}}.",
			expectedInside:
				"{{arrayMethodName}}() expects a return value from {{name}}.",
			expectedReturnValue:
				"{{arrayMethodName}}() expects a return value from {{name}}.",
			expectedNoReturnValue:
				"{{arrayMethodName}}() expects no useless return value from {{name}}.",
			wrapBraces: "Wrap the expression in `{}`.",
			prependVoid: "Prepend `void` to the expression.",
		},
	},

	create(context) {
		const [options] = context.options;
		const sourceCode = context.sourceCode;

		let funcInfo = {
			arrayMethodName: null,
			upper: null,
			codePath: null,
			hasReturn: false,
			shouldCheck: false,
			node: null,
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
			if (!funcInfo.shouldCheck) {
				return;
			}

			const messageAndSuggestions = { messageId: "", suggest: [] };

			if (funcInfo.arrayMethodName === "forEach") {
				if (
					options.checkForEach &&
					node.type === "ArrowFunctionExpression" &&
					node.expression
				) {
					if (options.allowVoid) {
						if (isExpressionVoid(node.body)) {
							return;
						}

						messageAndSuggestions.messageId =
							"expectedNoReturnValue";
						messageAndSuggestions.suggest = [
							{
								messageId: "wrapBraces",
								fix(fixer) {
									return curlyWrapFixer(
										sourceCode,
										node,
										fixer,
									);
								},
							},
							{
								messageId: "prependVoid",
								fix(fixer) {
									return voidPrependFixer(
										sourceCode,
										node.body,
										fixer,
									);
								},
							},
						];
					} else {
						messageAndSuggestions.messageId =
							"expectedNoReturnValue";
						messageAndSuggestions.suggest = [
							{
								messageId: "wrapBraces",
								fix(fixer) {
									return curlyWrapFixer(
										sourceCode,
										node,
										fixer,
									);
								},
							},
						];
					}
				}
			} else {
				if (
					node.body.type === "BlockStatement" &&
					isAnySegmentReachable(funcInfo.currentSegments)
				) {
					messageAndSuggestions.messageId = funcInfo.hasReturn
						? "expectedAtEnd"
						: "expectedInside";
				}
			}

			if (messageAndSuggestions.messageId) {
				const name = astUtils.getFunctionNameWithKind(node);

				context.report({
					node,
					loc: astUtils.getFunctionHeadLoc(node, sourceCode),
					messageId: messageAndSuggestions.messageId,
					data: {
						name,
						arrayMethodName: fullMethodName(
							funcInfo.arrayMethodName,
						),
					},
					suggest:
						messageAndSuggestions.suggest.length !== 0
							? messageAndSuggestions.suggest
							: null,
				});
			}
		}

		return {
			// Stacks this function's information.
			onCodePathStart(codePath, node) {
				let methodName = null;

				if (TARGET_NODE_TYPE.test(node.type)) {
					methodName = getArrayMethodName(node);
				}

				funcInfo = {
					arrayMethodName: methodName,
					upper: funcInfo,
					codePath,
					hasReturn: false,
					shouldCheck: methodName && !node.async && !node.generator,
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
				if (!funcInfo.shouldCheck) {
					return;
				}

				funcInfo.hasReturn = true;

				const messageAndSuggestions = { messageId: "", suggest: [] };

				if (funcInfo.arrayMethodName === "forEach") {
					// if checkForEach: true, returning a value at any path inside a forEach is not allowed
					if (options.checkForEach && node.argument) {
						if (options.allowVoid) {
							if (isExpressionVoid(node.argument)) {
								return;
							}

							messageAndSuggestions.messageId =
								"expectedNoReturnValue";
							messageAndSuggestions.suggest = [
								{
									messageId: "prependVoid",
									fix(fixer) {
										return voidPrependFixer(
											sourceCode,
											node.argument,
											fixer,
										);
									},
								},
							];
						} else {
							messageAndSuggestions.messageId =
								"expectedNoReturnValue";
						}
					}
				} else {
					// if allowImplicit: false, should also check node.argument
					if (!options.allowImplicit && !node.argument) {
						messageAndSuggestions.messageId = "expectedReturnValue";
					}
				}

				if (messageAndSuggestions.messageId) {
					context.report({
						node,
						messageId: messageAndSuggestions.messageId,
						data: {
							name: astUtils.getFunctionNameWithKind(
								funcInfo.node,
							),
							arrayMethodName: fullMethodName(
								funcInfo.arrayMethodName,
							),
						},
						suggest:
							messageAndSuggestions.suggest.length !== 0
								? messageAndSuggestions.suggest
								: null,
					});
				}
			},

			// Reports a given function if the last path is reachable.
			"FunctionExpression:exit": checkLastSegment,
			"ArrowFunctionExpression:exit": checkLastSegment,
		};
	},
};

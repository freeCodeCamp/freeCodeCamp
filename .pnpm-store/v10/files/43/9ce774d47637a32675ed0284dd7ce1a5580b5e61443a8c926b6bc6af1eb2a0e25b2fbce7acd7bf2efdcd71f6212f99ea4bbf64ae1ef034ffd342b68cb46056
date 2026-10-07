/**
 * @fileoverview Rule to flag consistent return values
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");
const { upperCaseFirst } = require("../shared/string-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks all segments in a set and returns true if all are unreachable.
 * @param {Set<CodePathSegment>} segments The segments to check.
 * @returns {boolean} True if all segments are unreachable; false otherwise.
 */
function areAllSegmentsUnreachable(segments) {
	for (const segment of segments) {
		if (segment.reachable) {
			return false;
		}
	}

	return true;
}

/**
 * Checks whether a given node is a `constructor` method in an ES6 class
 * @param {ASTNode} node A node to check
 * @returns {boolean} `true` if the node is a `constructor` method
 */
function isClassConstructor(node) {
	return (
		node.type === "FunctionExpression" &&
		node.parent &&
		node.parent.type === "MethodDefinition" &&
		node.parent.kind === "constructor"
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
			description:
				"Require `return` statements to either always or never specify values",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/consistent-return",
		},

		schema: [
			{
				type: "object",
				properties: {
					treatUndefinedAsUnspecified: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		defaultOptions: [{ treatUndefinedAsUnspecified: false }],

		messages: {
			missingReturn: "Expected to return a value at the end of {{name}}.",
			missingReturnValue: "{{name}} expected a return value.",
			unexpectedReturnValue: "{{name}} expected no return value.",
		},
	},

	create(context) {
		const [{ treatUndefinedAsUnspecified }] = context.options;
		let funcInfo = null;

		/**
		 * Checks whether of not the implicit returning is consistent if the last
		 * code path segment is reachable.
		 * @param {ASTNode} node A program/function node to check.
		 * @returns {void}
		 */
		function checkLastSegment(node) {
			let loc, name;

			/*
			 * Skip if it expected no return value or unreachable.
			 * When unreachable, all paths are returned or thrown.
			 */
			if (
				!funcInfo.hasReturnValue ||
				areAllSegmentsUnreachable(funcInfo.currentSegments) ||
				astUtils.isES5Constructor(node) ||
				isClassConstructor(node)
			) {
				return;
			}

			// Adjust a location and a message.
			if (node.type === "Program") {
				// The head of program.
				loc = { line: 1, column: 0 };
				name = "program";
			} else if (node.type === "ArrowFunctionExpression") {
				// `=>` token
				loc = context.sourceCode.getTokenBefore(
					node.body,
					astUtils.isArrowToken,
				).loc;
			} else if (
				node.parent.type === "MethodDefinition" ||
				(node.parent.type === "Property" && node.parent.method)
			) {
				// Method name.
				loc = node.parent.key.loc;
			} else {
				// Function name or `function` keyword.
				loc = (node.id || context.sourceCode.getFirstToken(node)).loc;
			}

			if (!name) {
				name = astUtils.getFunctionNameWithKind(node);
			}

			// Reports.
			context.report({
				node,
				loc,
				messageId: "missingReturn",
				data: { name },
			});
		}

		return {
			// Initializes/Disposes state of each code path.
			onCodePathStart(codePath, node) {
				funcInfo = {
					upper: funcInfo,
					codePath,
					hasReturn: false,
					hasReturnValue: false,
					messageId: "",
					node,
					currentSegments: new Set(),
				};
			},
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

			// Reports a given return statement if it's inconsistent.
			ReturnStatement(node) {
				const argument = node.argument;
				let hasReturnValue = Boolean(argument);

				if (treatUndefinedAsUnspecified && hasReturnValue) {
					hasReturnValue =
						!astUtils.isSpecificId(argument, "undefined") &&
						argument.operator !== "void";
				}

				if (!funcInfo.hasReturn) {
					funcInfo.hasReturn = true;
					funcInfo.hasReturnValue = hasReturnValue;
					funcInfo.messageId = hasReturnValue
						? "missingReturnValue"
						: "unexpectedReturnValue";
					funcInfo.data = {
						name:
							funcInfo.node.type === "Program"
								? "Program"
								: upperCaseFirst(
										astUtils.getFunctionNameWithKind(
											funcInfo.node,
										),
									),
					};
				} else if (funcInfo.hasReturnValue !== hasReturnValue) {
					context.report({
						node,
						messageId: funcInfo.messageId,
						data: funcInfo.data,
					});
				}
			},

			// Reports a given program/function if the implicit returning is not consistent.
			"Program:exit": checkLastSegment,
			"FunctionDeclaration:exit": checkLastSegment,
			"FunctionExpression:exit": checkLastSegment,
			"ArrowFunctionExpression:exit": checkLastSegment,
		};
	},
};

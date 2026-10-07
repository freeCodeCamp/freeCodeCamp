/**
 * @fileoverview Prefer destructuring from arrays and objects
 * @author Alex LaFroscia
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const PRECEDENCE_OF_ASSIGNMENT_EXPR = astUtils.getPrecedence({
	type: "AssignmentExpression",
});

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description: "Require destructuring from arrays and/or objects",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/prefer-destructuring",
		},

		fixable: "code",

		schema: [
			{
				/*
				 * old support {array: Boolean, object: Boolean}
				 * new support {VariableDeclarator: {}, AssignmentExpression: {}}
				 */
				oneOf: [
					{
						type: "object",
						properties: {
							VariableDeclarator: {
								type: "object",
								properties: {
									array: {
										type: "boolean",
									},
									object: {
										type: "boolean",
									},
								},
								additionalProperties: false,
							},
							AssignmentExpression: {
								type: "object",
								properties: {
									array: {
										type: "boolean",
									},
									object: {
										type: "boolean",
									},
								},
								additionalProperties: false,
							},
						},
						additionalProperties: false,
					},
					{
						type: "object",
						properties: {
							array: {
								type: "boolean",
							},
							object: {
								type: "boolean",
							},
						},
						additionalProperties: false,
					},
				],
			},
			{
				type: "object",
				properties: {
					enforceForRenamedProperties: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			preferDestructuring: "Use {{type}} destructuring.",
		},
	},
	create(context) {
		const enabledTypes = context.options[0];
		const enforceForRenamedProperties =
			context.options[1] &&
			context.options[1].enforceForRenamedProperties;
		let normalizedOptions = {
			VariableDeclarator: { array: true, object: true },
			AssignmentExpression: { array: true, object: true },
		};

		if (enabledTypes) {
			normalizedOptions =
				typeof enabledTypes.array !== "undefined" ||
				typeof enabledTypes.object !== "undefined"
					? {
							VariableDeclarator: enabledTypes,
							AssignmentExpression: enabledTypes,
						}
					: enabledTypes;
		}

		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		/**
		 * Checks if destructuring type should be checked.
		 * @param {string} nodeType "AssignmentExpression" or "VariableDeclarator"
		 * @param {string} destructuringType "array" or "object"
		 * @returns {boolean} `true` if the destructuring type should be checked for the given node
		 */
		function shouldCheck(nodeType, destructuringType) {
			return (
				normalizedOptions &&
				normalizedOptions[nodeType] &&
				normalizedOptions[nodeType][destructuringType]
			);
		}

		/**
		 * Determines if the given node is accessing an array index
		 *
		 * This is used to differentiate array index access from object property
		 * access.
		 * @param {ASTNode} node the node to evaluate
		 * @returns {boolean} whether or not the node is an integer
		 */
		function isArrayIndexAccess(node) {
			return Number.isInteger(node.property.value);
		}

		/**
		 * Report that the given node should use destructuring
		 * @param {ASTNode} reportNode the node to report
		 * @param {string} type the type of destructuring that should have been done
		 * @param {Function|null} fix the fix function or null to pass to context.report
		 * @returns {void}
		 */
		function report(reportNode, type, fix) {
			context.report({
				node: reportNode,
				messageId: "preferDestructuring",
				data: { type },
				fix,
			});
		}

		/**
		 * Determines if a node should be fixed into object destructuring
		 *
		 * The fixer only fixes the simplest case of object destructuring,
		 * like: `let x = a.x`;
		 *
		 * Assignment expression is not fixed.
		 * Array destructuring is not fixed.
		 * Renamed property is not fixed.
		 * @param {ASTNode} node the node to evaluate
		 * @returns {boolean} whether or not the node should be fixed
		 */
		function shouldFix(node) {
			return (
				node.type === "VariableDeclarator" &&
				node.id.type === "Identifier" &&
				node.init.type === "MemberExpression" &&
				!node.init.computed &&
				node.init.property.type === "Identifier" &&
				node.id.name === node.init.property.name
			);
		}

		/**
		 * Fix a node into object destructuring.
		 * This function only handles the simplest case of object destructuring,
		 * see {@link shouldFix}.
		 * @param {SourceCodeFixer} fixer the fixer object
		 * @param {ASTNode} node the node to be fixed.
		 * @returns {Object} a fix for the node
		 */
		function fixIntoObjectDestructuring(fixer, node) {
			const rightNode = node.init;
			const sourceCode = context.sourceCode;

			// Don't fix if that would remove any comments. Only comments inside `rightNode.object` can be preserved.
			if (
				sourceCode.getCommentsInside(node).length >
				sourceCode.getCommentsInside(rightNode.object).length
			) {
				return null;
			}

			let objectText = sourceCode.getText(rightNode.object);

			if (
				astUtils.getPrecedence(rightNode.object) <
				PRECEDENCE_OF_ASSIGNMENT_EXPR
			) {
				objectText = `(${objectText})`;
			}

			return fixer.replaceText(
				node,
				`{${rightNode.property.name}} = ${objectText}`,
			);
		}

		/**
		 * Check that the `prefer-destructuring` rules are followed based on the
		 * given left- and right-hand side of the assignment.
		 *
		 * Pulled out into a separate method so that VariableDeclarators and
		 * AssignmentExpressions can share the same verification logic.
		 * @param {ASTNode} leftNode the left-hand side of the assignment
		 * @param {ASTNode} rightNode the right-hand side of the assignment
		 * @param {ASTNode} reportNode the node to report the error on
		 * @returns {void}
		 */
		function performCheck(leftNode, rightNode, reportNode) {
			if (
				rightNode.type !== "MemberExpression" ||
				rightNode.object.type === "Super" ||
				rightNode.property.type === "PrivateIdentifier"
			) {
				return;
			}

			if (isArrayIndexAccess(rightNode)) {
				if (shouldCheck(reportNode.type, "array")) {
					report(reportNode, "array", null);
				}
				return;
			}

			const fix = shouldFix(reportNode)
				? fixer => fixIntoObjectDestructuring(fixer, reportNode)
				: null;

			if (
				shouldCheck(reportNode.type, "object") &&
				enforceForRenamedProperties
			) {
				report(reportNode, "object", fix);
				return;
			}

			if (shouldCheck(reportNode.type, "object")) {
				const property = rightNode.property;

				if (
					(property.type === "Literal" &&
						leftNode.name === property.value) ||
					(property.type === "Identifier" &&
						leftNode.name === property.name &&
						!rightNode.computed)
				) {
					report(reportNode, "object", fix);
				}
			}
		}

		/**
		 * Check if a given variable declarator is coming from an property access
		 * that should be using destructuring instead
		 * @param {ASTNode} node the variable declarator to check
		 * @returns {void}
		 */
		function checkVariableDeclarator(node) {
			// Skip if variable is declared without assignment
			if (!node.init) {
				return;
			}

			// Variable declarations using explicit resource management cannot use destructuring (parse error)
			if (
				node.parent.kind === "using" ||
				node.parent.kind === "await using"
			) {
				return;
			}

			// We only care about member expressions past this point
			if (node.init.type !== "MemberExpression") {
				return;
			}

			performCheck(node.id, node.init, node);
		}

		/**
		 * Run the `prefer-destructuring` check on an AssignmentExpression
		 * @param {ASTNode} node the AssignmentExpression node
		 * @returns {void}
		 */
		function checkAssignmentExpression(node) {
			if (node.operator === "=") {
				performCheck(node.left, node.right, node);
			}
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			VariableDeclarator: checkVariableDeclarator,
			AssignmentExpression: checkAssignmentExpression,
		};
	},
};

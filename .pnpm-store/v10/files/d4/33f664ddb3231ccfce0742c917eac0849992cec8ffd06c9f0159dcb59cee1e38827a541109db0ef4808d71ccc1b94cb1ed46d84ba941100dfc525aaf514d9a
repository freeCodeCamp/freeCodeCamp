/**
 * @fileoverview Rule to disallow returning values from setters
 * @author Milos Djermanovic
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Determines whether the given node is an argument of the specified global method call, at the given `index` position.
 * E.g., for given `index === 1`, this function checks for `objectName.methodName(foo, node)`, where objectName is a global variable.
 * @param {ASTNode} node The node to check.
 * @param {SourceCode} sourceCode Source code to which the node belongs.
 * @param {string} objectName Name of the global object.
 * @param {string} methodName Name of the method.
 * @param {number} index The given position.
 * @returns {boolean} `true` if the node is argument at the given position.
 */
function isArgumentOfGlobalMethodCall(
	node,
	sourceCode,
	objectName,
	methodName,
	index,
) {
	const callNode = node.parent;

	return (
		callNode.type === "CallExpression" &&
		callNode.arguments[index] === node &&
		astUtils.isSpecificMemberAccess(
			callNode.callee,
			objectName,
			methodName,
		) &&
		sourceCode.isGlobalReference(
			astUtils.skipChainExpression(callNode.callee).object,
		)
	);
}

/**
 * Determines whether the given node is used as a property descriptor.
 * @param {ASTNode} node The node to check.
 * @param {SourceCode} sourceCode Source code to which the node belongs.
 * @returns {boolean} `true` if the node is a property descriptor.
 */
function isPropertyDescriptor(node, sourceCode) {
	if (
		isArgumentOfGlobalMethodCall(
			node,
			sourceCode,
			"Object",
			"defineProperty",
			2,
		) ||
		isArgumentOfGlobalMethodCall(
			node,
			sourceCode,
			"Reflect",
			"defineProperty",
			2,
		)
	) {
		return true;
	}

	const parent = node.parent;

	if (parent.type === "Property" && parent.value === node) {
		const grandparent = parent.parent;

		if (
			grandparent.type === "ObjectExpression" &&
			(isArgumentOfGlobalMethodCall(
				grandparent,
				sourceCode,
				"Object",
				"create",
				1,
			) ||
				isArgumentOfGlobalMethodCall(
					grandparent,
					sourceCode,
					"Object",
					"defineProperties",
					1,
				))
		) {
			return true;
		}
	}

	return false;
}

/**
 * Determines whether the given function node is used as a setter function.
 * @param {ASTNode} node The node to check.
 * @param {SourceCode} sourceCode Source code to which the node belongs.
 * @returns {boolean} `true` if the node is a setter.
 */
function isSetter(node, sourceCode) {
	const parent = node.parent;

	if (
		(parent.type === "Property" || parent.type === "MethodDefinition") &&
		parent.kind === "set" &&
		parent.value === node
	) {
		// Setter in an object literal or in a class
		return true;
	}

	if (
		parent.type === "Property" &&
		parent.value === node &&
		astUtils.getStaticPropertyName(parent) === "set" &&
		parent.parent.type === "ObjectExpression" &&
		isPropertyDescriptor(parent.parent, sourceCode)
	) {
		// Setter in a property descriptor
		return true;
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

		docs: {
			description: "Disallow returning values from setters",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-setter-return",
		},

		schema: [],

		messages: {
			returnsValue: "Setter cannot return a value.",
		},
	},

	create(context) {
		let funcInfo = null;
		const sourceCode = context.sourceCode;

		/**
		 * Creates and pushes to the stack a function info object for the given function node.
		 * @param {ASTNode} node The function node.
		 * @returns {void}
		 */
		function enterFunction(node) {
			funcInfo = {
				upper: funcInfo,
				isSetter: isSetter(node, sourceCode),
			};
		}

		/**
		 * Pops the current function info object from the stack.
		 * @returns {void}
		 */
		function exitFunction() {
			funcInfo = funcInfo.upper;
		}

		/**
		 * Reports the given node.
		 * @param {ASTNode} node Node to report.
		 * @returns {void}
		 */
		function report(node) {
			context.report({ node, messageId: "returnsValue" });
		}

		return {
			/*
			 * Function declarations cannot be setters, but we still have to track them in the `funcInfo` stack to avoid
			 * false positives, because a ReturnStatement node can belong to a function declaration inside a setter.
			 *
			 * Note: A previously declared function can be referenced and actually used as a setter in a property descriptor,
			 * but that's out of scope for this rule.
			 */
			FunctionDeclaration: enterFunction,
			FunctionExpression: enterFunction,
			ArrowFunctionExpression(node) {
				enterFunction(node);

				if (funcInfo.isSetter && node.expression) {
					// { set: foo => bar } property descriptor. Report implicit return 'bar' as the equivalent for a return statement.
					report(node.body);
				}
			},

			"FunctionDeclaration:exit": exitFunction,
			"FunctionExpression:exit": exitFunction,
			"ArrowFunctionExpression:exit": exitFunction,

			ReturnStatement(node) {
				// Global returns (e.g., at the top level of a Node module) don't have `funcInfo`.
				if (funcInfo && funcInfo.isSetter && node.argument) {
					report(node);
				}
			},
		};
	},
};

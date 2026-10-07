/**
 * @fileoverview Enforce return after a callback.
 * @author Jamund Ferguson
 * @deprecated in ESLint v7.0.0
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		deprecated: {
			message: "Node.js rules were moved out of ESLint core.",
			url: "https://eslint.org/docs/latest/use/migrating-to-7.0.0#deprecate-node-rules",
			deprecatedSince: "7.0.0",
			availableUntil: "11.0.0",
			replacedBy: [
				{
					message:
						"eslint-plugin-n now maintains deprecated Node.js-related rules.",
					plugin: {
						name: "eslint-plugin-n",
						url: "https://github.com/eslint-community/eslint-plugin-n",
					},
					rule: {
						name: "callback-return",
						url: "https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/callback-return.md",
					},
				},
			],
		},

		type: "suggestion",

		docs: {
			description: "Require `return` statements after callbacks",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/callback-return",
		},

		schema: [
			{
				type: "array",
				items: { type: "string" },
			},
		],

		messages: {
			missingReturn: "Expected return with your callback function.",
		},
	},

	create(context) {
		const callbacks = context.options[0] || ["callback", "cb", "next"],
			sourceCode = context.sourceCode;

		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		/**
		 * Find the closest parent matching a list of types.
		 * @param {ASTNode} node The node whose parents we are searching
		 * @param {Array} types The node types to match
		 * @returns {ASTNode} The matched node or undefined.
		 */
		function findClosestParentOfType(node, types) {
			if (!node.parent) {
				return null;
			}
			if (!types.includes(node.parent.type)) {
				return findClosestParentOfType(node.parent, types);
			}
			return node.parent;
		}

		/**
		 * Check to see if a node contains only identifiers
		 * @param {ASTNode} node The node to check
		 * @returns {boolean} Whether or not the node contains only identifiers
		 */
		function containsOnlyIdentifiers(node) {
			if (node.type === "Identifier") {
				return true;
			}

			if (node.type === "MemberExpression") {
				if (node.object.type === "Identifier") {
					return true;
				}
				if (node.object.type === "MemberExpression") {
					return containsOnlyIdentifiers(node.object);
				}
			}

			return false;
		}

		/**
		 * Check to see if a CallExpression is in our callback list.
		 * @param {ASTNode} node The node to check against our callback names list.
		 * @returns {boolean} Whether or not this function matches our callback name.
		 */
		function isCallback(node) {
			return (
				containsOnlyIdentifiers(node.callee) &&
				callbacks.includes(sourceCode.getText(node.callee))
			);
		}

		/**
		 * Determines whether or not the callback is part of a callback expression.
		 * @param {ASTNode} node The callback node
		 * @param {ASTNode} parentNode The expression node
		 * @returns {boolean} Whether or not this is part of a callback expression
		 */
		function isCallbackExpression(node, parentNode) {
			// ensure the parent node exists and is an expression
			if (!parentNode || parentNode.type !== "ExpressionStatement") {
				return false;
			}

			// cb()
			if (parentNode.expression === node) {
				return true;
			}

			// special case for cb && cb() and similar
			if (
				parentNode.expression.type === "BinaryExpression" ||
				parentNode.expression.type === "LogicalExpression"
			) {
				if (parentNode.expression.right === node) {
					return true;
				}
			}

			return false;
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			CallExpression(node) {
				// if we're not a callback we can return
				if (!isCallback(node)) {
					return;
				}

				// find the closest block, return or loop
				const closestBlock =
					findClosestParentOfType(node, [
						"BlockStatement",
						"ReturnStatement",
						"ArrowFunctionExpression",
					]) || {};

				// if our parent is a return we know we're ok
				if (closestBlock.type === "ReturnStatement") {
					return;
				}

				// arrow functions don't always have blocks and implicitly return
				if (closestBlock.type === "ArrowFunctionExpression") {
					return;
				}

				// block statements are part of functions and most if statements
				if (closestBlock.type === "BlockStatement") {
					// find the last item in the block
					const lastItem = closestBlock.body.at(-1);

					// if the callback is the last thing in a block that might be ok
					if (isCallbackExpression(node, lastItem)) {
						const parentType = closestBlock.parent.type;

						// but only if the block is part of a function
						if (
							parentType === "FunctionExpression" ||
							parentType === "FunctionDeclaration" ||
							parentType === "ArrowFunctionExpression"
						) {
							return;
						}
					}

					// ending a block with a return is also ok
					if (lastItem.type === "ReturnStatement") {
						// but only if the callback is immediately before
						if (
							isCallbackExpression(node, closestBlock.body.at(-2))
						) {
							return;
						}
					}
				}

				// as long as you're the child of a function at this point you should be asked to return
				if (
					findClosestParentOfType(node, [
						"FunctionDeclaration",
						"FunctionExpression",
						"ArrowFunctionExpression",
					])
				) {
					context.report({ node, messageId: "missingReturn" });
				}
			},
		};
	},
};

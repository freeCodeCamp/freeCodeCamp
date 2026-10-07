/**
 * @fileoverview Rule to enforce getter and setter pairs in objects and classes.
 * @author Gyandeep Singh
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/**
 * Property name if it can be computed statically, otherwise the list of the tokens of the key node.
 * @typedef {string|Token[]} Key
 */

/**
 * Accessor nodes with the same key.
 * @typedef {Object} AccessorData
 * @property {Key} key Accessor's key
 * @property {ASTNode[]} getters List of getter nodes.
 * @property {ASTNode[]} setters List of setter nodes.
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not the given lists represent the equal tokens in the same order.
 * Tokens are compared by their properties, not by instance.
 * @param {Token[]} left First list of tokens.
 * @param {Token[]} right Second list of tokens.
 * @returns {boolean} `true` if the lists have same tokens.
 */
function areEqualTokenLists(left, right) {
	if (left.length !== right.length) {
		return false;
	}

	for (let i = 0; i < left.length; i++) {
		const leftToken = left[i],
			rightToken = right[i];

		if (
			leftToken.type !== rightToken.type ||
			leftToken.value !== rightToken.value
		) {
			return false;
		}
	}

	return true;
}

/**
 * Checks whether or not the given keys are equal.
 * @param {Key} left First key.
 * @param {Key} right Second key.
 * @returns {boolean} `true` if the keys are equal.
 */
function areEqualKeys(left, right) {
	if (typeof left === "string" && typeof right === "string") {
		// Statically computed names.
		return left === right;
	}
	if (Array.isArray(left) && Array.isArray(right)) {
		// Token lists.
		return areEqualTokenLists(left, right);
	}

	return false;
}

/**
 * Checks whether or not a given node is of an accessor kind ('get' or 'set').
 * @param {ASTNode} node A node to check.
 * @returns {boolean} `true` if the node is of an accessor kind.
 */
function isAccessorKind(node) {
	return node.kind === "get" || node.kind === "set";
}

/**
 * Checks whether or not a given node is an argument of a specified method call.
 * @param {ASTNode} node A node to check.
 * @param {number} index An expected index of the node in arguments.
 * @param {string} object An expected name of the object of the method.
 * @param {string} property An expected name of the method.
 * @returns {boolean} `true` if the node is an argument of the specified method call.
 */
function isArgumentOfMethodCall(node, index, object, property) {
	const parent = node.parent;

	return (
		parent.type === "CallExpression" &&
		astUtils.isSpecificMemberAccess(parent.callee, object, property) &&
		parent.arguments[index] === node
	);
}

/**
 * Checks whether or not a given node is a property descriptor.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} `true` if the node is a property descriptor.
 */
function isPropertyDescriptor(node) {
	// Object.defineProperty(obj, "foo", {set: ...})
	if (
		isArgumentOfMethodCall(node, 2, "Object", "defineProperty") ||
		isArgumentOfMethodCall(node, 2, "Reflect", "defineProperty")
	) {
		return true;
	}

	/*
	 * Object.defineProperties(obj, {foo: {set: ...}})
	 * Object.create(proto, {foo: {set: ...}})
	 */
	const grandparent = node.parent.parent;

	return (
		grandparent.type === "ObjectExpression" &&
		(isArgumentOfMethodCall(grandparent, 1, "Object", "create") ||
			isArgumentOfMethodCall(
				grandparent,
				1,
				"Object",
				"defineProperties",
			))
	);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [
			{
				enforceForTSTypes: false,
				enforceForClassMembers: true,
				getWithoutSet: false,
				setWithoutGet: true,
			},
		],

		docs: {
			description:
				"Enforce getter and setter pairs in objects and classes",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/accessor-pairs",
		},

		schema: [
			{
				type: "object",
				properties: {
					getWithoutSet: {
						type: "boolean",
					},
					setWithoutGet: {
						type: "boolean",
					},
					enforceForClassMembers: {
						type: "boolean",
					},
					enforceForTSTypes: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			missingGetterInPropertyDescriptor:
				"Getter is not present in property descriptor.",
			missingSetterInPropertyDescriptor:
				"Setter is not present in property descriptor.",
			missingGetterInObjectLiteral:
				"Getter is not present for {{ name }}.",
			missingSetterInObjectLiteral:
				"Setter is not present for {{ name }}.",
			missingGetterInClass: "Getter is not present for class {{ name }}.",
			missingSetterInClass: "Setter is not present for class {{ name }}.",
			missingGetterInType: "Getter is not present for type {{ name }}.",
			missingSetterInType: "Setter is not present for type {{ name }}.",
		},
	},
	create(context) {
		const [
			{
				getWithoutSet: checkGetWithoutSet,
				setWithoutGet: checkSetWithoutGet,
				enforceForClassMembers,
				enforceForTSTypes,
			},
		] = context.options;
		const sourceCode = context.sourceCode;

		/**
		 * Reports the given node.
		 * @param {ASTNode} node The node to report.
		 * @param {string} messageKind "missingGetter" or "missingSetter".
		 * @returns {void}
		 * @private
		 */
		function report(node, messageKind) {
			if (node.type === "Property") {
				context.report({
					node,
					messageId: `${messageKind}InObjectLiteral`,
					loc: astUtils.getFunctionHeadLoc(node.value, sourceCode),
					data: {
						name: astUtils.getFunctionNameWithKind(node.value),
					},
				});
			} else if (node.type === "MethodDefinition") {
				context.report({
					node,
					messageId: `${messageKind}InClass`,
					loc: astUtils.getFunctionHeadLoc(node.value, sourceCode),
					data: {
						name: astUtils.getFunctionNameWithKind(node.value),
					},
				});
			} else if (node.type === "TSMethodSignature") {
				context.report({
					node,
					messageId: `${messageKind}InType`,
					loc: astUtils.getFunctionHeadLoc(node, sourceCode),
					data: {
						name: astUtils.getFunctionNameWithKind(node),
					},
				});
			} else {
				context.report({
					node,
					messageId: `${messageKind}InPropertyDescriptor`,
				});
			}
		}

		/**
		 * Reports each of the nodes in the given list using the same messageId.
		 * @param {ASTNode[]} nodes Nodes to report.
		 * @param {string} messageKind "missingGetter" or "missingSetter".
		 * @returns {void}
		 * @private
		 */
		function reportList(nodes, messageKind) {
			for (const node of nodes) {
				report(node, messageKind);
			}
		}

		/**
		 * Checks accessor pairs in the given list of nodes.
		 * @param {ASTNode[]} nodes The list to check.
		 * @returns {void}
		 * @private
		 */
		function checkList(nodes) {
			const accessors = [];
			let found = false;

			for (let i = 0; i < nodes.length; i++) {
				const node = nodes[i];

				if (isAccessorKind(node)) {
					// Creates a new `AccessorData` object for the given getter or setter node.
					const name = astUtils.getStaticPropertyName(node);
					const key =
						name !== null ? name : sourceCode.getTokens(node.key);

					// Merges the given `AccessorData` object into the given accessors list.
					for (let j = 0; j < accessors.length; j++) {
						const accessor = accessors[j];

						if (areEqualKeys(accessor.key, key)) {
							accessor.getters.push(
								...(node.kind === "get" ? [node] : []),
							);
							accessor.setters.push(
								...(node.kind === "set" ? [node] : []),
							);
							found = true;
							break;
						}
					}
					if (!found) {
						accessors.push({
							key,
							getters: node.kind === "get" ? [node] : [],
							setters: node.kind === "set" ? [node] : [],
						});
					}
					found = false;
				}
			}

			for (const { getters, setters } of accessors) {
				if (checkSetWithoutGet && setters.length && !getters.length) {
					reportList(setters, "missingGetter");
				}
				if (checkGetWithoutSet && getters.length && !setters.length) {
					reportList(getters, "missingSetter");
				}
			}
		}

		/**
		 * Checks accessor pairs in an object literal.
		 * @param {ASTNode} node `ObjectExpression` node to check.
		 * @returns {void}
		 * @private
		 */
		function checkObjectLiteral(node) {
			checkList(node.properties.filter(p => p.type === "Property"));
		}

		/**
		 * Checks accessor pairs in a property descriptor.
		 * @param {ASTNode} node Property descriptor `ObjectExpression` node to check.
		 * @returns {void}
		 * @private
		 */
		function checkPropertyDescriptor(node) {
			const namesToCheck = new Set(
				node.properties
					.filter(
						p =>
							p.type === "Property" &&
							p.kind === "init" &&
							!p.computed,
					)
					.map(({ key }) => key.name),
			);

			const hasGetter = namesToCheck.has("get");
			const hasSetter = namesToCheck.has("set");

			if (checkSetWithoutGet && hasSetter && !hasGetter) {
				report(node, "missingGetter");
			}
			if (checkGetWithoutSet && hasGetter && !hasSetter) {
				report(node, "missingSetter");
			}
		}

		/**
		 * Checks the given object expression as an object literal and as a possible property descriptor.
		 * @param {ASTNode} node `ObjectExpression` node to check.
		 * @returns {void}
		 * @private
		 */
		function checkObjectExpression(node) {
			checkObjectLiteral(node);
			if (isPropertyDescriptor(node)) {
				checkPropertyDescriptor(node);
			}
		}

		/**
		 * Checks the given class body.
		 * @param {ASTNode} node `ClassBody` node to check.
		 * @returns {void}
		 * @private
		 */
		function checkClassBody(node) {
			const methodDefinitions = node.body.filter(
				m => m.type === "MethodDefinition",
			);

			checkList(methodDefinitions.filter(m => m.static));
			checkList(methodDefinitions.filter(m => !m.static));
		}

		/**
		 * Checks the given type.
		 * @param {ASTNode} node `TSTypeLiteral` or `TSInterfaceBody` node to check.
		 * @returns {void}
		 * @private
		 */
		function checkType(node) {
			const members =
				node.type === "TSTypeLiteral" ? node.members : node.body;
			const methodDefinitions = members.filter(
				m => m.type === "TSMethodSignature",
			);

			checkList(methodDefinitions);
		}

		const listeners = {};

		if (checkSetWithoutGet || checkGetWithoutSet) {
			listeners.ObjectExpression = checkObjectExpression;
			if (enforceForClassMembers) {
				listeners.ClassBody = checkClassBody;
			}
			if (enforceForTSTypes) {
				listeners["TSTypeLiteral, TSInterfaceBody"] = checkType;
			}
		}

		return listeners;
	},
};

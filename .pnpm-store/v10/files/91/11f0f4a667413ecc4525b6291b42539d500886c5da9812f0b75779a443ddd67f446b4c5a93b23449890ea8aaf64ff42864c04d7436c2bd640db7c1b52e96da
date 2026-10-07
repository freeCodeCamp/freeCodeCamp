/**
 * @fileoverview Rule to require grouped accessor pairs in object literals and classes
 * @author Milos Djermanovic
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

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [
			"anyOrder",
			{
				enforceForTSTypes: false,
			},
		],

		docs: {
			description:
				"Require grouped accessor pairs in object literals and classes",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/grouped-accessor-pairs",
		},

		schema: [
			{ enum: ["anyOrder", "getBeforeSet", "setBeforeGet"] },
			{
				type: "object",
				properties: {
					enforceForTSTypes: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			notGrouped:
				"Accessor pair {{ formerName }} and {{ latterName }} should be grouped.",
			invalidOrder:
				"Expected {{ latterName }} to be before {{ formerName }}.",
		},
	},

	create(context) {
		const [order, { enforceForTSTypes }] = context.options;
		const { sourceCode } = context;

		/**
		 * Reports the given accessor pair.
		 * @param {string} messageId messageId to report.
		 * @param {ASTNode} formerNode getter/setter node that is defined before `latterNode`.
		 * @param {ASTNode} latterNode getter/setter node that is defined after `formerNode`.
		 * @returns {void}
		 * @private
		 */
		function report(messageId, formerNode, latterNode) {
			context.report({
				node: latterNode,
				messageId,
				loc: astUtils.getFunctionHeadLoc(
					latterNode.type !== "TSMethodSignature"
						? latterNode.value
						: latterNode,
					sourceCode,
				),
				data: {
					formerName: astUtils.getFunctionNameWithKind(
						formerNode.type !== "TSMethodSignature"
							? formerNode.value
							: formerNode,
					),
					latterName: astUtils.getFunctionNameWithKind(
						latterNode.type !== "TSMethodSignature"
							? latterNode.value
							: latterNode,
					),
				},
			});
		}

		/**
		 * Checks accessor pairs in the given list of nodes.
		 * @param {ASTNode[]} nodes The list to check.
		 * @param {Function} shouldCheck – Predicate that returns `true` if the node should be checked.
		 * @returns {void}
		 * @private
		 */
		function checkList(nodes, shouldCheck) {
			const accessors = [];
			let found = false;

			for (let i = 0; i < nodes.length; i++) {
				const node = nodes[i];

				if (shouldCheck(node) && isAccessorKind(node)) {
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
				// Don't report accessor properties that have duplicate getters or setters.
				if (getters.length === 1 && setters.length === 1) {
					const [getter] = getters,
						[setter] = setters,
						getterIndex = nodes.indexOf(getter),
						setterIndex = nodes.indexOf(setter),
						formerNode =
							getterIndex < setterIndex ? getter : setter,
						latterNode =
							getterIndex < setterIndex ? setter : getter;

					if (Math.abs(getterIndex - setterIndex) > 1) {
						report("notGrouped", formerNode, latterNode);
					} else if (
						(order === "getBeforeSet" &&
							getterIndex > setterIndex) ||
						(order === "setBeforeGet" && getterIndex < setterIndex)
					) {
						report("invalidOrder", formerNode, latterNode);
					}
				}
			}
		}

		return {
			ObjectExpression(node) {
				checkList(node.properties, n => n.type === "Property");
			},
			ClassBody(node) {
				checkList(
					node.body,
					n => n.type === "MethodDefinition" && !n.static,
				);
				checkList(
					node.body,
					n => n.type === "MethodDefinition" && n.static,
				);
			},
			"TSTypeLiteral, TSInterfaceBody"(node) {
				if (enforceForTSTypes) {
					checkList(
						node.type === "TSTypeLiteral"
							? node.members
							: node.body,
						n => n.type === "TSMethodSignature",
					);
				}
			},
		};
	},
};

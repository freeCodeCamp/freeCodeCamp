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

        if (leftToken.type !== rightToken.type || leftToken.value !== rightToken.value) {
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

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "require grouped accessor pairs in object literals and classes",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/grouped-accessor-pairs"
        },

        schema: [
            {
                enum: ["anyOrder", "getBeforeSet", "setBeforeGet"]
            }
        ],

        messages: {
            notGrouped: "Accessor pair {{ formerName }} and {{ latterName }} should be grouped.",
            invalidOrder: "Expected {{ latterName }} to be before {{ formerName }}."
        }
    },

    create(context) {
        const order = context.options[0] || "anyOrder";
        const sourceCode = context.getSourceCode();

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
                loc: astUtils.getFunctionHeadLoc(latterNode.value, sourceCode),
                data: {
                    formerName: astUtils.getFunctionNameWithKind(formerNode.value),
                    latterName: astUtils.getFunctionNameWithKind(latterNode.value)
                }
            });
        }

        /**
         * Creates a new `AccessorData` object for the given getter or setter node.
         * @param {ASTNode} node A getter or setter node.
         * @returns {AccessorData} New `AccessorData` object that contains the given node.
         * @private
         */
        function createAccessorData(node) {
            const name = astUtils.getStaticPropertyName(node);
            const key = (name !== null) ? name : sourceCode.getTokens(node.key);

            return {
                key,
                getters: node.kind === "get" ? [node] : [],
                setters: node.kind === "set" ? [node] : []
            };
        }

        /**
         * Merges the given `AccessorData` object into the given accessors list.
         * @param {AccessorData[]} accessors The list to merge into.
         * @param {AccessorData} accessorData The object to merge.
         * @returns {AccessorData[]} The same instance with the merged object.
         * @private
         */
        function mergeAccessorData(accessors, accessorData) {
            const equalKeyElement = accessors.find(a => areEqualKeys(a.key, accessorData.key));

            if (equalKeyElement) {
                equalKeyElement.getters.push(...accessorData.getters);
                equalKeyElement.setters.push(...accessorData.setters);
            } else {
                accessors.push(accessorData);
            }

            return accessors;
        }

        /**
         * Checks accessor pairs in the given list of nodes.
         * @param {ASTNode[]} nodes The list to check.
         * @param {Function} shouldCheck – Predicate that returns `true` if the node should be checked.
         * @returns {void}
         * @private
         */
        function checkList(nodes, shouldCheck) {
            const accessors = nodes
                .filter(shouldCheck)
                .filter(isAccessorKind)
                .map(createAccessorData)
                .reduce(mergeAccessorData, []);

            for (const { getters, setters } of accessors) {

                // Don't report accessor properties that have duplicate getters or setters.
                if (getters.length === 1 && setters.length === 1) {
                    const [getter] = getters,
                        [setter] = setters,
                        getterIndex = nodes.indexOf(getter),
                        setterIndex = nodes.indexOf(setter),
                        formerNode = getterIndex < setterIndex ? getter : setter,
                        latterNode = getterIndex < setterIndex ? setter : getter;

                    if (Math.abs(getterIndex - setterIndex) > 1) {
                        report("notGrouped", formerNode, latterNode);
                    } else if (
                        (order === "getBeforeSet" && getterIndex > setterIndex) ||
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
                checkList(node.body, n => n.type === "MethodDefinition" && !n.static);
                checkList(node.body, n => n.type === "MethodDefinition" && n.static);
            }
        };
    }
};

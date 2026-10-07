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
    if (isArgumentOfMethodCall(node, 2, "Object", "defineProperty") ||
        isArgumentOfMethodCall(node, 2, "Reflect", "defineProperty")
    ) {
        return true;
    }

    /*
     * Object.defineProperties(obj, {foo: {set: ...}})
     * Object.create(proto, {foo: {set: ...}})
     */
    const grandparent = node.parent.parent;

    return grandparent.type === "ObjectExpression" && (
        isArgumentOfMethodCall(grandparent, 1, "Object", "create") ||
        isArgumentOfMethodCall(grandparent, 1, "Object", "defineProperties")
    );
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "enforce getter and setter pairs in objects and classes",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/accessor-pairs"
        },

        schema: [{
            type: "object",
            properties: {
                getWithoutSet: {
                    type: "boolean",
                    default: false
                },
                setWithoutGet: {
                    type: "boolean",
                    default: true
                },
                enforceForClassMembers: {
                    type: "boolean",
                    default: true
                }
            },
            additionalProperties: false
        }],

        messages: {
            missingGetterInPropertyDescriptor: "Getter is not present in property descriptor.",
            missingSetterInPropertyDescriptor: "Setter is not present in property descriptor.",
            missingGetterInObjectLiteral: "Getter is not present for {{ name }}.",
            missingSetterInObjectLiteral: "Setter is not present for {{ name }}.",
            missingGetterInClass: "Getter is not present for class {{ name }}.",
            missingSetterInClass: "Setter is not present for class {{ name }}."
        }
    },
    create(context) {
        const config = context.options[0] || {};
        const checkGetWithoutSet = config.getWithoutSet === true;
        const checkSetWithoutGet = config.setWithoutGet !== false;
        const enforceForClassMembers = config.enforceForClassMembers !== false;
        const sourceCode = context.getSourceCode();

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
                    data: { name: astUtils.getFunctionNameWithKind(node.value) }
                });
            } else if (node.type === "MethodDefinition") {
                context.report({
                    node,
                    messageId: `${messageKind}InClass`,
                    loc: astUtils.getFunctionHeadLoc(node.value, sourceCode),
                    data: { name: astUtils.getFunctionNameWithKind(node.value) }
                });
            } else {
                context.report({
                    node,
                    messageId: `${messageKind}InPropertyDescriptor`
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
         * @returns {void}
         * @private
         */
        function checkList(nodes) {
            const accessors = nodes
                .filter(isAccessorKind)
                .map(createAccessorData)
                .reduce(mergeAccessorData, []);

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
            const namesToCheck = node.properties
                .filter(p => p.type === "Property" && p.kind === "init" && !p.computed)
                .map(({ key }) => key.name);

            const hasGetter = namesToCheck.includes("get");
            const hasSetter = namesToCheck.includes("set");

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
            const methodDefinitions = node.body.filter(m => m.type === "MethodDefinition");

            checkList(methodDefinitions.filter(m => m.static));
            checkList(methodDefinitions.filter(m => !m.static));
        }

        const listeners = {};

        if (checkSetWithoutGet || checkGetWithoutSet) {
            listeners.ObjectExpression = checkObjectExpression;
            if (enforceForClassMembers) {
                listeners.ClassBody = checkClassBody;
            }
        }

        return listeners;
    }
};

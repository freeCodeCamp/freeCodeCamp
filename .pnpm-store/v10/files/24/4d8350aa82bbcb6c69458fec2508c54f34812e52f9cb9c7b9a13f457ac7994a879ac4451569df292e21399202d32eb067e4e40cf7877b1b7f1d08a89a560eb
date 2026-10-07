/**
 * @fileoverview Rule to disallow returning values from setters
 * @author Milos Djermanovic
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");
const { findVariable } = require("eslint-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Determines whether the given identifier node is a reference to a global variable.
 * @param {ASTNode} node `Identifier` node to check.
 * @param {Scope} scope Scope to which the node belongs.
 * @returns {boolean} True if the identifier is a reference to a global variable.
 */
function isGlobalReference(node, scope) {
    const variable = findVariable(scope, node);

    return variable !== null && variable.scope.type === "global" && variable.defs.length === 0;
}

/**
 * Determines whether the given node is an argument of the specified global method call, at the given `index` position.
 * E.g., for given `index === 1`, this function checks for `objectName.methodName(foo, node)`, where objectName is a global variable.
 * @param {ASTNode} node The node to check.
 * @param {Scope} scope Scope to which the node belongs.
 * @param {string} objectName Name of the global object.
 * @param {string} methodName Name of the method.
 * @param {number} index The given position.
 * @returns {boolean} `true` if the node is argument at the given position.
 */
function isArgumentOfGlobalMethodCall(node, scope, objectName, methodName, index) {
    const callNode = node.parent;

    return callNode.type === "CallExpression" &&
        callNode.arguments[index] === node &&
        astUtils.isSpecificMemberAccess(callNode.callee, objectName, methodName) &&
        isGlobalReference(astUtils.skipChainExpression(callNode.callee).object, scope);
}

/**
 * Determines whether the given node is used as a property descriptor.
 * @param {ASTNode} node The node to check.
 * @param {Scope} scope Scope to which the node belongs.
 * @returns {boolean} `true` if the node is a property descriptor.
 */
function isPropertyDescriptor(node, scope) {
    if (
        isArgumentOfGlobalMethodCall(node, scope, "Object", "defineProperty", 2) ||
        isArgumentOfGlobalMethodCall(node, scope, "Reflect", "defineProperty", 2)
    ) {
        return true;
    }

    const parent = node.parent;

    if (
        parent.type === "Property" &&
        parent.value === node
    ) {
        const grandparent = parent.parent;

        if (
            grandparent.type === "ObjectExpression" &&
            (
                isArgumentOfGlobalMethodCall(grandparent, scope, "Object", "create", 1) ||
                isArgumentOfGlobalMethodCall(grandparent, scope, "Object", "defineProperties", 1)
            )
        ) {
            return true;
        }
    }

    return false;
}

/**
 * Determines whether the given function node is used as a setter function.
 * @param {ASTNode} node The node to check.
 * @param {Scope} scope Scope to which the node belongs.
 * @returns {boolean} `true` if the node is a setter.
 */
function isSetter(node, scope) {
    const parent = node.parent;

    if (
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
        isPropertyDescriptor(parent.parent, scope)
    ) {

        // Setter in a property descriptor
        return true;
    }

    return false;
}

/**
 * Finds function's outer scope.
 * @param {Scope} scope Function's own scope.
 * @returns {Scope} Function's outer scope.
 */
function getOuterScope(scope) {
    const upper = scope.upper;

    if (upper.type === "function-expression-name") {
        return upper.upper;
    }

    return upper;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow returning values from setters",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-setter-return"
        },

        schema: [],

        messages: {
            returnsValue: "Setter cannot return a value."
        }
    },

    create(context) {
        let funcInfo = null;

        /**
         * Creates and pushes to the stack a function info object for the given function node.
         * @param {ASTNode} node The function node.
         * @returns {void}
         */
        function enterFunction(node) {
            const outerScope = getOuterScope(context.getScope());

            funcInfo = {
                upper: funcInfo,
                isSetter: isSetter(node, outerScope)
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
            }
        };
    }
};

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
const TARGET_METHODS = /^(?:every|filter|find(?:Index)?|flatMap|forEach|map|reduce(?:Right)?|some|sort)$/u;

/**
 * Checks a given code path segment is reachable.
 * @param {CodePathSegment} segment A segment to check.
 * @returns {boolean} `true` if the segment is reachable.
 */
function isReachable(segment) {
    return segment.reachable;
}

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

    /* istanbul ignore next: unreachable */
    return null;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "enforce `return` statements in callbacks of array methods",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/array-callback-return"
        },

        schema: [
            {
                type: "object",
                properties: {
                    allowImplicit: {
                        type: "boolean",
                        default: false
                    },
                    checkForEach: {
                        type: "boolean",
                        default: false
                    }
                },
                additionalProperties: false
            }
        ],

        messages: {
            expectedAtEnd: "{{arrayMethodName}}() expects a value to be returned at the end of {{name}}.",
            expectedInside: "{{arrayMethodName}}() expects a return value from {{name}}.",
            expectedReturnValue: "{{arrayMethodName}}() expects a return value from {{name}}.",
            expectedNoReturnValue: "{{arrayMethodName}}() expects no useless return value from {{name}}."
        }
    },

    create(context) {

        const options = context.options[0] || { allowImplicit: false, checkForEach: false };
        const sourceCode = context.getSourceCode();

        let funcInfo = {
            arrayMethodName: null,
            upper: null,
            codePath: null,
            hasReturn: false,
            shouldCheck: false,
            node: null
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

            let messageId = null;

            if (funcInfo.arrayMethodName === "forEach") {
                if (options.checkForEach && node.type === "ArrowFunctionExpression" && node.expression) {
                    messageId = "expectedNoReturnValue";
                }
            } else {
                if (node.body.type === "BlockStatement" && funcInfo.codePath.currentSegments.some(isReachable)) {
                    messageId = funcInfo.hasReturn ? "expectedAtEnd" : "expectedInside";
                }
            }

            if (messageId) {
                const name = astUtils.getFunctionNameWithKind(node);

                context.report({
                    node,
                    loc: astUtils.getFunctionHeadLoc(node, sourceCode),
                    messageId,
                    data: { name, arrayMethodName: fullMethodName(funcInfo.arrayMethodName) }
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
                    shouldCheck:
                        methodName &&
                        !node.async &&
                        !node.generator,
                    node
                };
            },

            // Pops this function's information.
            onCodePathEnd() {
                funcInfo = funcInfo.upper;
            },

            // Checks the return statement is valid.
            ReturnStatement(node) {

                if (!funcInfo.shouldCheck) {
                    return;
                }

                funcInfo.hasReturn = true;

                let messageId = null;

                if (funcInfo.arrayMethodName === "forEach") {

                    // if checkForEach: true, returning a value at any path inside a forEach is not allowed
                    if (options.checkForEach && node.argument) {
                        messageId = "expectedNoReturnValue";
                    }
                } else {

                    // if allowImplicit: false, should also check node.argument
                    if (!options.allowImplicit && !node.argument) {
                        messageId = "expectedReturnValue";
                    }
                }

                if (messageId) {
                    context.report({
                        node,
                        messageId,
                        data: {
                            name: astUtils.getFunctionNameWithKind(funcInfo.node),
                            arrayMethodName: fullMethodName(funcInfo.arrayMethodName)
                        }
                    });
                }
            },

            // Reports a given function if the last path is reachable.
            "FunctionExpression:exit": checkLastSegment,
            "ArrowFunctionExpression:exit": checkLastSegment
        };
    }
};

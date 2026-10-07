/**
 * @fileoverview Enforces that a return statement is present in property getters.
 * @author Aladdin-ADD(hh_2013@foxmail.com)
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

/**
 * Checks a given code path segment is reachable.
 * @param {CodePathSegment} segment A segment to check.
 * @returns {boolean} `true` if the segment is reachable.
 */
function isReachable(segment) {
    return segment.reachable;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "enforce `return` statements in getters",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/getter-return"
        },

        fixable: null,

        schema: [
            {
                type: "object",
                properties: {
                    allowImplicit: {
                        type: "boolean",
                        default: false
                    }
                },
                additionalProperties: false
            }
        ],

        messages: {
            expected: "Expected to return a value in {{name}}.",
            expectedAlways: "Expected {{name}} to always return a value."
        }
    },

    create(context) {

        const options = context.options[0] || { allowImplicit: false };
        const sourceCode = context.getSourceCode();

        let funcInfo = {
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
            if (funcInfo.shouldCheck &&
                funcInfo.codePath.currentSegments.some(isReachable)
            ) {
                context.report({
                    node,
                    loc: astUtils.getFunctionHeadLoc(node, sourceCode),
                    messageId: funcInfo.hasReturn ? "expectedAlways" : "expected",
                    data: {
                        name: astUtils.getFunctionNameWithKind(funcInfo.node)
                    }
                });
            }
        }

        /**
         * Checks whether a node means a getter function.
         * @param {ASTNode} node a node to check.
         * @returns {boolean} if node means a getter, return true; else return false.
         */
        function isGetter(node) {
            const parent = node.parent;

            if (TARGET_NODE_TYPE.test(node.type) && node.body.type === "BlockStatement") {
                if (parent.kind === "get") {
                    return true;
                }
                if (parent.type === "Property" && astUtils.getStaticPropertyName(parent) === "get" && parent.parent.type === "ObjectExpression") {

                    // Object.defineProperty()
                    if (parent.parent.parent.type === "CallExpression" &&
                        astUtils.getStaticPropertyName(parent.parent.parent.callee) === "defineProperty") {
                        return true;
                    }

                    // Object.defineProperties()
                    if (parent.parent.parent.type === "Property" &&
                        parent.parent.parent.parent.type === "ObjectExpression" &&
                        parent.parent.parent.parent.parent.type === "CallExpression" &&
                        astUtils.getStaticPropertyName(parent.parent.parent.parent.parent.callee) === "defineProperties") {
                        return true;
                    }
                }
            }
            return false;
        }
        return {

            // Stacks this function's information.
            onCodePathStart(codePath, node) {
                funcInfo = {
                    upper: funcInfo,
                    codePath,
                    hasReturn: false,
                    shouldCheck: isGetter(node),
                    node
                };
            },

            // Pops this function's information.
            onCodePathEnd() {
                funcInfo = funcInfo.upper;
            },

            // Checks the return statement is valid.
            ReturnStatement(node) {
                if (funcInfo.shouldCheck) {
                    funcInfo.hasReturn = true;

                    // if allowImplicit: false, should also check node.argument
                    if (!options.allowImplicit && !node.argument) {
                        context.report({
                            node,
                            messageId: "expected",
                            data: {
                                name: astUtils.getFunctionNameWithKind(funcInfo.node)
                            }
                        });
                    }
                }
            },

            // Reports a given function if the last path is reachable.
            "FunctionExpression:exit": checkLastSegment,
            "ArrowFunctionExpression:exit": checkLastSegment
        };
    }
};

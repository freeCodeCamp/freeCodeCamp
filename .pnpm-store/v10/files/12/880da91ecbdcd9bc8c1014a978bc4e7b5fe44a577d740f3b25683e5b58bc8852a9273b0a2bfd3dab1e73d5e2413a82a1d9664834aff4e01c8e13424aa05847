/**
 * @fileoverview Rule to disallow returning values from Promise executor functions
 * @author Milos Djermanovic
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { findVariable } = require("eslint-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const functionTypesToCheck = new Set(["ArrowFunctionExpression", "FunctionExpression"]);

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

/**
 * Determines whether the given function node is used as a Promise executor.
 * @param {ASTNode} node The node to check.
 * @param {Scope} scope Function's own scope.
 * @returns {boolean} `true` if the node is a Promise executor.
 */
function isPromiseExecutor(node, scope) {
    const parent = node.parent;

    return parent.type === "NewExpression" &&
        parent.arguments[0] === node &&
        parent.callee.type === "Identifier" &&
        parent.callee.name === "Promise" &&
        isGlobalReference(parent.callee, getOuterScope(scope));
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow returning values from Promise executor functions",
            category: "Possible Errors",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-promise-executor-return"
        },

        schema: [],

        messages: {
            returnsValue: "Return values from promise executor functions cannot be read."
        }
    },

    create(context) {

        let funcInfo = null;

        /**
         * Reports the given node.
         * @param {ASTNode} node Node to report.
         * @returns {void}
         */
        function report(node) {
            context.report({ node, messageId: "returnsValue" });
        }

        return {

            onCodePathStart(_, node) {
                funcInfo = {
                    upper: funcInfo,
                    shouldCheck: functionTypesToCheck.has(node.type) && isPromiseExecutor(node, context.getScope())
                };

                if (funcInfo.shouldCheck && node.type === "ArrowFunctionExpression" && node.expression) {
                    report(node.body);
                }
            },

            onCodePathEnd() {
                funcInfo = funcInfo.upper;
            },

            ReturnStatement(node) {
                if (funcInfo.shouldCheck && node.argument) {
                    report(node);
                }
            }
        };
    }
};

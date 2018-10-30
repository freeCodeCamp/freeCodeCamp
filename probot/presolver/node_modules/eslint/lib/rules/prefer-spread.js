/**
 * @fileoverview A rule to suggest using of the spread operator instead of `.apply()`.
 * @author Toru Nagashima
 */

"use strict";

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a node is a `.apply()` for variadic.
 * @param {ASTNode} node - A CallExpression node to check.
 * @returns {boolean} Whether or not the node is a `.apply()` for variadic.
 */
function isVariadicApplyCalling(node) {
    return (
        node.callee.type === "MemberExpression" &&
        node.callee.property.type === "Identifier" &&
        node.callee.property.name === "apply" &&
        node.callee.computed === false &&
        node.arguments.length === 2 &&
        node.arguments[1].type !== "ArrayExpression" &&
        node.arguments[1].type !== "SpreadElement"
    );
}

/**
 * Checks whether or not the tokens of two given nodes are same.
 * @param {ASTNode} left - A node 1 to compare.
 * @param {ASTNode} right - A node 2 to compare.
 * @param {SourceCode} sourceCode - The ESLint source code object.
 * @returns {boolean} the source code for the given node.
 */
function equalTokens(left, right, sourceCode) {
    const tokensL = sourceCode.getTokens(left);
    const tokensR = sourceCode.getTokens(right);

    if (tokensL.length !== tokensR.length) {
        return false;
    }
    for (let i = 0; i < tokensL.length; ++i) {
        if (tokensL[i].type !== tokensR[i].type ||
            tokensL[i].value !== tokensR[i].value
        ) {
            return false;
        }
    }

    return true;
}

/**
 * Checks whether or not `thisArg` is not changed by `.apply()`.
 * @param {ASTNode|null} expectedThis - The node that is the owner of the applied function.
 * @param {ASTNode} thisArg - The node that is given to the first argument of the `.apply()`.
 * @param {RuleContext} context - The ESLint rule context object.
 * @returns {boolean} Whether or not `thisArg` is not changed by `.apply()`.
 */
function isValidThisArg(expectedThis, thisArg, context) {
    if (!expectedThis) {
        return astUtils.isNullOrUndefined(thisArg);
    }
    return equalTokens(expectedThis, thisArg, context);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require spread operators instead of `.apply()`",
            category: "ECMAScript 6",
            recommended: false
        },

        schema: [],

        fixable: "code"
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        return {
            CallExpression(node) {
                if (!isVariadicApplyCalling(node)) {
                    return;
                }

                const applied = node.callee.object;
                const expectedThis = (applied.type === "MemberExpression") ? applied.object : null;
                const thisArg = node.arguments[0];

                if (isValidThisArg(expectedThis, thisArg, sourceCode)) {
                    context.report({
                        node,
                        message: "Use the spread operator instead of '.apply()'.",
                        fix(fixer) {
                            if (expectedThis && expectedThis.type !== "Identifier") {

                                // Don't fix cases where the `this` value could be a computed expression.
                                return null;
                            }

                            const propertyDot = sourceCode.getFirstTokenBetween(applied, node.callee.property, token => token.value === ".");

                            return fixer.replaceTextRange([propertyDot.range[0], node.range[1]], `(...${sourceCode.getText(node.arguments[1])})`);
                        }
                    });
                }
            }
        };
    }
};

/**
 * @fileoverview Rule for disallowing require() outside of the top-level module context
 * @author Jamund Ferguson
 */

"use strict";

const ACCEPTABLE_PARENTS = [
    "AssignmentExpression",
    "VariableDeclarator",
    "MemberExpression",
    "ExpressionStatement",
    "CallExpression",
    "ConditionalExpression",
    "Program",
    "VariableDeclaration",
    "ChainExpression"
];

/**
 * Finds the eslint-scope reference in the given scope.
 * @param {Object} scope The scope to search.
 * @param {ASTNode} node The identifier node.
 * @returns {Reference|null} Returns the found reference or null if none were found.
 */
function findReference(scope, node) {
    const references = scope.references.filter(reference => reference.identifier.range[0] === node.range[0] &&
            reference.identifier.range[1] === node.range[1]);

    /* istanbul ignore else: correctly returns null */
    if (references.length === 1) {
        return references[0];
    }
    return null;

}

/**
 * Checks if the given identifier node is shadowed in the given scope.
 * @param {Object} scope The current scope.
 * @param {ASTNode} node The identifier node to check.
 * @returns {boolean} Whether or not the name is shadowed.
 */
function isShadowed(scope, node) {
    const reference = findReference(scope, node);

    return reference && reference.resolved && reference.resolved.defs.length > 0;
}

module.exports = {
    meta: {
        deprecated: true,

        replacedBy: [],

        type: "suggestion",

        docs: {
            description: "require `require()` calls to be placed at top-level module scope",
            category: "Node.js and CommonJS",
            recommended: false,
            url: "https://eslint.org/docs/rules/global-require"
        },

        schema: [],
        messages: {
            unexpected: "Unexpected require()."
        }
    },

    create(context) {
        return {
            CallExpression(node) {
                const currentScope = context.getScope();

                if (node.callee.name === "require" && !isShadowed(currentScope, node.callee)) {
                    const isGoodRequire = context.getAncestors().every(parent => ACCEPTABLE_PARENTS.indexOf(parent.type) > -1);

                    if (!isGoodRequire) {
                        context.report({ node, messageId: "unexpected" });
                    }
                }
            }
        };
    }
};

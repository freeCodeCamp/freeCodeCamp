/**
 * @fileoverview A rule to suggest using of const declaration for variables that are never reassigned after declared.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const PATTERN_TYPE = /^(?:.+?Pattern|RestElement|SpreadProperty|ExperimentalRestProperty|Property)$/;
const DECLARATION_HOST_TYPE = /^(?:Program|BlockStatement|SwitchCase)$/;
const DESTRUCTURING_HOST_TYPE = /^(?:VariableDeclarator|AssignmentExpression)$/;

/**
 * Adds multiple items to the tail of an array.
 *
 * @param {any[]} array - A destination to add.
 * @param {any[]} values - Items to be added.
 * @returns {void}
 */
const pushAll = Function.apply.bind(Array.prototype.push);

/**
 * Checks whether a given node is located at `ForStatement.init` or not.
 *
 * @param {ASTNode} node - A node to check.
 * @returns {boolean} `true` if the node is located at `ForStatement.init`.
 */
function isInitOfForStatement(node) {
    return node.parent.type === "ForStatement" && node.parent.init === node;
}

/**
 * Checks whether a given Identifier node becomes a VariableDeclaration or not.
 *
 * @param {ASTNode} identifier - An Identifier node to check.
 * @returns {boolean} `true` if the node can become a VariableDeclaration.
 */
function canBecomeVariableDeclaration(identifier) {
    let node = identifier.parent;

    while (PATTERN_TYPE.test(node.type)) {
        node = node.parent;
    }

    return (
        node.type === "VariableDeclarator" ||
        (
            node.type === "AssignmentExpression" &&
            node.parent.type === "ExpressionStatement" &&
            DECLARATION_HOST_TYPE.test(node.parent.parent.type)
        )
    );
}

/**
 * Gets an identifier node of a given variable.
 *
 * If the initialization exists or one or more reading references exist before
 * the first assignment, the identifier node is the node of the declaration.
 * Otherwise, the identifier node is the node of the first assignment.
 *
 * If the variable should not change to const, this function returns null.
 * - If the variable is reassigned.
 * - If the variable is never initialized nor assigned.
 * - If the variable is initialized in a different scope from the declaration.
 * - If the unique assignment of the variable cannot change to a declaration.
 *   e.g. `if (a) b = 1` / `return (b = 1)`
 * - If the variable is declared in the global scope and `eslintUsed` is `true`.
 *   `/*exported foo` directive comment makes such variables. This rule does not
 *   warn such variables because this rule cannot distinguish whether the
 *   exported variables are reassigned or not.
 *
 * @param {escope.Variable} variable - A variable to get.
 * @param {boolean} ignoreReadBeforeAssign -
 *      The value of `ignoreReadBeforeAssign` option.
 * @returns {ASTNode|null}
 *      An Identifier node if the variable should change to const.
 *      Otherwise, null.
 */
function getIdentifierIfShouldBeConst(variable, ignoreReadBeforeAssign) {
    if (variable.eslintUsed && variable.scope.type === "global") {
        return null;
    }

    /*
     * Due to a bug in acorn, code such as `let foo = 1; let foo = 2;` will not throw a syntax error. As a sanity
     * check, make sure that the variable only has one declaration. After the parsing bug is fixed, this check
     * will no longer be necessary, because variables declared with `let` or `const` should always have exactly one
     * declaration.
     * https://github.com/ternjs/acorn/issues/487
     */
    if (variable.defs.length > 1) {
        return null;
    }

    // Finds the unique WriteReference.
    let writer = null;
    let isReadBeforeInit = false;
    const references = variable.references;

    for (let i = 0; i < references.length; ++i) {
        const reference = references[i];

        if (reference.isWrite()) {
            const isReassigned = (
                writer !== null &&
                writer.identifier !== reference.identifier
            );

            if (isReassigned) {
                return null;
            }
            writer = reference;

        } else if (reference.isRead() && writer === null) {
            if (ignoreReadBeforeAssign) {
                return null;
            }
            isReadBeforeInit = true;
        }
    }

    // If the assignment is from a different scope, ignore it.
    // If the assignment cannot change to a declaration, ignore it.
    const shouldBeConst = (
        writer !== null &&
        writer.from === variable.scope &&
        canBecomeVariableDeclaration(writer.identifier)
    );

    if (!shouldBeConst) {
        return null;
    }
    if (isReadBeforeInit) {
        return variable.defs[0].name;
    }
    return writer.identifier;
}

/**
 * Gets the VariableDeclarator/AssignmentExpression node that a given reference
 * belongs to.
 * This is used to detect a mix of reassigned and never reassigned in a
 * destructuring.
 *
 * @param {escope.Reference} reference - A reference to get.
 * @returns {ASTNode|null} A VariableDeclarator/AssignmentExpression node or
 *      null.
 */
function getDestructuringHost(reference) {
    if (!reference.isWrite()) {
        return null;
    }
    let node = reference.identifier.parent;

    while (PATTERN_TYPE.test(node.type)) {
        node = node.parent;
    }

    if (!DESTRUCTURING_HOST_TYPE.test(node.type)) {
        return null;
    }
    return node;
}

/**
 * Groups by the VariableDeclarator/AssignmentExpression node that each
 * reference of given variables belongs to.
 * This is used to detect a mix of reassigned and never reassigned in a
 * destructuring.
 *
 * @param {escope.Variable[]} variables - Variables to group by destructuring.
 * @param {boolean} ignoreReadBeforeAssign -
 *      The value of `ignoreReadBeforeAssign` option.
 * @returns {Map<ASTNode, ASTNode[]>} Grouped identifier nodes.
 */
function groupByDestructuring(variables, ignoreReadBeforeAssign) {
    const identifierMap = new Map();

    for (let i = 0; i < variables.length; ++i) {
        const variable = variables[i];
        const references = variable.references;
        const identifier = getIdentifierIfShouldBeConst(variable, ignoreReadBeforeAssign);
        let prevId = null;

        for (let j = 0; j < references.length; ++j) {
            const reference = references[j];
            const id = reference.identifier;

            // Avoid counting a reference twice or more for default values of
            // destructuring.
            if (id === prevId) {
                continue;
            }
            prevId = id;

            // Add the identifier node into the destructuring group.
            const group = getDestructuringHost(reference);

            if (group) {
                if (identifierMap.has(group)) {
                    identifierMap.get(group).push(identifier);
                } else {
                    identifierMap.set(group, [identifier]);
                }
            }
        }
    }

    return identifierMap;
}

/**
 * Finds the nearest parent of node with a given type.
 *
 * @param {ASTNode} node – The node to search from.
 * @param {string} type – The type field of the parent node.
 * @param {Function} shouldStop – a predicate that returns true if the traversal should stop, and false otherwise.
 * @returns {ASTNode} The closest ancestor with the specified type; null if no such ancestor exists.
 */
function findUp(node, type, shouldStop) {
    if (!node || shouldStop(node)) {
        return null;
    }
    if (node.type === type) {
        return node;
    }
    return findUp(node.parent, type, shouldStop);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require `const` declarations for variables that are never reassigned after declared",
            category: "ECMAScript 6",
            recommended: false
        },

        fixable: "code",

        schema: [
            {
                type: "object",
                properties: {
                    destructuring: { enum: ["any", "all"] },
                    ignoreReadBeforeAssign: { type: "boolean" }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {
        const options = context.options[0] || {};
        const sourceCode = context.getSourceCode();
        const checkingMixedDestructuring = options.destructuring !== "all";
        const ignoreReadBeforeAssign = options.ignoreReadBeforeAssign === true;
        const variables = [];

        /**
         * Reports given identifier nodes if all of the nodes should be declared
         * as const.
         *
         * The argument 'nodes' is an array of Identifier nodes.
         * This node is the result of 'getIdentifierIfShouldBeConst()', so it's
         * nullable. In simple declaration or assignment cases, the length of
         * the array is 1. In destructuring cases, the length of the array can
         * be 2 or more.
         *
         * @param {(escope.Reference|null)[]} nodes -
         *      References which are grouped by destructuring to report.
         * @returns {void}
         */
        function checkGroup(nodes) {
            const nodesToReport = nodes.filter(Boolean);

            if (nodes.length && (checkingMixedDestructuring || nodesToReport.length === nodes.length)) {
                const varDeclParent = findUp(nodes[0], "VariableDeclaration", parentNode => parentNode.type.endsWith("Statement"));
                const shouldFix = varDeclParent &&

                    // If there are multiple variable declarations, like {let a = 1, b = 2}, then
                    // do not attempt to fix if one of the declarations should be `const`. It's
                    // too hard to know how the developer would want to automatically resolve the issue.
                    varDeclParent.declarations.length === 1 &&

                    // Don't do a fix unless the variable is initialized (or it's in a for-in or for-of loop)
                    (varDeclParent.parent.type === "ForInStatement" || varDeclParent.parent.type === "ForOfStatement" || varDeclParent.declarations[0].init) &&

                    // If options.destucturing is "all", then this warning will not occur unless
                    // every assignment in the destructuring should be const. In that case, it's safe
                    // to apply the fix.
                    nodesToReport.length === nodes.length;

                nodesToReport.forEach(node => {
                    context.report({
                        node,
                        message: "'{{name}}' is never reassigned. Use 'const' instead.",
                        data: node,
                        fix: shouldFix ? fixer => fixer.replaceText(sourceCode.getFirstToken(varDeclParent), "const") : null
                    });
                });
            }
        }

        return {
            "Program:exit"() {
                groupByDestructuring(variables, ignoreReadBeforeAssign).forEach(checkGroup);
            },

            VariableDeclaration(node) {
                if (node.kind === "let" && !isInitOfForStatement(node)) {
                    pushAll(variables, context.getDeclaredVariables(node));
                }
            }
        };
    }
};

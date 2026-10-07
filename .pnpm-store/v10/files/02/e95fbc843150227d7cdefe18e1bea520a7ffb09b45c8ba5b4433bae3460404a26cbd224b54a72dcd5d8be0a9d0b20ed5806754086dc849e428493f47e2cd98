/**
 * @fileoverview Rule to check for the usage of var.
 * @author Jamund Ferguson
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Check whether a given variable is a global variable or not.
 * @param {eslint-scope.Variable} variable The variable to check.
 * @returns {boolean} `true` if the variable is a global variable.
 */
function isGlobal(variable) {
    return Boolean(variable.scope) && variable.scope.type === "global";
}

/**
 * Finds the nearest function scope or global scope walking up the scope
 * hierarchy.
 * @param {eslint-scope.Scope} scope The scope to traverse.
 * @returns {eslint-scope.Scope} a function scope or global scope containing the given
 *      scope.
 */
function getEnclosingFunctionScope(scope) {
    let currentScope = scope;

    while (currentScope.type !== "function" && currentScope.type !== "global") {
        currentScope = currentScope.upper;
    }
    return currentScope;
}

/**
 * Checks whether the given variable has any references from a more specific
 * function expression (i.e. a closure).
 * @param {eslint-scope.Variable} variable A variable to check.
 * @returns {boolean} `true` if the variable is used from a closure.
 */
function isReferencedInClosure(variable) {
    const enclosingFunctionScope = getEnclosingFunctionScope(variable.scope);

    return variable.references.some(reference =>
        getEnclosingFunctionScope(reference.from) !== enclosingFunctionScope);
}

/**
 * Checks whether the given node is the assignee of a loop.
 * @param {ASTNode} node A VariableDeclaration node to check.
 * @returns {boolean} `true` if the declaration is assigned as part of loop
 *      iteration.
 */
function isLoopAssignee(node) {
    return (node.parent.type === "ForOfStatement" || node.parent.type === "ForInStatement") &&
        node === node.parent.left;
}

/**
 * Checks whether the given variable declaration is immediately initialized.
 * @param {ASTNode} node A VariableDeclaration node to check.
 * @returns {boolean} `true` if the declaration has an initializer.
 */
function isDeclarationInitialized(node) {
    return node.declarations.every(declarator => declarator.init !== null);
}

const SCOPE_NODE_TYPE = /^(?:Program|BlockStatement|SwitchStatement|ForStatement|ForInStatement|ForOfStatement)$/u;

/**
 * Gets the scope node which directly contains a given node.
 * @param {ASTNode} node A node to get. This is a `VariableDeclaration` or
 *      an `Identifier`.
 * @returns {ASTNode} A scope node. This is one of `Program`, `BlockStatement`,
 *      `SwitchStatement`, `ForStatement`, `ForInStatement`, and
 *      `ForOfStatement`.
 */
function getScopeNode(node) {
    for (let currentNode = node; currentNode; currentNode = currentNode.parent) {
        if (SCOPE_NODE_TYPE.test(currentNode.type)) {
            return currentNode;
        }
    }

    /* istanbul ignore next : unreachable */
    return null;
}

/**
 * Checks whether a given variable is redeclared or not.
 * @param {eslint-scope.Variable} variable A variable to check.
 * @returns {boolean} `true` if the variable is redeclared.
 */
function isRedeclared(variable) {
    return variable.defs.length >= 2;
}

/**
 * Checks whether a given variable is used from outside of the specified scope.
 * @param {ASTNode} scopeNode A scope node to check.
 * @returns {Function} The predicate function which checks whether a given
 *      variable is used from outside of the specified scope.
 */
function isUsedFromOutsideOf(scopeNode) {

    /**
     * Checks whether a given reference is inside of the specified scope or not.
     * @param {eslint-scope.Reference} reference A reference to check.
     * @returns {boolean} `true` if the reference is inside of the specified
     *      scope.
     */
    function isOutsideOfScope(reference) {
        const scope = scopeNode.range;
        const id = reference.identifier.range;

        return id[0] < scope[0] || id[1] > scope[1];
    }

    return function(variable) {
        return variable.references.some(isOutsideOfScope);
    };
}

/**
 * Creates the predicate function which checks whether a variable has their references in TDZ.
 *
 * The predicate function would return `true`:
 *
 * - if a reference is before the declarator. E.g. (var a = b, b = 1;)(var {a = b, b} = {};)
 * - if a reference is in the expression of their default value.  E.g. (var {a = a} = {};)
 * - if a reference is in the expression of their initializer.  E.g. (var a = a;)
 * @param {ASTNode} node The initializer node of VariableDeclarator.
 * @returns {Function} The predicate function.
 * @private
 */
function hasReferenceInTDZ(node) {
    const initStart = node.range[0];
    const initEnd = node.range[1];

    return variable => {
        const id = variable.defs[0].name;
        const idStart = id.range[0];
        const defaultValue = (id.parent.type === "AssignmentPattern" ? id.parent.right : null);
        const defaultStart = defaultValue && defaultValue.range[0];
        const defaultEnd = defaultValue && defaultValue.range[1];

        return variable.references.some(reference => {
            const start = reference.identifier.range[0];
            const end = reference.identifier.range[1];

            return !reference.init && (
                start < idStart ||
                (defaultValue !== null && start >= defaultStart && end <= defaultEnd) ||
                (start >= initStart && end <= initEnd)
            );
        });
    };
}

/**
 * Checks whether a given variable has name that is allowed for 'var' declarations,
 * but disallowed for `let` declarations.
 * @param {eslint-scope.Variable} variable The variable to check.
 * @returns {boolean} `true` if the variable has a disallowed name.
 */
function hasNameDisallowedForLetDeclarations(variable) {
    return variable.name === "let";
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "require `let` or `const` instead of `var`",
            category: "ECMAScript 6",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-var"
        },

        schema: [],
        fixable: "code",

        messages: {
            unexpectedVar: "Unexpected var, use let or const instead."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        /**
         * Checks whether the variables which are defined by the given declarator node have their references in TDZ.
         * @param {ASTNode} declarator The VariableDeclarator node to check.
         * @returns {boolean} `true` if one of the variables which are defined by the given declarator node have their references in TDZ.
         */
        function hasSelfReferenceInTDZ(declarator) {
            if (!declarator.init) {
                return false;
            }
            const variables = context.getDeclaredVariables(declarator);

            return variables.some(hasReferenceInTDZ(declarator.init));
        }

        /**
         * Checks whether it can fix a given variable declaration or not.
         * It cannot fix if the following cases:
         *
         * - A variable is a global variable.
         * - A variable is declared on a SwitchCase node.
         * - A variable is redeclared.
         * - A variable is used from outside the scope.
         * - A variable is used from a closure within a loop.
         * - A variable might be used before it is assigned within a loop.
         * - A variable might be used in TDZ.
         * - A variable is declared in statement position (e.g. a single-line `IfStatement`)
         * - A variable has name that is disallowed for `let` declarations.
         *
         * ## A variable is declared on a SwitchCase node.
         *
         * If this rule modifies 'var' declarations on a SwitchCase node, it
         * would generate the warnings of 'no-case-declarations' rule. And the
         * 'eslint:recommended' preset includes 'no-case-declarations' rule, so
         * this rule doesn't modify those declarations.
         *
         * ## A variable is redeclared.
         *
         * The language spec disallows redeclarations of `let` declarations.
         * Those variables would cause syntax errors.
         *
         * ## A variable is used from outside the scope.
         *
         * The language spec disallows accesses from outside of the scope for
         * `let` declarations. Those variables would cause reference errors.
         *
         * ## A variable is used from a closure within a loop.
         *
         * A `var` declaration within a loop shares the same variable instance
         * across all loop iterations, while a `let` declaration creates a new
         * instance for each iteration. This means if a variable in a loop is
         * referenced by any closure, changing it from `var` to `let` would
         * change the behavior in a way that is generally unsafe.
         *
         * ## A variable might be used before it is assigned within a loop.
         *
         * Within a loop, a `let` declaration without an initializer will be
         * initialized to null, while a `var` declaration will retain its value
         * from the previous iteration, so it is only safe to change `var` to
         * `let` if we can statically determine that the variable is always
         * assigned a value before its first access in the loop body. To keep
         * the implementation simple, we only convert `var` to `let` within
         * loops when the variable is a loop assignee or the declaration has an
         * initializer.
         * @param {ASTNode} node A variable declaration node to check.
         * @returns {boolean} `true` if it can fix the node.
         */
        function canFix(node) {
            const variables = context.getDeclaredVariables(node);
            const scopeNode = getScopeNode(node);

            if (node.parent.type === "SwitchCase" ||
                node.declarations.some(hasSelfReferenceInTDZ) ||
                variables.some(isGlobal) ||
                variables.some(isRedeclared) ||
                variables.some(isUsedFromOutsideOf(scopeNode)) ||
                variables.some(hasNameDisallowedForLetDeclarations)
            ) {
                return false;
            }

            if (astUtils.isInLoop(node)) {
                if (variables.some(isReferencedInClosure)) {
                    return false;
                }
                if (!isLoopAssignee(node) && !isDeclarationInitialized(node)) {
                    return false;
                }
            }

            if (
                !isLoopAssignee(node) &&
                !(node.parent.type === "ForStatement" && node.parent.init === node) &&
                !astUtils.STATEMENT_LIST_PARENTS.has(node.parent.type)
            ) {

                // If the declaration is not in a block, e.g. `if (foo) var bar = 1;`, then it can't be fixed.
                return false;
            }

            return true;
        }

        /**
         * Reports a given variable declaration node.
         * @param {ASTNode} node A variable declaration node to report.
         * @returns {void}
         */
        function report(node) {
            context.report({
                node,
                messageId: "unexpectedVar",

                fix(fixer) {
                    const varToken = sourceCode.getFirstToken(node, { filter: t => t.value === "var" });

                    return canFix(node)
                        ? fixer.replaceText(varToken, "let")
                        : null;
                }
            });
        }

        return {
            "VariableDeclaration:exit"(node) {
                if (node.kind === "var") {
                    report(node);
                }
            }
        };
    }
};

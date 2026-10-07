/**
 * @fileoverview Rule to flag `else` after a `return` in `if`
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");
const FixTracker = require("./utils/fix-tracker");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow `else` blocks after `return` statements in `if` statements",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-else-return"
        },

        schema: [{
            type: "object",
            properties: {
                allowElseIf: {
                    type: "boolean",
                    default: true
                }
            },
            additionalProperties: false
        }],

        fixable: "code",

        messages: {
            unexpected: "Unnecessary 'else' after 'return'."
        }
    },

    create(context) {

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Checks whether the given names can be safely used to declare block-scoped variables
         * in the given scope. Name collisions can produce redeclaration syntax errors,
         * or silently change references and modify behavior of the original code.
         *
         * This is not a generic function. In particular, it is assumed that the scope is a function scope or
         * a function's inner scope, and that the names can be valid identifiers in the given scope.
         * @param {string[]} names Array of variable names.
         * @param {eslint-scope.Scope} scope Function scope or a function's inner scope.
         * @returns {boolean} True if all names can be safely declared, false otherwise.
         */
        function isSafeToDeclare(names, scope) {

            if (names.length === 0) {
                return true;
            }

            const functionScope = scope.variableScope;

            /*
             * If this is a function scope, scope.variables will contain parameters, implicit variables such as "arguments",
             * all function-scoped variables ('var'), and block-scoped variables defined in the scope.
             * If this is an inner scope, scope.variables will contain block-scoped variables defined in the scope.
             *
             * Redeclaring any of these would cause a syntax error, except for the implicit variables.
             */
            const declaredVariables = scope.variables.filter(({ defs }) => defs.length > 0);

            if (declaredVariables.some(({ name }) => names.includes(name))) {
                return false;
            }

            // Redeclaring a catch variable would also cause a syntax error.
            if (scope !== functionScope && scope.upper.type === "catch") {
                if (scope.upper.variables.some(({ name }) => names.includes(name))) {
                    return false;
                }
            }

            /*
             * Redeclaring an implicit variable, such as "arguments", would not cause a syntax error.
             * However, if the variable was used, declaring a new one with the same name would change references
             * and modify behavior.
             */
            const usedImplicitVariables = scope.variables.filter(({ defs, references }) =>
                defs.length === 0 && references.length > 0);

            if (usedImplicitVariables.some(({ name }) => names.includes(name))) {
                return false;
            }

            /*
             * Declaring a variable with a name that was already used to reference a variable from an upper scope
             * would change references and modify behavior.
             */
            if (scope.through.some(t => names.includes(t.identifier.name))) {
                return false;
            }

            /*
             * If the scope is an inner scope (not the function scope), an uninitialized `var` variable declared inside
             * the scope node (directly or in one of its descendants) is neither declared nor 'through' in the scope.
             *
             * For example, this would be a syntax error "Identifier 'a' has already been declared":
             * function foo() { if (bar) { let a; if (baz) { var a; } } }
             */
            if (scope !== functionScope) {
                const scopeNodeRange = scope.block.range;
                const variablesToCheck = functionScope.variables.filter(({ name }) => names.includes(name));

                if (variablesToCheck.some(v => v.defs.some(({ node: { range } }) =>
                    scopeNodeRange[0] <= range[0] && range[1] <= scopeNodeRange[1]))) {
                    return false;
                }
            }

            return true;
        }


        /**
         * Checks whether the removal of `else` and its braces is safe from variable name collisions.
         * @param {Node} node The 'else' node.
         * @param {eslint-scope.Scope} scope The scope in which the node and the whole 'if' statement is.
         * @returns {boolean} True if it is safe, false otherwise.
         */
        function isSafeFromNameCollisions(node, scope) {

            if (node.type === "FunctionDeclaration") {

                // Conditional function declaration. Scope and hoisting are unpredictable, different engines work differently.
                return false;
            }

            if (node.type !== "BlockStatement") {
                return true;
            }

            const elseBlockScope = scope.childScopes.find(({ block }) => block === node);

            if (!elseBlockScope) {

                // ecmaVersion < 6, `else` block statement cannot have its own scope, no possible collisions.
                return true;
            }

            /*
             * elseBlockScope is supposed to merge into its upper scope. elseBlockScope.variables array contains
             * only block-scoped variables (such as let and const variables or class and function declarations)
             * defined directly in the elseBlockScope. These are exactly the only names that could cause collisions.
             */
            const namesToCheck = elseBlockScope.variables.map(({ name }) => name);

            return isSafeToDeclare(namesToCheck, scope);
        }

        /**
         * Display the context report if rule is violated
         * @param {Node} node The 'else' node
         * @returns {void}
         */
        function displayReport(node) {
            const currentScope = context.getScope();

            context.report({
                node,
                messageId: "unexpected",
                fix: fixer => {

                    if (!isSafeFromNameCollisions(node, currentScope)) {
                        return null;
                    }

                    const sourceCode = context.getSourceCode();
                    const startToken = sourceCode.getFirstToken(node);
                    const elseToken = sourceCode.getTokenBefore(startToken);
                    const source = sourceCode.getText(node);
                    const lastIfToken = sourceCode.getTokenBefore(elseToken);
                    let fixedSource, firstTokenOfElseBlock;

                    if (startToken.type === "Punctuator" && startToken.value === "{") {
                        firstTokenOfElseBlock = sourceCode.getTokenAfter(startToken);
                    } else {
                        firstTokenOfElseBlock = startToken;
                    }

                    /*
                     * If the if block does not have curly braces and does not end in a semicolon
                     * and the else block starts with (, [, /, +, ` or -, then it is not
                     * safe to remove the else keyword, because ASI will not add a semicolon
                     * after the if block
                     */
                    const ifBlockMaybeUnsafe = node.parent.consequent.type !== "BlockStatement" && lastIfToken.value !== ";";
                    const elseBlockUnsafe = /^[([/+`-]/u.test(firstTokenOfElseBlock.value);

                    if (ifBlockMaybeUnsafe && elseBlockUnsafe) {
                        return null;
                    }

                    const endToken = sourceCode.getLastToken(node);
                    const lastTokenOfElseBlock = sourceCode.getTokenBefore(endToken);

                    if (lastTokenOfElseBlock.value !== ";") {
                        const nextToken = sourceCode.getTokenAfter(endToken);

                        const nextTokenUnsafe = nextToken && /^[([/+`-]/u.test(nextToken.value);
                        const nextTokenOnSameLine = nextToken && nextToken.loc.start.line === lastTokenOfElseBlock.loc.start.line;

                        /*
                         * If the else block contents does not end in a semicolon,
                         * and the else block starts with (, [, /, +, ` or -, then it is not
                         * safe to remove the else block, because ASI will not add a semicolon
                         * after the remaining else block contents
                         */
                        if (nextTokenUnsafe || (nextTokenOnSameLine && nextToken.value !== "}")) {
                            return null;
                        }
                    }

                    if (startToken.type === "Punctuator" && startToken.value === "{") {
                        fixedSource = source.slice(1, -1);
                    } else {
                        fixedSource = source;
                    }

                    /*
                     * Extend the replacement range to include the entire
                     * function to avoid conflicting with no-useless-return.
                     * https://github.com/eslint/eslint/issues/8026
                     *
                     * Also, to avoid name collisions between two else blocks.
                     */
                    return new FixTracker(fixer, sourceCode)
                        .retainEnclosingFunction(node)
                        .replaceTextRange([elseToken.range[0], node.range[1]], fixedSource);
                }
            });
        }

        /**
         * Check to see if the node is a ReturnStatement
         * @param {Node} node The node being evaluated
         * @returns {boolean} True if node is a return
         */
        function checkForReturn(node) {
            return node.type === "ReturnStatement";
        }

        /**
         * Naive return checking, does not iterate through the whole
         * BlockStatement because we make the assumption that the ReturnStatement
         * will be the last node in the body of the BlockStatement.
         * @param {Node} node The consequent/alternate node
         * @returns {boolean} True if it has a return
         */
        function naiveHasReturn(node) {
            if (node.type === "BlockStatement") {
                const body = node.body,
                    lastChildNode = body[body.length - 1];

                return lastChildNode && checkForReturn(lastChildNode);
            }
            return checkForReturn(node);
        }

        /**
         * Check to see if the node is valid for evaluation,
         * meaning it has an else.
         * @param {Node} node The node being evaluated
         * @returns {boolean} True if the node is valid
         */
        function hasElse(node) {
            return node.alternate && node.consequent;
        }

        /**
         * If the consequent is an IfStatement, check to see if it has an else
         * and both its consequent and alternate path return, meaning this is
         * a nested case of rule violation.  If-Else not considered currently.
         * @param {Node} node The consequent node
         * @returns {boolean} True if this is a nested rule violation
         */
        function checkForIf(node) {
            return node.type === "IfStatement" && hasElse(node) &&
                naiveHasReturn(node.alternate) && naiveHasReturn(node.consequent);
        }

        /**
         * Check the consequent/body node to make sure it is not
         * a ReturnStatement or an IfStatement that returns on both
         * code paths.
         * @param {Node} node The consequent or body node
         * @returns {boolean} `true` if it is a Return/If node that always returns.
         */
        function checkForReturnOrIf(node) {
            return checkForReturn(node) || checkForIf(node);
        }


        /**
         * Check whether a node returns in every codepath.
         * @param {Node} node The node to be checked
         * @returns {boolean} `true` if it returns on every codepath.
         */
        function alwaysReturns(node) {
            if (node.type === "BlockStatement") {

                // If we have a BlockStatement, check each consequent body node.
                return node.body.some(checkForReturnOrIf);
            }

            /*
             * If not a block statement, make sure the consequent isn't a
             * ReturnStatement or an IfStatement with returns on both paths.
             */
            return checkForReturnOrIf(node);
        }


        /**
         * Check the if statement, but don't catch else-if blocks.
         * @returns {void}
         * @param {Node} node The node for the if statement to check
         * @private
         */
        function checkIfWithoutElse(node) {
            const parent = node.parent;

            /*
             * Fixing this would require splitting one statement into two, so no error should
             * be reported if this node is in a position where only one statement is allowed.
             */
            if (!astUtils.STATEMENT_LIST_PARENTS.has(parent.type)) {
                return;
            }

            const consequents = [];
            let alternate;

            for (let currentNode = node; currentNode.type === "IfStatement"; currentNode = currentNode.alternate) {
                if (!currentNode.alternate) {
                    return;
                }
                consequents.push(currentNode.consequent);
                alternate = currentNode.alternate;
            }

            if (consequents.every(alwaysReturns)) {
                displayReport(alternate);
            }
        }

        /**
         * Check the if statement
         * @returns {void}
         * @param {Node} node The node for the if statement to check
         * @private
         */
        function checkIfWithElse(node) {
            const parent = node.parent;


            /*
             * Fixing this would require splitting one statement into two, so no error should
             * be reported if this node is in a position where only one statement is allowed.
             */
            if (!astUtils.STATEMENT_LIST_PARENTS.has(parent.type)) {
                return;
            }

            const alternate = node.alternate;

            if (alternate && alwaysReturns(node.consequent)) {
                displayReport(alternate);
            }
        }

        const allowElseIf = !(context.options[0] && context.options[0].allowElseIf === false);

        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {

            "IfStatement:exit": allowElseIf ? checkIfWithoutElse : checkIfWithElse

        };

    }
};

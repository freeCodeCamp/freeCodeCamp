/**
 * @fileoverview Rule to flag `else` after a `return` in `if`
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");
const FixTracker = require("../util/fix-tracker");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow `else` blocks after `return` statements in `if` statements",
            category: "Best Practices",
            recommended: false
        },

        schema: [],

        fixable: "code"
    },

    create(context) {

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Display the context report if rule is violated
         *
         * @param {Node} node The 'else' node
         * @returns {void}
         */
        function displayReport(node) {
            context.report({
                node,
                message: "Unnecessary 'else' after 'return'.",
                fix: fixer => {
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

                    // If the if block does not have curly braces and does not end in a semicolon
                    // and the else block starts with (, [, /, +, ` or -, then it is not
                    // safe to remove the else keyword, because ASI will not add a semicolon
                    // after the if block
                    const ifBlockMaybeUnsafe = node.parent.consequent.type !== "BlockStatement" && lastIfToken.value !== ";";
                    const elseBlockUnsafe = /^[([/+`-]/.test(firstTokenOfElseBlock.value);

                    if (ifBlockMaybeUnsafe && elseBlockUnsafe) {
                        return null;
                    }

                    const endToken = sourceCode.getLastToken(node);
                    const lastTokenOfElseBlock = sourceCode.getTokenBefore(endToken);

                    if (lastTokenOfElseBlock.value !== ";") {
                        const nextToken = sourceCode.getTokenAfter(endToken);

                        const nextTokenUnsafe = nextToken && /^[([/+`-]/.test(nextToken.value);
                        const nextTokenOnSameLine = nextToken && nextToken.loc.start.line === lastTokenOfElseBlock.loc.start.line;

                        // If the else block contents does not end in a semicolon,
                        // and the else block starts with (, [, /, +, ` or -, then it is not
                        // safe to remove the else block, because ASI will not add a semicolon
                        // after the remaining else block contents
                        if (nextTokenUnsafe || (nextTokenOnSameLine && nextToken.value !== "}")) {
                            return null;
                        }
                    }

                    if (startToken.type === "Punctuator" && startToken.value === "{") {
                        fixedSource = source.slice(1, -1);
                    } else {
                        fixedSource = source;
                    }

                    // Extend the replacement range to include the entire
                    // function to avoid conflicting with no-useless-return.
                    // https://github.com/eslint/eslint/issues/8026
                    return new FixTracker(fixer, sourceCode)
                        .retainEnclosingFunction(node)
                        .replaceTextRange([elseToken.start, node.end], fixedSource);
                }
            });
        }

        /**
         * Check to see if the node is a ReturnStatement
         *
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
         *
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
         * meaning it has an else and not an else-if
         *
         * @param {Node} node The node being evaluated
         * @returns {boolean} True if the node is valid
         */
        function hasElse(node) {
            return node.alternate && node.consequent && node.alternate.type !== "IfStatement";
        }

        /**
         * If the consequent is an IfStatement, check to see if it has an else
         * and both its consequent and alternate path return, meaning this is
         * a nested case of rule violation.  If-Else not considered currently.
         *
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
         *
         * @param {Node} node The consequent or body node
         * @param {Node} alternate The alternate node
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
         * Check the if statement
         * @returns {void}
         * @param {Node} node The node for the if statement to check
         * @private
         */
        function IfStatement(node) {
            const parent = context.getAncestors().pop();
            let consequents,
                alternate;

            /*
             * Fixing this would require splitting one statement into two, so no error should
             * be reported if this node is in a position where only one statement is allowed.
             */
            if (!astUtils.STATEMENT_LIST_PARENTS.has(parent.type)) {
                return;
            }

            for (consequents = []; node.type === "IfStatement"; node = node.alternate) {
                if (!node.alternate) {
                    return;
                }
                consequents.push(node.consequent);
                alternate = node.alternate;
            }

            if (consequents.every(alwaysReturns)) {
                displayReport(alternate);
            }
        }

        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {

            "IfStatement:exit": IfStatement

        };

    }
};

/**
 * @fileoverview This rule shoud require or disallow spaces before or after unary operations.
 * @author Marcin Kumorek
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce consistent spacing before or after unary operators",
            category: "Stylistic Issues",
            recommended: false
        },

        fixable: "whitespace",

        schema: [
            {
                type: "object",
                properties: {
                    words: {
                        type: "boolean"
                    },
                    nonwords: {
                        type: "boolean"
                    },
                    overrides: {
                        type: "object",
                        additionalProperties: {
                            type: "boolean"
                        }
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {
        const options = context.options && Array.isArray(context.options) && context.options[0] || { words: true, nonwords: false };

        const sourceCode = context.getSourceCode();

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
        * Check if the node is the first "!" in a "!!" convert to Boolean expression
        * @param {ASTnode} node AST node
        * @returns {boolean} Whether or not the node is first "!" in "!!"
        */
        function isFirstBangInBangBangExpression(node) {
            return node && node.type === "UnaryExpression" && node.argument.operator === "!" &&
                node.argument && node.argument.type === "UnaryExpression" && node.argument.operator === "!";
        }

        /**
        * Check if the node's child argument is an "ObjectExpression"
        * @param {ASTnode} node AST node
        * @returns {boolean} Whether or not the argument's type is "ObjectExpression"
        */
        function isArgumentObjectExpression(node) {
            return node.argument && node.argument.type && node.argument.type === "ObjectExpression";
        }

        /**
         * Check if it is safe to remove the spaces between the two tokens in
         * the context of a non-word prefix unary operator. For example, `+ +1`
         * cannot safely be changed to `++1`.
         * @param {Token} firstToken The operator for a non-word prefix unary operator
         * @param {Token} secondToken The first token of its operand
         * @returns {boolean} Whether or not the spacing between the tokens can be removed
         */
        function canRemoveSpacesBetween(firstToken, secondToken) {
            return !(
                (firstToken.value === "+" && secondToken.value[0] === "+") ||
                (firstToken.value === "-" && secondToken.value[0] === "-")
            );
        }

        /**
        * Checks if an override exists for a given operator.
        * @param {ASTnode} node AST node
        * @param {string} operator Operator
        * @returns {boolean} Whether or not an override has been provided for the operator
        */
        function overrideExistsForOperator(node, operator) {
            return options.overrides && options.overrides.hasOwnProperty(operator);
        }

        /**
        * Gets the value that the override was set to for this operator
        * @param {ASTnode} node AST node
        * @param {string} operator Operator
        * @returns {boolean} Whether or not an override enforces a space with this operator
        */
        function overrideEnforcesSpaces(node, operator) {
            return options.overrides[operator];
        }

        /**
        * Verify Unary Word Operator has spaces after the word operator
        * @param {ASTnode} node AST node
        * @param {Object} firstToken first token from the AST node
        * @param {Object} secondToken second token from the AST node
        * @param {string} word The word to be used for reporting
        * @returns {void}
        */
        function verifyWordHasSpaces(node, firstToken, secondToken, word) {
            if (secondToken.range[0] === firstToken.range[1]) {
                context.report({
                    node,
                    message: "Unary word operator '{{word}}' must be followed by whitespace.",
                    data: {
                        word
                    },
                    fix(fixer) {
                        return fixer.insertTextAfter(firstToken, " ");
                    }
                });
            }
        }

        /**
        * Verify Unary Word Operator doesn't have spaces after the word operator
        * @param {ASTnode} node AST node
        * @param {Object} firstToken first token from the AST node
        * @param {Object} secondToken second token from the AST node
        * @param {string} word The word to be used for reporting
        * @returns {void}
        */
        function verifyWordDoesntHaveSpaces(node, firstToken, secondToken, word) {
            if (isArgumentObjectExpression(node)) {
                if (secondToken.range[0] > firstToken.range[1]) {
                    context.report({
                        node,
                        message: "Unexpected space after unary word operator '{{word}}'.",
                        data: {
                            word
                        },
                        fix(fixer) {
                            return fixer.removeRange([firstToken.range[1], secondToken.range[0]]);
                        }
                    });
                }
            }
        }

        /**
        * Check Unary Word Operators for spaces after the word operator
        * @param {ASTnode} node AST node
        * @param {Object} firstToken first token from the AST node
        * @param {Object} secondToken second token from the AST node
        * @param {string} word The word to be used for reporting
        * @returns {void}
        */
        function checkUnaryWordOperatorForSpaces(node, firstToken, secondToken, word) {
            word = word || firstToken.value;

            if (overrideExistsForOperator(node, word)) {
                if (overrideEnforcesSpaces(node, word)) {
                    verifyWordHasSpaces(node, firstToken, secondToken, word);
                } else {
                    verifyWordDoesntHaveSpaces(node, firstToken, secondToken, word);
                }
            } else if (options.words) {
                verifyWordHasSpaces(node, firstToken, secondToken, word);
            } else {
                verifyWordDoesntHaveSpaces(node, firstToken, secondToken, word);
            }
        }

        /**
        * Verifies YieldExpressions satisfy spacing requirements
        * @param {ASTnode} node AST node
        * @returns {void}
        */
        function checkForSpacesAfterYield(node) {
            const tokens = sourceCode.getFirstTokens(node, 3),
                word = "yield";

            if (!node.argument || node.delegate) {
                return;
            }

            checkUnaryWordOperatorForSpaces(node, tokens[0], tokens[1], word);
        }

        /**
        * Verifies AwaitExpressions satisfy spacing requirements
        * @param {ASTNode} node AwaitExpression AST node
        * @returns {void}
        */
        function checkForSpacesAfterAwait(node) {
            const tokens = sourceCode.getFirstTokens(node, 3);

            checkUnaryWordOperatorForSpaces(node, tokens[0], tokens[1], "await");
        }

        /**
        * Verifies UnaryExpression, UpdateExpression and NewExpression have spaces before or after the operator
        * @param {ASTnode} node AST node
        * @param {Object} firstToken First token in the expression
        * @param {Object} secondToken Second token in the expression
        * @returns {void}
        */
        function verifyNonWordsHaveSpaces(node, firstToken, secondToken) {
            if (node.prefix) {
                if (isFirstBangInBangBangExpression(node)) {
                    return;
                }
                if (firstToken.range[1] === secondToken.range[0]) {
                    context.report({
                        node,
                        message: "Unary operator '{{operator}}' must be followed by whitespace.",
                        data: {
                            operator: firstToken.value
                        },
                        fix(fixer) {
                            return fixer.insertTextAfter(firstToken, " ");
                        }
                    });
                }
            } else {
                if (firstToken.range[1] === secondToken.range[0]) {
                    context.report({
                        node,
                        message: "Space is required before unary expressions '{{token}}'.",
                        data: {
                            token: secondToken.value
                        },
                        fix(fixer) {
                            return fixer.insertTextBefore(secondToken, " ");
                        }
                    });
                }
            }
        }

        /**
        * Verifies UnaryExpression, UpdateExpression and NewExpression don't have spaces before or after the operator
        * @param {ASTnode} node AST node
        * @param {Object} firstToken First token in the expression
        * @param {Object} secondToken Second token in the expression
        * @returns {void}
        */
        function verifyNonWordsDontHaveSpaces(node, firstToken, secondToken) {
            if (node.prefix) {
                if (secondToken.range[0] > firstToken.range[1]) {
                    context.report({
                        node,
                        message: "Unexpected space after unary operator '{{operator}}'.",
                        data: {
                            operator: firstToken.value
                        },
                        fix(fixer) {
                            if (canRemoveSpacesBetween(firstToken, secondToken)) {
                                return fixer.removeRange([firstToken.range[1], secondToken.range[0]]);
                            }
                            return null;
                        }
                    });
                }
            } else {
                if (secondToken.range[0] > firstToken.range[1]) {
                    context.report({
                        node,
                        message: "Unexpected space before unary operator '{{operator}}'.",
                        data: {
                            operator: secondToken.value
                        },
                        fix(fixer) {
                            return fixer.removeRange([firstToken.range[1], secondToken.range[0]]);
                        }
                    });
                }
            }
        }

        /**
        * Verifies UnaryExpression, UpdateExpression and NewExpression satisfy spacing requirements
        * @param {ASTnode} node AST node
        * @returns {void}
        */
        function checkForSpaces(node) {
            const tokens = sourceCode.getFirstTokens(node, 2),
                firstToken = tokens[0],
                secondToken = tokens[1];

            if ((node.type === "NewExpression" || node.prefix) && firstToken.type === "Keyword") {
                checkUnaryWordOperatorForSpaces(node, firstToken, secondToken);
                return;
            }

            const operator = node.prefix ? tokens[0].value : tokens[1].value;

            if (overrideExistsForOperator(node, operator)) {
                if (overrideEnforcesSpaces(node, operator)) {
                    verifyNonWordsHaveSpaces(node, firstToken, secondToken);
                } else {
                    verifyNonWordsDontHaveSpaces(node, firstToken, secondToken);
                }
            } else if (options.nonwords) {
                verifyNonWordsHaveSpaces(node, firstToken, secondToken);
            } else {
                verifyNonWordsDontHaveSpaces(node, firstToken, secondToken);
            }
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            UnaryExpression: checkForSpaces,
            UpdateExpression: checkForSpaces,
            NewExpression: checkForSpaces,
            YieldExpression: checkForSpacesAfterYield,
            AwaitExpression: checkForSpacesAfterAwait
        };

    }
};

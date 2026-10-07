/**
 * @fileoverview Rule to flag use of unnecessary semicolons
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const FixTracker = require("./utils/fix-tracker");
const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow unnecessary semicolons",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-extra-semi"
        },

        fixable: "code",
        schema: [],

        messages: {
            unexpected: "Unnecessary semicolon."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        /**
         * Reports an unnecessary semicolon error.
         * @param {Node|Token} nodeOrToken A node or a token to be reported.
         * @returns {void}
         */
        function report(nodeOrToken) {
            context.report({
                node: nodeOrToken,
                messageId: "unexpected",
                fix(fixer) {

                    /*
                     * Expand the replacement range to include the surrounding
                     * tokens to avoid conflicting with semi.
                     * https://github.com/eslint/eslint/issues/7928
                     */
                    return new FixTracker(fixer, context.getSourceCode())
                        .retainSurroundingTokens(nodeOrToken)
                        .remove(nodeOrToken);
                }
            });
        }

        /**
         * Checks for a part of a class body.
         * This checks tokens from a specified token to a next MethodDefinition or the end of class body.
         * @param {Token} firstToken The first token to check.
         * @returns {void}
         */
        function checkForPartOfClassBody(firstToken) {
            for (let token = firstToken;
                token.type === "Punctuator" && !astUtils.isClosingBraceToken(token);
                token = sourceCode.getTokenAfter(token)
            ) {
                if (astUtils.isSemicolonToken(token)) {
                    report(token);
                }
            }
        }

        return {

            /**
             * Reports this empty statement, except if the parent node is a loop.
             * @param {Node} node A EmptyStatement node to be reported.
             * @returns {void}
             */
            EmptyStatement(node) {
                const parent = node.parent,
                    allowedParentTypes = [
                        "ForStatement",
                        "ForInStatement",
                        "ForOfStatement",
                        "WhileStatement",
                        "DoWhileStatement",
                        "IfStatement",
                        "LabeledStatement",
                        "WithStatement"
                    ];

                if (allowedParentTypes.indexOf(parent.type) === -1) {
                    report(node);
                }
            },

            /**
             * Checks tokens from the head of this class body to the first MethodDefinition or the end of this class body.
             * @param {Node} node A ClassBody node to check.
             * @returns {void}
             */
            ClassBody(node) {
                checkForPartOfClassBody(sourceCode.getFirstToken(node, 1)); // 0 is `{`.
            },

            /**
             * Checks tokens from this MethodDefinition to the next MethodDefinition or the end of this class body.
             * @param {Node} node A MethodDefinition node of the start point.
             * @returns {void}
             */
            MethodDefinition(node) {
                checkForPartOfClassBody(sourceCode.getTokenAfter(node));
            }
        };

    }
};

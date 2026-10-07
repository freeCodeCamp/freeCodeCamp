/**
 * @fileoverview Rule to disallow unnecessary labels
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow unnecessary labels",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-extra-label"
        },

        schema: [],
        fixable: "code",

        messages: {
            unexpected: "This label '{{name}}' is unnecessary."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();
        let scopeInfo = null;

        /**
         * Creates a new scope with a breakable statement.
         * @param {ASTNode} node A node to create. This is a BreakableStatement.
         * @returns {void}
         */
        function enterBreakableStatement(node) {
            scopeInfo = {
                label: node.parent.type === "LabeledStatement" ? node.parent.label : null,
                breakable: true,
                upper: scopeInfo
            };
        }

        /**
         * Removes the top scope of the stack.
         * @returns {void}
         */
        function exitBreakableStatement() {
            scopeInfo = scopeInfo.upper;
        }

        /**
         * Creates a new scope with a labeled statement.
         *
         * This ignores it if the body is a breakable statement.
         * In this case it's handled in the `enterBreakableStatement` function.
         * @param {ASTNode} node A node to create. This is a LabeledStatement.
         * @returns {void}
         */
        function enterLabeledStatement(node) {
            if (!astUtils.isBreakableStatement(node.body)) {
                scopeInfo = {
                    label: node.label,
                    breakable: false,
                    upper: scopeInfo
                };
            }
        }

        /**
         * Removes the top scope of the stack.
         *
         * This ignores it if the body is a breakable statement.
         * In this case it's handled in the `exitBreakableStatement` function.
         * @param {ASTNode} node A node. This is a LabeledStatement.
         * @returns {void}
         */
        function exitLabeledStatement(node) {
            if (!astUtils.isBreakableStatement(node.body)) {
                scopeInfo = scopeInfo.upper;
            }
        }

        /**
         * Reports a given control node if it's unnecessary.
         * @param {ASTNode} node A node. This is a BreakStatement or a
         *      ContinueStatement.
         * @returns {void}
         */
        function reportIfUnnecessary(node) {
            if (!node.label) {
                return;
            }

            const labelNode = node.label;

            for (let info = scopeInfo; info !== null; info = info.upper) {
                if (info.breakable || info.label && info.label.name === labelNode.name) {
                    if (info.breakable && info.label && info.label.name === labelNode.name) {
                        context.report({
                            node: labelNode,
                            messageId: "unexpected",
                            data: labelNode,
                            fix(fixer) {
                                const breakOrContinueToken = sourceCode.getFirstToken(node);

                                if (sourceCode.commentsExistBetween(breakOrContinueToken, labelNode)) {
                                    return null;
                                }

                                return fixer.removeRange([breakOrContinueToken.range[1], labelNode.range[1]]);
                            }
                        });
                    }
                    return;
                }
            }
        }

        return {
            WhileStatement: enterBreakableStatement,
            "WhileStatement:exit": exitBreakableStatement,
            DoWhileStatement: enterBreakableStatement,
            "DoWhileStatement:exit": exitBreakableStatement,
            ForStatement: enterBreakableStatement,
            "ForStatement:exit": exitBreakableStatement,
            ForInStatement: enterBreakableStatement,
            "ForInStatement:exit": exitBreakableStatement,
            ForOfStatement: enterBreakableStatement,
            "ForOfStatement:exit": exitBreakableStatement,
            SwitchStatement: enterBreakableStatement,
            "SwitchStatement:exit": exitBreakableStatement,
            LabeledStatement: enterLabeledStatement,
            "LabeledStatement:exit": exitLabeledStatement,
            BreakStatement: reportIfUnnecessary,
            ContinueStatement: reportIfUnnecessary
        };
    }
};

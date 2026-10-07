/**
 * @fileoverview Rule to disallow unused labels.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow unused labels",
            category: "Best Practices",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-unused-labels"
        },

        schema: [],

        fixable: "code",

        messages: {
            unused: "'{{name}}:' is defined but never used."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();
        let scopeInfo = null;

        /**
         * Adds a scope info to the stack.
         * @param {ASTNode} node A node to add. This is a LabeledStatement.
         * @returns {void}
         */
        function enterLabeledScope(node) {
            scopeInfo = {
                label: node.label.name,
                used: false,
                upper: scopeInfo
            };
        }

        /**
         * Removes the top of the stack.
         * At the same time, this reports the label if it's never used.
         * @param {ASTNode} node A node to report. This is a LabeledStatement.
         * @returns {void}
         */
        function exitLabeledScope(node) {
            if (!scopeInfo.used) {
                context.report({
                    node: node.label,
                    messageId: "unused",
                    data: node.label,
                    fix(fixer) {

                        /*
                         * Only perform a fix if there are no comments between the label and the body. This will be the case
                         * when there is exactly one token/comment (the ":") between the label and the body.
                         */
                        if (sourceCode.getTokenAfter(node.label, { includeComments: true }) ===
                                sourceCode.getTokenBefore(node.body, { includeComments: true })) {
                            return fixer.removeRange([node.range[0], node.body.range[0]]);
                        }

                        return null;
                    }
                });
            }

            scopeInfo = scopeInfo.upper;
        }

        /**
         * Marks the label of a given node as used.
         * @param {ASTNode} node A node to mark. This is a BreakStatement or
         *      ContinueStatement.
         * @returns {void}
         */
        function markAsUsed(node) {
            if (!node.label) {
                return;
            }

            const label = node.label.name;
            let info = scopeInfo;

            while (info) {
                if (info.label === label) {
                    info.used = true;
                    break;
                }
                info = info.upper;
            }
        }

        return {
            LabeledStatement: enterLabeledScope,
            "LabeledStatement:exit": exitLabeledScope,
            BreakStatement: markAsUsed,
            ContinueStatement: markAsUsed
        };
    }
};

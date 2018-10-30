/**
 * @fileoverview Rule to flag when using constructor without parentheses
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require parentheses when invoking a constructor with no arguments",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: [],

        fixable: "code"
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        return {
            NewExpression(node) {
                if (node.arguments.length !== 0) {
                    return;  // shortcut: if there are arguments, there have to be parens
                }

                const lastToken = sourceCode.getLastToken(node);
                const hasLastParen = lastToken && astUtils.isClosingParenToken(lastToken);
                const hasParens = hasLastParen && astUtils.isOpeningParenToken(sourceCode.getTokenBefore(lastToken));

                if (!hasParens) {
                    context.report({
                        node,
                        message: "Missing '()' invoking a constructor.",
                        fix: fixer => fixer.insertTextAfter(node, "()")
                    });
                }
            }
        };
    }
};

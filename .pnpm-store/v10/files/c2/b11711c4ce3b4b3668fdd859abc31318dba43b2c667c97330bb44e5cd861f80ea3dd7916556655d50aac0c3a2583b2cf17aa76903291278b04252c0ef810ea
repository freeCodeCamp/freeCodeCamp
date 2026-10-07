/**
 * @fileoverview Rule to flag use of a leading/trailing decimal point in a numeric literal
 * @author James Allardice
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
            description: "disallow leading or trailing decimal points in numeric literals",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-floating-decimal"
        },

        schema: [],
        fixable: "code",
        messages: {
            leading: "A leading decimal point can be confused with a dot.",
            trailing: "A trailing decimal point can be confused with a dot."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        return {
            Literal(node) {

                if (typeof node.value === "number") {
                    if (node.raw.startsWith(".")) {
                        context.report({
                            node,
                            messageId: "leading",
                            fix(fixer) {
                                const tokenBefore = sourceCode.getTokenBefore(node);
                                const needsSpaceBefore = tokenBefore &&
                                    tokenBefore.range[1] === node.range[0] &&
                                    !astUtils.canTokensBeAdjacent(tokenBefore, `0${node.raw}`);

                                return fixer.insertTextBefore(node, needsSpaceBefore ? " 0" : "0");
                            }
                        });
                    }
                    if (node.raw.indexOf(".") === node.raw.length - 1) {
                        context.report({
                            node,
                            messageId: "trailing",
                            fix: fixer => fixer.insertTextAfter(node, "0")
                        });
                    }
                }
            }
        };

    }
};

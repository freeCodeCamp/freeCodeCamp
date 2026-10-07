/**
 * @fileoverview Validates newlines before and after dots
 * @author Greg Cochard
 */

"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "enforce consistent newlines before and after dots",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/dot-location"
        },

        schema: [
            {
                enum: ["object", "property"]
            }
        ],

        fixable: "code",

        messages: {
            expectedDotAfterObject: "Expected dot to be on same line as object.",
            expectedDotBeforeProperty: "Expected dot to be on same line as property."
        }
    },

    create(context) {

        const config = context.options[0];

        // default to onObject if no preference is passed
        const onObject = config === "object" || !config;

        const sourceCode = context.getSourceCode();

        /**
         * Reports if the dot between object and property is on the correct location.
         * @param {ASTNode} node The `MemberExpression` node.
         * @returns {void}
         */
        function checkDotLocation(node) {
            const property = node.property;
            const dotToken = sourceCode.getTokenBefore(property);

            if (onObject) {

                // `obj` expression can be parenthesized, but those paren tokens are not a part of the `obj` node.
                const tokenBeforeDot = sourceCode.getTokenBefore(dotToken);

                if (!astUtils.isTokenOnSameLine(tokenBeforeDot, dotToken)) {
                    context.report({
                        node,
                        loc: dotToken.loc,
                        messageId: "expectedDotAfterObject",
                        *fix(fixer) {
                            if (dotToken.value.startsWith(".") && astUtils.isDecimalIntegerNumericToken(tokenBeforeDot)) {
                                yield fixer.insertTextAfter(tokenBeforeDot, ` ${dotToken.value}`);
                            } else {
                                yield fixer.insertTextAfter(tokenBeforeDot, dotToken.value);
                            }
                            yield fixer.remove(dotToken);
                        }
                    });
                }
            } else if (!astUtils.isTokenOnSameLine(dotToken, property)) {
                context.report({
                    node,
                    loc: dotToken.loc,
                    messageId: "expectedDotBeforeProperty",
                    *fix(fixer) {
                        yield fixer.remove(dotToken);
                        yield fixer.insertTextBefore(property, dotToken.value);
                    }
                });
            }
        }

        /**
         * Checks the spacing of the dot within a member expression.
         * @param {ASTNode} node The node to check.
         * @returns {void}
         */
        function checkNode(node) {
            if (!node.computed) {
                checkDotLocation(node);
            }
        }

        return {
            MemberExpression: checkNode
        };
    }
};

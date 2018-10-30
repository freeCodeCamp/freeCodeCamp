/**
 * @fileoverview Rule to warn about using dot notation instead of square bracket notation when possible.
 * @author Josh Perez
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const validIdentifier = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
const keywords = require("../util/keywords");

module.exports = {
    meta: {
        docs: {
            description: "enforce dot notation whenever possible",
            category: "Best Practices",
            recommended: false
        },

        schema: [
            {
                type: "object",
                properties: {
                    allowKeywords: {
                        type: "boolean"
                    },
                    allowPattern: {
                        type: "string"
                    }
                },
                additionalProperties: false
            }
        ],

        fixable: "code"
    },

    create(context) {
        const options = context.options[0] || {};
        const allowKeywords = options.allowKeywords === void 0 || !!options.allowKeywords;
        const sourceCode = context.getSourceCode();

        let allowPattern;

        if (options.allowPattern) {
            allowPattern = new RegExp(options.allowPattern);
        }

        return {
            MemberExpression(node) {
                if (
                    node.computed &&
                    node.property.type === "Literal" &&
                    validIdentifier.test(node.property.value) &&
                    (allowKeywords || keywords.indexOf(String(node.property.value)) === -1)
                ) {
                    if (!(allowPattern && allowPattern.test(node.property.value))) {
                        context.report({
                            node: node.property,
                            message: "[{{propertyValue}}] is better written in dot notation.",
                            data: {
                                propertyValue: JSON.stringify(node.property.value)
                            },
                            fix(fixer) {
                                const leftBracket = sourceCode.getTokenAfter(node.object, astUtils.isOpeningBracketToken);
                                const rightBracket = sourceCode.getLastToken(node);

                                if (sourceCode.getFirstTokenBetween(leftBracket, rightBracket, { includeComments: true, filter: astUtils.isCommentToken })) {

                                    // Don't perform any fixes if there are comments inside the brackets.
                                    return null;
                                }

                                const textBeforeDot = astUtils.isDecimalInteger(node.object) ? " " : "";

                                return fixer.replaceTextRange(
                                    [leftBracket.range[0], rightBracket.range[1]],
                                    `${textBeforeDot}.${node.property.value}`
                                );
                            }
                        });
                    }
                }
                if (
                    !allowKeywords &&
                    !node.computed &&
                    keywords.indexOf(String(node.property.name)) !== -1
                ) {
                    context.report({
                        node: node.property,
                        message: ".{{propertyName}} is a syntax error.",
                        data: {
                            propertyName: node.property.name
                        },
                        fix(fixer) {
                            const dot = sourceCode.getTokenBefore(node.property);
                            const textAfterDot = sourceCode.text.slice(dot.range[1], node.property.range[0]);

                            if (textAfterDot.trim()) {

                                // Don't perform any fixes if there are comments between the dot and the property name.
                                return null;
                            }

                            return fixer.replaceTextRange(
                                [dot.range[0], node.property.range[1]],
                                `[${textAfterDot}"${node.property.name}"]`
                            );
                        }
                    });
                }
            }
        };
    }
};

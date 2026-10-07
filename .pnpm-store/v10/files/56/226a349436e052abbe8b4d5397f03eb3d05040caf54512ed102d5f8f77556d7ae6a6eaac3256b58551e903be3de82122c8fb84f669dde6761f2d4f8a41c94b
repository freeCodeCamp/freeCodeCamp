/**
 * @fileoverview Rule to warn about using dot notation instead of square bracket notation when possible.
 * @author Josh Perez
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");
const keywords = require("./utils/keywords");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const validIdentifier = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/u;

// `null` literal must be handled separately.
const literalTypesToCheck = new Set(["string", "boolean"]);

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "enforce dot notation whenever possible",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/dot-notation"
        },

        schema: [
            {
                type: "object",
                properties: {
                    allowKeywords: {
                        type: "boolean",
                        default: true
                    },
                    allowPattern: {
                        type: "string",
                        default: ""
                    }
                },
                additionalProperties: false
            }
        ],

        fixable: "code",

        messages: {
            useDot: "[{{key}}] is better written in dot notation.",
            useBrackets: ".{{key}} is a syntax error."
        }
    },

    create(context) {
        const options = context.options[0] || {};
        const allowKeywords = options.allowKeywords === void 0 || options.allowKeywords;
        const sourceCode = context.getSourceCode();

        let allowPattern;

        if (options.allowPattern) {
            allowPattern = new RegExp(options.allowPattern, "u");
        }

        /**
         * Check if the property is valid dot notation
         * @param {ASTNode} node The dot notation node
         * @param {string} value Value which is to be checked
         * @returns {void}
         */
        function checkComputedProperty(node, value) {
            if (
                validIdentifier.test(value) &&
                (allowKeywords || keywords.indexOf(String(value)) === -1) &&
                !(allowPattern && allowPattern.test(value))
            ) {
                const formattedValue = node.property.type === "Literal" ? JSON.stringify(value) : `\`${value}\``;

                context.report({
                    node: node.property,
                    messageId: "useDot",
                    data: {
                        key: formattedValue
                    },
                    *fix(fixer) {
                        const leftBracket = sourceCode.getTokenAfter(node.object, astUtils.isOpeningBracketToken);
                        const rightBracket = sourceCode.getLastToken(node);
                        const nextToken = sourceCode.getTokenAfter(node);

                        // Don't perform any fixes if there are comments inside the brackets.
                        if (sourceCode.commentsExistBetween(leftBracket, rightBracket)) {
                            return;
                        }

                        // Replace the brackets by an identifier.
                        if (!node.optional) {
                            yield fixer.insertTextBefore(
                                leftBracket,
                                astUtils.isDecimalInteger(node.object) ? " ." : "."
                            );
                        }
                        yield fixer.replaceTextRange(
                            [leftBracket.range[0], rightBracket.range[1]],
                            value
                        );

                        // Insert a space after the property if it will be connected to the next token.
                        if (
                            nextToken &&
                            rightBracket.range[1] === nextToken.range[0] &&
                            !astUtils.canTokensBeAdjacent(String(value), nextToken)
                        ) {
                            yield fixer.insertTextAfter(node, " ");
                        }
                    }
                });
            }
        }

        return {
            MemberExpression(node) {
                if (
                    node.computed &&
                    node.property.type === "Literal" &&
                    (literalTypesToCheck.has(typeof node.property.value) || astUtils.isNullLiteral(node.property))
                ) {
                    checkComputedProperty(node, node.property.value);
                }
                if (
                    node.computed &&
                    node.property.type === "TemplateLiteral" &&
                    node.property.expressions.length === 0
                ) {
                    checkComputedProperty(node, node.property.quasis[0].value.cooked);
                }
                if (
                    !allowKeywords &&
                    !node.computed &&
                    keywords.indexOf(String(node.property.name)) !== -1
                ) {
                    context.report({
                        node: node.property,
                        messageId: "useBrackets",
                        data: {
                            key: node.property.name
                        },
                        *fix(fixer) {
                            const dotToken = sourceCode.getTokenBefore(node.property);

                            // A statement that starts with `let[` is parsed as a destructuring variable declaration, not a MemberExpression.
                            if (node.object.type === "Identifier" && node.object.name === "let" && !node.optional) {
                                return;
                            }

                            // Don't perform any fixes if there are comments between the dot and the property name.
                            if (sourceCode.commentsExistBetween(dotToken, node.property)) {
                                return;
                            }

                            // Replace the identifier to brackets.
                            if (!node.optional) {
                                yield fixer.remove(dotToken);
                            }
                            yield fixer.replaceText(node.property, `["${node.property.name}"]`);
                        }
                    });
                }
            }
        };
    }
};

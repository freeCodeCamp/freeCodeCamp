/**
 * @fileoverview Rule to require braces in arrow function body.
 * @author Alberto Rodríguez
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require braces around arrow function bodies",
            category: "ECMAScript 6",
            recommended: false
        },

        schema: {
            anyOf: [
                {
                    type: "array",
                    items: [
                        {
                            enum: ["always", "never"]
                        }
                    ],
                    minItems: 0,
                    maxItems: 1
                },
                {
                    type: "array",
                    items: [
                        {
                            enum: ["as-needed"]
                        },
                        {
                            type: "object",
                            properties: {
                                requireReturnForObjectLiteral: { type: "boolean" }
                            },
                            additionalProperties: false
                        }
                    ],
                    minItems: 0,
                    maxItems: 2
                }
            ]
        },

        fixable: "code"
    },

    create(context) {
        const options = context.options;
        const always = options[0] === "always";
        const asNeeded = !options[0] || options[0] === "as-needed";
        const never = options[0] === "never";
        const requireReturnForObjectLiteral = options[1] && options[1].requireReturnForObjectLiteral;
        const sourceCode = context.getSourceCode();

        /**
         * Determines whether a arrow function body needs braces
         * @param {ASTNode} node The arrow function node.
         * @returns {void}
         */
        function validate(node) {
            const arrowBody = node.body;

            if (arrowBody.type === "BlockStatement") {
                const blockBody = arrowBody.body;

                if (blockBody.length !== 1 && !never) {
                    return;
                }

                if (asNeeded && requireReturnForObjectLiteral && blockBody[0].type === "ReturnStatement" &&
                    blockBody[0].argument && blockBody[0].argument.type === "ObjectExpression") {
                    return;
                }

                if (never || asNeeded && blockBody[0].type === "ReturnStatement") {
                    context.report({
                        node,
                        loc: arrowBody.loc.start,
                        message: "Unexpected block statement surrounding arrow body.",
                        fix(fixer) {
                            if (blockBody.length !== 1 || blockBody[0].type !== "ReturnStatement" || !blockBody[0].argument) {
                                return null;
                            }

                            const sourceText = sourceCode.getText();
                            const returnKeyword = sourceCode.getFirstToken(blockBody[0]);
                            const firstValueToken = sourceCode.getTokenAfter(returnKeyword);
                            let lastValueToken = sourceCode.getLastToken(blockBody[0]);

                            if (astUtils.isSemicolonToken(lastValueToken)) {

                                /* The last token of the returned value is the last token of the ReturnExpression (if
                                 * the ReturnExpression has no semicolon), or the second-to-last token (if the ReturnExpression
                                 * has a semicolon).
                                 */
                                lastValueToken = sourceCode.getTokenBefore(lastValueToken);
                            }

                            const tokenAfterArrowBody = sourceCode.getTokenAfter(arrowBody);

                            if (tokenAfterArrowBody && tokenAfterArrowBody.type === "Punctuator" && /^[([/`+-]/.test(tokenAfterArrowBody.value)) {

                                // Don't do a fix if the next token would cause ASI issues when preceded by the returned value.
                                return null;
                            }

                            const textBeforeReturn = sourceText.slice(arrowBody.range[0] + 1, returnKeyword.range[0]);
                            const textBetweenReturnAndValue = sourceText.slice(returnKeyword.range[1], firstValueToken.range[0]);
                            const rawReturnValueText = sourceText.slice(firstValueToken.range[0], lastValueToken.range[1]);
                            const returnValueText = astUtils.isOpeningBraceToken(firstValueToken) ? `(${rawReturnValueText})` : rawReturnValueText;
                            const textAfterValue = sourceText.slice(lastValueToken.range[1], blockBody[0].range[1] - 1);
                            const textAfterReturnStatement = sourceText.slice(blockBody[0].range[1], arrowBody.range[1] - 1);

                            /*
                             * For fixes that only contain spaces around the return value, remove the extra spaces.
                             * This avoids ugly fixes that end up with extra spaces after the arrow, e.g. `() =>   0 ;`
                             */
                            return fixer.replaceText(
                                arrowBody,
                                (textBeforeReturn + textBetweenReturnAndValue).replace(/^\s*$/, "") + returnValueText + (textAfterValue + textAfterReturnStatement).replace(/^\s*$/, "")
                            );
                        }
                    });
                }
            } else {
                if (always || (asNeeded && requireReturnForObjectLiteral && arrowBody.type === "ObjectExpression")) {
                    context.report({
                        node,
                        loc: arrowBody.loc.start,
                        message: "Expected block statement surrounding arrow body.",
                        fix(fixer) {
                            const lastTokenBeforeBody = sourceCode.getLastTokenBetween(sourceCode.getFirstToken(node), arrowBody, astUtils.isNotOpeningParenToken);
                            const firstBodyToken = sourceCode.getTokenAfter(lastTokenBeforeBody);

                            return fixer.replaceTextRange(
                                [firstBodyToken.range[0], node.range[1]],
                                `{return ${sourceCode.getText().slice(firstBodyToken.range[0], node.range[1])}}`
                            );
                        }
                    });
                }
            }
        }

        return {
            ArrowFunctionExpression: validate
        };
    }
};

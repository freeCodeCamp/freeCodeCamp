/**
 * @fileoverview Rule to require braces in arrow function body.
 * @author Alberto Rodríguez
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
            description: "require braces around arrow function bodies",
            category: "ECMAScript 6",
            recommended: false,
            url: "https://eslint.org/docs/rules/arrow-body-style"
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

        fixable: "code",

        messages: {
            unexpectedOtherBlock: "Unexpected block statement surrounding arrow body.",
            unexpectedEmptyBlock: "Unexpected block statement surrounding arrow body; put a value of `undefined` immediately after the `=>`.",
            unexpectedObjectBlock: "Unexpected block statement surrounding arrow body; parenthesize the returned value and move it immediately after the `=>`.",
            unexpectedSingleBlock: "Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`.",
            expectedBlock: "Expected block statement surrounding arrow body."
        }
    },

    create(context) {
        const options = context.options;
        const always = options[0] === "always";
        const asNeeded = !options[0] || options[0] === "as-needed";
        const never = options[0] === "never";
        const requireReturnForObjectLiteral = options[1] && options[1].requireReturnForObjectLiteral;
        const sourceCode = context.getSourceCode();
        let funcInfo = null;

        /**
         * Checks whether the given node has ASI problem or not.
         * @param {Token} token The token to check.
         * @returns {boolean} `true` if it changes semantics if `;` or `}` followed by the token are removed.
         */
        function hasASIProblem(token) {
            return token && token.type === "Punctuator" && /^[([/`+-]/u.test(token.value);
        }

        /**
         * Gets the closing parenthesis by the given node.
         * @param {ASTNode} node first node after an opening parenthesis.
         * @returns {Token} The found closing parenthesis token.
         */
        function findClosingParen(node) {
            let nodeToCheck = node;

            while (!astUtils.isParenthesised(sourceCode, nodeToCheck)) {
                nodeToCheck = nodeToCheck.parent;
            }
            return sourceCode.getTokenAfter(nodeToCheck);
        }

        /**
         * Check whether the node is inside of a for loop's init
         * @param {ASTNode} node node is inside for loop
         * @returns {boolean} `true` if the node is inside of a for loop, else `false`
         */
        function isInsideForLoopInitializer(node) {
            if (node && node.parent) {
                if (node.parent.type === "ForStatement" && node.parent.init === node) {
                    return true;
                }
                return isInsideForLoopInitializer(node.parent);
            }
            return false;
        }

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
                    let messageId;

                    if (blockBody.length === 0) {
                        messageId = "unexpectedEmptyBlock";
                    } else if (blockBody.length > 1) {
                        messageId = "unexpectedOtherBlock";
                    } else if (blockBody[0].argument === null) {
                        messageId = "unexpectedSingleBlock";
                    } else if (astUtils.isOpeningBraceToken(sourceCode.getFirstToken(blockBody[0], { skip: 1 }))) {
                        messageId = "unexpectedObjectBlock";
                    } else {
                        messageId = "unexpectedSingleBlock";
                    }

                    context.report({
                        node,
                        loc: arrowBody.loc,
                        messageId,
                        fix(fixer) {
                            const fixes = [];

                            if (blockBody.length !== 1 ||
                                blockBody[0].type !== "ReturnStatement" ||
                                !blockBody[0].argument ||
                                hasASIProblem(sourceCode.getTokenAfter(arrowBody))
                            ) {
                                return fixes;
                            }

                            const openingBrace = sourceCode.getFirstToken(arrowBody);
                            const closingBrace = sourceCode.getLastToken(arrowBody);
                            const firstValueToken = sourceCode.getFirstToken(blockBody[0], 1);
                            const lastValueToken = sourceCode.getLastToken(blockBody[0]);
                            const commentsExist =
                                sourceCode.commentsExistBetween(openingBrace, firstValueToken) ||
                                sourceCode.commentsExistBetween(lastValueToken, closingBrace);

                            /*
                             * Remove tokens around the return value.
                             * If comments don't exist, remove extra spaces as well.
                             */
                            if (commentsExist) {
                                fixes.push(
                                    fixer.remove(openingBrace),
                                    fixer.remove(closingBrace),
                                    fixer.remove(sourceCode.getTokenAfter(openingBrace)) // return keyword
                                );
                            } else {
                                fixes.push(
                                    fixer.removeRange([openingBrace.range[0], firstValueToken.range[0]]),
                                    fixer.removeRange([lastValueToken.range[1], closingBrace.range[1]])
                                );
                            }

                            /*
                             * If the first token of the return value is `{` or the return value is a sequence expression,
                             * enclose the return value by parentheses to avoid syntax error.
                             */
                            if (astUtils.isOpeningBraceToken(firstValueToken) || blockBody[0].argument.type === "SequenceExpression" || (funcInfo.hasInOperator && isInsideForLoopInitializer(node))) {
                                if (!astUtils.isParenthesised(sourceCode, blockBody[0].argument)) {
                                    fixes.push(
                                        fixer.insertTextBefore(firstValueToken, "("),
                                        fixer.insertTextAfter(lastValueToken, ")")
                                    );
                                }
                            }

                            /*
                             * If the last token of the return statement is semicolon, remove it.
                             * Non-block arrow body is an expression, not a statement.
                             */
                            if (astUtils.isSemicolonToken(lastValueToken)) {
                                fixes.push(fixer.remove(lastValueToken));
                            }

                            return fixes;
                        }
                    });
                }
            } else {
                if (always || (asNeeded && requireReturnForObjectLiteral && arrowBody.type === "ObjectExpression")) {
                    context.report({
                        node,
                        loc: arrowBody.loc,
                        messageId: "expectedBlock",
                        fix(fixer) {
                            const fixes = [];
                            const arrowToken = sourceCode.getTokenBefore(arrowBody, astUtils.isArrowToken);
                            const [firstTokenAfterArrow, secondTokenAfterArrow] = sourceCode.getTokensAfter(arrowToken, { count: 2 });
                            const lastToken = sourceCode.getLastToken(node);

                            let parenthesisedObjectLiteral = null;

                            if (
                                astUtils.isOpeningParenToken(firstTokenAfterArrow) &&
                                astUtils.isOpeningBraceToken(secondTokenAfterArrow)
                            ) {
                                const braceNode = sourceCode.getNodeByRangeIndex(secondTokenAfterArrow.range[0]);

                                if (braceNode.type === "ObjectExpression") {
                                    parenthesisedObjectLiteral = braceNode;
                                }
                            }

                            // If the value is object literal, remove parentheses which were forced by syntax.
                            if (parenthesisedObjectLiteral) {
                                const openingParenToken = firstTokenAfterArrow;
                                const openingBraceToken = secondTokenAfterArrow;

                                if (astUtils.isTokenOnSameLine(openingParenToken, openingBraceToken)) {
                                    fixes.push(fixer.replaceText(openingParenToken, "{return "));
                                } else {

                                    // Avoid ASI
                                    fixes.push(
                                        fixer.replaceText(openingParenToken, "{"),
                                        fixer.insertTextBefore(openingBraceToken, "return ")
                                    );
                                }

                                // Closing paren for the object doesn't have to be lastToken, e.g.: () => ({}).foo()
                                fixes.push(fixer.remove(findClosingParen(parenthesisedObjectLiteral)));
                                fixes.push(fixer.insertTextAfter(lastToken, "}"));

                            } else {
                                fixes.push(fixer.insertTextBefore(firstTokenAfterArrow, "{return "));
                                fixes.push(fixer.insertTextAfter(lastToken, "}"));
                            }

                            return fixes;
                        }
                    });
                }
            }
        }

        return {
            "BinaryExpression[operator='in']"() {
                let info = funcInfo;

                while (info) {
                    info.hasInOperator = true;
                    info = info.upper;
                }
            },
            ArrowFunctionExpression() {
                funcInfo = {
                    upper: funcInfo,
                    hasInOperator: false
                };
            },
            "ArrowFunctionExpression:exit"(node) {
                validate(node);
                funcInfo = funcInfo.upper;
            }
        };
    }
};

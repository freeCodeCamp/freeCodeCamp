/**
 * @fileoverview Rule to flag missing semicolons.
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
        type: "layout",

        docs: {
            description: "require or disallow semicolons instead of ASI",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/semi"
        },

        fixable: "code",

        schema: {
            anyOf: [
                {
                    type: "array",
                    items: [
                        {
                            enum: ["never"]
                        },
                        {
                            type: "object",
                            properties: {
                                beforeStatementContinuationChars: {
                                    enum: ["always", "any", "never"]
                                }
                            },
                            additionalProperties: false
                        }
                    ],
                    minItems: 0,
                    maxItems: 2
                },
                {
                    type: "array",
                    items: [
                        {
                            enum: ["always"]
                        },
                        {
                            type: "object",
                            properties: {
                                omitLastInOneLineBlock: { type: "boolean" }
                            },
                            additionalProperties: false
                        }
                    ],
                    minItems: 0,
                    maxItems: 2
                }
            ]
        },

        messages: {
            missingSemi: "Missing semicolon.",
            extraSemi: "Extra semicolon."
        }
    },

    create(context) {

        const OPT_OUT_PATTERN = /^[-[(/+`]/u; // One of [(/+-`
        const options = context.options[1];
        const never = context.options[0] === "never";
        const exceptOneLine = Boolean(options && options.omitLastInOneLineBlock);
        const beforeStatementContinuationChars = options && options.beforeStatementContinuationChars || "any";
        const sourceCode = context.getSourceCode();

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Reports a semicolon error with appropriate location and message.
         * @param {ASTNode} node The node with an extra or missing semicolon.
         * @param {boolean} missing True if the semicolon is missing.
         * @returns {void}
         */
        function report(node, missing) {
            const lastToken = sourceCode.getLastToken(node);
            let messageId,
                fix,
                loc;

            if (!missing) {
                messageId = "missingSemi";
                loc = {
                    start: lastToken.loc.end,
                    end: astUtils.getNextLocation(sourceCode, lastToken.loc.end)
                };
                fix = function(fixer) {
                    return fixer.insertTextAfter(lastToken, ";");
                };
            } else {
                messageId = "extraSemi";
                loc = lastToken.loc;
                fix = function(fixer) {

                    /*
                     * Expand the replacement range to include the surrounding
                     * tokens to avoid conflicting with no-extra-semi.
                     * https://github.com/eslint/eslint/issues/7928
                     */
                    return new FixTracker(fixer, sourceCode)
                        .retainSurroundingTokens(lastToken)
                        .remove(lastToken);
                };
            }

            context.report({
                node,
                loc,
                messageId,
                fix
            });

        }

        /**
         * Check whether a given semicolon token is redundant.
         * @param {Token} semiToken A semicolon token to check.
         * @returns {boolean} `true` if the next token is `;` or `}`.
         */
        function isRedundantSemi(semiToken) {
            const nextToken = sourceCode.getTokenAfter(semiToken);

            return (
                !nextToken ||
                astUtils.isClosingBraceToken(nextToken) ||
                astUtils.isSemicolonToken(nextToken)
            );
        }

        /**
         * Check whether a given token is the closing brace of an arrow function.
         * @param {Token} lastToken A token to check.
         * @returns {boolean} `true` if the token is the closing brace of an arrow function.
         */
        function isEndOfArrowBlock(lastToken) {
            if (!astUtils.isClosingBraceToken(lastToken)) {
                return false;
            }
            const node = sourceCode.getNodeByRangeIndex(lastToken.range[0]);

            return (
                node.type === "BlockStatement" &&
                node.parent.type === "ArrowFunctionExpression"
            );
        }

        /**
         * Check whether a given node is on the same line with the next token.
         * @param {Node} node A statement node to check.
         * @returns {boolean} `true` if the node is on the same line with the next token.
         */
        function isOnSameLineWithNextToken(node) {
            const prevToken = sourceCode.getLastToken(node, 1);
            const nextToken = sourceCode.getTokenAfter(node);

            return !!nextToken && astUtils.isTokenOnSameLine(prevToken, nextToken);
        }

        /**
         * Check whether a given node can connect the next line if the next line is unreliable.
         * @param {Node} node A statement node to check.
         * @returns {boolean} `true` if the node can connect the next line.
         */
        function maybeAsiHazardAfter(node) {
            const t = node.type;

            if (t === "DoWhileStatement" ||
                t === "BreakStatement" ||
                t === "ContinueStatement" ||
                t === "DebuggerStatement" ||
                t === "ImportDeclaration" ||
                t === "ExportAllDeclaration"
            ) {
                return false;
            }
            if (t === "ReturnStatement") {
                return Boolean(node.argument);
            }
            if (t === "ExportNamedDeclaration") {
                return Boolean(node.declaration);
            }
            if (isEndOfArrowBlock(sourceCode.getLastToken(node, 1))) {
                return false;
            }

            return true;
        }

        /**
         * Check whether a given token can connect the previous statement.
         * @param {Token} token A token to check.
         * @returns {boolean} `true` if the token is one of `[`, `(`, `/`, `+`, `-`, ```, `++`, and `--`.
         */
        function maybeAsiHazardBefore(token) {
            return (
                Boolean(token) &&
                OPT_OUT_PATTERN.test(token.value) &&
                token.value !== "++" &&
                token.value !== "--"
            );
        }

        /**
         * Check if the semicolon of a given node is unnecessary, only true if:
         *   - next token is a valid statement divider (`;` or `}`).
         *   - next token is on a new line and the node is not connectable to the new line.
         * @param {Node} node A statement node to check.
         * @returns {boolean} whether the semicolon is unnecessary.
         */
        function canRemoveSemicolon(node) {
            if (isRedundantSemi(sourceCode.getLastToken(node))) {
                return true; // `;;` or `;}`
            }
            if (isOnSameLineWithNextToken(node)) {
                return false; // One liner.
            }
            if (beforeStatementContinuationChars === "never" && !maybeAsiHazardAfter(node)) {
                return true; // ASI works. This statement doesn't connect to the next.
            }
            if (!maybeAsiHazardBefore(sourceCode.getTokenAfter(node))) {
                return true; // ASI works. The next token doesn't connect to this statement.
            }

            return false;
        }

        /**
         * Checks a node to see if it's in a one-liner block statement.
         * @param {ASTNode} node The node to check.
         * @returns {boolean} whether the node is in a one-liner block statement.
         */
        function isOneLinerBlock(node) {
            const parent = node.parent;
            const nextToken = sourceCode.getTokenAfter(node);

            if (!nextToken || nextToken.value !== "}") {
                return false;
            }
            return (
                !!parent &&
                parent.type === "BlockStatement" &&
                parent.loc.start.line === parent.loc.end.line
            );
        }

        /**
         * Checks a node to see if it's followed by a semicolon.
         * @param {ASTNode} node The node to check.
         * @returns {void}
         */
        function checkForSemicolon(node) {
            const isSemi = astUtils.isSemicolonToken(sourceCode.getLastToken(node));

            if (never) {
                if (isSemi && canRemoveSemicolon(node)) {
                    report(node, true);
                } else if (!isSemi && beforeStatementContinuationChars === "always" && maybeAsiHazardBefore(sourceCode.getTokenAfter(node))) {
                    report(node);
                }
            } else {
                const oneLinerBlock = (exceptOneLine && isOneLinerBlock(node));

                if (isSemi && oneLinerBlock) {
                    report(node, true);
                } else if (!isSemi && !oneLinerBlock) {
                    report(node);
                }
            }
        }

        /**
         * Checks to see if there's a semicolon after a variable declaration.
         * @param {ASTNode} node The node to check.
         * @returns {void}
         */
        function checkForSemicolonForVariableDeclaration(node) {
            const parent = node.parent;

            if ((parent.type !== "ForStatement" || parent.init !== node) &&
                (!/^For(?:In|Of)Statement/u.test(parent.type) || parent.left !== node)
            ) {
                checkForSemicolon(node);
            }
        }

        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {
            VariableDeclaration: checkForSemicolonForVariableDeclaration,
            ExpressionStatement: checkForSemicolon,
            ReturnStatement: checkForSemicolon,
            ThrowStatement: checkForSemicolon,
            DoWhileStatement: checkForSemicolon,
            DebuggerStatement: checkForSemicolon,
            BreakStatement: checkForSemicolon,
            ContinueStatement: checkForSemicolon,
            ImportDeclaration: checkForSemicolon,
            ExportAllDeclaration: checkForSemicolon,
            ExportNamedDeclaration(node) {
                if (!node.declaration) {
                    checkForSemicolon(node);
                }
            },
            ExportDefaultDeclaration(node) {
                if (!/(?:Class|Function)Declaration/u.test(node.declaration.type)) {
                    checkForSemicolon(node);
                }
            }
        };

    }
};

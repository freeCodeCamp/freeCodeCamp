/**
 * @fileoverview Rule to flag missing semicolons.
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const FixTracker = require("../util/fix-tracker");
const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require or disallow semicolons instead of ASI",
            category: "Stylistic Issues",
            recommended: false
        },

        fixable: "code",

        schema: {
            anyOf: [
                {
                    type: "array",
                    items: [
                        {
                            enum: ["never"]
                        }
                    ],
                    minItems: 0,
                    maxItems: 1
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
        }
    },

    create(context) {

        const OPT_OUT_PATTERN = /^[-[(/+`]/; // One of [(/+-`
        const options = context.options[1];
        const never = context.options[0] === "never",
            exceptOneLine = options && options.omitLastInOneLineBlock === true,
            sourceCode = context.getSourceCode();

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
            let message,
                fix,
                loc = lastToken.loc;

            if (!missing) {
                message = "Missing semicolon.";
                loc = loc.end;
                fix = function(fixer) {
                    return fixer.insertTextAfter(lastToken, ";");
                };
            } else {
                message = "Extra semicolon.";
                loc = loc.start;
                fix = function(fixer) {

                    // Expand the replacement range to include the surrounding
                    // tokens to avoid conflicting with no-extra-semi.
                    // https://github.com/eslint/eslint/issues/7928
                    return new FixTracker(fixer, sourceCode)
                        .retainSurroundingTokens(lastToken)
                        .remove(lastToken);
                };
            }

            context.report({
                node,
                loc,
                message,
                fix
            });

        }

        /**
         * Check if a semicolon is unnecessary, only true if:
         *   - next token is on a new line and is not one of the opt-out tokens
         *   - next token is a valid statement divider
         * @param {Token} lastToken last token of current node.
         * @returns {boolean} whether the semicolon is unnecessary.
         */
        function isUnnecessarySemicolon(lastToken) {
            if (!astUtils.isSemicolonToken(lastToken)) {
                return false;
            }

            const nextToken = sourceCode.getTokenAfter(lastToken);

            if (!nextToken) {
                return true;
            }

            const lastTokenLine = lastToken.loc.end.line;
            const nextTokenLine = nextToken.loc.start.line;
            const isOptOutToken = OPT_OUT_PATTERN.test(nextToken.value) && nextToken.value !== "++" && nextToken.value !== "--";
            const isDivider = (astUtils.isClosingBraceToken(nextToken) || astUtils.isSemicolonToken(nextToken));

            return (lastTokenLine !== nextTokenLine && !isOptOutToken) || isDivider;
        }

        /**
         * Checks a node to see if it's in a one-liner block statement.
         * @param {ASTNode} node The node to check.
         * @returns {boolean} whether the node is in a one-liner block statement.
         */
        function isOneLinerBlock(node) {
            const nextToken = sourceCode.getTokenAfter(node);

            if (!nextToken || nextToken.value !== "}") {
                return false;
            }

            const parent = node.parent;

            return parent && parent.type === "BlockStatement" &&
              parent.loc.start.line === parent.loc.end.line;
        }

        /**
         * Checks a node to see if it's followed by a semicolon.
         * @param {ASTNode} node The node to check.
         * @returns {void}
         */
        function checkForSemicolon(node) {
            const lastToken = sourceCode.getLastToken(node);

            if (never) {
                if (isUnnecessarySemicolon(lastToken)) {
                    report(node, true);
                }
            } else {
                if (!astUtils.isSemicolonToken(lastToken)) {
                    if (!exceptOneLine || !isOneLinerBlock(node)) {
                        report(node);
                    }
                } else {
                    if (exceptOneLine && isOneLinerBlock(node)) {
                        report(node, true);
                    }
                }
            }
        }

        /**
         * Checks to see if there's a semicolon after a variable declaration.
         * @param {ASTNode} node The node to check.
         * @returns {void}
         */
        function checkForSemicolonForVariableDeclaration(node) {
            const ancestors = context.getAncestors(),
                parentIndex = ancestors.length - 1,
                parent = ancestors[parentIndex];

            if ((parent.type !== "ForStatement" || parent.init !== node) &&
                (!/^For(?:In|Of)Statement/.test(parent.type) || parent.left !== node)
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
                if (!/(?:Class|Function)Declaration/.test(node.declaration.type)) {
                    checkForSemicolon(node);
                }
            }
        };

    }
};

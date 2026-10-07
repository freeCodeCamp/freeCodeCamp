/**
 * @fileoverview A rule to ensure whitespace before blocks.
 * @author Mathias Schreck <https://github.com/lo1tuma>
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether the given node represents the body of a function.
 * @param {ASTNode} node the node to check.
 * @returns {boolean} `true` if the node is function body.
 */
function isFunctionBody(node) {
    const parent = node.parent;

    return (
        node.type === "BlockStatement" &&
        astUtils.isFunction(parent) &&
        parent.body === node
    );
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "enforce consistent spacing before blocks",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/space-before-blocks"
        },

        fixable: "whitespace",

        schema: [
            {
                oneOf: [
                    {
                        enum: ["always", "never"]
                    },
                    {
                        type: "object",
                        properties: {
                            keywords: {
                                enum: ["always", "never", "off"]
                            },
                            functions: {
                                enum: ["always", "never", "off"]
                            },
                            classes: {
                                enum: ["always", "never", "off"]
                            }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ],

        messages: {
            unexpectedSpace: "Unexpected space before opening brace.",
            missingSpace: "Missing space before opening brace."
        }
    },

    create(context) {
        const config = context.options[0],
            sourceCode = context.getSourceCode();
        let alwaysFunctions = true,
            alwaysKeywords = true,
            alwaysClasses = true,
            neverFunctions = false,
            neverKeywords = false,
            neverClasses = false;

        if (typeof config === "object") {
            alwaysFunctions = config.functions === "always";
            alwaysKeywords = config.keywords === "always";
            alwaysClasses = config.classes === "always";
            neverFunctions = config.functions === "never";
            neverKeywords = config.keywords === "never";
            neverClasses = config.classes === "never";
        } else if (config === "never") {
            alwaysFunctions = false;
            alwaysKeywords = false;
            alwaysClasses = false;
            neverFunctions = true;
            neverKeywords = true;
            neverClasses = true;
        }

        /**
         * Checks whether the spacing before the given block is already controlled by another rule:
         * - `arrow-spacing` checks spaces after `=>`.
         * - `keyword-spacing` checks spaces after keywords in certain contexts.
         * @param {Token} precedingToken first token before the block.
         * @param {ASTNode|Token} node `BlockStatement` node or `{` token of a `SwitchStatement` node.
         * @returns {boolean} `true` if requiring or disallowing spaces before the given block could produce conflicts with other rules.
         */
        function isConflicted(precedingToken, node) {
            return astUtils.isArrowToken(precedingToken) ||
                astUtils.isKeywordToken(precedingToken) && !isFunctionBody(node);
        }

        /**
         * Checks the given BlockStatement node has a preceding space if it doesn’t start on a new line.
         * @param {ASTNode|Token} node The AST node of a BlockStatement.
         * @returns {void} undefined.
         */
        function checkPrecedingSpace(node) {
            const precedingToken = sourceCode.getTokenBefore(node);

            if (precedingToken && !isConflicted(precedingToken, node) && astUtils.isTokenOnSameLine(precedingToken, node)) {
                const hasSpace = sourceCode.isSpaceBetweenTokens(precedingToken, node);
                let requireSpace;
                let requireNoSpace;

                if (isFunctionBody(node)) {
                    requireSpace = alwaysFunctions;
                    requireNoSpace = neverFunctions;
                } else if (node.type === "ClassBody") {
                    requireSpace = alwaysClasses;
                    requireNoSpace = neverClasses;
                } else {
                    requireSpace = alwaysKeywords;
                    requireNoSpace = neverKeywords;
                }

                if (requireSpace && !hasSpace) {
                    context.report({
                        node,
                        messageId: "missingSpace",
                        fix(fixer) {
                            return fixer.insertTextBefore(node, " ");
                        }
                    });
                } else if (requireNoSpace && hasSpace) {
                    context.report({
                        node,
                        messageId: "unexpectedSpace",
                        fix(fixer) {
                            return fixer.removeRange([precedingToken.range[1], node.range[0]]);
                        }
                    });
                }
            }
        }

        /**
         * Checks if the CaseBlock of an given SwitchStatement node has a preceding space.
         * @param {ASTNode} node The node of a SwitchStatement.
         * @returns {void} undefined.
         */
        function checkSpaceBeforeCaseBlock(node) {
            const cases = node.cases;
            let openingBrace;

            if (cases.length > 0) {
                openingBrace = sourceCode.getTokenBefore(cases[0]);
            } else {
                openingBrace = sourceCode.getLastToken(node, 1);
            }

            checkPrecedingSpace(openingBrace);
        }

        return {
            BlockStatement: checkPrecedingSpace,
            ClassBody: checkPrecedingSpace,
            SwitchStatement: checkSpaceBeforeCaseBlock
        };

    }
};

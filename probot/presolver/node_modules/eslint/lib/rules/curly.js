/**
 * @fileoverview Rule to flag statements without curly braces
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");
const esUtils = require("esutils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce consistent brace style for all control statements",
            category: "Best Practices",
            recommended: false
        },

        schema: {
            anyOf: [
                {
                    type: "array",
                    items: [
                        {
                            enum: ["all"]
                        }
                    ],
                    minItems: 0,
                    maxItems: 1
                },
                {
                    type: "array",
                    items: [
                        {
                            enum: ["multi", "multi-line", "multi-or-nest"]
                        },
                        {
                            enum: ["consistent"]
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

        const multiOnly = (context.options[0] === "multi");
        const multiLine = (context.options[0] === "multi-line");
        const multiOrNest = (context.options[0] === "multi-or-nest");
        const consistent = (context.options[1] === "consistent");

        const sourceCode = context.getSourceCode();

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Determines if a given node is a one-liner that's on the same line as it's preceding code.
         * @param {ASTNode} node The node to check.
         * @returns {boolean} True if the node is a one-liner that's on the same line as it's preceding code.
         * @private
         */
        function isCollapsedOneLiner(node) {
            const before = sourceCode.getTokenBefore(node);
            const last = sourceCode.getLastToken(node);
            const lastExcludingSemicolon = astUtils.isSemicolonToken(last) ? sourceCode.getTokenBefore(last) : last;

            return before.loc.start.line === lastExcludingSemicolon.loc.end.line;
        }

        /**
         * Determines if a given node is a one-liner.
         * @param {ASTNode} node The node to check.
         * @returns {boolean} True if the node is a one-liner.
         * @private
         */
        function isOneLiner(node) {
            const first = sourceCode.getFirstToken(node),
                last = sourceCode.getLastToken(node);

            return first.loc.start.line === last.loc.end.line;
        }

        /**
         * Checks if the given token is an `else` token or not.
         *
         * @param {Token} token - The token to check.
         * @returns {boolean} `true` if the token is an `else` token.
         */
        function isElseKeywordToken(token) {
            return token.value === "else" && token.type === "Keyword";
        }

        /**
         * Gets the `else` keyword token of a given `IfStatement` node.
         * @param {ASTNode} node - A `IfStatement` node to get.
         * @returns {Token} The `else` keyword token.
         */
        function getElseKeyword(node) {
            return node.alternate && sourceCode.getFirstTokenBetween(node.consequent, node.alternate, isElseKeywordToken);
        }

        /**
         * Checks a given IfStatement node requires braces of the consequent chunk.
         * This returns `true` when below:
         *
         * 1. The given node has the `alternate` node.
         * 2. There is a `IfStatement` which doesn't have `alternate` node in the
         *    trailing statement chain of the `consequent` node.
         *
         * @param {ASTNode} node - A IfStatement node to check.
         * @returns {boolean} `true` if the node requires braces of the consequent chunk.
         */
        function requiresBraceOfConsequent(node) {
            if (node.alternate && node.consequent.type === "BlockStatement") {
                if (node.consequent.body.length >= 2) {
                    return true;
                }

                node = node.consequent.body[0];
                while (node) {
                    if (node.type === "IfStatement" && !node.alternate) {
                        return true;
                    }
                    node = astUtils.getTrailingStatement(node);
                }
            }

            return false;
        }

        /**
         * Reports "Expected { after ..." error
         * @param {ASTNode} node The node to report.
         * @param {ASTNode} bodyNode The body node that is incorrectly missing curly brackets
         * @param {string} name The name to report.
         * @param {string} suffix Additional string to add to the end of a report.
         * @returns {void}
         * @private
         */
        function reportExpectedBraceError(node, bodyNode, name, suffix) {
            context.report({
                node,
                loc: (name !== "else" ? node : getElseKeyword(node)).loc.start,
                message: "Expected { after '{{name}}'{{suffix}}.",
                data: {
                    name,
                    suffix: (suffix ? ` ${suffix}` : "")
                },
                fix: fixer => fixer.replaceText(bodyNode, `{${sourceCode.getText(bodyNode)}}`)
            });
        }

        /**
        * Determines if a semicolon needs to be inserted after removing a set of curly brackets, in order to avoid a SyntaxError.
        * @param {Token} closingBracket The } token
        * @returns {boolean} `true` if a semicolon needs to be inserted after the last statement in the block.
        */
        function needsSemicolon(closingBracket) {
            const tokenBefore = sourceCode.getTokenBefore(closingBracket);
            const tokenAfter = sourceCode.getTokenAfter(closingBracket);
            const lastBlockNode = sourceCode.getNodeByRangeIndex(tokenBefore.range[0]);

            if (astUtils.isSemicolonToken(tokenBefore)) {

                // If the last statement already has a semicolon, don't add another one.
                return false;
            }

            if (!tokenAfter) {

                // If there are no statements after this block, there is no need to add a semicolon.
                return false;
            }

            if (lastBlockNode.type === "BlockStatement" && lastBlockNode.parent.type !== "FunctionExpression" && lastBlockNode.parent.type !== "ArrowFunctionExpression") {

                // If the last node surrounded by curly brackets is a BlockStatement (other than a FunctionExpression or an ArrowFunctionExpression),
                // don't insert a semicolon. Otherwise, the semicolon would be parsed as a separate statement, which would cause
                // a SyntaxError if it was followed by `else`.
                return false;
            }

            if (tokenBefore.loc.end.line === tokenAfter.loc.start.line) {

                // If the next token is on the same line, insert a semicolon.
                return true;
            }

            if (/^[([/`+-]/.test(tokenAfter.value)) {

                // If the next token starts with a character that would disrupt ASI, insert a semicolon.
                return true;
            }

            if (tokenBefore.type === "Punctuator" && (tokenBefore.value === "++" || tokenBefore.value === "--")) {

                // If the last token is ++ or --, insert a semicolon to avoid disrupting ASI.
                return true;
            }

            // Otherwise, do not insert a semicolon.
            return false;
        }

        /**
         * Reports "Unnecessary { after ..." error
         * @param {ASTNode} node The node to report.
         * @param {ASTNode} bodyNode The block statement that is incorrectly surrounded by parens
         * @param {string} name The name to report.
         * @param {string} suffix Additional string to add to the end of a report.
         * @returns {void}
         * @private
         */
        function reportUnnecessaryBraceError(node, bodyNode, name, suffix) {
            context.report({
                node,
                loc: (name !== "else" ? node : getElseKeyword(node)).loc.start,
                message: "Unnecessary { after '{{name}}'{{suffix}}.",
                data: {
                    name,
                    suffix: (suffix ? ` ${suffix}` : "")
                },
                fix(fixer) {

                    // `do while` expressions sometimes need a space to be inserted after `do`.
                    // e.g. `do{foo()} while (bar)` should be corrected to `do foo() while (bar)`
                    const needsPrecedingSpace = node.type === "DoWhileStatement" &&
                        sourceCode.getTokenBefore(bodyNode).end === bodyNode.start &&
                        esUtils.code.isIdentifierPartES6(sourceCode.getText(bodyNode).charCodeAt(1));

                    const openingBracket = sourceCode.getFirstToken(bodyNode);
                    const closingBracket = sourceCode.getLastToken(bodyNode);
                    const lastTokenInBlock = sourceCode.getTokenBefore(closingBracket);

                    if (needsSemicolon(closingBracket)) {

                        /*
                         * If removing braces would cause a SyntaxError due to multiple statements on the same line (or
                         * change the semantics of the code due to ASI), don't perform a fix.
                         */
                        return null;
                    }

                    const resultingBodyText = sourceCode.getText().slice(openingBracket.range[1], lastTokenInBlock.range[0]) +
                        sourceCode.getText(lastTokenInBlock) +
                        sourceCode.getText().slice(lastTokenInBlock.range[1], closingBracket.range[0]);

                    return fixer.replaceText(bodyNode, (needsPrecedingSpace ? " " : "") + resultingBodyText);
                }
            });
        }

        /**
         * Prepares to check the body of a node to see if it's a block statement.
         * @param {ASTNode} node The node to report if there's a problem.
         * @param {ASTNode} body The body node to check for blocks.
         * @param {string} name The name to report if there's a problem.
         * @param {string} suffix Additional string to add to the end of a report.
         * @returns {Object} a prepared check object, with "actual", "expected", "check" properties.
         *   "actual" will be `true` or `false` whether the body is already a block statement.
         *   "expected" will be `true` or `false` if the body should be a block statement or not, or
         *   `null` if it doesn't matter, depending on the rule options. It can be modified to change
         *   the final behavior of "check".
         *   "check" will be a function reporting appropriate problems depending on the other
         *   properties.
         */
        function prepareCheck(node, body, name, suffix) {
            const hasBlock = (body.type === "BlockStatement");
            let expected = null;

            if (node.type === "IfStatement" && node.consequent === body && requiresBraceOfConsequent(node)) {
                expected = true;
            } else if (multiOnly) {
                if (hasBlock && body.body.length === 1) {
                    expected = false;
                }
            } else if (multiLine) {
                if (!isCollapsedOneLiner(body)) {
                    expected = true;
                }
            } else if (multiOrNest) {
                if (hasBlock && body.body.length === 1 && isOneLiner(body.body[0])) {
                    const leadingComments = sourceCode.getComments(body.body[0]).leading;

                    expected = leadingComments.length > 0;
                } else if (!isOneLiner(body)) {
                    expected = true;
                }
            } else {
                expected = true;
            }

            return {
                actual: hasBlock,
                expected,
                check() {
                    if (this.expected !== null && this.expected !== this.actual) {
                        if (this.expected) {
                            reportExpectedBraceError(node, body, name, suffix);
                        } else {
                            reportUnnecessaryBraceError(node, body, name, suffix);
                        }
                    }
                }
            };
        }

        /**
         * Prepares to check the bodies of a "if", "else if" and "else" chain.
         * @param {ASTNode} node The first IfStatement node of the chain.
         * @returns {Object[]} prepared checks for each body of the chain. See `prepareCheck` for more
         *   information.
         */
        function prepareIfChecks(node) {
            const preparedChecks = [];

            do {
                preparedChecks.push(prepareCheck(node, node.consequent, "if", "condition"));
                if (node.alternate && node.alternate.type !== "IfStatement") {
                    preparedChecks.push(prepareCheck(node, node.alternate, "else"));
                    break;
                }
                node = node.alternate;
            } while (node);

            if (consistent) {

                /*
                 * If any node should have or already have braces, make sure they
                 * all have braces.
                 * If all nodes shouldn't have braces, make sure they don't.
                 */
                const expected = preparedChecks.some(preparedCheck => {
                    if (preparedCheck.expected !== null) {
                        return preparedCheck.expected;
                    }
                    return preparedCheck.actual;
                });

                preparedChecks.forEach(preparedCheck => {
                    preparedCheck.expected = expected;
                });
            }

            return preparedChecks;
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            IfStatement(node) {
                if (node.parent.type !== "IfStatement") {
                    prepareIfChecks(node).forEach(preparedCheck => {
                        preparedCheck.check();
                    });
                }
            },

            WhileStatement(node) {
                prepareCheck(node, node.body, "while", "condition").check();
            },

            DoWhileStatement(node) {
                prepareCheck(node, node.body, "do").check();
            },

            ForStatement(node) {
                prepareCheck(node, node.body, "for", "condition").check();
            },

            ForInStatement(node) {
                prepareCheck(node, node.body, "for-in").check();
            },

            ForOfStatement(node) {
                prepareCheck(node, node.body, "for-of").check();
            }
        };
    }
};

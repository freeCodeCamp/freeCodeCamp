/**
 * @fileoverview Rule to flag statements without curly braces
 * @author Nicholas C. Zakas
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
            description: "enforce consistent brace style for all control statements",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/curly"
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

        fixable: "code",

        messages: {
            missingCurlyAfter: "Expected { after '{{name}}'.",
            missingCurlyAfterCondition: "Expected { after '{{name}}' condition.",
            unexpectedCurlyAfter: "Unnecessary { after '{{name}}'.",
            unexpectedCurlyAfterCondition: "Unnecessary { after '{{name}}' condition."
        }
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
            if (node.type === "EmptyStatement") {
                return true;
            }

            const first = sourceCode.getFirstToken(node);
            const last = sourceCode.getLastToken(node);
            const lastExcludingSemicolon = astUtils.isSemicolonToken(last) ? sourceCode.getTokenBefore(last) : last;

            return first.loc.start.line === lastExcludingSemicolon.loc.end.line;
        }

        /**
         * Determines if the given node is a lexical declaration (let, const, function, or class)
         * @param {ASTNode} node The node to check
         * @returns {boolean} True if the node is a lexical declaration
         * @private
         */
        function isLexicalDeclaration(node) {
            if (node.type === "VariableDeclaration") {
                return node.kind === "const" || node.kind === "let";
            }

            return node.type === "FunctionDeclaration" || node.type === "ClassDeclaration";
        }

        /**
         * Checks if the given token is an `else` token or not.
         * @param {Token} token The token to check.
         * @returns {boolean} `true` if the token is an `else` token.
         */
        function isElseKeywordToken(token) {
            return token.value === "else" && token.type === "Keyword";
        }

        /**
         * Determines whether the given node has an `else` keyword token as the first token after.
         * @param {ASTNode} node The node to check.
         * @returns {boolean} `true` if the node is followed by an `else` keyword token.
         */
        function isFollowedByElseKeyword(node) {
            const nextToken = sourceCode.getTokenAfter(node);

            return Boolean(nextToken) && isElseKeywordToken(nextToken);
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

                /*
                 * If the last node surrounded by curly brackets is a BlockStatement (other than a FunctionExpression or an ArrowFunctionExpression),
                 * don't insert a semicolon. Otherwise, the semicolon would be parsed as a separate statement, which would cause
                 * a SyntaxError if it was followed by `else`.
                 */
                return false;
            }

            if (tokenBefore.loc.end.line === tokenAfter.loc.start.line) {

                // If the next token is on the same line, insert a semicolon.
                return true;
            }

            if (/^[([/`+-]/u.test(tokenAfter.value)) {

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
         * Determines whether the code represented by the given node contains an `if` statement
         * that would become associated with an `else` keyword directly appended to that code.
         *
         * Examples where it returns `true`:
         *
         *    if (a)
         *        foo();
         *
         *    if (a) {
         *        foo();
         *    }
         *
         *    if (a)
         *        foo();
         *    else if (b)
         *        bar();
         *
         *    while (a)
         *        if (b)
         *            if(c)
         *                foo();
         *            else
         *                bar();
         *
         * Examples where it returns `false`:
         *
         *    if (a)
         *        foo();
         *    else
         *        bar();
         *
         *    while (a) {
         *        if (b)
         *            if(c)
         *                foo();
         *            else
         *                bar();
         *    }
         *
         *    while (a)
         *        if (b) {
         *            if(c)
         *                foo();
         *        }
         *        else
         *            bar();
         * @param {ASTNode} node Node representing the code to check.
         * @returns {boolean} `true` if an `if` statement within the code would become associated with an `else` appended to that code.
         */
        function hasUnsafeIf(node) {
            switch (node.type) {
                case "IfStatement":
                    if (!node.alternate) {
                        return true;
                    }
                    return hasUnsafeIf(node.alternate);
                case "ForStatement":
                case "ForInStatement":
                case "ForOfStatement":
                case "LabeledStatement":
                case "WithStatement":
                case "WhileStatement":
                    return hasUnsafeIf(node.body);
                default:
                    return false;
            }
        }

        /**
         * Determines whether the existing curly braces around the single statement are necessary to preserve the semantics of the code.
         * The braces, which make the given block body, are necessary in either of the following situations:
         *
         * 1. The statement is a lexical declaration.
         * 2. Without the braces, an `if` within the statement would become associated with an `else` after the closing brace:
         *
         *     if (a) {
         *         if (b)
         *             foo();
         *     }
         *     else
         *         bar();
         *
         *     if (a)
         *         while (b)
         *             while (c) {
         *                 while (d)
         *                     if (e)
         *                         while(f)
         *                             foo();
         *            }
         *     else
         *         bar();
         * @param {ASTNode} node `BlockStatement` body with exactly one statement directly inside. The statement can have its own nested statements.
         * @returns {boolean} `true` if the braces are necessary - removing them (replacing the given `BlockStatement` body with its single statement content)
         * would change the semantics of the code or produce a syntax error.
         */
        function areBracesNecessary(node) {
            const statement = node.body[0];

            return isLexicalDeclaration(statement) ||
                hasUnsafeIf(statement) && isFollowedByElseKeyword(node);
        }

        /**
         * Prepares to check the body of a node to see if it's a block statement.
         * @param {ASTNode} node The node to report if there's a problem.
         * @param {ASTNode} body The body node to check for blocks.
         * @param {string} name The name to report if there's a problem.
         * @param {{ condition: boolean }} opts Options to pass to the report functions
         * @returns {Object} a prepared check object, with "actual", "expected", "check" properties.
         *   "actual" will be `true` or `false` whether the body is already a block statement.
         *   "expected" will be `true` or `false` if the body should be a block statement or not, or
         *   `null` if it doesn't matter, depending on the rule options. It can be modified to change
         *   the final behavior of "check".
         *   "check" will be a function reporting appropriate problems depending on the other
         *   properties.
         */
        function prepareCheck(node, body, name, opts) {
            const hasBlock = (body.type === "BlockStatement");
            let expected = null;

            if (hasBlock && (body.body.length !== 1 || areBracesNecessary(body))) {
                expected = true;
            } else if (multiOnly) {
                expected = false;
            } else if (multiLine) {
                if (!isCollapsedOneLiner(body)) {
                    expected = true;
                }

                // otherwise, the body is allowed to have braces or not to have braces

            } else if (multiOrNest) {
                if (hasBlock) {
                    const statement = body.body[0];
                    const leadingCommentsInBlock = sourceCode.getCommentsBefore(statement);

                    expected = !isOneLiner(statement) || leadingCommentsInBlock.length > 0;
                } else {
                    expected = !isOneLiner(body);
                }
            } else {

                // default "all"
                expected = true;
            }

            return {
                actual: hasBlock,
                expected,
                check() {
                    if (this.expected !== null && this.expected !== this.actual) {
                        if (this.expected) {
                            context.report({
                                node,
                                loc: body.loc,
                                messageId: opts && opts.condition ? "missingCurlyAfterCondition" : "missingCurlyAfter",
                                data: {
                                    name
                                },
                                fix: fixer => fixer.replaceText(body, `{${sourceCode.getText(body)}}`)
                            });
                        } else {
                            context.report({
                                node,
                                loc: body.loc,
                                messageId: opts && opts.condition ? "unexpectedCurlyAfterCondition" : "unexpectedCurlyAfter",
                                data: {
                                    name
                                },
                                fix(fixer) {

                                    /*
                                     * `do while` expressions sometimes need a space to be inserted after `do`.
                                     * e.g. `do{foo()} while (bar)` should be corrected to `do foo() while (bar)`
                                     */
                                    const needsPrecedingSpace = node.type === "DoWhileStatement" &&
                                        sourceCode.getTokenBefore(body).range[1] === body.range[0] &&
                                        !astUtils.canTokensBeAdjacent("do", sourceCode.getFirstToken(body, { skip: 1 }));

                                    const openingBracket = sourceCode.getFirstToken(body);
                                    const closingBracket = sourceCode.getLastToken(body);
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

                                    return fixer.replaceText(body, (needsPrecedingSpace ? " " : "") + resultingBodyText);
                                }
                            });
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

            for (let currentNode = node; currentNode; currentNode = currentNode.alternate) {
                preparedChecks.push(prepareCheck(currentNode, currentNode.consequent, "if", { condition: true }));
                if (currentNode.alternate && currentNode.alternate.type !== "IfStatement") {
                    preparedChecks.push(prepareCheck(currentNode, currentNode.alternate, "else"));
                    break;
                }
            }

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
                const parent = node.parent;
                const isElseIf = parent.type === "IfStatement" && parent.alternate === node;

                if (!isElseIf) {

                    // This is a top `if`, check the whole `if-else-if` chain
                    prepareIfChecks(node).forEach(preparedCheck => {
                        preparedCheck.check();
                    });
                }

                // Skip `else if`, it's already checked (when the top `if` was visited)
            },

            WhileStatement(node) {
                prepareCheck(node, node.body, "while", { condition: true }).check();
            },

            DoWhileStatement(node) {
                prepareCheck(node, node.body, "do").check();
            },

            ForStatement(node) {
                prepareCheck(node, node.body, "for", { condition: true }).check();
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

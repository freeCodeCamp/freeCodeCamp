/**
 * @fileoverview Specify the maximum number of statements allowed per line.
 * @author Kenneth Williams
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
            description: "enforce a maximum number of statements allowed per line",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: [
            {
                type: "object",
                properties: {
                    max: {
                        type: "integer",
                        minimum: 1
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {

        const sourceCode = context.getSourceCode(),
            options = context.options[0] || {},
            maxStatementsPerLine = typeof options.max !== "undefined" ? options.max : 1,
            message = "This line has {{numberOfStatementsOnThisLine}} {{statements}}. Maximum allowed is {{maxStatementsPerLine}}.";

        let lastStatementLine = 0,
            numberOfStatementsOnThisLine = 0,
            firstExtraStatement;

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        const SINGLE_CHILD_ALLOWED = /^(?:(?:DoWhile|For|ForIn|ForOf|If|Labeled|While)Statement|Export(?:Default|Named)Declaration)$/;

        /**
         * Reports with the first extra statement, and clears it.
         *
         * @returns {void}
         */
        function reportFirstExtraStatementAndClear() {
            if (firstExtraStatement) {
                context.report({
                    node: firstExtraStatement,
                    message,
                    data: {
                        numberOfStatementsOnThisLine,
                        maxStatementsPerLine,
                        statements: numberOfStatementsOnThisLine === 1 ? "statement" : "statements"
                    }
                });
            }
            firstExtraStatement = null;
        }

        /**
         * Gets the actual last token of a given node.
         *
         * @param {ASTNode} node - A node to get. This is a node except EmptyStatement.
         * @returns {Token} The actual last token.
         */
        function getActualLastToken(node) {
            return sourceCode.getLastToken(node, astUtils.isNotSemicolonToken);
        }

        /**
         * Addresses a given node.
         * It updates the state of this rule, then reports the node if the node violated this rule.
         *
         * @param {ASTNode} node - A node to check.
         * @returns {void}
         */
        function enterStatement(node) {
            const line = node.loc.start.line;

            // Skip to allow non-block statements if this is direct child of control statements.
            // `if (a) foo();` is counted as 1.
            // But `if (a) foo(); else foo();` should be counted as 2.
            if (SINGLE_CHILD_ALLOWED.test(node.parent.type) &&
                node.parent.alternate !== node
            ) {
                return;
            }

            // Update state.
            if (line === lastStatementLine) {
                numberOfStatementsOnThisLine += 1;
            } else {
                reportFirstExtraStatementAndClear();
                numberOfStatementsOnThisLine = 1;
                lastStatementLine = line;
            }

            // Reports if the node violated this rule.
            if (numberOfStatementsOnThisLine === maxStatementsPerLine + 1) {
                firstExtraStatement = firstExtraStatement || node;
            }
        }

        /**
         * Updates the state of this rule with the end line of leaving node to check with the next statement.
         *
         * @param {ASTNode} node - A node to check.
         * @returns {void}
         */
        function leaveStatement(node) {
            const line = getActualLastToken(node).loc.end.line;

            // Update state.
            if (line !== lastStatementLine) {
                reportFirstExtraStatementAndClear();
                numberOfStatementsOnThisLine = 1;
                lastStatementLine = line;
            }
        }

        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {
            BreakStatement: enterStatement,
            ClassDeclaration: enterStatement,
            ContinueStatement: enterStatement,
            DebuggerStatement: enterStatement,
            DoWhileStatement: enterStatement,
            ExpressionStatement: enterStatement,
            ForInStatement: enterStatement,
            ForOfStatement: enterStatement,
            ForStatement: enterStatement,
            FunctionDeclaration: enterStatement,
            IfStatement: enterStatement,
            ImportDeclaration: enterStatement,
            LabeledStatement: enterStatement,
            ReturnStatement: enterStatement,
            SwitchStatement: enterStatement,
            ThrowStatement: enterStatement,
            TryStatement: enterStatement,
            VariableDeclaration: enterStatement,
            WhileStatement: enterStatement,
            WithStatement: enterStatement,
            ExportNamedDeclaration: enterStatement,
            ExportDefaultDeclaration: enterStatement,
            ExportAllDeclaration: enterStatement,

            "BreakStatement:exit": leaveStatement,
            "ClassDeclaration:exit": leaveStatement,
            "ContinueStatement:exit": leaveStatement,
            "DebuggerStatement:exit": leaveStatement,
            "DoWhileStatement:exit": leaveStatement,
            "ExpressionStatement:exit": leaveStatement,
            "ForInStatement:exit": leaveStatement,
            "ForOfStatement:exit": leaveStatement,
            "ForStatement:exit": leaveStatement,
            "FunctionDeclaration:exit": leaveStatement,
            "IfStatement:exit": leaveStatement,
            "ImportDeclaration:exit": leaveStatement,
            "LabeledStatement:exit": leaveStatement,
            "ReturnStatement:exit": leaveStatement,
            "SwitchStatement:exit": leaveStatement,
            "ThrowStatement:exit": leaveStatement,
            "TryStatement:exit": leaveStatement,
            "VariableDeclaration:exit": leaveStatement,
            "WhileStatement:exit": leaveStatement,
            "WithStatement:exit": leaveStatement,
            "ExportNamedDeclaration:exit": leaveStatement,
            "ExportDefaultDeclaration:exit": leaveStatement,
            "ExportAllDeclaration:exit": leaveStatement,
            "Program:exit": reportFirstExtraStatementAndClear
        };
    }
};

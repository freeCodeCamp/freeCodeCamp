/**
 * @fileoverview Rule to require newlines before `return` statement
 * @author Kai Cataldo
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require an empty line before `return` statements",
            category: "Stylistic Issues",
            recommended: false
        },
        fixable: "whitespace",
        schema: []
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Tests whether node is preceded by supplied tokens
         * @param {ASTNode} node - node to check
         * @param {array} testTokens - array of tokens to test against
         * @returns {boolean} Whether or not the node is preceded by one of the supplied tokens
         * @private
         */
        function isPrecededByTokens(node, testTokens) {
            const tokenBefore = sourceCode.getTokenBefore(node);

            return testTokens.some(token => tokenBefore.value === token);
        }

        /**
         * Checks whether node is the first node after statement or in block
         * @param {ASTNode} node - node to check
         * @returns {boolean} Whether or not the node is the first node after statement or in block
         * @private
         */
        function isFirstNode(node) {
            const parentType = node.parent.type;

            if (node.parent.body) {
                return Array.isArray(node.parent.body)
                  ? node.parent.body[0] === node
                  : node.parent.body === node;
            }

            if (parentType === "IfStatement") {
                return isPrecededByTokens(node, ["else", ")"]);
            } else if (parentType === "DoWhileStatement") {
                return isPrecededByTokens(node, ["do"]);
            } else if (parentType === "SwitchCase") {
                return isPrecededByTokens(node, [":"]);
            }
            return isPrecededByTokens(node, [")"]);

        }

        /**
         * Returns the number of lines of comments that precede the node
         * @param {ASTNode} node - node to check for overlapping comments
         * @param {number} lineNumTokenBefore - line number of previous token, to check for overlapping comments
         * @returns {number} Number of lines of comments that precede the node
         * @private
         */
        function calcCommentLines(node, lineNumTokenBefore) {
            const comments = sourceCode.getComments(node).leading;
            let numLinesComments = 0;

            if (!comments.length) {
                return numLinesComments;
            }

            comments.forEach(comment => {
                numLinesComments++;

                if (comment.type === "Block") {
                    numLinesComments += comment.loc.end.line - comment.loc.start.line;
                }

                // avoid counting lines with inline comments twice
                if (comment.loc.start.line === lineNumTokenBefore) {
                    numLinesComments--;
                }

                if (comment.loc.end.line === node.loc.start.line) {
                    numLinesComments--;
                }
            });

            return numLinesComments;
        }

        /**
         * Returns the line number of the token before the node that is passed in as an argument
         * @param {ASTNode} node - The node to use as the start of the calculation
         * @returns {number} Line number of the token before `node`
         * @private
         */
        function getLineNumberOfTokenBefore(node) {
            const tokenBefore = sourceCode.getTokenBefore(node);
            let lineNumTokenBefore;

            /**
             * Global return (at the beginning of a script) is a special case.
             * If there is no token before `return`, then we expect no line
             * break before the return. Comments are allowed to occupy lines
             * before the global return, just no blank lines.
             * Setting lineNumTokenBefore to zero in that case results in the
             * desired behavior.
             */
            if (tokenBefore) {
                lineNumTokenBefore = tokenBefore.loc.end.line;
            } else {
                lineNumTokenBefore = 0;     // global return at beginning of script
            }

            return lineNumTokenBefore;
        }

        /**
         * Checks whether node is preceded by a newline
         * @param {ASTNode} node - node to check
         * @returns {boolean} Whether or not the node is preceded by a newline
         * @private
         */
        function hasNewlineBefore(node) {
            const lineNumNode = node.loc.start.line;
            const lineNumTokenBefore = getLineNumberOfTokenBefore(node);
            const commentLines = calcCommentLines(node, lineNumTokenBefore);

            return (lineNumNode - lineNumTokenBefore - commentLines) > 1;
        }

        /**
         * Checks whether it is safe to apply a fix to a given return statement.
         *
         * The fix is not considered safe if the given return statement has leading comments,
         * as we cannot safely determine if the newline should be added before or after the comments.
         * For more information, see: https://github.com/eslint/eslint/issues/5958#issuecomment-222767211
         *
         * @param {ASTNode} node - The return statement node to check.
         * @returns {boolean} `true` if it can fix the node.
         * @private
         */
        function canFix(node) {
            const leadingComments = sourceCode.getComments(node).leading;
            const lastLeadingComment = leadingComments[leadingComments.length - 1];
            const tokenBefore = sourceCode.getTokenBefore(node);

            if (leadingComments.length === 0) {
                return true;
            }

            // if the last leading comment ends in the same line as the previous token and
            // does not share a line with the `return` node, we can consider it safe to fix.
            // Example:
            // function a() {
            //     var b; //comment
            //     return;
            // }
            if (lastLeadingComment.loc.end.line === tokenBefore.loc.end.line &&
                lastLeadingComment.loc.end.line !== node.loc.start.line) {
                return true;
            }

            return false;
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            ReturnStatement(node) {
                if (!isFirstNode(node) && !hasNewlineBefore(node)) {
                    context.report({
                        node,
                        message: "Expected newline before return statement.",
                        fix(fixer) {
                            if (canFix(node)) {
                                const tokenBefore = sourceCode.getTokenBefore(node);
                                const newlines = node.loc.start.line === tokenBefore.loc.end.line ? "\n\n" : "\n";

                                return fixer.insertTextBefore(node, newlines);
                            }
                            return null;
                        }
                    });
                }
            }
        };
    }
};

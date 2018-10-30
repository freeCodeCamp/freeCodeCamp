/**
 * @fileoverview Enforces or disallows inline comments.
 * @author Greg Cochard
 */
"use strict";

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow inline comments after code",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: []
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        /**
         * Will check that comments are not on lines starting with or ending with code
         * @param {ASTNode} node The comment node to check
         * @private
         * @returns {void}
         */
        function testCodeAroundComment(node) {

            // Get the whole line and cut it off at the start of the comment
            const startLine = String(sourceCode.lines[node.loc.start.line - 1]);
            const endLine = String(sourceCode.lines[node.loc.end.line - 1]);

            const preamble = startLine.slice(0, node.loc.start.column).trim();

            // Also check after the comment
            const postamble = endLine.slice(node.loc.end.column).trim();

            // Check that this comment isn't an ESLint directive
            const isDirective = astUtils.isDirectiveComment(node);

            // Should be empty if there was only whitespace around the comment
            if (!isDirective && (preamble || postamble)) {
                context.report({ node, message: "Unexpected comment inline with code." });
            }
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {

            LineComment: testCodeAroundComment,
            BlockComment: testCodeAroundComment

        };
    }
};

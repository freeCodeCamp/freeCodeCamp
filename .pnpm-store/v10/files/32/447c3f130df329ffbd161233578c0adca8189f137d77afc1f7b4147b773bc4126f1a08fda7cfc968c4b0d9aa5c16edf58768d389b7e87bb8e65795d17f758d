/**
 * @fileoverview Require or disallow newline at the end of files
 * @author Nodeca Team <https://github.com/nodeca>
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "require or disallow newline at the end of files",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/eol-last"
        },

        fixable: "whitespace",

        schema: [
            {
                enum: ["always", "never", "unix", "windows"]
            }
        ],

        messages: {
            missing: "Newline required at end of file but not found.",
            unexpected: "Newline not allowed at end of file."
        }
    },
    create(context) {

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            Program: function checkBadEOF(node) {
                const sourceCode = context.getSourceCode(),
                    src = sourceCode.getText(),
                    lastLine = sourceCode.lines[sourceCode.lines.length - 1],
                    location = {
                        column: lastLine.length,
                        line: sourceCode.lines.length
                    },
                    LF = "\n",
                    CRLF = `\r${LF}`,
                    endsWithNewline = src.endsWith(LF);

                /*
                 * Empty source is always valid: No content in file so we don't
                 * need to lint for a newline on the last line of content.
                 */
                if (!src.length) {
                    return;
                }

                let mode = context.options[0] || "always",
                    appendCRLF = false;

                if (mode === "unix") {

                    // `"unix"` should behave exactly as `"always"`
                    mode = "always";
                }
                if (mode === "windows") {

                    // `"windows"` should behave exactly as `"always"`, but append CRLF in the fixer for backwards compatibility
                    mode = "always";
                    appendCRLF = true;
                }
                if (mode === "always" && !endsWithNewline) {

                    // File is not newline-terminated, but should be
                    context.report({
                        node,
                        loc: location,
                        messageId: "missing",
                        fix(fixer) {
                            return fixer.insertTextAfterRange([0, src.length], appendCRLF ? CRLF : LF);
                        }
                    });
                } else if (mode === "never" && endsWithNewline) {

                    // File is newline-terminated, but shouldn't be
                    context.report({
                        node,
                        loc: location,
                        messageId: "unexpected",
                        fix(fixer) {
                            const finalEOLs = /(?:\r?\n)+$/u,
                                match = finalEOLs.exec(sourceCode.text),
                                start = match.index,
                                end = sourceCode.text.length;

                            return fixer.replaceTextRange([start, end], "");
                        }
                    });
                }
            }
        };
    }
};

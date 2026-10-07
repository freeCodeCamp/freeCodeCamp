/**
 * @fileoverview Require or disallow Unicode BOM
 * @author Andrew Johnston <https://github.com/ehjay>
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "require or disallow Unicode byte order mark (BOM)",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/unicode-bom"
        },

        fixable: "whitespace",

        schema: [
            {
                enum: ["always", "never"]
            }
        ],
        messages: {
            expected: "Expected Unicode BOM (Byte Order Mark).",
            unexpected: "Unexpected Unicode BOM (Byte Order Mark)."
        }
    },

    create(context) {

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {

            Program: function checkUnicodeBOM(node) {

                const sourceCode = context.getSourceCode(),
                    location = { column: 0, line: 1 },
                    requireBOM = context.options[0] || "never";

                if (!sourceCode.hasBOM && (requireBOM === "always")) {
                    context.report({
                        node,
                        loc: location,
                        messageId: "expected",
                        fix(fixer) {
                            return fixer.insertTextBeforeRange([0, 1], "\uFEFF");
                        }
                    });
                } else if (sourceCode.hasBOM && (requireBOM === "never")) {
                    context.report({
                        node,
                        loc: location,
                        messageId: "unexpected",
                        fix(fixer) {
                            return fixer.removeRange([-1, 0]);
                        }
                    });
                }
            }

        };

    }
};

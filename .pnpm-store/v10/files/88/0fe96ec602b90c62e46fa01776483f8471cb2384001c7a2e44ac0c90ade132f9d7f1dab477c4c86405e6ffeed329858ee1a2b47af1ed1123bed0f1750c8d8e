/**
 * @fileoverview Rule to check for tabs inside a file
 * @author Gyandeep Singh
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const tabRegex = /\t+/gu;
const anyNonWhitespaceRegex = /\S/u;

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "disallow all tabs",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-tabs"
        },
        schema: [{
            type: "object",
            properties: {
                allowIndentationTabs: {
                    type: "boolean",
                    default: false
                }
            },
            additionalProperties: false
        }],

        messages: {
            unexpectedTab: "Unexpected tab character."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();
        const allowIndentationTabs = context.options && context.options[0] && context.options[0].allowIndentationTabs;

        return {
            Program(node) {
                sourceCode.getLines().forEach((line, index) => {
                    let match;

                    while ((match = tabRegex.exec(line)) !== null) {
                        if (allowIndentationTabs && !anyNonWhitespaceRegex.test(line.slice(0, match.index))) {
                            continue;
                        }

                        context.report({
                            node,
                            loc: {
                                start: {
                                    line: index + 1,
                                    column: match.index
                                },
                                end: {
                                    line: index + 1,
                                    column: match.index + match[0].length
                                }
                            },
                            messageId: "unexpectedTab"
                        });
                    }
                });
            }
        };
    }
};

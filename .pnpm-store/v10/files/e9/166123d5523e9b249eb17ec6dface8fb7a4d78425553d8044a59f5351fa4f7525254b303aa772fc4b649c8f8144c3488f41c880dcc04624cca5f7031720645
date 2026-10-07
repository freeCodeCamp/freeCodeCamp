/**
 * @fileoverview Rule to enforce the position of line comments
 * @author Alberto Rodríguez
 */
"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "enforce position of line comments",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/line-comment-position"
        },

        schema: [
            {
                oneOf: [
                    {
                        enum: ["above", "beside"]
                    },
                    {
                        type: "object",
                        properties: {
                            position: {
                                enum: ["above", "beside"]
                            },
                            ignorePattern: {
                                type: "string"
                            },
                            applyDefaultPatterns: {
                                type: "boolean"
                            },
                            applyDefaultIgnorePatterns: {
                                type: "boolean"
                            }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ],
        messages: {
            above: "Expected comment to be above code.",
            beside: "Expected comment to be beside code."
        }
    },

    create(context) {
        const options = context.options[0];

        let above,
            ignorePattern,
            applyDefaultIgnorePatterns = true;

        if (!options || typeof options === "string") {
            above = !options || options === "above";

        } else {
            above = !options.position || options.position === "above";
            ignorePattern = options.ignorePattern;

            if (Object.prototype.hasOwnProperty.call(options, "applyDefaultIgnorePatterns")) {
                applyDefaultIgnorePatterns = options.applyDefaultIgnorePatterns;
            } else {
                applyDefaultIgnorePatterns = options.applyDefaultPatterns !== false;
            }
        }

        const defaultIgnoreRegExp = astUtils.COMMENTS_IGNORE_PATTERN;
        const fallThroughRegExp = /^\s*falls?\s?through/u;
        const customIgnoreRegExp = new RegExp(ignorePattern, "u");
        const sourceCode = context.getSourceCode();

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            Program() {
                const comments = sourceCode.getAllComments();

                comments.filter(token => token.type === "Line").forEach(node => {
                    if (applyDefaultIgnorePatterns && (defaultIgnoreRegExp.test(node.value) || fallThroughRegExp.test(node.value))) {
                        return;
                    }

                    if (ignorePattern && customIgnoreRegExp.test(node.value)) {
                        return;
                    }

                    const previous = sourceCode.getTokenBefore(node, { includeComments: true });
                    const isOnSameLine = previous && previous.loc.end.line === node.loc.start.line;

                    if (above) {
                        if (isOnSameLine) {
                            context.report({
                                node,
                                messageId: "above"
                            });
                        }
                    } else {
                        if (!isOnSameLine) {
                            context.report({
                                node,
                                messageId: "beside"
                            });
                        }
                    }
                });
            }
        };
    }
};

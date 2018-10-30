/**
 * @fileoverview Rule to require or disallow line breaks inside braces.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

// Schema objects.
const OPTION_VALUE = {
    oneOf: [
        {
            enum: ["always", "never"]
        },
        {
            type: "object",
            properties: {
                multiline: {
                    type: "boolean"
                },
                minProperties: {
                    type: "integer",
                    minimum: 0
                }
            },
            additionalProperties: false,
            minProperties: 1
        }
    ]
};

/**
 * Normalizes a given option value.
 *
 * @param {string|Object|undefined} value - An option value to parse.
 * @returns {{multiline: boolean, minProperties: number}} Normalized option object.
 */
function normalizeOptionValue(value) {
    let multiline = false;
    let minProperties = Number.POSITIVE_INFINITY;

    if (value) {
        if (value === "always") {
            minProperties = 0;
        } else if (value === "never") {
            minProperties = Number.POSITIVE_INFINITY;
        } else {
            multiline = Boolean(value.multiline);
            minProperties = value.minProperties || Number.POSITIVE_INFINITY;
        }
    } else {
        multiline = true;
    }

    return { multiline, minProperties };
}

/**
 * Normalizes a given option value.
 *
 * @param {string|Object|undefined} options - An option value to parse.
 * @returns {{ObjectExpression: {multiline: boolean, minProperties: number}, ObjectPattern: {multiline: boolean, minProperties: number}}} Normalized option object.
 */
function normalizeOptions(options) {
    if (options && (options.ObjectExpression || options.ObjectPattern)) {
        return {
            ObjectExpression: normalizeOptionValue(options.ObjectExpression),
            ObjectPattern: normalizeOptionValue(options.ObjectPattern)
        };
    }

    const value = normalizeOptionValue(options);

    return { ObjectExpression: value, ObjectPattern: value };
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce consistent line breaks inside braces",
            category: "Stylistic Issues",
            recommended: false
        },
        fixable: "whitespace",
        schema: [
            {
                oneOf: [
                    OPTION_VALUE,
                    {
                        type: "object",
                        properties: {
                            ObjectExpression: OPTION_VALUE,
                            ObjectPattern: OPTION_VALUE
                        },
                        additionalProperties: false,
                        minProperties: 1
                    }
                ]
            }
        ]
    },

    create(context) {
        const sourceCode = context.getSourceCode();
        const normalizedOptions = normalizeOptions(context.options[0]);

        /**
         * Reports a given node if it violated this rule.
         *
         * @param {ASTNode} node - A node to check. This is an ObjectExpression node or an ObjectPattern node.
         * @param {{multiline: boolean, minProperties: number}} options - An option object.
         * @returns {void}
         */
        function check(node) {
            const options = normalizedOptions[node.type];
            const openBrace = sourceCode.getFirstToken(node);
            const closeBrace = sourceCode.getLastToken(node);
            let first = sourceCode.getTokenAfter(openBrace, { includeComments: true });
            let last = sourceCode.getTokenBefore(closeBrace, { includeComments: true });
            const needsLinebreaks = (
                node.properties.length >= options.minProperties ||
                (
                    options.multiline &&
                    node.properties.length > 0 &&
                    first.loc.start.line !== last.loc.end.line
                )
            );

            /*
             * Use tokens or comments to check multiline or not.
             * But use only tokens to check whether line breaks are needed.
             * This allows:
             *     var obj = { // eslint-disable-line foo
             *         a: 1
             *     }
             */
            first = sourceCode.getTokenAfter(openBrace);
            last = sourceCode.getTokenBefore(closeBrace);

            if (needsLinebreaks) {
                if (astUtils.isTokenOnSameLine(openBrace, first)) {
                    context.report({
                        message: "Expected a line break after this opening brace.",
                        node,
                        loc: openBrace.loc.start,
                        fix(fixer) {
                            return fixer.insertTextAfter(openBrace, "\n");
                        }
                    });
                }
                if (astUtils.isTokenOnSameLine(last, closeBrace)) {
                    context.report({
                        message: "Expected a line break before this closing brace.",
                        node,
                        loc: closeBrace.loc.start,
                        fix(fixer) {
                            return fixer.insertTextBefore(closeBrace, "\n");
                        }
                    });
                }
            } else {
                if (!astUtils.isTokenOnSameLine(openBrace, first)) {
                    context.report({
                        message: "Unexpected line break after this opening brace.",
                        node,
                        loc: openBrace.loc.start,
                        fix(fixer) {
                            return fixer.removeRange([
                                openBrace.range[1],
                                first.range[0]
                            ]);
                        }
                    });
                }
                if (!astUtils.isTokenOnSameLine(last, closeBrace)) {
                    context.report({
                        message: "Unexpected line break before this closing brace.",
                        node,
                        loc: closeBrace.loc.start,
                        fix(fixer) {
                            return fixer.removeRange([
                                last.range[1],
                                closeBrace.range[0]
                            ]);
                        }
                    });
                }
            }
        }

        return {
            ObjectExpression: check,
            ObjectPattern: check
        };
    }
};

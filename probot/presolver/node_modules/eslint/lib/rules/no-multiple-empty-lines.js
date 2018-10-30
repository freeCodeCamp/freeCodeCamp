/**
 * @fileoverview Disallows multiple blank lines.
 * implementation adapted from the no-trailing-spaces rule.
 * @author Greg Cochard
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow multiple empty lines",
            category: "Stylistic Issues",
            recommended: false
        },

        fixable: "whitespace",

        schema: [
            {
                type: "object",
                properties: {
                    max: {
                        type: "integer",
                        minimum: 0
                    },
                    maxEOF: {
                        type: "integer",
                        minimum: 0
                    },
                    maxBOF: {
                        type: "integer",
                        minimum: 0
                    }
                },
                required: ["max"],
                additionalProperties: false
            }
        ]
    },

    create(context) {

        // Use options.max or 2 as default
        let max = 2,
            maxEOF = max,
            maxBOF = max;

        if (context.options.length) {
            max = context.options[0].max;
            maxEOF = typeof context.options[0].maxEOF !== "undefined" ? context.options[0].maxEOF : max;
            maxBOF = typeof context.options[0].maxBOF !== "undefined" ? context.options[0].maxBOF : max;
        }

        const sourceCode = context.getSourceCode();

        // Swallow the final newline, as some editors add it automatically and we don't want it to cause an issue
        const allLines = sourceCode.lines[sourceCode.lines.length - 1] === "" ? sourceCode.lines.slice(0, -1) : sourceCode.lines;
        const templateLiteralLines = new Set();

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            TemplateLiteral(node) {
                node.quasis.forEach(literalPart => {

                    // Empty lines have a semantic meaning if they're inside template literals. Don't count these as empty lines.
                    for (let ignoredLine = literalPart.loc.start.line; ignoredLine < literalPart.loc.end.line; ignoredLine++) {
                        templateLiteralLines.add(ignoredLine);
                    }
                });
            },
            "Program:exit"(node) {
                return allLines

                    // Given a list of lines, first get a list of line numbers that are non-empty.
                    .reduce((nonEmptyLineNumbers, line, index) => {
                        if (line.trim() || templateLiteralLines.has(index + 1)) {
                            nonEmptyLineNumbers.push(index + 1);
                        }
                        return nonEmptyLineNumbers;
                    }, [])

                    // Add a value at the end to allow trailing empty lines to be checked.
                    .concat(allLines.length + 1)

                    // Given two line numbers of non-empty lines, report the lines between if the difference is too large.
                    .reduce((lastLineNumber, lineNumber) => {
                        let message, maxAllowed;

                        if (lastLineNumber === 0) {
                            message = "Too many blank lines at the beginning of file. Max of {{max}} allowed.";
                            maxAllowed = maxBOF;
                        } else if (lineNumber === allLines.length + 1) {
                            message = "Too many blank lines at the end of file. Max of {{max}} allowed.";
                            maxAllowed = maxEOF;
                        } else {
                            message = "More than {{max}} blank {{pluralizedLines}} not allowed.";
                            maxAllowed = max;
                        }

                        if (lineNumber - lastLineNumber - 1 > maxAllowed) {
                            context.report({
                                node,
                                loc: { start: { line: lastLineNumber + 1, column: 0 }, end: { line: lineNumber, column: 0 } },
                                message,
                                data: { max: maxAllowed, pluralizedLines: maxAllowed === 1 ? "line" : "lines" },
                                fix(fixer) {
                                    return fixer.removeRange([
                                        sourceCode.getIndexFromLoc({ line: lastLineNumber + 1, column: 0 }),
                                        sourceCode.getIndexFromLoc({ line: lineNumber - maxAllowed, column: 0 })
                                    ]);
                                }
                            });
                        }

                        return lineNumber;
                    }, 0);
            }
        };
    }
};

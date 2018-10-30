/**
 * @fileoverview Disallow mixed spaces and tabs for indentation
 * @author Jary Niebur
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow mixed spaces and tabs for indentation",
            category: "Stylistic Issues",
            recommended: true
        },

        schema: [
            {
                enum: ["smart-tabs", true, false]
            }
        ]
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        let smartTabs;
        const ignoredLocs = [];

        switch (context.options[0]) {
            case true: // Support old syntax, maybe add deprecation warning here
            case "smart-tabs":
                smartTabs = true;
                break;
            default:
                smartTabs = false;
        }

        /**
         * Determines if a given line and column are before a location.
         * @param {Location} loc The location object from an AST node.
         * @param {int} line The line to check.
         * @param {int} column The column to check.
         * @returns {boolean} True if the line and column are before the location, false if not.
         * @private
         */
        function beforeLoc(loc, line, column) {
            if (line < loc.start.line) {
                return true;
            }
            return line === loc.start.line && column < loc.start.column;
        }

        /**
         * Determines if a given line and column are after a location.
         * @param {Location} loc The location object from an AST node.
         * @param {int} line The line to check.
         * @param {int} column The column to check.
         * @returns {boolean} True if the line and column are after the location, false if not.
         * @private
         */
        function afterLoc(loc, line, column) {
            if (line > loc.end.line) {
                return true;
            }
            return line === loc.end.line && column > loc.end.column;
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {

            TemplateElement(node) {
                ignoredLocs.push(node.loc);
            },

            "Program:exit"(node) {

                /*
                 * At least one space followed by a tab
                 * or the reverse before non-tab/-space
                 * characters begin.
                 */
                let regex = /^(?=[\t ]*(\t | \t))/;
                const lines = sourceCode.lines,
                    comments = sourceCode.getAllComments();

                comments.forEach(comment => {
                    ignoredLocs.push(comment.loc);
                });

                ignoredLocs.sort((first, second) => {
                    if (beforeLoc(first, second.start.line, second.start.column)) {
                        return 1;
                    }

                    if (beforeLoc(second, first.start.line, second.start.column)) {
                        return -1;
                    }

                    return 0;
                });

                if (smartTabs) {

                    /*
                     * At least one space followed by a tab
                     * before non-tab/-space characters begin.
                     */
                    regex = /^(?=[\t ]* \t)/;
                }

                lines.forEach((line, i) => {
                    const match = regex.exec(line);

                    if (match) {
                        const lineNumber = i + 1,
                            column = match.index + 1;

                        for (let j = 0; j < ignoredLocs.length; j++) {
                            if (beforeLoc(ignoredLocs[j], lineNumber, column)) {
                                continue;
                            }
                            if (afterLoc(ignoredLocs[j], lineNumber, column)) {
                                continue;
                            }

                            return;
                        }

                        context.report({ node, loc: { line: lineNumber, column }, message: "Mixed spaces and tabs." });
                    }
                });
            }

        };

    }
};

/**
 * @fileoverview An object that caches and applies source code fixes.
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const debug = require("debug")("eslint:text-fixer");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const BOM = "\uFEFF";

/**
 * Compares items in a messages array by range.
 * @param {Message} a The first message.
 * @param {Message} b The second message.
 * @returns {int} -1 if a comes before b, 1 if a comes after b, 0 if equal.
 * @private
 */
function compareMessagesByFixRange(a, b) {
    return a.fix.range[0] - b.fix.range[0] || a.fix.range[1] - b.fix.range[1];
}

/**
 * Compares items in a messages array by line and column.
 * @param {Message} a The first message.
 * @param {Message} b The second message.
 * @returns {int} -1 if a comes before b, 1 if a comes after b, 0 if equal.
 * @private
 */
function compareMessagesByLocation(a, b) {
    return a.line - b.line || a.column - b.column;
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Utility for apply fixes to source code.
 * @constructor
 */
function SourceCodeFixer() {
    Object.freeze(this);
}

/**
 * Applies the fixes specified by the messages to the given text. Tries to be
 * smart about the fixes and won't apply fixes over the same area in the text.
 * @param {SourceCode} sourceCode The source code to apply the changes to.
 * @param {Message[]} messages The array of messages reported by ESLint.
 * @returns {Object} An object containing the fixed text and any unfixed messages.
 */
SourceCodeFixer.applyFixes = function(sourceCode, messages) {

    debug("Applying fixes");

    if (!sourceCode) {
        debug("No source code to fix");
        return {
            fixed: false,
            messages,
            output: ""
        };
    }

    // clone the array
    const remainingMessages = [],
        fixes = [],
        bom = (sourceCode.hasBOM ? BOM : ""),
        text = sourceCode.text;
    let lastPos = Number.NEGATIVE_INFINITY,
        output = bom;

    messages.forEach(problem => {
        if (problem.hasOwnProperty("fix")) {
            fixes.push(problem);
        } else {
            remainingMessages.push(problem);
        }
    });

    if (fixes.length) {
        debug("Found fixes to apply");

        for (const problem of fixes.sort(compareMessagesByFixRange)) {
            const fix = problem.fix;
            const start = fix.range[0];
            const end = fix.range[1];

            // Remain it as a problem if it's overlapped or it's a negative range
            if (lastPos >= start || start > end) {
                remainingMessages.push(problem);
                continue;
            }

            // Remove BOM.
            if ((start < 0 && end >= 0) || (start === 0 && fix.text.startsWith(BOM))) {
                output = "";
            }

            // Make output to this fix.
            output += text.slice(Math.max(0, lastPos), Math.max(0, start));
            output += fix.text;
            lastPos = end;
        }
        output += text.slice(Math.max(0, lastPos));

        return {
            fixed: true,
            messages: remainingMessages.sort(compareMessagesByLocation),
            output
        };
    }

    debug("No fixes to apply");
    return {
        fixed: false,
        messages,
        output: bom + text
    };

};

module.exports = SourceCodeFixer;

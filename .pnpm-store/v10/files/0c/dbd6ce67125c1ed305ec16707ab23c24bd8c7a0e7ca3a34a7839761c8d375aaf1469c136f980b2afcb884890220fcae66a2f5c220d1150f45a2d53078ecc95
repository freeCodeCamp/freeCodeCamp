"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapWordsToLines = wrapWordsToLines;
function wrapWordsToLines(text, maxLineLength, indentOrLinePrefix) {
    var _a;
    let linePrefix;
    switch (typeof indentOrLinePrefix) {
        case 'number':
            linePrefix = ' '.repeat(indentOrLinePrefix);
            break;
        case 'string':
            linePrefix = indentOrLinePrefix;
            break;
        default:
            linePrefix = '';
            break;
    }
    const linePrefixLength = linePrefix.length;
    if (!maxLineLength) {
        maxLineLength = process.stdout.getWindowSize()[0];
    }
    // Apply word wrapping and the provided line prefix, while also respecting existing newlines
    // and prefix spaces that may exist in the text string already.
    const lines = text.split(/\r?\n/);
    const wrappedLines = [];
    for (const line of lines) {
        if (line.length + linePrefixLength <= maxLineLength) {
            wrappedLines.push(linePrefix + line);
        }
        else {
            const lineAdditionalPrefix = ((_a = line.match(/^\s*/)) === null || _a === void 0 ? void 0 : _a[0]) || '';
            const whitespaceRegexp = /\s+/g;
            let currentWhitespaceMatch = null;
            let previousWhitespaceMatch;
            let currentLineStartIndex = lineAdditionalPrefix.length;
            let previousBreakRanOver = false;
            while ((currentWhitespaceMatch = whitespaceRegexp.exec(line)) !== null) {
                if (currentWhitespaceMatch.index + linePrefixLength - currentLineStartIndex > maxLineLength) {
                    let whitespaceToSplitAt;
                    if (!previousWhitespaceMatch ||
                        // Handle the case where there are two words longer than the maxLineLength in a row
                        previousBreakRanOver) {
                        whitespaceToSplitAt = currentWhitespaceMatch;
                    }
                    else {
                        whitespaceToSplitAt = previousWhitespaceMatch;
                    }
                    wrappedLines.push(linePrefix +
                        lineAdditionalPrefix +
                        line.substring(currentLineStartIndex, whitespaceToSplitAt.index));
                    previousBreakRanOver = whitespaceToSplitAt.index - currentLineStartIndex > maxLineLength;
                    currentLineStartIndex = whitespaceToSplitAt.index + whitespaceToSplitAt[0].length;
                }
                else {
                    previousBreakRanOver = false;
                }
                previousWhitespaceMatch = currentWhitespaceMatch;
            }
            if (currentLineStartIndex < line.length) {
                wrappedLines.push(linePrefix + lineAdditionalPrefix + line.substring(currentLineStartIndex));
            }
        }
    }
    return wrappedLines;
}
//# sourceMappingURL=wrap-words-to-lines.js.map
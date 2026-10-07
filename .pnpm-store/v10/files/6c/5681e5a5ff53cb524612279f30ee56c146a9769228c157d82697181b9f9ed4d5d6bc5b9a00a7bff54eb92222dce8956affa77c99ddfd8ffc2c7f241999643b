"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapCell = void 0;
const utils_1 = require("./utils");
const wrapString_1 = require("./wrapString");
const wrapWord_1 = require("./wrapWord");
/**
 * Wrap a single cell value into a list of lines
 *
 * Always wraps on newlines, for the remainder uses either word or string wrapping
 * depending on user configuration.
 *
 */
const wrapCell = (cellValue, cellWidth, useWrapWord) => {
    // First split on literal newlines
    const cellLines = (0, utils_1.splitAnsi)(cellValue);
    // Then iterate over the list and word-wrap every remaining line if necessary.
    for (let lineNr = 0; lineNr < cellLines.length;) {
        let lineChunks;
        if (useWrapWord) {
            lineChunks = (0, wrapWord_1.wrapWord)(cellLines[lineNr], cellWidth);
        }
        else {
            lineChunks = (0, wrapString_1.wrapString)(cellLines[lineNr], cellWidth);
        }
        // Replace our original array element with whatever the wrapping returned
        cellLines.splice(lineNr, 1, ...lineChunks);
        lineNr += lineChunks.length;
    }
    return cellLines;
};
exports.wrapCell = wrapCell;
//# sourceMappingURL=wrapCell.js.map
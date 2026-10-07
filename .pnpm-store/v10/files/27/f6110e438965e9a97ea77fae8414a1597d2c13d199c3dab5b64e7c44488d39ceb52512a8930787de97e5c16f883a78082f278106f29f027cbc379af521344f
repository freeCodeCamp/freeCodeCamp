"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRowHeights = void 0;
const calculateCellHeight_1 = require("./calculateCellHeight");
const utils_1 = require("./utils");
/**
 * Produces an array of values that describe the largest value length (height) in every row.
 */
const calculateRowHeights = (rows, config) => {
    const rowHeights = [];
    for (const [rowIndex, row] of rows.entries()) {
        let rowHeight = 1;
        row.forEach((cell, cellIndex) => {
            var _a;
            const containingRange = (_a = config.spanningCellManager) === null || _a === void 0 ? void 0 : _a.getContainingRange({ col: cellIndex,
                row: rowIndex });
            if (!containingRange) {
                const cellHeight = (0, calculateCellHeight_1.calculateCellHeight)(cell, config.columns[cellIndex].width, config.columns[cellIndex].wrapWord);
                rowHeight = Math.max(rowHeight, cellHeight);
                return;
            }
            const { topLeft, bottomRight, height } = containingRange;
            // bottom-most cell of a range needs to contain all remain lines of spanning cells
            if (rowIndex === bottomRight.row) {
                const totalOccupiedSpanningCellHeight = (0, utils_1.sumArray)(rowHeights.slice(topLeft.row));
                const totalHorizontalBorderHeight = bottomRight.row - topLeft.row;
                const totalHiddenHorizontalBorderHeight = (0, utils_1.sequence)(topLeft.row + 1, bottomRight.row).filter((horizontalBorderIndex) => {
                    var _a;
                    /* istanbul ignore next */
                    return !((_a = config.drawHorizontalLine) === null || _a === void 0 ? void 0 : _a.call(config, horizontalBorderIndex, rows.length));
                }).length;
                const cellHeight = height - totalOccupiedSpanningCellHeight - totalHorizontalBorderHeight + totalHiddenHorizontalBorderHeight;
                rowHeight = Math.max(rowHeight, cellHeight);
            }
            // otherwise, just depend on other sibling cell heights in the row
        });
        rowHeights.push(rowHeight);
    }
    return rowHeights;
};
exports.calculateRowHeights = calculateRowHeights;
//# sourceMappingURL=calculateRowHeights.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSpanningCellWidth = void 0;
const utils_1 = require("./utils");
const calculateSpanningCellWidth = (rangeConfig, dependencies) => {
    const { columnsConfig, drawVerticalLine } = dependencies;
    const { topLeft, bottomRight } = rangeConfig;
    const totalWidth = (0, utils_1.sumArray)(columnsConfig.slice(topLeft.col, bottomRight.col + 1).map(({ width }) => {
        return width;
    }));
    const totalPadding = topLeft.col === bottomRight.col ?
        columnsConfig[topLeft.col].paddingRight +
            columnsConfig[bottomRight.col].paddingLeft :
        (0, utils_1.sumArray)(columnsConfig
            .slice(topLeft.col, bottomRight.col + 1)
            .map(({ paddingLeft, paddingRight }) => {
            return paddingLeft + paddingRight;
        }));
    const totalBorderWidths = bottomRight.col - topLeft.col;
    const totalHiddenVerticalBorders = (0, utils_1.sequence)(topLeft.col + 1, bottomRight.col).filter((verticalBorderIndex) => {
        return !drawVerticalLine(verticalBorderIndex, columnsConfig.length);
    }).length;
    return totalWidth + totalPadding + totalBorderWidths - totalHiddenVerticalBorders;
};
exports.calculateSpanningCellWidth = calculateSpanningCellWidth;
//# sourceMappingURL=calculateSpanningCellWidth.js.map
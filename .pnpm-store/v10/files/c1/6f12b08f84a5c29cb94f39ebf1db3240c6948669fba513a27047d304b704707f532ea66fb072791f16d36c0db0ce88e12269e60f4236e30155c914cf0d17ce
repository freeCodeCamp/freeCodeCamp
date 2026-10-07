"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSpanningCellConfig = void 0;
const utils_1 = require("./utils");
const inRange = (start, end, value) => {
    return start <= value && value <= end;
};
const validateSpanningCellConfig = (rows, configs) => {
    const [nRow, nCol] = [rows.length, rows[0].length];
    configs.forEach((config, configIndex) => {
        const { colSpan, rowSpan } = config;
        if (colSpan === undefined && rowSpan === undefined) {
            throw new Error(`Expect at least colSpan or rowSpan is provided in config.spanningCells[${configIndex}]`);
        }
        if (colSpan !== undefined && colSpan < 1) {
            throw new Error(`Expect colSpan is not equal zero, instead got: ${colSpan} in config.spanningCells[${configIndex}]`);
        }
        if (rowSpan !== undefined && rowSpan < 1) {
            throw new Error(`Expect rowSpan is not equal zero, instead got: ${rowSpan} in config.spanningCells[${configIndex}]`);
        }
    });
    const rangeCoordinates = configs.map(utils_1.calculateRangeCoordinate);
    rangeCoordinates.forEach(({ topLeft, bottomRight }, rangeIndex) => {
        if (!inRange(0, nCol - 1, topLeft.col) ||
            !inRange(0, nRow - 1, topLeft.row) ||
            !inRange(0, nCol - 1, bottomRight.col) ||
            !inRange(0, nRow - 1, bottomRight.row)) {
            throw new Error(`Some cells in config.spanningCells[${rangeIndex}] are out of the table`);
        }
    });
    const configOccupy = Array.from({ length: nRow }, () => {
        return Array.from({ length: nCol });
    });
    rangeCoordinates.forEach(({ topLeft, bottomRight }, rangeIndex) => {
        (0, utils_1.sequence)(topLeft.row, bottomRight.row).forEach((row) => {
            (0, utils_1.sequence)(topLeft.col, bottomRight.col).forEach((col) => {
                if (configOccupy[row][col] !== undefined) {
                    throw new Error(`Spanning cells in config.spanningCells[${configOccupy[row][col]}] and config.spanningCells[${rangeIndex}] are overlap each other`);
                }
                configOccupy[row][col] = rangeIndex;
            });
        });
    });
};
exports.validateSpanningCellConfig = validateSpanningCellConfig;
//# sourceMappingURL=validateSpanningCellConfig.js.map
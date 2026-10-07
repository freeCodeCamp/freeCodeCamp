"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateMaximumColumnWidths = exports.calculateMaximumCellWidth = void 0;
const string_width_1 = __importDefault(require("string-width"));
const utils_1 = require("./utils");
const calculateMaximumCellWidth = (cell) => {
    return Math.max(...cell.split('\n').map(string_width_1.default));
};
exports.calculateMaximumCellWidth = calculateMaximumCellWidth;
/**
 * Produces an array of values that describe the largest value length (width) in every column.
 */
const calculateMaximumColumnWidths = (rows, spanningCellConfigs = []) => {
    const columnWidths = new Array(rows[0].length).fill(0);
    const rangeCoordinates = spanningCellConfigs.map(utils_1.calculateRangeCoordinate);
    const isSpanningCell = (rowIndex, columnIndex) => {
        return rangeCoordinates.some((rangeCoordinate) => {
            return (0, utils_1.isCellInRange)({ col: columnIndex,
                row: rowIndex }, rangeCoordinate);
        });
    };
    rows.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            if (isSpanningCell(rowIndex, cellIndex)) {
                return;
            }
            columnWidths[cellIndex] = Math.max(columnWidths[cellIndex], (0, exports.calculateMaximumCellWidth)(cell));
        });
    });
    return columnWidths;
};
exports.calculateMaximumColumnWidths = calculateMaximumColumnWidths;
//# sourceMappingURL=calculateMaximumColumnWidths.js.map
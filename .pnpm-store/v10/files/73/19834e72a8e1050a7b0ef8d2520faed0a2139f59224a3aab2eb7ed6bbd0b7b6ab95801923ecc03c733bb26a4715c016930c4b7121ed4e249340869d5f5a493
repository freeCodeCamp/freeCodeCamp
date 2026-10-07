"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alignVerticalRangeContent = exports.wrapRangeContent = void 0;
const string_width_1 = __importDefault(require("string-width"));
const alignString_1 = require("./alignString");
const mapDataUsingRowHeights_1 = require("./mapDataUsingRowHeights");
const padTableData_1 = require("./padTableData");
const truncateTableData_1 = require("./truncateTableData");
const utils_1 = require("./utils");
const wrapCell_1 = require("./wrapCell");
/**
 * Fill content into all cells in range in order to calculate total height
 */
const wrapRangeContent = (rangeConfig, rangeWidth, context) => {
    const { topLeft, paddingRight, paddingLeft, truncate, wrapWord, alignment } = rangeConfig;
    const originalContent = context.rows[topLeft.row][topLeft.col];
    const contentWidth = rangeWidth - paddingLeft - paddingRight;
    return (0, wrapCell_1.wrapCell)((0, truncateTableData_1.truncateString)(originalContent, truncate), contentWidth, wrapWord).map((line) => {
        const alignedLine = (0, alignString_1.alignString)(line, contentWidth, alignment);
        return (0, padTableData_1.padString)(alignedLine, paddingLeft, paddingRight);
    });
};
exports.wrapRangeContent = wrapRangeContent;
const alignVerticalRangeContent = (range, content, context) => {
    const { rows, drawHorizontalLine, rowHeights } = context;
    const { topLeft, bottomRight, verticalAlignment } = range;
    // They are empty before calculateRowHeights function run
    if (rowHeights.length === 0) {
        return [];
    }
    const totalCellHeight = (0, utils_1.sumArray)(rowHeights.slice(topLeft.row, bottomRight.row + 1));
    const totalBorderHeight = bottomRight.row - topLeft.row;
    const hiddenHorizontalBorderCount = (0, utils_1.sequence)(topLeft.row + 1, bottomRight.row).filter((horizontalBorderIndex) => {
        return !drawHorizontalLine(horizontalBorderIndex, rows.length);
    }).length;
    const availableRangeHeight = totalCellHeight + totalBorderHeight - hiddenHorizontalBorderCount;
    return (0, mapDataUsingRowHeights_1.padCellVertically)(content, availableRangeHeight, verticalAlignment).map((line) => {
        if (line.length === 0) {
            return ' '.repeat((0, string_width_1.default)(content[0]));
        }
        return line;
    });
};
exports.alignVerticalRangeContent = alignVerticalRangeContent;
//# sourceMappingURL=alignSpanningCell.js.map
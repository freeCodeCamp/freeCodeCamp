"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSpanningCellManager = void 0;
const alignSpanningCell_1 = require("./alignSpanningCell");
const calculateSpanningCellWidth_1 = require("./calculateSpanningCellWidth");
const makeRangeConfig_1 = require("./makeRangeConfig");
const utils_1 = require("./utils");
const findRangeConfig = (cell, rangeConfigs) => {
    return rangeConfigs.find((rangeCoordinate) => {
        return (0, utils_1.isCellInRange)(cell, rangeCoordinate);
    });
};
const getContainingRange = (rangeConfig, context) => {
    const width = (0, calculateSpanningCellWidth_1.calculateSpanningCellWidth)(rangeConfig, context);
    const wrappedContent = (0, alignSpanningCell_1.wrapRangeContent)(rangeConfig, width, context);
    const alignedContent = (0, alignSpanningCell_1.alignVerticalRangeContent)(rangeConfig, wrappedContent, context);
    const getCellContent = (rowIndex) => {
        const { topLeft } = rangeConfig;
        const { drawHorizontalLine, rowHeights } = context;
        const totalWithinHorizontalBorderHeight = rowIndex - topLeft.row;
        const totalHiddenHorizontalBorderHeight = (0, utils_1.sequence)(topLeft.row + 1, rowIndex).filter((index) => {
            /* istanbul ignore next */
            return !(drawHorizontalLine === null || drawHorizontalLine === void 0 ? void 0 : drawHorizontalLine(index, rowHeights.length));
        }).length;
        const offset = (0, utils_1.sumArray)(rowHeights.slice(topLeft.row, rowIndex)) + totalWithinHorizontalBorderHeight - totalHiddenHorizontalBorderHeight;
        return alignedContent.slice(offset, offset + rowHeights[rowIndex]);
    };
    const getBorderContent = (borderIndex) => {
        const { topLeft } = rangeConfig;
        const offset = (0, utils_1.sumArray)(context.rowHeights.slice(topLeft.row, borderIndex)) + (borderIndex - topLeft.row - 1);
        return alignedContent[offset];
    };
    return {
        ...rangeConfig,
        extractBorderContent: getBorderContent,
        extractCellContent: getCellContent,
        height: wrappedContent.length,
        width,
    };
};
const inSameRange = (cell1, cell2, ranges) => {
    const range1 = findRangeConfig(cell1, ranges);
    const range2 = findRangeConfig(cell2, ranges);
    if (range1 && range2) {
        return (0, utils_1.areCellEqual)(range1.topLeft, range2.topLeft);
    }
    return false;
};
const hashRange = (range) => {
    const { row, col } = range.topLeft;
    return `${row}/${col}`;
};
const createSpanningCellManager = (parameters) => {
    const { spanningCellConfigs, columnsConfig } = parameters;
    const ranges = spanningCellConfigs.map((config) => {
        return (0, makeRangeConfig_1.makeRangeConfig)(config, columnsConfig);
    });
    const rangeCache = {};
    let rowHeights = [];
    let rowIndexMapping = [];
    return { getContainingRange: (cell, options) => {
            var _a;
            const originalRow = (options === null || options === void 0 ? void 0 : options.mapped) ? rowIndexMapping[cell.row] : cell.row;
            const range = findRangeConfig({ ...cell,
                row: originalRow }, ranges);
            if (!range) {
                return undefined;
            }
            if (rowHeights.length === 0) {
                return getContainingRange(range, { ...parameters,
                    rowHeights });
            }
            const hash = hashRange(range);
            (_a = rangeCache[hash]) !== null && _a !== void 0 ? _a : (rangeCache[hash] = getContainingRange(range, { ...parameters,
                rowHeights }));
            return rangeCache[hash];
        },
        inSameRange: (cell1, cell2) => {
            return inSameRange(cell1, cell2, ranges);
        },
        rowHeights,
        rowIndexMapping,
        setRowHeights: (_rowHeights) => {
            rowHeights = _rowHeights;
        },
        setRowIndexMapping: (mappedRowHeights) => {
            rowIndexMapping = (0, utils_1.flatten)(mappedRowHeights.map((height, index) => {
                return Array.from({ length: height }, () => {
                    return index;
                });
            }));
        } };
};
exports.createSpanningCellManager = createSpanningCellManager;
//# sourceMappingURL=spanningCellManager.js.map
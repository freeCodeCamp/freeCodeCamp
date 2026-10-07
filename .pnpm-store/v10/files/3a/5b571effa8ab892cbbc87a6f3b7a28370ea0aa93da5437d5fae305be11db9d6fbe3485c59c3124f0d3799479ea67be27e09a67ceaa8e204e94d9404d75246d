"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapDataUsingRowHeights = exports.padCellVertically = void 0;
const utils_1 = require("./utils");
const wrapCell_1 = require("./wrapCell");
const createEmptyStrings = (length) => {
    return new Array(length).fill('');
};
const padCellVertically = (lines, rowHeight, verticalAlignment) => {
    const availableLines = rowHeight - lines.length;
    if (verticalAlignment === 'top') {
        return [...lines, ...createEmptyStrings(availableLines)];
    }
    if (verticalAlignment === 'bottom') {
        return [...createEmptyStrings(availableLines), ...lines];
    }
    return [
        ...createEmptyStrings(Math.floor(availableLines / 2)),
        ...lines,
        ...createEmptyStrings(Math.ceil(availableLines / 2)),
    ];
};
exports.padCellVertically = padCellVertically;
const mapDataUsingRowHeights = (unmappedRows, rowHeights, config) => {
    const nColumns = unmappedRows[0].length;
    const mappedRows = unmappedRows.map((unmappedRow, unmappedRowIndex) => {
        const outputRowHeight = rowHeights[unmappedRowIndex];
        const outputRow = Array.from({ length: outputRowHeight }, () => {
            return new Array(nColumns).fill('');
        });
        unmappedRow.forEach((cell, cellIndex) => {
            var _a;
            const containingRange = (_a = config.spanningCellManager) === null || _a === void 0 ? void 0 : _a.getContainingRange({ col: cellIndex,
                row: unmappedRowIndex });
            if (containingRange) {
                containingRange.extractCellContent(unmappedRowIndex).forEach((cellLine, cellLineIndex) => {
                    outputRow[cellLineIndex][cellIndex] = cellLine;
                });
                return;
            }
            const cellLines = (0, wrapCell_1.wrapCell)(cell, config.columns[cellIndex].width, config.columns[cellIndex].wrapWord);
            const paddedCellLines = (0, exports.padCellVertically)(cellLines, outputRowHeight, config.columns[cellIndex].verticalAlignment);
            paddedCellLines.forEach((cellLine, cellLineIndex) => {
                outputRow[cellLineIndex][cellIndex] = cellLine;
            });
        });
        return outputRow;
    });
    return (0, utils_1.flatten)(mappedRows);
};
exports.mapDataUsingRowHeights = mapDataUsingRowHeights;
//# sourceMappingURL=mapDataUsingRowHeights.js.map
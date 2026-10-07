"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawRow = void 0;
const drawContent_1 = require("./drawContent");
const drawRow = (row, config) => {
    const { border, drawVerticalLine, rowIndex, spanningCellManager } = config;
    return (0, drawContent_1.drawContent)({
        contents: row,
        drawSeparator: drawVerticalLine,
        elementType: 'cell',
        rowIndex,
        separatorGetter: (index, columnCount) => {
            if (index === 0) {
                return border.bodyLeft;
            }
            if (index === columnCount) {
                return border.bodyRight;
            }
            return border.bodyJoin;
        },
        spanningCellManager,
    }) + '\n';
};
exports.drawRow = drawRow;
//# sourceMappingURL=drawRow.js.map
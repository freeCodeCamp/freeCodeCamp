"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawTable = void 0;
const drawBorder_1 = require("./drawBorder");
const drawContent_1 = require("./drawContent");
const drawRow_1 = require("./drawRow");
const utils_1 = require("./utils");
const drawTable = (rows, outputColumnWidths, rowHeights, config) => {
    const { drawHorizontalLine, singleLine, } = config;
    const contents = (0, utils_1.groupBySizes)(rows, rowHeights).map((group, groupIndex) => {
        return group.map((row) => {
            return (0, drawRow_1.drawRow)(row, { ...config,
                rowIndex: groupIndex });
        }).join('');
    });
    return (0, drawContent_1.drawContent)({ contents,
        drawSeparator: (index, size) => {
            // Top/bottom border
            if (index === 0 || index === size) {
                return drawHorizontalLine(index, size);
            }
            return !singleLine && drawHorizontalLine(index, size);
        },
        elementType: 'row',
        rowIndex: -1,
        separatorGetter: (0, drawBorder_1.createTableBorderGetter)(outputColumnWidths, { ...config,
            rowCount: contents.length }),
        spanningCellManager: config.spanningCellManager });
};
exports.drawTable = drawTable;
//# sourceMappingURL=drawTable.js.map
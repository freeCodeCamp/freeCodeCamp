"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alignTableData = void 0;
const alignString_1 = require("./alignString");
const alignTableData = (rows, config) => {
    return rows.map((row, rowIndex) => {
        return row.map((cell, cellIndex) => {
            var _a;
            const { width, alignment } = config.columns[cellIndex];
            const containingRange = (_a = config.spanningCellManager) === null || _a === void 0 ? void 0 : _a.getContainingRange({ col: cellIndex,
                row: rowIndex }, { mapped: true });
            if (containingRange) {
                return cell;
            }
            return (0, alignString_1.alignString)(cell, width, alignment);
        });
    });
};
exports.alignTableData = alignTableData;
//# sourceMappingURL=alignTableData.js.map
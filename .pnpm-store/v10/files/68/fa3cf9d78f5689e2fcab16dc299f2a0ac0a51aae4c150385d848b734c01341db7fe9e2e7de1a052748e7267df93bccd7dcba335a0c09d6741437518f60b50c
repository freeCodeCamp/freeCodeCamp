"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.padTableData = exports.padString = void 0;
const padString = (input, paddingLeft, paddingRight) => {
    return ' '.repeat(paddingLeft) + input + ' '.repeat(paddingRight);
};
exports.padString = padString;
const padTableData = (rows, config) => {
    return rows.map((cells, rowIndex) => {
        return cells.map((cell, cellIndex) => {
            var _a;
            const containingRange = (_a = config.spanningCellManager) === null || _a === void 0 ? void 0 : _a.getContainingRange({ col: cellIndex,
                row: rowIndex }, { mapped: true });
            if (containingRange) {
                return cell;
            }
            const { paddingLeft, paddingRight } = config.columns[cellIndex];
            return (0, exports.padString)(cell, paddingLeft, paddingRight);
        });
    });
};
exports.padTableData = padTableData;
//# sourceMappingURL=padTableData.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTableData = void 0;
const utils_1 = require("./utils");
const validateTableData = (rows) => {
    if (!Array.isArray(rows)) {
        throw new TypeError('Table data must be an array.');
    }
    if (rows.length === 0) {
        throw new Error('Table must define at least one row.');
    }
    if (rows[0].length === 0) {
        throw new Error('Table must define at least one column.');
    }
    const columnNumber = rows[0].length;
    for (const row of rows) {
        if (!Array.isArray(row)) {
            throw new TypeError('Table row data must be an array.');
        }
        if (row.length !== columnNumber) {
            throw new Error('Table must have a consistent number of cells.');
        }
        for (const cell of row) {
            // eslint-disable-next-line no-control-regex
            if (/[\u0001-\u0006\u0008\u0009\u000B-\u001A]/.test((0, utils_1.normalizeString)(String(cell)))) {
                throw new Error('Table data must not contain control characters.');
            }
        }
    }
};
exports.validateTableData = validateTableData;
//# sourceMappingURL=validateTableData.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectHeaderConfig = void 0;
const injectHeaderConfig = (rows, config) => {
    var _a;
    let spanningCellConfig = (_a = config.spanningCells) !== null && _a !== void 0 ? _a : [];
    const headerConfig = config.header;
    const adjustedRows = [...rows];
    if (headerConfig) {
        spanningCellConfig = spanningCellConfig.map(({ row, ...rest }) => {
            return { ...rest,
                row: row + 1 };
        });
        const { content, ...headerStyles } = headerConfig;
        spanningCellConfig.unshift({ alignment: 'center',
            col: 0,
            colSpan: rows[0].length,
            paddingLeft: 1,
            paddingRight: 1,
            row: 0,
            wrapWord: false,
            ...headerStyles });
        adjustedRows.unshift([content, ...Array.from({ length: rows[0].length - 1 }).fill('')]);
    }
    return [adjustedRows,
        spanningCellConfig];
};
exports.injectHeaderConfig = injectHeaderConfig;
//# sourceMappingURL=injectHeaderConfig.js.map
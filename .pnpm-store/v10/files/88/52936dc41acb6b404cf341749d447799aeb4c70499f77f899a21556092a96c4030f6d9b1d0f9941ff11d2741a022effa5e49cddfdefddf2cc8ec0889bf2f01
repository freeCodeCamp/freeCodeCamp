"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTableConfig = void 0;
const calculateMaximumColumnWidths_1 = require("./calculateMaximumColumnWidths");
const spanningCellManager_1 = require("./spanningCellManager");
const utils_1 = require("./utils");
const validateConfig_1 = require("./validateConfig");
const validateSpanningCellConfig_1 = require("./validateSpanningCellConfig");
/**
 * Creates a configuration for every column using default
 * values for the missing configuration properties.
 */
const makeColumnsConfig = (rows, columns, columnDefault, spanningCellConfigs) => {
    const columnWidths = (0, calculateMaximumColumnWidths_1.calculateMaximumColumnWidths)(rows, spanningCellConfigs);
    return rows[0].map((_, columnIndex) => {
        return {
            alignment: 'left',
            paddingLeft: 1,
            paddingRight: 1,
            truncate: Number.POSITIVE_INFINITY,
            verticalAlignment: 'top',
            width: columnWidths[columnIndex],
            wrapWord: false,
            ...columnDefault,
            ...columns === null || columns === void 0 ? void 0 : columns[columnIndex],
        };
    });
};
/**
 * Makes a new configuration object out of the userConfig object
 * using default values for the missing configuration properties.
 */
const makeTableConfig = (rows, config = {}, injectedSpanningCellConfig) => {
    var _a, _b, _c, _d, _e;
    (0, validateConfig_1.validateConfig)('config.json', config);
    (0, validateSpanningCellConfig_1.validateSpanningCellConfig)(rows, (_a = config.spanningCells) !== null && _a !== void 0 ? _a : []);
    const spanningCellConfigs = (_b = injectedSpanningCellConfig !== null && injectedSpanningCellConfig !== void 0 ? injectedSpanningCellConfig : config.spanningCells) !== null && _b !== void 0 ? _b : [];
    const columnsConfig = makeColumnsConfig(rows, config.columns, config.columnDefault, spanningCellConfigs);
    const drawVerticalLine = (_c = config.drawVerticalLine) !== null && _c !== void 0 ? _c : (() => {
        return true;
    });
    const drawHorizontalLine = (_d = config.drawHorizontalLine) !== null && _d !== void 0 ? _d : (() => {
        return true;
    });
    return {
        ...config,
        border: (0, utils_1.makeBorderConfig)(config.border),
        columns: columnsConfig,
        drawHorizontalLine,
        drawVerticalLine,
        singleLine: (_e = config.singleLine) !== null && _e !== void 0 ? _e : false,
        spanningCellManager: (0, spanningCellManager_1.createSpanningCellManager)({
            columnsConfig,
            drawHorizontalLine,
            drawVerticalLine,
            rows,
            spanningCellConfigs,
        }),
    };
};
exports.makeTableConfig = makeTableConfig;
//# sourceMappingURL=makeTableConfig.js.map